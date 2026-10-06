export type ProgramItem =
  | {
      time: string;
      title: string;
      races?: string;
      start?: false;
      /* links to the race-area location on Google Maps */
      location?: true;
    }
  | { time: string; races: string; start: true };

export type ProgramCutoff = {
  race: string;
  time: string;
};

export type ProgramDay = {
  id: string;
  day: string;
  shortDate: string;
  theme: string;
  items: ProgramItem[];
  cutoffs: ProgramCutoff[];
};

export type EventProgramContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  dateRange: string;
  daysLabel: string;
  start: string;
  cutoffs: string;
  location: string;
  days: ProgramDay[];
};

const tr: EventProgramContent = {
  metaTitle: "Etkinlik Programı",
  metaDescription:
    "Antalya Canyon Ultra 13-15 Kasım 2026 etkinlik programı, start saatleri, cut-off zamanları ve festival akışı.",
  title: "Etkinlik Programı",
  dateRange: "13–15 Kasım 2026",
  daysLabel: "Program günleri",
  start: "Start",
  cutoffs: "Cut-off saatleri",
  location: "Konum",
  days: [
    {
      id: "friday",
      day: "Cuma",
      shortDate: "13 Kas",
      theme: "Expo ve Kit Dağıtımı",
      items: [
        { time: "14.00–20.00", title: "Expo alanı", location: true },
        {
          time: "14.00–20.00",
          title: "Kit dağıtımı & zorunlu malzeme kontrolü",
        },
        { time: "18.00", title: "Teknik toplantı", races: "70K" },
        { time: "18.30", title: "Teknik toplantı", races: "45K" },
        { time: "19.00", title: "Teknik toplantı", races: "36K · 22K" },
        { time: "19.30", title: "Bilgilendirme", races: "13.5K · 7K" },
      ],
      cutoffs: [],
    },
    {
      id: "saturday",
      day: "Cumartesi",
      shortDate: "14 Kas",
      theme: "Ultra Günü",
      items: [
        {
          time: "06.00–07.15",
          title: "Kit dağıtımı",
          races: "70K · 45K · 36K · 22K",
        },
        { time: "06.00–07.20", title: "Drop Bag teslimi" },
        { time: "07.30", title: "Start seremonisi" },
        { time: "08.00", races: "70K · 45K · 36K · 22K", start: true },
        {
          time: "10.00–20.00",
          title: "Expo & kit dağıtımı",
          races: "13.5K · 7K · Çocuk Koşusu",
        },
      ],
      cutoffs: [
        { race: "22K", time: "14.00" },
        { race: "36K", time: "17.00" },
        { race: "45K", time: "20.00" },
        { race: "70K", time: "23.45" },
      ],
    },
    {
      id: "sunday",
      day: "Pazar",
      shortDate: "15 Kas",
      theme: "Community Günü",
      items: [
        { time: "06.00–07.15", title: "Kit dağıtımı", races: "13.5K · 7K" },
        { time: "07.35", title: "Toplu ısınma" },
        { time: "08.00", races: "13.5K · 7K", start: true },
        { time: "09.00–10.00", title: "Çocuk koşusu kit dağıtımı" },
        { time: "10.45", races: "Çocuk Koşusu", start: true },
        { time: "11.00", title: "Ödül töreni" },
        { time: "12.00", title: "Festival kapanışı" },
      ],
      cutoffs: [
        { race: "7K", time: "10.00" },
        { race: "13.5K", time: "11.00" },
      ],
    },
  ],
};

const en: EventProgramContent = {
  metaTitle: "Event Program",
  metaDescription:
    "Antalya Canyon Ultra November 13-15, 2026 event schedule, start times, cut-offs, and festival flow.",
  title: "Event Program",
  dateRange: "November 13–15, 2026",
  daysLabel: "Program days",
  start: "Start",
  cutoffs: "Cut-off times",
  location: "Location",
  days: [
    {
      id: "friday",
      day: "Friday",
      shortDate: "Nov 13",
      theme: "Expo and Kit Pickup",
      items: [
        { time: "14:00–20:00", title: "Expo area", location: true },
        { time: "14:00–20:00", title: "Kit pickup & mandatory gear check" },
        { time: "18:00", title: "Technical briefing", races: "70K" },
        { time: "18:30", title: "Technical briefing", races: "45K" },
        { time: "19:00", title: "Technical briefing", races: "36K · 22K" },
        { time: "19:30", title: "Briefing", races: "13.5K · 7K" },
      ],
      cutoffs: [],
    },
    {
      id: "saturday",
      day: "Saturday",
      shortDate: "Nov 14",
      theme: "Ultra Day",
      items: [
        {
          time: "06:00–07:15",
          title: "Kit pickup",
          races: "70K · 45K · 36K · 22K",
        },
        { time: "06:00–07:20", title: "Drop bag handover" },
        { time: "07:30", title: "Start ceremony" },
        { time: "08:00", races: "70K · 45K · 36K · 22K", start: true },
        {
          time: "10:00–20:00",
          title: "Expo & kit pickup",
          races: "13.5K · 7K · Kids Run",
        },
      ],
      cutoffs: [
        { race: "22K", time: "14:00" },
        { race: "36K", time: "17:00" },
        { race: "45K", time: "20:00" },
        { race: "70K", time: "23:45" },
      ],
    },
    {
      id: "sunday",
      day: "Sunday",
      shortDate: "Nov 15",
      theme: "Community Day",
      items: [
        { time: "06:00–07:15", title: "Kit pickup", races: "13.5K · 7K" },
        { time: "07:35", title: "Group warm-up" },
        { time: "08:00", races: "13.5K · 7K", start: true },
        { time: "09:00–10:00", title: "Kids run kit pickup" },
        { time: "10:45", races: "Kids Run", start: true },
        { time: "11:00", title: "Awards ceremony" },
        { time: "12:00", title: "Festival close" },
      ],
      cutoffs: [
        { race: "7K", time: "10:00" },
        { race: "13.5K", time: "11:00" },
      ],
    },
  ],
};

export function getEventProgram(locale: string): EventProgramContent {
  return locale === "tr" ? tr : en;
}
