
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
  /* true while the course map is being revised — shows a placeholder
     instead of the Trace de Trail embed */
  mapUpdating?: boolean;
  /* ITRA performance points — set only for ITRA-scored courses.
     Absent (not 0) for courses that do not score: ACT13, ACT05.
     Closed union: one badge asset exists per tier in public/logos/. */
  itraPoints?: 1 | 2 | 3;
  /* UTMB Index race category — set only for courses that count towards the
     UTMB Index. Closed union: one badge asset exists per category in
     public/logos/ (utmb-20k.svg, utmb-50k.svg). */
  utmbCategory?: "20K" | "50K";
  /* TAF (kosu.taf.org.tr) registration page for this course */
  /* aid stations in course order, START first and FINISH last */
  checkpoints?: Checkpoint[];
  /* elevation in metres at even steps from the first to the last checkpoint;
     drives the station chart, so pins land on the right terrain */
  checkpointProfileM?: number[];
};

export function getRace(slug: string): Race | undefined {
  return RACES.find((r) => r.slug === slug);
}

// Values measured from the Garmin GPX: 45K Canyon Ultra — 43.6 km, ~1113 m gain (193–583 m).
const CANYON_MARATHON_PROFILE = [
  0.275, 0.223, 0.185, 0.223, 0.24, 0.105, 0, 0.221,
  0.201, 0.202, 1, 0.567, 0.61, 0.415, 0.346, 0.273,
];

// Values measured from the Garmin GPX: 70K Termessos Ultra — 75.4 km, ~2335 m gain (194–1063 m).
const TERMESSOS_PROFILE = [
  0.128, 0.04, 0.109, 0.025, 0.142, 0.096, 0, 0.41,
  0.609, 1, 0.487, 0.028, 0.371, 0.282, 0.183, 0.126,
];

// Values measured from the Garmin GPX: 36K Alageyik Trail — 35.9 km, ~758 m gain (203–584 m).
const ALAGEYIK_PROFILE = [
  0.213, 0.172, 0.074, 0.173, 0.179, 0.182, 0.144, 0,
  0.225, 1, 0.567, 0.549, 0.427, 0.379, 0.275, 0.211,
];

