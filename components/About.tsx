import { useTranslations } from "next-intl";
import Image from "next/image";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="info" className="relative isolate overflow-hidden bg-page">
      <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[42%] lg:-z-30 lg:aspect-auto">
        <Image
          src="/races/about-canyon-runners.jpeg"
          alt=""
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[28%_center] sm:object-[center_62%] lg:object-[40%_75%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent from-65% via-page/80 via-88% to-page lg:hidden"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-20 hidden bg-gradient-to-r from-page from-48% via-page/80 via-56% to-transparent to-68% lg:block"
      />

      <div className="relative mx-auto -mt-16 max-w-[1400px] px-5 pb-16 sm:-mt-12 sm:px-8 sm:pb-20 lg:mt-0 lg:py-28">
        <div className="max-w-3xl lg:max-w-2xl">
          <p className="font-display text-[28px] leading-[1.15] text-ink sm:text-3xl lg:leading-snug">
            {t("p1")}
          </p>

          <div className="mt-8 h-px w-16 bg-ember lg:hidden" />

          <p className="mt-8 text-base leading-relaxed text-ink-soft sm:text-lg lg:mt-10">
            {t("p2")}
          </p>
        </div>
      </div>
    </section>
  );
}
