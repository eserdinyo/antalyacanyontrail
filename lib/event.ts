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

export type CheckpointService =
  | "water"
  | "food"
  | "medical"
  | "shuttle"
  | "dropBag";

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
// the sheet (22K, 7K) the track is scaled proportionally.
// 36K Alageyik — from the 35K ALAGEYİK TRAİL.gpx (35.77 km), which drops a
// short loop near km 2 of the earlier 36.33 km route.
const ALAGEYIK_CP_PROFILE_M = [
  297, 294, 288, 289, 288, 283, 281, 275, 279, 264, 248, 265, 270, 273, 281, 287, 283, 281,
  282, 283, 279, 286, 291, 287, 286, 294, 288, 291, 290, 267, 204, 215, 214, 217, 225, 237,
  252, 273, 292, 323, 385, 443, 476, 528, 571, 555, 508, 448, 413, 395, 420, 457, 416, 377,
  341, 347, 353, 348, 344, 346, 344, 351, 351, 344, 336, 320, 316, 308, 301, 298, 301, 299,
  297,
];

// 22K Forest Trail — act22-forest-trail.gpx (22.14 km) onto 22.02 km.
const FOREST_CP_PROFILE_M = [
  295, 295, 294, 289, 290, 289, 288, 286, 282, 277, 279, 275, 267, 276, 267, 265, 247, 271,
  264, 271, 267, 272, 277, 282, 286, 286, 283, 283, 281, 283, 284, 285, 280, 284, 285, 296,
  309, 316, 321, 330, 339, 348, 363, 378, 376, 363, 343, 348, 348, 345, 345, 344, 347, 350,
  349, 353, 349, 346, 342, 330, 322, 322, 318, 310, 303, 306, 298, 299, 301, 302, 299, 298,
  297,
];

// 13.5K Güver Cliff Trail — from the 13.5K GÜVER CLIFF TRAİL.gpx (13.47 km).
const GUVER_CP_PROFILE_M = [
  299, 295, 295, 295, 293, 291, 289, 292, 289, 288, 288, 287, 284, 283, 281, 275, 280, 277,
  275, 273, 262, 279, 272, 267, 266, 266, 232, 266, 270, 272, 260, 275, 269, 266, 269, 270,
  277, 279, 282, 287, 287, 284, 287, 281, 283, 284, 279, 283, 282, 283, 285, 284, 284, 277,
  284, 284, 285, 288, 291, 289, 288, 287, 289, 293, 292, 296, 306, 295, 300, 292, 293, 292,
  296,
];

// 70K Termessos Ultra — no GPX of the current course yet; digitised from the
// organiser's 70K elevation chart (70 km), within ~10 m of its CP heights.
const TERMESSOS_CP_PROFILE_M = [
  293, 291, 288, 279, 274, 247, 267, 276, 287, 285, 283, 288, 288, 293, 292, 235, 220, 224,
  210, 220, 301, 287, 266, 221, 272, 249, 283, 251, 235, 190, 416, 529, 382, 439, 531, 493,
  545, 627, 666, 684, 694, 733, 634, 448, 322, 288, 279, 225, 240, 275, 325, 446, 532, 561,
  452, 389, 452, 394, 344, 352, 343, 345, 353, 336, 324, 308, 303, 306, 341, 314, 342, 323,
  290,
];

