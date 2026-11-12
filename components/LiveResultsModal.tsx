"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, X } from "lucide-react";

export const LIVE_RESULTS_URL = "https://www.passtiming.org/canyon_ultra_2026";

export function LiveResultsModal() {
  const t = useTranslations("LiveResults");
  const [open, setOpen] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Rendered on the home page only; opens on every visit.
  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ctaRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="live-results-title"
    >
      <div
        className="absolute inset-0 bg-shadow-deep/75 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full max-w-md overflow-hidden bg-shadow-deep text-bone shadow-[0_40px_120px_rgba(0,0,0,0.55)] animate-[rise_0.5s_cubic-bezier(0.2,0.7,0.2,1)_forwards]">
        <div className="relative h-44 sm:h-52">
          <Image
            src="/races/hero.jpeg"
            alt=""
            fill
            sizes="448px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-shadow-deep/10 via-shadow-deep/30 to-shadow-deep" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 bg-ember px-3 py-1.5 label text-[11px]! font-bold! text-bone">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bone opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-bone" />
            </span>
            {t("badge")}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("close")}
            className="absolute right-3 top-3 rounded-full bg-shadow-deep/60 p-2 text-bone/90 transition-colors hover:bg-shadow-deep hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-6 pt-1 sm:px-8 sm:pb-8">
          <p className="label-lg text-ember">{t("kicker")}</p>
          <h2
            id="live-results-title"
            className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-bone/75">
            {t("body")}
          </p>

          <a
            ref={ctaRef}
            href={LIVE_RESULTS_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-ember label-lg text-[13px]! font-black! tracking-[0.12em] text-bone transition-colors hover:bg-bone hover:text-shadow-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone/70"
          >
            {t("cta")}
            <ArrowUpRight size={17} strokeWidth={2.6} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 w-full py-2 label text-[11px]! text-bone/55 transition-colors hover:text-bone"
          >
            {t("dismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
