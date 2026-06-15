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

export function Logo({ inverted = false, size = "md" }: Props) {
  if (size === "xl") {
    return (
      <Link
        href="/"
        className={`group relative block h-full w-[100px] shrink-0 ${
          inverted ? "text-bone" : "text-ink"
        }`}
        aria-label="Antalya Canyon Trail"
      >
        <span className="relative block h-full w-full overflow-hidden">
          <Image
            src="/logo.webp"
            alt="Antalya Canyon Trail"
            fill
            sizes="100px"
            priority
            className="object-contain"
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
          src="/logo.webp"
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
