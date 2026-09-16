import type { RaceSlug } from "./event";

export type RouteRuleContent =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type RouteRuleSection = {
  id: string;
  title: string;
  content: RouteRuleContent[];
};

export type RouteRules = {
  title: string;
  subtitle: string;
  sections: RouteRuleSection[];
};

export const ROUTE_RULES: Record<RaceSlug, RouteRules> = {
  "antalya-termessos-ultra": {
    title: "ANTALYA CANYON ULTRA - 70K ANTALYA TERMESSOS ULTRA",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 70K Antalya Termessos Ultra, yaklaşık 70 km uzunluğunda ve 1935m+ tırmanış içeren, en üst seviye ultra maraton patika koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08.00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 15 saat 45 dakika (Zaman sınırı: 23.45) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "70K Antalya Termessos Ultra parkuruna katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet Federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 20 Temmuz 2026 tarihinde başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla (veya parkur kontenjanının dolması durumunda daha erken) kapatılacaktır. Katılımcı sayısı 200 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti: Erken Kayıt (20 Tem - 31 Tem): 4.500 ₺ | Normal Kayıt (1 Ağus - 24 Eyl): 5.000 ₺ | Geç Kayıt (25 Eyl - 25 Eki): 5.750 ₺ (+200 TL TAF bedeli)",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23.59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler; 1 Ekim - 10 Kasım 2026 arasında ise sakatlık durumunda resmi sağlık/heyet raporu ibrazı ile %100 iade alabilirler. 13 Ekim 2026 saat 23.59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
          },
        ],
      },
      {
        id: "kit-drop-bag",
        title: "4. Yarış Kiti Teslimi ve Drop Bag (Ara Nokta Destek Çantası)",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası, zaman ölçüm çipleri ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında sağlık raporu/lisans kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. 70K Antalya Termessos Ultra sporcuları için ara nokta destek çantası (Drop Bag) teslim etme hakkı bulunmaktadır. Drop Bag çantaları 14 Kasım sabahı 06.00 - 07.20 saatleri arasında teslim alınacaktır.",
          },
        ],
      },
      {
        id: "parkur-cevre",
        title: "5. Parkur Güzergahı ve Çevre Duyarlılığı",
        content: [
          {
            type: "paragraph",
            text: "Yarış parkuru şeritler ve yön okları ile işaretlenecektir. Belirlenmiş olan güzergahın dışına çıkmak ve kestirme yol kullanmak doğrudan diskalifiye sebebidir. 'Leave No Trace' (İz Bırakma) ilkesi gereği doğaya çöp atan sporcular anında diskalifiye edilir. İstasyonlarda plastik bardak bulunmayacaktır; her sporcu kendi bardağını/su kabını taşımalıdır.",
          },
        ],
      },
      {
        id: "zorunlu-malzemeler",
        title: "6. Zorunlu Malzemeler",
        content: [
          {
            type: "list",
            items: [
              "Sağlık Raporu veya Geçerli Lisans: Kit dağıtım masasında ibraz edilecektir.",
              "Cep Telefonu: Bataryası tam dolu, organizasyon acil durum numaraları kayıtlı.",
              "Su Taşıma Sistemi: En az 1 litre kapasiteli su torbası veya soft flask/matara.",
              "Bardak veya Soft Flask: İstasyonlarda plastik bardak bulunmayacaktır.",
              "Yağmurluk / Rüzgarlık: Kapüşonlu, dikişleri kaynaklı ve su/rüzgar geçirmez özellikte.",
              "Acil Durum Battaniyesi (Termal): En az 1.40m x 2m ölçülerinde.",
              "Düdük: Kolay ulaşılabilecek bir yerde.",
              "İlk Yardım Seti: Elastik bandaj, yara bandı ve gazlı bez.",
              "Kafa Lambası: Çalışır durumda ve yedek pilli/bataryalı (gece etabına kalma ihtimali sebebiyle zorunludur).",
            ],
          },
        ],
      },
      {
        id: "diskalifikasyon-ceza",
        title: "7. Diskalifikasyon ve Ceza Şartları",
        content: [
          {
            type: "paragraph",
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, zorunlu malzemeleri bulundurmamak, çalışan, görevli ve gönüllülere saygısızlık yapmak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını bırakmaları halinde ek 1 saat zaman cezası uygulanır. Kayıtsız koşma veya başkasının göğüs numarasıyla yarışma durumlarında sporcular diskalifiye edilir.",
          },
        ],
      },
      {
        id: "sonuclar-oduller",
        title: "8. Sonuçlar ve Ödüller",
        content: [
          {
            type: "paragraph",
            text: "Değerlendirmeler Erkek/Kadın Genel Klasman (18+) ve organizasyon şemasındaki yaş kategorileri üzerinden yapılacaktır. Kurallara uygun olarak zaman bariyerleri içerisinde yarışı tamamlayan tüm sporculara bitiren (finisher) madalyası takdim edilecektir.",
          },
          {
            type: "list",
            items: [
              "Genel Klasman Erkek / Kadın",
              "40 Yaş Altı Kategorisi",
              "40-49 Yaş Kategorisi",
              "50+ Yaş Kategorisi",
            ],
          },
        ],
      },
    ],
  },
  "antalya-goat-ultra": {
    title: "ANTALYA CANYON ULTRA - 45K ANTALYA GOAT ULTRA",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 45K Antalya Goat Ultra, yaklaşık 46 km uzunluğunda ve 1037m+ tırmanış içeren, ileri düzey bir ultra maraton patika koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08.00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 12 saat (Zaman sınırı: 20.00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "45K Antalya Goat Ultra parkuruna katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet Federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 20 Temmuz 2026 tarihinde başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla (veya parkur kontenjanının dolması durumunda daha erken) kapatılacaktır. Katılımcı sayısı 300 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti: Erken Kayıt (20 Tem - 31 Tem): 3.750 ₺ | Normal Kayıt (1 Ağus - 24 Eyl): 4.250 ₺ | Geç Kayıt (25 Eyl - 25 Eki): 4.850 ₺ (+200 TL TAF bedeli)",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23.59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler; 1 Ekim - 10 Kasım 2026 arasında ise sakatlık durumunda resmi sağlık/heyet raporu ibrazı ile %100 iade alabilirler. 13 Ekim 2026 saat 23.59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
          },
        ],
      },
      {
        id: "kit-drop-bag",
        title: "4. Yarış Kiti Teslimi ve Drop Bag (Ara Nokta Destek Çantası)",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası, zaman ölçüm çipleri ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında sağlık raporu/lisans kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. 45K Antalya Goat Ultra sporcuları için ara nokta destek çantası (Drop Bag) teslim etme hakkı bulunmaktadır. Drop Bag çantaları 14 Kasım sabahı 06.00 - 07.20 saatleri arasında teslim alınacaktır.",
          },
        ],
      },
      {
        id: "parkur-cevre",
        title: "5. Parkur Güzergahı ve Çevre Duyarlılığı",
        content: [
          {
            type: "paragraph",
            text: "Yarış parkuru şeritler ve yön okları ile işaretlenecektir. Belirlenmiş olan güzergahın dışına çıkmak ve kestirme yol kullanmak doğrudan diskalifiye sebebidir. 'Leave No Trace' (İz Bırakma) ilkesi gereği doğaya çöp atan sporcular anında diskalifiye edilir. İstasyonlarda plastik bardak bulunmayacaktır; her sporcu kendi bardağını/su kabını taşımalıdır.",
          },
        ],
      },
      {
        id: "zorunlu-malzemeler",
        title: "6. Zorunlu Malzemeler",
        content: [
          {
            type: "list",
            items: [
              "Sağlık Raporu veya Geçerli Lisans: Kit dağıtım masasında ibraz edilecektir.",
              "Cep Telefonu: Bataryası tam dolu, organizasyon acil durum numaraları kayıtlı.",
              "Su Taşıma Sistemi: En az 1 litre kapasiteli su torbası veya soft flask/matara.",
              "Bardak veya Soft Flask: İstasyonlarda plastik bardak bulunmayacaktır.",
              "Yağmurluk / Rüzgarlık: Kapüşonlu ve su/rüzgar geçirmez özellikte.",
              "Acil Durum Battaniyesi (Termal): En az 1.40m x 2m ölçülerinde.",
              "Düdük: Kolay ulaşılabilecek bir yerde.",
              "İlk Yardım Seti: Elastik bandaj, yara bandı ve gazlı bez.",
            ],
          },
        ],
      },
      {
        id: "diskalifikasyon-ceza",
        title: "7. Diskalifikasyon ve Ceza Şartları",
        content: [
          {
            type: "paragraph",
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, izin verilen kontrol noktaları (CP) dışında dışarıdan destek almak, zorunlu malzemeleri bulundurmamak, çalışan, görevli ve gönüllülere saygısızlık yapmak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını bırakmaları halinde ek 1 saat zaman cezası uygulanır. Kayıtsız koşma veya başkasının göğüs numarasıyla yarışma durumlarında sporcular diskalifiye edilir.",
          },
        ],
      },
      {
        id: "sonuclar-oduller",
        title: "8. Sonuçlar ve Ödüller",
        content: [
          {
            type: "paragraph",
            text: "Değerlendirmeler Erkek/Kadın Genel Klasman (18+) ve organizasyon şemasındaki yaş kategorileri üzerinden yapılacaktır. Kurallara uygun olarak zaman bariyerleri içerisinde yarışı tamamlayan tüm sporculara bitiren (finisher) madalyası takdim edilecektir.",
          },
          {
            type: "list",
            items: [
              "Genel Klasman Erkek / Kadın",
              "40 Yaş Altı Kategorisi",
              "40-49 Yaş Kategorisi",
              "50+ Yaş Kategorisi",
            ],
          },
        ],
      },
    ],
  },
  "alageyik-trail": {
    title: "ANTALYA CANYON ULTRA - 33K ALAGEYİK PARKURU",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 33K Alageyik Parkuru, yaklaşık 33.5 km uzunluğunda ve 704m+ tırmanış içeren bir trail koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08.00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 9 saat (Zaman sınırı: 17.00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "33K Alageyik Parkuru'na katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet Federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 20 Temmuz 2026 tarihinde başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla (veya parkur kontenjanının dolması durumunda daha erken) kapatılacaktır. Katılımcı sayısı 400 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti: Erken Kayıt (20 Tem - 31 Tem): 3.150 ₺ | Normal Kayıt (1 Ağus - 24 Eyl): 3.650 ₺ | Geç Kayıt (25 Eyl - 25 Eki): 4.150 ₺ (+200 TL TAF bedeli)",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23.59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler; 1 Ekim - 10 Kasım 2026 arasında ise sakatlık durumunda resmi sağlık/heyet raporu ibrazı ile %100 iade alabilirler. 13 Ekim 2026 saat 23.59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
          },
        ],
      },
      {
        id: "kit-randevu",
        title: "4. Yarış Kiti Teslimi ve Randevu Sistemi",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası, zaman ölçüm çipleri ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında kimlik kontrolü, sağlık raporu/lisans kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. Bekleme süresini en aza indirmek için kişisel sayfanızdan 'Randevu Sistemi' üzerinden saat seçmeniz önerilir.",
          },
        ],
      },
      {
        id: "parkur-cevre",
        title: "5. Parkur Güzergahı ve Çevre Duyarlılığı",
        content: [
          {
            type: "paragraph",
            text: "Yarış parkuru şeritler ve yön okları ile işaretlenecektir. Belirlenmiş olan güzergahın dışına çıkmak ve kestirme yol kullanmak doğrudan diskalifiye sebebidir. 'Leave No Trace' (İz Bırakma) ilkesi gereği doğaya çöp atan sporcular anında diskalifiye edilir. İstasyonlarda plastik bardak bulunmayacaktır; her sporcu kendi bardağını/su kabını taşımalıdır.",
          },
        ],
      },
      {
        id: "zorunlu-malzemeler",
        title: "6. Zorunlu Malzemeler",
        content: [
          {
            type: "list",
            items: [
              "Sağlık Raporu veya Geçerli Lisans: Kit dağıtım masasında ibraz edilecektir.",
              "Cep Telefonu: Bataryası tam dolu, organizasyon acil durum numaraları kayıtlı.",
              "Su Taşıma Sistemi: En az 1 litre kapasiteli su torbası veya soft flask/matara.",
              "Bardak veya Soft Flask: İstasyonlarda plastik bardak bulunmayacaktır.",
              "Yağmurluk / Rüzgarlık: Kapüşonlu ve su/rüzgar geçirmez özellikte.",
              "Acil Durum Battaniyesi (Termal): En az 1.40m x 2m ölçülerinde.",
              "Düdük: Kolay ulaşılabilecek bir yerde.",
              "İlk Yardım Seti: Elastik bandaj, yara bandı ve gazlı bez.",
            ],
          },
        ],
      },
      {
        id: "diskalifikasyon-ceza",
        title: "7. Diskalifikasyon ve Ceza Şartları",
        content: [
          {
            type: "paragraph",
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, izin verilen alanlar dışında dışarıdan destek almak, zorunlu malzemeleri bulundurmamak, çalışan, görevli ve gönüllülere saygısızlık yapmak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını bırakmaları halinde ek 1 saat zaman cezası uygulanır. Kayıtsız koşma veya başkasının göğüs numarasıyla yarışma durumlarında sporcular diskalifiye edilir ve organizasyonun yasal sorumluluk sınırları dışında kalırlar.",
          },
        ],
      },
      {
        id: "sonuclar-oduller",
        title: "8. Sonuçlar ve Ödüller",
        content: [
          {
            type: "paragraph",
            text: "Değerlendirmeler Erkek/Kadın Genel Klasman (18+) ve organizasyon şemasındaki yaş kategorileri üzerinden yapılacaktır. Kurallara uygun olarak zaman bariyerleri içerisinde yarışı tamamlayan tüm sporculara bitiren (finisher) madalyası takdim edilecektir.",
          },
          {
            type: "list",
            items: [
              "Genel Klasman Erkek / Kadın",
              "18-29 Yaş Kategorisi",
              "30-39 Yaş Kategorisi",
              "40-49 Yaş Kategorisi",
              "50-59 Yaş Kategorisi",
              "60+ Yaş Kategorisi",
            ],
          },
        ],
      },
    ],
  },
  "forest-trail": {
    title: "ANTALYA CANYON ULTRA - 22K FOREST TRAIL PARKURU",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 22K Forest Trail Parkuru, yaklaşık 22 km uzunluğunda ve 400m+ tırmanış içeren bir trail koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08.00'de start alanından başlar. Katılımcıların parkuru, organizasyon tarafından ilan edilen zaman sınırı içerisinde tamamlamaları gereklidir. Bu parkurda kısmi yeterlilik esas alınır. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "22K Forest Trail Parkuru'na katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Triatlon, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 28 Ağustos 2026 tarihinde başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla kapatılacaktır. Katılımcı sayısı organizasyon tarafından belirlenen kontenjan ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti: Normal Kayıt (28 Ağus - 25 Eki): 3.550 ₺ (+200 TL TAF bedeli)",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23.59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026 tarihine kadar gerekçesiz %100 iade alabilirler. 13 Ekim 2026 saat 23.59'a kadar, organizasyonun belirlediği devir hizmet kesintisi uygulanarak başka bir sporcuya kayıt devri yapılabilir.",
          },
        ],
      },
      {
        id: "kit-randevu",
        title: "4. Yarış Kiti Teslimi ve Randevu Sistemi",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası, zaman ölçüm çipleri ve malzemelerini içeren koşu paketlerini ilan edilen 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında kimlik kontrolü, sağlık raporu/lisans kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır.",
          },
        ],
      },
      {
        id: "parkur-cevre",
        title: "5. Parkur Güzergahı ve Çevre Duyarlılığı",
        content: [
          {
            type: "paragraph",
            text: "Yarış parkuru şeritler ve yön okları ile işaretlenecektir. Belirlenmiş olan güzergahın dışına çıkmak ve kestirme yol kullanmak doğrudan diskalifiye sebebidir. 'Leave No Trace' (İz Bırakma) ilkesi gereği doğaya çöp atan sporcular anında diskalifiye edilir. İstasyonlarda plastik bardak bulunmayacaktır; her sporcu kendi bardağını/su kabını taşımalıdır.",
          },
        ],
      },
      {
        id: "zorunlu-malzemeler",
        title: "6. Zorunlu Malzemeler",
        content: [
          {
            type: "list",
            items: [
              "Sağlık Raporu veya Geçerli Lisans: Kit dağıtım masasında ibraz edilecektir.",
              "Cep Telefonu: Bataryası tam dolu, organizasyon acil durum numaraları kayıtlı olmalıdır.",
              "Su Taşıma Sistemi: En az 1 litre kapasiteli su torbası veya soft flask/matara.",
              "Bardak veya Soft Flask: İstasyonlarda plastik bardak bulunmayacaktır.",
              "Düdük: Kolay ulaşılabilecek bir yerde taşınmalıdır.",
              "İlk Yardım Seti: Elastik bandaj, yara bandı ve gazlı bez içermelidir.",
            ],
          },
          {
            type: "paragraph",
            text: "Organizasyon, hava koşullarına göre yarış öncesinde zorunlu malzeme listesinde değişiklik yapma hakkını saklı tutar.",
          },
        ],
      },
      {
        id: "diskalifikasyon-ceza",
        title: "7. Diskalifikasyon ve Ceza Şartları",
        content: [
          {
            type: "list",
            items: [
              "Kontrol noktalarından geçmemek",
              "200 metreden fazla kestirme yol kullanmak",
              "İzin verilen alanlar dışında dışarıdan destek almak",
              "Zorunlu malzemeleri bulundurmamak",
              "Çevreye çöp atmak",
              "Kayıtsız koşmak veya başka bir sporcunun göğüs numarasıyla yarışmak",
              "Çalışan, görevli ve gönüllülere saygısızlık yapmak",
            ],
          },
          {
            type: "paragraph",
            text: "Batonlu başlayan koşucuların, finişten önce batonlarını bırakmaları halinde organizasyonun belirleyeceği zaman cezası uygulanabilir.",
          },
        ],
      },
      {
        id: "sonuclar-oduller",
        title: "8. Sonuçlar ve Ödüller",
        content: [
          {
            type: "paragraph",
            text: "Değerlendirmeler Erkek/Kadın Genel Klasman (18+) ve organizasyon şemasındaki yaş kategorileri üzerinden yapılacaktır. Kurallara uygun olarak zaman bariyerleri içerisinde yarışı tamamlayan tüm sporculara bitiren (finisher) madalyası takdim edilecektir.",
          },
          {
            type: "list",
            items: [
              "Genel Klasman Erkek / Kadın",
              "18-29 Yaş Kategorisi",
              "30-39 Yaş Kategorisi",
              "40-49 Yaş Kategorisi",
              "50-59 Yaş Kategorisi",
              "60+ Yaş Kategorisi",
            ],
          },
        ],
      },
      {
        id: "organizasyon-yetkisi",
        title: "9. Organizasyonun Yetkisi",
        content: [
          {
            type: "paragraph",
            text: "Organizasyon komitesi; parkur, zaman limitleri, zorunlu malzemeler, istasyon içerikleri, start saatleri ve yarış güvenliğine ilişkin diğer konularda değişiklik yapma hakkını saklı tutar. Hava koşulları, doğal afet, resmi makam kararları veya güvenlik gerekçeleri doğrultusunda yarışın kısmen ya da tamamen iptal edilmesi durumunda organizasyonun güncel kuralları esas alınır.",
          },
        ],
      },
      {
        id: "son-hukum",
        title: "10. Son Hüküm",
        content: [
          {
            type: "paragraph",
            text: "22K Forest Trail Parkuru'na kayıt yaptıran her sporcu, bu yarışma kurallarını okumuş, anlamış ve kabul etmiş sayılır.",
          },
        ],
      },
    ],
  },
  "guver-cliff-trail": {
    title: "ANTALYA CANYON ULTRA - 13K GÜVER CLIFF TRAIL",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 13K Güver Cliff Trail, yaklaşık 13.5 km uzunluğunda ve 105m+ tırmanış içeren bir patika koşusudur. Koşu, 15 Kasım 2026 tarihinde saat 08.00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 3 saat (Zaman sınırı: 11.00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "13K Güver Cliff Trail parkuru için sağlık raporu veya lisans zorunluluğu bulunmamaktadır. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir. Sağlık belgesi veya lisans ibraz etmeyen sporcular kendi beyanları ile imzalayacakları feragatname ile koşabilirler. Katılımcıların atletik hazırlıklarının olması ve farklı hava/doğa şartlarına uygun kıyafetler giymeleri gerekmektedir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 20 Temmuz 2026 tarihinde başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla (veya parkur kontenjanının dolması durumunda daha erken) kapatılacaktır. Maksimum katılımcı sayısı 500 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti: Erken Kayıt (20 Tem - 31 Tem): 2.250 ₺ | Normal Kayıt (1 Ağus - 24 Eyl): 2.750 ₺ | Geç Kayıt (25 Eyl - 25 Eki): 3.000 ₺ (+200 TL TAF bedeli)",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23.59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler; 1 Ekim - 10 Kasım 2026 arasında ise sakatlık durumunda resmi sağlık/heyet raporu ibrazı ile %100 iade alabilirler. 13 Ekim 2026 saat 23.59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
          },
        ],
      },
      {
        id: "kit-randevu",
        title: "4. Yarış Kiti Teslimi ve Randevu Sistemi",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında kimlik kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. Bekleme süresini en aza indirmek için kişisel sayfanızdan 'Randevu Sistemi' üzerinden saat seçmeniz önerilir.",
          },
        ],
      },
      {
        id: "parkur-cevre",
        title: "5. Parkur Güzergahı ve Çevre Duyarlılığı",
        content: [
          {
            type: "paragraph",
            text: "Yarış parkuru şeritler ve yön okları ile işaretlenecektir. Belirlenmiş olan güzergahın dışına çıkmak ve kestirme yol kullanmak doğrudan diskalifiye sebebidir. 'Leave No Trace' (İz Bırakma) ilkesi gereği doğaya çöp atan sporcular anında diskalifiye edilir. İstasyonlarda plastik bardak bulunmayacaktır; her sporcu kendi bardağını/su kabını taşımalıdır.",
          },
        ],
      },
      {
        id: "zorunlu-malzemeler",
        title: "6. Zorunlu Malzemeler",
        content: [{ type: "paragraph", text: "Zorunlu malzeme yoktur." }],
      },
      {
        id: "diskalifikasyon-ceza",
        title: "7. Diskalifikasyon ve Ceza Şartları",
        content: [
          {
            type: "paragraph",
            text: "Kontrol noktalarından geçmemek, 200 m den fazla kestirme yol kullanmak, izin verilen alanlar dışında dışarıdan destek almak, çalışan, görevli ve gönüllülere saygısızlık yapmak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını herhangi bir yere bırakmaları halinde ek 1 saat zaman cezası uygulanır.",
          },
        ],
      },
      {
        id: "sonuclar-oduller",
        title: "8. Sonuçlar ve Ödüller",
        content: [
          {
            type: "paragraph",
            text: "Değerlendirmeler Erkek/Kadın Genel Klasman ve aşağıdaki yaş kategorileri üzerinden yapılacaktır. Kürsüye çıkan sporcular yaş kategorisinde ayrıca ödül alamaz. Zaman sınırı içinde yarışı tamamlayan tüm sporculara bitiren (finisher) madalyası verilecektir.",
          },
          {
            type: "list",
            items: [
              "Genel Klasman Erkek / Kadın (18+)",
              "18-29 Yaş Kategorisi",
              "30-39 Yaş Kategorisi",
              "40-49 Yaş Kategorisi",
              "50-59 Yaş Kategorisi",
              "60+ Yaş Kategorisi",
            ],
          },
        ],
      },
      {
        id: "takim-kategorisi",
        title: "9. Takım Kategorisi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında 13K Güver Cliff Trail parkurunda Takım Kategorisi düzenlenmektedir. Takım Kategorisi'ne katılım için herhangi bir şirket, kulüp, kurum veya derneğe bağlı olma zorunluluğu bulunmamaktadır. Şirket çalışanları, spor kulüpleri, koşu grupları, arkadaş grupları veya yarış için bir araya gelen sporcular kendi takımlarını oluşturabilir. Takım Kategorisi yarışları, 13K Güver Cliff Trail bireysel yarışıyla aynı parkurda ve aynı start içerisinde gerçekleştirilir; ancak sonuç ve tasnifleri ayrı olarak yapılır.",
          },
          { type: "paragraph", text: "Katılım Şartları:" },
          {
            type: "list",
            items: [
              "Takım Kategorisi yalnızca 18 yaş ve üzeri sporculara açıktır.",
              "Bir takım en az 5 sporcudan oluşmalıdır; azami sporcu sayısı bulunmamaktadır.",
              "Takımlar kadın, erkek veya kadın-erkek karma olarak oluşturulabilir; kadın veya erkek sporcu sayısına ilişkin bir zorunluluk yoktur.",
              "7K ve 13K Takım Kategorileri birbirinden bağımsız olarak değerlendirilir.",
              "Bir sporcu aynı parkurda yalnızca bireysel veya takım kategorilerinden birinde değerlendirmeye alınabilir. Takım Kategorisi'nde yarışan sporcular, aynı yarışın bireysel genel klasman veya yaş kategorisi sıralamasına dahil edilmez.",
              "Cumartesi günü bireysel olarak yarışan bir sporcu, Pazar günü düzenlenen 7K veya 13K yarışına tercihe bağlı olarak bireysel veya takım kategorisinde yeniden katılabilir.",
            ],
          },
          { type: "paragraph", text: "Takım Sıralaması:" },
          {
            type: "list",
            items: [
              "Takım derecesi, takımın yarışı geçerli şekilde tamamlayan en hızlı 3 sporcusunun toplam süresi esas alınarak belirlenir; en düşük toplam süreye sahip takım üst sırada yer alır.",
              "Eşitlik durumunda takımların 4. sporcularının, eşitliğin devamı halinde 5. ve sonraki sporcularının dereceleri karşılaştırılır.",
              "Takımın sıralamaya dahil olabilmesi için en az 5 sporcunun start alması ve takım derecesinin oluşabilmesi için en az 3 sporcunun yarışı geçerli şekilde tamamlaması gerekmektedir.",
            ],
          },
          {
            type: "paragraph",
            text: "Ödüllendirme: 7K ve 13K Takım Kategorileri ayrı ayrı değerlendirilir; her iki mesafede de sıralamada yer alan en hızlı ilk 3 takım ödül almaya hak kazanır.",
          },
        ],
      },
    ],
  },
  "my-pace-run": {
    title: "ANTALYA CANYON ULTRA - 7K MY PACE RUN",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 7K My Pace Run, yaklaşık 7.5 km uzunluğunda ve 30m+ tırmanış içeren bir patika koşusudur. Koşu, 15 Kasım 2026 tarihinde saat 08.00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 2 saat (Zaman sınırı: 10.00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "7K My Pace Run parkuru için sağlık raporu veya lisans zorunluluğu bulunmamaktadır. Yarışmada 12-17 yaş grubu ve 18+ yaş grubu olmak üzere iki ayrı kategori mevcuttur. 12-17 yaşındaki sporcular veli izin dilekçesi ile yarışabilir. Sağlık belgesi veya lisans ibraz etmeyen katılımcılar kendi beyanları ile imzalayacakları feragatname ile koşabilirler. Katılımcıların atletik hazırlıklarının olması ve farklı hava/doğa şartlarına uygun kıyafetler giymeleri gerekmektedir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 20 Temmuz 2026 tarihinde başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla (veya parkur kontenjanının dolması durumunda daha erken) kapatılacaktır. Maksimum katılımcı sayısı 500 kişi ile sınırlandırılmıştır. Yapılan her kayıt kişiye özeldir.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti: Erken Kayıt (20 Tem - 31 Tem): 1.650 ₺ | Normal Kayıt (1 Ağus - 24 Eyl): 2.000 ₺ | Geç Kayıt (25 Eyl - 25 Eki): 2.250 ₺ (+200 TL TAF bedeli)",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Keyfi iptal taleplerinde tam ücret iadesi yapılmaz. Son kısmi iptal tarihi olan 1 Ekim 2026 saat 23.59'ya kadar yapılacak başvurularda, net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. 1 Ekim 2026'dan sonra standart paket iadesi yapılmaz. İlk kayıt esnasında %15 ek bedelle 'Kayıt Sigortası' satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 kesintisiz iade alabilirler; 1 Ekim - 10 Kasım 2026 arasında ise sakatlık durumunda resmi sağlık/heyet raporu ibrazı ile %100 iade alabilirler. 13 Ekim 2026 günü saat 23.59'a kadar %50 devir hizmet kesintisi uygulanarak başka bir sporcuya devir yapılabilir.",
          },
          {
            type: "paragraph",
            text: "Kayıt ücretine dahil olan hizmetler: Göğüs numarası ve zaman ölçüm çipi, özel tasarım yarış tişörtü, CP noktalarında yiyecek/içecek desteği, bitiren madalyası.",
          },
        ],
      },
      {
        id: "kit-randevu",
        title: "4. Yarış Kiti Teslimi ve Randevu Sistemi",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında kimlik kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. Bekleme süresini en aza indirmek için kişisel sayfanızdan 'Randevu Sistemi' üzerinden saat seçmeniz önerilir.",
          },
        ],
      },
      {
        id: "kosu-starti",
        title: "5. Koşu Startı",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların start saatinden en az 30 dakika önce başlangıç alanında hazır bulunmaları gerekmektedir. Start alanı saat 08.00'de toplu olarak başlar. Başlangıç alanında emanet çanta teslim bölgesi yer alacaktır. Katılımcılar teslim ettikleri çantalarını göğüs numaralarını göstermek şartıyla koşu sonunda geri alabilirler.",
          },
        ],
      },
      {
        id: "parkur-cevre",
        title: "6. Parkur Güzergahı ve Çevre Duyarlılığı",
        content: [
          {
            type: "paragraph",
            text: "Yarış parkuru yön okları ve tabelalarla işaretlenecektir. Belirlenmiş olan güzergahın dışına çıkmak ve kestirme yol kullanmak doğrudan diskalifiye sebebidir. Çöpler kesinlikle sadece istasyonlardaki çöp kutularına atılmalıdır. Doğaya çöp atan sporcular anında diskalifiye edilir. İstasyonlarda plastik bardak bulunmayacaktır; her sporcu kendi bardağını/su kabını taşımalıdır.",
          },
        ],
      },
      {
        id: "zorunlu-malzemeler",
        title: "7. Zorunlu Malzemeler",
        content: [{ type: "paragraph", text: "Zorunlu malzeme yoktur." }],
      },
      {
        id: "diskalifikasyon-ceza",
        title: "8. Diskalifikasyon ve Ceza Şartları",
        content: [
          {
            type: "paragraph",
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, doğaya çöp atmak, sportmenlik dışı davranışlar sergilemek, çalışan, görevli ve gönüllülere saygısızlık yapmak doğrudan diskalifiye sebebidir.",
          },
        ],
      },
      {
        id: "sonuclar-oduller",
        title: "9. Sonuçlar ve Ödüller",
        content: [
          {
            type: "paragraph",
            text: "Değerlendirmeler Erkek/Kadın Genel Klasman (18+) ve Erkek/Kadın 12-17 Yaş Kategorisi üzerinden yapılacaktır. Zaman bariyerleri içerisinde yarışı tamamlayan tüm sporculara bitiren (finisher) madalyası takdim edilecektir.",
          },
          {
            type: "list",
            items: [
              "12-17 yaş Genel Klasman Kadın / Erkek",
              "18+ yaş Genel Klasman Kadın / Erkek",
            ],
          },
        ],
      },
      {
        id: "takim-kategorisi",
        title: "10. Takım Kategorisi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında 7K My Pace Run parkurunda Takım Kategorisi düzenlenmektedir. Takım Kategorisi'ne katılım için herhangi bir şirket, kulüp, kurum veya derneğe bağlı olma zorunluluğu bulunmamaktadır. Şirket çalışanları, spor kulüpleri, koşu grupları, arkadaş grupları veya yarış için bir araya gelen sporcular kendi takımlarını oluşturabilir. Takım Kategorisi yarışları, 7K My Pace Run bireysel yarışıyla aynı parkurda ve aynı start içerisinde gerçekleştirilir; ancak sonuç ve tasnifleri ayrı olarak yapılır.",
          },
          { type: "paragraph", text: "Katılım Şartları:" },
          {
            type: "list",
            items: [
              "Takım Kategorisi yalnızca 18 yaş ve üzeri sporculara açıktır.",
              "Bir takım en az 5 sporcudan oluşmalıdır; azami sporcu sayısı bulunmamaktadır.",
              "Takımlar kadın, erkek veya kadın-erkek karma olarak oluşturulabilir; kadın veya erkek sporcu sayısına ilişkin bir zorunluluk yoktur.",
              "7K ve 13K Takım Kategorileri birbirinden bağımsız olarak değerlendirilir.",
              "Bir sporcu aynı parkurda yalnızca bireysel veya takım kategorilerinden birinde değerlendirmeye alınabilir. Takım Kategorisi'nde yarışan sporcular, aynı yarışın bireysel genel klasman veya yaş kategorisi sıralamasına dahil edilmez.",
              "Cumartesi günü bireysel olarak yarışan bir sporcu, Pazar günü düzenlenen 7K veya 13K yarışına tercihe bağlı olarak bireysel veya takım kategorisinde yeniden katılabilir.",
            ],
          },
          { type: "paragraph", text: "Takım Sıralaması:" },
          {
            type: "list",
            items: [
              "Takım derecesi, takımın yarışı geçerli şekilde tamamlayan en hızlı 3 sporcusunun toplam süresi esas alınarak belirlenir; en düşük toplam süreye sahip takım üst sırada yer alır.",
              "Eşitlik durumunda takımların 4. sporcularının, eşitliğin devamı halinde 5. ve sonraki sporcularının dereceleri karşılaştırılır.",
              "Takımın sıralamaya dahil olabilmesi için en az 5 sporcunun start alması ve takım derecesinin oluşabilmesi için en az 3 sporcunun yarışı geçerli şekilde tamamlaması gerekmektedir.",
            ],
          },
          {
            type: "paragraph",
            text: "Ödüllendirme: 7K ve 13K Takım Kategorileri ayrı ayrı değerlendirilir; her iki mesafede de sıralamada yer alan en hızlı ilk 3 takım ödül almaya hak kazanır.",
          },
        ],
      },
    ],
  },
};
