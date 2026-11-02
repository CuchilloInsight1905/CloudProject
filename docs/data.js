/* Pedo Kahramanları – içerik. Kaynak: staj notların (Not-1…5) + IADT 2020, AAPD, AHA. */
const CAST = {
  KP: { ad: "Kaptan Pedo", yuz: "🦸", renk: "blue" },
  ST: { ad: "Stajyer (sen)", yuz: "🧑‍⚕️", renk: "green" },
  HC: { ad: "Hoca", yuz: "🧑‍🏫", renk: "red" },
  CK: { ad: "Minik Ela", yuz: "👧", renk: "yellow" },
  AN: { ad: "Anne", yuz: "👩", renk: "yellow" },
  MZ: { ad: "Meziodens Mafya", yuz: "🦹", renk: "red" },
  YH: { ad: "Yer Hırsızı", yuz: "🥷", renk: "red" },
  TR: { ad: "Travma Tayfun", yuz: "🌪️", renk: "red" },
  EJ: { ad: "Endokardit Ejderi", yuz: "🐉", renk: "red" },
  KC: { ad: "Kaygı Canavarı", yuz: "👾", renk: "red" },
  DD: { ad: "Demineralizasyon Drakula", yuz: "🧛", renk: "red" },
  MH: { ad: "MIH Hayaleti", yuz: "👻", renk: "red" },
  CR: { ad: "Çürük Kont", yuz: "🦠", renk: "red" }
};

const DAYS = [
  { n: 1, ad: "Panoramik ve Anomaliler", alt: "Yaş tahmini, panoramikte teşhis, meziodens, yer tutucular, biçim anomalileri, talon, Turner, MIH" },
  { n: 2, ad: "Travma ve Klinik", alt: "Kron kırıkları, apeksogenezis–apeksifikasyon, intrüzyon, lokal anestezi, kanal patı, ağrı kesici, endokardit" },
  { n: 3, ad: "Koruyucu + Final Prova", alt: "Davranış yönlendirme, remineralizasyon, fissür örtücü; sonra 33 röntgen ve karışık sözlü" }
];

