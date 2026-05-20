export const EVENT_DATE = new Date("2026-11-13T07:00:00+03:00");

export const EVENT_COORDS = {
  lat: "36°53′29″N",
  lng: "30°42′48″E",
  place: "Antalya · Türkiye",
};

export const EDITION = "I";

export type RaceColor = "ember-deep" | "ember" | "ochre" | "moss" | "shadow";

export type RaceSlug = "ultra" | "marathon" | "epic" | "short" | "fun";

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
};

export function getRace(slug: string): Race | undefined {
  return RACES.find((r) => r.slug === slug);
}

// Measured from GPX: 45K Antalya Canyon Marathon — 46.5 km, ~876 m gain (195–580 m).
const CANYON_MARATHON_PROFILE = [
  0.266, 0.22, 0.191, 0.232, 0.223, 0.241, 0.036, 0.024,
  0.252, 0.193, 0.834, 0.499, 0.527, 0.39, 0.327, 0.262,
];

// Measured from GPX: 70K Antalya Termessos Ultra — 69.6 km, ~1803 m gain (176–747 m).
const TERMESSOS_PROFILE = [
  0.185, 0.124, 0.157, 0.122, 0, 0.201, 0.082, 0.313,
  0.643, 1, 0.244, 0.129, 0.617, 0.383, 0.293, 0.181,
];

// Measured from GPX: 35K Alageyik Parkuru — 35.4 km, ~639 m gain (200–578 m).
const ALAGEYIK_PROFILE = [
  0.195, 0.152, 0.097, 0.15, 0.159, 0.16, 0.058, 0.165,
  0, 0.009, 0.329, 1, 0.459, 0.504, 0.328, 0.191,
];

// Measured from GPX: 12K Güver Cliff Trail — 12.1 km, ~68 m gain (247–301 m).
const GUVER_PROFILE = [
  0.961, 0.849, 0.814, 0.677, 0.548, 0.529, 0, 0.415,
  0.411, 0.72, 0.692, 0.679, 0.747, 0.889, 1, 0.92,
];

// Measured from GPX: 5K My Pace Run — 6.5 km recon, ~20 m gain (275–297 m).
const PACE5K_PROFILE = [
  1, 0.89, 0.662, 0.633, 0.566, 0.378, 0.095, 0.03,
  0, 0.062, 0.383, 0.564, 0.639, 0.661, 0.894, 0.986,
];

export const RACES: Race[] = [
  {
    code: "ACT70",
    slug: "ultra",
    distanceKm: 70,
    elevationM: 1890,
    color: "ember-deep",
    image: "/races/ultra.jpeg",
    profile: TERMESSOS_PROFILE,
    gpx: {
      file: "/routes/act70-termessos-ultra.gpx",
      measuredKm: 69.6,
      ascentM: 1890,
      minEleM: 176,
      maxEleM: 747,
    },
  },
  {
    code: "ACT45",
    slug: "marathon",
    distanceKm: 45,
    elevationM: 880,
    color: "ember",
    image: "/races/marathon.jpeg",
    profile: CANYON_MARATHON_PROFILE,
    gpx: {
      file: "/routes/act45-canyon-ultra.gpx",
      measuredKm: 46.5,
      ascentM: 876,
      minEleM: 195,
      maxEleM: 580,
    },
  },
  {
    code: "ACT30",
    slug: "epic",
    distanceKm: 35,
    elevationM: 650,
    color: "ochre",
    image: "/races/epic.jpeg",
    profile: ALAGEYIK_PROFILE,
    gpx: {
      file: "/routes/act30-alageyik-parkuru.gpx",
      measuredKm: 35.4,
      ascentM: 650,
      minEleM: 200,
      maxEleM: 578,
    },
  },
  {
    code: "ACT12",
    slug: "short",
    distanceKm: 12,
    elevationM: 70,
    color: "moss",
    image: "/races/short.jpeg",
    profile: GUVER_PROFILE,
    gpx: {
      file: "/routes/act12-guver-cliff-trail.gpx",
      measuredKm: 12.1,
      ascentM: 68,
      minEleM: 247,
      maxEleM: 301,
    },
  },
  {
    code: "ACT05",
    slug: "fun",
    distanceKm: 7,
    elevationM: 25,
    color: "shadow",
    image: "/races/fun.jpeg",
    profile: PACE5K_PROFILE,
    gpx: {
      file: "/routes/act05-pace-run.gpx",
      measuredKm: 6.5,
      ascentM: 25,
      minEleM: 275,
      maxEleM: 297,
    },
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2400&q=85";

export const REGISTER_URL = "https://example.com/register";
