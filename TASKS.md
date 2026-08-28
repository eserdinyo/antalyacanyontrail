# Client Meeting Notes — Task List (13 Temmuz 2026)

Kaynak: Antalya Canyon Ultra müşteri toplantısı notları.
Durumlar: `[ ]` todo · `[x]` done · `[B]` blocked (müşteriden bilgi bekleniyor)

## Görevler

- [x] **1. Site başlığı "Antalya Canyon Ultra" olacak** — `Meta.title` (tr/en), footer telif satırı ve logo alt/aria metinleri "Antalya Canyon Trail" → "Antalya Canyon Ultra" yapıldı.
- [x] **2. Fiyat etiketi "2026 Kayıt Ücreti" olacak** — Tüm yarışlarda "b) Kayıt Ücreti Tarifesi:" → "b) 2026 Kayıt Ücreti:" (`lib/route-rules.ts`).
- [x] **3. "(+200 TL TAF bedeli)" eklendi** — 5 yarışın da fiyat satırının sonuna eklendi.
- [x] **4. Yarış sayfalarına ITRA logoları eklendi** — Resmi ITRA logosu `public/logos/itra.svg` olarak indirildi, tüm yarış detay sayfalarının hero bölümünde gösteriliyor.
- [x] **5. Diskalifikasyon maddesine ekleme** — "Çalışan, görevli ve gönüllülere saygısızlık yapmak" 5 yarışın "Diskalifikasyon ve Ceza Şartları" maddesine ve genel kurallardaki diskalifikasyon listesine eklendi.
- [x] **6. 35K → 33K** — Alageyik parkuru tüm sitede 33K oldu (`lib/event.ts`, `lib/route-rules.ts`, `messages/*.json`, `lib/event-program.ts`, nav etiketi). Slug (`alageyik-trail`) ve GPX dosya yolları değişmedi.
- [x] **7. Tüm parkurların değerleri iframe'den güncellendi** — Trace de Trail iframe'leri tüm yarışlara eklendi ve değerler eşitlendi:
  - 70K Termessos (10360): 69.9 km, 1935 m+, 180–738 m
  - 45K Goat (10359): 46.7 km, 1037 m+, 195–587 m
  - 33K Alageyik (10358): 33.5 km, 704 m+, 196–587 m
  - 13K Güver (10356): 13.5 km, 112 m+, 236–303 m
  - 7K My Pace (10357): 7.5 km, 38 m+, 272–303 m