const T = [
/* ------------------------------------------------------------------ 1 */
{ id: "yas", gun: 1, ad: "Panoramikten Yaş Tahmini", rx: [0, 7, 22],
  komik: [
    { n: "Sözlü günü. Hoca masaya bir panoramik koyar ve tek bir soru sorar…" },
    { c: "HC", t: "Bu çocuk kaç yaşında?" },
    { c: "ST", t: "Ehm… çocuk… yaşında?" },
    { fx: "PANİK!" },
    { c: "KP", t: "Sakin! Üç soru sor: 1) Ağızda hangi dişler var? 2) Kemikte hangi germler bekliyor? 3) Köklerin ne kadarı oluşmuş?" },
    { c: "KP", t: "Altın kural: Daimi diş kökünün 2/3–3/4’ü oluşunca sürer. Apeks sürdükten ~2–3 yıl sonra kapanır." },
    { c: "ST", t: "6’lar ve alt 1’ler ağızda, üst 1’ler sürmek üzere, 6’ların kökü yarıda…" },
    { c: "KP", t: "O zaman ≈7 yaş! Sayıyı söylerken gerekçeni de söyle; hoca düşünce yolunu dinler." },
    { c: "HC", t: "Güzel. Peki 12 yaş dişi hangisi?" },
    { c: "ST", t: "İkinci daimi molar, 7’ler!" }
  ],
  bilgi: [
    "Önce dişlenme dönemi: Süt (≈2,5–6 y) • Erken karışık (6–9 y) • Geç karışık (9–12 y) • Daimi (12 y+).",
    "Daimi sürme: 6’lar ve alt 1’ler 6–7 y • üst 1 ve alt 2 7–8 y • üst 2 8–9 y • alt 3 9–10 y • 4’ler 10–11 y • 5’ler ve üst 3 11–12 y • 7’ler 12–13 y • 8’ler 17–21 y.",
    "Sürme sırası — Üst: 6-1-2-4-5-3-7 (veya 6-1-2-4-3-5-7) • Alt: 6-1-2-3-4-5-7. Altta kanin premolarlardan önce, üstte sonra.",
    "Kök tamamlanması (daimi): 6’lar ve alt 1’ler 9–10 y, üst 1 ~10 y, 2’ler 10–11 y, 4–5’ler 12–14 y, kaninler 13–15 y, 7’ler 14–16 y.",
    "Süt dişleri: ilk alt santral ~6 ay, son 2. süt molar ~2–2,5 y. 20 süt dişi 2,5–3 yaşta ağızda; kökleri ~3 yaşta biter. Süt dişi kökü sürmeden 1–1,5 yıl sonra tamamlanır.",
    "Mineralizasyon başlangıcı: 6’lar doğumda; kesiciler 3–4 ay (üst 2 10–12 ay); kanin 4–5 ay; 4’ler ~1,5–2 y; 5’ler ~2–2,5 y; 7’ler 2,5–3 y; 8’lerin kriptası 8–10 y.",
    "Nolla evreleri: 1 kripta • 2 ilk kalsifikasyon • 3 kronun 1/3’ü • 4 kronun 2/3’ü • 5 kron neredeyse tam • 6 kron tam • 7 kök 1/3 • 8 kök 2/3 (sürme zamanı) • 9 kök tam, apeks açık • 10 apeks kapalı.",
    "Cevap kalıbı: “Panoramikte … dişlenme dönemi; … dişler ağızda; … germlerinde kök gelişimi … düzeyinde; bu nedenle hasta yaklaşık … yaşında.” Tek sayı yerine ±1 yaş aralığı ver."
  ],
  kart: [
    ["Daimi diş kökünün ne kadarı oluşunca sürer?", "~2/3–3/4’ü oluşunca. Apeks sürmeden ~2–3 yıl sonra kapanır."],
    ["İlk süren daimi dişler hangileri, kaç yaşında?", "1. daimi molarlar ve alt santraller, ~6–7 yaş."],
    ["Üst ve alt çenede daimi sürme sırası?", "Üst: 6-1-2-4-5-3-7 • Alt: 6-1-2-3-4-5-7."],
    ["2. daimi molar kaç yaşında sürer?", "~12–13 yaş (12 yaş dişi)."],
    ["1. daimi moların mineralizasyonu ne zaman başlar?", "Doğumda. Kronu ~3 yaşta tamamlanır."],
    ["Nolla 8. evre?", "Kökün 2/3’ü oluşmuş; dişin sürme zamanı civarı."],
    ["Süt dişlenme kaç yaşında tamamlanır?", "2,5–3 yaşta 20 süt dişi ağızda; kökler ~3 yaşta biter."]
  ],
  sozlu: [
    { q: "Panoramikte 6’lar ve 4 alt kesici ağızda, üst santraller sürmek üzere, alt kaninlerin kronu tamam ama kökü yok. Yaş kaç, neden?", a: "≈7 yaş, erken karışık dişlenme. 6’lar ve alt kesiciler 6–7 yaşta sürer; üst santral 7–8 yaşta sürer ve henüz sürmekte. Alt kaninin kronu 6–7 yaşta biter, kökü başlamamış. 6’ların kökleri yarı gelişmiş, apeksleri açık." },
    { q: "Yaş tahmini yaparken panoramikte nelere bakarsın?", a: "1) Dişlenme dönemi 2) Ağızdaki dişler ve sürme kronolojisi 3) Kemikteki germlerin kron-kök gelişimi (Nolla/Demirjian) 4) Apeks açık mı kapalı mı 5) Süt dişi kök rezorpsiyonu 6) 3. molar kriptası. Sonucu ±1 yaş aralıkla veririm; dental yaş kronolojik yaştan farklı olabilir." }
  ],
  test: [
    { q: "Tüm süt dişleri ağızda, kökleri tam; 6 kronu tamam ama kök yok; 7 germinde ilk kalsifikasyon var. Yaş?", o: ["~1,5 yaş", "~3–4 yaş", "~6 yaş", "~8 yaş"], c: 1, w: "Süt dişlenme 3 yaşta biter, 6’nın kronu ~3 yaşta tamamlanır, 7’nin kalsifikasyonu 2,5–3 yaşta başlar." },
    { q: "Altta sıra 6-1-2-3-4-5-7 ise üstte en olası sıra?", o: ["6-1-2-3-4-5-7", "6-1-2-4-5-3-7", "1-2-3-6-4-5-7", "6-1-2-5-4-3-7"], c: 1, w: "Üst kanin premolarlardan sonra, 11–12 yaşta sürer." },
    { q: "7’ler ağızda ama apeksleri açık, süt dişi kalmamış, 8 kronları oluşuyor. Yaş?", o: ["9–10", "10–11", "12–14", "17–18"], c: 2, w: "7’ler 12–13 yaşta sürer, apeksleri 14–16 yaşta kapanır." }
  ],
  kod: ["“6’da 6, 7’de 1, 8’de 2” — sonra 3-4-5 dans eder, 12’de 7 gelir.", "Kökün 2/3’ü = diş ağza “2/3 biletle” girer.", "Üst kanin tembeldir: premolarlardan sonra kalkar."]
},
/* ------------------------------------------------------------------ 2 */
{ id: "okuma", gun: 1, ad: "Panoramikte Teker Teker Teşhis", rx: [9, 19, 26],
  komik: [
    { c: "HC", t: "Şimdi bu panoramikteki bütün teşhisleri tek tek söyle." },
    { c: "ST", t: "Burada otuz tane bulgu var, nereden başlasam?" },
    { c: "KP", t: "Dedektif rotası: 8 durak. Hep aynı sırayla gez, hiçbir şey kaçmaz." },
    { n: "Yaş → Sayı → Konum → Şekil/Yapı → Çürük ve restorasyon → Pulpa, periapeks, furkasyon → Ardıl germler → Kemik ve diğer" },
    { c: "KP", t: "İpucu: Süt molarında enfeksiyon önce FURKASYONDA radyolüsensi yapar, apekste değil!" },
    { c: "ST", t: "84’te furkasyon radyolüsensisi var, 44 germinin üstündeki kemik incelmiş…" },
    { c: "HC", t: "Tedavi?" },
    { c: "ST", t: "84 çekim, sonra 44’ün kök gelişimine ve üstündeki kemiğe bakıp yer tutucu kararı." },
    { fx: "TEŞHİS!" }
  ],
  bilgi: [
    "8 durak: 1 Yaş/dönem → 2 Sayı (her kadranı say: hipodonti, süpernümerer) → 3 Konum (rotasyon, enversiyon, ektopi, gömülü, infraoklüzyon/ankiloz) → 4 Şekil-yapı (füzyon, talon, taurodont, MIH/AI görüntüsü) → 5 Çürük ve restorasyon (kompozit, amalgam, PÇK, kanal dolgusu, yer tutucu) → 6 Pulpa, periapeks, furkasyon → 7 Ardıl germler → 8 Kemik, kist, sinüs, kondil.",
    "FDI: Süt dişleri üst sağ 51–55, üst sol 61–65, alt sol 71–75, alt sağ 81–85. Daimi 11–18, 21–28, 31–38, 41–48.",
    "Süt molarında pulpa tabanı ince ve aksesuar kanal çok; enfeksiyon önce furkasyonda kemik yıkımı yapar. Furkasyonda radyolüsensi 1/3’ü aşmışsa çekim endikasyonu (okul notu).",
    "Kök rezorpsiyonu: fizyolojik (ardıl sürüyor) mu, patolojik (internal/eksternal, enfeksiyon) mu ayır. Kökün 2/3’ü rezorbe ise endodonti yapılmaz.",
    "Ardıl germ: var mı (en sık eksik: alt 2. premolar, üst lateral), folikül genişlemiş mi (dentijeröz kist), üstü kemikle örtülü mü, kökü ne kadar oluşmuş (yer tutucu kararı).",
    "İnfraoklüzyon: süt molarının komşulardan aşağıda kalması → ankiloz şüphesi; ardıl eksikliğiyle sık birliktedir.",
    "Panoramiğin sınırları: ön bölge bulanık (fokal oluk), süperpozisyon ve distorsiyon. Bukkal-palatinal konum için okluzal/periapikal film (SLOB) veya KIBT gerekir.",
    "Sunum kalıbı: “… yaşında, karışık dişlenme dönemindeki hastanın panoramiğinde: 55 ve 65’te pulpaya yakın derin çürük; 84’te furkasyonda radyolüsensi; üst santraller arasında konik süpernümerer diş (meziodens)…” Her bulguya diş numarası ver."
  ],
  kart: [
    ["Panoramik okuma rotasının 8 durağı?", "Yaş → Sayı → Konum → Şekil/yapı → Çürük/restorasyon → Pulpa-periapeks-furkasyon → Ardıl germler → Kemik/diğer."],
    ["Süt molarında enfeksiyon radyografide ilk nerede görülür?", "Furkasyonda (ince pulpa tabanı, aksesuar kanallar)."],
    ["Üst sol ikinci süt molarının FDI numarası?", "65."],
    ["En sık konjenital eksik daimi dişler (3. molar hariç)?", "Alt 2. premolar ve üst lateral kesici."],
    ["İnfraoklüzyondaki süt molarında ne düşünürsün?", "Ankiloz; ardıl germ eksikliğini kontrol et."],
    ["Panoramiğin ön bölgedeki zayıflığı?", "Fokal oluk dar olduğu için ön bölge bulanık ve dar görünür; okluzal/periapikal ile destekle."]
  ],
  sozlu: [
    { q: "Panoramikte teşhisleri koyarken hangi sırayı izlersin?", a: "Önce yaşı ve dişlenme dönemini söylerim. Sonra her kadranda diş sayısı, konum anomalileri, şekil ve yapı anomalileri, çürük ve restorasyonlar, pulpa-periapeks-furkasyon bulguları, ardıl germlerin durumu ve son olarak kemik, kist, sinüs gibi diğer bulgular. Her bulguya FDI numarası veririm." },
    { q: "Süt molarında apekste değil furkasyonda radyolüsensi görülmesinin nedeni?", a: "Süt molarında pulpa tabanı ince ve geçirgendir, furkasyon bölgesinde çok sayıda aksesuar kanal bulunur. Ayrıca ardıl germ kökler arasında yer alır. Bu yüzden pulpa kaynaklı enfeksiyon ilk olarak furkasyonda kemik yıkımı yapar." }
  ],
  test: [
    { q: "Süt molarında pulpa kaynaklı enfeksiyonun radyografide ilk görüldüğü yer?", o: ["Apeks", "Furkasyon", "Marjinal kemik", "Kron"], c: 1, w: "İnce pulpa tabanı ve aksesuar kanallar nedeniyle furkasyon." },
    { q: "Alt sağ birinci süt molarının FDI numarası?", o: ["74", "84", "64", "54"], c: 1, w: "Alt sağ süt kadranı 8x: 84." }
  ],
  kod: ["“Yaşlı Sayı Konuşur, Şekilci Çürük Pulpasını Ardıl Kemiğe verir” = Yaş-Sayı-Konum-Şekil-Çürük-Pulpa-Ardıl-Kemik."]
},
/* ------------------------------------------------------------------ 3 */
{ id: "meziodens", gun: 1, ad: "Meziodens, Enversiyon, Rotasyon, Prematür Erüpsiyon", rx: [4, 17, 21],
  komik: [
    { n: "Üst santraller arasında, orta hatta saklanan bir kötü adam…" },
    { c: "MZ", t: "Ben Meziodens! Santrallerin yolunu keserim, onları döndürürüm, araya diastema koyarım!" },
    { c: "MZ", t: "İstersem ters dönerim, kronum buruna bakar. Buna ENVERSİYON derler!" },
    { c: "KP", t: "Önce yerini bul: panoramik + okluzal/periapikal film, SLOB kuralı ya da KIBT." },
    { c: "ST", t: "Hemen çekelim mi?" },
    { c: "KP", t: "Santral sürmesini engelliyorsa, rotasyon-diastema-kist-kök rezorpsiyonu yapıyorsa ya da ortodonti planlanıyorsa evet. Sessizse takip." },
    { c: "KP", t: "Erken çekim (6–7 y) santrale kendiliğinden sürme şansı verir. Geç çekim (8–10 y) gelişen köklere zarar riskini azaltır." },
    { n: "Bir de bebek kliniğinde…" },
    { c: "AN", t: "Bebeğim dişle doğdu, emzirirken dilinin altı yara oldu!" },
    { c: "KP", t: "Natal diş ve Riga-Fede! Diş sağlamsa koru, kenarlarını yuvarla. Aşırı mobilse çek, ama önce K vitamini yapıldı mı sor!" },
    { fx: "YAKALANDIN!" }
  ],
  bilgi: [
    "Meziodens: üst santraller arasında, orta hatta en sık süpernümerer diş (~%0,15–1,9; erkeklerde ~2 kat). Şekil: konik (en sık, sürebilir), tüberküllü (genelde sürmez, santrali geciktirir), molariform. Tek/çift olabilir; ters (enverte) olabilir.",
    "Belirtiler: santralin sürmesinde gecikme (karşı taraf sürdükten 6 ay sonra hâlâ yok), asimetrik sürme, diastema, rotasyon, yer değiştirme, kist, kök rezorpsiyonu, buruna sürme.",
    "Yer tespiti: SLOB/Clark kuralı (tüp kayınca cisim aynı yöne gidiyorsa lingual/palatinal, ters yöne gidiyorsa bukkal), okluzal film, KIBT.",
    "Çekim endikasyonları: santral sürmesini geciktirme/engelleme, komşuda rotasyon-yer değişikliği-diastema, kök rezorpsiyonu, kistik değişiklik, ortodontik tedavi planı, sürmüş meziodens, buruna doğru göç.",
    "Takip: asemptomatik, komşulara zarar yok, sürme normal, ortodonti planı yok → periyodik radyografik kontrol.",
    "Zamanlama: Erken çekim (6–7 y): santral kendiliğinden sürer, ortodonti ihtiyacı azalır; risk: gelişen köke zarar, kooperasyon. Geç çekim (8–10 y, komşu kökler 2/3): germ hasarı riski az; ama yer kaybı, orta hat kayması, sürme gücü azalır.",
    "Çekimden sonra santral 6–12 (18) ay içinde sürmezse: cerrahi açma + ortodontik traksiyon; yer kaybı varsa yer açılır/korunur.",
    "Enversiyon: dişin ters konumu (kron apikale/buruna bakar). Enverte meziodens kendiliğinden sürmez, nazal tabana göç edebilir; patoloji varsa palatinal yaklaşımla cerrahi çekim, yoksa takip.",
    "Rotasyon: diş kendi uzun ekseni etrafında döner. Neden: meziodens, yer darlığı, germ konumu. Tedavi: nedeni kaldır, ortodontik düzeltme (sabit/hareketli), retansiyon (relaps yüksek; suprakrestal fiberotomi).",
    "Natal diş doğumda var, neonatal diş ilk 30 günde çıkar. En sık alt süt santraller; %90+ normal süt dişinin erken sürmesi. Kök gelişmemiş, mobil. Riga-Fede: dil altında ülser.",
    "Natal/neonatal tedavi: süt dişiyse koru, kenarları yuvarla. Çekim: aşırı mobilite (aspirasyon riski), süpernümerer olması, beslenme sorunu, geçmeyen Riga-Fede. Çekimden önce K vitamini (ilk 10 gün hipoprotrombinemi); çekimden sonra papillayı küret et.",
    "Daimi dişte prematür erüpsiyon (okul notu): hipertiroidizm, erken puberte, Ehlers-Danlos ve süt dişinin enfeksiyon nedeniyle erken çekimi. Enfeksiyon kemiği yıkınca premolar kökü az gelişmişken erken sürer: mobil olabilir, Turner hipoplazisi eşlik edebilir; takip + florür."
  ],
  kart: [
    ["En sık süpernümerer diş?", "Meziodens (üst santraller arası)."],
    ["Meziodensin en sık şekli?", "Konik. Tüberküllü olan genelde sürmez ve santrali geciktirir."],
    ["SLOB kuralı?", "Same Lingual, Opposite Buccal: tüp kaydırıldığında cisim aynı yöne gidiyorsa lingual/palatinal, ters yöne gidiyorsa bukkal."],
    ["Meziodens çekim zamanlaması: erken mi geç mi?", "Erken (6–7 y): santral kendiliğinden sürer, kök hasarı riski var. Geç (8–10 y): germ hasarı az, yer kaybı riski."],
    ["Enversiyon nedir?", "Dişin ters (kron apikale/buruna bakacak) konumlanması."],
    ["Natal ve neonatal diş farkı?", "Natal: doğumda var. Neonatal: ilk 30 günde çıkar."],
    ["Riga-Fede nedir?", "Natal/neonatal dişin dil altında yaptığı travmatik ülser."],
    ["Natal diş çekiminden önce ne sorulur?", "K vitamini yapıldı mı (ilk 10 gün hipoprotrombinemi riski)."]
  ],
  sozlu: [
    { q: "Panoramikte üst santraller arasında ters duran konik bir diş görüyorsun. Teşhis ve tedavi?", a: "Enverte (ters) konumlu meziodens. Okluzal/periapikal film ile SLOB veya KIBT ile yerini belirlerim. Santral sürmesini engelliyor, rotasyon, diastema, kist ya da kök rezorpsiyonu yapıyorsa veya ortodonti planlanıyorsa palatinal yaklaşımla cerrahi çekim yaparım. Asemptomatikse radyografik takip. Çekimden sonra santral 6–12 ayda sürmezse cerrahi açma ve ortodontik traksiyon." },
    { q: "Meziodens çekimi için endikasyonlar nelerdir?", a: "Santralin sürmesinde gecikme veya engel, komşu dişte rotasyon-yer değişikliği-diastema, kök rezorpsiyonu, kistik değişiklik, ortodontik tedavi planı, sürmüş meziodens ve nazal kaviteye göç." },
    { q: "Yenidoğanda natal diş: ne yaparsın?", a: "Süt dişi mi süpernümerer mi radyografiyle bakarım. Stabil ise korurum, keskin kenarları yuvarlarım; Riga-Fede varsa kenar düzeltme/kompozit. Aşırı mobil (aspirasyon riski), süpernümerer, beslenmeyi bozuyor veya Riga-Fede geçmiyorsa çekerim. Çekimden önce K vitamini yapılmış olmalı; çekimden sonra papilla kalıntısını küretle temizlerim." }
  ],
  test: [
    { q: "Ters konumlu meziodens için doğru ifade?", o: ["Kendiliğinden kolayca sürer", "Nazal kaviteye doğru göç edebilir", "Hiçbir zaman çekilmez", "Sadece alt çenede görülür"], c: 1, w: "Enverte meziodens sürmez, buruna doğru göç edebilir." },
    { q: "Natal diş için yanlış olan?", o: ["En sık alt süt santraldir", "Çoğu normal süt dişidir", "Çekim öncesi K vitamini sorulmalı", "Tamamı süpernümererdir, hemen çekilir"], c: 3, w: "%90’dan fazlası erken sürmüş normal süt dişidir." },
    { q: "Meziodensin geç (8–10 y) çekiminin avantajı?", o: ["Santral daha kolay sürer", "Gelişen köklere zarar riski azdır", "Yer kaybı olmaz", "Ortodonti hiç gerekmez"], c: 1, w: "Komşu kökler gelişmiş olduğu için cerrahi hasar riski azalır." }
  ],
  kod: ["SLOB: “Same Lingual, Opposite Buccal.”", "Meziodens 5 suç işler: Gecikme, Diastema, Rotasyon, Kist, Rezorpsiyon → “GeDiRoKiRe”."]
},
/* ------------------------------------------------------------------ 4 */
{ id: "yt", gun: 1, ad: "Yer Tutucular ve Bant-Loop", rx: [5, 15, 20],
  komik: [
    { n: "84 çekildi. Boşlukta bir gölge belirir…" },
    { c: "YH", t: "Ben Yer Hırsızı! İlk 6 ayda boşluğu çalarım: 6’yı meziale devirir, premoların yerini kapatırım!" },
    { c: "KP", t: "Önce sorgu: Ardıl var mı? Kökünün ne kadarı oluşmuş? Üstünde kemik var mı? Yer var mı?" },
    { c: "ST", t: "44 var, kökü 1/3 bile değil, üstünde kalın kemik var!" },
    { c: "KP", t: "O zaman yer tutucu şart. Tek taraflı tek diş kaybı → BANT-LOOP!" },
    { c: "YH", t: "Ya destek diş çürükse?" },
    { c: "KP", t: "Kron-loop! 6 henüz sürmemişken 85 kaybıysa distal shoe; iki taraflı kayıpta lingual ark veya Nance!" },
    { fx: "YER KORUNDU!" }
  ],
  bilgi: [
    "Okulun sınıflaması: 1) Yarı sabit: bant-loop, kron-loop, kılavuzlayan yer tutucu (distal shoe) 2) Sabit: alt çenede lingual ark, Nance apareyi, transpalatal ark 3) Hareketli protezler. Diğer: direkt bonded sabit YT, fiber splint + kompozit, open face, EZ retainer.",
    "Planlama faktörleri (okul): çekimden sonra geçen süre (yer kaybı en çok ilk 6 ayda), mevcut yer, daimi dişin sürmesindeki gecikme, konjenital eksiklik, daimi dişin üzerindeki kemik (1 mm ≈ 4–6 ay), diş yaşı–biyolojik yaş, sürme sırası, ağız hijyeni, işbirliği, ebeveynin bilgilendirilmesi.",
    "Kök kuralı: daimi dişin kökünün 1/3’ü oluşmamışsa yer tutucu yapılmalı (okul notu). Kökün 2/3’ü oluşmuş ve üstünde kemik yoksa sürme yakındır, gerek yok.",
    "Bant-loop endikasyonları (okul): süt 2. azının erken kaybında 6 sürdükten sonra; aynı bölgede tek diş kaybı; 6 sürmeden önce süt 1. azının tek/çift taraflı kaybı; 6’lar ağızda ama daimi kesiciler yokken süt 1. veya 2. azının tek/çift taraflı kaybı; aşırı madde kaybı yoksa; diğer yer tutucular uygun değilse.",
    "Bant-loop yapımı: 0,9 mm (0,036”) paslanmaz çelik tel; loop ardıl premolardan geniş (~8 mm) olmalı; gingivadan 1–1,5 mm uzak; komşu dişin distaline kontur noktası altında temas; bant CİS ile simante. Kontrol 6 ayda bir; ardıl sürünce çıkarılır.",
    "Bant-loop avantaj: kolay, ucuz, tek seans. Dezavantaj: çiğneme fonksiyonu yok, antagonistin uzamasını önlemez, siman çözülmesi, lehim kırılması, rotasyonu önlemez.",
    "Kron-loop: destek diş geniş çürüklü veya pulpa tedavili, PÇK gerekiyorsa.",
    "Distal shoe (kılavuzlayan): 6 sürmeden önce süt 2. molar kaybı; intraalveolar kanat 6’nın meziyal yüzüne rehberlik eder. KE: endokardit riski, immünsüpresyon, kötü hijyen, kooperasyonsuzluk, çoklu kayıp.",
    "Lingual ark: alt, iki taraflı kayıp; daimi kesiciler sürdükten sonra yapılır (süt kesicilerin lingualinden sürerler). Nance: üst, palatinal akrilik buton. TPA: üst, damağa temas etmez; iki taraflı kayıpta tek başına zayıf.",
    "Hareketli yer tutucu: çoklu kayıp, ön bölge estetik ve fonasyon, kooperasyonlu çocuk. Kaide plağı stura palatina media ile alveol kemiğinin ortasında, rugaların bittiği yerde biter; tüber içine alınmaz (büyüme engellenir). Kontrol 1 hafta sonra.",
    "Yer tutucu KE: ardıl konjenital eksik (ortodontik karar), ardıl sürmek üzere, yer zaten kaybolmuş (yer kazanıcı gerekir), kötü hijyen/kooperasyon."
  ],
  kart: [
    ["Okula göre yer tutucu sınıfları?", "Yarı sabit (bant-loop, kron-loop, distal shoe) • Sabit (lingual ark, Nance, TPA) • Hareketli."],
    ["Yer kaybı en çok ne zaman olur?", "Çekimden sonraki ilk 6 ayda."],
    ["1 mm kemik örtü ardılın sürmesini ne kadar geciktirir?", "≈4–6 ay."],
    ["Bant-loop tel kalınlığı?", "0,9 mm (0,036 inç) paslanmaz çelik."],
    ["6 sürmeden 85 kaybedildi. Yer tutucu?", "Distal shoe (kılavuzlayan yer tutucu)."],
    ["Altta iki taraflı süt molar kaybı, kesiciler sürmüş?", "Lingual ark."],
    ["Lingual ark ne zaman yapılmaz?", "Daimi kesiciler sürmeden; lingualden sürerken engellenirler."],
    ["Destek diş geniş çürüklü, pulpotomili. Tek diş kaybı?", "Kron-loop."]
  ],
  sozlu: [
    { q: "8 yaşında hastada 84 çekildi, 44’ün kökü yok, üstünde kemik var. Ne yaparsın?", a: "Yer tutucu endikasyonu var: ardıl mevcut, kök gelişimi 1/3’ün altında, üstünde kemik var, sürmesine 6 aydan fazla var. Tek taraflı tek diş kaybı için 85 veya 46 destekli bant-loop yaparım; destek dişin geniş çürüğü varsa kron-loop. Mümkünse çekimden hemen sonra uygularım çünkü yer kaybı ilk 6 ayda olur; 6 ayda bir kontrol ederim." },
    { q: "Yer tutucu planlarken nelere dikkat edersin?", a: "Çekimden sonra geçen süre, mevcut yer, daimi dişin sürme gecikmesi ve konjenital eksikliği, üstündeki kemik miktarı (1 mm ≈ 4–6 ay), diş yaşı, sürme sırası, ağız hijyeni, hasta işbirliği ve ebeveynin bilgilendirilmesi." },
    { q: "Bant-loop endikasyonlarını say.", a: "Süt 2. azının erken kaybında 6 sürdükten sonra; aynı bölgede tek diş kaybı; 6 sürmeden önce süt 1. azının tek/çift taraflı kaybı; 6’lar ağızda ama daimi kesiciler yokken süt 1. veya 2. azının kaybı; aşırı madde kaybı yoksa; diğer yer tutucular uygun değilse." }
  ],
  test: [
    { q: "6 sürmeden önce süt 2. molar kaybında ideal yer tutucu?", o: ["Bant-loop", "Distal shoe", "Lingual ark", "Nance"], c: 1, w: "Kılavuzlayan kanat sürmemiş 6’ya rehberlik eder." },
    { q: "Lingual arkın yapılması için şart?", o: ["Süt kesiciler ağızda olmalı", "Daimi kesiciler sürmüş olmalı", "6’lar sürmemiş olmalı", "Üst çenede olmalı"], c: 1, w: "Daimi kesiciler lingualden sürer; ark engel olur." },
    { q: "Yer tutucu gerekmeyen durum?", o: ["Ardıl var, kökü 1/3’ten az", "Ardılın kökü 2/3, üstünde kemik yok", "Çekimden 1 hafta geçti", "Ardılın üstünde 3 mm kemik var"], c: 1, w: "Sürme yakın; yer tutucu gereksiz." }
  ],
  kod: ["Bant-loop = “tek diş, tek taraf”; kron-loop = “destek hasta”; distal shoe = “6 daha yolda”.", "Hırsız ilk 6 ayda çalar → yer tutucu hemen!"]
},
/* ------------------------------------------------------------------ 5 */
{ id: "bicim", gun: 1, ad: "Biçim Anomalileri", rx: [10, 13, 30],
  komik: [
    { n: "Anomali Galerisi’ne hoş geldin. Her tablo bir ipucu saklıyor…" },
    { c: "ST", t: "Bu dişin kronu iki parçalı. İkiz mi, yapışık mı?" },
    { c: "KP", t: "Say bakalım! Anormal dişi 2 say. Bir fazla çıkıyorsa GEMİNASYON, sayı tamsa FÜZYON." },
    { c: "HC", t: "Konkresans?" },
    { c: "ST", t: "İki dişin sadece sementle birleşmesi!" },
    { c: "KP", t: "Pulpa odası apikale uzayan boğa dişi?" },
    { c: "ST", t: "Taurodontizm. Kökte keskin kıvrım da dilaserasyon, genelde süt dişi travmasından." },
    { c: "KP", t: "Üst lateralde diş içinde diş görüntüsü?" },
    { c: "ST", t: "Dens invaginatus! Palatinal çukuru hemen fissür örtücüyle kapatırım." },
    { fx: "GALERİ TAMAM!" }
  ],
  bilgi: [
    "Gelişim anomalileri (okul): boyut, sayı, biçim, durum (konum), doku (yapı).",
    "Biçim anomalileri (okul listesi): Carabelli tüberkülü, taurodontizm, singulum hipertrofisi (talon), krona yapışık odontoma (dens evaginatus), köke yapışık odontoma (mine incisi), dilaserasyon, birleşme (konkresans), geminasyon, füzyon, dens in dente.",
    "Füzyon: iki ayrı germin dentin düzeyinde birleşmesi; ayrı veya ortak pulpa; diş sayısı bir eksik. Süt dişlerinde alt kesici-kanin bölgesinde sık; ardıl daimi dişin eksikliği sık.",
    "Geminasyon: tek germin ikiye bölünme girişimi; tek kök, tek kanal, çentikli/çatallı kron; diş sayısı normal.",
    "Konkresans: iki dişin yalnızca sement ile birleşmesi; çoğunlukla üst molarlar; çekimde sorun çıkarır.",
    "Dens invaginatus (dens in dente): mine organının pulpaya doğru katlanması; en sık üst lateral; palatinal çukurdan çürük → erken pulpa nekrozu. Tedavi: profilaktik fissür örtücü.",
    "Dens evaginatus (krona yapışık odontoma): premolarların okluzalinde pulpa uzantılı aksesuar tüberkül; kırılırsa nekroz. Kompozitle destekleme veya kademeli aşındırma.",
    "Taurodontizm: pulpa odası apikal yönde uzun, furkasyon apikale kaymış, mine-sement sınırında daralma yok; molarlar. Klinefelter, Down, amelogenezis imperfekta ile ilişkili. Kanal tedavisi zor.",
    "Dilaserasyon: kron ile kök arasında keskin açılanma; süt dişi travmasının (özellikle intrüzyon) gelişen germe etkisi. Çekim ve kanal tedavisi güç.",
    "Diğer: mikrodonti (çivi lateral), makrodonti, Hutchinson kesicisi ve dut molar (konjenital sifiliz), Carabelli (üst 1. molar meziopalatinal), mine incisi (köke yapışık odontoma), aksesuar kökler.",
    "Sayı anomalileri (okul): anodonti, oligodonti, hipodonti, süt dişi retansiyonu, süpernümerer dişler, meziodens."
  ],
  kart: [
    ["Füzyon ve geminasyonu nasıl ayırırsın?", "Anormal dişi 2 say: bir fazla çıkıyorsa geminasyon, sayı tamsa füzyon. Geminasyonda tek kök-tek kanal."],
    ["Konkresans?", "İki dişin sadece sement ile birleşmesi."],
    ["Taurodontizm?", "Pulpa odası apikale uzamış, furkasyon apikalde, servikal daralma yok (boğa dişi)."],
    ["Dens invaginatus en sık hangi dişte?", "Üst lateral kesici."],
    ["Dilaserasyonun en sık nedeni?", "Süt dişi travmasının gelişen daimi germe etkisi."],
    ["Hutchinson kesicisi hangi hastalıkta?", "Konjenital sifiliz (dut molar ile birlikte)."],
    ["Dens evaginatus nerede, riski?", "Premolar okluzali; pulpa uzantısı var, kırılırsa nekroz."]
  ],
  sozlu: [
    { q: "Biçim anomalilerini sayar mısın?", a: "Carabelli tüberkülü, taurodontizm, singulum hipertrofisi (talon tüberkülü), krona yapışık odontoma (dens evaginatus), köke yapışık odontoma (mine incisi), dilaserasyon, konkresans, geminasyon, füzyon ve dens in dente. Bunlara mikrodonti/makrodonti ve Hutchinson dişlerini de ekleyebilirim." },
    { q: "Füzyon ile geminasyon farkı?", a: "Füzyonda iki ayrı germ dentin düzeyinde birleşir; diş sayısı bir eksiktir, iki kök ve iki kanal olabilir. Geminasyonda tek germ bölünmeye çalışır; kron çatallı ama tek kök ve tek kanal vardır, diş sayısı normaldir. Pratikte anormal dişi iki sayarım: bir fazla çıkıyorsa geminasyondur." }
  ],
  test: [
    { q: "Anormal dişi 2 saydığında ark bir fazla diş içeriyor. Teşhis?", o: ["Füzyon", "Geminasyon", "Konkresans", "Taurodontizm"], c: 1, w: "Geminasyonda sayı normaldir; ikiye sayınca fazla çıkar." },
    { q: "Sadece sement düzeyinde birleşme?", o: ["Füzyon", "Konkresans", "Geminasyon", "Dilaserasyon"], c: 1, w: "Konkresans." },
    { q: "Klinefelter sendromuyla ilişkili biçim anomalisi?", o: ["Taurodontizm", "Talon", "Dens evaginatus", "Konkresans"], c: 0, w: "Taurodontizm." }
  ],
  kod: ["“Gemi ikiz doğurdu, sayı arttı” → Geminasyon.", "“Füzyonda iki diş evlenir, ev eksik kalır” → sayı eksik.", "Taurodont = boğa (tauros) gibi uzun gövdeli diş."]
},
/* ------------------------------------------------------------------ 6 */
{ id: "talon", gun: 1, ad: "Talon Tüberkülü", rx: [12, 25],
  komik: [
    { c: "CK", t: "Ön dişimin arkasında kartal pençesi gibi bir şey var, dilime batıyor!" },
    { c: "KP", t: "Talon tüberkülü! Kesicinin singulumundan insizale uzanan aksesuar tüberkül." },
    { c: "ST", t: "Hemen keselim mi?" },
    { c: "KP", t: "Dur! İçinde pulpa uzantısı olabilir. Kademeli aşındır, her seansta florür sür." },
    { c: "KP", t: "Kenarındaki derin oluklar çürür; önce fissür örtücü!" },
    { fx: "PENÇE TÖRPÜLENDİ!" }
  ],
  bilgi: [
    "Tanım: kesici dişlerin singulum bölgesinden insizal kenara doğru uzanan aksesuar tüberkül (singulum hipertrofisi). “Kartal pençesi” görünümü.",
    "Yer: daimi dentisyonda en sık üst lateral (sonra santral), süt dentisyonda üst santral. Erkeklerde biraz daha sık.",
    "Hattab sınıflaması: Tip 1 talon (insizal kenarın en az yarısına ulaşan belirgin tüberkül), Tip 2 semi-talon (1 mm ve üzeri, yarıya ulaşmayan), Tip 3 trace talon (belirgin singulum).",
    "Radyografi: kronun üstünde V/Y şeklinde radyoopak yapı; pulpa uzantısı içerebilir.",
    "Sorunlar: okluzal interferans ve travmatik oklüzyon, tüberkülün yanındaki derin oluklarda çürük, estetik, dil ve dudak irritasyonu, yer değiştirme.",
    "Tedavi: küçükse takip; oluklara fissür örtücü veya kompozit; interferans varsa 6–8 hafta arayla kademeli aşındırma + florür (tamir dentini oluşsun); pulpa açılırsa pulpa kuafajı/pulpotomi.",
    "İlişkili sendromlar: Rubinstein-Taybi, Sturge-Weber, Mohr, Ellis-van Creveld."
  ],
  kart: [
    ["Talon tüberkülü nedir?", "Kesicinin singulumundan insizale uzanan aksesuar tüberkül (singulum hipertrofisi)."],
    ["Daimi dişlerde en sık nerede?", "Üst lateral kesici (sonra santral)."],
    ["Talonun tedavisi?", "Fissür örtücü + kademeli aşındırma (6–8 hafta aralıkla) + florür; pulpa açılırsa pulpa tedavisi."],
    ["Hattab tipleri?", "Tip 1 talon, Tip 2 semi-talon, Tip 3 trace talon."]
  ],
  sozlu: [
    { q: "Talon tüberkülü nedir, nasıl tedavi edersin?", a: "Kesicilerin singulumundan insizal kenara uzanan aksesuar tüberküldür, en sık üst lateralde görülür ve pulpa uzantısı içerebilir. Oklüzyonu bozmuyorsa oluklarını fissür örtücüyle kapatıp takip ederim. İnterferans varsa 6–8 hafta aralıklarla kademeli aşındırma yapar, her seansta florür uygularım. Pulpa açılırsa pulpa kuafajı veya pulpotomi." }
  ],
  test: [
    { q: "Talon tüberkülünü tek seansta tamamen kesmenin riski?", o: ["Estetik bozulur", "Pulpa açılabilir", "Diş sürmez", "Diastema olur"], c: 1, w: "İçinde pulpa uzantısı olabilir." },
    { q: "Talon tüberkülünün oluşturduğu en sık sorun?", o: ["Kök rezorpsiyonu", "Oluklarda çürük ve okluzal interferans", "Ankiloz", "Kist"], c: 1, w: "Derin oluklar çürür, tüberkül oklüzyona girer." }
  ],
  kod: ["Talon = kartalın pençesi → “Kartal yavaş törpülenir.”"]
},
/* ------------------------------------------------------------------ 7 */
{ id: "turner", gun: 1, ad: "Turner Hipoplazisi", rx: [16, 28],
  komik: [
    { n: "Üç yıl önce 85’te tedavi edilmeyen bir apse vardı…" },
    { c: "CR", t: "Süt dişini ele geçirdim, şimdi altındaki premolar germine de iz bırakacağım!" },
    { c: "ST", t: "45 sürdü ama minesi sarı-kahverengi ve çukurlu, sadece bu diş!" },
    { c: "KP", t: "Tek diş + üstündeki süt dişinde enfeksiyon/travma öyküsü = TURNER DİŞİ." },
    { c: "HC", t: "Ön bölgede de olur mu?" },
    { c: "ST", t: "Evet, süt kesici travması özellikle intrüzyon, daimi santral minesini bozar." },
    { fx: "İZ BULUNDU!" }
  ],
  bilgi: [
    "Tanım: süt dişindeki periapikal enfeksiyon veya travmanın altındaki daimi diş germinin minesinde yaptığı lokal hipoplazi/hipomineralizasyon. Etkilenen dişe Turner dişi denir.",
    "Okul sınıflamasında hipoplaziler: 1) Irsi (amelogenezis imperfekta, dentinogenezis imperfekta, mine-dentin aplazisi) 2) Konjenital (Hutchinson, alerjik, prematür doğum/neonatal) 3) Postnatal: genel ve LOKAL → Turner.",
    "En sık: alt premolarlar (süt molar enfeksiyonu) ve üst santraller (süt kesici travması, özellikle 3 yaş öncesi).",
    "Görünüm: tek dişte asimetrik; beyaz-sarı-kahverengi opasite ile çukurlu ya da eksik mine.",
    "Ayırıcı tanı: MIH (1. molarlar + kesiciler, sistemik), florozis (yaygın, simetrik), amelogenezis imperfekta (tüm dişler).",
    "Süt dişi travmasının daimi dişe etkileri (okul): beyaz/sarı-kahverengi renk değişimi, hipoplazi + renk, kronda dilaserasyon, odontoma benzeri malformasyon, kök duplikasyonu, kökün vestibüle/laterale açılanması, kök gelişiminin kısmen/tamamen durması, germ sekestrasyonu, sürme bozukluğu.",
    "Önleme: süt dişi enfeksiyonunu zamanında tedavi etmek veya çekmek.",
    "Tedavi: hafifse mikroabrazyon/rezin infiltrasyonu + florür; orta ise kompozit; ağırsa kron (çocukta PÇK, erişkinde porselen kron/laminate). Hipersensitivitede florür vernik, CPP-ACP.",
    "Hipoplazi mi hipomineralizasyon mu? (okul) Amelogenezis iki safhalıdır: matriks oluşumu bozulursa hipoplazi (kantitatif, mine az), kalsifikasyon/olgunlaşma bozulursa hipokalsifikasyon (kalitatif, mine yumuşak)."
  ],
  kart: [
    ["Turner hipoplazisi nedir?", "Süt dişi enfeksiyonu veya travmasına bağlı, altındaki daimi germde lokal mine hipoplazisi."],
    ["En sık hangi dişlerde?", "Alt premolarlar (süt molar enfeksiyonu) ve üst santraller (süt kesici travması)."],
    ["Turner ile MIH farkı?", "Turner tek diş, lokal neden. MIH 1. molar ± kesiciler, sistemik neden."],
    ["Hipoplazi ile hipokalsifikasyon farkı?", "Hipoplazi: matriks bozuk, mine az (kantitatif). Hipokalsifikasyon: olgunlaşma bozuk, mine yumuşak (kalitatif)."]
  ],
  sozlu: [
    { q: "Turner hipoplazisini anlat.", a: "Süt dişinin periapikal enfeksiyonu ya da travması, altındaki gelişen daimi diş germinin mine oluşumunu lokal olarak bozar. Genelde tek dişte, en sık alt premolarlarda ve üst santrallerde görülür; sarı-kahverengi opasiteli, çukurlu mine görülür. Önlemek için süt dişi enfeksiyonu zamanında tedavi edilmeli. Tedavide hafif vakada mikroabrazyon ve florür, orta vakada kompozit, ağır vakada kron yapılır." }
  ],
  test: [
    { q: "Tek bir alt premolarda kahverengi çukurlu mine; üstündeki süt molarında apse öyküsü var. Teşhis?", o: ["MIH", "Florozis", "Turner hipoplazisi", "Amelogenezis imperfekta"], c: 2, w: "Tek diş + lokal neden = Turner." },
    { q: "Matriks oluşumunun bozulması sonucu?", o: ["Hipoplazi", "Hipokalsifikasyon", "Florozis", "Dentinogenezis imperfekta"], c: 0, w: "Matriks bozukluğu kantitatif defekt yapar." }
  ],
  kod: ["“Turner = Tek dişte Travma ya da Tedavisiz enfeksiyon izi.”"]
},
/* ------------------------------------------------------------------ 8 */
{ id: "mih", gun: 1, ad: "MIH (Molar-İnsizör Hipomineralizasyonu)", rx: [11, 14],
  komik: [
    { c: "CK", t: "Diş fırçalarken 6’larım sızlıyor, bir de ön dişlerimde sarı lekeler var." },
    { c: "MH", t: "Bu benim işim! Doğum civarında, ilk 3 yılda, mine olgunlaşırken sızdım." },
    { c: "ST", t: "Sınırları belli opasiteler, minede kırılmalar… Dört 6 ve kesiciler. MIH!" },
    { c: "HC", t: "Etiyolojisi?" },
    { c: "ST", t: "Kesin bilinmiyor, multifaktöriyel: prenatal, perinatal ve ilk 3 yılın hastalıkları, antibiyotikler, genetik yatkınlık." },
    { c: "KP", t: "Tedavi basamakları: koru → restore et → gerekirse çek. Çekimin en iyi zamanı 8,5–10 yaş!" },
    { fx: "HAYALET YAKALANDI!" }
  ],
  bilgi: [
    "Tanım (okul): bir veya daha fazla daimi 1. molarla birlikte sıklıkla kesicilerde görülen, sistemik kökenli mine hipomineralizasyonu (kalitatif defekt). 1. molar ve kesicilerin mineralizasyonu aynı döneme (doğum civarı–ilk 3 yıl) denk gelir.",
    "Klinik: sınırları belirgin beyaz-krem-sarı-kahverengi opasiteler, sürdükten sonra mine yıkımı (posteruptif kırılma), atipik çürük ve restorasyonlar, hipersensitivite, anestezinin zor olması, asimetrik tutulum.",
    "Etiyoloji: tam bilinmiyor, multifaktöriyel. Prenatal: annede hastalık, sigara. Perinatal: prematürite, düşük doğum ağırlığı, hipoksi, uzun doğum, sezaryen. Postnatal (ilk 3 yıl): yüksek ateşli hastalıklar, solunum yolu enfeksiyonları, otitis media, astım, antibiyotik (amoksisilin), dioksin/PCB, bisfenol A. Genetik yatkınlık.",
    "Ayırıcı tanı: florozis (yaygın, simetrik, sınırsız), Turner (tek diş), amelogenezis imperfekta (tüm dişler, aile öyküsü).",
    "Tedavi (okul): koruyucu: topikal florür, CPP-ACP, ksilitollü sakız, fissür örtücü (CİS esaslı da olur). Restoratif: CİS, kompozit, PÇK. Çekim + ortodonti.",
    "Çekim zamanı: 8,5–10 yaş, 7’nin kökünde furkasyon kalsifikasyonu başladığında; 7’ler meziale kayarak boşluğu kapatır.",
    "Hassas dişte anestezi zor; işlem öncesi analjezik, ek anestezi teknikleri gerekebilir."
  ],
  kart: [
    ["MIH tanımı?", "Bir veya daha fazla 1. daimi molarla birlikte sıklıkla kesicileri tutan sistemik kökenli mine hipomineralizasyonu."],
    ["Neden 1. molar ve kesiciler?", "Mineralizasyonları aynı döneme (doğum civarı–ilk 3 yıl) denk gelir."],
    ["MIH’de etkilenen 1. molar ne zaman çekilir?", "8,5–10 yaş; 7’nin furkasyon kalsifikasyonu başladığında."],
    ["MIH ile florozis farkı?", "MIH sınırları belirgin, asimetrik opasite. Florozis yaygın, simetrik, sınırları belirsiz."],
    ["MIH’de koruyucu tedavi seçenekleri?", "Topikal florür, CPP-ACP, ksilitollü sakız, fissür örtücü."]
  ],
  sozlu: [
    { q: "MIH nedir, etiyolojisi nedir?", a: "Bir veya daha fazla birinci daimi molarla birlikte sıklıkla kesicileri etkileyen sistemik kökenli mine hipomineralizasyonudur. Etiyolojisi tam bilinmiyor; multifaktöriyeldir: prenatal (annede hastalık, sigara), perinatal (prematürite, düşük doğum ağırlığı, hipoksi, zor doğum) ve postnatal ilk 3 yıl (yüksek ateşli hastalıklar, solunum yolu enfeksiyonu, otitis, astım, antibiyotikler, çevresel toksinler) ile genetik yatkınlık sayılır. Bu dişlerin mineralizasyonu aynı döneme denk geldiği için birlikte etkilenirler." },
    { q: "MIH’li bir 1. molarda tedavi seçenekleri?", a: "Koruyucu olarak florür vernik, CPP-ACP, ksilitol ve fissür örtücü. Restoratif olarak CİS, kompozit veya yıkım fazlaysa PÇK. Prognoz kötüyse 8,5–10 yaşında, 7’nin furkasyonu kalsifiye olmaya başladığında çekim ve ortodontik değerlendirme." }
  ],
  test: [
    { q: "MIH’li 1. molar için ideal çekim yaşı?", o: ["5–6", "8,5–10", "12–13", "15+"], c: 1, w: "7’nin kendiliğinden meziale gelip boşluğu kapatması için." },
    { q: "MIH için yanlış olan?", o: ["Sınırları belirgin opasite", "Posteruptif mine yıkımı", "Tüm dişlerde simetrik", "Hipersensitivite"], c: 2, w: "Simetrik ve tüm dişler: florozis veya AI düşündürür." }
  ],
  kod: ["MIH’in “3P”si: Prenatal, Perinatal, Postnatal (ilk 3 yıl).", "“Koru – Restore et – Çek (8,5–10)”"]
},
/* ------------------------------------------------------------------ 9 */
{ id: "kron", gun: 2, ad: "Travma Sınıflaması ve Kron Kırıkları", rx: [23, 24],
  komik: [
    { n: "Teneffüs. Kaydırak. Bir çığlık…" },
    { c: "TR", t: "HAHA! 9 yaşındaki çocuğun iki ön dişini kırdım. Biri büyük kırık, öbüründe pulpa açık!" },
    { c: "HC", t: "Sınıflandır ve tedavi et." },
    { c: "ST", t: "11: mine-dentin kırığı, yani komplike olmayan kron kırığı. 21: mine-dentin-pulpa, yani komplike kron kırığı." },
    { c: "KP", t: "9 yaş, santral apeksi açık! Hedef: pulpayı canlı tut, kök gelişsin. Yani APEKSOGENEZİS." },
    { c: "ST", t: "21’e Cvek: 1–2 mm pulpayı alırım, kanamayı durdururum, KH ya da MTA koyarım, sonra restore ederim." },
    { c: "ST", t: "11’e kırık parçayı yapıştırırım; yoksa dentini örtüp kompozit." },
    { c: "KP", t: "Kırık parça dudakta olabilir: dudak yarası varsa yumuşak doku radyografisi!" },
    { fx: "TAYFUN DURDU!" }
  ],
  bilgi: [
    "Sınıflamalar (okul): WHO, Ellis, Andreasen. Andreasen sert doku + pulpa: mine çatlağı (infraksiyon), mine kırığı, komplike olmayan kron kırığı (mine-dentin), komplike kron kırığı (mine-dentin-pulpa), komplike olmayan kron-kök, komplike kron-kök, kök kırığı.",
    "Periodontal yaralanmalar: konküzyon, sublüksasyon, ekstrüzyon, lateral lüksasyon, intrüzyon, avülsiyon. Destek doku: alveol soket ezilmesi, soket duvarı kırığı, alveol proses kırığı, çene kırığı. Dişeti/mukoza: laserasyon, kontüzyon, abrazyon.",
    "Mine çatlağı: madde kaybı yok, dişin aksına paralel ışıkla görülür, mine-dentin sınırını geçmez; genelde tedavi gerekmez (belirginse rezinle kapatma).",
    "Mine kırığı: en çok üst santralin mezial/distal köşesi; keskin kenarı düzelt veya kompozit; parça varsa yapıştır.",
    "Komplike olmayan kron kırığı: dentin açıkta → sıcak-soğuk, kuruma, basınca hassas; acil tedavi. Dentin bağlayıcı + kompozit veya kırık parçayı bağlayıcıyla yapıştırma. Pulpaya 0,5 mm’den yakınsa KH kaide + CİS. Gecikirse nekroz → kanal tedavisi.",
    "Komplike kron kırığı: pulpa açık, üstünde ince fibrin tabakası; 7–16 yaşta ilk 24 saatte yalnızca hiperplastik reaksiyon (inflamasyon yüzeyde 2–3 mm). Önce pulpa kuafajı ve amputasyon düşünülür.",
    "Hangi tedavi? (okul) Açıklık 1,5–2 mm ve hasta hemen geldiyse genç daimi dişte direkt pulpa kuafajı. Açıklık 2 mm’den büyükse Cvek. Açıklık küçük ama geç geldiyse de Cvek. Kök gelişimi tamamsa ve post gerekirse kanal tedavisi.",
    "Cvek (parsiyel) pulpotomi: rubber dam; yüksek devirli elmas frezle su soğutmalı 1–2 mm pulpa alınır; serum fizyolojik/NaOCl ile kanama durdurulur; KH (veya MTA/Biodentine) + kaide + restorasyon. Avantaj: hücreden zengin koronal pulpa korunur, servikalde dentin birikimi sürer, kanal tedavisi gerekmeyebilir, doğal renk ve vitalite testi korunur.",
    "Kron-kök kırığı: hareketli parçayı geçici olarak yapıştır. Kalıcı: parçayı çıkar + supragingival restorasyon, gingivektomi/osteotomi, ortodontik veya cerrahi ekstrüzyon, kök gömme (dekoronasyon), çekim. İmmatürde parsiyel pulpotomiyle pulpa korunur, matürde pulpa çıkarılır.",
    "Vaka cevabı sırası: anamnez (ne zaman, nerede, nasıl; tetanoz; bilinç kaybı, kusma), klinik muayene (mobilite, perküsyon, renk, pulpa testleri), radyografi (farklı açılı periapikaller + okluzal; dudakta yara varsa yumuşak doku filmi), sınıflama, tedavi, takip.",
    "Takip (IADT 2020): komplike olmayan kırıkta 6–8 hafta ve 1 yıl; komplike kırıkta 6–8 hafta, 3 ay, 6 ay, 1 yıl, sonra 5 yıl boyunca yılda bir.",
    "Süt dişi travması (okul): en sık 2–6 yaş, lüksasyon ve avülsiyon sık. Komplike kron kırığında ekspoz büyüklüğü, geçen süre, kök rezorpsiyonu ve kooperasyona göre DPK, Cvek veya amputasyon; rezorpsiyon 1/3’ü geçmemişse kanal tedavisi, 2/3 ise çekim. Avülse süt dişi replante edilmez."
  ],
  kart: [
    ["Andreasen’e göre sert doku + pulpa yaralanmaları?", "Mine çatlağı, komplike olmayan kron kırığı, komplike kron kırığı, komplike olmayan kron-kök, komplike kron-kök, kök kırığı."],
    ["Komplike kron kırığı nedir?", "Mine-dentin kırığına pulpa ekspozunun eşlik etmesi."],
    ["Okula göre DPK ne zaman, Cvek ne zaman?", "Açıklık 1,5–2 mm ve hemen geldiyse DPK. 2 mm’den büyükse veya küçük ama geç geldiyse Cvek."],
    ["Cvek’te ne kadar pulpa alınır?", "1–2 mm (koronal), su soğutmalı elmas frezle."],
    ["Komplike kron kırığında ilk 24 saatteki pulpa reaksiyonu?", "Sadece yüzeyel hiperplastik reaksiyon (2–3 mm)."],
    ["Dudakta yara + kron kırığı varsa ne çekersin?", "Yumuşak doku (dudak) radyografisi; kırık parça dudakta olabilir."],
    ["Komplike kron kırığında takip?", "6–8 hafta, 3 ay, 6 ay, 1 yıl, sonra 5 yıl yılda bir."]
  ],
  sozlu: [
    { q: "9 yaşında hasta; 11’de geniş mine-dentin kırığı, 21’de pulpa ekspozu var. Sınıflandır ve tedavi et.", a: "Önce anamnez (ne zaman-nerede-nasıl, tetanoz, bilinç kaybı/kusma), klinik muayene ve farklı açılı periapikal + okluzal radyografi; dudakta yara varsa yumuşak doku filmi. 11 komplike olmayan kron kırığı: parça varsa bağlayıcıyla yapıştırırım, yoksa dentini örtüp kompozitle restore ederim; pulpaya yakınsa KH + CİS kaide. 21 komplike kron kırığı: 9 yaşta apeks açık, hedef apeksogenezis. Ekspoz büyük veya geç geldiyse Cvek: rubber dam altında 1–2 mm pulpayı su soğutmalı elmas frezle alır, serum fizyolojikle kanamayı durdurur, KH veya MTA/Biodentine koyar, CİS kaide ve kompozitle kapatırım. Küçük ve taze ekspozda DPK. Takip: 6–8 hafta, 3 ay, 6 ay, 1 yıl, sonra yıllık." },
    { q: "Daimi dişlerde kron kırıklarını anlat.", a: "Mine çatlağı: madde kaybı yok, ışıkla görülür, tedavi gerekmez. Mine kırığı: en çok santral köşesi; düzeltme veya kompozit. Komplike olmayan kron kırığı: dentin açık, hassasiyet var; acil olarak bağlayıcı + kompozit veya parça yapıştırma. Komplike kron kırığı: pulpa açık; immatür dişte DPK veya Cvek ile pulpa korunur, matürde post gerekirse kanal tedavisi." },
    { q: "Cvek amputasyonunun avantajları?", a: "Hücreden zengin koronal pulpa korunur, servikalde fizyolojik dentin birikimi devam eder, sonrasında kanal tedavisi gerekmeyebilir, dişin doğal rengi ve translüsensisi korunur, vitalite testleri yapılabilir." }
  ],
  test: [
    { q: "9 yaş, 21’de 3 mm pulpa ekspozu, 5 saat önce. Tedavi?", o: ["Çekim", "Kanal tedavisi", "Cvek parsiyel pulpotomi", "Sadece kompozit"], c: 2, w: "İmmatür diş, 2 mm’den büyük ekspoz → Cvek." },
    { q: "Mine-dentin kırığı, pulpa açık değil. Sınıflama?", o: ["Komplike kron kırığı", "Komplike olmayan kron kırığı", "Kron-kök kırığı", "Mine çatlağı"], c: 1, w: "Pulpa açık değilse komplike olmayan." },
    { q: "Avülse süt dişi için doğru?", o: ["Hemen replante edilir", "Replante edilmez", "Splintle 4 hafta tutulur", "Kanal tedavisiyle replante edilir"], c: 1, w: "Daimi germe zarar riski nedeniyle süt dişi replante edilmez." }
  ],
  kod: ["“Komplike = Pulpa Kapı Açık.”", "Cvek = “Cevik 2 mm’lik kesik.”"]
},
/* ------------------------------------------------------------------ 10 */
{ id: "apeks", gun: 2, ad: "Apeksogenezis ve Apeksifikasyon", rx: [18, 27],
  komik: [
    { c: "HC", t: "Apeksogenezis ile apeksifikasyon arasındaki fark?" },
    { c: "ST", t: "İkisi de apeks… Biri genesis, biri fikasyon…" },
    { c: "KP", t: "GENEZİS = doğum, yaşam. Pulpa CANLI, kök büyümeye devam eder: boyu uzar, duvarları kalınlaşır." },
    { c: "KP", t: "FİKASYON = fiksleme, tıkama. Pulpa ÖLÜ, kök büyümüyor; açık apekse bariyer kurarız." },
    { c: "ST", t: "Yani biri bahçıvan, öbürü tıkaç ustası!" },
    { c: "HC", t: "Materyal?" },
    { c: "ST", t: "Kliniğimizde en sık KH ve MTA. MTA ile tek seansta 3–5 mm apikal bariyer kurulur." },
    { fx: "APEKS KAPANDI!" }
  ],
  bilgi: [
    "Apeksogenezis (okul tanımı): kök ucu tamamlanmamış, pulpası CANLI dişlerde kök apeksinin fizyolojik gelişimini ve formasyonunu devam ettirip kökün normal uzunluk ve kalınlığa ulaşmasını sağlamak.",
    "Nasıl: genç daimi dişte DPK, KH amputasyonu, MTA amputasyonu, servikal amputasyon veya Cvek sonrası apeks fizyolojik olarak kapanır. Sekonder dentin yapımı sürer.",
    "Apeksifikasyon (okul tanımı): pulpa nekrozu nedeniyle kök büyümesi ve gelişimi durmuş immatür dişlerin apeksinin mineralize bir doku ile tıkanması.",
    "Apeksifikasyon geleneksel: KH ile; 1–3 ayda bir yenilenir; bariyer 6–24 ay; sonra güta + kanal dolgusu. Dezavantaj: uzun süre, çok seans, uzun süreli KH dentini zayıflatır → servikal kırık riski.",
    "Apeksifikasyon tek seans: MTA ile 3–5 mm apikal bariyer, sonra güta. Kısa sürer.",
    "Kanal tedavisinden farkı (okul): apeks açık → çalışma boyu radyografik apeksten 1–2 mm kısa, künt uçlu kanal aletleri, dikkatli irrigasyon, kurutmada künt uçlu paper point.",
    "Sonuç farkı: Apeksogenezis → kök uzar, duvarlar kalınlaşır, apeks fizyolojik kapanır. Apeksifikasyon → kök uzamaz, duvarlar ince kalır, sadece kalsifiye bariyer oluşur; kırılma riski yüksek.",
    "Lineer kalsifikasyon (okul): KH ve servikal amputasyondan sonra kanallar kalsifiye olabilir; bunu önlemek için apeks oluşunca kanal tedavisi yapılır. DPK ve Cvek sonrası lineer kalsifikasyon oluşmaz.",
    "Apeksifikasyonda kapanma şekilleri: A kanalın hafif yukarısında daralmayla kapanma; B lateral daralma olmadan konik kapanma; C apikal seviyenin altında ince köprü; D apikal seviyenin üstünde köprü; E granülasyon dokusu, kapanma yok (başarısız).",
    "Revaskülarizasyon (rejeneratif endodonti): nekrotik immatür dişte kök boyu ve duvar kalınlığı artar, kırık riski azalır."
  ],
  kart: [
    ["Apeksogenezis nedir?", "Canlı pulpalı immatür dişte kökün fizyolojik gelişimini sürdürmek."],
    ["Apeksifikasyon nedir?", "Nekrotik immatür dişin açık apeksini mineralize bir bariyerle tıkamak."],
    ["Kliniğimizde en sık kullanılan materyaller?", "Kalsiyum hidroksit (KH) ve MTA."],
    ["Geleneksel KH apeksifikasyonunda bariyer ne kadar sürede oluşur?", "6–24 ay; KH 1–3 ayda bir yenilenir."],
    ["MTA apikal tıkaç kalınlığı?", "3–5 mm, tek seans."],
    ["Apeksifikasyondan sonra kök neden kırılgan?", "Kök uzamaz ve duvarlar ince kalır; uzun süreli KH dentini zayıflatır."]
  ],
  sozlu: [
    { q: "Apeksogenezis ile apeksifikasyon farkı nedir?", a: "Apeksogenezis, kök ucu tamamlanmamış ve pulpası canlı dişte kökün fizyolojik gelişimini sürdürmektir; DPK, KH/MTA amputasyonu, servikal amputasyon veya Cvek ile yapılır, kök boyu uzar, duvarları kalınlaşır ve apeks fizyolojik kapanır. Apeksifikasyon ise pulpası nekroze olmuş, kök gelişimi durmuş immatür dişin apeksini mineralize bir bariyerle tıkamaktır; KH ile 6–24 ayda ya da MTA ile tek seansta 3–5 mm tıkaçla yapılır. Kök uzamaz, duvarlar ince kalır. Kliniğimizde en sık KH ve MTA kullanılır." }
  ],
  test: [
    { q: "Nekrotik pulpalı, açık apeksli 8 yaş santral. Tedavi?", o: ["Apeksogenezis", "Apeksifikasyon", "Cvek", "DPK"], c: 1, w: "Pulpa ölü → apeksifikasyon (veya revaskülarizasyon)." },
    { q: "Apeksogenezisin sonucu?", o: ["Kök uzamaz", "Sadece apikal bariyer", "Kök boyu ve duvar kalınlığı artar", "Pulpa nekroze olur"], c: 2, w: "Canlı pulpa kökü geliştirmeye devam eder." },
    { q: "Apeks açık dişte kanal boyu?", o: ["Radyografik apekse kadar", "Apeksten 1–2 mm kısa", "Apeksi 1 mm geçecek", "5 mm kısa"], c: 1, w: "Okul notu: açık apekste çalışma boyu 1–2 mm kısa." }
  ],
  kod: ["GENezis = GENç ve canlı; FİKSasyon = ölüyü FİKSle.", "Bahçıvan (genezis) kökü büyütür, tıkaç ustası (fikasyon) deliği kapatır."]
},
/* ------------------------------------------------------------------ 11 */
{ id: "intruzyon", gun: 2, ad: "Matür Dişte İntrüzyon", rx: [1, 29, 31],
  komik: [
    { n: "15 yaşında bir genç bisikletten düşer. 11 sanki kısalmış…" },
    { c: "TR", t: "Dişi kemiğin içine çaktım! Artık hiç kımıldamıyor!" },
    { c: "ST", t: "Perküsyonda metalik ses, mobilite yok, PDL aralığı kaybolmuş, mine-sement sınırı apikalde: İNTRÜZYON." },
    { c: "KP", t: "Apeks kapalı mı? Kapalıysa kendiliğinden sürme beklenmez, sadece 3 mm’ye kadar şans var." },
    { c: "ST", t: "6 mm gömülmüş. Cerrahi ya da ortodontik repozisyon, 4 hafta esnek splint." },
    { c: "KP", t: "Ve pulpa nekrozu neredeyse kesin: 2 hafta içinde kanal tedavisine başla, KH koy!" },
    { fx: "DİŞ YERİNE!" }
  ],
  bilgi: [
    "Klinik/radyografik bulgular (okul): diş kendi ekseni boyunca alveole gömülmüş; mobil değil; perküsyonda yüksek metalik (ankilotik) ses; duyarlılık testlerine büyük olasılıkla yanıt yok; PDL aralığı kısmen (özellikle apikal) veya tamamen kaybolmuş; mine-sement sınırı daha apikalde.",
    "Matür (kapalı apeks) tedavi (IADT 2020): ≤3 mm → kendiliğinden sürme beklenir; 8 hafta içinde hareket yoksa cerrahi repozisyon + 4 hafta splint veya ortodontik ekstrüzyon. 3–7 mm → cerrahi (tercih) veya ortodontik repozisyon. >7 mm → cerrahi repozisyon.",
    "Splint: esnek (pasif) splint, 4 hafta.",
    "Pulpa: matür intrüze dişte nekroz neredeyse kesin → kanal tedavisine 2 hafta içinde başlanır; intrakanal KH. Amaç enfeksiyona bağlı (enflamatuar) kök rezorpsiyonunu önlemek.",
    "İmmatür (açık apeks): intrüzyon miktarı ne olursa olsun kendiliğinden sürme beklenir; 4 haftada hareket yoksa ortodontik repozisyon. Pulpa takibi, revaskülarizasyon olabilir.",
    "Hasta talimatı: yumuşak diyet 1–2 hafta, yumuşak fırça, %0,12 klorheksidin gargara 1 hafta. Tetanoz durumu kontrol.",
    "Takip: 2 hafta (kanal tedavisine başla), 4 hafta (splint çıkar), 6–8 hafta, 6 ay, 1 yıl, sonra 5 yıl yılda bir.",
    "Komplikasyonlar: pulpa nekrozu, pulpa kanal obliterasyonu, enflamatuar kök rezorpsiyonu, replasman rezorpsiyonu (ankiloz), marjinal kemik kaybı.",
    "Süt dişi intrüzyonu: çoğunlukla kendiliğinden sürer (~6 ay); kök daimi germe doğru itilmişse çekim düşünülür."
  ],
  kart: [
    ["İntrüzyonun klinik bulguları?", "Diş kısalmış görünür, mobil değil, perküsyonda metalik ses, pulpa testlerine yanıt yok."],
    ["İntrüzyonun radyografik bulguları?", "PDL aralığı kısmen/tamamen kaybolmuş, mine-sement sınırı apikalde."],
    ["Matür dişte 3 mm’ye kadar intrüzyon?", "Kendiliğinden sürme beklenir (8 hafta); olmazsa cerrahi/ortodontik repozisyon."],
    ["Matür dişte 3–7 mm?", "Cerrahi (tercih) veya ortodontik repozisyon."],
    ["Matür dişte >7 mm?", "Cerrahi repozisyon."],
    ["İntrüzyonda splint süresi?", "4 hafta, esnek splint."],
    ["Matür intrüzyonda kanal tedavisi ne zaman?", "Repozisyondan sonraki 2 hafta içinde; intrakanal KH."]
  ],
  sozlu: [
    { q: "Kök gelişimi tamamlanmış bir dişte intrüzyonun tedavisi?", a: "Tanı: diş kısa görünür, mobil değil, metalik perküsyon sesi, PDL aralığı kaybolmuş. 3 mm’ye kadar intrüzyonda 8 hafta kendiliğinden sürmesini beklerim; olmazsa cerrahi veya ortodontik repozisyon. 3–7 mm’de cerrahi (tercihen) veya ortodontik, 7 mm’den fazlasında cerrahi repozisyon yapar, 4 hafta esnek splint uygularım. Pulpa nekrozu neredeyse kaçınılmaz olduğu için 2 hafta içinde kanal tedavisine başlar, KH koyarım. Yumuşak diyet, klorheksidin, tetanoz kontrolü. Takip: 2 hafta, 4 hafta, 6–8 hafta, 6 ay, 1 yıl ve 5 yıl yılda bir; enflamatuar ve replasman rezorpsiyonuna bakarım." }
  ],
  test: [
    { q: "Matür dişte 5 mm intrüzyon. Doğru tedavi?", o: ["Sadece bekle", "Cerrahi veya ortodontik repozisyon + 4 hafta splint + 2 haftada kanal tedavisi", "Hemen çekim", "Sadece antibiyotik"], c: 1, w: "3–7 mm → aktif repozisyon; nekroz beklenir." },
    { q: "İntrüzyonda perküsyon sesi?", o: ["Donuk", "Yüksek metalik", "Ses yok", "Normal"], c: 1, w: "Diş kemiğe kilitlendiği için ankilotik ses." },
    { q: "İmmatür dişte intrüzyonda ilk yaklaşım?", o: ["Cerrahi repozisyon", "Kendiliğinden sürmeyi beklemek", "Kanal tedavisi", "Çekim"], c: 1, w: "Miktardan bağımsız bekle; 4 haftada hareket yoksa ortodonti." }
  ],
  kod: ["“3 – 7” kuralı: 3’e kadar bekle, 3–7 arası seç, 7’den fazlası cerrahi.", "İntrüzyon = “4 hafta splint, 2 haftada kanal.”"]
},
/* ------------------------------------------------------------------ 12 */
{ id: "anestezi", gun: 2, ad: "Lokal Anestezi ve Komplikasyonlar", rx: [2, 6],
  komik: [
    { c: "HC", t: "Klinikte hangi anesteziği kullanıyorsunuz?" },
    { c: "ST", t: "Artikain %4, epinefrin 1:100.000 veya 1:200.000. Vazokonstriktörlü." },
    { c: "HC", t: "Neden vazokonstriktör?" },
    { c: "ST", t: "Süreyi uzatır, toksisiteyi azaltır, kanamayı azaltır!" },
    { n: "Ertesi gün…" },
    { c: "AN", t: "Çocuğun alt dudağı şişmiş, beyaz yara var! Enfeksiyon mu?" },
    { c: "KP", t: "Hayır! Çocuklarda en sık komplikasyon: uyuşukken dudağı ISIRMA. Ilık tuzlu su, ağrı kesici, 7–10 günde geçer." },
    { c: "KP", t: "Önlem: anne-babayı ve çocuğu uyar, dudakla diş arasına pamuk rulo koy." },
    { fx: "AY, DUDAĞIM!" }
  ],
  bilgi: [
    "Kliniğimizde: Artikain HCl %4 + epinefrin 1:100.000 (forte) veya 1:200.000. Alternatif: Lidokain %2 + epinefrin 1:80.000/1:100.000. Karpül etiketine bakıp “bizim klinikte …” diye başla.",
    "Artikain: amid grubu ama ester grubu da var → plazmada hızlı yıkılır; kemiğe difüzyonu iyi, infiltrasyonla yeterli etki. 4 yaş altında önerilmez. Maksimum 7 mg/kg (≤500 mg).",
    "Maksimum dozlar: Lidokain 4,4 mg/kg (≤300 mg), Artikain 7 mg/kg (≤500 mg), Mepivakain 4,4 mg/kg (≤300 mg), Prilokain 6 mg/kg (≤400 mg).",
    "Karpül hesabı: maksimum karpül = kilo × mg/kg ÷ karpüldeki mg. %4 artikain 1,7–1,8 mL = 68–72 mg. Örnek 20 kg: 20 × 7 = 140 mg → ~2 karpül. %2 lidokain 1,8 mL = 36 mg.",
    "Vazokonstriktörün faydaları: anestezi süresini uzatır, sistemik emilimi ve toksisiteyi azaltır, kanamayı azaltır.",
    "Dikkat (okul): methemoglobinemi riskinde 2 yaş altında artikain, prilokain ve benzokain dikkatli. Bisülfit alerjisinde vazokonstriktörsüz anestezik. Sülfa alerjisinde artikain kullanılmaz. Karaciğer bozukluğunda ester grubu tercih edilebilir. Alerjide alternatif: mepivakain.",
    "Okul notu: konjenital kalp hastasında vazokonstriktörsüz LA; diyabetik hastada da adrenalinsiz önerilir.",
    "Çocuğa özgü anatomi (okul): 1) Maksillada tüber bölgesi yüzeyel; iğne derin giderse pterigoid pleksus → hematom. 2) Ramus kısa ve dar → iğne penetrasyonu az. 3) Kemik az kalsifiye → difüzyon kolay. 4) İğne germ foliküllerine zarar vermemeli. Mandibular foramen çocukta okluzal düzlem hizasında veya altında.",
    "LOKAL komplikasyonlar: anestezi sonrası dudak/yanak/dil ısırma (çocuklarda EN SIK), hematom, trismus, iğne kırılması, parestezi, geçici fasiyal paralizi (iğne parotise), enjeksiyonda ağrı/yanma, enfeksiyon, palatinal doku nekrozu.",
    "SİSTEMİK komplikasyonlar: psikojenik senkop (en sık sistemik), toksik doz aşımı (konuşma bozukluğu, titreme → konvülsiyon → depresyon), alerji (genelde koruyucu madde), methemoglobinemi (prilokain, artikain), epinefrine bağlı çarpıntı ve anksiyete.",
    "Önlem: kiloya göre doz hesabı, aspirasyon, yavaş enjeksiyon (~1 mL/dk), ebeveyn uyarısı, pamuk rulo. Reversal: fentolamin mesilat (OraVerse); 6 yaş altı veya 15 kg altı çocukta kullanılmaz.",
    "Toksisitede: işlemi durdur, pozisyon ver, O2, vital bulgular, konvülsiyonda benzodiazepin, acil yardım."
  ],
  kart: [
    ["Kliniğimizdeki vazokonstriktörlü anestezik?", "Artikain %4 + epinefrin 1:100.000 / 1:200.000."],
    ["Çocukta en sık lokal anestezi komplikasyonu?", "Anestezi sonrası dudak/yanak ısırma travması."],
    ["Artikain maksimum dozu?", "7 mg/kg, en çok 500 mg; 4 yaş altında önerilmez."],
    ["Lidokain maksimum dozu?", "4,4 mg/kg, en çok 300 mg."],
    ["20 kg çocuk, artikain kaç karpül?", "20 × 7 = 140 mg ÷ 68 mg ≈ 2 karpül."],
    ["Vazokonstriktörün 3 faydası?", "Süreyi uzatır, toksisiteyi azaltır, kanamayı azaltır."],
    ["En sık sistemik komplikasyon?", "Psikojenik (vazovagal) senkop."],
    ["Anesteziyi geri çeviren ajan?", "Fentolamin mesilat (OraVerse); 6 yaş/15 kg altında kullanılmaz."],
    ["Çocukta mandibular foramen nerede?", "Okluzal düzlem hizasında veya altında; iğne daha alçak."]
  ],
  sozlu: [
    { q: "Klinikte kullandığınız vazokonstriktörlü anestezik ve en sık komplikasyonları?", a: "Kliniğimizde artikain %4 ve 1:100.000 (ya da 1:200.000) epinefrin kullanıyoruz. Vazokonstriktör süreyi uzatır, toksisiteyi ve kanamayı azaltır. Maksimum doz 7 mg/kg; 4 yaş altında önerilmez. Çocuklarda en sık komplikasyon uyuşukluk sırasında dudak/yanak ısırma travmasıdır. Diğer lokal komplikasyonlar hematom, trismus, iğne kırılması, parestezi ve geçici fasiyal paralizi; sistemik olarak senkop, toksisite, alerji ve methemoglobinemi. Önlemek için kiloya göre doz hesaplar, aspire eder, yavaş enjekte eder ve aileyi uyarırım." },
    { q: "Çocuklarda lokal anestezi uygularken yetişkinden farkı nedir?", a: "Maksillada tüber bölgesi yüzeyeldir, derin girersek pterigoid pleksusta hematom olur. Ramus kısa ve dardır, iğne daha az ilerletilir. Kemik daha az kalsifiyedir, anestezik kolay yayılır. Mandibular foramen okluzal düzlem hizasında veya altındadır. İğne daimi germ foliküllerine zarar vermemelidir. Doz mutlaka kiloya göre hesaplanır." }
  ],
  test: [
    { q: "25 kg çocukta lidokain maksimum dozu?", o: ["55 mg", "110 mg", "175 mg", "300 mg"], c: 1, w: "25 × 4,4 = 110 mg." },
    { q: "Çocukta en sık görülen LA komplikasyonu?", o: ["İğne kırılması", "Dudak ısırma", "Fasiyal paralizi", "Alerji"], c: 1, w: "Uyuşukken dudak/yanak ısırma." },
    { q: "Sülfa alerjisinde kaçınılacak anestezik?", o: ["Lidokain", "Mepivakain", "Artikain", "Hepsi serbest"], c: 2, w: "Okul notu: artikain kullanılmaz." }
  ],
  kod: ["Vazokonstriktör “3U”: Uzatır, Uyuşturucuyu (toksisiteyi) azaltır, Ufak kanama.", "Dozlar: Lido 4,4 – Arti 7 – Mepi 4,4 – Prilo 6."]
},
/* ------------------------------------------------------------------ 13 */
{ id: "pat", gun: 2, ad: "Süt Dişlerinde Kanal Patları", rx: [3, 8],
  komik: [
    { c: "HC", t: "Klinikte süt dişine kanal patı olarak ne koyuyorsunuz?" },
    { c: "ST", t: "Vitapex! Kalsiyum hidroksit + iyodoform + silikon yağı." },
    { c: "HC", t: "Neden güta perka değil?" },
    { c: "KP", t: "Çünkü süt dişinin kökü rezorbe olacak. Pat da onunla birlikte rezorbe olmalı! Güta rezorbe olmaz." },
    { c: "ST", t: "Hazır şırıngasıyla apeksten 1 mm geride başlar, pat kanal ağzından taşınca şırıngayı yavaşça geri çekerim." },
    { c: "KP", t: "ZOE taşarsa? Yavaş rezorbe olur, daimi dişin sürme yolunu saptırabilir. Vitapex taşarsa çabuk rezorbe olur." },
    { fx: "KANAL DOLDU!" }
  ],
  bilgi: [
    "İdeal süt dişi kanal patı: antiseptik, radyoopak, kolay uygulanır, dişi renklendirmez, kanalda büzülmez, taşarsa hızla rezorbe olur, gerekirse kolay çıkarılır, kanal duvarına iyi uyum sağlar, periapikal dokuya ve daimi germe zarar vermez, süt dişi kökleriyle uyumlu rezorbe olur.",
    "Kliniğimizde: Vitapex (KH %30 + iyodoform %40 + silikon yağı). Avantajları: radyoopak, kolay uygulanır, süt dişi kökleriyle aynı hızda rezorbe olur, daimi germe toksik değil, taşarsa hızla rezorbe olur ve yabancı cisim reaksiyonu yapmaz.",
    "Vitapex uygulama: tek kullanımlık polipropilen şırınga ucu kanala apeksten 1 mm geride yerleştirilir, pat enjekte edilir; pat kanal ağzından taşınca şırınga yavaşça geri çekilir. Taşarsa sert kitle oluşturmaz, ZOE’nin aksine daimi dişin sürme yolunu saptırmaz.",
    "İyodoform patlarının avantajı: radyoopak, kolay uygulanır, dezenfektan, taşarsa zararsız ve hızlı rezorbe, kök rezorpsiyonuyla uyumlu. Dezavantajı: kanal içinde erken rezorbe olabilir, sarı-kahve renklenme, sistemik toksisite olasılığı.",
    "ZOE (çinko oksit öjenol): en eski. Dezavantajları: taşarsa periapikale zarar, kemik/sement nekrozu, daimi dişin sürme yolunu değiştirme, apekste rezorbe olmama, öjenol ve çinkonun sitotoksik/alerjik etkisi.",
    "KRI patı: iyodoform + kamfor + paraklorofenol + mentol. Maisto patı: KRI + çinko oksit, timol, lanolin; daha az rezorbe olur; ilk kombine pat.",
    "Kalsiyum hidroksit patları: antimikrobiyal, periapikal iyileşmeyi destekler, taşarsa rezorbe, daimi germe zararsız; ama erken rezorbe olup granülasyon dokusu ile yer değiştirebilir.",
    "Süt dişinde güta perka KULLANILMAZ (altta daimi germ yoksa hariç). Enfeksiyon varsa önce KH, sistemik antibiyotik; enfeksiyon yoksa rezorbe olabilen patla doldurulur.",
    "Süt dişi kanal tedavisi farkları (okul): kron kısa, pulpa tabanında perforasyon riski, kanallar kıvrımlı, fizyolojik rezorpsiyon, aksesuar kanallar, altta germ. Çalışma boyu radyografik apeksten 1 mm kısa; kökte rezorpsiyon varsa 1,5 mm, kemik ve kökte rezorpsiyon varsa 2 mm kısa (Garcia-Godoy). 15 no eğeyle başla, 30–35’e kadar genişlet; basınçsız irrigasyon; kısa (19–21 mm) eğeler.",
    "Endikasyon: apse/fistül, spontan ağrı, pulpada pü veya nekroz, altında daimi germ olmayan süt dişi, kök pulpasının iltihabı, kökler arası kemik kaybı 1/3’ü aşmamış, amputasyonda durmayan kanama. Kontrendikasyon: restore edilemez diş, 1/3’ü aşan kemik yıkımı, perforasyon, internal/eksternal rezorpsiyon, dentijeröz kist, kökün 1/3’ten fazla rezorpsiyonu, ciddi sistemik hastalık.",
    "Kanal tedavisi yapılan süt azısına PÇK yapılır. Başarı kontrolü 6 ayda: ağrı-mobilite-fistül yok, radyolüsensi azalmış, patolojik rezorpsiyon durmuş."
  ],
  kart: [
    ["Kliniğimizdeki süt dişi kanal patı?", "Vitapex: kalsiyum hidroksit + iyodoform + silikon yağı."],
    ["Süt dişinde neden güta perka kullanılmaz?", "Rezorbe olmaz; kök rezorpsiyonunu ve daimi dişin sürmesini engeller."],
    ["Vitapex nasıl uygulanır?", "Şırınga ucu apeksten 1 mm geride; pat enjekte edilir, kanal ağzından taşınca şırınga yavaşça geri çekilir."],
    ["ZOE’nin en önemli dezavantajı?", "Taşarsa rezorbe olmaz, daimi dişin sürme yolunu saptırabilir."],
    ["KRI patının içeriği?", "İyodoform, kamfor, paraklorofenol, mentol."],
    ["Süt dişinde çalışma boyu?", "Radyografik apeksten 1 mm kısa; rezorpsiyon varsa 1,5–2 mm kısa."],
    ["Süt dişi kanal genişletmesi kaç numaraya kadar?", "30–35 numara (kesicilerde 40)."]
  ],
  sozlu: [
    { q: "Klinikte kullandığınız kanal patının içeriği ve süt dişinde nasıl kullanıldığı?", a: "Kliniğimizde Vitapex kullanıyoruz: kalsiyum hidroksit, iyodoform ve silikon yağı içerir. Radyoopaktır, antibakteriyeldir, süt dişi kökleriyle aynı hızda rezorbe olur, taşarsa hızla rezorbe olur ve daimi germe zarar vermez. Kanal temizlendikten, çalışma boyu radyografik apeksten 1 mm kısa belirlenip 30–35 numaraya kadar genişletildikten ve kurutulduktan sonra şırınga ucunu apeksten 1 mm geride yerleştirip patı enjekte ederim; pat kanal ağzından taşınca şırıngayı yavaşça çekerim. Üstüne kaide ve PÇK yaparım. Süt dişinde güta perka kullanılmaz." },
    { q: "İdeal süt dişi kanal patının özellikleri?", a: "Antiseptik, radyoopak, kolay uygulanır ve gerektiğinde çıkarılır, dişi renklendirmez, büzülmez, kanal duvarına iyi uyum sağlar, taşarsa hızla rezorbe olur, periapikal dokulara ve daimi germe zarar vermez, süt dişi kökünün fizyolojik rezorpsiyonuyla uyumlu rezorbe olur." }
  ],
  test: [
    { q: "Süt dişi kanal patı için GEREKMEYEN özellik?", o: ["Antiseptik olmalı", "Kolay uygulanmalı", "Rezorbe olmamalı", "Radyoopak olmalı"], c: 2, w: "Süt dişi patı kökle birlikte rezorbe olmalı." },
    { q: "Vitapex’in içeriği?", o: ["ZnO + öjenol", "KH + iyodoform + silikon yağı", "Formokrezol", "MTA"], c: 1, w: "Ca(OH)₂ + iyodoform + silikon yağı." }
  ],
  kod: ["“Vita-pEX: VİTAmin gibi KH, EXtra iyodoform.”", "Süt dişinde güta = yasak bölge."]
},
/* ------------------------------------------------------------------ 14 */
{ id: "agri", gun: 2, ad: "Çocuklarda Ağrı Kesici", rx: [32],
  komik: [
    { c: "AN", t: "Gece dişi ağrırsa ne vereyim? Evde aspirin var." },
    { c: "KP", t: "ASLA! 16 yaşından küçüklere aspirin yok: Reye sendromu riski." },
    { c: "ST", t: "Parasetamol 10–15 mg/kg, 4–6 saatte bir. Ya da ibuprofen 5–10 mg/kg, 6–8 saatte bir, tok karnına." },
    { c: "AN", t: "Kaç ölçek?" },
    { c: "ST", t: "20 kilo… parasetamol 15 × 20 = 300 mg. Şurup 120 mg/5 mL → 12,5 mL!" },
    { c: "KP", t: "Ve ilaç sadece köprü: asıl tedavi dişin tedavisi!" },
    { fx: "AĞRI GİTTİ!" }
  ],
  bilgi: [
    "İlk seçenekler: Parasetamol 10–15 mg/kg/doz, 4–6 saatte bir (günlük en çok ~60–75 mg/kg, 4 g’ı geçmez). İbuprofen 5–10 mg/kg/doz, 6–8 saatte bir, tok karnına (günlük en çok 40 mg/kg).",
    "Formlar: parasetamol şurup 120 mg/5 mL (forte 250 mg/5 mL); ibuprofen süspansiyon 100 mg/5 mL (forte 200 mg/5 mL).",
    "Formül: mL = (kilo × mg/kg) ÷ (mg/mL). Parasetamol 120 mg/5 mL = 24 mg/mL; ibuprofen 100 mg/5 mL = 20 mg/mL.",
    "Örnek 20 kg: Parasetamol 300 mg → 12,5 mL (2,5 ölçek), günde 4 kez. İbuprofen 200 mg → 10 mL (2 ölçek), günde 3 kez, tok.",
    "Reçete: Rp/ İbuprofen 100 mg/5 mL süspansiyon, 1 şişe. D.S. Günde 3 kez 10 mL, tok karnına. (Hasta adı, yaşı ve kilosu yazılır.)",
    "Kontrendikasyonlar: Aspirin 16 yaş altı (Reye sendromu), kanama bozukluğu, böbrek hastalığı. İbuprofen: NSAİİ’ye duyarlı astım, GİS ülseri, böbrek hastalığı, dehidratasyon, kanama bozukluğu, 3 aydan küçük. Parasetamol: karaciğer hastalığında doz azalt. Kodein: 12 yaş altında kontrendike.",
    "Dental ağrıda ibuprofen anti-inflamatuar olduğu için çok etkilidir; şiddetli ağrıda parasetamol ve ibuprofen dönüşümlü kullanılabilir.",
    "Ağrı için antibiyotik yazılmaz; antibiyotik yalnızca yayılan enfeksiyon, ateş ve sistemik bulgu varsa. Penisilin alerjisinde klindamisin veya makrolidler (okul notu)."
  ],
  kart: [
    ["Parasetamol çocuk dozu?", "10–15 mg/kg, 4–6 saatte bir."],
    ["İbuprofen çocuk dozu?", "5–10 mg/kg, 6–8 saatte bir, tok karnına."],
    ["Çocuklarda neden aspirin verilmez?", "Reye sendromu riski (16 yaş altı)."],
    ["20 kg çocuk, parasetamol 120 mg/5 mL kaç mL?", "15 × 20 = 300 mg → 12,5 mL."],
    ["20 kg çocuk, ibuprofen 100 mg/5 mL kaç mL?", "10 × 20 = 200 mg → 10 mL."],
    ["Kodein kaç yaş altında kontrendike?", "12 yaş."]
  ],
  sozlu: [
    { q: "Çocuklara ağrı kesici olarak ne yazarsın?", a: "İlk seçenek parasetamol (10–15 mg/kg, 4–6 saatte bir) veya ibuprofen (5–10 mg/kg, 6–8 saatte bir, tok karnına). Dozu kiloya göre hesaplarım: örneğin 20 kg bir çocuğa ibuprofen 100 mg/5 mL süspansiyondan günde 3 kez 10 mL. Aspirin 16 yaş altında Reye sendromu riski nedeniyle, kodein 12 yaş altında kullanılmaz. İbuprofeni astım, ülser, böbrek hastalığı ve kanama bozukluğunda vermem. Analjezik geçicidir; asıl tedavi dişin tedavisidir." }
  ],
  test: [
    { q: "15 kg çocuğa ibuprofen 100 mg/5 mL, 10 mg/kg dozla kaç mL?", o: ["5 mL", "7,5 mL", "10 mL", "15 mL"], c: 1, w: "150 mg ÷ 20 mg/mL = 7,5 mL." },
    { q: "Çocukta kontrendike analjezik?", o: ["Parasetamol", "İbuprofen", "Aspirin", "Hiçbiri"], c: 2, w: "Reye sendromu." }
  ],
  kod: ["“Para 15, İbo 10” (mg/kg).", "Aspirin + çocuk = Reye. Kodein + 12 yaş altı = yasak."]
},
/* ------------------------------------------------------------------ 15 */
{ id: "ie", gun: 2, ad: "Enfektif Endokardit Profilaksisi", rx: [],
  komik: [
    { n: "Protez kalp kapağı olan 10 yaşında bir hasta. Bugün çekim var…" },
    { c: "EJ", t: "Kanamalı bir işlem mi? Bakteriler kana karışsın, kalp kapağına yerleşeyim!" },
    { c: "KP", t: "Önce sor: Hasta yüksek riskli mi? İşlem dişetini, periapeksi ya da mukozayı ilgilendiriyor mu?" },
    { c: "ST", t: "Evet ve evet. İşlemden 30–60 dk önce tek doz amoksisilin 50 mg/kg ağızdan." },
    { c: "EJ", t: "Ya penisilin alerjisi varsa?" },
    { c: "ST", t: "Okul tablosu: klindamisin 20 mg/kg, ya da azitromisin/klaritromisin 15 mg/kg, ya da sefaleksin 50 mg/kg." },
    { c: "KP", t: "Sefaleksin sadece anafilaksi, anjiyoödem veya ürtiker öyküsü YOKSA!" },
    { fx: "EJDER YENİLDİ!" }
  ],
  bilgi: [
    "Profilaksi gereken işlemler: dişeti dokusunun veya dişin periapikal bölgesinin manipülasyonu ya da oral mukozanın perforasyonu: çekim, periodontal işlemler (detertraj, kök düzleştirme), apeksi geçen endodonti, subgingival işlemler, intraligamenter anestezi, biyopsi, sütur alma, implant. Pedodontide dişetini manipüle eden PÇK, pulpotomi/pulpektomi de bu kapsamda değerlendirilir.",
    "Profilaksi GEREKMEYENLER: enfekte olmayan dokuya rutin anestezi, radyografi, hareketli protez/ortodontik aparey takılması, braket yapıştırma, ortodontik ayarlama, süt dişinin doğal düşmesi, dudak/mukoza travması kanaması.",
    "Yüksek riskli hastalar: protez kalp kapağı (veya kapak onarımında protez materyal), geçirilmiş infektif endokardit, kalp nakli sonrası valvülopati, konjenital kalp hastalığı: onarılmamış siyanotik (palyatif şant dahil), protez materyal/cihazla tam onarımdan sonraki ilk 6 ay, protez yama yanında rezidüel defekt.",
    "Okul tablosu (çocuk dozları, işlemden 30–60 dk önce tek doz): Standart oral: Amoksisilin 50 mg/kg. Ağızdan alamıyor: Ampisilin 50 mg/kg IM/IV veya Sefazolin/Seftriakson 50 mg/kg IM/IV.",
    "Penisilin/ampisilin alerjisi, oral: Sefaleksin veya sefadroksil 50 mg/kg • Klindamisin 20 mg/kg • Azitromisin veya klaritromisin 15 mg/kg. Alerji + ağızdan alamıyor: Klindamisin 20 mg/kg IM/IV veya Sefazolin/Seftriakson 50 mg/kg IM/IV.",
    "Sefalosporin; penisiline anafilaksi, anjiyoödem veya ürtiker öyküsü olanlarda verilmez.",
    "Güncel not: AHA 2021 klindamisini listeden çıkardı (C. difficile riski) ve doksisiklini ekledi (<45 kg 2,2 mg/kg; ≥45 kg 100 mg). Sözlüde önce okul tablosunu söyle, sonra bu güncellemeyi ekle.",
    "Doz unutulduysa işlemden sonraki 2 saate kadar verilebilir. Yetişkin dozları: amoksisilin 2 g, klindamisin 600 mg, azitromisin 500 mg, sefaleksin 2 g.",
    "Okul notu (konjenital kalp hastası): işlemden önce kardiyoloji konsültasyonu, KHX gargara; yüksek-orta riskte derin dentin çürüğünde DPK, amputasyon ve kanal tedavisi bakteriyemi riski nedeniyle endike değil → çekim; LA vazokonstriktörsüz; 3 ayda bir kontrol."
  ],
  kart: [
    ["Penisilin alerjisi yok, oral profilaksi?", "Amoksisilin 50 mg/kg, işlemden 30–60 dk önce tek doz."],
    ["Penisilin alerjisi var, oral seçenekler (okul)?", "Klindamisin 20 mg/kg • Azitromisin/klaritromisin 15 mg/kg • Sefaleksin/sefadroksil 50 mg/kg."],
    ["Sefaleksin ne zaman verilmez?", "Penisiline anafilaksi, anjiyoödem veya ürtiker öyküsü varsa."],
    ["Ağızdan alamayan, alerjisi olmayan çocuk?", "Ampisilin veya sefazolin/seftriakson 50 mg/kg IM/IV."],
    ["Profilaksi gerektirmeyen 3 işlem?", "Enfekte olmayan dokuya anestezi, radyografi, ortodontik braket yapıştırma (ayrıca süt dişinin doğal düşmesi)."],
    ["AHA 2021 değişikliği?", "Klindamisin çıkarıldı, doksisiklin eklendi."],
    ["Profilaksi dozu unutulursa?", "İşlemden sonra 2 saate kadar verilebilir."]
  ],
  sozlu: [
    { q: "Enfektif endokardit profilaksisi hangi dental işlemlerde yapılır, oral olarak ne verilir?", a: "Yüksek riskli hastalarda (protez kapak, geçirilmiş endokardit, onarılmamış siyanotik veya son 6 ayda protez materyalle onarılmış konjenital kalp hastalığı, kalp nakli sonrası valvülopati) dişetini veya periapikal bölgeyi manipüle eden ya da mukozayı perfore eden tüm işlemlerde: çekim, periodontal işlemler, apeksi geçen endodonti, PÇK gibi subgingival işlemler. Penisilin alerjisi yoksa işlemden 30–60 dakika önce amoksisilin 50 mg/kg oral tek doz. Alerji varsa okul tablosuna göre klindamisin 20 mg/kg, azitromisin veya klaritromisin 15 mg/kg ya da (anafilaksi öyküsü yoksa) sefaleksin 50 mg/kg. AHA 2021 klindamisin yerine doksisiklini öneriyor. Rutin anestezi, radyografi ve braket yapıştırmada gerekmez." }
  ],
  test: [
    { q: "Penisilin alerjisi olmayan 20 kg çocuğa amoksisilin dozu?", o: ["250 mg", "500 mg", "1000 mg", "2000 mg"], c: 2, w: "50 × 20 = 1000 mg." },
    { q: "Profilaksi GEREKMEYEN işlem?", o: ["Süt dişi çekimi", "Kök düzleştirme", "Ortodontik braket yapıştırma", "Subgingival PÇK"], c: 2, w: "Braket yapıştırma dişetini manipüle etmez." },
    { q: "Penisilin alerjisi ve ürtiker öyküsü olan çocuğa oral seçim?", o: ["Sefaleksin", "Amoksisilin", "Azitromisin 15 mg/kg", "Ampisilin"], c: 2, w: "Ürtiker öyküsünde sefalosporin verilmez." }
  ],
  kod: ["“Amoks 50, Klinda 20, Azitro 15, Sefa 50.”", "“Dişeti, Periapeks, Perforasyon” → 3P varsa profilaksi."]
},
/* ------------------------------------------------------------------ 16 */
{ id: "davranis", gun: 3, ad: "Basit Davranış Yönlendirme", rx: [7],
  komik: [
    { c: "KC", t: "Ben Kaygı Canavarı! Bu çocuğu koltuktan kaçıracağım!" },
    { c: "CK", t: "Korkuyorum, iğne var mı?" },
    { c: "ST", t: "Anlat: “Bu Bay Su, dişini yıkayacak.” Göster: parmağına biraz su püskürtür. Uygula: hemen başlar." },
    { c: "KP", t: "ANLAT-GÖSTER-UYGULA! Bir de “Durmamı istersen elini kaldır” de: çocuk kontrolü elinde hisseder." },
    { c: "CK", t: "Ağzımı kocaman açtım!" },
    { c: "ST", t: "Aferin, ağzını kocaman açtığın için teşekkürler! (pozitif pekiştirme)" },
    { c: "KC", t: "Nooo, sesin bile yumuşak ve kararlı…" },
    { fx: "CANAVAR KAÇTI!" }
  ],
  bilgi: [
    "Basit (temel) davranış yönlendirme (okul): ses kontrolü, sözsüz iletişim, anlat-göster-uygula, pozitif pekiştirme, ebeveyn varlığı/yokluğu, dikkat dağıtma. Ayrıca modelleme ve desensitizasyon.",
    "İleri yöntemler (okul): ağız açıcı, medikal immobilizasyon (koruyucu stabilizasyon), sedasyon (N2O/O2 dahil), genel anestezi.",
    "Basit yöntemlerin amaçları (okul): 1) Dikkati toplamak ve sakinliği sağlamak 2) Olumsuz ve bilinmeyen davranışların önüne geçmek 3) Diğer iletişim yöntemlerinin etkinliğini artırmak 4) Çocuğu ünite ve aletlerle tanıştırmak 5) İstenen davranışları desteklemek 6) Hekim ile çocuk arasındaki iletişimi sağlamak.",
    "Anlat-göster-uygula (Addelston): yaşına uygun dille anlat, görerek-duyarak-dokunarak göster, beklemeden uygula.",
    "Ses kontrolü: ses tonu, yüksekliği ve hızında kontrollü değişiklik; dikkat çekmek ve olumsuz davranışı kesmek için. Ebeveyn önceden bilgilendirilir; işitme engelli çocukta işe yaramaz.",
    "Sözsüz iletişim: göz teması, yüz ifadesi, beden dili, dokunma.",
    "Pozitif pekiştirme: istenen davranıştan hemen sonra, somut övgü (“ağzını kocaman açtığın için teşekkürler”). Sosyal (övgü) ve maddi (çıkartma) ödül; maddi ödül sonda, rüşvet olarak değil.",
    "Dikkat dağıtma: hikâye, şarkı, video, sayma; enjeksiyonda dudağı çekme ve konuşma.",
    "Modelleme: kardeş veya başka çocuğun tedavisini izletme, video. Desensitizasyon: kaygı veren uyaranlara kolaydan zora kademeli maruz bırakma (muayene → profilaksi → florür → dolgu).",
    "Frankl skalası: 1 kesinlikle negatif, 2 negatif, 3 pozitif, 4 kesinlikle pozitif. Wright: kooperatif, kooperasyon yeteneği olmayan, potansiyel kooperatif.",
    "İpuçları: ilk randevu kısa ve sabah, kolay işlemle başla; “iğne, acı” gibi korkutucu kelimeler yerine çocuk dili (uyku suyu, Bay Vakum); “dur” sinyali ile kontrol hissi ver."
  ],
  kart: [
    ["Okula göre basit davranış yönlendirme yöntemleri?", "Ses kontrolü, sözsüz iletişim, anlat-göster-uygula, pozitif pekiştirme, ebeveyn varlığı/yokluğu, dikkat dağıtma."],
    ["İleri davranış yönlendirme yöntemleri?", "Ağız açıcı, medikal immobilizasyon, sedasyon, genel anestezi."],
    ["Anlat-göster-uygula’yı kim tanımladı?", "Addelston (1959)."],
    ["Pozitif pekiştirmede altın kural?", "Davranıştan hemen sonra, somut ve spesifik övgü."],
    ["Ses kontrolü kimde uygun değil?", "İşitme engelli çocuklarda; ebeveyn önceden bilgilendirilmeli."],
    ["Frankl 2 ne demek?", "Negatif: tedaviyi isteksiz kabul eder, hafif direnç."],
    ["Basit yöntemlerin 6 amacından 3’ü?", "Dikkati toplamak, olumsuz davranışı önlemek, hekim-çocuk iletişimini sağlamak (ve diğerleri)."]
  ],
  sozlu: [
    { q: "Basit davranış yönlendirme yöntemlerini anlat.", a: "Anlat-göster-uygula: işlemi çocuğun diliyle anlatır, aleti gösterip dokundurur, beklemeden uygularım. Ses kontrolü: tonumu ve hızımı kontrollü değiştirerek dikkatini çeker, olumsuz davranışı keserim. Sözsüz iletişim: göz teması, gülümseme, dokunma. Pozitif pekiştirme: istenen davranıştan hemen sonra spesifik övgü. Dikkat dağıtma: hikâye, şarkı, video. Ebeveyn varlığı/yokluğu: çocuğa göre ebeveyni içeride ya da dışarıda tutarım. Bunlara modelleme ve desensitizasyonu da ekleyebilirim. Amaç; dikkati toplamak, olumsuz davranışı önlemek, çocuğu aletlerle tanıştırmak, istenen davranışı desteklemek ve iletişimi sağlamaktır." }
  ],
  test: [
    { q: "Çocuğun parmağına aeratör suyu püskürtmek hangi basamak?", o: ["Anlat", "Göster", "Uygula", "Pekiştir"], c: 1, w: "Gösterme aşaması." },
    { q: "Hangisi ileri davranış yönlendirme yöntemidir?", o: ["Ses kontrolü", "Pozitif pekiştirme", "Medikal immobilizasyon", "Dikkat dağıtma"], c: 2, w: "Okul listesinde ileri yöntem." }
  ],
  kod: ["“Ses Söz Anlat Övgü Ebeveyn Dikkat” → SSAÖED: “Sessiz Sözlerle Anlat, Övgüyle Ebeveyni Dinlendir.”"]
},
/* ------------------------------------------------------------------ 17 */
{ id: "remin", gun: 3, ad: "Remineralizasyon", rx: [],
  komik: [
    { c: "DD", t: "Asit saldırısı! pH 5,5’in altına düşür, mineden kalsiyum ve fosfatı emerim!" },
    { c: "ST", t: "Beyaz, mat bir nokta: başlangıç çürüğü. Hâlâ geri döner!" },
    { c: "KP", t: "Remineralizasyon: kaybolan kalsiyum ve fosfat iyonlarının mineye geri kazandırılması." },
    { c: "KP", t: "Silahlarımız: florür, CPP-ACP, kalsiyum sodyum fosfosilikat (Novamin), ksilitol ve tükürük!" },
    { c: "DD", t: "Florapatit mi?! O 4,5’e kadar dayanır!" },
    { fx: "TOZ OL DRAKULA!" }
  ],
  bilgi: [
    "Tanım: demineralize mineye kalsiyum ve fosfat iyonlarının geri kazandırılması. Diş çürüğünün başlangıç aşaması geri döndürülebilir; uygun yaklaşımda remineralizasyon gerçekleşir.",
    "Kritik pH: hidroksiapatit için ~5,5; florapatit için ~4,5. Tükürük: bikarbonat tamponu ve süpersatüre Ca/P ile doğal remineralizasyon sağlar (Stephan eğrisi).",
    "Ajanlar (okul): Florür; Kazein fosfopeptit–amorf kalsiyum fosfat (CPP-ACP, Tooth Mousse; florürlüsü CPP-ACFP); Kalsiyum sodyum fosfosilikat (biyoaktif cam, Novamin). Ayrıca ksilitol, nano-hidroksiapatit, arginin, kendiliğinden birleşen peptit P11-4.",
    "Florürün etkisi: florapatit oluşumu (asite dayanıklı), demineralizasyonu azaltır, remineralizasyonu hızlandırır (CaF₂ deposu), bakteriyel enolazı inhibe eder.",
    "Flor uygulama yöntemleri (okul): Sistemik: içme suyu, okul suyu, tuz, süt florlaması, flor damla ve tabletler. Topikal bireysel: diş macunu, gargara, florlu diş ipi/kürdan, sakız. Profesyonel: solüsyon ve jeller (%1,23 APF, %8 SnF₂, %2 NaF), vernik (%2,26 F içeren %5 NaF – Duraphat; %0,1 difluorosilan – Fluor Protector), pat (%1,23 APF, %2–4 NaF).",
    "Diş macunu: 3 yaş altı pirinç tanesi kadar 1000 ppm; 3–6 yaş bezelye kadar 1000–1450 ppm; 6 yaş üstü 1450 ppm.",
    "Akut flor zehirlenmesi (okul): 3–5 mg/kg GİS belirtileri, 5 mg/kg acil müdahale; öldürücü doz çocukta ~16 mg/kg. Süt içir (kalsiyum), kusma; Ca/Mg/Al içeren antasit.",
    "CPP-ACP süt proteini içerir → süt proteini alerjisinde kontrendike.",
    "Beyaz nokta lezyonu: aktif (mat, pürüzlü, plakla örtülü) ↔ inaktif (parlak, sert). Aktifte remineralizasyon tedavisi.",
    "Mikroinvaziv: rezin infiltrasyonu (ICON; %15 HCl ile pürüzlendirme) remineralizasyon değildir ama başlangıç lezyonunu durdurur."
  ],
  kart: [
    ["Remineralizasyon nedir?", "Demineralize mineye kalsiyum ve fosfat iyonlarının geri kazandırılması."],
    ["Hidroksiapatit ve florapatitin kritik pH’ı?", "~5,5 ve ~4,5."],
    ["Okul notundaki 3 remineralizasyon ajanı?", "Florür, CPP-ACP, kalsiyum sodyum fosfosilikat (Novamin)."],
    ["CPP-ACP’nin kontrendikasyonu?", "Süt proteini alerjisi."],
    ["Florür vernik konsantrasyonu?", "%5 NaF = %2,26 F (22.600 ppm), Duraphat."],
    ["APF jel konsantrasyonu?", "%1,23."],
    ["Akut flor zehirlenmesinde acil müdahale dozu?", "5 mg/kg; ilk yardım süt içirmek."]
  ],
  sozlu: [
    { q: "Remineralizasyon nedir, hangi ajanlar kullanılır?", a: "Remineralizasyon, demineralize olmuş mineye kalsiyum ve fosfat iyonlarının geri kazandırılmasıdır; başlangıç çürüğü bu şekilde geri döndürülebilir. Tükürük doğal olarak bunu sağlar. Ajanlar: florür (florapatit oluşturur, kritik pH’ı 5,5’ten 4,5’e çeker, CaF₂ deposu yapar), CPP-ACP (Tooth Mousse; süt alerjisinde kullanılmaz), kalsiyum sodyum fosfosilikat (Novamin), ksilitol, nano-hidroksiapatit ve P11-4. Profesyonel olarak %5 NaF vernik veya %1,23 APF jel uygularız." }
  ],
  test: [
    { q: "Florapatitin kritik pH’ı?", o: ["6,5", "5,5", "4,5", "3,5"], c: 2, w: "Hidroksiapatit 5,5, florapatit 4,5." },
    { q: "Süt proteini alerjisinde kaçınılacak ajan?", o: ["NaF vernik", "CPP-ACP", "Ksilitol", "APF jel"], c: 1, w: "Kazein süt proteinidir." }
  ],
  kod: ["“5,5 düşer, 4,5 direnir” (hidroksi- vs florapatit).", "Okulun üçlüsü: “Flor, Kazein, Cam” (F – CPP-ACP – Novamin)."]
},
/* ------------------------------------------------------------------ 18 */
{ id: "fo", gun: 3, ad: "Fissür Örtücüler", rx: [],
  komik: [
    { c: "CR", t: "Derin, dar fissürler… benim gizli tünellerim!" },
    { c: "KP", t: "Tünelleri kapatıyoruz! Önce temizle, izole et, asitle, yıka, kurut." },
    { c: "ST", t: "Tebeşir beyazı donuk görüntü geldi. Örtücüyü fissürlere yayıyorum, kabarcık yok." },
    { c: "KP", t: "20 saniye ışık. Sonra sondla kaldırmayı dene, oklüzyonu kontrol et!" },
    { c: "CR", t: "Ya tükürük bulaşırsa?" },
    { c: "ST", t: "Tekrar asitlerim! Kısmen sürmüş dişte izolasyon zorsa cam iyonomer örtücü." },
    { fx: "TÜNEL KAPANDI!" }
  ],
  bilgi: [
    "Endikasyon (okul): süt molar, daimi molar ve premolarlarda derin-dar pit/fissür; orta–yüksek çürük riski; kesicilerin lingual pit ve fissürleri; beslenme alışkanlığının yeni başladığı dönemde düz yüzey örtücü; dekalsifikasyon var ama kavite yoksa; sistemik rahatsızlık; ortodontik tedavi.",
    "Kontrendikasyon (okul): sığ pit/fissür; arayüz çürüğü; diş süreli 4 yıldan fazla çürüksüz kalmışsa. Ayrıca dentin çürüğü (restorasyon gerekir) ve izolasyon sağlanamıyorsa rezin örtücü.",
    "Çeşitler (okul): doldurucusuz / yarı dolduruculu / dolduruculu rezin; şeffaf / renkli / opak. Kuşaklar: 1. UV ışıkla, 2. otopolimerizan (kimyasal), 3. görünür ışıkla (1970’ler), 4. florür içeren.",
    "Materyaller (okul): rezin esaslı, cam iyonomer esaslı, hibrit iyonomerler (rezin modifiye CİS, kompomer), amorf kalsiyum fosfat içeren, cam bileşen içeren (giomer).",
    "Uygulama yöntemleri (okul): Non-invaziv: temizle, izole et, asitle, kurut, örtücüyü uygula. İnvaziv: minede renklenme var ama kavite yoksa fissürü frezle hafifçe genişletip (enameloplasti) uygula.",
    "Koruyucu rezin restorasyon (okul): Tip I → invaziv fissür örtücü; Tip II → akışkan kompozit; Tip III → dolgu + fissür örtücü.",
    "Rezin uygulama adımları: 1) Fırça/pomza ile temizlik (yağsız, florürsüz) 2) İzolasyon (rubber dam ideal; pamuk rulo + tükürük emici) 3) %37 fosforik asit 15–30 sn (süt dişinde daha uzun) 4) 15–30 sn yıkama 5) Kurutma: tebeşir beyazı donuk görüntü 6) Kontaminasyon olursa tekrar asit 7) Örtücüyü fissürlere hava kabarcığı olmadan yay 8) 20 sn ışıkla polimerize et 9) Sondla retansiyon kontrolü 10) Artikülasyon kağıdıyla oklüzyon 11) 6 ayda bir kontrol, kayıpta tamamla.",
    "Cam iyonomer örtücü: kısmen sürmüş molar, izolasyon güç, MIH, kooperasyonu az çocuk; asit yerine poliakrilik asit kondisyoner, parmakla bastırma tekniği, vazelin/vernikle koruma. Retansiyonu düşük ama florür salar.",
    "Nagano fissür tipleri: V, U, I, IK, Y. En çürüğe yatkın I ve IK (dar ve derin)."
  ],
  kart: [
    ["Okula göre fissür örtücü kontrendikasyonları?", "Sığ pit/fissür, arayüz çürüğü, dişin sürmesinden 4 yıl geçmiş ve çürüksüz olması."],
    ["Fissür örtücü kuşakları?", "1. UV, 2. otopolimerizan, 3. görünür ışık, 4. florür içeren."],
    ["Asitleme süresi ve konsantrasyonu?", "%37 fosforik asit, 15–30 sn."],
    ["Doğru asitlenmiş minenin görüntüsü?", "Tebeşir beyazı, donuk."],
    ["Tükürük bulaşırsa?", "Yeniden asitle (≈10 sn), yıka, kurut."],
    ["Kısmen sürmüş molara hangi örtücü?", "Cam iyonomer esaslı."],
    ["İnvaziv yöntem ne zaman?", "Fissürde renklenme var ama kavite yoksa; frezle hafif genişletilir."],
    ["Koruyucu rezin restorasyon tipleri?", "Tip I invaziv FÖ, Tip II akışkan kompozit, Tip III dolgu + FÖ."]
  ],
  sozlu: [
    { q: "Fissür örtücü çeşitleri ve uygulama yöntemleri?", a: "Materyale göre rezin esaslı, cam iyonomer esaslı, hibrit iyonomerler (kompomer, RMCİS), ACP ve giomer içerenler. Doldurucu miktarına göre doldurucusuz, yarı dolduruculu, dolduruculu; rengine göre şeffaf, renkli, opak. Polimerizasyona göre 1. kuşak UV, 2. kuşak otopolimerizan, 3. kuşak görünür ışık, 4. kuşak florür salan. Uygulama non-invaziv (temizlik, izolasyon, %37 fosforik asit 15–30 sn, yıkama, tebeşir beyazına kadar kurutma, örtücü, 20 sn ışık, sond ve oklüzyon kontrolü) veya invaziv (renklenme var kavite yoksa fissürü frezle hafifçe genişletip uygulama). Kısmen sürmüş dişte CİS esaslı örtücü kullanırım." }
  ],
  test: [
    { q: "Fissür örtücü için kontrendikasyon?", o: ["Derin dar fissür", "Yüksek çürük riski", "Arayüz çürüğü", "Dekalsifikasyon var, kavite yok"], c: 2, w: "Okul notu: arayüz çürüğü kontrendikasyondur." },
    { q: "3. kuşak fissür örtücü?", o: ["UV ışıklı", "Otopolimerizan", "Görünür ışıklı", "Florür salan"], c: 2, w: "Görünür ışıkla polimerize olur." },
    { q: "Asitledikten sonra tükürük bulaştı. Ne yaparsın?", o: ["Devam ederim", "Sadece kuruturum", "Yeniden asitlerim", "Bonding koyup geçerim"], c: 2, w: "Tükürük proteinleri pürüzlenmiş yüzeyi kapatır." }
  ],
  kod: ["“Temiz İzole Asit Yıka Kurut Ört Işık Kontrol” → “Tİ-AY-KÖ-IK”.", "Kuşaklar: “U-O-G-F” = UV, Oto, Görünür, Florür."]
}
];

