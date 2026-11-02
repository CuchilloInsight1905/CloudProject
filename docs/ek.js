/* Sözlü için ek çalışma içerikleri: konu özetleri (5 madde), karıştırılanlar, görsel teşhis, hoca modu senaryoları. */

/* Her konunun "sözlüden önce bilmen gereken 5 madde"si */
const OZ = {
yas: ["Önce dişlenme dönemi: sadece süt → 6 yaş altı, karışık → 6–12, sadece daimi → 12+.",
  "Daimi diş kökünün 2/3–3/4’ü oluşunca sürer; apeks sürdükten 2–3 yıl sonra kapanır.",
  "Sürme: 6’lar ve alt 1’ler 6–7 • üst 1, alt 2 7–8 • üst 2 8–9 • alt 3 9–10 • 4’ler 10–11 • 5’ler ve üst 3 11–12 • 7’ler 12–13.",
  "6’ların ve alt 1’lerin apeksi 9–10, üst 1’in apeksi 10 yaşta kapanır.",
  "Cevabı gerekçeyle ve ±1 yaş aralığıyla ver."],
okuma: ["8 durak: yaş → sayı → konum → şekil/yapı → çürük/restorasyon → pulpa-periapeks-furkasyon → ardıl germ → kemik.",
  "Her bulguya FDI numarası ver (süt: 51–55, 61–65, 71–75, 81–85).",
  "Süt molarda enfeksiyon ilk furkasyonda görülür; 1/3’ü geçerse çekim.",
  "Ardıl germde bak: var mı, kökü ne kadar, üstünde kemik var mı, folikül geniş mi.",
  "Panoramikte ön bölge bulanıktır; konum için okluzal/periapikal (SLOB) veya KIBT."],
meziodens: ["Meziodens: üst santraller arasında en sık süpernümerer diş; en sık konik.",
  "Yer tespiti: okluzal/periapikal ile SLOB kuralı veya KIBT.",
  "Çekim: santral sürmesini engelliyor, rotasyon/diastema/kist/rezorpsiyon, ortodonti planı, sürmüşse. Yoksa takip.",
  "Erken çekim (6–7 y) sürmeyi kolaylaştırır; geç çekim (8–10 y) köke zarar riskini azaltır.",
  "Natal diş: doğumda var; stabilse koru, aşırı mobilse çek (önce K vitamini). Riga-Fede: dil altı ülser."],
yt: ["Yer kaybı en çok ilk 6 ayda ve üst çenede olur.",
  "Ardıl var + kökünün 1/3’ü oluşmamış + üstünde kemik var → yer tutucu.",
  "Tek taraf tek diş → bant-loop; destek çürük → kron-loop; 6 sürmeden E kaybı → distal shoe.",
  "İki taraflı: altta lingual ark (kesiciler sürmüşse), üstte Nance veya TPA.",
  "Bant-loop: 0,9 mm tel, loop premolardan geniş, dişetinden 1–1,5 mm uzak, 6 ayda kontrol."],
bicim: ["Biçim anomalileri: Carabelli, taurodontizm, talon, dens evaginatus, mine incisi, dilaserasyon, konkresans, geminasyon, füzyon, dens in dente.",
  "Füzyon: iki germ birleşir, diş sayısı 1 eksik. Geminasyon: tek germ bölünür, sayı normal.",
  "Konkresans: sadece sement ile birleşme.",
  "Taurodont: pulpa odası uzun, furkasyon apikalde. Dilaserasyon: kökte keskin kıvrım (travma).",
  "Dens in dente en sık üst lateralde; palatinal çukura profilaktik fissür örtücü."],
talon: ["Kesicinin singulumundan insizale uzanan ek tüberkül (kartal pençesi).",
  "En sık üst lateral; içinde pulpa uzantısı olabilir.",
  "Hattab: Tip 1 talon, Tip 2 semi-talon, Tip 3 trace talon.",
  "Sorunlar: okluzal interferans, oluklarda çürük, estetik, dil irritasyonu.",
  "Tedavi: fissür örtücü, 6–8 hafta arayla kademeli aşındırma + florür; pulpa açılırsa pulpa tedavisi."],
turner: ["Süt dişi enfeksiyonu veya travmasının altındaki daimi germde yaptığı lokal hipoplazi.",
  "En sık alt premolarlar (süt molar enfeksiyonu) ve üst santraller (süt kesici travması).",
  "Tek diş, asimetrik, sarı-kahve çukurlu mine.",
  "Ayırıcı tanı: MIH (6’lar ± kesiciler), florozis (yaygın, simetrik), AI (tüm dişler).",
  "Tedavi: mikroabrazyon → kompozit → kron; önleme: süt dişi enfeksiyonunu zamanında tedavi et."],
mih: ["Bir veya daha fazla 1. daimi molar + sıklıkla kesiciler; sistemik kökenli hipomineralizasyon.",
  "Bu dişlerin mineralizasyonu aynı dönemde (doğum civarı – ilk 3 yaş).",
  "Etiyoloji çok faktörlü: prenatal, perinatal, postnatal ilk 3 yıl hastalıkları, antibiyotikler, genetik.",
  "Klinik: sınırları belirgin opasite, posteruptif yıkım, hassasiyet, anestezi güçlüğü.",
  "Tedavi: koruyucu → CİS/kompozit → PÇK → çekim (8,5–10 yaş)."],
kron: ["Andreasen: mine çatlağı, komplike olmayan kron kırığı, komplike kron kırığı, kron-kök, kök kırığı.",
  "Komplike = pulpa açık. İmmatür dişte hedef pulpayı canlı tutmak (apeksogenez).",
  "DPK: küçük ekspoz ve hemen gelindiyse. Cvek: 2 mm’den büyük ekspoz veya geç gelindiyse (1–2 mm pulpa alınır).",
  "Kırık parça varsa rehidrate edip yapıştır (reattachment); dudak yarasında dudak filmi.",
  "Takip: 6–8 hafta, 3 ay, 6 ay, 1 yıl, sonra 5 yıl yılda bir."],
apeks: ["Apeksogenez: pulpa canlı, kök gelişimi sürer (DPK, KH/MTA amputasyonu, Cvek).",
  "Apeksifikasyon: pulpa nekrotik, açık apekse kalsifiye bariyer.",
  "KH ile 6–24 ay (1–3 ayda bir yenile) veya MTA ile tek seans 3–5 mm tıkaç.",
  "Apeksogenezde kök uzar ve kalınlaşır; apeksifikasyonda ince kalır, kırık riski yüksek.",
  "Açık apekste çalışma boyu 1–2 mm kısa; kliniğimizde KH ve MTA."],
intruzyon: ["Bulgu: diş kısa, mobil değil, metalik perküsyon sesi, PDL aralığı kaybolmuş.",
  "Matürde ≤3 mm: bekle (8 hafta); 3–7 mm: cerrahi/ortodontik; >7 mm: cerrahi repozisyon.",
  "Esnek splint 4 hafta.",
  "Matür dişte nekroz kesin: 2 hafta içinde kanal tedavisi, kanala KH.",
  "İmmatür dişte miktardan bağımsız kendiliğinden sürmeyi bekle."],
anestezi: ["Kliniğimizde artikain %4 + epinefrin 1:100.000 / 1:200.000.",
  "Vazokonstriktör: süreyi uzatır, toksisiteyi ve kanamayı azaltır.",
  "Maks doz: artikain 7 mg/kg, lidokain 4,4 mg/kg; artikain 4 yaş altında önerilmez.",
  "Çocukta en sık komplikasyon: uyuşukken dudak/yanak ısırma.",
  "En sık sistemik komplikasyon: psikojenik senkop."],
pat: ["Kliniğimizde Vitapex: kalsiyum hidroksit + iyodoform + silikon yağı.",
  "Süt dişi patı rezorbe olmalı, radyoopak olmalı, daimi germe zararsız olmalı.",
  "Süt dişinde güta perka kullanılmaz; ZOE taşarsa rezorbe olmaz.",
  "Çalışma boyu apeksten 1 mm kısa (rezorpsiyon varsa 1,5–2 mm), 30–35 numaraya kadar genişlet.",
  "Şırınga apeksten 1 mm geride, pat taşınca geri çek; üstüne PÇK."],
agri: ["Parasetamol 10–15 mg/kg, 4–6 saatte bir.",
  "İbuprofen 5–10 mg/kg, 6–8 saatte bir, tok karnına.",
  "mL = (kilo × mg/kg) ÷ (mg/mL): 20 kg ibuprofen 100 mg/5 mL → 10 mL.",
  "16 yaş altı aspirin yok (Reye), 12 yaş altı kodein yok.",
  "Ağrıya antibiyotik yazılmaz; asıl tedavi dişin tedavisi."],
ie: ["Yüksek risk: protez kapak, geçirilmiş IE, onarılmamış siyanotik KKH, protez materyalle onarımda ilk 6 ay.",
  "Dişeti, periapeks manipülasyonu veya mukoza perforasyonunda profilaksi.",
  "Alerji yok: amoksisilin 50 mg/kg, işlemden 30–60 dk önce tek doz.",
  "Alerji var (okul): klindamisin 20 mg/kg, azitromisin/klaritromisin 15 mg/kg, sefaleksin 50 mg/kg.",
  "Anafilaksi/ürtiker öyküsünde sefalosporin yok; AHA 2021: klindamisin çıktı, doksisiklin girdi."],
davranis: ["Basit yöntemler: ses kontrolü, sözsüz iletişim, anlat-göster-uygula, pozitif pekiştirme, ebeveyn varlığı/yokluğu, dikkat dağıtma.",
  "Anlat-göster-uygula: çocuk diliyle anlat, göster/dokundur, hemen uygula.",
  "Pozitif pekiştirme davranıştan hemen sonra, somut övgüyle.",
  "Amaç: dikkati toplamak, olumsuz davranışı önlemek, iletişimi sağlamak.",
  "İleri yöntemler: ağız açıcı, immobilizasyon, sedasyon, genel anestezi."],
remin: ["Demineralize mineye Ca ve P iyonlarının geri kazandırılması.",
  "Kritik pH: hidroksiapatit 5,5, florapatit 4,5.",
  "Ajanlar: florür, CPP-ACP, kalsiyum sodyum fosfosilikat (Novamin).",
  "Vernik %5 NaF (%2,26 F), APF jel %1,23.",
  "CPP-ACP süt proteini alerjisinde kontrendike."],
fo: ["Endikasyon: derin-dar fissür, orta-yüksek risk, kesicilerin lingual pitleri, kavitesiz dekalsifikasyon.",
  "Kontrendikasyon: sığ fissür, arayüz çürüğü, sürmeden 4 yıldan fazla geçmesi.",
  "Kuşaklar: 1 UV, 2 otopolimerizan, 3 görünür ışık, 4 florür salan.",
  "Adımlar: temizle, izole et, %37 asit 15–30 sn, yıka, tebeşir beyazına kadar kurut, uygula, 20 sn ışık, kontrol.",
  "Kısmen sürmüş dişte cam iyonomer örtücü."]
};

