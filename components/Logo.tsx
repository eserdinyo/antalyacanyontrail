import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  inverted?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

// Full lockup is 800x975 (aspect ~0.82), boxes match to avoid letterboxing
const DIMENSIONS = {
  sm: { box: "h-12 w-[39px]", px: 39 },
  md: { box: "h-16 w-[53px]", px: 53 },
  lg: { box: "h-44 w-[144px]", px: 144 },
};

export function Logo({ inverted = false, size = "md" }: Props) {
  const src = inverted ? "/logo-full-reversed.webp" : "/logo-full.webp";

  if (size === "xl") {
    return (
      <Link
        href="/"
        className={`group flex h-full w-[60px] shrink-0 items-center py-3.5 ${
          inverted ? "text-bone" : "text-ink"
        }`}
        aria-label="Antalya Canyon Ultra"
      >
        <span className="relative block h-full w-full overflow-hidden">
          <Image
            src={src}
            alt="Antalya Canyon Ultra"
            fill
            sizes="60px"
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
      aria-label="Antalya Canyon Ultra"
    >
      <span className={`relative block shrink-0 ${d.box}`}>
        <Image
          src={src}
          alt="Antalya Canyon Ultra"
          fill
          sizes={`${d.px}px`}
          priority
          className="object-contain"
        />
      </span>
    </Link>
  );
}
