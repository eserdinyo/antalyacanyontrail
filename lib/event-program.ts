export type ProgramCourse = {
  name: string;
  distanceElevation: string;
  start: string;
  cutoff: string;
};

export type ProgramItem = {
  time: string;
  title: string;
};

export type ProgramDay = {
  id: string;
  day: string;
  title: string;
  date: string;
  summary: string;
  courses?: ProgramCourse[];
  items: ProgramItem[];
};

export type EventProgramContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  dateRange: string;
  toc: string;
  courseTableTitle: string;
  course: string;
  distanceElevation: string;
  start: string;
  cutoff: string;
  schedule: string;
  days: ProgramDay[];
};

const tr: EventProgramContent = {
  metaTitle: "Etkinlik Programı",
  metaDescription:
    "Antalya Canyon Ultra 13-15 Kasım 2026 etkinlik programı, start saatleri, cut-off zamanları ve festival akışı.",
  eyebrow: "§ 03 · PROGRAM",
  title: "Etkinlik Programı",
  lede:
    "Expo açılışından teknik toplantılara, startlardan festival kapanışına kadar Antalya Canyon Ultra hafta sonunun tüm akışı.",
  dateRange: "13-15 Kasım 2026",
  toc: "Program günleri",
  courseTableTitle: "Parkur saatleri",
  course: "Parkur",
  distanceElevation: "Mesafe / İrtifa",
  start: "Start",
  cutoff: "Cut-off",
  schedule: "Program",
  days: [
    {
      id: "friday",
      day: "Cuma",
      title: "Expo ve Kit Dağıtımı",
      date: "13 Kasım 2026",
      summary:
        "Expo alanı açılır, yarış kitleri dağıtılır ve teknik toplantılar yapılır.",
      items: [
        { time: "14:00", title: "Expo alanı açılışı" },
        {
          time: "14:00 - 20:00",
          title: "Yarış kit dağıtımı & zorunlu malzeme kontrolü",
        },
        {
          time: "14:00 - 20:00",
          title: "Sponsor alanı & partner aktiviteleri",
        },
        { time: "16:30", title: "Basın / medya buluşması" },
        { time: "18:00", title: "70K teknik toplantı" },
        { time: "18:30", title: "45K teknik toplantı" },
        { time: "19:00", title: "33K teknik toplantı" },
        { time: "19:30", title: "13.5K / 7K bilgilendirme" },
        { time: "20:00", title: "Expo kapanışı" },
      ],
    },
    {
      id: "saturday",
      day: "Cumartesi",
      title: "Ultra Günü",
      date: "14 Kasım 2026",
      summary:
        "70K, 45K ve 33K parkurları aynı start çizgisinden güne başlar.",
      courses: [
        {
          name: "Antalya Termessos Ultra",
          distanceElevation: "70K / 1935m+",
          start: "08:00",
          cutoff: "23:45",
        },
        {
          name: "Antalya Goat Ultra",
          distanceElevation: "45K / 1037m+",
          start: "08:00",
          cutoff: "20:00",
        },
        {
          name: "Alageyik Trail",
          distanceElevation: "33K / 704m+",
          start: "08:00",
          cutoff: "17:00",
        },
      ],
      items: [
        { time: "05:30", title: "Ultra alanı açılışı" },
        {
          time: "05:30 - 07:15",
          title: "Sporcu girişleri & son ekipman kontrolü",
        },
        { time: "06:00 - 07:20", title: "Drop bag teslimi" },
        { time: "07:30", title: "Start seremonisi" },
        { time: "07:45", title: "Elite sporcu çağrısı" },
        { time: "08:00", title: "Tüm ultra parkurlar start" },
        { time: "10:15", title: "İlk 33K finisher tahmini" },
        { time: "11:30", title: "İlk 45K finisher tahmini" },
        { time: "14:00", title: "İlk 70K finisher tahmini" },
        { time: "17:00", title: "33K cut-off" },
        { time: "20:00", title: "45K cut-off" },
        { time: "23:45", title: "70K final cut-off" },
        { time: "00:00", title: "Ultra operasyon kapanışı" },
      ],
    },
    {
      id: "sunday",
      day: "Pazar",
      title: "Community Günü",
      date: "15 Kasım 2026",
      summary:
        "13K, 7K ve çocuk koşusu ile festival hafta sonu tamamlanır.",
      courses: [
        {
          name: "Güver Cliff Trail",
          distanceElevation: "13.5K / 105m+",
          start: "08:00",
          cutoff: "11:00",
        },
        {
          name: "My Pace Run",
          distanceElevation: "7K / 30m+",
          start: "08:00",
          cutoff: "10:00",
        },
        {
          name: "Canyon Kids Run",
          distanceElevation: "Çocuk Koşusu",
          start: "10:45",
          cutoff: "-",
        },
      ],
      items: [
        { time: "06:30", title: "Expo & yarış alanı açılışı" },
        { time: "06:30 - 07:15", title: "Son kit dağıtımı" },
        { time: "07:35", title: "Toplu ısınma" },
        { time: "08:00", title: "13.5K & 7K start" },
        { time: "08:22", title: "İlk 7K finisher tahmini" },
        { time: "08:52", title: "İlk 13.5K finisher tahmini" },
        { time: "09:00 - 10:00", title: "Çocuk koşusu hazırlık alanı" },
        { time: "10:00", title: "7K cut-off" },
        { time: "10:45", title: "Kids Run start" },
        { time: "11:00", title: "Büyük ödül töreni" },
        { time: "12:00", title: "Festival resmi kapanışı" },
      ],
    },
  ],
};

