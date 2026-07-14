export type RuleContent =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type RuleSection = {
  id: string;
  title: string;
  content: RuleContent[];
};

export const RACE_RULES: RuleSection[] = [
  {
    id: "genel-bilgiler",
    title: "GENEL BİLGİLER",
    content: [
      {
        type: "paragraph",
        text: "Antalya Canyon Ultra; Antalya’nın eşsiz doğal güzellikleri, Likya patikaları, Güver Kanyonu, Kapuz Kanyonu, Doyran çevresi ve Toros Dağları’nın teknik parkurlarında gerçekleştirilen uluslararası bir patika koşusu organizasyonudur.",
      },
      {
        type: "paragraph",
        text: "Organizasyon; sporcuların doğayla bütünleşmesini, güvenli yarış ortamında yarışmasını ve bölgenin doğal/kültürel mirasına saygılı şekilde yarış deneyimi yaşamasını amaçlamaktadır.",
      },
      {
        type: "paragraph",
        text: "Yarış, ITRA ve uluslararası trail running kuralları doğrultusunda organize edilir.",
      },
    ],
  },
  {
    id: "katilim-sartlari",
    title: "1. KATILIM ŞARTLARI",
    content: [
      {
        type: "list",
        items: [
          "Yarış, 18 yaş ve üzerindeki tüm katılımcılara açıktır (7k yarışına 12-17 yaş grubu ve 18+ yaş grubu kürsü olarak icra edilecektir.",
          "7K parkurunda 12-17 yaşındaki sporcular veli izin dilekçesi ile yarışabilir.",
          "30K, 45K, 65K ve 85K parkurlarında yarışacak sporcuların: son 6 ay içerisinde alınmış sağlık raporuna veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet federasyonlarından alınmış geçerli sporcu lisansına sahip olmaları gerekmektedir.",
          "Organizasyon gerekli gördüğü durumlarda sağlık raporu talep etme hakkına sahiptir.",
          "Katılımcılar kayıt yaptırarak yarışın fiziksel ve mental risklerini kabul etmiş sayılır.",
        ],
      },
    ],
  },
  {
    id: "kayit-ve-iade-kosullari",
    title: "2. KAYIT ve İADE KOŞULLARI",
    content: [
      {
        type: "list",
        items: [
          "Kayıtlar yalnızca resmi internet sitesi üzerinden yapılacaktır.",
          "Kayıtlar kişiye özeldir. Başka bir sporcuya devredilemez.",
          "Başka bir kişi adına yarışmak diskalifiye sebebidir.",
          "Organizasyon gerekli gördüğü durumlarda kayıtları kapatma, kontenjan değiştirme veya başvuruları reddetme hakkına sahiptir.",
          "Belirtilen tarihten sonra yapılan iptal taleplerinde ücret iadesi yapılmaz.",
          "İade edilebilir kayıt paketi satın alan sporcular için organizasyon tarafından ilan edilen tarihe kadar %100 iade uygulanabilir.",
        ],
      },
    ],
  },
  {
    id: "yaris-kiti-teslimi",
    title: "3. YARIŞ KİTİ TESLİMİ",
    content: [
      {
        type: "list",
        items: [
          "Yarış kitleri yalnızca kayıtlı sporculara teslim edilir.",
          "Kit teslimi sırasında kimlik/pasaport, zorunlu malzemeler ve sağlık/lisans belgeleri kontrol edilir.",
          "Zorunlu malzemelerini ibraz etmeyen sporcular yarışa alınmayabilir.",
          "Kit teslim saatleri organizasyon programında ayrıca duyurulur.",
        ],
      },
    ],
  },
  {
    id: "parkur-ve-isaretleme",
    title: "4. PARKUR ve İŞARETLEME",
    content: [
      {
        type: "list",
        items: [
          "Tüm parkurlar organizasyon tarafından işaretlenecektir.",
          "İşaretlemeler reflektif şerit, yön oku, boya ve yön tabelaları ile yapılabilir.",
          "Teknik arazi yapısı nedeniyle sporcular GPX parkur dosyasını saat veya telefonlarına yüklemekle yükümlüdür.",
          "Parkurdan çıkılması veya kestirme yapılması diskalifiye sebebidir.",
          "İşaretleri takip etmek tamamen sporcuların sorumluluğundadır.",
        ],
      },
    ],
  },
  {
    id: "guvenlik-ve-zorunlu-malzemeler",
    title: "5. GÜVENLİK ve ZORUNLU MALZEMELER",
    content: [
      {
        type: "paragraph",
        text: "Organizasyon sporcuların güvenliği için gerekli tüm önlemleri almaya çalışacaktır. Ancak trail running doğası gereği risk içermektedir.",
      },
      {
        type: "paragraph",
        text: "Tüm sporcular aşağıdaki zorunlu malzemeleri taşımak zorundadır. Zorunlu ekipman listesi parkura göre farklılık göstermektedir.",
      },
      {
        type: "list",
        items: [
          "Su taşıma kapasitesi",
          "Yağmurluk",
          "Acil durum battaniyesi ve ilk yardım seti",
          "Telefon",
          "Düdük",
          "Kafa lambası (ilgili parkurlarda)",
          "Bardak veya soft flask",
          "GPX cihazı / saat önerilir",
        ],
      },
      {
        type: "paragraph",
        text: "Organizasyon hava şartlarına göre zorunlu malzeme listesinde değişiklik yapabilir.",
      },
      {
        type: "paragraph",
        text: "Zorunlu malzeme kontrolleri yarış öncesinde, CP noktalarında veya finişte yapılabilir.",
      },
    ],
  },
  {
    id: "destek-noktalari",
    title: "6. DESTEK NOKTALARI (CP)",
    content: [
      {
        type: "list",
        items: [
          "Parkurlar üzerinde organizasyon tarafından belirlenen CP noktalarında yiyecek ve içecek desteği sağlanacaktır.",
          "Destek yalnızca organizasyonun izin verdiği alanlarda alınabilir.",
          "CP dışından yardım almak ceza veya diskalifiye sebebidir.",
          "Her sporcu kendi beslenme ve sıvı planından sorumludur.",
        ],
      },
    ],
  },
  {
    id: "zaman-bariyerleri",
    title: "7. ZAMAN BARİYERLERİ (CUT-OFF)",
    content: [
      {
        type: "list",
        items: [
          "Organizasyon her parkur için maksimum bitirme süresi belirler.",
          "Kontrol noktalarındaki cut-off süreleri resmi yarış kitapçığında ilan edilir.",
          "Belirlenen süre dışında kontrol noktasına ulaşan veya ayrılan sporcular yarış dışı bırakılır.",
        ],
      },
    ],
  },
  {
    id: "yarisi-birakma",
    title: "8. YARIŞI BIRAKMA",
    content: [
      {
        type: "list",
        items: [
          "Yarışı bırakan sporcu en yakın CP noktasına bilgi vermek zorundadır.",
          "Organizasyona bilgi vermeden parkuru terk eden sporculardan doğacak arama kurtarma masrafları sporcuya ait olabilir.",
          "Sağlık personeli gerekli gördüğü durumda sporcunun yarışını sonlandırabilir.",
        ],
      },
    ],
  },
  {
    id: "diskalifikasyon",
    title: "9. DİSKALİFİKASYON",
    content: [
      {
        type: "paragraph",
        text: "Aşağıdaki durumlar diskalifiye sebebidir:",
      },
      {
        type: "list",
        items: [
          "Parkur kestirmek",
          "Taşıt kullanmak",
          "Başka sporcu adına yarışmak",
          "Zorunlu malzeme taşımamak",
          "Zorunlu malzeme kontrolünü reddetmek",
          "Doğaya çöp atmak",
          "Yardıma ihtiyacı olan sporcuya yardım etmemek",
          "Çalışan, görevli ve gönüllülere saygısızlık yapmak",
          "Göğüs numarasını görünür taşımamak",
          "Doping veya yasaklı madde kullanımı",
          "Trafik kurallarını ihlal ederek tehlike oluşturmak",
        ],
      },
    ],
  },
  {
    id: "dogaya-saygi",
    title: "10. DOĞAYA SAYGI",
    content: [
      {
        type: "paragraph",
        text: "Antalya Canyon Ultra bir doğa organizasyonudur.",
      },
      {
        type: "paragraph",
        text: "Tüm katılımcılar: doğaya, canlı yaşamına, tarihi alanlara, yerel halka saygılı davranmak zorundadır.",
      },
      {
        type: "paragraph",
        text: "Parkura çöp bırakılması kesinlikle yasaktır.",
      },
      {
        type: "paragraph",
        text: "“Leave No Trace” prensibi organizasyonun temel değerlerinden biridir.",
      },
      {
        type: "paragraph",
        text: "Kanyonlar ve patikalar yarış alanı değil, korunması gereken doğal mirastır.",
      },
    ],
  },
  {
    id: "insana-saygi",
    title: "11. İNSANA SAYGI",
    content: [
      {
        type: "paragraph",
        text: "Trail running dayanışma kültürüdür.",
      },
      {
        type: "paragraph",
        text: "Sporcular; diğer yarışmacılara, gönüllülere, sağlık ekiplerine ve yerel halka saygılı davranmalıdır.",
      },
      {
        type: "paragraph",
        text: "Tehlike yaşayan bir sporcuya yardım etmek sportif sorumluluktur.",
      },
    ],
  },
  {
    id: "organizasyonun-yetkileri",
    title: "12. ORGANİZASYONUN YETKİLERİ",
    content: [
      {
        type: "paragraph",
        text: "Organizasyon aşağıdaki haklarını saklı tutar:",
      },
      {
        type: "list",
        items: [
          "Parkuru değiştirme",
          "Start saatlerini değiştirme",
          "Yarışı durdurma",
          "Kötü hava koşullarında parkuru iptal etme",
          "Güvenlik nedeniyle sporcuları yarıştan çıkarma",
        ],
      },
    ],
  },
  {
    id: "oduller",
    title: "13. ÖDÜLLER",
    content: [
      {
        type: "list",
        items: [
          "Genel klasman ve yaş kategorilerinde ödüllendirme yapılacaktır.",
          "Genel klasmanda dereceye giren sporcular yaş kategorisinde ayrıca ödül alamaz.",
          "Organizasyon maddi ödül vermeyebilir.",
          "Tüm finisher sporculara bitiren madalyası verilir.",
        ],
      },
    ],
  },
  {
    id: "gorsel-materyal-kullanimi",
    title: "14. GÖRSEL MATERYAL KULLANIMI",
    content: [
      {
        type: "paragraph",
        text: "Katılımcılar yarış boyunca çekilen fotoğraf ve videoların organizasyon ve sponsorlar tarafından tanıtım amacıyla kullanılmasını kabul etmiş sayılır.",
      },
    ],
  },
  {
    id: "feragatname",
    title: "15. FERAGATNAME",
    content: [
      {
        type: "paragraph",
        text: "Yarışa kayıt yaptıran tüm sporcular; yarışın doğasında bulunan riskleri kabul ettiklerini, sağlık durumlarının yarışmaya uygun olduğunu, organizasyonun oluşabilecek kişisel zarar ve kazalardan sorumlu tutulamayacağını kabul etmiş sayılırlar.",
      },
    ],
  },
];
