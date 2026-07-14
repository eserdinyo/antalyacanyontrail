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

## Bekleyen (müşteriden bilgi gerekiyor)

- [B] **B1. Yeni kayıt tarihleri güncellenecek** — Yeni tarihler müşteriden gelmedi. (Mevcut: 21 Haziran – 18 Ekim 2026, `lib/route-rules.ts` "a) Kayıt Şekli" paragrafları.)
- [B] **B2. Start saatleri güncellenecek** — Yeni saatler müşteriden gelmedi. (Mevcut: 14–15 Kasım 08:00, `lib/route-rules.ts` "Genel Bilgi" paragrafları + `lib/event.ts` `EVENT_DATE` + Countdown alt yazısı.)
- [B] **B3. "İsimler ultra ve canyon aynı sayfayı açmalı"** — Ne kastedildiği müşteriyle netleştirilecek; sitede "Ultra" ve "Canyon" adında ayrı iki link yok.
