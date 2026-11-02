/* Önceki grupların sözlü soruları ve notlara göre düz cevaplar. */
const CIKMIS = [
{ q: "Panoramik radyografiye bakarak çocuğun yaşını tahmin ediniz.",
  a: [
"Önce dişlenme dönemine bakarım: sadece süt dişi varsa 6 yaştan küçük, süt ve daimi birlikteyse 6–12 yaş (karışık dişlenme), hiç süt dişi kalmamışsa 12 yaş üstüdür.",
"Sonra ağızdaki dişlere bakarım. 6’lar ve alt santraller 6–7 yaşta, üst santral ve alt lateral 7–8 yaşta, üst lateral 8–9 yaşta, alt kanin 9–10 yaşta, 1. premolarlar 10–11 yaşta, 2. premolarlar ve üst kanin 11–12 yaşta, 7’ler 12–13 yaşta sürer.",
"Ardından kemikteki germlere bakarım: daimi diş kökünün 2/3–3/4’ü oluşunca sürer, apeksi sürdükten 2–3 yıl sonra kapanır. 6’ların ve alt kesicilerin apeksi 9–10 yaşta, üst santralin apeksi 10 yaşta kapanır. 8’in kriptası 8–10 yaşta görülür.",
"Bu bulguları birleştirip ±1 yaş aralığı veririm. Örnek: “Karışık dişlenme; 6’lar ve tüm kesiciler daimi, üst lateraller yeni sürmüş; kanin ve premolarların kökleri yeni başlamış; 6’ların apeksi açık. Hasta yaklaşık 8–9 yaşında.”"] },

{ q: "Panoramikteki anomali nedir? Yer tutucu gerekiyorsa hangisini koyarsınız? Panoramikteki teşhisleri tek tek söyleyiniz.",
  a: [
"Teşhisleri her zaman aynı sırayla söylerim: 1) dişlenme dönemi ve yaş, 2) diş sayısı (eksik/fazla diş), 3) konum anomalileri (rotasyon, enversiyon, ektopik sürme, infraoklüzyon), 4) şekil ve yapı anomalileri, 5) çürükler ve mevcut restorasyonlar (kompozit, PÇK, kanal dolgusu, yer tutucu), 6) pulpa–periapeks–furkasyon lezyonları, 7) ardıl daimi germlerin durumu, 8) kemik ve çevre yapılar. Her bulguya FDI numarası veririm.",
"Süt molarlarda enfeksiyon ilk furkasyonda radyolüsensi olarak görülür. Furkasyon radyolüsensisi 1/3’ü geçmişse çekim endikasyonu vardır.",
"Yer tutucu kararı: ardıl germ var mı, kökünün ne kadarı oluşmuş, üstünde kemik var mı, yer kaybı olmuş mu bakarım. Ardılın kökünün 1/3’ü oluşmamışsa ve üstünde kemik varsa yer tutucu yaparım. Ardıl yoksa veya sürmek üzereyse yapmam.",
"Seçim: tek taraflı tek süt molar kaybında bant-loop; destek diş çürüklü veya pulpa tedavili ise kron-loop; 6 sürmeden süt 2. molar kaybında distal shoe; altta iki taraflı kayıpta (daimi kesiciler sürmüşse) lingual ark; üstte iki taraflı kayıpta Nance apareyi veya transpalatal ark; çoklu kayıp ve ön bölgede hareketli yer tutucu.",
"Okulun sınıflaması: yarı sabit (bant-loop, kron-loop, distal shoe), sabit (lingual ark, Nance, TPA), hareketli protezler."] },

{ q: "Komplike kron kırığı; hasta 9 yaşında, dişlerden biri büyük kırık, diğerinde ekspoz var. Yaralanmayı sınıflandırınız ve tedavi ediniz.",
  a: [
"Önce anamnez alırım: ne zaman, nerede, nasıl oldu; tetanoz aşısı; bilinç kaybı, kusma, baş ağrısı var mı. Sonra klinik muayene (yumuşak doku, mobilite, perküsyon, pulpa testleri) ve farklı açılı periapikal + okluzal radyografi; dudakta yara varsa kırık parça için dudak filmi çekerim.",
"Sınıflama (Andreasen): pulpası açık olmayan büyük kırık → komplike olmayan kron kırığı (mine-dentin). Pulpası açık olan → komplike kron kırığı (mine-dentin-pulpa).",
"9 yaşında santral kesicinin apeksi henüz açıktır (≈10 yaşta kapanır), amacım pulpayı canlı tutup kök gelişimini sürdürmektir (apeksogenezis).",
"Komplike olmayan kron kırığı: kırık parça varsa dentin bağlayıcı ile yapıştırırım, yoksa dentini örtüp kompozit yaparım. Pulpaya çok yakınsa kalsiyum hidroksit + CİS kaide koyarım.",
"Komplike kron kırığı: açıklık 1,5–2 mm’ye kadar ve hasta hemen gelmişse direkt pulpa kuafajı yaparım. Açıklık 2 mm’den büyükse ya da küçük ama hasta geç gelmişse Cvek (parsiyel) pulpotomi yaparım: rubber dam altında su soğutmalı elmas frezle 1–2 mm pulpa alınır, serum fizyolojikle kanama durdurulur, kalsiyum hidroksit (veya MTA) konur, CİS kaide ve kompozit ile kapatılır. İlk 24 saatte pulpada sadece yüzeyel hiperplastik reaksiyon olduğundan Cvek başarılıdır.",
"Takip: 6–8 hafta, 3 ay, 6 ay, 1 yıl ve sonra 5 yıl boyunca yılda bir klinik ve radyografik kontrol."] },

{ q: "Kron kırıklarını anlatınız.",
  a: [
"Mine çatlakları: madde kaybı yoktur, dişin vertikal aksına paralel ışıkla görülür, mine-dentin sınırını geçmez. Genelde tedavi gerekmez.",
"Mine kırıkları: en çok üst santralin mezial veya distal köşesinde görülür. Keskin kenar düzeltilir veya kompozit yapılır.",
"Komplike olmayan kron kırığı: dentin açıktadır; termal uyaranlara, kurumaya ve basınca hassastır. Acil tedavi gerekir: dentin bağlayıcı + kompozit veya kırık parçanın bağlayıcı ajanla yapıştırılması. Geç kalınırsa pulpa nekrozu ve kanal tedavisi gerekebilir.",
"Komplike kron kırığı: mine, dentin ve pulpa açıktır; pulpa üzerinde ince fibrin tabakası vardır. 7–16 yaşta ilk 24 saatte pulpada sadece hiperplastik reaksiyon görülür. İlk olarak pulpa kuafajı ve amputasyon düşünülür: direkt kuafaj ancak genç daimi dişte birkaç saat içinde gelinen küçük ekspozda; kök gelişimi tamamlanmamışsa amputasyon (Cvek); bunlar olmazsa kanal tedavisi.",
"Kron-kök kırıkları: hareketli parça geçici olarak yapıştırılır; sonra parçanın çıkarılıp restorasyon, gingivektomi, ortodontik/cerrahi ekstrüzyon, dekoronasyon ya da çekim yapılır."] },

{ q: "Klinikte kullandığınız vazokonstriktörlü anestezik nedir? En sık karşılaşılan komplikasyonları nelerdir?",
  a: [
"Kliniğimizde artikain %4 + epinefrin 1:100.000 (veya 1:200.000) kullanıyoruz. Vazokonstriktör anestezinin süresini uzatır, kana geçişi yavaşlatıp toksisiteyi azaltır ve kanamayı azaltır.",
"Artikainin maksimum dozu 7 mg/kg’dır (en çok 500 mg); 4 yaş altında önerilmez. Lidokainin maksimum dozu 4,4 mg/kg’dır.",
"Çocuklarda en sık komplikasyon, anestezi sonrası uyuşukluk sırasında dudak, yanak veya dili ısırmadır. Bunu önlemek için aileyi ve çocuğu uyarır, gerekirse pamuk rulo koyarım.",
"Diğer lokal komplikasyonlar: hematom (özellikle tüber bölgesinde pterigoid pleksus), trismus, iğne kırılması, parestezi, geçici fasiyal paralizi. Sistemik komplikasyonlar: psikojenik senkop (en sık sistemik), toksik doz aşımı, alerji ve methemoglobinemi.",
"Çocukta farklar: tüber bölgesi yüzeyeldir, ramus kısa ve dardır, kemik daha az kalsifiyedir; iğne daimi germ foliküllerine zarar vermemelidir."] },

{ q: "Biçim anomalilerini sayınız.",
  a: [
"Carabelli tüberkülü, taurodontizm, singulum hipertrofisi (talon tüberkülü), krona yapışık odontoma (dens evaginatus), köke yapışık odontoma (mine incisi), dilaserasyon, birleşme (konkresans), geminasyon, füzyon ve dens in dente.",
"Füzyon: iki ayrı germin dentin düzeyinde birleşmesidir, diş sayısı bir eksiktir. Geminasyon: tek germin ikiye bölünme girişimidir, tek kök-tek kanal vardır, diş sayısı normaldir. Konkresans: iki dişin yalnızca sement ile birleşmesidir.",
"Taurodontizm: pulpa odası apikale uzamış, furkasyon apikalde. Dilaserasyon: kron ile kök arasında keskin açılanma, genelde süt dişi travmasına bağlı. Dens in dente: en sık üst lateralde, mine organının pulpaya katlanması."] },

{ q: "Matür (kök gelişimi tamamlanmış) dişte intrüzyonun tedavisi nedir?",
  a: [
"Tanı: diş alveol kemiğine gömülmüştür, mobil değildir, perküsyonda yüksek metalik ses verir, duyarlılık testlerine yanıt vermez. Radyografide PDL aralığı kısmen veya tamamen kaybolmuş, mine-sement sınırı komşulara göre apikaldedir.",
"3 mm’ye kadar intrüzyonda kendiliğinden sürmesi beklenir; 8 haftada sürmezse cerrahi veya ortodontik repozisyon yapılır. 3–7 mm’de cerrahi (tercihen) veya ortodontik repozisyon, 7 mm’den fazlasında cerrahi repozisyon yapılır.",
"4 hafta esnek splint uygulanır.",
"Matür dişte pulpa nekrozu neredeyse kesindir; repozisyondan sonraki 2 hafta içinde kanal tedavisine başlanır ve kanala kalsiyum hidroksit konur.",
"Yumuşak diyet, klorheksidin gargara ve tetanoz kontrolü. Takip: 2 hafta, 4 hafta (splint çıkar), 6–8 hafta, 6 ay, 1 yıl ve 5 yıl boyunca yılda bir. Komplikasyonlar: pulpa nekrozu, enflamatuar kök rezorpsiyonu, replasman rezorpsiyonu (ankiloz), marjinal kemik kaybı."] },

{ q: "Basit davranış yönlendirme yöntemleri nelerdir?",
  a: [
"Ses kontrolü, sözsüz iletişim, anlat-göster-uygula, pozitif pekiştirme, ebeveyn varlığı/yokluğu ve dikkat dağıtma. Bunlara modelleme ve desensitizasyon da eklenebilir.",
"Anlat-göster-uygula: işlemi çocuğun anlayacağı dille anlatırım, aleti gösterip dokundururum, beklemeden uygularım. Ses kontrolü: ses tonunu ve hızını kontrollü değiştirerek dikkatini toplarım. Pozitif pekiştirme: istenen davranıştan hemen sonra somut övgü.",
"Amaçları: hastanın dikkatini toplamak ve sakinliğini sağlamak, olumsuz ve bilinmeyen davranışların önüne geçmek, diğer iletişim yöntemlerinin etkinliğini artırmak, çocuğu dental ünit ve aletlerle tanıştırmak, istenen davranışları desteklemek, hekim ile çocuk arasındaki iletişimi sağlamak.",
"İleri yöntemler: ağız açıcı, medikal immobilizasyon, sedasyon ve genel anestezi."] },

{ q: "Klinikte kullandığınız kanal patının içeriği nedir, süt dişlerinde nasıl kullanılır?",
  a: [
"Kliniğimizde Vitapex kullanıyoruz: kalsiyum hidroksit, iyodoform ve silikon yağı içerir.",
"Avantajları: radyoopaktır, kolay uygulanır, süt dişi kökleriyle aynı hızda rezorbe olur, taşarsa hızla rezorbe olur ve yabancı cisim reaksiyonu yapmaz, daimi diş germine toksik değildir.",
"Uygulama: anestezi ve rubber dam sonrası giriş kavitesi açılır, çalışma boyu radyografik apeksten 1 mm kısa belirlenir (rezorpsiyon varsa 1,5–2 mm), kanallar 30–35 numaraya kadar genişletilir, basınçsız irrigasyon yapılıp kağıt konla kurutulur. Vitapex’in tek kullanımlık şırınga ucu apeksten 1 mm geride yerleştirilir, pat enjekte edilir ve pat kanal ağzından taşınca şırınga yavaşça geri çekilir. Üstüne kaide ve paslanmaz çelik kron yapılır.",
"Süt dişinde güta perka kullanılmaz çünkü rezorbe olmaz. ZOE taşarsa rezorbe olmaz ve daimi dişin sürme yolunu saptırabilir; Vitapex’in avantajı buradadır."] },

{ q: "Enfektif endokardit profilaksisi hangi dental işlemlerde uygulanır? Penisilin alerjisi olan ve olmayan hastada oral olarak ne verilir?",
  a: [
"Profilaksi yüksek riskli hastalarda yapılır: protez kalp kapağı, daha önce geçirilmiş infektif endokardit, onarılmamış siyanotik konjenital kalp hastalığı, protez materyalle onarılmış konjenital kalp hastalığında ilk 6 ay, rezidüel defekt, kalp nakli sonrası valvülopati.",
"Dişeti dokusunun veya dişin periapikal bölgesinin manipülasyonu ya da oral mukozanın perforasyonu olan tüm işlemlerde verilir: diş çekimi, periodontal işlemler, apeksi geçen kanal tedavisi, PÇK gibi subgingival işlemler, biyopsi, sütur alma. Enfekte olmayan dokuya anestezi, radyografi, braket yapıştırma ve süt dişinin doğal düşmesinde gerekmez.",
"Penisilin alerjisi yoksa: işlemden 30–60 dakika önce tek doz amoksisilin 50 mg/kg ağızdan.",
"Penisilin alerjisi varsa (okul tablosu): klindamisin 20 mg/kg, ya da azitromisin/klaritromisin 15 mg/kg, ya da sefaleksin/sefadroksil 50 mg/kg ağızdan. Anafilaksi, anjiyoödem veya ürtiker öyküsü varsa sefalosporin verilmez.",
"Ağızdan alamayan hastada ampisilin, sefazolin veya seftriakson 50 mg/kg IM/IV; alerjisi de varsa klindamisin 20 mg/kg IM/IV. Not: AHA 2021’de klindamisin çıkarılmış, yerine doksisiklin eklenmiştir."] },

{ q: "Apeksogenezis ile apeksifikasyon arasındaki farklar nelerdir?",
  a: [
"Apeksogenezis: kök ucu tamamlanmamış ve pulpası canlı dişlerde kök apeksinin fizyolojik gelişiminin ve formasyonunun devam ettirilerek kökün normal uzunluk ve kalınlığa ulaşmasıdır. Direkt pulpa kuafajı, kalsiyum hidroksit amputasyonu, MTA amputasyonu, servikal amputasyon veya Cvek ile yapılır. Kök uzar, duvarlar kalınlaşır, apeks fizyolojik olarak kapanır.",
"Apeksifikasyon: pulpa nekrozu nedeniyle kök büyümesi ve gelişimi durmuş immatür dişlerin apeksinin mineralize bir doku ile tıkanmasıdır. Kalsiyum hidroksit esaslı materyallerle (1–3 ayda bir yenilenerek 6–24 ayda bariyer) veya MTA ile tek seansta 3–5 mm apikal tıkaçla yapılır. Kök uzamaz, duvarlar ince kalır, kırık riski yüksektir.",
"Kanal tedavisinden farkı: apeks açık olduğu için çalışma boyu radyografik apeksten 1–2 mm kısa tutulur, künt uçlu kanal aletleri ve paper pointler kullanılır, irrigasyon dikkatli yapılır.",
"Kliniğimizde en sık kalsiyum hidroksit ve MTA kullanılır."] },

{ q: "MIH nedir? Etiyolojisi nedir?",
  a: [
"MIH (molar-insizör hipomineralizasyonu): bir veya daha fazla birinci daimi molarla birlikte sıklıkla kesici dişlerde görülen, sistemik kökenli mine hipomineralizasyonudur. Bu dişlerin mineralizasyonu aynı döneme (doğum civarı–ilk 3 yaş) denk geldiği için birlikte etkilenirler.",
"Klinikte sınırları belirgin beyaz-sarı-kahverengi opasiteler, diş sürdükten sonra mine kırılması, hassasiyet ve anestezi güçlüğü görülür.",
"Etiyolojisi tam bilinmiyor; sistemik, çevresel ve genetik faktörler sorumlu tutuluyor: prenatal (annede hastalık), perinatal (prematürite, düşük doğum ağırlığı, hipoksi, zor doğum) ve postnatal ilk 3 yıl (yüksek ateşli hastalıklar, solunum yolu enfeksiyonları, otitis, astım, antibiyotik kullanımı), çevresel toksinler (dioksin, PCB) ve genetik yatkınlık.",
"Tedavi: koruyucu (topikal flor, CPP-ACP, ksilitollü sakız, fissür örtücü), restoratif (CİS, kompozit, PÇK), çekim + ortodonti. Çekim zamanı 8,5–10 yaş, 2. moların furkasyonu kalsifiye olmaya başladığında."] },

{ q: "Panoramikte meziodens, enversiyon, rotasyon ve prematür erüpsiyon görülüyor. Tedavi endikasyonları ve yer tutucu endikasyonu nedir?",
  a: [
"Meziodens: üst santraller arasında en sık görülen süpernümerer diştir. Çekim endikasyonları: santral dişin sürmesini geciktirmesi/engellemesi, komşu dişte rotasyon, yer değişikliği veya diastema yapması, kök rezorpsiyonu, kistik değişiklik, ortodontik tedavi planı ve meziodensin sürmüş olması. Bunlar yoksa radyografik takip yapılır. Erken çekim (6–7 yaş) santralin kendiliğinden sürme şansını artırır; geç çekim (8–10 yaş) gelişen köklere zarar riskini azaltır.",
"Enversiyon: dişin ters konumlanmasıdır, kronu buruna/apikale bakar. Enverte meziodens kendiliğinden sürmez, nazal kaviteye göç edebilir; patoloji veya sürme engeli varsa palatinal yaklaşımla cerrahi olarak çekilir.",
"Rotasyon: dişin kendi uzun ekseni etrafında dönmesidir. Neden (meziodens, yer darlığı) ortadan kaldırılır, ortodontik olarak düzeltilir ve retansiyon yapılır.",
"Prematür erüpsiyon: daimi dişin erken sürmesi hipertiroidizm, erken puberte, Ehlers-Danlos ve süt dişinin enfeksiyon nedeniyle erken çekimi sonucu olur; takip ve florür uygulanır. Natal/neonatal dişlerde diş stabilse korunur; aşırı mobilite, süpernümerer olması, beslenme sorunu ve Riga-Fede varsa çekilir (öncesinde K vitamini sorulur).",
"Yer tutucu endikasyonu: süt dişi erken kaybedilmiş, ardıl daimi diş mevcut, kökünün 1/3’ü oluşmamış ve üstünde kemik var, yer kaybı olmamışsa yer tutucu yapılır. Planlamada çekimden sonra geçen süre (yer kaybı en çok ilk 6 ayda), mevcut yer, sürmedeki gecikme, konjenital eksiklik, üstteki kemik miktarı, diş yaşı, sürme sırası, ağız hijyeni, hasta işbirliği ve ebeveynin bilgilendirilmesi dikkate alınır."] },

{ q: "Meziodens ve bant-loop yer tutucuyu anlatınız.",
  a: [
"Meziodens: üst santral kesiciler arasında, orta hatta yer alan süpernümerer diştir; en sık konik şekillidir. Santralin sürmesinde gecikme, diastema, rotasyon, kist ve kök rezorpsiyonuna neden olabilir. Yeri okluzal/periapikal film (SLOB kuralı) veya KIBT ile belirlenir. Sorun yapıyorsa çekilir, yapmıyorsa takip edilir.",
"Bant-loop endikasyonları (okul): süt 2. azının erken kaybında 1. daimi büyük azı sürdükten sonra; aynı bölgede tek diş kaybında; 1. daimi büyük azı sürmeden önce süt 1. azının tek veya çift taraflı kaybında; 1. daimi azılar ağızda ama daimi kesiciler yokken süt 1. veya 2. azının kaybında; aşırı madde kaybı yoksa; tek diş kaybında diğer yer tutucular uygun değilse.",
"Yapımı: destek dişe bant uyumlanır, 0,9 mm paslanmaz çelik telden loop bükülür; loop ardıl premolardan geniş olmalı, gingivadan 1–1,5 mm uzak durmalı ve komşu dişin distaline temas etmelidir. Cam iyonomer simanla simante edilir, 6 ayda bir kontrol edilir, ardıl sürünce çıkarılır.",
"Destek diş çürüklü veya pulpa tedavili ise bant yerine kron kullanılır (kron-loop)."] },

{ q: "Çocuklara ağrı kesici olarak ne yazarsınız?",
  a: [
"Parasetamol 10–15 mg/kg, 4–6 saatte bir veya ibuprofen 5–10 mg/kg, 6–8 saatte bir tok karnına.",
"Dozu kiloya göre hesaplarım. Örneğin 20 kg çocuk: ibuprofen 100 mg/5 mL süspansiyondan günde 3 kez 10 mL; parasetamol 120 mg/5 mL şuruptan günde 4 kez 12,5 mL.",
"Reçete: Rp/ İbuprofen 100 mg/5 mL süspansiyon, 1 şişe. D.S. Günde 3 kez 10 mL, tok karnına.",
"16 yaş altına aspirin vermem (Reye sendromu), 12 yaş altına kodein vermem. İbuprofeni astım, mide ülseri, böbrek hastalığı ve kanama bozukluğunda kullanmam. Ağrı için antibiyotik yazmam; asıl tedavi dişin tedavisidir."] },

{ q: "Remineralizasyon nedir?",
  a: [
"Remineralizasyon, demineralize olmuş mineye kalsiyum ve fosfat iyonlarının geri kazandırılmasıdır. Diş çürüğünün başlangıç aşamaları geri döndürülebilir; uygun yaklaşımda remineralizasyon gerçekleşir.",
"Hidroksiapatit pH 5,5’in altında çözünmeye başlar; florapatit 4,5’e kadar dayanır. Tükürük doğal remineralizasyonu sağlar.",
"Kullanılan ajanlar: florür, kazein fosfopeptit-amorf kalsiyum fosfat (CPP-ACP) ve kalsiyum sodyum fosfosilikat (biyoaktif cam, Novamin). Ayrıca ksilitol ve nano-hidroksiapatit.",
"Flor uygulama yöntemleri: sistemik (su, tuz, süt florlaması, damla ve tablet) ve topikal (diş macunu, gargara, profesyonel jel/solüsyon: %1,23 APF, %8 SnF2, %2 NaF; vernik: %5 NaF)."] },

{ q: "Turner hipoplazisi nedir?",
  a: [
"Süt dişindeki periapikal enfeksiyonun veya travmanın, altında gelişmekte olan daimi diş germinin minesinde yaptığı lokal hipoplazidir. Etkilenen dişe Turner dişi denir.",
"En sık alt premolarlarda (süt molar enfeksiyonu) ve üst santral kesicilerde (süt kesici travması) görülür. Genelde tek dişte, sarı-kahverengi opasiteli, çukurlu mine şeklindedir.",
"Hipoplazilerin sınıflamasında postnatal lokal hipoplazi grubundadır.",
"Önlemek için süt dişi enfeksiyonu zamanında tedavi edilir. Tedavi şiddete göre mikroabrazyon, kompozit restorasyon veya kron (çocukta PÇK)."] },

{ q: "Talon tüberkülü nedir?",
  a: [
"Kesici dişlerin singulum bölgesinden insizal kenara doğru uzanan ek tüberküldür (singulum hipertrofisi); kartal pençesine benzer. En sık üst lateral kesicide görülür, içinde pulpa uzantısı olabilir.",
"Hattab sınıflaması: Tip 1 talon, Tip 2 semi-talon, Tip 3 trace talon.",
"Okluzal interferans, yanındaki derin oluklarda çürük, estetik sorun ve dil irritasyonu yapabilir.",
"Tedavi: oluklara fissür örtücü; oklüzyonu bozuyorsa 6–8 hafta arayla kademeli aşındırma ve florür uygulaması; pulpa açılırsa pulpa kuafajı veya pulpotomi."] },

{ q: "Fissür örtücü çeşitleri ve uygulama yöntemleri nelerdir?",
  a: [
"Çeşitler: doldurucusuz, yarı dolduruculu ve dolduruculu rezin; şeffaf, renkli ve opak. Polimerizasyona göre 1. jenerasyon UV ışıkla, 2. jenerasyon otopolimerizan, 3. jenerasyon görünür ışıkla, 4. jenerasyon florür içeren. Materyale göre rezin esaslı, cam iyonomer esaslı, hibrit iyonomerler, amorf kalsiyum fosfat içeren ve cam bileşen içeren (giomer).",
"Endikasyon: süt molar, daimi molar ve premolarlarda derin-dar pit ve fissürler; orta–yüksek çürük riski; kesicilerin lingual pit ve fissürleri; dekalsifikasyon olup çürük olmayan dişler; sistemik rahatsızlık; ortodontik tedavi. Kontrendikasyon: sığ pit-fissür, arayüz çürüğü, dişin sürmesinden 4 yıldan fazla geçmiş olması.",
"Non-invaziv yöntem: temizlik, izolasyon, %37 fosforik asitle 15–30 saniye asitleme, yıkama, tebeşir beyazı görüntü elde edilene kadar kurutma, örtücünün uygulanması, 20 saniye polimerizasyon, sond ve oklüzyon kontrolü.",
"İnvaziv yöntem: minede renklenme olup kavite yoksa fissür frezle hafifçe genişletilerek örtücü uygulanır.",
"Koruyucu rezin restorasyon: Tip I invaziv fissür örtücü, Tip II akışkan kompozit, Tip III dolgu + fissür örtücü."] }
];