const YAS_IPUCU = {
  4: "Tüm süt dişleri ağızda ve kökleri tam. 6’lar kemikte, kronları tamam, kökleri yeni başlıyor. Daimi kesici kronları oluşuyor.",
  5: "Süt dişlenme tam. 6’lar sürmek üzere, kökleri başlamış. Daimi kesici kronları tamamlanıyor, premolar kronları oluşuyor.",
  6: "6’lar ve alt santraller sürüyor; süt kesicilerin kökleri rezorbe oluyor.",
  7: "Üst santraller ve alt lateraller sürüyor; 6’ların kökü yaklaşık yarıda, apeksler açık.",
  8: "Üst lateraller sürüyor; kanin ve premolar kronları tamamlanmış, kökler başlıyor.",
  9: "Alt kaninler sürmeye başlıyor; 6’ların ve alt kesicilerin apeksleri kapanıyor.",
  10: "1. premolarlar sürmeye başlıyor; üst santrallerin apeksi kapanıyor; süt molarların kökleri rezorbe.",
  11: "2. premolarlar ve üst kaninler sürüyor; süt molarlar dökülüyor.",
  12: "7’ler sürüyor; süt dişi kalmamış veya çok az; 8’lerin kronu başlıyor.",
  13: "7’ler ağızda, kökleri açık; kanin ve premolar kökleri kapanıyor.",
  14: "Daimi dişlenme; 7’lerin kökü ilerliyor, 8’lerin kronu tamamlanıyor."
};

