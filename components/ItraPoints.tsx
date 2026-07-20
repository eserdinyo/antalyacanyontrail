import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Race } from "@/lib/event";

/* Official ITRA badges — one per point tier, colour mandated by ITRA.
   Keyed by the closed union on Race.itraPoints so the map cannot drift
   out of sync with the files in public/logos/. */
const BADGE: Record<NonNullable<Race["itraPoints"]>, string> = {
  1: "/logos/itra-1.svg",
  2: "/logos/itra-2.svg",
  3: "/logos/itra-3.svg",
};

/* Intrinsic artwork is 77x45. The lg figure is a quarter of the area of
   RaceBadge size="lg" at its sm: breakpoint and above (sm:w-36 sm:h-[170px]),
   kept at the same 77:45 ratio. */
const SIZE = {
  sm: { width: 77, height: 45 },
  lg: { width: 102, height: 60 },
};

export function ItraPoints({
  race,
  size = "sm",
}: {
  race: Race;
  size?: "sm" | "lg";
}) {
  const t = useTranslations("Races");

  /* Not an ITRA-scored course — render nothing. Callers render unconditionally. */
  if (race.itraPoints === undefined) return null;

  const s = SIZE[size];

  return (
    <Image
      src={BADGE[race.itraPoints]}
      alt={`ITRA ${race.itraPoints} ${t("itraPoints")}`}
      width={s.width}
      height={s.height}
      loading={size === "lg" ? "eager" : "lazy"}
      className="h-auto shrink-0 drop-shadow-[0_8px_18px_rgba(27,24,23,0.32)]"
    />
  );
}
