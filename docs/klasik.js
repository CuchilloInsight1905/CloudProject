/* Yazılı (final) — tamamen klasik. Kaynak: 1–2, 3–4, 7–8, 9–10. grupların ve bir grubun (grup adı yazılmamış) final kağıtları.
   Cevaplar ders notları, uygulamadaki konu anlatımları ve güncel rehberlere (AAPD, IADT 2020, AHA 2021 / ADA) göre yazıldı.
   Cevap blokları renderDers biçiminde: liste, sira, tablo, kutu. */

const FINAL_GRUP = [
{ id: "g12", ad: "1–2. grup", s: [
  ["fo", "Fissür örtücü (içerik — 3 tane, teknik, endikasyon, kontrendikasyon)"],
  ["ytsec", "Sabit yer tutucu seçiminde kriterler"],
  ["dolgu", "Dolgu materyali seçiminde dikkat edilecekler"],
  ["iletisim", "Non-koopere çocukla iletişim teknikleri"],
  ["ie", "Profilaksi gerektiren dental işlemler (5 tane); reçete yazma (20 kg, alerji yok, oral alıyor)"],
  ["bicim", "Biçim anomalileri nelerdir?"],
  ["aliskanlik", "Zararlı ağız alışkanlıkları nelerdir, parmak emme tedavisi"],
  ["pat", "Süt dişi kanal tedavisinde kullanılan ideal kanal patının özellikleri"]] },
{ id: "g34", ad: "3–4. grup", s: [
  ["selulit", "Selülit–apse farkını tablo şeklinde yaz"],
  ["ecc", "EÇÇ nedir, etiyolojisi, tedavisi"],
  ["n2o", "Azot protoksit endikasyonları"],
  ["cekim", "Süt dişi çekim endikasyonları"],
  ["ieiv", "Enfektif endokardit profilaksisi, oral yolla ilaç kullanamıyor: reçetesini yaz"],
  ["phgs", "PHGS anlat"],
  ["intruzyon", "Matür dişte intrüzyon tedavisini anlat"],
  ["aliskanlik", "Zararlı ağız alışkanlıkları nelerdir, parmak emme tedavisini anlat"]] },
{ id: "g78", ad: "7–8. grup", s: [
  ["ecc", "EÇÇ nedir, hangi dişlerde görülür, sınıflandırmasına göre tedavi seçenekleri"],
  ["molar", "Molar dişlerin sınıf 1 kapanışa gelmesinde etkili mekanizmalar"],
  ["bicim", "Biçim anomalileri nelerdir?"],
  ["probiyotik", "Probiyotiklerin yararları nelerdir (maddeler halinde)"],
  ["avulsiyon", "Avülsiyon nedir, ideal saklama solüsyonları nelerdir ve HBSS’nin özellikleri"],
  ["amputasyon", "Amputasyon endikasyonları ve çeşitleri"],
  ["apeks", "Apeksogenez ve apeksifikasyon farkları nelerdir?"],
  ["ie", "Endokardit profilaksisi gerektiren dental işlemler (5 tane); oral alabiliyor, alerjisi yok, 20 kg: profilaksi reçetesi"]] },
{ id: "g910", ad: "9–10. grup", s: [
  ["vaka8", "8 yaşında, 25 kg, süt 5 numarası, yüzde asimetri var: tedavi planını anlatınız"],
  ["renk", "Çocuklarda görülen içsel ve dışsal renklenmeler nelerdir?"],
  ["fo", "Fissür örtücü endikasyonları ve materyalleri"],
  ["intruzyon", "İntrüze olmuş matür dişte tedavi planını anlatın"],
  ["n2o", "Azot protoksit endikasyonları nelerdir?"],
  ["ecc", "EÇÇ nedir, etiyoloji, sınıflama, etkilenen dişler ve tedavisi"],
  ["aliskanlik", "Parmak emme alışkanlığı olanlarda ağız içi bulgular ve tedavisi nedir?"],
  ["fsamp", "Ferrik sülfat amputasyonu uygulama basamaklarını anlatınız"]] },
{ id: "gx", ad: "Grup adı yazılmamış final", s: [
  ["fo", "Fissür örtücü endikasyonu, uygulama teknikleri ve içeriğine göre 4 örnek"],
  ["pck", "PÇK endikasyonları ve uygulama basamakları"],
  ["agri", "5 yaşında 20 kg çocuğa parasetamol ve ibuprofen: dozaj ve günde kaç kez alacağını içeren reçete"],
  ["kok", "Süt ve daimi dişlerin köklerinin morfolojik farkları"],
  ["n2o", "N₂O kontrendikasyonları"],
  ["florur", "Florürün başlangıç çürüklerine etki mekanizması nedir?"],
  ["sutrv", "Süt dişlerinde görülen travma sonucu daimi dişlerde oluşacak komplikasyonlar"],
  ["phgs", "PHGS’yi anlatın, tedavisi nedir?"]] }
];

const RECETE = ["kutu", "ipucu", "Reçete şablonu: Tarih • Hastanın adı-soyadı, yaşı, kilosu • Tanı\nRp/\n1) İlacın adı, formu ve dozu (ör. Largopen 250 mg/5 mL süspansiyon), kutu sayısı (D.t.d. No: I)\nS: Kaç mL / kaç tablet, günde kaç kez, ne zaman (aç-tok, işlemden önce)\nHekimin adı-soyadı, diploma no, imza-kaşe. 1 ölçek = 5 mL."];

