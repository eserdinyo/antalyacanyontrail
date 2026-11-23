import Image from "next/image";
import type { Race } from "@/lib/event";

/* Official UTMB Index category badges (utmb.world). Keyed by the closed
   union on Race.utmbCategory so the map cannot drift out of sync with the
   files in public/logos/. The "_bg" artwork keeps the M in the category
   colour, so it reads on the dark race backgrounds it sits on. */
const BADGE: Record<NonNullable<Race["utmbCategory"]>, string> = {
  "20K": "/logos/utmb-20k.svg",
  "50K": "/logos/utmb-50k.svg",
  "100K": "/logos/utmb-100k.svg",
};

/* Intrinsic artwork is 676.89x218.65 (~3.1:1). Heights match ItraPoints so
   the two badges sit on one baseline. */
const SIZE = {
  sm: { width: 111, height: 36 },
  lg: { width: 186, height: 60 },
};

export function UtmbCategory({
  race,
  size = "sm",
}: {
  race: Race;
  size?: "sm" | "lg";
}) {
  /* Not a UTMB Index course — render nothing. Callers render unconditionally. */
  if (race.utmbCategory === undefined) return null;

  const s = SIZE[size];

  return (
    <Image
      src={BADGE[race.utmbCategory]}
      alt={`UTMB Index ${race.utmbCategory}`}
      width={s.width}
      height={s.height}
      loading={size === "lg" ? "eager" : "lazy"}
      className="h-auto shrink-0 drop-shadow-[0_8px_18px_rgba(27,24,23,0.32)]"
    />
  );
}
