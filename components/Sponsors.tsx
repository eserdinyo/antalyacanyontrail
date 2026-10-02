import Image from "next/image";
import { useTranslations } from "next-intl";

/* Public institutions backing the event. Names live in messages under
   Sponsors.institutions.<key> so they can be localised. */
const INSTITUTIONS = [
  { key: "gsb", src: "/logos/gsb.svg", href: "https://gsb.gov.tr" },
  {
    key: "valilik",
    src: "/logos/antalya-valiligi.webp",
    href: "https://antalya.gov.tr",
  },
  { key: "ktb", src: "/logos/ktb.webp", href: "https://antalya.ktb.gov.tr" },
  {
    key: "obm",
    src: "/logos/ogm.webp",
    href: "https://antalyaobm.ogm.gov.tr",
  },
  /* Protocol order: state bodies first, the federation last. */
  { key: "taf", src: "/logos/taf.webp", href: "https://taf.org.tr" },
] as const;

type Sponsor = {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
};

/* Brand names aren't localised, so they live here rather than in messages. */
const MAIN_SPONSORS: Sponsor[] = [
  {
    name: "Zenova Gym",
    src: "/logos/zenova-gym.svg",
    width: 2141,
    height: 654,
    href: "https://www.instagram.com/zenovagym",
  },
];

function SponsorLogo({ name, src, width, height, href }: Sponsor) {
  const logo = (
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
      className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      {logo}
    </a>
  ) : (
    logo
  );
}

function TierHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 label text-ink-soft">
      <span className="block h-1.5 w-1.5 rounded-full bg-ember" />
      {label}
    </div>
  );
}

function Tier({
  label,
  count,
  size = "md",
  sponsors = [],
}: {
  label: string;
  count: number;
  size?: "sm" | "md" | "lg";
  sponsors?: Sponsor[];
}) {
  const t = useTranslations("Sponsors");
  const widthClass =
    size === "lg" ? "w-48" : size === "sm" ? "w-32" : "w-40";

  return (
    <div className="flex flex-col items-center gap-6 border-t border-line pt-10">
      <TierHeading label={label} />
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {sponsors.map((sponsor) => (
          <SponsorLogo key={sponsor.name} {...sponsor} />
        ))}
        {Array.from({ length: count - sponsors.length }).map((_, i) => (
          <div
            key={i}
            className={`${widthClass} flex h-16 items-center justify-center bg-paper text-ink/35 label`}
            style={{ boxShadow: "inset 0 0 0 1px rgba(27,24,23,0.06)" }}
          >
            {t("placeholder")}
          </div>
        ))}
      </div>
    </div>
  );
}

function InstitutionTier({ label }: { label: string }) {
  const t = useTranslations("Sponsors.institutions");

  return (
    <div className="flex flex-col items-center gap-8 border-t border-line pt-10">
      <TierHeading label={label} />
      <ul className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10">
        {INSTITUTIONS.map(({ key, src, href }) => (
          <li key={key} className="w-32 sm:w-36">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 text-center"
            >
              <Image
                src={src}
                alt={t(key)}
                width={400}
                height={400}
                className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
              />
              <span className="label leading-relaxed text-ink-soft">
                {t(key)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Sponsors() {
  const t = useTranslations("Sponsors");

  return (
    <section id="sponsors" className="bg-page py-20 sm:py-28">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-14 px-5 sm:px-8">
        <header className="text-center">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            {t("heading")}
          </h2>
        </header>

        <Tier label={t("title")} count={1} size="lg" />
        <Tier
          label={t("main")}
          count={MAIN_SPONSORS.length}
          size="md"
          sponsors={MAIN_SPONSORS}
        />
        <Tier label={t("co")} count={6} size="sm" />
        <InstitutionTier label={t("official")} />
        <Tier label={t("csr")} count={1} size="md" />
      </div>
    </section>
  );
}
