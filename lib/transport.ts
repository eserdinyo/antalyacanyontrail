export type TransportSection = {
  id: string;
  title: string;
  body: string[];
};

export type TransportNote = {
  title: string;
  items: string[];
};

export type TransportContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  sections: TransportSection[];
  note: TransportNote;
};

const tr: TransportContent = {
  metaTitle: "Ulaşım",
  metaDescription:
    "Antalya Canyon Ultra yarış alanına havalimanından, şehir merkezinden, servisle ve özel araçla ulaşım bilgileri.",
  eyebrow: "ULAŞIM & TRANSFER",
  title: "Ulaşım",
  lede:
    "Antalya Canyon Ultra, şehir merkezine yakın konumu sayesinde hem yurt içinden hem de yurt dışından gelecek sporcular için kolay ulaşılabilir bir lokasyonda düzenlenmektedir.",
  sections: [
    {
      id: "airport",
      title: "Antalya Havalimanı'ndan Ulaşım",
      body: [
        "Havalimanından şehir merkezine düzenli olarak hizmet veren HAVAŞ ve toplu taşıma (otobüs, tramvay) ile ulaşım sağlanabilmektedir. Şehir merkezinden ise yarış alanına servis veya özel araçla kolaylıkla ulaşabilirsiniz.",
      ],
    },
    {
      id: "city-center",
      title: "Antalya Şehir Merkezinden Ulaşım",
      body: [
        "Yarış merkezi, Antalya şehir merkezine yaklaşık 20 km (20-25 dakika) mesafededir.",
        "Yarış tarihleri boyunca, şehir merkezinden yarış alanına düzenli servis (shuttle) hizmeti sunulacaktır. Servis güzergâhları ve saatleri yarış tarihine yaklaştıkça duyurulacaktır.",
      ],
    },
    {
      id: "group-transfers",
      title: "Grup Transferleri",
      body: [
        "Şehir dışından veya yurt dışından toplu olarak gelecek kulüp ve sporcu grupları için, katılımcı sayısına bağlı olarak organizasyon tarafından ulaşım desteği sağlanabilecektir. Bu konuda bizimle önceden iletişime geçmeniz yeterlidir.",
      ],
    },
    {
      id: "private-vehicle",
      title: "Özel Araç ile Ulaşım",
      body: [
        "Yarış alanına özel araçla ulaşım oldukça kolaydır. Yarış merkezinin hemen yanında sporcular ve misafirler için ayrılmış geniş ve ücretsiz otopark alanları bulunmaktadır.",
        "Otopark, hem otomobil hem de minibüsler için yeterli kapasiteye sahiptir. Görevli ekipler araç yönlendirmesi konusunda destek sağlayacaktır.",
      ],
    },
    {
      id: "transfer-service",
      title: "Transfer Hizmeti",
      body: [
        "Şehir dışından ve yurt dışından gelecek sporcular için transfer seçenekleri üzerinde çalışmalarımız devam etmektedir. Transfer hizmetine ilişkin detaylar ve rezervasyon bilgileri yarış tarihine yaklaştıkça paylaşılacaktır.",
      ],
    },
    {
      id: "navigation",
      title: "Navigasyon",
      body: [
        "Yarış merkezi konumu, Google Maps ve diğer navigasyon uygulamaları üzerinden kolayca bulunabilecektir. Konum bilgisi ve ulaşım detayları, resmî internet sitemiz ve sosyal medya hesaplarımız üzerinden yarış tarihine yaklaştıkça duyurulacaktır.",
      ],
    },
  ],
  note: {
    title: "Önemli Bilgilendirme",
    items: [
      "Otopark ile start/finish alanı arasındaki mesafe oldukça kısa olup yürüyerek kolayca ulaşılabilmektedir.",
      "Karavan ve camper araçlarla gelecek katılımcılar için de uygun park alanları bulunmaktadır. Detaylı bilgiler yarış tarihine yaklaştıkça duyurulacaktır.",
    ],
  },
};

const en: TransportContent = {
  metaTitle: "Transportation",
  metaDescription:
    "How to reach the Antalya Canyon Ultra race area — from the airport, from the city centre, by shuttle and by private vehicle.",
  eyebrow: "TRANSPORT & TRANSFERS",
  title: "Transportation",
  lede:
    "Antalya Canyon Ultra is held close to the city centre, in a location that is easy to reach for runners travelling from within Türkiye and from abroad.",
  sections: [
    {
      id: "airport",
      title: "From Antalya Airport",
      body: [
        "HAVAŞ shuttles and public transport (bus and tram) run regularly between the airport and the city centre. From the city centre you can reach the race area easily by shuttle or by private vehicle.",
      ],
    },
    {
      id: "city-center",
      title: "From Antalya City Centre",
      body: [
        "The race centre is roughly 20 km from central Antalya — a 20-25 minute drive.",
        "A regular shuttle service will run between the city centre and the race area throughout the race weekend. Routes and departure times will be announced closer to the race.",
      ],
    },
    {
      id: "group-transfers",
      title: "Group Transfers",
      body: [
        "For clubs and groups of runners travelling together from other cities or from abroad, the organisation may be able to arrange transport support depending on the number of participants. Just get in touch with us in advance.",
      ],
    },
    {
      id: "private-vehicle",
      title: "Arriving by Private Vehicle",
      body: [
        "Reaching the race area by private vehicle is straightforward. Large free parking areas are reserved for runners and guests right next to the race centre.",
        "The car park has ample capacity for both cars and minibuses. Marshals will be on hand to direct vehicles.",
      ],
    },
    {
      id: "transfer-service",
      title: "Transfer Service",
      body: [
        "We are still working on transfer options for runners travelling from other cities and from abroad. Details and booking information will be shared closer to the race.",
      ],
    },
    {
      id: "navigation",
      title: "Navigation",
      body: [
        "The race centre will be easy to find on Google Maps and other navigation apps. Location details and travel information will be announced on our official website and social media channels closer to the race.",
      ],
    },
  ],
  note: {
    title: "Important Information",
    items: [
      "The walk between the car park and the start/finish area is short and easy on foot.",
      "Suitable parking areas are also available for caravans and campers. Full details will follow closer to the race.",
    ],
  },
};

export function getTransport(locale: string): TransportContent {
  return locale === "tr" ? tr : en;
}
