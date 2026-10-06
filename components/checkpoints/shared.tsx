import type { getTranslations } from "next-intl/server";
import {
  Backpack,
  Banana,
  Bus,
  Cross,
  Droplet,
  type LucideIcon,
} from "lucide-react";

import type { Checkpoint, CheckpointService } from "@/lib/event";

export type RaceDetailT = Awaited<
  ReturnType<typeof getTranslations<"RaceDetail">>
>;

const SERVICE_ICON: Record<CheckpointService, LucideIcon> = {
  water: Droplet,
  food: Banana,
  medical: Cross,
  shuttle: Bus,
  dropBag: Backpack,
};

const SERVICE_KEY = {
  water: "serviceWater",
  food: "serviceFood",
  medical: "serviceMedical",
  shuttle: "serviceShuttle",
  dropBag: "serviceDropBag",
} as const satisfies Record<CheckpointService, string>;

const SERVICES = Object.keys(SERVICE_ICON) as CheckpointService[];

export type Leg = { km: number; upM: number; downM: number };

/* The leg from checkpoint i to checkpoint i + 1; undefined at the finish. */
export function legAfter(cps: Checkpoint[], i: number): Leg | undefined {
  const a = cps[i];
  const b = cps[i + 1];
  if (!b) return undefined;
  return {
    km: b.km - a.km,
    upM: b.ascentM - a.ascentM,
    downM: b.descentM - a.descentM,
  };
}

export function cpName(cp: Checkpoint, td: RaceDetailT) {
  if (cp.code === "START") return td("cpStart");
  if (cp.code === "FINISH") return td("cpFinish");
  return cp.name ?? cp.code;
}

export const fmtKm = (km: number) => km.toFixed(2).replace(/\.?0+$/, "");

export function ServiceIcons({
  services,
  td,
  className = "",
  size = 16,
}: {
  services: CheckpointService[];
  td: RaceDetailT;
  className?: string;
  size?: number;
}) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {services.map((s) => {
        const Icon = SERVICE_ICON[s];
        return (
          <li key={s} title={td(SERVICE_KEY[s])}>
            <Icon size={size} strokeWidth={1.8} aria-hidden />
            <span className="sr-only">{td(SERVICE_KEY[s])}</span>
          </li>
        );
      })}
    </ul>
  );
}

/* Lists only the services offered somewhere on this course. */
export function ServiceLegend({
  checkpoints,
  td,
  className = "",
}: {
  checkpoints: Checkpoint[];
  td: RaceDetailT;
  className?: string;
}) {
  const used = SERVICES.filter((s) =>
    checkpoints.some((cp) => cp.services.includes(s)),
  );

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {used.map((s) => {
        const Icon = SERVICE_ICON[s];
        return (
          <li key={s} className="inline-flex items-center gap-2 text-sm">
            <Icon size={15} strokeWidth={1.8} aria-hidden />
            {td(SERVICE_KEY[s])}
          </li>
        );
      })}
    </ul>
  );
}
