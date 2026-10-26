/* Official race hotel — Hotel SU, Antalya */
export const HOTEL = {
  name: "Hotel SU",
  phone: "+90 242 249 07 00",
  phoneHref: "tel:+902422490700",
  email: "satis@sunishotels.com",
  website: "hotelsu.com.tr",
  websiteUrl: "https://hotelsu.com.tr",
};

export type AccommodationRoom = {
  name: string;
  size: string;
  /* Nightly price per room — single, double, triple occupancy */
  prices: [string, string, string];
};

export type AccommodationContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  hotelLabel: string;
  rates: {
    title: string;
    roomType: string;
    occupancy: [string, string, string];
    rooms: AccommodationRoom[];
    note: string;
  };
  afterParty: {
    title: string;
    body: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    website: string;
    note: string;
  };
};

const tr: AccommodationContent = {
  metaTitle: "Konaklama",
  metaDescription:
    "Antalya Canyon Ultra resmî yarış oteli Hotel SU'da 2–20 Kasım 2026 tarihleri için oda ve kahvaltı fiyatları ile rezervasyon bilgileri.",
  eyebrow: "RESMÎ YARIŞ OTELİ",
  title: "Konaklama",
  lede:
    "Antalya Canyon Ultra deneyiminizi resmî yarış otelimiz Hotel SU'da konaklayarak tamamlayın. 2–20 Kasım 2026 tarihleri için geçerli oda ve kahvaltı fiyatları aşağıda yer almaktadır.",
  hotelLabel: "Resmî Yarış Oteli",
  rates: {
    title: "2–20 Kasım 2026 Konaklama Fiyatları",
    roomType: "Oda tipi",
    occupancy: ["Tek kişilik", "İki kişilik", "Üç kişilik"],
    rooms: [
      {
        name: "Deluxe Kara Manzaralı",
        size: "26 m²",
        prices: ["7.000 TL", "10.000 TL", "13.000 TL"],
      },
      {
        name: "Deluxe Deniz Manzaralı",
        size: "26 m²",
        prices: ["8.000 TL", "11.000 TL", "13.000 TL"],
      },
    ],
    note: "Fiyatlar oda başına gecelik olup kahvaltı dâhildir. Açık büfe akşam yemeği farkı kişi başı 1.500 TL'dir.",
  },
  afterParty: {
    title: "Yarış Sonrası Buluşma",
    body: "14 Kasım 2026 Cumartesi akşamı, yarışın heyecanını Hotel SU'nun havuz başında düzenlenecek After Party ile birlikte kutluyoruz.",
  },
  contact: {
    title: "Rezervasyon ve Bilgi",
    phone: "Telefon",
    email: "E-posta",
    website: "Web",
    note: "Rezervasyon sırasında Antalya Canyon Ultra için konaklayacağınızı belirtmenizi rica ederiz. Oda müsaitliği ve güncel fiyatlar için otelle iletişime geçebilirsiniz.",
  },
};

const en: AccommodationContent = {
  metaTitle: "Accommodation",
  metaDescription:
    "Room-and-breakfast rates for 2–20 November 2026 and booking details for Hotel SU, the official race hotel of Antalya Canyon Ultra.",
  eyebrow: "OFFICIAL RACE HOTEL",
  title: "Accommodation",
  lede:
    "Round off your Antalya Canyon Ultra experience by staying at Hotel SU, our official race hotel. Room-and-breakfast rates valid for 2–20 November 2026 are listed below.",
  hotelLabel: "Official Race Hotel",
  rates: {
    title: "Rates for 2–20 November 2026",
    roomType: "Room type",
    occupancy: ["Single", "Double", "Triple"],
    rooms: [
      {
        name: "Deluxe Land View",
        size: "26 m²",
        prices: ["7,000 TL", "10,000 TL", "13,000 TL"],
      },
      {
        name: "Deluxe Sea View",
        size: "26 m²",
        prices: ["8,000 TL", "11,000 TL", "13,000 TL"],
      },
    ],
    note: "Prices are per room per night, breakfast included. Open-buffet dinner is an extra 1,500 TL per person.",
  },
  afterParty: {
    title: "Post-Race Get-Together",
    body: "On the evening of Saturday 14 November 2026 we celebrate the race with an After Party by the pool at Hotel SU.",
  },
  contact: {
    title: "Booking & Information",
    phone: "Phone",
    email: "Email",
    website: "Web",
    note: "Please mention that you are staying for Antalya Canyon Ultra when you book. Contact the hotel for room availability and current rates.",
  },
};

export function getAccommodation(locale: string): AccommodationContent {
  return locale === "tr" ? tr : en;
}
