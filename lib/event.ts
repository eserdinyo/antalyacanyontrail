export const EVENT_DATE = new Date("2026-11-13T07:00:00+03:00");

export const EVENT_COORDS = {
  lat: "36°53′29″N",
  lng: "30°42′48″E",
  place: "Antalya · Türkiye",
};

export const EDITION = "I";

export type RaceColor = "ember-deep" | "ember" | "ochre" | "moss" | "shadow";

export type Race = {
  code: string;
  slug: "ultra" | "marathon" | "epic" | "short" | "fun";
  distanceKm: number;
  elevationM: number;
  color: RaceColor;
  image: string;
  /* relative elevation profile, 0..1 array, length ~16, for SVG decoration */
  profile: number[];
};

const HARD_PROFILE = [
  0.08, 0.18, 0.3, 0.5, 0.42, 0.7, 0.82, 0.95, 0.78, 0.86, 0.62, 0.4, 0.55, 0.32, 0.2, 0.05,
];
const MED_PROFILE = [
  0.1, 0.3, 0.48, 0.4, 0.62, 0.75, 0.55, 0.7, 0.45, 0.55, 0.35, 0.25, 0.15, 0.1, 0.05, 0.02,
];
const HILL_PROFILE = [
  0.1, 0.25, 0.4, 0.55, 0.7, 0.65, 0.5, 0.45, 0.35, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05, 0.02,
];
const ROLL_PROFILE = [
  0.1, 0.25, 0.18, 0.32, 0.42, 0.3, 0.4, 0.28, 0.32, 0.2, 0.15, 0.1, 0.08, 0.05, 0.04, 0.02,
];
const FLAT_PROFILE = [
  0.05, 0.1, 0.12, 0.14, 0.18, 0.16, 0.14, 0.12, 0.1, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02,
];

export const RACES: Race[] = [
  {
    code: "ACT70",
    slug: "ultra",
    distanceKm: 70,
    elevationM: 3500,
    color: "ember-deep",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    profile: HARD_PROFILE,
  },
  {
    code: "ACT45",
    slug: "marathon",
    distanceKm: 45,
    elevationM: 2200,
    color: "ember",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
    profile: MED_PROFILE,
  },
  {
    code: "ACT30",
    slug: "epic",
    distanceKm: 30,
    elevationM: 1500,
    color: "ochre",
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1200&q=80",
    profile: HILL_PROFILE,
  },
  {
    code: "ACT12",
    slug: "short",
    distanceKm: 12,
    elevationM: 500,
    color: "moss",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&q=80",
    profile: ROLL_PROFILE,
  },
  {
    code: "ACT05",
    slug: "fun",
    distanceKm: 5,
    elevationM: 200,
    color: "shadow",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?w=1200&q=80",
    profile: FLAT_PROFILE,
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2400&q=85";

export const REGISTER_URL = "https://example.com/register";