const FINAL_SORU = [
{ id: "fo", konu: "Fissür örtücüler", q: "Fissür örtücü: içerik/materyaller, endikasyon, kontrendikasyon ve uygulama tekniği", c: [
  ["liste", "Endikasyonlar", ["Derin, dar ve retantif pit ve fissürler", "Çürük riski orta-yüksek çocuk; karşı taraftaki benzer dişte çürük olması", "Yeni sürmüş dişler (sürmeden sonraki ilk 4 yıl en riskli dönem)", "Kavitasyonsuz başlangıç fissür çürüğü (beyaz nokta, ICDAS 1–2)", "Kesicilerin lingual pitleri, molarların bukkal ve palatinal pitleri, foramen caecum", "Özel bakım gereksinimli, ağız hijyeni yetersiz, ortodontik tedavi gören çocuklar"]],
  ["liste", "Kontrendikasyonlar", ["Sığ, kendi kendini temizleyen fissürler", "Kavitasyonlu veya dentine ulaşmış çürük (restorasyon gerekir)", "Ara yüz (proksimal) çürüğü olan diş", "Rezin için izolasyonun sağlanamadığı, yeterince sürmemiş diş (bunun yerine cam iyonomer)", "Uzun süredir (4 yıldan fazla) çürüksüz kalmış, düşük riskli diş", "Kısa sürede düşecek süt dişi; kooperasyonu olmayan hasta"]],
  ["tablo", "İçeriğine göre sınıflama (4 örnek)", ["Grup", "İçerik / özellik"], [
    ["Rezin esaslı, dolgusuz", "Bis-GMA veya UDMA; akıcı, fissürlere iyi penetre olur, oklüzyonda kendiliğinden aşınır"],
    ["Rezin esaslı, dolgulu", "Bis-GMA + inorganik doldurucu; aşınma direnci yüksek, oklüzyon kontrolü gerekir"],
    ["Florür salan rezin", "Rezine florür eklenmiş (4. kuşak)"],
    ["Cam iyonomer (geleneksel veya rezin modifiye)", "Florür salar, neme toleranslı; kısmen sürmüş ve izole edilemeyen dişte; retansiyonu düşük"],
    ["Kompomer (poliasit modifiye rezin)", "Rezin ile CİS arası; florür salar"]]],
  ["tablo", "Polimerizasyona göre kuşaklar", ["Kuşak", "Sertleşme"], [["1. kuşak", "Ultraviyole ışık (artık kullanılmıyor)"], ["2. kuşak", "Kimyasal, otopolimerizan (benzoil peroksit + amin)"], ["3. kuşak", "Görünür ışıkla"], ["4. kuşak", "Florür salan"]]],
  ["sira", "Uygulama tekniği", ["Fissürler florürsüz pomza ve fırça ile temizlenir, yıkanır.", "İzolasyon: rubber dam veya pamuk rulo + tükürük emici.", "Kurutma.", "%37 fosforik asit fissürlere ve 2–3 mm çevresine 15–30 sn.", "15–30 sn yıkama, kurutma: mine tebeşir beyazı ve mat görünmeli. Tükürük bulaşırsa yeniden asitlenir.", "Örtücü fırça veya aplikatörle, hava kabarcığı bırakmadan, taşırmadan fissürlere sürülür.", "Işıkla 20 sn polimerizasyon (otopolimerizanda 1–2 dk beklenir).", "Sond ile retansiyon kontrolü, artikülasyon kâğıdıyla oklüzyon kontrolü, gerekirse fazlalık alınır.", "6 ayda bir kontrol; kayıp veya kırık varsa tamir edilir."]]] },

{ id: "ecc", konu: "Erken çocukluk çağı çürükleri", q: "EÇÇ: tanım, etiyoloji, sınıflama, etkilenen dişler ve tedavi", c: [
  ["kutu", "tanim", "EÇÇ (AAPD): 71 aylık (6 yaş) veya daha küçük çocukta bir veya daha fazla süt dişinde çürük (kavitasyonlu veya kavitasyonsuz), çürük nedeniyle çekilmiş veya dolgulu yüzey bulunmasıdır.\nŞiddetli EÇÇ: 3 yaşından küçükte herhangi bir düz yüzey çürüğü; 3–5 yaşta üst ön dişlerde kaviteli, çekilmiş veya dolgulu düz yüzey ya da dmfs ≥4 (3 yaş), ≥5 (4 yaş), ≥6 (5 yaş)."],
  ["liste", "Etiyoloji (çok faktörlü)", ["Mikroorganizma: S. mutans ve laktobasiller; genellikle anneden tükürükle bulaşır (enfeksiyon penceresi 19–31 ay).", "Substrat: gece biberonla süt, meyve suyu veya şekerli içecek; uzun süreli, isteğe bağlı gece emzirme; bala veya şekere batırılmış emzik; sık ara öğün.", "Konak: yeni sürmüş olgunlaşmamış mine, mine hipoplazisi; uykuda tükürük akışının azalması.", "Zaman: kariyojenik gıdanın dişle uzun süre temas etmesi.", "Ağız hijyeninin yetersizliği, florür eksikliği, düşük sosyoekonomik düzey, annenin çürük yükü."]],
  ["liste", "Etkilenen dişler", ["İlk ve en ağır etkilenen: üst süt kesiciler (labial ve palatinal yüzler).", "Sonra üst ve alt süt 1. molarlar, ardından süt kaninler ve 2. molarlar.", "Alt süt kesiciler genellikle sağlamdır: dil tarafından örtülürler ve sublingual-submandibular tükürük bezi kanallarına yakındırlar."]],
  ["tablo", "Sınıflama (Wyne) ve tedavi", ["Tip", "Tablo", "Tedavi"], [
    ["Tip I (hafif–orta)", "Molar ve/veya kesicilerde izole lezyonlar; 2–5 yaş; kariyojenik gıda + hijyen eksikliği", "Aile eğitimi, diyet düzenleme, florürlü macun, florür vernik, remineralizasyon; küçük restorasyonlar (CİS, kompomer)"],
    ["Tip II (orta–şiddetli)", "Üst kesicilerin labial-palatinal yüzleri ± molarlar, alt kesiciler sağlam; biberon veya emzirmenin yanlış kullanımı, diş sürer sürmez başlar", "Gece biberonunu bırakma, aile eğitimi; restorasyonlar (strip kron, kompozit, CİS), pulpa tedavileri, molarlarda PÇK"],
    ["Tip III (şiddetli)", "Alt kesiciler dahil neredeyse tüm dişler; 3–5 yaş; kariyojenik gıda + hijyen eksikliği", "Çoğunlukla genel anestezi altında kapsamlı tedavi: PÇK, pulpotomi-pulpektomi, restore edilemeyenlerin çekimi, yer tutucu veya çocuk protezi"]]],
  ["liste", "Tüm tiplerde", ["Florürlü macun: 3 yaş altı pirinç tanesi, 3–6 yaş bezelye tanesi kadar; ebeveyn fırçalar.", "3–6 ayda bir %5 NaF vernik; aktif lezyonlarda gümüş diamin florür ile çürüğü durdurma.", "3 ayda bir kontrol; şekerli içecek ve gece beslenmesi sınırlandırılır."]]] },

{ id: "n2o", konu: "Azot protoksit sedasyonu", q: "Azot protoksit (N₂O) endikasyonları ve kontrendikasyonları", c: [
  ["liste", "Endikasyonlar", ["Korkulu veya kaygılı, ama iletişim kurulabilen ve burun maskesini kabul eden çocuk", "Güçlü öğürme refleksi", "Lokal anestezi uygulamasını ve uzun süren tedavileri kolaylaştırmak (ağrı eşiğini yükseltir)", "Hafif zihinsel veya fiziksel engeli olup iletişim kurulabilen çocuk", "Stresin zararlı olduğu tıbbi durumlar: kalp hastalığı, kontrollü astım, epilepsi", "Diğer davranış yönlendirme yöntemlerinin yetersiz kaldığı kooperasyonu sınırlı çocuk"]],
  ["liste", "Kontrendikasyonlar", ["Burun tıkanıklığı: üst solunum yolu enfeksiyonu, soğuk algınlığı, adenoid hipertrofisi, sinüzit", "KOAH ve ciddi solunum yolu hastalıkları", "Orta kulak enfeksiyonu, yakın zamanda kulak zarı veya göz ameliyatı (gaz kabarcığı)", "Pnömotoraks, bağırsak tıkanıklığı", "Gebeliğin ilk trimesteri", "Ciddi psikiyatrik ve kişilik bozuklukları", "B12 vitamini veya MTHFR eksikliği; bleomisin tedavisi", "Maskeyi kabul etmeyen, iletişim kurulamayan, çok küçük veya klostrofobik çocuk"]],
  ["kutu", "ipucu", "Uygulama: %100 O₂ ile başlanır, N₂O %10’luk adımlarla artırılır; genellikle %30–50, en fazla %50 N₂O. Sonunda difüzyon hipoksisini önlemek için 3–5 dk %100 O₂ verilir."]] },

{ id: "cekim", konu: "Süt dişi çekimi", q: "Süt dişi çekim endikasyonları", c: [
  ["liste", "Endikasyonlar", ["Restore edilemeyecek kadar harap kron", "Tedavi edilemeyen pulpa veya periapikal enfeksiyon: geniş furkasyon lezyonu, ardıl germi tehdit eden enfeksiyon, fistül ve şişliğin tedaviye yanıt vermemesi", "Kök rezorpsiyonunun 1/3’ü geçmesi, perforasyona giden internal rezorpsiyon", "Fizyolojik düşme zamanı gelmiş, ardılın sürmesini engelleyen persistan süt dişi", "Ankiloze ve ardılın sürmesini engelleyen infraoklüzyondaki süt dişi", "Travma: servikal kök kırığı, kron-kök kırığı, daimi germe doğru itilmiş intrüzyon, ciddi mobil ve aspirasyon riski olan diş (avülse süt dişi replante edilmez)", "Ortodontik nedenler: seri çekim, yer açma", "Aşırı mobil natal-neonatal dişler, süpernümerer dişler", "Kist veya tümörle ilişkili dişler", "Sistemik nedenler: endokardit riski veya immünsüpresyonda (kemoterapi-radyoterapi öncesi) enfeksiyon odağı olabilecek dişler; bu hastalarda riskli pulpa tedavisi yerine çekim", "Fasiyal selülitin kaynağı olan dişler (akut tablo antibiyotikle kontrol altına alındıktan sonra)"]],
  ["kutu", "uyari", "Süt molar erken çekilirse yer tutucu ihtiyacını değerlendir: ardıl var, kökünün 1/3’ü oluşmamış ve üzerinde kemik varsa yer tutucu yapılır."]] },

{ id: "ie", konu: "Enfektif endokardit profilaksisi", q: "Profilaksi gerektiren dental işlemler (5 tane) ve 20 kg, alerjisi yok, oral alabilen çocuğa reçete", c: [
  ["kutu", "tanim", "Profilaksi yüksek riskli hastalarda yapılır: protez kalp kapağı, geçirilmiş enfektif endokardit, onarılmamış siyanotik konjenital kalp hastalığı, protez materyalle onarımdan sonraki ilk 6 ay, kalp naklinde kapak hastalığı."],
  ["liste", "Profilaksi gerektiren işlemler (dişeti, periapeks manipülasyonu veya mukoza perforasyonu)", ["Diş çekimi ve cerrahi işlemler, biyopsi", "Periodontal tedaviler: kanama beklenen diş taşı temizliği, küretaj, periodontal cerrahi", "İntraligamenter anestezi", "Apeksi aşan kök kanal enstrümantasyonu, periapikal cerrahi", "İmplant yerleştirme, avülse dişin replantasyonu", "Ortodontik bant yerleştirme (braket değil), subgingival antibiyotik şerit yerleştirme"]],
  ["liste", "Gerekmeyenler", ["Enfekte olmayan dokuya rutin lokal anestezi", "Radyografi, hareketli protez veya ortodontik aparey takma, braket ayarı", "Süt dişinin düşmesi, dudak veya mukoza travmasından kanama"]],
  ["tablo", "Doz", ["Durum", "İlaç", "Çocuk dozu (tek doz, işlemden 30–60 dk önce)"], [["Alerji yok, oral", "Amoksisilin", "50 mg/kg"], ["Alerji var, oral", "Sefaleksin / azitromisin-klaritromisin / doksisiklin", "50 mg/kg / 15 mg/kg / <45 kg ise 2,2 mg/kg"]]],
  RECETE,
  ["kutu", "cevap", "20 kg, alerji yok, oral alıyor → amoksisilin 50 mg/kg = 1000 mg\nRp/ Largopen 250 mg/5 mL süspansiyon, 1 kutu (D.t.d. No: I)\nS: İşlemden 30–60 dk önce 20 mL (4 ölçek), tek doz.\n(Alternatif: amoksisilin 1000 mg tablet, işlemden 30–60 dk önce 1 tablet.)"]] },

{ id: "ieiv", konu: "Enfektif endokardit profilaksisi", q: "Enfektif endokardit profilaksisi: oral ilaç kullanamayan çocuğa reçete", c: [
  ["tablo", "Oral alamıyor (tek doz, işlemden 30–60 dk önce, IM veya IV)", ["Durum", "İlaç", "Çocuk dozu"], [["Penisilin alerjisi yok", "Ampisilin", "50 mg/kg IM/IV"], ["Penisilin alerjisi yok", "Sefazolin veya seftriakson", "50 mg/kg IM/IV"], ["Penisilin alerjisi var", "Sefazolin veya seftriakson (anafilaksi, anjiyoödem, ürtiker öyküsü yoksa)", "50 mg/kg IM/IV"]]], 
  ["kutu", "uyari", "Çocuk dozu yetişkin dozunu geçmez: ampisilin 2 g, sefazolin-seftriakson 1 g. Klindamisin (eski tablolarda 20 mg/kg IM/IV) AHA 2021, ESC 2023 ve AAPD tarafından artık önerilmiyor; okul tablonda geçiyorsa yazıp yanına bu değişikliği not et."],
  RECETE,
  ["kutu", "cevap", "Örnek: 20 kg, alerjisi yok, oral alamıyor → ampisilin 50 mg/kg = 1000 mg\nRp/ Ampisina 1 g IM/IV flakon, 1 kutu (D.t.d. No: I)\nS: İşlemden 30–60 dk önce 1 g (1 flakon) IM veya IV, tek doz.\nSınavda kilo verilmezse kendin bir kilo yaz (ör. 20 kg) ve hesabı göster."]] },

{ id: "selulit", konu: "Odontojenik enfeksiyonlar", q: "Selülit–apse farkı (tablo)", c: [
  ["tablo", "Selülit ve apse", ["Özellik", "Selülit", "Apse"], [["Seyir", "Akut", "Kronik"], ["Ağrı", "Şiddetli, yaygın", "Lokalize"], ["Boyut", "Büyük", "Küçük"], ["Sınır", "Diffüz, sınırları belirsiz", "Sınırları belirgin"], ["Palpasyon", "Hamur kıvamında, enfeksiyon arttıkça sertleşir", "Fluktuan"], ["Pü", "Yok", "Var"], ["Bakteri", "Aerobik", "Anaerobik"], ["Ciddiyet", "Daha ciddi", "Daha az ciddi"], ["Tedavi", "Antibiyotik + nedenin ortadan kaldırılması; sistemik bulguda sevk", "Drenaj + nedenin ortadan kaldırılması; gerekirse antibiyotik"]]],
  ["kutu", "okul", "Çocuklarda apse çok hızlı selülite dönüşebilir; erken müdahale gerekir. Alt çene kaynaklı selülit ağız tabanına yayılırsa Ludwig anjini gelişir."]] },

{ id: "phgs", konu: "Oral mukoza hastalıkları", q: "Primer herpetik gingivostomatit (PHGS): klinik ve tedavi", c: [
  ["kutu", "tanim", "HSV-1’in ilk enfeksiyonudur; antikoru olmayan çocuklarda, en sık 6 ay–5 yaş arasında görülür."],
  ["liste", "Klinik", ["Prodrom: ateş, halsizlik, iştahsızlık, baş ağrısı, huzursuzluk, servikal-submandibular lenfadenopati", "24–36 saat sonra tüm dişetinde yaygın kızarıklık ve ödem (akut gingivitis)", "Dişeti, damak, dil, dudak ve yanak mukozasında küçük veziküller; patlayıp birleşerek sarı-gri zarlı, kırmızı haleli, ağrılı ülserler oluşur", "Perioral deride kabuklanan veziküller; salya artışı, ağız kokusu", "Çocuk yiyip içemez, dehidratasyon riski vardır", "10–14 günde iz bırakmadan iyileşir", "Bulaşıcıdır; parmağa (herpetik dolama) ve göze bulaşabilir. Virüs trigeminal gangliyonda latent kalır, sonra herpes labialis olarak tekrarlayabilir."]],
  ["liste", "Tedavi (semptomatik ve destekleyici)", ["Bol sıvı; soğuk, yumuşak, asitsiz ve baharatsız gıdalar", "Ağrı ve ateş için parasetamol veya ibuprofen; aspirin verilmez (Reye sendromu)", "Topikal anestezik veya benzidamin gargara, yemeklerden önce", "Sekonder enfeksiyonu önlemek için klorheksidin gargara veya sürme", "Antiviral (AAPD ilaç tablosu): erken dönemde, tercihen ilk 72 saatte asiklovir 20 mg/kg/doz, günde 4 kez, 5–7 gün (doz başı en fazla 800 mg); prospektüs dışı kullanım. Eski klinik çalışma dozu: 15 mg/kg, günde 5 kez, 7 gün", "Antibiyotik gerekmez (sekonder bakteriyel enfeksiyon yoksa)", "Bulaşmayı önleme: el yıkama, göze dokunmama, ortak eşya kullanmama; elektif dental tedaviler iyileşene kadar ertelenir"]],
  ["tablo", "Ayırıcı tanı: rekürren aftöz stomatit", ["", "PHGS", "RAS"], [["Başlangıç", "Vezikül", "Vezikül yok"], ["Yer", "Periosta bağlı mukoza (dişeti) + hareketli mukoza", "Hareketli mukoza (dudak, yanak)"], ["Sistemik bulgu", "Ateş, lenfadenopati", "Genellikle yok"], ["Etken", "HSV-1", "Bilinmiyor (immün)"]]]] },

{ id: "intruzyon", konu: "Travma", q: "Matür (apeksi kapanmış) daimi dişte intrüzyon: tanı ve tedavi planı", c: [
  ["liste", "Tanı", ["Diş komşularından kısa görünür, kemiğe gömülüdür", "Mobil değildir; perküsyonda metalik ses", "Röntgende PDL aralığı seçilemez, mine-sement sınırı komşulardan apikaldedir"]],
  ["tablo", "Repozisyon (IADT 2020)", ["İntrüzyon miktarı", "Tedavi"], [["≤3 mm", "Kendiliğinden sürmesi beklenir; 8 hafta içinde hareket yoksa ankiloz gelişmeden cerrahi veya ortodontik repozisyon"], ["3–7 mm", "Cerrahi (tercih) veya ortodontik repozisyon"], [">7 mm", "Cerrahi repozisyon"]]],
  ["sira", "Tedavi planı", ["Anamnez, tetanoz durumu, klinik ve radyografik muayene", "Lokal anestezi altında repozisyon (miktara göre)", "Esnek splint 4 hafta", "Matür dişte pulpa nekrozu kaçınılmazdır: 2 hafta içinde kanal tedavisine başlanır, kanala geçici kalsiyum hidroksit konur (inflamatuar rezorpsiyonu önler)", "Yumuşak diyet, yumuşak fırça, klorheksidin gargara 1–2 hafta", "Takip: 2 hafta, 4 hafta (splint sökülür), 6–8 hafta, 6 ay, 1 yıl, sonra 5 yıl boyunca yılda bir"]],
  ["liste", "Olası komplikasyonlar", ["Pulpa nekrozu", "İnflamatuar (enfeksiyöz) kök rezorpsiyonu", "Replasman rezorpsiyonu ve ankiloz", "Marjinal kemik kaybı"]],
  ["kutu", "ipucu", "İmmatür dişte miktardan bağımsız önce kendiliğinden sürme beklenir; matür dişte beklemek sadece ≤3 mm’de geçerlidir."]] },

{ id: "aliskanlik", konu: "Zararlı ağız alışkanlıkları", q: "Zararlı ağız alışkanlıkları; parmak emmede ağız içi bulgular ve tedavi", c: [
  ["liste", "Zararlı ağız alışkanlıkları", ["Parmak emme (besleyici olmayan emme), emzik emme", "Dil itme (atipik yutkunma)", "Ağız solunumu", "Dudak emme veya ısırma", "Tırnak yeme (onikofaji)", "Bruksizm", "Yanak emme, kalem vb. cisim ısırma", "Kendine zarar verme (dişeti tırnaklama gibi)"]],
  ["liste", "Parmak emmede ağız içi ve dışı bulgular", ["Üst kesicilerde labiale eğim (protrüzyon) ve diastema", "Alt kesicilerde linguale eğim (retrüzyon)", "Artmış overjet", "Ön açık kapanış", "Üst arkta daralma ve posterior çapraz kapanış (dil aşağıda, yanak kasları baskılı)", "Derin damak, Sınıf II eğilimi", "Buna bağlı dil itme alışkanlığı", "Ağız dışı: parmakta nasır, çatlak, kızarıklık; kısa ve hipotonik üst dudak"]],
  ["kutu", "okul", "3–4 yaşına kadar normal kabul edilir. Etkisini süre, sıklık ve şiddet belirler (günde 6 saatten fazlası maloklüzyon yapar). Daimi kesiciler sürmeden önce bırakılması hedeflenir."],
  ["sira", "Tedavi", ["Danışmanlık: çocukla ve aileyle konuşma; çocuk bırakmaya istekli olmalı, ceza ve azar yok", "Pozitif pekiştirme: ödül takvimi, övgü", "Hatırlatıcılar: parmağa bant, acı tadlı oje, eldiven veya geceleri çorap, dirseği bükülmeyi önleyen bandaj", "Hatırlatıcı apareyler: hareketli (Hawley + dil paravanı) veya sabit (palatal krip/dil kafesi, Bluegrass apareyi); alışkanlık bırakıldıktan sonra 3–6 ay daha takılır", "Maloklüzyon yerleşmişse ortodontik tedavi: çapraz kapanışta üst çene genişletme (quad helix, hızlı genişletme)"]]] },

{ id: "ytsec", konu: "Yer tutucular", q: "Sabit yer tutucu seçiminde kriterler", c: [
  ["liste", "Değerlendirilecekler", ["Hastanın kronolojik ve dental yaşı", "Kaybedilen dişin türü ve sayısı; tek veya çift taraflı; alt veya üst çene", "1. daimi molar sürmüş mü (değilse distal shoe)", "Daimi kesiciler sürmüş mü (lingual ark için gerekli)", "Ardıl dişin varlığı, kök gelişimi (1/3’ü oluşmamışsa yer tutucu), üzerindeki kemik kalınlığı (1 mm kemik ≈ 4–5 ayda geçilir), sürmeye kalan süre", "Kayıptan sonra geçen süre ve mevcut yer kaybı (yer analizi); yer kaybı olmuşsa yer kazanıcı", "Destek dişlerin durumu (çürük destek → kron-loop)", "Oklüzyon, ark tipi, iskeletsel yapı", "Kooperasyon, ağız hijyeni, çürük riski, kontrole gelebilme", "Sistemik durum: endokardit riski ve immünsüpresyonda distal shoe kontrendike"]],
  ["tablo", "Seçim", ["Durum", "Yer tutucu"], [["Tek taraflı tek süt molar kaybı, 6 ağızda", "Bant-loop (destek çürükse kron-loop)"], ["6 sürmeden süt 2. molar kaybı", "Distal shoe"], ["Alt çenede iki taraflı kayıp, kesiciler sürmüş", "Lingual ark"], ["Üst çenede iki taraflı kayıp", "Nance apareyi veya TPA"], ["Süt ön diş kaybı (estetik, konuşma)", "Sabit ön yer tutucu (Groper) veya çocuk protezi"]]]] },

{ id: "dolgu", konu: "Restoratif tedavi", q: "Çocuklarda dolgu materyali seçiminde dikkat edilecekler", c: [
  ["liste", "Hastaya ait", ["Yaş ve kooperasyon (izolasyon ve işlem süresi)", "Çürük riski, ağız hijyeni, beslenme", "Sistemik durum, alerji", "Estetik beklenti"]],
  ["liste", "Dişe ait", ["Süt veya daimi diş; dişin ağızda kalacağı süre (kök rezorpsiyonu, düşme zamanı)", "Kavitenin büyüklüğü ve yüzey sayısı (çok yüzeyli süt molar → PÇK)", "Lokalizasyon: ön veya arka, çiğneme kuvveti", "Pulpa tedavisi yapılmış mı (pulpotomili süt molar → PÇK)", "Mine yapısı: hipoplazi, MIH, amelogenezis imperfekta"]],
  ["liste", "Materyale ait", ["Florür salımı ve yeniden yüklenme", "Dişe adezyon, nem toleransı (izolasyon zorsa CİS)", "Uygulama kolaylığı ve süresi", "Aşınma ve kırılma direnci", "Estetik, biyouyumluluk, maliyet"]],
  ["kutu", "ipucu", "Seçenekler: cam iyonomer, rezin modifiye CİS, kompomer, kompozit, strip kron, paslanmaz çelik kron, zirkonya kron."]] },

{ id: "iletisim", konu: "Davranış yönlendirme", q: "Non-koopere çocukla iletişim teknikleri", c: [
  ["liste", "Temel (iletişimsel) yöntemler", ["Anlat-göster-uygula: çocuğun diliyle anlat, göster ve dokundur, hemen uygula", "Ses kontrolü: ses tonu, şiddeti ve hızını değiştirerek dikkati toplama", "Sözsüz iletişim: göz teması, mimik, dokunma", "Pozitif pekiştirme: istenen davranıştan hemen sonra somut övgü veya küçük ödül", "Dikkat dağıtma: hikaye, şarkı, video, sanal gerçeklik gözlüğü", "Ebeveyn varlığı veya yokluğu", "Modelleme: kardeş veya başka bir çocuğun tedavisini izletme", "Sistematik duyarsızlaştırma: korkuyu en az olandan başlayarak adım adım azaltma", "Kısa ve kolay ilk randevu (muayene, florür), sonra zor işlemler"]],
  ["liste", "İleri yöntemler (temel yöntemler yetmezse, aile onamıyla)", ["Koruyucu stabilizasyon (immobilizasyon), ağız açıcı", "Azot protoksit sedasyonu", "Bilinçli sedasyon (ör. midazolam)", "Genel anestezi"]],
  ["kutu", "okul", "Frankl sınıflaması: 1 kesin olumsuz, 2 olumsuz, 3 olumlu, 4 kesin olumlu. Wright: kooperatif, kooperasyon yeteneği olmayan, potansiyel kooperatif."]] },

{ id: "bicim", konu: "Diş anomalileri", q: "Biçim (şekil) anomalileri", c: [
  ["tablo", "Biçim anomalileri", ["Anomali", "Kısa tanım"], [
    ["Geminasyon", "Tek germ ikiye bölünmeye çalışır; çatallı tek kron, tek kök; diş sayısı normal"],
    ["Füzyon", "İki ayrı germ dentin düzeyinde birleşir; diş sayısı bir eksik"],
    ["Konkresans", "Sürmüş iki dişin yalnızca sementle birleşmesi; en sık üst molarlar"],
    ["Dilaserasyon", "Kron veya kökte keskin açılanma; çoğunlukla süt dişi travmasına bağlı"],
    ["Taurodontizm", "Pulpa odası uzamış, furkasyon apikale kaymış"],
    ["Dens invaginatus (dens in dente)", "Mine organının pulpaya doğru katlanması; en sık üst lateral"],
    ["Dens evaginatus", "Okluzal yüzde, içinde pulpa uzantısı olabilen ek tüberkül; en sık premolarlar"],
    ["Talon tüberkülü", "Kesicinin palatinal singulumundan insizale uzanan ek tüberkül"],
    ["Carabelli tüberkülü", "Üst molarların meziopalatinal tüberkülünde ek tüberkül"],
    ["Mine incisi", "Kökte, genellikle furkasyonda küçük mine birikintisi"],
    ["Ek kök (süpernümerer kök)", "Normalden fazla kök"],
    ["Hutchinson kesicisi, dut molar", "Konjenital sifilize bağlı tornavida şekilli kesici ve dut şeklinde molar"]]],
  ["kutu", "ipucu", "Boyut anomalileri (mikrodonti, makrodonti) ayrı gruptadır; soruda istenirse ekle."]] },

{ id: "pat", konu: "Süt dişi endodontisi", q: "Süt dişi kanal tedavisinde ideal kanal patının özellikleri", c: [
  ["liste", "İdeal süt dişi kanal patı", ["Süt dişi kökünün fizyolojik rezorpsiyonuyla aynı hızda rezorbe olmalı", "Kök ucundan taştığında hızla rezorbe olmalı", "Antiseptik ve antibakteriyel olmalı", "Periapikal dokulara ve daimi diş germine zararsız (biyouyumlu) olmalı", "Kanalı tamamen doldurabilmeli, kanal duvarlarına yapışmalı", "Büzülmemeli, boyutsal olarak stabil olmalı", "Kanalda sert bir kütle haline gelmemeli; gerektiğinde kolayca çıkarılabilmeli", "Kolay hazırlanıp uygulanabilmeli", "Radyoopak olmalı", "Dişte renklenme yapmamalı", "Ucuz olmalı"]],
  ["kutu", "okul", "Örnekler: çinko oksit öjenol (taşarsa rezorbe olmaz), kalsiyum hidroksit (Metapex), iyodoform (KRI), kalsiyum hidroksit + iyodoform + silikon yağı (Vitapex; kliniğimizde). Süt dişinde güta perka kullanılmaz."]] },

{ id: "pck", konu: "Restoratif tedavi", q: "Paslanmaz çelik kron (PÇK): endikasyonlar ve uygulama basamakları", c: [
  ["liste", "Endikasyonlar", ["Çok yüzeyli, geniş çürüklü süt molarlar", "Pulpotomi veya pulpektomi yapılmış süt molarlar", "Çürük riski yüksek çocuklar, EÇÇ, genel anestezi altında tedavi", "Gelişimsel mine-dentin defektleri: hipoplazi, amelogenezis-dentinogenezis imperfekta; MIH’li daimi molarda geçici restorasyon", "Kırık veya bruksizmle aşınmış süt dişleri", "Kron-loop yer tutucu desteği", "Diğer restorasyonların başarısız olduğu durumlar; özel bakım gereksinimli çocuklar"]],
  ["sira", "Uygulama basamakları", ["Radyografi, lokal anestezi, rubber dam ile izolasyon", "Çürüğün temizlenmesi, gerekiyorsa pulpa tedavisi", "Okluzal redüksiyon: okluzal anatomiyi takip ederek 1–1,5 mm", "Proksimal (mezial ve distal) dilim kesim: kontak kaldırılır, sond geçmeli; dişeti altında basamaksız, bıçak sırtı bitim", "Bukkal ve lingualde genellikle kesim yapılmaz; sadece belirgin bukkal kabarıklık (süt 1. molarda meziobukkal çıkıntı) hafifçe azaltılır", "Keskin köşeler yuvarlatılır", "Kron seçimi: meziodistal genişliğe uyan en küçük kron; kron ‘klik’ sesiyle oturmalı", "Kron boyu ayarı: kenar dişeti altına 0,5–1 mm; dişette belirgin ağarma varsa kron makasıyla kısaltılır", "Kenarlar kontur pensiyle içe bükülür (krimpleme), düzeltilip parlatılır", "Oklüzyon kontrolü", "Cam iyonomer simanla simantasyon; hasta pamuk rulo üzerine ısırarak kronu oturtur, taşan siman ve ara yüzdeki artıklar diş ipiyle temizlenir", "Kontrol radyografisi, hijyen talimatı"]],
  ["kutu", "ipucu", "Alternatif: Hall tekniği. Çürük temizlenmez, preparasyon yapılmaz; separatörden sonra kron camiyonomerle doldurulup yerleştirilir."]] },

{ id: "agri", konu: "Çocuklarda ilaç kullanımı", q: "5 yaş, 20 kg çocuğa parasetamol ve ibuprofen reçetesi", c: [
  ["tablo", "Doz", ["İlaç", "Doz", "Aralık", "Günlük en fazla"], [["Parasetamol", "10–15 mg/kg", "4–6 saatte bir", "75 mg/kg (AAPD), en fazla 4 g"], ["İbuprofen", "4–10 mg/kg (AAPD)", "6–8 saatte bir, tok karnına", "40 mg/kg; doz başı en fazla 600 mg"]]],
  ["kutu", "okul", "mL = (kilo × mg/kg) ÷ (mg/mL)\nParasetamol: 20 × 15 = 300 mg; 120 mg/5 mL = 24 mg/mL → 300 ÷ 24 = 12,5 mL\nİbuprofen: 20 × 10 = 200 mg; 100 mg/5 mL = 20 mg/mL → 200 ÷ 20 = 10 mL"],
  RECETE,
  ["kutu", "cevap", "Tarih • Ad Soyad, 5 yaş, 20 kg • Tanı: diş ağrısı\nRp/\n1) Calpol 120 mg/5 mL şurup, 1 kutu (D.t.d. No: I)\nS: 6 saatte bir 12,5 mL (2,5 ölçek), günde 4 kez.\n2) Pedifen 100 mg/5 mL süspansiyon, 1 kutu (D.t.d. No: I)\nS: 8 saatte bir 10 mL (2 ölçek), günde 3 kez, tok karnına.\nHekim adı, diploma no, imza-kaşe"],
  ["kutu", "uyari", "16 yaş altına aspirin yok (Reye sendromu). Ağrı için antibiyotik yazılmaz. Etken madde adını da yazmak güvenlidir: Calpol = parasetamol, Pedifen = ibuprofen."]] },

{ id: "kok", konu: "Süt ve daimi diş farkları", q: "Süt ve daimi dişlerin köklerinin morfolojik farkları", c: [
  ["tablo", "Kök farkları", ["Özellik", "Süt dişi", "Daimi diş"], [
    ["Kök boyu", "Kron boyuna göre uzun ve ince", "Kron boyuna göre daha kısa ve kalın"],
    ["Kök gövdesi (trunk)", "Kısa; kökler mine-sement sınırına yakın ayrılır, furkasyon koronalde", "Uzun; furkasyon daha apikalde"],
    ["Molar kökleri", "Apikale doğru geniş açılır (yayvan); arada premolar germine yer", "Daha az ayrık, birbirine yakın"],
    ["Ön diş kökleri", "Apikal 1/3’te labiale eğik (daimi germ lingualde)", "Düz"],
    ["Kök kanalları", "İnce, kıvrımlı, şeridimsi; çok sayıda aksesuar ve lateral kanal", "Daha belirgin ve düzenli"],
    ["Pulpa odası tabanı", "İnce ve geçirgen; furkasyona açılan aksesuar kanallar (enfeksiyon önce furkasyonda görülür)", "Kalın"],
    ["Kök dentini", "Daha ince", "Daha kalın"],
    ["Fizyolojik rezorpsiyon", "Var; kök boyu ve apeks konumu değişkendir", "Yok"],
    ["Servikal bölge", "Kron-kök birleşiminde belirgin daralma (boyun)", "Daha az belirgin"]]],
  ["kutu", "ipucu", "Bu farklar yüzünden süt dişinde çalışma boyu apeksten 1–2 mm kısa tutulur ve rezorbe olan kanal patı kullanılır."]] },

{ id: "florur", konu: "Florür", q: "Florürün başlangıç çürüklerine etki mekanizması", c: [
  ["liste", "Etki mekanizmaları", ["Remineralizasyonu hızlandırır: kalsiyum ve fosfat iyonlarının demineralize mineye geri dönüşünü artırır; oluşan florapatit/florhidroksiapatit kristalleri asitte daha az çözünür (kritik pH hidroksiapatitte 5,5, florapatitte 4,5).", "Demineralizasyonu baskılar: kristal yüzeyine tutunan ve tükürük-plaktaki serbest florür asit atağında çözünmeyi azaltır.", "Kalsiyum florür (CaF₂) benzeri birikintiler rezervuar görevi görür; pH düştüğünde florür salınır.", "Bakteri metabolizmasını baskılar: enolaz enzimini inhibe ederek glikolizi ve asit üretimini azaltır; hücre içi polisakkarit depolanmasını ve bakteri tutunmasını azaltır."]],
  ["kutu", "okul", "Başlangıç (beyaz nokta) lezyonu yüzey altı demineralizasyondur ve geri dönebilir. Florürün asıl etkisi topikaldir: ağızda sürekli düşük düzeyde florür bulunması en etkilidir."]] },

{ id: "sutrv", konu: "Travma", q: "Süt dişi travması sonucu daimi dişlerde görülebilecek komplikasyonlar", c: [
  ["kutu", "tanim", "Daimi germ, süt kesici kökünün hemen palatinalinde ve apikalindedir. Özellikle intrüzyon ve avülsiyonda ve 3–4 yaştan önce olan travmalarda risk artar."],
  ["liste", "Komplikasyonlar", ["Minede beyaz veya sarı-kahverengi opasite (renklenme)", "Mine hipoplazisi (Turner dişi)", "Kron dilaserasyonu", "Odontoma benzeri malformasyon", "Kök duplikasyonu", "Vestibüler veya lateral kök açılanması (kök dilaserasyonu)", "Kök gelişiminin kısmen veya tamamen durması", "Germ sekestrasyonu", "Sürme bozuklukları: gecikmiş, ektopik sürme veya gömülü kalma", "Süt dişi nekrozu ve periapikal enfeksiyona bağlı germ hasarı; süt dişinin erken kaybıyla yer kaybı"]]] },

{ id: "vaka8", konu: "Odontojenik enfeksiyonlar", q: "8 yaş, 25 kg, süt 2. molardan kaynaklanan yüz asimetrisi: tedavi planı", c: [
  ["kutu", "tanim", "Yüzdeki asimetri süt 2. molardan (75/85 veya 55/65) kaynaklanan odontojenik enfeksiyonun yayıldığını gösterir: fasiyal selülit veya apse."],
  ["sira", "Tedavi planı", ["Anamnez: sistemik hastalık, alerji, ateş, şişliğin ve ağrının süresi, aldığı ilaçlar", "Muayene: ateş, lenfadenopati, ağız açıklığı (trismus), yutma ve solunum güçlüğü, göz kapağında ödem, fluktuasyon; periapikal veya panoramik radyografi (furkasyon lezyonu, rezorpsiyon, ardıl germ)", "Acil sevk: yüksek ateş, halsizlik ve dehidratasyon, yutma veya solunum güçlüğü, gözün kapanması, ağız tabanına yayılım → hastaneye sevk, IV antibiyotik", "Ayaktan tedavide antibiyotik (alerji yok): amoksisilin + klavulanik asit 45 mg/kg/gün, 2 doza bölünür → 25 × 45 = 1125 mg/gün, dozda yaklaşık 560 mg; 400 mg/5 mL süspansiyondan 12 saatte bir 7 mL, 5–7 gün (AAPD: 3–5 günlük kür yeterli olabilir; enfeksiyon düzelince kesmeyi düşün). Penisilin alerjisinde klindamisin 20–30 mg/kg/gün, 3 doza bölünür.", "Ağrı ve ateş: ibuprofen 10 mg/kg = 250 mg → 100 mg/5 mL’den 12,5 mL, 8 saatte bir, tok karnına; veya parasetamol 15 mg/kg = 375 mg → 120 mg/5 mL’den yaklaşık 15 mL, 6 saatte bir", "Drenaj: fluktuasyon varsa intraoral insizyon; pulpa odası açılarak drenaj sağlanabilir", "Kaynağın ortadan kaldırılması: akut tablo antibiyotikle gerileyince (24–72 saat) restore edilemeyen süt 2. molar çekilir", "Yer tutucu: 8 yaşta 6 ağızdadır, ardıl 2. premoların kökü oluşmamıştır → bant-loop (6’ya bant, süt 1. molara loop)", "Kontrol: 24–48 saat sonra; ardıl germin gelişimi ve Turner hipoplazisi açısından takip", "Koruyucu program: hijyen eğitimi, diyet, florür vernik, 6’lara fissür örtücü"]],
  ["kutu", "uyari", "Soruda alt veya üst çene belirtilmemiş: alt 2. süt molarda enfeksiyon submandibular bölgeye, üsttekinde bukkal ve infraorbital bölgeye yayılır. Cevapta varsayımını yaz."]] },

{ id: "renk", konu: "Diş renklenmeleri", q: "Çocuklarda görülen içsel ve dışsal renklenmeler", c: [
  ["tablo", "Dışsal (ekstrinsik) renklenmeler", ["Renk", "Neden"], [["Yeşil", "Kromojenik bakteriler, kötü ağız hijyeni; genellikle üst kesicilerin servikal 1/3’ü"], ["Siyah (siyah çizgi)", "Actinomyces ve demir sülfür; servikalde ince çizgi, ağız hijyeni iyi çocuklarda bile görülür"], ["Turuncu", "Kromojenik bakteriler (Serratia, Flavobacterium)"], ["Kahverengi", "Çay, kahve, klorheksidin, tütün"], ["Siyah", "Demir ilaçları, gümüş diamin florür, gümüş nitrat"], ["Yeşil-mavi", "Bakır ve diğer metal tuzları"]]],
  ["tablo", "İçsel (intrinsik) renklenmeler", ["Grup", "Örnekler"], [["Odontogenez sırasında, sistemik", "Tetrasiklin (sarı-gri-kahve bantlar, UV’de floresans), florozis (beyaz opak → kahverengi), neonatal hiperbilirubinemi ve eritroblastozis fetalis (yeşil-sarı), konjenital eritropoietik porfiri (kırmızı-kahve, UV’de kırmızı floresans)"], ["Odontogenez sırasında, kalıtsal / gelişimsel", "Amelogenezis imperfekta, dentinogenezis imperfekta (opalesan mavi-gri-kahve), MIH, Turner hipoplazisi"], ["Odontogenezden sonra", "Travma: pulpa içi kanama (pembe → gri), pulpa nekrozu (gri), kalsifik metamorfoz (sarı), internal rezorpsiyon (pembe nokta); endodontik ve restoratif materyaller (iyodoform sarı, amalgam gri); çürük; yaşlanma"]]],
  ["kutu", "ipucu", "Tedavi: dışsal → profesyonel temizlik ve polisaj, hijyen eğitimi. İçsel → mikroabrazyon, ağartma, kompozit veya kron. Amelogenezis imperfektada ağartma yapılmaz."]] },

{ id: "fsamp", konu: "Süt dişi pulpa tedavisi", q: "Ferrik sülfat amputasyonu (pulpotomi) uygulama basamakları", c: [
  ["kutu", "tanim", "Endikasyon: vital süt molar, çürük veya mekanik ekspoz; spontan ağrı, fistül, şişlik, patolojik mobilite yok; radyografide furkasyon veya periapikal lezyon, patolojik rezorpsiyon yok; kanama 3–5 dakikada durabiliyor."],
  ["sira", "Basamaklar", ["Radyografi, lokal anestezi, rubber dam ile izolasyon", "Çürüğün tamamen temizlenmesi (önce kenarlardan)", "Pulpa odası tavanının steril frezle tamamen kaldırılması", "Kron pulpasının keskin ekskavatör veya düşük devirli rond frezle kanal ağızlarına kadar uzaklaştırılması", "Serum fizyolojikle yıkama; nemli pamuk peletle hafif baskı ile kanamanın kontrolü", "%15,5 ferrik sülfat kanal ağızlarına 15 saniye uygulanır (aplikatörle ovalayarak veya pamuk peletle)", "Serum fizyolojikle yıkanır, kurutulur; kanal ağızlarında koyu kahverengi pıhtı görülür. Kanama durmazsa bir kez tekrarlanır; yine durmazsa pulpektomi veya çekim", "Pulpa odası çinko oksit öjenol ile doldurulur", "Üzerine cam iyonomer kaide ve paslanmaz çelik kron", "Kontrol radyografisi; 6 ayda bir klinik ve radyografik takip"]],
  ["kutu", "okul", "Mekanizma: ferrik iyonu kan proteinleriyle metal-protein kompleksi oluşturur ve kapiller ağızları tıkar (hemostatik). Koruyucu (preservatif) gruptadır, fiksatif değildir."]] },

{ id: "molar", konu: "Oklüzyon gelişimi", q: "Molar dişlerin Sınıf I kapanışa gelmesinde etkili mekanizmalar", c: [
  ["tablo", "Süt 2. molarlarda terminal düzlem", ["Terminal düzlem", "Daimi molar ilişkisi"], [["Düz (flush) — en sık", "Önce uç uca; aşağıdaki mekanizmalarla Sınıf I"], ["Mezial basamak", "Sınıf I (büyüme fazlaysa Sınıf III)"], ["Distal basamak", "Sınıf II"]]],
  ["liste", "Mekanizmalar", ["Erken mezial kayma: 6 yaşta 1. daimi molarların sürme kuvvetiyle alt çenedeki primat aralığın (alt kaninin distali) kapanması; alt molar meziale kayar. Aralıklı (Tip I, Baume) arklarda görülür.", "Geç mezial kayma: süt kanin ve molarların daimi dişlerle değişimi sırasında Leeway aralığının kapanması. Altta Leeway aralığı daha büyük (her yanda ≈1,7 mm, üstte ≈0,9 mm) olduğu için alt 6 daha fazla meziale kayar.", "Alt çenenin üst çeneden daha fazla ve daha uzun süre öne doğru büyümesi (diferansiyel büyüme).", "Bu mekanizmaların birlikte etkisiyle uç uca molar ilişkisi Sınıf I’e döner."]]] },

{ id: "probiyotik", konu: "Koruyucu diş hekimliği", q: "Probiyotiklerin yararları", c: [
  ["kutu", "tanim", "Probiyotik (WHO/FAO): yeterli miktarda alındığında konakçıya sağlık yararı sağlayan canlı mikroorganizmalar. Ağız sağlığında en çok Lactobacillus (L. reuteri, L. rhamnosus), Bifidobacterium ve Streptococcus salivarius (K12, M18) kullanılır."],
  ["liste", "Yararları", ["S. mutans sayısını azaltır, çürük riskini düşürür", "Patojenlerle rekabet eder: tutunma yerlerini işgal ederek biyofilm oluşumunu engeller", "Bakteriyosin, hidrojen peroksit ve organik asit gibi antimikrobiyal maddeler üretir", "Plak pH’sını dengeler", "Gingivitis ve periodontal hastalıkta dişeti kanamasını ve iltihabı azaltır", "Ağız kokusunu azaltır (S. salivarius K12)", "Oral kandidiyazisi azaltır", "Bağışıklık sistemini düzenler", "Sistemik yararlar: antibiyotiğe bağlı ishali ve laktoz intoleransı şikayetlerini azaltır, bağırsak florasını düzenler, alerjik hastalıklarda (atopik dermatit) koruyucu etki", "Kolay kullanım: yoğurt, kefir, süt, pastil, sakız, damla"]]] },

{ id: "avulsiyon", konu: "Travma", q: "Avülsiyon; ideal saklama solüsyonları ve HBSS’nin özellikleri", c: [
  ["kutu", "tanim", "Avülsiyon: dişin travma sonucu alveol soketinden tamamen çıkmasıdır. Daimi diş mümkünse hemen replante edilir; süt dişi replante edilmez."],
  ["liste", "Saklama solüsyonları (IADT 2020 sırası)", ["Süt (soğuk süt; en pratik ve ilk önerilen)", "Hank’in dengeli tuz solüsyonu (HBSS); biyolojik olarak en uygun ortamlardan, Viaspan da bu gruptadır", "Tükürük (bir kaba tükürülmüş; çocuğun ağzında tutmak yutma riski taşır)", "Serum fizyolojik", "Diğerleri: propolis, yeşil çay, hindistan cevizi suyu", "Su kullanılmaz (hipotoniktir, PDL hücrelerini patlatır); diş kuru bırakılmaz (60 dakikadan uzun kuru kalırsa PDL hücreleri ölür)"]],
  ["liste", "HBSS’nin özellikleri", ["Fizyolojik pH (≈7,2) ve osmolalite (≈280–320 mOsm/kg)", "Glukoz, kalsiyum, magnezyum, potasyum, sodyum klorür, fosfat ve bikarbonat içerir; PDL hücrelerini besler", "PDL hücrelerinin canlılığını 24 saate kadar korur; kurumuş hücreleri onarabilir", "Steril, toksik değil; soğutma gerektirmez, raf ömrü uzundur", "Ticari kit olarak bulunur (Save-A-Tooth); okul, spor salonu ve ilk yardım çantasında bulundurulması önerilir"]],
  ["kutu", "ipucu", "Not: Kağıtta “iss” olarak geçen kısaltmanın HBSS olduğu varsayıldı."]] },

{ id: "amputasyon", konu: "Süt dişi pulpa tedavisi", q: "Amputasyon (pulpotomi) endikasyonları ve çeşitleri", c: [
  ["liste", "Endikasyonlar", ["Çürük veya mekanik ekspozlu, vital pulpalı süt dişi", "İnflamasyon kron pulpasıyla sınırlı: spontan ağrı yok, sadece uyaranla kısa süren ağrı", "Kanama kanal ağızlarında 3–5 dakikada kontrol edilebiliyor", "Klinik ve radyografik olarak furkasyon veya periapikal lezyon, internal-eksternal patolojik rezorpsiyon, fistül, şişlik, patolojik mobilite yok", "Diş restore edilebilir ve kök rezorpsiyonu 1/3’ü geçmemiş", "Apeksi açık genç daimi dişte travma veya çürük sonucu ekspoz (apeksogenez amaçlı parsiyel veya servikal pulpotomi)"]],
  ["tablo", "Çeşitleri — amaca göre", ["Grup", "Yöntem ve materyal"], [["Devitalizasyon (mumifikasyon)", "Formokrezol (Buckley, 1/5 seyreltik, 5 dk), elektrocerrahi, lazer"], ["Koruma (preservasyon, minimal devitalizasyon)", "Glutaraldehit, ferrik sülfat"], ["Rejenerasyon (indüksiyon)", "Kalsiyum hidroksit, MTA, Biodentine, kemik morfogenetik proteinler"]]],
  ["liste", "Diğer ayrımlar", ["Uygulama düzeyine göre: parsiyel (Cvek) pulpotomi — ekspoz altından 1–2 mm pulpa alınır; servikal (tam koronal) pulpotomi — kron pulpasının tamamı kanal ağızlarına kadar alınır", "Pulpanın durumuna göre: vital amputasyon (anestezi altında, bu günkü yöntem) ve mortal (devital) amputasyon (arsenik veya paraformaldehitle pulpa öldürülerek; artık önerilmiyor)"]]] },

{ id: "apeks", konu: "Genç daimi diş endodontisi", q: "Apeksogenez ve apeksifikasyon farkları", c: [
  ["tablo", "Farklar", ["Özellik", "Apeksogenez", "Apeksifikasyon"], [
    ["Pulpa", "Canlı (vital)", "Nekrotik veya geri dönüşümsüz hasarlı"],
    ["Amaç", "Kök gelişiminin fizyolojik olarak sürmesi: kök boyu uzar, duvarlar kalınlaşır, apeks kapanır", "Açık apekste kalsifiye bir bariyer oluşturmak"],
    ["Hertwig epitel kını", "Canlılığını korur", "Hasar görmüştür"],
    ["Yöntem", "İndirekt ve direkt kuafaj, parsiyel (Cvek) ve servikal pulpotomi", "Kanal temizlenip şekillendirilir; KH ile uzun dönem veya MTA ile 3–5 mm apikal tıkaç, sonra kanal dolumu"],
    ["Materyal", "Kalsiyum hidroksit, MTA, Biodentine", "Kalsiyum hidroksit (1–3 ayda bir yenilenir, 6–24 ay), MTA (tek veya iki seans)"],
    ["Sonuç", "Uzun ve kalın duvarlı kök; kırılma riski düşük", "Kök kısa ve ince kalır; kırılma riski yüksek"],
    ["Süre ve takip", "1–2 yıl; 3 ayda bir kontrol; pulpa nekroza giderse apeksifikasyona geçilir", "KH ile 6–24 ay; MTA ile kısa"]]],
  ["kutu", "ipucu", "Nekrotik immatür dişte bir seçenek daha var: rejeneratif endodonti (revaskülarizasyon) — kök gelişiminin devam etmesi sağlanabilir."]] }
];

