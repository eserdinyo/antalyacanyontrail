export const EVENT_DATE = new Date("2026-11-13T07:00:00+03:00");

export const EVENT_COORDS = {
  lat: "36°53′29″N",
  lng: "30°42′48″E",
  place: "Antalya · Türkiye",
};

export const EDITION = "I";

export type RaceColor =
  | "ember-deep"
  | "ember"
  | "ochre"
  | "pine"
  | "moss"
  | "shadow";

export type RaceSlug =
  | "antalya-termessos-ultra"
  | "antalya-goat-ultra"
  | "alageyik-trail"
  | "forest-trail"
  | "guver-cliff-trail"
  | "my-pace-run";

export type GpxTrack = {
  /* public path served by /public */
  file: string;
  /* measured from GPX */
  measuredKm: number;
  ascentM: number;
  minEleM: number;
  maxEleM: number;
};

export type Race = {
  code: string;
  slug: RaceSlug;
  distanceKm: number;
  elevationM: number;
  color: RaceColor;
  image: string;
  /* relative elevation profile, 0..1 array, length ~16, for SVG decoration */
  profile: number[];
  /* present only when a recorded GPX track is available */
  gpx?: GpxTrack;
  /* Trace de Trail iframe id — embeds the interactive course map when set */
  traceDeTrailId?: number;
  /* ITRA performance points — set only for ITRA-scored courses.
     Absent (not 0) for courses that do not score: ACT13, ACT05.
     Closed union: one badge asset exists per tier in public/logos/. */
  itraPoints?: 1 | 2 | 3;
  /* UTMB Index race category — set only for courses that count towards the
     UTMB Index. Closed union: one badge asset exists per category in
     public/logos/ (utmb-20k.svg, utmb-50k.svg). */
  utmbCategory?: "20K" | "50K";
  /* TAF (kosu.taf.org.tr) registration page for this course */
  registerUrl: string;
};

export function getRace(slug: string): Race | undefined {
  return RACES.find((r) => r.slug === slug);
}

// Values from Trace de Trail (id 10359): 45K Antalya Goat Ultra — 46.7 km, ~1037 m gain (195–587 m).
const CANYON_MARATHON_PROFILE = [
  0.266, 0.22, 0.191, 0.232, 0.223, 0.241, 0.036, 0.024,
  0.252, 0.193, 0.834, 0.499, 0.527, 0.39, 0.327, 0.262,
];

// Values from Trace de Trail (id 10360): 70K Antalya Termessos Ultra — 69.9 km, ~1935 m gain (180–738 m).
const TERMESSOS_PROFILE = [
  0.185, 0.124, 0.157, 0.122, 0, 0.201, 0.082, 0.313,
  0.643, 1, 0.244, 0.129, 0.617, 0.383, 0.293, 0.181,
];

// Values measured from the Garmin GPX: 36K Alageyik Trail — 36.3 km, ~763 m gain (202–584 m).
const ALAGEYIK_PROFILE = [
  0.255, 0.227, 0.16, 0.191, 0.215, 0.227, 0.239, 0,
  0.23, 1, 0.676, 0.647, 0.431, 0.432, 0.298, 0.252,
];

// Values measured from the Garmin GPX: 22K Forest Trail — 22.1 km, ~295 m gain (230–380 m).
const FOREST_PROFILE = [
  0.419, 0.367, 0.287, 0, 0.202, 0.348, 0.329, 0.347,
  0.624, 1, 0.836, 0.794, 0.805, 0.614, 0.482, 0.459,
];

// Values from Trace de Trail (id 10356): 13K Güver Cliff Trail — 13.5 km, ~112 m gain (236–303 m).
const GUVER_PROFILE = [
  0.961, 0.849, 0.814, 0.677, 0.548, 0.529, 0, 0.415,
  0.411, 0.72, 0.692, 0.679, 0.747, 0.889, 1, 0.92,
];

// Values from Trace de Trail (id 10357): 7K My Pace Run — 7.5 km, ~38 m gain (272–303 m).
const PACE5K_PROFILE = [
  1, 0.89, 0.662, 0.633, 0.566, 0.378, 0.095, 0.03,
  0, 0.062, 0.383, 0.564, 0.639, 0.661, 0.894, 0.986,
];

