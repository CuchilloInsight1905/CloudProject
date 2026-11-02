/* Staj Defteri özel sürüm: şifreli dosyaları (e/*.bin) cihazdaki anahtarla çözüp app/ altında sunar. */
const E = 4194304 + 28, KASA = "sd-kasa", ONBELLEK = "sd-e-1";
let keyP = null;
function anahtar() {
  return keyP || (keyP = new Promise((res, rej) => {
    const r = indexedDB.open(KASA, 1);
    r.onupgradeneeded = () => r.result.createObjectStore("k");
    r.onerror = () => rej(r.error);
    r.onsuccess = () => { const q = r.result.transaction("k").objectStore("k").get("key"); q.onsuccess = () => q.result ? res(q.result) : rej(new Error("anahtar yok")); q.onerror = () => rej(q.error); };
  }).catch(e => { keyP = null; throw e; }));
}
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("message", e => { if (e.data === "anahtar") keyP = null; });
const TUR = { html: "text/html; charset=utf-8", js: "text/javascript; charset=utf-8", json: "application/json; charset=utf-8", jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", svg: "image/svg+xml", pdf: "application/pdf", css: "text/css", wasm: "application/wasm", txt: "text/plain; charset=utf-8" };
self.addEventListener("fetch", e => {
  const kok = self.registration.scope, u = new URL(e.request.url);
  if (e.request.method !== "GET" || !u.href.startsWith(kok + "app/")) return;
  let p = decodeURIComponent(u.pathname.slice(new URL(kok).pathname.length + 4));
  if (!p || p.endsWith("/")) p += "index.html";
  e.respondWith(sun(p, e.request));
});
async function getir(p) {
  const url = self.registration.scope + "e/" + p + ".bin", buyuk = p.startsWith("kb/");
  try {
    const r = await fetch(url, { cache: "no-cache" });
    if (r.ok && !buyuk) { const c = await caches.open(ONBELLEK); await c.put(url, r.clone()); }
    if (r.ok || r.status === 404) return r;
  } catch (e) {}
  const c = await caches.open(ONBELLEK), m = await c.match(url);
  return m || new Response("", { status: 504 });
}
async function sun(p, req) {
  let key;
  try { key = await anahtar(); } catch (e) { return req.mode === "navigate" ? Response.redirect(self.registration.scope, 302) : new Response("", { status: 403 }); }
  const r = await getir(p);
  if (!r.ok) return new Response("", { status: r.status });
  const rd = r.body.getReader(); let parca = [], boy = 0;
  const al = () => { const b = new Uint8Array(boy); let o = 0; for (const x of parca) { b.set(x, o); o += x.length; } parca = []; boy = 0; return b; };
  const coz = async ch => new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: ch.subarray(0, 12) }, key, ch.subarray(12)));
  const akis = new ReadableStream({
    async pull(ctl) {
      try {
        for (;;) {
          if (boy >= E) { const b = al(); const ch = b.subarray(0, E); if (b.length > E) { parca = [b.subarray(E)]; boy = b.length - E; } ctl.enqueue(await coz(ch)); return; }
          const { done, value } = await rd.read();
          if (done) { if (boy) ctl.enqueue(await coz(al())); ctl.close(); return; }
          parca.push(value); boy += value.length;
        }
      } catch (e) { ctl.error(e); }
    },
    cancel() { rd.cancel(); }
  });
  const uz = p.split(".").pop().toLowerCase();
  return new Response(akis, { headers: { "content-type": TUR[uz] || "application/octet-stream", "cache-control": "no-store" } });
}
