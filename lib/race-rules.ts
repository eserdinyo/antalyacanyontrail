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
        text: "Antalya Canyon Ultra; Antalya’nın eşsiz doğal güzellikleri, Likya patikaları, Güver Kanyonu, Güver Uçurumu, Güllük Dağı Milli Parkı, Cennet Vadisi, Neapolis Antik Kenti, Doyran çevresi ve Toros Dağları’nın sonsuz orman parkurlarında gerçekleştirilen uluslararası bir patika koşusu organizasyonudur.",
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
          "Yarışma, 7K parkuru hariç, 18 yaş ve üzerindeki tüm katılımcılara açıktır. 7K parkuru ise kendi içinde 12-17 yaş grubu ve 18+ yaş grubu olmak üzere iki ayrı kategori olarak değerlendirilecek ve bu gruplar için ayrı kürsü törenleri icra edilecektir.",
          "7K parkurunda 12-17 yaşındaki sporcular veli izin dilekçesi ile yarışabilir.",
          "22K, 36K, 45K ve 70K parkurlarında yarışacak sporcuların; son 6 ay içerisinde alınmış sağlık raporuna veya Atletizm, Triatlon, Dağcılık, Oryantiring ya da Bisiklet Federasyonlarından alınmış geçerli (vize süresi dolmamış) bir sporcu lisansına sahip olmaları zorunludur. (7K ve 13K parkurları için sağlık raporu veya lisans zorunluluğu bulunmamaktadır.)",
          "Organizasyon gerekli gördüğü durumlarda sağlık raporu talep etme hakkına sahiptir.",
          "Katılımcılar kayıt yaptırarak yarışın fiziksel ve mental risklerini kabul etmiş sayılır.",
        ],
      },
    ],
  },
  {
    id: "kayit-iade-devir-kosullari",
    title: "2. KAYIT, İADE VE DEVİR KOŞULLARI",
    content: [
      {
        type: "paragraph",
        text: "Organizasyon kapsamında koşulacak 6 farklı parkur için kayıt dönemlerine göre kademeli fiyat politikası uygulanacaktır. Online kayıtlar 20 Temmuz 2026 tarihinde (22K Forest Trail için 28 Ağustos 2026) başlayacak ve 25 Ekim 2026 günü saat 23.59 itibarıyla (veya parkur kontenjanlarının dolması durumunda daha erken) kapatılacaktır.",
      },
      {
        type: "paragraph",
        text: "KAYIT ÜCRETİ:",
      },
      {
        type: "list",
        items: [
          "7K My Pace Run: Erken Kayıt (20 Temmuz - 31 Temmuz): 1.650 ₺ | Normal Kayıt (1 Ağustos - 24 Eylül): 2.000 ₺ | Geç Kayıt (25 Eylül - 25 Ekim): 2.250 ₺",
          "13K Güver Cliff Trail: Erken Kayıt (20 Temmuz - 31 Temmuz): 2.250 ₺ | Normal Kayıt (1 Ağustos - 24 Eylül): 2.750 ₺ | Geç Kayıt (25 Eylül - 25 Ekim): 3.000 ₺",
          "22K Forest Trail: Normal Kayıt (28 Ağustos - 25 Ekim): 3.550 ₺",
          "36K Alageyik Trail: Erken Kayıt (20 Temmuz - 31 Temmuz): 3.150 ₺ | Normal Kayıt (1 Ağustos - 24 Eylül): 3.650 ₺ | Geç Kayıt (25 Eylül - 25 Ekim): 4.150 ₺",
          "45K Antalya Goat Ultra: Erken Kayıt (20 Temmuz - 31 Temmuz): 3.750 ₺ | Normal Kayıt (1 Ağustos - 24 Eylül): 4.250 ₺ | Geç Kayıt (25 Eylül - 25 Ekim): 4.850 ₺",
          "70K Antalya Termessos Ultra: Erken Kayıt (20 Temmuz - 31 Temmuz): 4.500 ₺ | Normal Kayıt (1 Ağustos - 24 Eylül): 5.000 ₺ | Geç Kayıt (25 Eylül - 25 Ekim): 5.750 ₺",
        ],
      },
      {
        type: "paragraph",
        text: "A. Standart Kayıt Paketleri İptal ve İade Koşulları:",
      },
      {
        type: "list",
        items: [
          "Standart kayıt paketi tercih eden sporcuların keyfi iptal taleplerinde tam ücret iadesi yapılmaz.",
          "Tüketici hukuku ve sporcu hakları dengesi gözetilerek; resmi olarak ilan edilen son kısmi iptal tarihi olan 1 Ekim 2026 günü saat 23.59’a kadar organizasyona yazılı (e-posta) yapılacak başvurularda, banka ve sistem altyapı işletim kesintileri düşüldükten sonra net kayıt ücretinin %30'u oranında kısmi iade hakkı tanınır.",
          "1 Ekim 2026 tarihinden sonra yapılacak standart paket iptallerinde kesinlikle ücret iadesi yapılmayacaktır.",
        ],
      },
      {
        type: "paragraph",
        text: "B. İade Edilebilir Kayıt Paketi (Kayıt Sigortası) Koşulları:",
      },
      {
        type: "list",
        items: [
          "Sporcular, ilk kayıt esnasında isteğe bağlı bir ek seçenek olarak sunulan ve asıl parkur ücretinin %15'i oranında ek bedeli olan \"Kayıt Sigortası\" paketini satın alabilirler.",
          "Kayıt Sigortası satın alan sporcular, 1 Ekim 2026 tarihine kadar hiçbir belge veya gerekçe göstermeksizin kayıtlarını iptal edebilir ve ödedikleri asıl kayıt bedelinin %100'ünü kesintisiz olarak geri alabilirler (Sigorta bedeli iade edilmez).",
          "Kayıt Sigortası bulunan sporcular, 1 Ekim 2026 ile 10 Kasım 2026 tarihleri arasında sakatlık durumlarında; tam teşekküllü hastanelerden alınmış resmi bir sağlık/heyet raporu ibraz etmek şartıyla asıl kayıt ücretlerinin %100'ünü yine iade alabilirler.",
        ],
      },
      {
        type: "paragraph",
        text: "C. %50 Kesintili Kayıt Devir ve Sporcu Değişikliği Politikası:",
      },
      {
        type: "list",
        items: [
          "Yarışma start tarihinden önce gelen 13 Ekim 2026 günü saat 23.59'a kadar organizasyon komitesine yazılı (e-posta yoluyla) başvuran sporcular, mevcut kayıt haklarını istedikleri başka bir sporcuya devredebilirler.",
          "Kayıt devir işlemlerinde, devrin yapıldığı tarihteki güncel dönem fiyatı üzerinden %50 oranında bir devir/hizmet kesintisi uygulanır. Devralan sporcu, ilgili parkurun tüm katılım şartlarını (sağlık raporu, lisans, zorunlu malzemeler vb.) taşımak ve ibraz etmekle yükümlüdür.",
          "13 Ekim 2026 tarihinden sonra operasyonel süreçlerin tamamlanması nedeniyle hiçbir şekilde devir ve isim değişikliği işlemi yapılmayacaktır.",
        ],
      },
      {
        type: "paragraph",
        text: "⚠️ ÖNEMLİ HUKUKİ UYARI (Başkasının Adına Yarışma Yasağı): Organizasyon komitesinin bilgisi ve resmi onayı dışında göğüs numarasını / çipini bir başkasına devretmek kesinlikle yasaktır. Tespiti halinde her iki sporcu da doğrudan diskalifiye edilir, yardımlardan mahrum bırakılır ve gelecekteki yarışlara kayıtları engellenir. Resmi kayıt dışı yarışan kişinin uğrayacağı olası sağlık sorunları, sakatlıklar ve kazalarda tüm hukuki sorumluluk şahıslara aittir; organizasyon sorumlu tutulamaz.",
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
          "Kit teslimi sırasında: kimlik/pasaport, zorunlu malzemeler, sağlık/lisans belgeleri kontrol edilir. (Sağlık raporu veya lisans yükümlülüğü sadece 22K, 36K, 45K ve 70K sporcuları için geçerlidir.)",
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
          "Parkurdan çıkılması veya 200m den fazla kestirme yapılması diskalifiye sebebidir.",
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
        text: "Organizasyon komitesi, sporcuların güvenliği için gerekli tüm önlemleri en üst düzeyde alacaktır. Ancak patika koşuları (trail running), doğası gereği belirli riskler barındırmaktadır. Yarış boyunca kendi kendinize yetebilmeniz ve güvenliğiniz için aşağıdaki zorunlu malzemeleri yanınızda bulundurmanız gerekmektedir.",
      },
      {
        type: "paragraph",
        text: "Zorunlu malzeme kontrolleri; yarış öncesinde (kit dağıtımında), kontrol noktalarında (CP) veya finiş çizgisinde yapılabilir. Eksik malzeme tespiti durumunda zaman cezası veya diskalifiye kuralları uygulanır.",
      },
      {
        type: "paragraph",
        text: "Zorunlu Malzeme Listesi:",
      },
      {
        type: "list",
        items: [
          "Cep Telefonu: Bataryası tam dolu, yarış öncesi organizasyon tarafından verilecek acil durum numaraları kaydedilmiş ve hat numarası gizlenmemiş olmalıdır. (22K, 36K, 45K, 70K)",
          "Su Taşıma Sistemi: En az 1 litre kapasiteli su torbası (hydration bladder) veya soft flask/matara (22K, 36K, 45K, 70K).",
          "Bardak veya Soft Flask: Çevre bilinci nedeniyle istasyonlarda plastik bardak bulundurulmayacaktır. Sporcuların sıcak/soğuk içecekler için kendi bardaklarını taşımaları zorunludur. (Tüm Parkurlar)",
          "Yağmurluk / Rüzgarlık: Dağdaki ani hava değişimlerine karşı, kapüşonlu ve su/rüzgar geçirmez özellikte olmalıdır. (36K, 45K, 70K)",
          "Acil Durum Battaniyesi (Termal Battaniye): En az 1.40m x 2m ölçülerinde olmalıdır. (36K, 45K, 70K)",
          "Düdük: Kolayca ulaşılabilecek bir yerde (tercihen çanta askısında) olmalıdır. (22K, 36K, 45K, 70K)",
          "Kafa Lambası: Yedek pilleri veya şarj kablosu (batarya gerekir) ile birlikte. (70K Parkuru için)",
          "İlk Yardım Seti: Elastik bandaj, yara bandı vs bulunmalıdır. (22K, 36K, 45K, 70K)",
        ],
      },
      {
        type: "paragraph",
        text: "Hava şartlarının ani değişimine bağlı olarak, organizasyon komitesi yarış startından önceki son dakikaya kadar zorunlu malzeme listesinde ekleme veya çıkarma yapma hakkını saklı tutar.",
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
          "CP alanları dışında yardım almak ceza veya diskalifiye sebebidir.",
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
          "Organizasyon her parkur için azami (cut-off) bitirme süresi belirler.",
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
          "Organizasyon komitesine bilgi vermeksizin parkuru terk eden sporcular, bu durum nedeniyle oluşabilecek tüm arama-kurtarma masraflarından şahsen sorumludur.",
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
          "Parkuru 200m den fazla kestirmek",
          "Taşıt kullanmak",
          "Başka sporcu adına yarışmak",
          "Kontrol noktalarından (CP) geçmemek",
          "Zorunlu malzemelerin eksik olması (yapılan kontrollerde)",
          "Doğaya çöp atmak veya zarar vermek",
          "Görevli personele veya diğer sporculara saygısız/sportmenlik dışı davranmak",
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
        text: "Antalya Canyon Ultra bir doğa organizasyonudur. Tüm katılımcılar; doğaya, yaban hayatına, tarihi dokuya ve yerel halkın yaşam alanlarına saygılı davranmakla yükümlüdür. Parkura çöp bırakılması kesinlikle yasaktır. “Leave No Trace” prensibi organizasyonun temel değerlerinden biridir. Kanyonlar ve patikalar yarış alanı değil, korunması gereken doğal mirastır.",
      },
    ],
  },
  {
    id: "insana-saygi",
    title: "11. İNSANA SAYGI",
    content: [
      {
        type: "paragraph",
        text: "Trail running dayanışma kültürüdür. Sporcular: diğer yarışmacılara, gönüllülere, sağlık ekiplerine, yerel halka saygılı davranmalıdır. Tehlike yaşayan bir sporcuya yardım etmek sportif sorumluluktur.",
      },
    ],
  },
  {
    id: "organizasyonun-yetkileri",
    title: "12. ORGANİZASYONUN YETKİLERİ",
    content: [
      {
        type: "paragraph",
        text: "Organizasyon; parkuru değiştirme, start saatlerini değiştirme, yarışı durdurma, kötü hava koşullarında parkuru iptal etme, güvenlik nedeniyle sporcuları yarıştan çıkarma haklarını saklı tutar.",
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
          "Dereceye giren sporculara sponsor ödülleri ve kürsü kupası verilecektir.",
          "Tüm finisher sporculara bitiren madalyası verilir.",
          "7K ve 13K parkurlarında ayrıca Takım Kategorisi düzenlenir: en az 5 sporcudan (18+) oluşan takımlar, en hızlı 3 sporcunun toplam süresine göre sıralanır ve her iki mesafede ilk 3 takım ödül alır. Takım sporcuları aynı yarışın bireysel sıralamasına dahil edilmez. Detaylar ilgili parkur sayfalarındadır.",
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
        text: "Yarış boyunca çekilen tüm fotoğraf ve videolar; organizasyon ve sponsorlar tarafından tanıtım amacıyla kullanılabilir. Kayıt olan tüm sporcular bu kullanımı kabul etmiş sayılır.",
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
