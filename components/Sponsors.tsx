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
  /* KTB logo is withheld until the directorate approves its use; restore with
     { key: "ktb", src: "/logos/ktb.webp", href: "https://antalya.ktb.gov.tr" } */
  {
    key: "obm",
    src: "/logos/ogm.webp",
    href: "https://antalyaobm.ogm.gov.tr",
  },
  /* Döşemealtı Belediyesi is listed as a main sponsor instead. */
  /* Protocol order: state bodies first, the federation last. */
  { key: "taf", src: "/logos/taf.webp", href: "https://taf.org.tr" },
] as const;

type Sponsor = {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
  /* Height override for logos whose aspect ratio reads badly at h-12. */
  className?: string;
};

/* Brand names aren't localised, so they live here rather than in messages. */
const MAIN_SPONSORS: Sponsor[] = [
  {
    name: "Döşemealtı Belediyesi",
    src: "/logos/dosemealti-belediyesi.webp",
    width: 600,
    height: 600,
    href: "https://www.dosemealti.bel.tr",
    /* Main tier must read larger than any other logo, institutions included. */
    className: "h-28 sm:h-32",
  },
];

const CO_SPONSORS: Sponsor[] = [
  {
    name: "Wodeco",
    src: "/logos/wodeco.svg",
    width: 648,
    height: 64,
    href: "https://www.instagram.com/wodeco",
    /* Wide wordmark: keep it visually level with the other logos. */
    className: "h-4 sm:h-5",
  },
];

const PRODUCT_SPONSORS: Sponsor[] = [
  {
    name: "Gorilla Energy Drink",
    src: "/logos/gorilla-energy.webp",
    width: 1000,
    height: 808,
    href: "https://www.instagram.com/gorillaenergy",
    className: "h-12 sm:h-14",
  },
];

const CSR_PARTNERS: Sponsor[] = [
  {
    name: "Kırmızı Kasklılar Arama Kurtarma",
    src: "/logos/kirmizi-kasklilar.webp",
    width: 600,
    height: 600,
    href: "https://www.kirmizikasklilar.org",
    /* Round badge: match the institution logos' height. */
    className: "h-20 sm:h-24",
  },
];

function SponsorLogo({
  name,
  src,
  width,
  height,
  href,
  className = "h-12",
}: Sponsor) {
  const logo = (
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
      className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
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
        <Tier
          label={t("co")}
          count={6}
          size="sm"
          sponsors={CO_SPONSORS}
        />
        <Tier
          label={t("product")}
          count={PRODUCT_SPONSORS.length}
          size="sm"
          sponsors={PRODUCT_SPONSORS}
        />
        <InstitutionTier label={t("official")} />
        <Tier
          label={t("csr")}
          count={CSR_PARTNERS.length}
          size="md"
          sponsors={CSR_PARTNERS}
        />
      </div>
    </section>
  );
}