/* Karıştırılanlar: maddeyi doğru tarafa yerleştir */
const KARIS = [
{ ad: "Apeksogenez – Apeksifikasyon", taraf: ["Apeksogenez", "Apeksifikasyon"], m: [
  ["Pulpa canlıdır", 0], ["Pulpa nekrotiktir", 1], ["Kök boyu uzar, duvarlar kalınlaşır", 0], ["Kök duvarları ince kalır", 1],
  ["Cvek, DPK, KH/MTA amputasyonu ile yapılır", 0], ["MTA ile 3–5 mm apikal tıkaç", 1], ["Apeks fizyolojik kapanır", 0], ["Kalsifiye bariyer oluşur", 1], ["KH 1–3 ayda bir yenilenir, 6–24 ay sürer", 1], ["Hertwig epitel kını canlılığını korur", 0]] },
{ ad: "Füzyon – Geminasyon – Konkresans", taraf: ["Füzyon", "Geminasyon", "Konkresans"], m: [
  ["İki ayrı germ dentin düzeyinde birleşir", 0], ["Tek germ ikiye bölünmeye çalışır", 1], ["Sadece sement ile birleşme", 2],
  ["Diş sayısı bir eksik", 0], ["Diş sayısı normal", 1], ["Tek kök, tek kanal, çatallı kron", 1], ["En sık üst molarlarda, çekimde sorun", 2], ["Ardıl daimi diş eksikliği sık", 0]] },
{ ad: "Turner – MIH – Florozis", taraf: ["Turner", "MIH", "Florozis"], m: [
  ["Tek dişte görülür", 0], ["1. daimi molarlar ± kesiciler", 1], ["Çok sayıda dişte simetrik", 2],
  ["Süt dişi enfeksiyonu veya travması", 0], ["Doğum civarı–ilk 3 yaş sistemik sorunlar", 1], ["Fazla florür alımı", 2],
  ["Sınırları belirgin opasite, posteruptif yıkım", 1], ["Sınırları belirsiz beyaz çizgi ve lekeler", 2], ["En sık alt premolarda", 0], ["Anestezi güçlüğü ve hassasiyet", 1]] },
{ ad: "Selülit – Apse", taraf: ["Selülit", "Apse"], m: [
  ["Akut seyir", 0], ["Kronik seyir", 1], ["Şiddetli, yaygın ağrı", 0], ["Lokalize ağrı", 1], ["Hamur kıvamında", 0], ["Fluktuan", 1],
  ["Pü yok", 0], ["Pü var", 1], ["Aerobik bakteri", 0], ["Anaerobik bakteri", 1], ["Daha ciddi", 0]] },
{ ad: "DPK – Cvek (parsiyel pulpotomi)", taraf: ["Direkt pulpa kuafajı", "Cvek"], m: [
  ["Açıklık 1,5–2 mm’ye kadar ve hasta hemen geldi", 0], ["Açıklık 2 mm’den büyük", 1], ["Küçük açıklık ama geç başvuru", 1],
  ["1–2 mm pulpa dokusu uzaklaştırılır", 1], ["Pulpa dokusu alınmaz, doğrudan örtülür", 0], ["Hücreden zengin koronal pulpa korunur", 1]] },
{ ad: "Bant-loop – Distal shoe – Lingual ark – Nance", taraf: ["Bant-loop", "Distal shoe", "Lingual ark", "Nance"], m: [
  ["6 ağızda, tek taraflı tek süt molar kaybı", 0], ["6 sürmeden süt 2. molar kaybı", 1], ["Alt çenede iki taraflı kayıp", 2], ["Üst çenede iki taraflı kayıp, palatinal akrilik buton", 3],
  ["Daimi kesiciler sürmeden yapılmaz", 2], ["İntraalveolar kanat 6’ya rehberlik eder", 1], ["0,9 mm tel, loop premolardan geniş", 0], ["Endokardit riskinde kontrendike", 1]] },
{ ad: "Parasetamol – İbuprofen", taraf: ["Parasetamol", "İbuprofen"], m: [
  ["10–15 mg/kg", 0], ["5–10 mg/kg", 1], ["4–6 saatte bir", 0], ["6–8 saatte bir, tok karnına", 1], ["Astım ve mide ülserinde verilmez", 1], ["Karaciğer hastalığında doz azaltılır", 0], ["Anti-inflamatuar etkisi var", 1]] },
{ ad: "PHGS – RAS", taraf: ["Primer herpetik gingivostomatit", "Rekürren aftöz stomatit"], m: [
  ["Vezikülle başlar", 0], ["Vezikülsüz başlar", 1], ["Dişeti gibi periosta bağlı mukozada", 0], ["Dudak, yanak gibi hareketli mukozada", 1], ["Etken HSV-1", 0], ["Lezyonlar daha büyük, çevresi sağlıklı", 1], ["2–5 yaşta sık", 0]] }
];