const TABLOLAR = [
  { ad: "Daimi dişlerin sürme ve kök tamamlanma yaşları", bas: ["Diş", "Mineralizasyon başlar", "Kron tamam", "Sürme (alt / üst)", "Kök tamam"],
    sat: [["Santral (1)", "3–4 ay", "4–5 y", "6–7 / 7–8 y", "9 / 10 y"], ["Lateral (2)", "3–4 ay (üst 10–12 ay)", "4–5 y", "7–8 / 8–9 y", "10 / 11 y"], ["Kanin (3)", "4–5 ay", "6–7 y", "9–10 / 11–12 y", "12–15 y"], ["1. premolar (4)", "1,5–2 y", "5–6 y", "10–12 / 10–11 y", "12–13 y"], ["2. premolar (5)", "2–2,5 y", "6–7 y", "11–12 / 10–12 y", "13–14 y"], ["1. molar (6)", "Doğum", "2,5–3 y", "6–7 y", "9–10 y"], ["2. molar (7)", "2,5–3 y", "7–8 y", "11–13 / 12–13 y", "14–16 y"], ["3. molar (8)", "8–10 y", "12–16 y", "17–21 y", "18–25 y"]] },
  { ad: "Süt dişlerinin sürme yaşları (ay)", bas: ["Diş", "Üst", "Alt", "Kök tamam"],
    sat: [["Santral (A)", "8–12", "6–10", "1,5 y"], ["Lateral (B)", "9–13", "10–16", "1,5–2 y"], ["Kanin (C)", "16–22", "17–23", "3,25 y"], ["1. molar (D)", "13–19", "14–18", "2,5 y"], ["2. molar (E)", "25–33", "23–31", "3 y"]] },
  { ad: "Travma: splint süreleri (IADT 2020, daimi diş)", bas: ["Yaralanma", "Splint", "Not"],
    sat: [["Sublüksasyon", "2 hafta (gerekirse)", "Pulpa takibi"], ["Ekstrüzyon", "2 hafta", "Repozisyon"], ["Lateral lüksasyon", "4 hafta", "Repozisyon"], ["İntrüzyon", "4 hafta", "Matürde 2 haftada kanal tedavisi"], ["Avülsiyon", "2 hafta (alveol kırığıyla 4 hafta)", "Sistemik antibiyotik, tetanoz"], ["Kök kırığı", "4 hafta (servikal 1/3: 4 ay)", ""], ["Alveol kırığı", "4 hafta", ""]] },
  { ad: "Enfektif endokardit profilaksisi (okul tablosu, çocuk)", bas: ["Durum", "İlaç", "Doz (30–60 dk önce, tek doz)"],
    sat: [["Standart, oral", "Amoksisilin", "50 mg/kg"], ["Ağızdan alamıyor", "Ampisilin / Sefazolin / Seftriakson", "50 mg/kg IM/IV"], ["Penisilin alerjisi, oral", "Sefaleksin veya sefadroksil*", "50 mg/kg"], ["", "Klindamisin**", "20 mg/kg"], ["", "Azitromisin veya klaritromisin", "15 mg/kg"], ["Alerji + ağızdan alamıyor", "Klindamisin** / Sefazolin / Seftriakson*", "20 mg/kg / 50 mg/kg IM/IV"], ["* Anafilaksi/anjiyoödem/ürtiker öyküsünde sefalosporin yok", "** AHA 2021: klindamisin çıkarıldı, doksisiklin eklendi (<45 kg 2,2 mg/kg)", ""]] },
  { ad: "Lokal anestezik maksimum dozlar", bas: ["Ajan", "mg/kg", "En çok", "1 karpül"],
    sat: [["Lidokain %2", "4,4", "300 mg", "1,8 mL = 36 mg"], ["Artikain %4", "7", "500 mg", "1,7 mL = 68 mg"], ["Mepivakain %3", "4,4", "300 mg", "1,8 mL = 54 mg"], ["Prilokain %4", "6", "400 mg", "1,8 mL = 72 mg"]] },
  { ad: "Çocukta analjezik dozları", bas: ["İlaç", "Doz", "Aralık", "Form"],
    sat: [["Parasetamol", "10–15 mg/kg", "4–6 saat", "120 mg/5 mL, 250 mg/5 mL"], ["İbuprofen", "5–10 mg/kg", "6–8 saat, tok", "100 mg/5 mL, 200 mg/5 mL"], ["Aspirin", "Verilmez (<16 y)", "Reye sendromu", ""], ["Kodein", "Verilmez (<12 y)", "Solunum depresyonu", ""]] },
  { ad: "Hangi yer tutucu?", bas: ["Durum", "Seçim"],
    sat: [["Tek taraflı tek süt molar kaybı", "Bant-loop"], ["Destek diş geniş çürük / pulpa tedavili", "Kron-loop"], ["6 sürmeden süt 2. molar kaybı", "Distal shoe"], ["Alt iki taraflı kayıp, kesiciler sürmüş", "Lingual ark"], ["Üst iki taraflı kayıp", "Nance apareyi veya TPA"], ["Çoklu kayıp, ön bölge estetik", "Hareketli (akrilik) yer tutucu"], ["Ardıl eksik / sürmek üzere / yer kaybedilmiş", "Yer tutucu yok (ortodontik değerlendirme)"]] }
];
