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

export type CheckpointService = "water" | "food" | "medical" | "shuttle";

export type Checkpoint = {
  /* "START", "FINISH" or "CP1".."CPn" */
  code: string;
  /* place name — CPs only; start/finish are labelled via i18n */
  name?: string;
  /* cumulative figures from the start */
  km: number;
  ascentM: number;
  descentM: number;
  services: CheckpointService[];
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
  /* aid stations in course order, START first and FINISH last */
  checkpoints?: Checkpoint[];
  /* elevation in metres at even steps from the first to the last checkpoint;
     drives the station chart, so pins land on the right terrain */
  checkpointProfileM?: number[];
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

// Station-chart elevations (m), 73 even steps over each station sheet's
// distance. Sampled from the course GPX; where the GPX length differs from
// the sheet (13.5K, 22K, 7K) the track is scaled proportionally.
// 36K Alageyik — from the updated 36K ALAGEYİK TRAİL.gpx (36.33 km).
const ALAGEYIK_CP_PROFILE_M = [
  295, 294, 289, 289, 287, 286, 281, 278, 271, 274, 265, 256, 268, 269, 272, 281, 286, 283,
  282, 283, 284, 282, 286, 290, 287, 287, 294, 291, 292, 288, 241, 210, 217, 215, 224, 230,
  243, 263, 283, 303, 353, 421, 461, 509, 558, 574, 527, 469, 422, 393, 406, 444, 428, 410,
  350, 343, 346, 348, 346, 344, 344, 349, 350, 345, 339, 322, 319, 310, 302, 298, 301, 298,
  295,
];

// 22K Forest Trail — act22-forest-trail.gpx (22.14 km) onto 22.02 km.
const FOREST_CP_PROFILE_M = [
  295, 295, 294, 289, 290, 289, 288, 286, 282, 277, 279, 275, 267, 276, 267, 265, 247, 271,
  264, 271, 267, 272, 277, 282, 286, 286, 283, 283, 281, 283, 284, 285, 280, 284, 285, 296,
  309, 316, 321, 330, 339, 348, 363, 378, 376, 363, 343, 348, 348, 345, 345, 344, 347, 350,
  349, 353, 349, 346, 342, 330, 322, 322, 318, 310, 303, 306, 298, 299, 301, 302, 299, 298,
  297,
];

// 13.5K Güver Cliff Trail — act12-guver-cliff-trail.gpx (12.05 km) onto 13.47 km.
const GUVER_CP_PROFILE_M = [
  297, 296, 295, 294, 293, 291, 289, 289, 290, 290, 289, 288, 287, 285, 283, 281, 279, 279,
  278, 276, 274, 271, 271, 274, 275, 273, 268, 262, 255, 247, 254, 265, 270, 270, 269, 269,
  268, 266, 268, 271, 275, 279, 282, 284, 286, 286, 286, 285, 283, 282, 281, 280, 281, 283,
  286, 289, 288, 287, 286, 286, 288, 290, 292, 295, 298, 300, 300, 299, 296, 294, 293, 293,
  295,
];

// 7K My Pace Run — act05-pace-run.gpx (7.01 km) onto 7.1 km.
const PACE_CP_PROFILE_M = [
  297, 296, 295, 295, 295, 295, 295, 294, 292, 290, 289, 288, 289, 290, 290, 290, 290, 289,
  289, 288, 287, 286, 285, 284, 283, 283, 282, 279, 277, 279, 281, 281, 279, 276, 275, 275,
  275, 274, 274, 276, 279, 280, 280, 278, 277, 279, 282, 283, 283, 284, 286, 286, 287, 288,
  289, 289, 290, 290, 290, 290, 289, 289, 289, 290, 292, 294, 295, 295, 295, 295, 295, 296,
  297,
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
    // From the organiser's station sheet (36K İstasyonlar); km and
    // climb/descent match the 36K GPX.
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Güver", km: 9.12, ascentM: 135, descentM: 153, services: ["water", "food", "medical"] },
      { code: "CP2", name: "Alabalık", km: 16.83, ascentM: 214, descentM: 296, services: ["water", "food", "medical", "shuttle"] },
      { code: "CP3", name: "Alageyik", km: 22.12, ascentM: 581, descentM: 320, services: ["water", "food", "medical"] },
      { code: "CP4", name: "Düzlerçamı", km: 28.66, ascentM: 734, descentM: 684, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 36.33, ascentM: 763, descentM: 764, services: [] },
    ],
    checkpointProfileM: ALAGEYIK_CP_PROFILE_M,
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
    // From the organiser's station sheet (22K Forest Trail). Climb/descent come
    // from the course KML and will be updated once ITRA confirms.
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Güver", km: 9.22, ascentM: 170, descentM: 189, services: ["water", "food", "medical"] },
      { code: "CP2", name: "Düzlerçamı", km: 14.27, ascentM: 276, descentM: 235, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 22.02, ascentM: 408, descentM: 414, services: [] },
    ],
    checkpointProfileM: FOREST_CP_PROFILE_M,
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
    // From the organiser's station sheet (13.5K Güver Cliff Trail). Climb/descent come
    // from the course KML and will be updated once ITRA confirms.
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Fun Zone", km: 3.07, ascentM: 28, descentM: 48, services: ["water", "food", "medical"] },
      { code: "CP2", name: "Güver", km: 8.59, ascentM: 170, descentM: 190, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 13.47, ascentM: 235, descentM: 237, services: [] },
    ],
    checkpointProfileM: GUVER_CP_PROFILE_M,
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
    // From the organiser's station sheet (7K My Pace Run). Climb/descent come
    // from the course KML and will be updated once ITRA confirms.
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Fun Zone", km: 3.06, ascentM: 29, descentM: 48, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 7.1, ascentM: 108, descentM: 110, services: [] },
    ],
    checkpointProfileM: PACE_CP_PROFILE_M,
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