- [x] **8. Su Taşıma Sistemi "en az 1 litre" oldu** — 70K ve 45K zorunlu malzeme listesinde güncellendi (33K zaten 1 litre).
- [x] **9. 70K diskalifikasyon: "dışarıdan destek almak" çıkarıldı** — Sadece 70K'dan; diğer parkurlarda madde duruyor.
- [x] **10. Parkur kuralları İngilizceye çevrildi** — 5 yarışın tüm kural metinleri `lib/route-rules-en.ts` olarak çevrildi; EN yarış sayfaları artık TR ile aynı kural bölümünü (İngilizce) gösteriyor.
- [x] **11. Etkinlik programı yeni Excel'e göre güncellendi (ACU_Schedule_13.07.2026.xlsx)** — `lib/event-program.ts` (TR+EN): Expo açılışı 14:00, kit dağıtımı/sponsor alanı 14:00–20:00; Cumartesi 07:30 start seremonisi, 07:45 elite çağrısı, 08:00 start, "Ultra Party" kaldırıldı; irtifalar 70K 1935m+ / 45K 1037m+; Pazar Güver 13.5K, My Pace cut-off 10:00, ısınma 07:35, 10:00 7K cut-off, 11:00 büyük ödül töreni. Not: Excel'de Alageyik "35K" yazıyor ama aynı sayfadaki akışta "33K" geçiyor; görev 6 kararına göre 33K bırakıldı.
- [x] **12. Yarış kuralları yeni dokümana göre güncellendi (13.07.2026-ACU_Yaris_KurallarI.docx)** — Genel kurallar sayfası (`lib/race-rules.ts`) yeni 15 maddelik dokümanla birebir yenilendi: yeni parkur/mekan tanıtım metni, 7K yaş kategorileri, detaylı kademeli fiyat tablosu, A/B/C iptal-iade-devir politikaları, hukuki uyarı, parkur başına zorunlu malzeme listesi, yeni diskalifikasyon listesi, ödül maddeleri. Per-race kurallarda (`lib/route-rules.ts` + `lib/route-rules-en.ts`): kayıt dönemi 20 Tem – 25 Eki 2026; yeni fiyatlar 70K 4.500/5.000/5.750 ₺, 45K 3.750/4.250/4.850 ₺, 33K 3.150/3.650/4.150 ₺ (7K ve 13K aynı); dönem etiketleri Normal 16 Ağu–24 Eyl, Geç 24 Eyl–25 Eki; Kayıt Sigortası'na 1 Eki–10 Kas sakatlık iadesi eklendi. Dokümandaki "MY PAACE" ve "NOKTAKARI" yazım hataları düzeltilerek aktarıldı.
- [x] **13. Per-race kurallar yeni Açıklama dokümanlarıyla karşılaştırıldı ve güncellendi (Açıklama-70K/45K/33K/13K/7K, 13.07.2026)** — Tarih/fiyat değerleri zaten görev 12 ile eşleşiyordu. Yeni farklar uygulandı (`lib/route-rules.ts` + `lib/route-rules-en.ts` Genel Bilgi): 45K "yaklaşık 46 km"; 33K "Alageyik Parkuru, yaklaşık 33.5 km, trail koşusu"; 13K 105m+ (112m+ idi); 7K 30m+ (38m+ idi). Bilinçli KORUNAN site eklemeleri (dokümanlarda yok ama önceki müşteri kararları): "2026 Kayıt Ücreti" etiketi (görev 2), "+200 TL TAF bedeli" (görev 3), diskalifikasyonda "çalışan/görevli/gönüllülere saygısızlık" (görev 5), 70K'da "dışarıdan destek" maddesinin çıkarılmış olması (görev 9 — 70K dokümanı bu maddeyi tekrar içeriyor, müşteriye soruldu olarak işaretle), kontenjan dolunca erken kapanış + sakatlık iadesi cümleleri (görev 12 genel kurallar dokümanından). Not: 70K dokümanı 1943m+ diyor; iframe ve program Exceli 1935m+ dediği için 1935m+ bırakıldı (müşteriyle netleştirilecek).
- [x] **14. Site görselleri drone fotoğraflarıyla yenilendi** — `~/Downloads/drone photo` klasöründen 8 kare seçildi, optimize edildi (EXIF/GPS temizlendi, hero'lar 2560px / kartlar 1600px, progressive JPEG): ana sayfa hero (Unsplash stok görsel yerine gerçek parkur fotoğrafı, `lib/event.ts` `HERO_IMAGE`), 5 yarış kartı görseli (ultra/marathon/epic/short/fun.jpeg), about arka planı ve yarış kuralları hero'su (PNG→JPEG, `About.tsx` + `race-rules/page.tsx` yolları güncellendi). Tarayıcıda doğrulandı.

## Bekleyen (müşteriden bilgi gerekiyor)

- [x] **B1. Yeni kayıt tarihleri güncellendi** — Çözüldü: 13.07.2026 tarihli yeni kurallar dokümanına göre online kayıtlar 20 Temmuz – 25 Ekim 2026 (kontenjan dolarsa erken kapanır). `lib/route-rules.ts` + `lib/route-rules-en.ts` "a) Kayıt Şekli" paragrafları ve genel kurallar sayfası güncellendi (görev 12).
- [x] **B2. Start saatleri güncellenecek** — Çözüldü: ACU_Schedule_13.07.2026.xlsx start saatlerini doğruladı (tüm yarışlar 08:00; sitedeki mevcut değerlerle uyumlu). Program sayfasındaki eski 07:30 ultra start satırı 08:00 olarak düzeltildi (görev 11).
- [x] **B3. "İsimler ultra ve canyon aynı sayfayı açmalı"** — Çözüldü: antalyacanyonultra.com ve antalyacanyontrail.com aynı Vercel projesinde, birebir aynı içeriği sunuyor (doğrulandı). Görülen fark domain değil dil farkıydı (TR sayfalarda olup EN'de olmayan kurallar bölümü) — görev 10 ile giderildi.

## 28 Ağustos 2026

- [x] **15. Yeni parkur: 22K Forest Trail eklendi** — `22K FOREST TRAİL.gpx` + `22K FOREST TRAİL KURALLARI.docx` kaynaklı. `lib/event.ts` (ACT22, slug `forest-trail`, yeni `pine` rengi, TAF kayıt id=224), `public/routes/act22-forest-trail.gpx`, `public/races/forest.jpeg` (drone 0144), TR/EN parkur kuralları, genel kurallar (katılım şartı, fiyat, zorunlu malzeme), etkinlik programı (Cumartesi 08.00 start, cut-off duyurulacak), nav + çeviriler, ana sayfa grid 6 kolon. Notlar: Dokümanda 400m+ yazıyor, GPX ~295m ölçüyor (resmi 400m+ gösteriliyor, ölçülen ayrıca). Doküman yer yer "23K" diyor; GPX/başlık 22K olduğu için 22K kullanıldı. ITRA puanı ve cut-off saati müşteriden bekleniyor.
- [x] **16. 7K / 13K Takım Kategorisi kuralları eklendi (7-13K-TAKIM-KURALLARI.docx)** — 13K parkur kurallarına "9. Takım Kategorisi", 7K'ya "10. Takım Kategorisi" bölümü (TR `lib/route-rules.ts` + EN `lib/route-rules-en.ts`): katılım şartları (18+, min 5 sporcu, karma serbest), sıralama (en hızlı 3 toplam süre, eşitlikte 4./5. sporcu), ödül (ilk 3 takım). Genel kurallar "13. ÖDÜLLER" maddesine özet satır eklendi.