// 45K Canyon Ultra — no GPX of the current course yet; digitised from the
// organiser's 45K elevation chart (47.25 km), within ~10 m of its CP heights.
const CANYON_ULTRA_CP_PROFILE_M = [
  294, 295, 291, 288, 280, 274, 276, 268, 270, 273, 272, 282, 287, 285, 282, 278, 285, 289,
  286, 293, 291, 290, 250, 213, 214, 217, 212, 211, 218, 280, 353, 432, 423, 465, 567, 561,
  503, 455, 384, 329, 303, 293, 228, 224, 234, 255, 277, 303, 388, 453, 521, 567, 549, 468,
  414, 398, 441, 424, 354, 341, 359, 345, 344, 344, 350, 351, 341, 324, 316, 310, 303, 299,
  293,
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
    elevationM: 2037,
    itraPoints: 3,
    utmbCategory: "50K",
    registerUrl: "https://www.hermesentry.com/r/70k-antalya-termessos-ultra/antalya-termossos-ultra-70k",
    // From the organiser's station sheet (70K, extended to 70 km for planning;
    // the 64.97–70 km section assumes +100 m D+). Figures will be updated once
    // ITRA confirms.
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Köpek Çiftliği", km: 8.61, ascentM: 133, descentM: 152, services: ["water", "food", "medical"] },
      { code: "CP2", name: "Alabalık", km: 16.14, ascentM: 175, descentM: 260, services: ["water", "food", "medical", "dropBag"] },
      { code: "CP3", name: "Cennet Valley", km: 27.78, ascentM: 502, descentM: 623, services: ["water", "food", "medical"] },
      { code: "CP4", name: "Neapolis", km: 36.61, ascentM: 1226, descentM: 862, services: ["water", "food", "medical"] },
      { code: "CP5", name: "Alabalık-2", km: 45.53, ascentM: 1381, descentM: 1465, services: ["water", "food", "medical", "dropBag"] },
      { code: "CP6", name: "Alageyik", km: 51.12, ascentM: 1745, descentM: 1471, services: ["water", "food", "medical"] },
      { code: "CP7", name: "Düzlerçamı", km: 57.37, ascentM: 1837, descentM: 1794, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 70, ascentM: 2037, descentM: 2039, services: [] },
    ],
    checkpointProfileM: TERMESSOS_CP_PROFILE_M,
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
    elevationM: 1194,
    itraPoints: 2,
    utmbCategory: "50K",
    registerUrl: "https://www.hermesentry.com/r/70k-antalya-termessos-ultra/antalya-goat-ultra",
    // From the organiser's station sheet (45K Canyon Ultra, 47.25 km). Climb/
    // descent come from the course KML and will be updated once ITRA confirms.
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Köpek Çiftliği", km: 8.68, ascentM: 163, descentM: 182, services: ["water", "food", "medical"] },
      { code: "CP2", name: "Alabalık-1", km: 16.16, ascentM: 213, descentM: 296, services: ["water", "food", "medical"] },
      { code: "CP3", name: "Wildlife", km: 22.47, ascentM: 649, descentM: 360, services: ["water", "food", "medical"] },
      { code: "CP4", name: "Alabalık-2", km: 27.94, ascentM: 671, descentM: 753, services: ["water", "food", "medical"] },
      { code: "CP5", name: "Alageyik", km: 33.75, ascentM: 1058, descentM: 776, services: ["water", "food", "medical"] },
      { code: "CP6", name: "Düzlerçamı", km: 39.82, ascentM: 1180, descentM: 1131, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 47.25, ascentM: 1194, descentM: 1195, services: [] },
    ],
    checkpointProfileM: CANYON_ULTRA_CP_PROFILE_M,
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
    elevationM: 770,
    itraPoints: 1,
    utmbCategory: "20K",
    registerUrl: "https://www.hermesentry.com/r/70k-antalya-termessos-ultra/alageyik-trail",
    // Stations from the organiser's 36K sheet, re-measured on the 35.77 km
    // GPX (same CP locations; the shorter start moves each one ~0.55 km).
    checkpoints: [
      { code: "START", km: 0, ascentM: 0, descentM: 0, services: [] },
      { code: "CP1", name: "Güver", km: 8.57, ascentM: 135, descentM: 153, services: ["water", "food", "medical"] },
      { code: "CP2", name: "Alabalık", km: 16.27, ascentM: 213, descentM: 295, services: ["water", "food", "medical", "shuttle"] },
      { code: "CP3", name: "Alageyik", km: 21.56, ascentM: 581, descentM: 319, services: ["water", "food", "medical"] },
      { code: "CP4", name: "Düzlerçamı", km: 28.13, ascentM: 741, descentM: 688, services: ["water", "food", "medical"] },
      { code: "FINISH", km: 35.77, ascentM: 770, descentM: 770, services: [] },
    ],
    checkpointProfileM: ALAGEYIK_CP_PROFILE_M,
    color: "ochre",
    image: "/races/epic.jpeg",
    profile: ALAGEYIK_PROFILE,
    gpx: {
      file: "/routes/act30-alageyik-parkuru.gpx",
      measuredKm: 35.8,
      ascentM: 770,
      minEleM: 203,
      maxEleM: 584,
    },
  },
  {
    code: "ACT22",
    slug: "forest-trail",
    distanceKm: 22,
    /* official figure from the course document; GPX measures ~295 m */
    elevationM: 400,
    registerUrl: "https://www.hermesentry.com/r/70k-antalya-termessos-ultra/forest-trail",
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
    registerUrl: "https://www.hermesentry.com/r/70k-antalya-termessos-ultra/guver-cliff-trail",
    // From the organiser's station sheet (13.5K Güver Cliff Trail); km and
    // climb/descent match the 13.5K GPX.
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
      ascentM: 234,
      minEleM: 228,
      maxEleM: 306,
    },
  },
  {
    code: "ACT05",
    slug: "my-pace-run",
    distanceKm: 7,
    elevationM: 38,
    registerUrl: "https://www.hermesentry.com/r/70k-antalya-termessos-ultra/my-pace-run",
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
   course page carries its own Hermes Entry registration link (Race.registerUrl). */
export const REGISTER_URL = "/#races";
