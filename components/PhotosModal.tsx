"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PHOTOS_URL } from "@/lib/event";

export function PhotosModal() {
  const t = useTranslations("PhotosModal");
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photos-modal-title"
    >
      <div
        className="absolute inset-0 bg-shadow-deep/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full max-w-lg rounded-lg bg-bone px-6 pb-9 pt-10 text-center text-ink shadow-[0_40px_120px_rgba(0,0,0,0.45)] animate-[rise_0.5s_cubic-bezier(0.2,0.7,0.2,1)_forwards] sm:px-10">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t("close")}
          className="absolute right-4 top-4 rounded-full p-1.5 text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
        >
          <X size={20} />
        </button>

        <div className="relative mx-auto h-28 w-[92px]">
          <Image
            src="/logo-full.webp"
            alt="Antalya Canyon Ultra"
            fill
            sizes="92px"
            className="object-contain"
            priority
          />
        </div>

        <h2
          id="photos-modal-title"
          className="mt-6 font-display text-2xl uppercase leading-tight sm:text-3xl"
        >
          {t("title")}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
          {t("hashtag")}
          <br />
          {t("body")}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <a
            ref={ctaRef}
            href={PHOTOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-ember px-6 py-2 label-lg text-[13px]! font-black! tracking-[0.1em] text-bone transition-colors hover:bg-shadow-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70 focus-visible:ring-offset-2"
          >
            {t("cta")}
          </a>
          <Link
            href="/photos"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border-2 border-ink/15 px-6 py-2 label-lg text-[13px]! font-black! tracking-[0.1em] text-ink transition-colors hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70 focus-visible:ring-offset-2"
          >
            {t("albums")}
          </Link>
        </div>
      </div>
    </div>
  );
}
