/* Kitaplarım: Drive'daki kitaplar. Tablet uygulaması kitabı Drive'dan (dl) indirip cihazdaki veritabanına kaydeder; hazır OCR arama dizinleri APK'nın içinde gelir. Diğer cihazlarda PDF bir kez seçilir.
   Dosya, boyutundan tanınır. İçindekiler: [başlık, PDF sayfa no, düzey]. "y: 1" olanların sayfası yaklaşıktır.
   Metin katmanı olan kitaplarda (tarama: false) içindekiler açılışta kitaptan otomatik çıkarılır. */
const KITAPLAR = [
{ id: "pedo", ad: "Pedodonti", yayin: "InfoDus Klinik Bilimler", boyut: 48477650, dl: "1B0oSQtq4L1STM7KvPcanA_ufGreCDIds", drive: "https://drive.google.com/file/d/1Ut2S8VUCyiZOE5yYOkaq1Q953jx_vMjG/view", tarama: true, toc: [
  ["Süt ve sürekli diş embriyolojisi", 1, 1], ["Dişlerin oluşum dönemleri", 1, 2], ["Köklerin oluşumu", 5, 2], ["Sürekli dişlerin oluşumu", 5, 2],
  ["Diş sürme evreleri", 6, 1], ["Sürme teorileri", 8, 2], ["Süt ve sürekli dişlerin sürme zamanları", 9, 2], ["Süt dişlerinde sürme bozuklukları", 10, 2], ["Geç ve erken sürme nedenleri", 11, 2], ["Erken süt dişi kaybı", 14, 2], ["Sürekli dişlerde sürme gecikmesi", 15, 2],
  ["Süt dişi kök rezorpsiyonu", 15, 1], ["Kök rezorpsiyon anomalileri", 16, 2],
  ["Dişlerin gelişim anomalileri", 17, 1], ["Diş sistemini etkileyen faktörler", 17, 2], ["Durum anomalileri (distopiler)", 19, 2], ["Büyüklük anomalileri", 19, 2], ["Sayı anomalileri", 20, 2], ["Biçim anomalileri", 24, 2], ["Doku anomalileri", 27, 2], ["Hipoplazi – hipomineralizasyon farkı", 32, 2],
  ["Süt dişlenme", 34, 1],
  ["Süt dentisyonda çürük", 36, 1], ["Çürük oluşumuna neden olan faktörler", 37, 2], ["Çürüğün lokalizasyonu", 39, 2], ["Çürük sınıflandırması", 40, 2], ["Minimal invaziv teknikler", 45, 2], ["Çürük teşhis yöntemleri", 47, 2],
  ["Dental erozyon", 50, 1],
  ["Süt dişi pulpa hastalıkları ve teşhis", 54, 1], ["İndirekt ve direkt pulpa tedavileri", 56, 2], ["Pulpa amputasyonu (pulpotomi)", 58, 2], ["Süt dişi kök kanal tedavisi (pulpektomi)", 62, 2], ["Lezyon sterilizasyonu (LSTR)", 64, 2],
  ["Genç sürekli dişlerde endodontik tedaviler", 65, 1], ["Apeksogenezis", 65, 2], ["Parsiyel amputasyon (Cvek)", 66, 2], ["Apeksifikasyon", 66, 2], ["Pulpa rejenerasyonu (revaskülarizasyon)", 67, 2], ["Trombositten zengin plazma", 68, 2],
  ["Çürük riski tayini", 69, 1], ["Çürük risk testleri", 73, 2], ["Bebeklerde çürük riski", 76, 2], ["AAPD çürük risk formları", 77, 2], ["IAPD çürük risk formları", 79, 2],
  ["Dental plak kontrolü (mekanik ve kimyasal)", 80, 1],
  ["Yer tutucular", 117, 1, 1], ["Dental yaş tayini", 121, 2, 1], ["Travmatik diş yaralanmaları (IADT)", 125, 1, 1], ["Komplike kron kırığı tedavisi", 134, 2, 1], ["Avülsiyon", 151, 2, 1],
  ["Çocukta periodonsiyum ve dişeti hastalıkları", 177, 1, 1], ["Çocukluk çağı enfeksiyon hastalıkları", 187, 1, 1], ["Odontojenik enfeksiyonlar", 198, 1, 1], ["Enfektif endokardit profilaksisi", 199, 2, 1],
  ["Lokal anestezi", 217, 1, 1], ["Pulpa-dentin kompleksi", 245, 1, 1], ["Kemomekanik çürük temizleme", 254, 2, 1], ["Cam iyonomer simanlar", 261, 1, 1]] },
{ id: "perio", ad: "Periodontoloji", yayin: "InfoDus Klinik Bilimler", boyut: 46924010, dl: "1dbcRM41Eve5ynKWW2HSfwrmpWW776rCL", drive: "https://drive.google.com/file/d/1dbcRM41Eve5ynKWW2HSfwrmpWW776rCL/view", tarama: true, toc: [
  ["Bölüm 1 • Periodontal dokuların anatomisi", 1, 1], ["Oral epitel, cep epiteli, birleşim epiteli", 7, 2], ["Alveolar kemik", 13, 2], ["Periodontal ligament", 18, 2], ["Sement", 22, 2], ["Dişeti kenarı", 24, 2],
  ["Çocukluk dönemi periodontal durum", 25, 1], ["Çocuklukta dişeti hastalıkları", 26, 2], ["Sistemik durumların belirtisi olarak periodontitis", 27, 2], ["Yaşlanmanın periodonsiyuma etkileri", 28, 2],
  ["Bölüm 2 • Periodontal hastalıkların sınıflandırması (2017)", 31, 1], ["Periodontitisler", 36, 2], ["Gelişimsel ve kazanılmış deformiteler", 40, 2], ["Sistemik hastalıkların periodontal belirtileri", 42, 2],
  ["Periodontal patoloji", 45, 1], ["Konak–mikroorganizma ilişkisi", 48, 1], ["Periodontal hastalıkların mikrobiyolojisi", 52, 1], ["Periodontal hastalıkların etiyolojisi", 64, 1], ["Dento-gingival birleşim ve savunması", 73, 1],
  ["Bölüm 3 • Dişeti hastalıkları", 77, 1], ["Deskuamatif gingivitis", 85, 2]] },
{ id: "protez", ad: "Protetik Diş Tedavisi", yayin: "InfoDus Klinik Bilimler", boyut: 44819405, dl: "1jA2w8uxaiUny-51TcLiGQJkuW-sKeHJF", drive: "https://drive.google.com/file/d/16W49C5eFqHdcfYlwwLUE5nFyk7zkFNPY/view", tarama: true, toc: [
  ["Diş anatomisi", 1, 1], ["Oklüzyonun temelleri", 18, 1], ["Protrüziv kesici yolu", 29, 2], ["Yüz arkı kullanımı", 35, 2], ["Eksik diş varlığında tedavi planlaması", 49, 1], ["Diş preparasyon prensipleri", 62, 1], ["Tam veneer kron preparasyonu", 69, 2], ["Yaygın hasarlı dişlerin preparasyonu", 80, 2], ["Periodontal olarak zayıf dişlerin preparasyonu", 87, 2], ["Çalışma modelleri ve day (güdük) yapımı", 111, 1], ["Mum modelasyon ve döküm", 117, 1]] },
{ id: "radyo", ad: "Ağız, Diş ve Çene Radyolojisi", yayin: "InfoDus Klinik Bilimler", boyut: 70160013, dl: "17-h3tP1digbddCLSpdP5u0bSYPOixBDi", drive: "https://drive.google.com/file/d/19edofEaOxCnlYsVZSRdM0M-9FA827NPU/view", tarama: true, toc: [] },
{ id: "orto", ad: "Ortodonti", yayin: "InfoDus Klinik Bilimler", boyut: 26302999, dl: "1DtMr8mb24ygjQaTjWiiQ2_SKKvrFMcMt", drive: "https://drive.google.com/file/d/18TwhKWBEgR-FCWyITJA7Bjxf8XJlD9Kj/view", tarama: false, toc: [] },
{ id: "endo", ad: "Endodonti", yayin: "InfoDus Klinik Bilimler", boyut: 24503912, dl: "1AkY4YaR7g3wDhQ1hps2Hi7QOp9gm-Muq", drive: "https://drive.google.com/file/d/1AkY4YaR7g3wDhQ1hps2Hi7QOp9gm-Muq/view", tarama: false, toc: [] },
{ id: "resto", ad: "Restoratif Diş Tedavisi", yayin: "InfoDus Klinik Bilimler", boyut: 29511265, dl: "13ApGgJeJsa9ClnYs0vF-CSi4GUosm70u", drive: "https://drive.google.com/file/d/13ApGgJeJsa9ClnYs0vF-CSi4GUosm70u/view", tarama: false, toc: [] },
{ id: "cerrahi", ad: "Ağız, Diş ve Çene Cerrahisi", yayin: "InfoDus Klinik Bilimler", boyut: 16949513, dl: "1N65x-8pPKf7RqzM34qnKFW241vr6qVzy", drive: "https://drive.google.com/file/d/1N65x-8pPKf7RqzM34qnKFW241vr6qVzy/view", tarama: false, toc: [] },
{ id: "ortodd", ad: "Ortodonti", yayin: "DusData", boyut: 42605224, dl: "1wcnpD3bMqKANnZVoMVeI8HGvaImrswmm", drive: "https://drive.google.com/file/d/1wcnpD3bMqKANnZVoMVeI8HGvaImrswmm/view", tarama: false, toc: [
  ["Temel kavramlar", 3, 1], ["Büyüme prensipleri", 6, 2], ["Kemikleşme mekanizmaları", 10, 2], ["Prenatal büyüme ve gelişim", 11, 2], ["Postnatal büyüme ve gelişim", 19, 2], ["Mandibula", 24, 2],
  ["Dentisyonun gelişimi", 28, 1], ["Karma dentisyon", 29, 2], ["Daimi dentisyon dönemi", 32, 2], ["Dental arklardaki boyutsal değişiklikler", 33, 2],
  ["Ortodontik tedavi ve doku cevabı", 35, 1], ["Kuvvet ve hareket", 41, 2], ["Ankraj", 45, 2], ["Minividalar ve miniplaklar", 48, 2],
  ["Ortodontik teşhis", 52, 1], ["Model analizi", 58, 2], ["Sefalometrik analiz", 62, 2], ["Maturasyon indikatörleri", 75, 2],
  ["Ortodontik problemler", 81, 1], ["Maloklüzyonların sınıflandırması", 82, 2],
  ["Ortodontik tedaviler", 88, 1], ["Sürme rehberliği ve seri çekim", 89, 2],
  ["Ortodontik apareyler", 91, 1], ["Hareketli apareyler", 91, 2], ["Fonksiyonel apareyler", 95, 2], ["Sabit ortodontik tedavi teknikleri", 101, 2], ["Ekstraoral ve ortopedik apareyler", 106, 2],
  ["Ortodontik tedavi prensipleri", 116, 1], ["Ortodontide sendromlar", 137, 1], ["Ortognatik cerrahi ve distraksiyon osteogenezisi", 148, 1], ["Materyaller", 154, 1], ["Ortodontik tedavi komplikasyonları", 159, 1], ["Retansiyon ve relaps", 162, 1]] },
{ id: "endodd", ad: "Endodonti Çalışma Soruları", yayin: "DusData", boyut: 8759000, dl: "1fqSP4C21Fx94Wz4Flqto8rcH_FCsU63z", drive: "https://drive.google.com/file/d/1fqSP4C21Fx94Wz4Flqto8rcH_FCsU63z/view", tarama: false, toc: [] },
{ id: "endocik", ad: "Endodonti DUS Çıkmış Soruları", yayin: "DusData", boyut: 3269028, dl: "1teBSv0nikO0onFMXR8OWQEtkhjt2ioV7", drive: "https://drive.google.com/file/d/1teBSv0nikO0onFMXR8OWQEtkhjt2ioV7/view", tarama: false, toc: [] }
];
