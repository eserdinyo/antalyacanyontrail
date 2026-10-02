"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { EVENT_DATE } from "@/lib/event";

function diff(target: Date, now: Date) {
  let months = 0;
  const cursor = new Date(now);
  while (true) {
    const next = new Date(cursor);
    next.setMonth(next.getMonth() + 1);
    if (next <= target) {
      months += 1;
      cursor.setTime(next.getTime());
    } else break;
  }
  const ms = Math.max(0, target.getTime() - cursor.getTime());
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86_400);
  const hours = Math.floor((totalSec % 86_400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { months, days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown() {
  const t = useTranslations("Countdown");
  const [parts, setParts] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const tick = () => setParts(diff(EVENT_DATE, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { label: t("months"), value: parts ? String(parts.months) : "—" },
    { label: t("days"), value: parts ? String(parts.days) : "—" },
    { label: t("hours"), value: parts ? pad(parts.hours) : "—" },
    { label: t("minutes"), value: parts ? pad(parts.minutes) : "—" },
    { label: t("seconds"), value: parts ? pad(parts.seconds) : "—" },
  ];

  return (
    <section id="dates" className="relative scroll-mt-16 overflow-hidden bg-shadow-deep text-bone">
      {/* topographic dot pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-topo"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5">
          {cells.map((c) => (
            <div
              key={c.label}
              className="relative flex flex-col items-start"
            >
              <span className="numeral text-[18vw] leading-[0.85] sm:text-[8vw] lg:text-[7rem]">
                {c.value}
              </span>
              <span className="mt-3 label text-ember">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
