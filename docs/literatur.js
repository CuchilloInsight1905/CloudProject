/* Güncel Literatür: branşlara göre rehber değişiklikleri. Öğrencilikte sınav için, mezuniyette klinik pratiği güncel tutmak için.
   Her kayıt: ne değişti (önceden / şimdi), neden değişti, klinikte ne yapmalı, kanıtın gücü, kaynaklar ve son kontrol tarihi.
   durum: "Değişti" | "Yeni" | "Takipte" (yakında değişebilir, izlenmeli) | "Aynı" (yeniden gözden geçirildi, öneri değişmedi) | "Kanıt sınırlı"
   dog: "tam" = kaynağın tam metni okundu; "ozet" = resmî duyuru, özet veya basın açıklamasından doğrulandı */
const LIT_TARIH = "31 Ekim 2026";
const LIT_BRANS = [
  { id: "pedo", ad: "Pedodonti", hazir: true },
  { id: "perio", ad: "Periodontoloji" }, { id: "endo", ad: "Endodonti" }, { id: "orto", ad: "Ortodonti" },
  { id: "cerrahi", ad: "Cerrahi" }, { id: "protez", ad: "Protez" }, { id: "resto", ad: "Restoratif" }, { id: "radyo", ad: "Radyoloji" }
];
const LIT_TAKIP = {
  pedo: [
    ["AAPD Reference Manual", "Her yıl sonbaharda yeni el kitabı çıkar; hangi belgelerin yenilendiği her sayfada “Latest Revision” olarak yazar.", "https://www.aapd.org/research/oral-health-policies--recommendations/"],
    ["IADT travma rehberleri", "Travmada temel uluslararası rehber; şu an 2020 sürümü geçerli.", "https://iadt-dentaltrauma.org/guidelines-and-resources/guidelines/"],
    ["EAPD politika ve rehberleri", "Avrupa Pedodonti Akademisi; MIH, florür, antibiyotik gibi Avrupa görüşleri.", "https://www.eapd.eu/"],
    ["ADA klinik rehberleri", "Çürük, ağrı, radyografi gibi kanıta dayalı rehberler.", "https://www.ada.org/resources/research/science-and-research-institute/evidence-based-dental-research"],
    ["Cochrane Oral Health", "Sistematik derlemeler; bir önerinin arkasındaki kanıtı görmek için.", "https://oralhealth.cochrane.org/"]
  ]
};
const LIT = [
{ id: "ie", brans: ["pedo"], konu: "Enfektif endokardit profilaksisi", durum: "Değişti", yil: 2026, kaynak: "AAPD 2026 • AHA 2021 • ESC 2023", dog: "tam",
  eski: "Penisilin alerjisinde klindamisin (20 mg/kg) standart seçenekti.",
  simdi: "Klindamisin profilaksi rejimlerinden çıkarıldı. İlk seçenek amoksisilin 50 mg/kg. Penisilin alerjisinde sefaleksin 50 mg/kg, azitromisin veya klaritromisin 15 mg/kg ya da doksisiklin (45 kg altı 2,2 mg/kg). Ağızdan alamayan çocukta ampisilin, sefazolin veya seftriakson 50 mg/kg IM/IV. Tek doz, işlemden 30–60 dakika önce; unutulduysa işlemden sonra 2 saate kadar verilebilir.",
  neden: "Klindamisin, diğer seçeneklere göre daha sık ve daha ağır yan etkiye, özellikle C. difficile enfeksiyonuna yol açıyor (AHA 2021). ESC 2023, yüksek riskli hastada ağız-diş işlemleri öncesi profilaksiyi en güçlü öneri düzeyine (Sınıf I) yükseltti; orta riskli hastada bireysel karar (IIb).",
  klinik: "Profilaksi yalnızca yüksek riskli kalp hastasında ve dişeti manipülasyonu, periapikal bölge veya mukoza perforasyonu içeren işlemlerde. Doksisiklin 21 günden kısa kullanımda 8 yaş altında diş renklenmesi yapmıyor. Hastanın kardiyoloğuyla iletişim kur, dozu kiloya göre hesapla.",
  kanit: "Uzman görüşü ve gözlemsel veriler; randomize çalışma yok (etik olarak yapılamıyor). ESC önerisi Sınıf I, kanıt düzeyi B.",
  src: [["AAPD Antibiyotik profilaksisi (2026)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_prophylaxis26.pdf"], ["AHA 2021 bilimsel bildirisi", "https://pubmed.ncbi.nlm.nih.gov/33853363/"], ["ESC 2023 endokardit rehberi", "https://escardio.org/Congresses-Events/ESC-Congress/Congress-resources/Congress-news/2023-ESC-Clinical-Practice-Guidelines-for-the-management-of-endocarditis"], ["SDCEP antibiyotik profilaksisi (İngiltere)", "https://www.sdcep.org.uk/published-guidance/antibiotic-prophylaxis/"]] },

{ id: "antibiyotik", brans: ["pedo"], konu: "Odontojenik enfeksiyonda antibiyotik süresi ve seçimi", durum: "Değişti", yil: 2026, kaynak: "AAPD 2026", dog: "tam",
  eski: "Antibiyotik genellikle 7–10 gün yazılırdı; penisilin alerjisinde klindamisin yaygın seçimdi.",
  simdi: "Ampirik ilk seçenek amoksisilin veya amoksisilin-klavulanat. Odontojenik enfeksiyonda 3–5 günlük amoksisilin 7 günlük kür kadar etkili olabilir; geleneksel kural belirgin düzelmeden sonra 5 gün. Alerjide veya yakın zamanda penisilin kullanmış çocukta sefalosporin düşünülebilir. Klindamisin C. difficile riski nedeniyle geri planda.",
  neden: "Kısa kürlerin eşit etkinlikte olduğunu gösteren çalışmalar ve antibiyotik direnci. Çocuklarda acile başvurularının sık nedenlerinden biri antibiyotik yan etkisi (9 yaş altında en sık amoksisilin).",
  klinik: "Pulpitis, apikal periodontitis, fistül veya sistemik bulgusu olmayan lokal şişlikte antibiyotik verme; kaynağı tedavi et (pulpotomi, pulpektomi, çekim, drenaj). Ateş, yüz şişliği, trismus, yutma veya solunum güçlüğünde antibiyotik yardımcıdır, ağır tabloda hastaneye sevk et. Aileye dozu, zamanlamayı ve süreyi anlat.",
  kanit: "Süre için orta düzey kanıt (randomize çalışmalar ve derlemeler); ilaç seçiminde uzman görüşü ağırlıklı.",
  src: [["AAPD Antibiyotik tedavisi (2026)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_antibiotictherapy26.pdf"], ["AAPD Yararlı ilaçlar tablosu (2025)", "https://www.aapd.org/globalassets/media/policies_guidelines/r_usefulmeds25.pdf"]] },

{ id: "pulpotomi", brans: ["pedo", "endo"], konu: "Süt dişinde vital pulpa tedavisi (pulpotomi materyali)", durum: "Değişti", yil: 2024, kaynak: "AAPD 2024 kanıta dayalı rehber • AAPD 2026", dog: "tam",
  eski: "Formokrezol ve MTA birlikte öneriliyordu; ferrik sülfat kabul edilebilir bir alternatifti.",
  simdi: "Pulpotomide kalsiyum silikat simanlar (MTA, Biodentine) formokrezol, ferrik sülfat ve ZOE'ye tercih edilir. Ferrik sülfatın kullanılmaması yönünde koşullu öneri. Kalsiyum hidroksit pulpotomi önerilmez. 2026 belgesine göre spontan ağrısı olan ama enfeksiyon bulgusu olmayan dişte de kalsiyum silikat pulpotomi düşünülebilir; direkt kuafajda kalsiyum silikat, kalsiyum hidroksitten daha başarılı (36 ay).",
  neden: "24 aylık sonuçlarda formokrezolün başarısı MTA'dan anlamlı düşük; formokrezolün toksisite ve karsinojenite kaygıları da var.",
  klinik: "Pulpotomide MTA veya Biodentine kullan; MTA'nın renklenme yapabileceğini aileye söyle. Spontan ağrı tek başına pulpotomiyi dışlamıyor, ama fistül, şişlik, patolojik hareketlilik veya radyografik lezyon varsa pulpektomi veya çekim.",
  kanit: "Güçlü öneri, yüksek kesinlik (sistematik derleme ve meta-analize dayalı rehber).",
  src: [["AAPD Vital pulpa tedavisi rehberi (2024)", "https://www.aapd.org/globalassets/media/policies_guidelines/g_vpt-2024.pdf"], ["AAPD Süt ve genç daimi dişte pulpa tedavisi (2026)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_pulptherapy26.pdf"]] },

{ id: "agri", brans: ["pedo"], konu: "Çocukta akut diş ağrısı ve ağrı kesici seçimi", durum: "Değişti", yil: 2026, kaynak: "ADA onaylı çocuk ağrı rehberi (JADA 2023, onay 2024) • AAPD 2026", dog: "tam",
  eski: "Şiddetli ağrıda kodeinli kombinasyonlar çocuklarda da kullanılıyordu; ibuprofen ve parasetamol çoğunlukla ayrı ayrı öneriliyordu.",
  simdi: "İlk seçenek NSAİİ (ibuprofen); parasetamol tek başına veya NSAİİ ile birlikte. İkisinin birlikte kullanımı tek başına her birinden daha iyi ağrı kontrolü sağlıyor. Kodein ve tramadol 12 yaş altında kontrendike. Opioid çocuklarda çok nadiren, birinci basamak tedaviye yanıt vermeyen şiddetli ağrıda ve kötüye kullanımı önleyici önlemlerle düşünülür. Dozlar (AAPD): ibuprofen 4–10 mg/kg/doz 6–8 saatte bir; parasetamol 10–15 mg/kg/doz 4–6 saatte bir, günde en fazla 75 mg/kg.",
  neden: "Kodein ve tramadol karaciğerde CYP2D6 ile aktif metabolitlere dönüşüyor; hızlı metabolize eden çocuklarda solunum depresyonu ve ölüm bildirildi (FDA 2017 uyarısı). Kodeinin diş ağrısında etkisi reçetesiz analjeziklerden üstün değil, yan etkisi fazla.",
  klinik: "Ağrıyı yaşa uygun ölçekle değerlendir (Wong-Baker yüzler, FLACC). Ağrının kaynağını tedavi et; ilaç köprüdür. Kombinasyonu dönüşümlü veya birlikte kullandırabilirsin; aileye günlük üst sınırı ve parasetamol içeren diğer ürünleri sor. Aspirin Reye sendromu nedeniyle verilmez.",
  kanit: "Orta–yüksek kesinlik (meta-analizler); kodein ve tramadol için FDA düzenleyici kararı.",
  src: [["AAPD Çocuk dental hastada akut ağrı yönetimi (2026)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_pain26.pdf"], ["AAPD Akut ağrı politikası (2026)", "https://www.aapd.org/globalassets/media/policies_guidelines/p_acutepainmgmt26.pdf"], ["ADA basın açıklaması: çocuk ağrı rehberi", "https://www.ada.org/about/press-releases/new-guideline-details-dental-pain-management-strategies-for-pediatric-patients"]] },

{ id: "radyografi", brans: ["pedo", "radyo"], konu: "Dental radyografide kurşun önlük ve tiroid yakalığı", durum: "Değişti", yil: 2024, kaynak: "ADA 2024 • AAOMR • AAPD 2024 revizyonu (2025 el kitabı)", dog: "tam",
  eski: "Her çocuk çekimde kurşun önlük ve tiroid yakalığı takılması öneriliyordu.",
  simdi: "Ağız içi, panoramik, sefalometrik ve KIBT çekimlerinde tiroid, gonad ve fetüs koruyucularının rutin kullanımı artık önerilmiyor; buna gebeler de dahil. Koruma; doğru endikasyon, ışın sınırlama (kolimasyon), dijital sensör, doğru hasta konumu ve KIBT'yi yalnızca daha düşük dozlu yöntem yetmediğinde kullanmakla sağlanıyor.",
  neden: "Modern cihazlarla doz çok düştü. Önlük ve yakalık vücut içindeki saçılmaya karşı koruma sağlamıyor; ışın yoluna girerse görüntüyü bozup tekrar çekime, yani daha fazla doza yol açabiliyor.",
  klinik: "Çekimi ihtiyaca göre seç (AAPD'nin yaşa ve risk durumuna göre radyografi tablosu); eski filmleri kullan. Önemli: ülkendeki radyasyon güvenliği mevzuatı (Türkiye'de Nükleer Düzenleme Kurumu düzenlemeleri) farklı bir şey öngörüyorsa mevzuata uy. Hasta veya aile önlük isterse kullanmak zararsızdır, yeter ki ışını engellemesin.",
  kanit: "Uzman paneli değerlendirmesi ve dozimetri çalışmaları.",
  src: [["AAPD Radyografi reçeteleme (2025 el kitabı)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_radiographs25.pdf"], ["ADA basın açıklaması (Şubat 2024)", "https://www.ada.org/about/press-releases/ada-releases-updated-recommendations-to-enhance-radiography-safety-in-dentistry"], ["ADA News: tiroid yakalığı artık önerilmiyor", "https://adanews.ada.org/ada-news/2024/january/using-thyroid-collars-during-radiographic-exams-no-longer-recommended-by-ada/"]] },

{ id: "sdf", brans: ["pedo"], konu: "Gümüş diamin florür (SDF) uygulaması", durum: "Yeni", yil: 2025, kaynak: "AAPD başucu rehberi 2025", dog: "tam",
  eski: "SDF önerileri genel ilkeler düzeyindeydi; uygulama süresi, kontrol aralığı ve tekrar sıklığı net değildi.",
  simdi: "Pulpaya yaklaşmayan ve pulpa bulgusu olmayan kaviteli lezyonlarda. Çürük dentini kazımak gerekmez (sadece estetik için düşünülebilir). Uygulama en az 1 dakika; fazlası pamukla alınır. Bir damla yaklaşık 1,7 mg florür ve 8,5 mg gümüş içerir; bir seansta kaç damla uygulanacağı yaşa, kiloya ve lezyon sayısına göre belirlenir. Kontrol 2 hafta ile 4 ay arasında; durmamış lezyona tekrar uygulanır. Yılda iki uygulama tek uygulamadan daha etkili. Yeni lezyonları önlemek için %5 NaF vernik yılda 4 kereye kadar.",
  neden: "Tek uygulamada durdurma oranı %47–90 arasında değişiyor (ön dişlerde daha yüksek); kısa uygulama süresi başarıyı düşürüyor.",
  klinik: "Onamda kalıcı siyah renklenmeyi, deri ve giysi lekelenmesini ve tekrar uygulama gerekebileceğini anlat. Dudak ve deriye koruyucu sür, pamukla izole et. Daimi ön dişlerin yanındaki süt dişinde beyaz lezyonları boyamamaya dikkat et. Yüksek riskli, işbirliği zor veya çok seansa ihtiyacı olan çocukta iyi bir seçenek; sonrasında restorasyon da yapılabilir.",
  kanit: "Sistematik derlemeler (durdurma etkinliği); uygulama ayrıntıları uzman görüşü.",
  src: [["AAPD SDF başucu rehberi (2025)", "https://www.aapd.org/globalassets/media/policies_guidelines/r_chairside--guide25.pdf"], ["AAPD SDF rehberi (2017)", "https://www.aapd.org/research/oral-health-policies--recommendations/chairside-guide-silver-diamine-fluoride-in-the-management-of-dental-caries-lesions/"]] },

{ id: "restoratif", brans: ["pedo", "resto"], konu: "Derin çürükte çürük temizliği ve restoratif materyal seçimi", durum: "Değişti", yil: 2023, kaynak: "ADA kanıta dayalı rehber (JADA 2023)", dog: "ozet",
  eski: "Derin lezyonda tüm yumuşak dentinin sert dentine kadar temizlenmesi esastı.",
  simdi: "Orta ve ileri kaviteli lezyonlarda konservatif (seçici) çürük temizliği koşullu olarak öneriliyor; özellikle ileri lezyonlarda. Değerlendirilen tüm direkt restoratif materyaller (kompozit, amalgam, cam iyonomer türevleri, çocukta prefabrike kron) koşullu olarak öneriliyor; bazı klinik durumlarda bazıları öne çıkarılıyor. Rehberde 16 öneri ve iyi uygulama ifadesi var.",
  neden: "Tam temizlik pulpa perforasyonu riskini artırıyor ve gereksiz pulpa tedavisine yol açabiliyor; seçici temizlikle pulpa canlılığı daha iyi korunuyor.",
  klinik: "Derin lezyonda pulpaya yakın bölgede deri kıvamında dentin bırakılabilir; kenarları sağlam dentine kadar temizle ve iyi bir örtü sağla. Materyal seçiminde diş tipi, yüzey sayısı ve işbirliğini dikkate al. Tam metindeki materyal-durum eşleşmelerini okumanı öneririm.",
  kanit: "Koşullu öneriler; düşük–orta kesinlik.",
  src: [["ADA restoratif tedavi rehberi sayfası", "https://www.ada.org/resources/research/science-and-research-institute/evidence-based-dental-research/caries-management-clinical-practice-guidelines/evidence-based-clinical-practice-guideline-on-restorative-treatments-for-caries-lesions"], ["ADA News (Haziran 2023)", "https://adanews.ada.org/ada-news/2023/june/ada-releases-new-clinical-practice-guideline-on-caries-restorations/"], ["Makale (DOI)", "https://doi.org/10.1016/j.adaj.2023.04.011"]] },

{ id: "florur-takviye", brans: ["pedo"], konu: "Florür takviyeleri (ABD'de 2025 düzenlemesi)", durum: "Takipte", yil: 2025, kaynak: "FDA Ekim 2025 • AAPD 2023 florür rehberi", dog: "ozet",
  eski: "AAPD: içme suyu florürsüz bölgede yaşayan yüksek riskli çocuklara 6 aylıktan 16 yaşına kadar florür takviyesi düşünülebilir.",
  simdi: "FDA, Ekim 2025'te 3 yaş altı çocuklar ile düşük ve orta riskli çocuklar için etiketlenen, onaysız yutulan florür ürünlerini pazarlayan şirketlere uyarı gönderdi. FDA önerisi: bu ürünler yalnızca 3 yaş ve üstündeki yüksek riskli çocuklarda ve toplam florür maruziyeti konuşulduktan sonra kullanılsın. Mayıs 2025'te duyurulan tamamen piyasadan kaldırma planı uygulanmadı. ADA bu yaklaşımı eleştirdi; AAPD rehberi henüz değişmedi.",
  neden: "FDA bağırsak mikrobiyotası, tiroid, kilo ve IQ üzerine olası etkileri gerekçe gösterdi. Diş hekimliği kuruluşları ise bu ürünlerin florürsüz su kullanan yüksek riskli çocuklar için önemli olduğunu savunuyor. Tartışma sürüyor.",
  klinik: "Bu bir ABD düzenlemesi; Türkiye'yi doğrudan bağlamaz. Topikal florür (florürlü macun, vernik) önerileri değişmedi. Takviye düşünüyorsan toplam florür kaynaklarını (su, macun, gıdalar) hesapla ve yalnızca yüksek riskte kullan. AAPD'nin bir sonraki florür revizyonunu takip et.",
  kanit: "Düzenleyici karar; bilimsel tartışma devam ediyor.",
  src: [["FDA duyurusu (Mayıs 2025)", "https://www.fda.gov/news-events/press-announcements/fda-begins-action-remove-ingestible-fluoride-prescription-drug-products-children-market"], ["ADA News (Ekim 2025)", "https://adanews.ada.org/ada-news/2025/october/fda-to-restrict-sale-of-fluoride-supplements-halting-previously-promised-ban/"], ["AAPD Florür tedavisi (2023)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_fluoridetherapy25.pdf"]] },

{ id: "travma", brans: ["pedo", "endo", "cerrahi"], konu: "Travmatik diş yaralanmaları", durum: "Takipte", yil: 2026, kaynak: "IADT 2020 (geçerli) • AAE Nisan 2026 rehberi", dog: "ozet",
  eski: "IADT 2020 rehberleri tek temel kaynak.",
  simdi: "IADT 2020 hâlâ geçerli ve AAPD el kitabında aynen yer alıyor. Amerikan Endodonti Derneği (AAE) Nisan 2026'da IADT 2020'yi temel alan yeni bir travma rehberi yayımladı (Journal of Endodontics). Duyurulara göre takip protokolleri genişletildi ve gerektiğinde KIBT kullanımı vurgulandı. Tam metni henüz okumadım; ayrıntılar doğrulanınca buraya eklenecek.",
  neden: "Rehberlerin düzenli güncellenmesi ve görüntülemedeki gelişmeler.",
  klinik: "Acil yönetimde IADT 2020'yi uygulamaya devam et (avülsiyonda saklama sırası süt > HBSS > tükürük > serum fizyolojik; 15 dakika içinde replantasyon en iyisi). Takip randevularında AAE 2026'nın genişletilmiş protokolünü izle.",
  kanit: "Uzman görüşü ve gözlemsel çalışmalar; travmada randomize çalışma azdır.",
  src: [["IADT rehberleri", "https://iadt-dentaltrauma.org/guidelines-and-resources/guidelines/"], ["AAE duyurusu (2026)", "https://newsroom.aae.org/featured-stories/american-association-of-endodontists-releases-updated-guidelines-for-the-treatment-of-traumatic-dental-injuries/"], ["Makale (DOI)", "https://doi.org/10.1016/j.joen.2026.04.002"]] },

{ id: "bebek", brans: ["pedo"], konu: "Bebek ağız sağlığı ve ilk diş hekimi ziyareti", durum: "Aynı", yil: 2025, kaynak: "AAPD 2025", dog: "tam",
  eski: "İlk muayene en geç 12 aylıkken.",
  simdi: "Değişmedi: dental ev (öykü, muayene, risk değerlendirmesi ve rehberlik) 12 aylıktan önce kurulmalı. 12 aydan önce meyve suyu verilmemeli. 12 ayın ötesinde sık veya gece emzirme ve biberon EÇÇ ile ilişkili. Gebelikte D vitamini desteğinin çocukta EÇÇ'yi azaltabileceğine dair veriler var (kanıt sınırlı).",
  neden: "2025 revizyonunda kaynaklar güncellendi; temel öneriler aynı.",
  klinik: "İlk diş sürünce florürlü macun pirinç tanesi kadar (3 yaş altı), 3–6 yaşta bezelye tanesi kadar. Gebelere ağız sağlığı ve bebek bakımı konusunda rehberlik et.",
  kanit: "Gözlemsel çalışmalar ve uzman görüşü.",
  src: [["AAPD Perinatal ve bebek ağız sağlığı (2025)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_perinataloralhealthcare25.pdf"]] },

{ id: "sedasyon", brans: ["pedo"], konu: "Sedasyonda izlem (AAP/AAPD)", durum: "Aynı", yil: 2025, kaynak: "AAP/AAPD 2019, Haziran 2025'te yeniden onaylandı", dog: "tam",
  eski: "AAP/AAPD 2019 rehberi.",
  simdi: "Rehber Haziran 2025'te kaynak güncellemesiyle yeniden onaylandı; öneriler değişmedi. Ventilasyonun izlenmesinde kapnografi tercih edilen yöntem; derin sedasyondaki çocukların neredeyse hepsinde kullanılmalı. İşbirliği yapmayan çocukta kapnografi sedasyon başladıktan sonra takılabilir; kullanılamadıysa kayda geçirilmeli.",
  neden: "2019'dan bu yana önerileri değiştirecek yeni kanıt bulunmadı.",
  klinik: "Sedasyon uyguluyorsan oral alım kısıtlama sürelerine, iki yetkin kişi kuralına ve taburculuk kriterlerine uy.",
  kanit: "Uzman konsensüsü ve olay raporlarına dayalı.",
  src: [["AAP/AAPD Sedasyon rehberi (2025 baskısı)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_monitoringsedation25.pdf"]] },

{ id: "fissur", brans: ["pedo"], konu: "Fissür örtücüler", durum: "Aynı", yil: 2016, kaynak: "ADA/AAPD 2016 kanıta dayalı rehber", dog: "ozet",
  eski: "—",
  simdi: "Sağlam veya kavitesiz okluzal yüzeylere örtücü güçlü öneri; örtücü florür verniğe tercih edilir. Materyaller arasında üstünlük için kanıt yetersiz: izolasyon zorsa (kısmen sürmüş diş) cam iyonomer, kuru alan sağlanabiliyorsa rezin.",
  neden: "Rehberin sayfası 2024'te güncellendi, öneriler değişmedi.",
  klinik: "Kavitesiz başlangıç lezyonunu da örtebilirsin; örtücüyü düzenli kontrol et, kaybolan kısmı yenile.",
  kanit: "Güçlü öneri, orta kesinlik.",
  src: [["AAPD Fissür örtücü rehberi", "https://www.aapd.org/research/oral-health-policies--recommendations/pit_and_fissure_sealants/"]] },

{ id: "mih", brans: ["pedo"], konu: "Molar-insizör hipomineralizasyonu (MIH)", durum: "Aynı", yil: 2024, kaynak: "AAPD 2024 • EAPD 2022", dog: "tam",
  eski: "MIH için ayrı bir AAPD belgesi yoktu.",
  simdi: "AAPD 2024'te ayrı bir MIH belgesi yayımladı. Tanım: en az bir birinci daimi molarda sınırları belirgin hipomineralizasyon; kesici dişte opasite tanı için şart değil. İkinci süt molarlarında hipomineralizasyonu (HSPM) olan çocukta MIH olasılığı 10 kat fazla; HSPM'de Hall tekniği kron kullanılabilir. Tedavi ciddiyete ve yaşa göre: koruyucu (florür, CPP-ACP, örtücü), adeziv restorasyon, prefabrike çelik kron veya tam kron, gerekirse ortodontik planla çekim.",
  neden: "MIH'nin sık görülmesi ve hassasiyet, anestezi zorluğu gibi klinik sorunlar.",
  klinik: "Hassasiyette anestezi zor olabilir; tekrar eden restorasyon yerine erken kron düşün. Birinci molar çekimini ortodontistle zamanla.",
  kanit: "Orta–düşük kesinlik; çoğu öneri uzman görüşü.",
  src: [["AAPD MIH (2024)", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_molarincisorhypomin25.pdf"], ["EAPD MIH politikası (2022)", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8926988/"]] },

{ id: "lokal", brans: ["pedo"], konu: "Lokal anestezi dozları", durum: "Aynı", yil: 2023, kaynak: "AAPD 2023", dog: "tam",
  eski: "—",
  simdi: "Çocukta en yüksek doz: lidokain 4,4 mg/kg (en fazla 300 mg), artikain 7 mg/kg (en fazla 500 mg), mepivakain 4,4 mg/kg, prilokain 8 mg/kg. 6 aydan küçükte amid dozları %30 azaltılır.",
  neden: "2023 revizyonunda değişiklik yok.",
  klinik: "Kiloya göre hesapla; sedasyonla birlikte kullanımda dozu düşük tut.",
  kanit: "Farmakoloji verileri ve uzman görüşü.",
  src: [["AAPD Lokal anestezi", "https://www.aapd.org/globalassets/media/policies_guidelines/bp_localanesthesia25.pdf"]] },

{ id: "phg", brans: ["pedo"], konu: "Primer herpetik gingivostomatit", durum: "Değişti", yil: 2025, kaynak: "AAPD ilaç tablosu 2025 • Cochrane", dog: "tam",
  eski: "Asiklovir 15 mg/kg günde 5 kez (bir klinik çalışmanın dozu).",
  simdi: "Tedavi destekleyici. Erken başlanırsa (ilk 72 saat) asiklovir 20 mg/kg/doz günde 4 kez, 5–7 gün (doz başına en fazla 800 mg); alternatif valasiklovir (3 ay üstü) 20 mg/kg/doz günde 2 kez. Prospektüs dışı kullanım.",
  neden: "AAPD ilaç tablosunun güncel dozu.",
  klinik: "Sıvı alımı ve ağrı kontrolü öncelikli; dehidratasyon bulgusunda sevk et.",
  kanit: "Sınırlı (az sayıda randomize çalışma).",
  src: [["AAPD Yararlı ilaçlar (2025)", "https://www.aapd.org/globalassets/media/policies_guidelines/r_usefulmeds25.pdf"]] },

{ id: "probiyotik", brans: ["pedo"], konu: "Probiyotikler ve çürük", durum: "Kanıt sınırlı", yil: 2025, kaynak: "2025 sistematik derlemeleri", dog: "ozet",
  eski: "—",
  simdi: "Belirli suşlar S. mutans sayısını tutarlı biçimde azaltıyor, ama çürüğü önlediğine dair klinik kanıt zayıf ve tutarsız.",
  neden: "Mikrobiyolojik etki klinik sonuca yansımıyor; çalışmalar küçük ve farklı.",
  klinik: "Hijyen ve florürün yerini tutmaz; aile sorarsa yardımcı olabileceğini ama kanıtın zayıf olduğunu söyle.",
  kanit: "Düşük kesinlik.",
  src: [["Frontiers in Oral Health (2025)", "https://www.frontiersin.org/journals/oral-health/articles/10.3389/froh.2025.1720036/full"]] }
];