// Values measured from the Garmin GPX: 22K Forest Trail — 21.9 km, ~389 m gain (217–365 m).
const FOREST_PROFILE = [
  0.338, 0.251, 0.161, 0.003, 0, 0.102, 0.137, 0.198,
  0.426, 0.932, 0.997, 0.91, 1, 0.65, 0.411, 0.329,
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
// 36K Alageyik — act30-alageyik-parkuru.gpx (Garmin course 519924634,
// 35.86 km) onto 35.77 km.
const ALAGEYIK_CP_PROFILE_M = [
  296, 294, 288, 289, 287, 283, 281, 274, 279, 263, 250, 264, 270, 273, 281, 287, 283, 281,
  282, 284, 280, 286, 290, 288, 287, 295, 289, 291, 290, 263, 203, 213, 214, 218, 225, 238,
  253, 274, 294, 325, 398, 447, 485, 536, 579, 554, 500, 444, 412, 398, 423, 447, 414, 406,
  404, 401, 392, 378, 357, 339, 344, 346, 349, 346, 342, 326, 321, 318, 311, 304, 302, 298,
  296,
];

// 22K Forest Trail — act22-forest-trail.gpx (Garmin course 530255368,
// 21.89 km) onto 22.02 km.
const FOREST_CP_PROFILE_M = [
  297, 295, 296, 290, 290, 289, 287, 286, 286, 287, 283, 271, 279, 275, 259, 279, 267, 261,
  218, 267, 268, 273, 270, 269, 277, 281, 286, 286, 287, 281, 281, 283, 282, 284, 285, 281,
  284, 287, 301, 314, 320, 322, 333, 346, 351, 362, 355, 350, 353, 352, 345, 339, 341, 350,
  349, 350, 351, 343, 348, 344, 332, 322, 322, 321, 318, 313, 308, 304, 301, 302, 300, 295,
  296,
];

// 13.5K Güver Cliff Trail — from the 13.5K GÜVER CLIFF TRAİL.gpx (13.47 km).
const GUVER_CP_PROFILE_M = [
  299, 295, 295, 295, 293, 291, 289, 292, 289, 288, 288, 287, 284, 283, 281, 275, 280, 277,
  275, 273, 262, 279, 272, 267, 266, 266, 232, 266, 270, 272, 260, 275, 269, 266, 269, 270,
  277, 279, 282, 287, 287, 284, 287, 281, 283, 284, 279, 283, 282, 283, 285, 284, 284, 277,
  284, 284, 285, 288, 291, 289, 288, 287, 289, 293, 292, 296, 306, 295, 300, 292, 293, 292,
  296,
];

// 70K Termessos Ultra — act70-termessos-ultra.gpx (75.45 km) onto 70 km.
const TERMESSOS_CP_PROFILE_M = [
  298, 287, 286, 280, 272, 270, 265, 284, 278, 284, 285, 287, 294, 292, 228, 215, 219, 203,
  249, 311, 254, 200, 252, 238, 272, 240, 280, 249, 219, 195, 456, 534, 377, 461, 524, 510,
  577, 664, 660, 729, 899, 1059, 1054, 1025, 966, 861, 846, 708, 591, 515, 421, 329, 299, 213,
  235, 269, 318, 444, 541, 551, 434, 398, 430, 405, 397, 365, 352, 356, 346, 321, 313, 302,
  297,
];

// 45K Canyon Ultra — act45-canyon-ultra.gpx (43.62 km) onto 47.25 km.
const CANYON_ULTRA_CP_PROFILE_M = [
  298, 295, 288, 288, 283, 282, 267, 269, 240, 276, 269, 273, 283, 287, 286, 282, 285, 285,
  291, 287, 286, 291, 293, 287, 244, 217, 214, 214, 219, 218, 196, 242, 297, 316, 253, 242,
  307, 292, 288, 232, 222, 230, 245, 271, 295, 337, 420, 469, 527, 576, 539, 462, 412, 397,
  426, 432, 407, 406, 401, 389, 369, 345, 347, 344, 350, 348, 334, 322, 316, 309, 303, 299,
  297,
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
    // New 75.4 km course (Garmin course 472600561); Trace de Trail still
    // shows the old route.
    mapUpdating: true,
    gpx: {
      file: "/routes/act70-termessos-ultra.gpx",
      measuredKm: 75.4,
      ascentM: 2335,
      minEleM: 194,
      maxEleM: 1063,
    },
  },
  {
    code: "ACT45",
    slug: "antalya-goat-ultra",
    distanceKm: 45,
    elevationM: 1194,
    itraPoints: 2,
    utmbCategory: "50K",
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
    // New 43.6 km course (Garmin course 463347266); Trace de Trail still
    // shows the old route.
    mapUpdating: true,
    gpx: {
      file: "/routes/act45-canyon-ultra.gpx",
      measuredKm: 43.6,
      ascentM: 1113,
      minEleM: 193,
      maxEleM: 583,
    },
  },
  {
    code: "ACT30",
    slug: "alageyik-trail",
    distanceKm: 36,
    elevationM: 770,
    itraPoints: 1,
    utmbCategory: "20K",
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
      measuredKm: 35.9,
      ascentM: 758,
      minEleM: 203,
      maxEleM: 584,
    },
  },
  {
    code: "ACT22",
    slug: "forest-trail",
    distanceKm: 22,
    /* official figure from the course document; GPX measures ~389 m */
    elevationM: 400,
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
    // New 21.9 km course (Garmin course 530255368); Trace de Trail still
    // shows the old route.
    mapUpdating: true,
    gpx: {
      file: "/routes/act22-forest-trail.gpx",
      measuredKm: 21.9,
      ascentM: 389,
      minEleM: 217,
      maxEleM: 365,
    },
  },
  {
    code: "ACT13",
    slug: "guver-cliff-trail",
    distanceKm: 13,
    elevationM: 100,
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