const en: EventProgramContent = {
  metaTitle: "Event Program",
  metaDescription:
    "Antalya Canyon Ultra November 13-15, 2026 event schedule, start times, cut-offs, and festival flow.",
  eyebrow: "§ 03 · PROGRAM",
  title: "Event Program",
  lede:
    "The full Antalya Canyon Ultra weekend flow, from expo opening and technical briefings to race starts, cut-offs, and festival close.",
  dateRange: "November 13-15, 2026",
  toc: "Program days",
  courseTableTitle: "Course schedule",
  course: "Course",
  distanceElevation: "Distance / Elevation",
  start: "Start",
  cutoff: "Cut-off",
  schedule: "Schedule",
  days: [
    {
      id: "friday",
      day: "Friday",
      title: "Expo and Kit Pickup",
      date: "November 13, 2026",
      summary:
        "The expo opens, race kits are distributed, and technical briefings take place.",
      items: [
        { time: "14:00", title: "Expo area opens" },
        {
          time: "14:00 - 20:00",
          title: "Race kit pickup & mandatory gear check",
        },
        {
          time: "14:00 - 20:00",
          title: "Sponsor area & partner activities",
        },
        { time: "16:30", title: "Press / media meet-up" },
        { time: "18:00", title: "70K technical briefing" },
        { time: "18:30", title: "45K technical briefing" },
        { time: "19:00", title: "33K technical briefing" },
        { time: "19:30", title: "13.5K / 7K briefing" },
        { time: "20:00", title: "Expo closes" },
      ],
    },
    {
      id: "saturday",
      day: "Saturday",
      title: "Ultra Day",
      date: "November 14, 2026",
      summary:
        "The 70K, 45K, and 33K courses begin from the same start line.",
      courses: [
        {
          name: "Antalya Termessos Ultra",
          distanceElevation: "70K / 1935m+",
          start: "08:00",
          cutoff: "23:45",
        },
        {
          name: "Antalya Goat Ultra",
          distanceElevation: "45K / 1037m+",
          start: "08:00",
          cutoff: "20:00",
        },
        {
          name: "Alageyik Trail",
          distanceElevation: "33K / 704m+",
          start: "08:00",
          cutoff: "17:00",
        },
      ],
      items: [
        { time: "05:30", title: "Ultra area opens" },
        {
          time: "05:30 - 07:15",
          title: "Athlete check-in & final gear check",
        },
        { time: "06:00 - 07:20", title: "Drop bag handover" },
        { time: "07:30", title: "Start ceremony" },
        { time: "07:45", title: "Elite athlete call" },
        { time: "08:00", title: "All ultra courses start" },
        { time: "10:15", title: "Estimated first 33K finisher" },
        { time: "11:30", title: "Estimated first 45K finisher" },
        { time: "14:00", title: "Estimated first 70K finisher" },
        { time: "17:00", title: "33K cut-off" },
        { time: "20:00", title: "45K cut-off" },
        { time: "23:45", title: "70K final cut-off" },
        { time: "00:00", title: "Ultra operations close" },
      ],
    },
    {
      id: "sunday",
      day: "Sunday",
      title: "Community Day",
      date: "November 15, 2026",
      summary:
        "The festival weekend closes with the 13K, 7K, and kids run.",
      courses: [
        {
          name: "Güver Cliff Trail",
          distanceElevation: "13.5K / 105m+",
          start: "08:00",
          cutoff: "11:00",
        },
        {
          name: "My Pace Run",
          distanceElevation: "7K / 30m+",
          start: "08:00",
          cutoff: "10:00",
        },
        {
          name: "Canyon Kids Run",
          distanceElevation: "Kids Run",
          start: "10:45",
          cutoff: "-",
        },
      ],
      items: [
        { time: "06:30", title: "Expo & race area opens" },
        { time: "06:30 - 07:15", title: "Final kit pickup" },
        { time: "07:35", title: "Group warm-up" },
        { time: "08:00", title: "13.5K & 7K start" },
        { time: "08:22", title: "Estimated first 7K finisher" },
        { time: "08:52", title: "Estimated first 13.5K finisher" },
        { time: "09:00 - 10:00", title: "Kids run preparation area" },
        { time: "10:00", title: "7K cut-off" },
        { time: "10:45", title: "Kids Run start" },
        { time: "11:00", title: "Awards ceremony" },
        { time: "12:00", title: "Official festival close" },
      ],
    },
  ],
};

export function getEventProgram(locale: string): EventProgramContent {
  return locale === "tr" ? tr : en;
}
