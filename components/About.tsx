import { useTranslations } from "next-intl";
import Image from "next/image";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="info"
      className="relative isolate overflow-hidden border-y border-line bg-bone"
    >
      <Image
        src="/races/about-background.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-bone via-bone/92 to-bone/48"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-bone/30"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
            <span className="float-left mr-3 mt-1 font-display text-7xl leading-none text-ember">
              {t("p1").slice(0, 1)}
            </span>
            {t("p1").slice(1)}
          </p>

          <p className="mt-10 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t("p2")}
          </p>
        </div>
      </div>
    </section>
  );
}
