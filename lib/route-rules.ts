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
  ultra: {
    title: "ANTALYA CANYON ULTRA - 70K ANTALYA TERMESSOS ULTRA",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 70K Antalya Termessos Ultra, yaklaşık 70 km uzunluğunda ve 1900m+ tırmanış içeren, en üst seviye ultra maraton patika koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08:00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 15 saat 45 dakika (Zaman sınırı: 23:45) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "70K Antalya Termessos Ultra parkuruna katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 21 Haziran 2026 tarihinde başlayacak ve 18 Ekim 2026 günü saat 23:59 itibarıyla kapatılacaktır. Katılımcı sayısı 200 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) Kayıt Ücreti Tarifesi: Erken Kayıt (21 Haz - 15 Ağus): 5.000 ₺ | Normal Kayıt (16 Ağus - 20 Eyl): 5.750 ₺ | Geç Kayıt (21 Eyl - 18 Eki): 6.500 ₺",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23:59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler. 13 Ekim 2026 saat 23:59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
          },
        ],
      },
      {
        id: "kit-drop-bag",
        title: "4. Yarış Kiti Teslimi ve Drop Bag (Ara Nokta Destek Çantası)",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası, zaman ölçüm çipleri ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında sağlık raporu/lisans kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. 70K Antalya Termessos Ultra sporcuları için ara nokta destek çantası (Drop Bag) teslim etme hakkı bulunmaktadır. Drop bag çantaları 14 Kasım sabahı 06:00 - 07:20 saatleri arasında teslim alınacaktır.",
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
              "Su Taşıma Sistemi: En az 1.5 - 2 litre kapasiteli su torbası veya soft flask/matara.",
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
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, izin verilen kontrol noktaları (CP) dışında dışarıdan destek almak, zorunlu malzemeleri bulundurmamak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını bırakmaları halinde ek 1 saat zaman cezası uygulanır. Kayıtsız koşma veya başkasının göğüs numarasıyla yarışma durumlarında sporcular diskalifiye edilir.",
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
  marathon: {
    title: "ANTALYA CANYON ULTRA - 45K ANTALYA GOAT ULTRA",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 45K Antalya Goat Ultra, yaklaşık 45 km uzunluğunda ve 900m+ tırmanış içeren, ileri düzey bir ultra maraton patika koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08:00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 12 saat (Zaman sınırı: 20:00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "45K Antalya Goat Ultra parkuruna katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 21 Haziran 2026 tarihinde başlayacak ve 18 Ekim 2026 günü saat 23:59 itibarıyla kapatılacaktır. Katılımcı sayısı 300 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) Kayıt Ücreti Tarifesi: Erken Kayıt (21 Haz - 15 Ağus): 4.000 ₺ | Normal Kayıt (16 Ağus - 20 Eyl): 4.500 ₺ | Geç Kayıt (21 Eyl - 18 Eki): 5.000 ₺",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23:59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler. 13 Ekim 2026 saat 23:59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
          },
        ],
      },
      {
        id: "kit-drop-bag",
        title: "4. Yarış Kiti Teslimi ve Drop Bag (Ara Nokta Destek Çantası)",
        content: [
          {
            type: "paragraph",
            text: "Katılımcıların göğüs numarası, zaman ölçüm çipleri ve malzemelerini içeren koşu paketlerini ilan edilen resmi saatlerde 'Yarış Ofisi'nden teslim almaları gerekmektedir. Kit teslimi sırasında sağlık raporu/lisans kontrolü ve zorunlu malzeme kontrolleri eksiksiz yapılacaktır. 45K Antalya Goat Ultra sporcuları için ara nokta destek çantası (Drop Bag) teslim etme hakkı bulunmaktadır. Drop bag çantaları 14 Kasım sabahı 06:00 - 07:20 saatleri arasında teslim alınacaktır.",
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
              "Su Taşıma Sistemi: En az 1.5 litre kapasiteli su torbası veya soft flask/matara.",
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
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, izin verilen kontrol noktaları (CP) dışında dışarıdan destek almak, zorunlu malzemeleri bulundurmamak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını bırakmaları halinde ek 1 saat zaman cezası uygulanır. Kayıtsız koşma veya başkasının göğüs numarasıyla yarışma durumlarında sporcular diskalifiye edilir.",
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
  epic: {
    title: "ANTALYA CANYON ULTRA - 35K ALAGEYİK PARKURU",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 35K Alageyik Parkuru, yaklaşık 35 km uzunluğunda ve 670m+ tırmanış içeren bir ultra maraton patika koşusudur. Koşu, 14 Kasım 2026 tarihinde saat 08:00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 9 saat (Zaman sınırı: 17:00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
          },
        ],
      },
      {
        id: "katilim-sartlari",
        title: "2. Katılım Şartları",
        content: [
          {
            type: "paragraph",
            text: "35K Alageyik Parkuru'na katılacak tüm sporcuların; son 6 ay içerisinde alınmış geçerli bir sağlık raporuna (üzerinde 'Atletizm, Koşu veya Dağcılık branşlarında spor yapmasında sakınca yoktur' ibaresi olan) veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları ve bunu kit dağıtımı esnasında ibraz etmeleri zorunludur. Koşuya 18 yaş ve üzerindeki tüm katılımcılar katılabilir.",
          },
        ],
      },
      {
        id: "kayit-iptal-iade",
        title: "3. Kayıt, İptal ve İade Koşulları",
        content: [
          {
            type: "paragraph",
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 21 Haziran 2026 tarihinde başlayacak ve 18 Ekim 2026 günü saat 23:59 itibarıyla kapatılacaktır. Katılımcı sayısı 400 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) Kayıt Ücreti Tarifesi: Erken Kayıt (21 Haz - 15 Ağus): 3.250 ₺ | Normal Kayıt (16 Ağus - 20 Eyl): 3.750 ₺ | Geç Kayıt (21 Eyl - 18 Eki): 4.250 ₺",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23:59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler. 13 Ekim 2026 saat 23:59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
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
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, izin verilen alanlar dışında dışarıdan destek almak, zorunlu malzemeleri bulundurmamak doğrudan diskalifiye sebebidir. Batonlu başlayan koşucuların finişten önce batonlarını bırakmaları halinde ek 1 saat zaman cezası uygulanır. Kayıtsız koşma veya başkasının göğüs numarasıyla yarışma durumlarında sporcular diskalifiye edilir ve organizasyonun yasal sorumluluk sınırları dışında kalırlar.",
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
  short: {
    title: "ANTALYA CANYON ULTRA - 13K GÜVER CLIFF TRAIL",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 13K Güver Cliff Trail, yaklaşık 13.5 km uzunluğunda ve 105m+ tırmanış içeren bir patika koşusudur. Koşu, 15 Kasım 2026 tarihinde saat 08:00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 3 saat (Zaman sınırı: 11:00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
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
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 21 Haziran 2026 tarihinde başlayacak ve 18 Ekim 2026 günü saat 23:59 itibarıyla kapatılacaktır. Maksimum katılımcı sayısı 500 kişi ile sınırlandırılmıştır.",
          },
          {
            type: "paragraph",
            text: "b) Kayıt Ücreti Tarifesi: Erken Kayıt (21 Haz - 15 Ağus): 2.250 ₺, Normal Kayıt (16 Ağus - 20 Eyl): 2.750 ₺ | Geç Kayıt (21 Eyl - 18 Eki): 3.000 ₺",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Standart Kayıt Paketi kapsamında keyfi iptal taleplerinde tam ücret iadesi yapılmaz. 1 Ekim 2026 saat 23:59'a kadar yapılacak başvurularda net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. Kayıt esnasında %15 ek bedelle Kayıt Sigortası satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 iade alabilirler. 13 Ekim 2026 saat 23:59'a kadar %50 devir hizmet kesintisi ile başka bir sporcuya devir yapılabilir.",
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
            text: "Kontrol noktalarından geçmemek, 200 m den fazla kestirme yol kullanmak, izin verilen alanlar dışında dışarıdan destek almak. Batonlu başlayan koşucuların finişten önce batonlarını herhangi bir yere bırakmaları halinde ek 1 saat zaman cezası uygulanır.",
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
    ],
  },
  fun: {
    title: "ANTALYA CANYON ULTRA - 7K MY PACE RUN",
    subtitle: "Katılım Koşulları ve Yarışma Kuralları",
    sections: [
      {
        id: "genel-bilgi",
        title: "1. Genel Bilgi",
        content: [
          {
            type: "paragraph",
            text: "Antalya Canyon Ultra kapsamında koşulacak 7K My Pace Run, yaklaşık 7 km uzunluğunda ve 30m+ tırmanış içeren bir patika koşusudur. Koşu, 15 Kasım 2026 tarihinde saat 08:00'de start alanından başlar. Katılımcıların kısmi yeterlilik esasına göre, 2 saat (Zaman sınırı: 10:00) içerisinde parkuru tamamlamaları gereklidir. Kısmi yeterlilik, katılımcıların karşılaşabilecekleri doğa ve arazi koşullarında güvenli bir şekilde koşularına devam etmelerine olanak sağlayacak malzemeleri yanlarında taşımaları anlamına gelmektedir.",
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
            text: "a) Kayıt Şekli: Koşuya sadece kayıtlı sporcular katılabilir. Kayıtlar resmi internet sitesi üzerinden gerçekleştirilecektir. Online kayıtlar 21 Haziran 2026 tarihinde başlayacak ve 18 Ekim 2026 günü saat 23:59 itibarıyla kapatılacaktır. Maksimum katılımcı sayısı 500 kişi ile sınırlandırılmıştır. Yapılan her kayıt kişiye özeldir.",
          },
          {
            type: "paragraph",
            text: "b) 2026 Kayıt Ücreti Tarifesi: Erken Kayıt (21 Haz - 15 Ağus): 1.400 ₺ | Normal Kayıt (16 Ağus - 20 Eyl): 1.750 ₺ | Geç Kayıt (21 Eyl - 18 Eki): 2.000 ₺",
          },
          {
            type: "paragraph",
            text: "c) İptal, İade ve Devir Kuralları: Keyfi iptal taleplerinde tam ücret iadesi yapılmaz. Son kısmi iptal tarihi olan 1 Ekim 2026 saat 23:59'ya kadar yapılacak başvurularda, net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır. 1 Ekim 2026'dan sonra standart paket iadesi yapılmaz. İlk kayıt esnasında %15 ek bedelle 'Kayıt Sigortası' satın alan sporcular, 1 Ekim 2026'ya kadar gerekçesiz %100 kesintisiz iade alabilirler. 13 Ekim 2026 günü saat 23:59'a kadar %50 devir hizmet kesintisi uygulanarak başka bir sporcuya devir yapılabilir.",
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
            text: "Katılımcıların start saatinden en az 30 dakika önce başlangıç alanında hazır bulunmaları gerekmektedir. Start alanı saat 08:00'de toplu olarak başlar. Başlangıç alanında emanet çanta teslim bölgesi yer alacaktır. Katılımcılar teslim ettikleri çantalarını göğüs numaralarını göstermek şartıyla koşu sonunda geri alabilirler.",
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
            text: "Kontrol noktalarından geçmemek, 200m den fazla kestirme yol kullanmak, doğaya çöp atmak, sportmenlik dışı davranışlar sergilemek doğrudan diskalifiye sebebidir.",
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
    ],
  },
};