export const RACES: Race[] = [
  {
    code: "ACT70",
    slug: "antalya-termessos-ultra",
    distanceKm: 70,
    elevationM: 1935,
    itraPoints: 3,
    utmbCategory: "50K",
    registerUrl: "https://kosu.taf.org.tr/yarisma_detay.php?id=122",
    color: "ember-deep",
    image: "/races/ultra.jpeg",
    profile: TERMESSOS_PROFILE,
    traceDeTrailId: 10360,
    gpx: {
      file: "/routes/act70-termessos-ultra.gpx",
      measuredKm: 69.9,
      ascentM: 1935,
      minEleM: 180,
      maxEleM: 738,
    },
  },
  {
    code: "ACT45",
    slug: "antalya-goat-ultra",
    distanceKm: 45,
    elevationM: 1037,
    itraPoints: 2,
    utmbCategory: "50K",
    registerUrl: "https://kosu.taf.org.tr/yarisma_detay.php?id=121",
    color: "ember",
    image: "/races/marathon.jpeg",
    profile: CANYON_MARATHON_PROFILE,
    traceDeTrailId: 10359,
    gpx: {
      file: "/routes/act45-canyon-ultra.gpx",
      measuredKm: 46.7,
      ascentM: 1037,
      minEleM: 195,
      maxEleM: 587,
    },
  },
  {
    code: "ACT30",
    slug: "alageyik-trail",
    distanceKm: 36,
    elevationM: 763,
    itraPoints: 1,
    utmbCategory: "20K",
    registerUrl: "https://kosu.taf.org.tr/yarisma_detay.php?id=120",
    color: "ochre",
    image: "/races/epic.jpeg",
    profile: ALAGEYIK_PROFILE,
    traceDeTrailId: 10358,
    gpx: {
      file: "/routes/act30-alageyik-parkuru.gpx",
      measuredKm: 36.3,
      ascentM: 763,
      minEleM: 202,
      maxEleM: 584,
    },
  },
  {
    code: "ACT22",
    slug: "forest-trail",
    distanceKm: 22,
    /* official figure from the course document; GPX measures ~295 m */
    elevationM: 400,
    registerUrl: "https://kosu.taf.org.tr/yarisma_detay.php?id=224",
    itraPoints: 1,
    utmbCategory: "20K",
    color: "pine",
    image: "/races/forest.jpeg",
    profile: FOREST_PROFILE,
    traceDeTrailId: 10582,
    gpx: {
      file: "/routes/act22-forest-trail.gpx",
      measuredKm: 22.1,
      ascentM: 295,
      minEleM: 230,
      maxEleM: 380,
    },
  },
  {
    code: "ACT13",
    slug: "guver-cliff-trail",
    distanceKm: 13,
    elevationM: 100,
    registerUrl: "https://kosu.taf.org.tr/yarisma_detay.php?id=119",
    color: "moss",
    image: "/races/short.jpeg",
    profile: GUVER_PROFILE,
    traceDeTrailId: 10356,
    gpx: {
      file: "/routes/act12-guver-cliff-trail.gpx",
      measuredKm: 13.5,
      ascentM: 112,
      minEleM: 236,
      maxEleM: 303,
    },
  },
  {
    code: "ACT05",
    slug: "my-pace-run",
    distanceKm: 7,
    elevationM: 38,
    registerUrl: "https://kosu.taf.org.tr/yarisma_detay.php?id=118",
    color: "shadow",
    image: "/races/fun.jpeg",
    profile: PACE5K_PROFILE,
    traceDeTrailId: 10357,
    gpx: {
      file: "/routes/act05-pace-run.gpx",
      measuredKm: 7.5,
      ascentM: 38,
      minEleM: 272,
      maxEleM: 303,
    },
  },
];

export const HERO_IMAGE = "/races/hero.jpeg";

/* Site-wide "Register" buttons send users to the races section, where each
   course page carries its own TAF registration link (Race.registerUrl). */
export const REGISTER_URL = "/#races";