/* Görsel teşhis: görsel, doğru cevap, açıklama */
const TESHIS = [
["img/meziodens_rx.jpg", "Meziodens", "Üst santraller arasında konik süpernümerer dişler."],
["img/meziodens_klinik.jpg", "Meziodens", "Santraller arasında sürmüş küçük konik diş."],
["img/kleidokranial_pan.jpg", "Kleidokranial displazi", "Çok sayıda sürmemiş süpernümerer diş."],
["img/taurodont_rx.jpg", "Taurodontizm", "Pulpa odası apikale uzamış, furkasyon aşağıda."],
["img/dens_inv_sema.jpg", "Dens invaginatus", "Mine organının pulpaya katlanması (Oehlers tipleri)."],
["img/fuzyon.jpg", "Füzyon", "İki diş birleşik, geniş tek kron."],
["img/geminasyon.jpg", "Geminasyon", "Çentikli, çatallı tek kron."],
["img/konkresans.jpg", "Konkresans", "İki molar sadece sementle birleşik."],
["img/talon_rx.jpg", "Talon tüberkülü", "Kesici kronunda V/Y şeklinde ek radyoopasite."],
["img/mih.jpg", "MIH", "1. molarda sınırları belirgin sarı-kahve opasite ve yıkım."],
["img/florozis.jpg", "Florozis", "Çok dişte simetrik, sınırları belirsiz beyaz lekeler."],
["img/kok_kirigi_rx.jpg", "Kök kırığı", "Kökte yatay radyolüsens hat."],
["img/dentijeroz_pan.jpg", "Dentijeröz kist", "Gömülü diş kronunu saran radyolüsens alan."],
["img/hipodonti_pan.jpg", "Hipodonti", "Kadranlarda germ eksiklikleri."],
["img/pulpotomi_sonra.jpg", "Pulpotomi yapılmış diş", "Pulpa odasında radyoopak siman, kanallar boş."],
["img/riga_fede.jpg", "Riga-Fede", "Natal/neonatal dişe bağlı dil altı ülser."],
["img/pck.jpg", "Paslanmaz çelik kron", "Süt azısına simante edilecek prefabrik metal kron."],
["img/trv_avulsiyon_klinik.jpg", "Avülsiyon", "11'in soketi boş ve kanamalı; diş tamamen çıkmış."],
["img/trv_avulsiyon_rx.jpg", "Avülsiyon", "Röntgende boş soket."],
["img/trv_splint.jpg", "Splintlenmiş replante diş", "Replantasyon sonrası pasif esnek tel-kompozit splint."],
["img/trv_ekstruzyon.jpg", "Ekstrüzyon", "11 komşularından uzun ve mobil."],
["img/trv_lateral.jpg", "Lateral lüksasyon", "Kron palatinale yer değiştirmiş, diş kilitli."],
["img/trv_intruzyon.jpg", "İntrüzyon", "22 kemiğe gömülmüş, komşularından kısa."],
["img/trv_intruzyon_rx.jpg", "İntrüzyon", "21 kısa görünür, PDL aralığı seçilmez."],
["img/trv_komplike.jpg", "Komplike kron kırığı", "Kırık yüzeyde pulpa açık."],
["img/trv_kronkok.jpg", "Kron-kök kırığı", "Kırık hattı dişeti altına iniyor, parçada basamak."]
];