/* Yazılı modu kartları (klasik sorulardan) */
const KLASIK_KART = [
["EÇÇ tanımı (AAPD)?", "71 ay veya daha küçük çocukta en az bir süt dişinde çürük (kaviteli veya değil), çürük nedeniyle çekilmiş veya dolgulu yüzey."],
["EÇÇ’de en son etkilenen ve korunan dişler?", "Alt süt kesiciler (dil örter, tükürük bezi kanalları yakın)."],
["Wyne Tip II EÇÇ?", "Üst kesicilerin labial-palatinal yüzleri ± molarlar, alt kesiciler sağlam; biberon veya emzirmenin yanlış kullanımı."],
["N₂O konsantrasyonu ve bitiş?", "Genellikle %30–50, en fazla %50; sonunda 3–5 dk %100 O₂ (difüzyon hipoksisi)."],
["N₂O’nun en sık kontrendikasyonu?", "Burun tıkanıklığı (üst solunum yolu enfeksiyonu), KOAH, orta kulak enfeksiyonu, gebeliğin ilk trimesteri."],
["IE profilaksisi, alerji yok, oral, 20 kg?", "Amoksisilin 50 mg/kg = 1000 mg; 250 mg/5 mL’den 20 mL, işlemden 30–60 dk önce tek doz."],
["IE profilaksisi, oral alamıyor, alerji yok?", "Ampisilin 50 mg/kg IM/IV veya sefazolin/seftriakson 50 mg/kg IM/IV."],
["20 kg parasetamol dozu (120 mg/5 mL)?", "300 mg = 12,5 mL, 6 saatte bir, günde 4 kez."],
["20 kg ibuprofen dozu (100 mg/5 mL)?", "200 mg = 10 mL, 8 saatte bir, günde 3 kez, tok karnına."],
["PHGS etkeni ve yaşı?", "HSV-1; en sık 6 ay–5 yaş."],
["PHGS’de antiviral (AAPD)?", "Erken (ilk 72 saat) asiklovir 20 mg/kg/doz, günde 4 kez, 5–7 gün; doz başı en fazla 800 mg."],
["Matür dişte 3–7 mm intrüzyon?", "Cerrahi (tercih) veya ortodontik repozisyon, 4 hafta esnek splint, 2 hafta içinde kanal tedavisi."],
["Matür dişte ≤3 mm intrüzyon?", "Kendiliğinden sürme beklenir; 8 haftada hareket yoksa repozisyon."],
["Parmak emme hangi yaşa kadar normal?", "3–4 yaş; daimi kesiciler sürmeden bırakılmalı."],
["Parmak emmede 3 ağız içi bulgu?", "Üst kesici protrüzyonu, ön açık kapanış, posterior çapraz kapanış (üst arkta daralma)."],
["Fissür örtücü asitleme?", "%37 fosforik asit, 15–30 sn, fissürler ve 2–3 mm çevresi."],
["Fissür örtücü kuşakları?", "1 UV, 2 otopolimerizan, 3 görünür ışık, 4 florür salan."],
["Kısmen sürmüş dişte fissür örtücü?", "Cam iyonomer esaslı örtücü."],
["Ferrik sülfat konsantrasyonu ve süresi?", "%15,5, 15 saniye."],
["Ferrik sülfat amputasyonundan sonra pulpa odası?", "Çinko oksit öjenol + CİS kaide + PÇK."],
["Amputasyon materyalleri amaca göre?", "Devitalizasyon: formokrezol • Koruma: glutaraldehit, ferrik sülfat • Rejenerasyon: KH, MTA."],
["Avülsiyonda saklama ortamı sırası (IADT 2020)?", "Süt > HBSS > tükürük > serum fizyolojik; su zayıf ama kurumaktan iyi."],
["HBSS PDL hücrelerini ne kadar korur?", "24 saate kadar."],
["Erken mezial kayma?", "6’ların sürmesiyle alt primat aralığın kapanması (≈6 yaş)."],
["Geç mezial kayma?", "Süt molar–premolar değişiminde Leeway aralığının kapanması; altta daha büyük (≈1,7 mm)."],
["Distal basamak terminal düzlem?", "Sınıf II molar ilişkisine gider."],
["Süt molar kökleri neden yayvan?", "Altta gelişen premolar germine yer açmak için."],
["Florapatitin kritik pH’sı?", "4,5 (hidroksiapatit 5,5)."],
["Florürün bakteri üzerindeki etkisi?", "Enolaz inhibisyonu → glikoliz ve asit üretimi azalır."],
["Süt dişi travması sonrası daimi dişte en sık bulgu?", "Mine opasitesi ve hipoplazi (Turner dişi)."],
["Tetrasiklin renklenmesi nasıl ayırt edilir?", "Sarı-gri-kahve bantlar; UV ışıkta floresans verir."],
["Siyah çizgi (black stain) nedeni?", "Actinomyces ve demir sülfür; servikalde ince çizgi."],
["Apeksifikasyonda MTA tıkaç kalınlığı?", "3–5 mm."],
["PÇK okluzal redüksiyon?", "1–1,5 mm; proksimalde basamaksız bıçak sırtı bitim."],
["Süt dişi pulpotomisinde güncel ilk tercih (AAPD 2024)?", "Kalsiyum silikat simanlar (MTA, Biodentine); ferrik sülfat için kullanılmaması yönünde koşullu öneri."],
["İdeal süt dişi kanal patının en önemli özelliği?", "Kökle aynı hızda rezorbe olması; taşarsa hızla rezorbe olması."]
];
