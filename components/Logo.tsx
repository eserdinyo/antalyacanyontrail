import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  inverted?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

const DIMENSIONS = {
  sm: { box: "h-9 w-9", px: 36 },
  md: { box: "h-11 w-11", px: 44 },
  lg: { box: "h-16 w-16", px: 64 },
};

// "xl" keeps a small footprint in the layout but anchors a larger image
// to the top of its slot so it spills below the header bar.
export function Logo({ inverted = false, size = "md" }: Props) {
  if (size === "xl") {
    return (
      <Link
        href="/"
        className={`group relative block h-full w-20 shrink-0 sm:w-28 lg:w-32 ${
          inverted ? "text-bone" : "text-ink"
        }`}
        aria-label="Antalya Canyon Trail"
      >
        <span className="absolute left-0 top-0 block h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
          <Image
            src="/logo.png"
            alt="Antalya Canyon Trail"
            fill
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 80px"
            priority
            className="object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.32)]"
          />
        </span>
      </Link>
    );
  }

  const d = DIMENSIONS[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${
        inverted ? "text-bone" : "text-ink"
      }`}
      aria-label="Antalya Canyon Trail"
    >
      <span className={`relative block shrink-0 ${d.box}`}>
        <Image
          src="/logo.png"
          alt="Antalya Canyon Trail"
          fill
          sizes={`${d.px}px`}
          priority
          className="object-contain drop-shadow-[0_4px_10px_rgba(27,24,23,0.18)]"
        />
      </span>
    </Link>
  );
}