/* Hoca modu: yaşa göre varsayımsal senaryo soruları (röntgendeki gerçek bulgu değildir) */
const HOCA_SENARYO = {
  kucuk: [
    { q: "Varsayalım bu çocukta 85 enfeksiyon nedeniyle çekilmek zorunda ve 6 henüz sürmemiş. Hangi yer tutucuyu yaparsın?", a: "Distal shoe (kılavuzlayan yer tutucu). 6 sürmeden süt 2. molar kaybında intraalveolar kanat 6’ya rehberlik eder; çekimden önce tasarlanıp çekim anında uygulanabilir. Endokardit riski, immünsüpresyon ve kötü hijyende kontrendike." },
    { q: "Varsayalım 3 yaşında, üst süt santrali travmayla 3 mm intrüze olmuş. Ne yaparsın?", a: "Süt dişi intrüzyonunda çoğunlukla kendiliğinden sürme beklenir (yaklaşık 6 ay). Kök daimi germe doğru itildiyse çekim düşünülür. Aileye Turner hipoplazisi riskini anlatır, takip ederim." },
    { q: "Bu yaştaki çocuk koltuğa oturmak istemiyor. Hangi davranış yönlendirme yöntemlerini kullanırsın?", a: "Anlat-göster-uygula, ses kontrolü, sözsüz iletişim, pozitif pekiştirme, dikkat dağıtma, ebeveyn varlığı/yokluğu. İlk randevuyu kısa ve kolay bir işlemle (muayene, florür) yaparım." }
  ],
  orta: [
    { q: "Varsayalım 84 derin çürük nedeniyle çekildi; 6 ağızda, 44’ün kökü henüz oluşmamış. Ne yaparsın?", a: "Ardıl mevcut, kökün 1/3’ü oluşmamış, üstünde kemik var → yer tutucu gerekir. Tek taraflı tek diş kaybı için bant-loop; destek diş çürüklü ise kron-loop. Yer kaybı ilk 6 ayda olduğu için hemen uygularım." },
    { q: "Varsayalım 11’de 1 saat önce 3 mm pulpa açıklığı olan kron kırığı var ve parça mevcut. Sınıflandır ve tedavi et.", a: "Komplike kron kırığı. Apeks açık → hedef apeksogenez. Açıklık 2 mm’den büyük olduğu için Cvek: rubber dam altında 1–2 mm pulpa alınır, kanama durdurulur, KH/MTA, CİS kaide; parça rehidrate edilip yapıştırılır. Takip 6–8 hafta, 3 ay, 6 ay, 1 yıl." },
    { q: "Bu çocuğun 6’larında sarı-kahve sınırlı opasiteler ve kırılmalar var. Teşhis ve tedavi?", a: "MIH. Koruyucu (florür vernik, CPP-ACP, fissür örtücü), restoratif (CİS, kompozit, PÇK), prognoz kötüyse 8,5–10 yaşta 7’nin furkasyonu kalsifiye olmaya başlayınca çekim + ortodonti." },
    { q: "Üst santraller arasında konik fazla diş görüyorsun ve santral sürmemiş. Ne yaparsın?", a: "Meziodens. Okluzal/periapikal (SLOB) veya KIBT ile yerini belirlerim. Santral sürmesini engellediği için cerrahi çekim; çekimden sonra santral 6–12 ayda sürmezse cerrahi açma ve ortodontik traksiyon." }
  ],
  buyuk: [
    { q: "Varsayalım 21 kök gelişimi tamamlanmış ve 5 mm intrüze. Tedavin?", a: "3–7 mm arası: cerrahi (tercih) veya ortodontik repozisyon, 4 hafta esnek splint. Matür dişte nekroz kesin olduğu için 2 hafta içinde kanal tedavisine başlar, KH koyarım. Takip: 2 hafta, 4 hafta, 6–8 hafta, 6 ay, 1 yıl." },
    { q: "Varsayalım bu hasta protez kalp kapağı olan bir çocuk ve çekim yapılacak. Penisilin alerjisi var. Ne verirsin?", a: "Okul tablosuna göre işlemden 30–60 dk önce oral tek doz: klindamisin 20 mg/kg veya azitromisin/klaritromisin 15 mg/kg; anafilaksi/ürtiker öyküsü yoksa sefaleksin 50 mg/kg. AHA 2021’de klindamisin yerine doksisiklin önerilir." },
    { q: "Kanal tedavisi gereken bir süt dişi var. Hangi patı nasıl kullanırsın?", a: "Vitapex (KH + iyodoform + silikon yağı). Çalışma boyu apeksten 1 mm kısa, 30–35 numaraya kadar genişletme, basınçsız irrigasyon, kurutma; şırınga ucu apeksten 1 mm geride, pat taşınca geri çekilir. Üstüne kaide ve PÇK. Güta perka kullanılmaz." },
    { q: "Hasta 30 kg ve ağrısı var. Ne reçete edersin, kaç mL?", a: "İbuprofen 10 mg/kg = 300 mg → 100 mg/5 mL süspansiyondan 15 mL, günde 3 kez tok karnına. Alternatif parasetamol 15 mg/kg = 450 mg → 120 mg/5 mL şuruptan 18,75 mL, günde 4 kez." }
  ]
};
