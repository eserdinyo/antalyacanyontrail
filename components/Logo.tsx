import { Link } from "@/i18n/navigation";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const stroke = inverted ? "var(--bone)" : "var(--ink)";
  const accent = "var(--ember)";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${
        inverted ? "text-bone" : "text-ink"
      }`}
      aria-label="Antalya Canyon Trail"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="24" cy="24" r="22.5" stroke={stroke} strokeWidth="1" />
        <path
          d="M9 33 L18 19 L23 25 L29 14 L36 23 L39 20"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="29" cy="14" r="1.8" fill={accent} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="label opacity-70">ANTALYA</span>
        <span className="font-display text-[15px] tracking-tight">
          Canyon Trail
        </span>
      </span>
    </Link>
  );
}
