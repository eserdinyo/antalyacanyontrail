"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { REGISTER_URL } from "@/lib/event";

const VOLUNTEER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-NoaQh_s7cwPzwmL8eAlw_CiBxKVolxMpjs7g3YFHhEMKew/viewform?usp=publish-editor";

type NavLink = {
  label: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  tone?: "outline" | "solid";
};

type NavItem = NavLink & {
  items?: NavLink[];
};

export function Header() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const nav: NavItem[] = [
    { href: "/#dates", label: t("dates"), tone: "outline" },
    { href: REGISTER_URL, label: t("register"), external: true, tone: "solid" },
    {
      label: t("courses"),
      items: [
        { href: "/races/my-pace-run", label: t("course7") },
        { href: "/races/guver-cliff-trail", label: t("course13") },
        { href: "/races/alageyik-trail", label: t("course35") },
        { href: "/races/antalya-goat-ultra", label: t("course45") },
        { href: "/races/antalya-termessos-ultra", label: t("course70") },
      ],
    },
    {
      label: t("raceInfo"),
      items: [
        { href: REGISTER_URL, label: t("registerMenu"), external: true },
        { href: "/event-program", label: t("program") },
        { href: "/race-rules", label: t("rulesMenu") },
        { label: t("transport"), disabled: true },
        { label: t("results"), disabled: true },
      ],
    },
    {
      label: t("media"),
      items: [
        { label: t("photos"), disabled: true },
        { label: t("videos"), disabled: true },
        { label: t("press"), disabled: true },
      ],
    },
    { href: VOLUNTEER_URL, label: t("volunteer"), external: true },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-[#F8F2EC]/95 backdrop-blur"
          : "border-b border-transparent bg-[#F8F2EC]"
      }`}
    >
      <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <Logo size="xl" />

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitcher />
          <button
            type="button"
            className="rounded-md p-2 text-ink lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[60] min-h-dvh overflow-hidden lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-shadow/60"
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-y-0 right-0 flex h-dvh w-full max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-line bg-[#F8F2EC] transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[100px] items-center justify-between border-b border-line px-5">
            <Logo size="xl" />
            <button
              type="button"
              className="rounded-md p-2 text-ink"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-10 flex-1">
            {nav.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>
          <div className="px-8 pb-8">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (item.items) {
    return (
      <div className="group relative flex items-center">
        <button
          type="button"
          className="inline-flex h-11 items-center gap-1.5 px-3 label text-[12px]! font-bold! text-ink/85 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
          aria-haspopup="menu"
        >
          {item.label}
          <ChevronDown
            size={13}
            strokeWidth={2.4}
            aria-hidden
            className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          />
        </button>
        <div className="pointer-events-none absolute left-1/2 top-full min-w-64 -translate-x-1/2 translate-y-2 border border-line bg-bone/98 p-2 opacity-0 shadow-[0_24px_60px_rgba(45,39,36,0.18)] backdrop-blur transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-line bg-bone" />
          <div className="relative grid gap-1">
            {item.items.map((subItem) => (
              <NavLinkView key={subItem.label} item={subItem} variant="desktop" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <NavLinkView item={item} variant="top" />;
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (item.items) {
    return (
      <div className="border-b border-line/70 pb-5">
        <p className="label-lg text-[12px]! font-bold! uppercase tracking-widest text-ink">
          {item.label}
        </p>
        <div className="mt-4 grid gap-3 pl-4">
          {item.items.map((subItem) => (
            <NavLinkView
              key={subItem.label}
              item={subItem}
              variant="mobile"
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    );
  }

  return <NavLinkView item={item} variant="mobileTop" onNavigate={onNavigate} />;
}

function NavLinkView({
  item,
  variant,
  onNavigate,
}: {
  item: NavLink;
  variant: "top" | "desktop" | "mobile" | "mobileTop";
  onNavigate?: () => void;
}) {
  const topClass =
    item.tone === "outline"
      ? "inline-flex h-11 items-center border-2 border-[#071d3b] px-5 label-lg text-[15px]! font-black! tracking-[0.08em] text-[#071d3b] transition-colors hover:bg-[#071d3b] hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
      : item.tone === "solid"
        ? "inline-flex h-11 items-center border-2 border-[#071d3b] bg-[#071d3b] px-5 label-lg text-[15px]! font-black! tracking-[0.08em] text-bone shadow-[0_10px_24px_rgba(7,29,59,0.24)] transition-colors hover:border-ember hover:bg-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
        : "inline-flex h-11 items-center px-3 label text-[12px]! font-bold! text-ink/85 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70";
  const desktopClass =
    "block px-4 py-3 text-sm font-bold tracking-wide text-ink-soft transition-colors hover:bg-paper hover:text-ink focus-visible:bg-paper focus-visible:text-ink focus-visible:outline-none";
  const mobileClass =
    "text-sm font-bold tracking-wide text-ink-soft transition-colors hover:text-ink";
  const mobileTopClass =
    item.tone === "outline"
      ? "inline-flex items-center justify-center border-2 border-[#071d3b] px-5 py-3 label-lg text-[14px]! font-black! uppercase tracking-[0.08em] text-[#071d3b]"
      : item.tone === "solid"
        ? "inline-flex items-center justify-center border-2 border-[#071d3b] bg-[#071d3b] px-5 py-3 label-lg text-[14px]! font-black! uppercase tracking-[0.08em] text-bone"
        : "label-lg text-[12px]! font-bold! uppercase tracking-widest text-ink";
  const disabledClass =
    variant === "top" || variant === "mobileTop"
      ? "inline-flex h-11 items-center px-3 label text-[12px]! font-bold! text-ink/35"
      : variant === "desktop"
        ? "block px-4 py-3 text-sm font-bold tracking-wide text-ink-soft/45"
        : "text-sm font-bold tracking-wide text-ink-soft/45";
  const className =
    variant === "top"
      ? topClass
      : variant === "desktop"
        ? desktopClass
        : variant === "mobileTop"
          ? mobileTopClass
          : mobileClass;

  if (item.disabled || !item.href) {
    return (
      <span className={disabledClass} aria-disabled="true">
        {item.label}
      </span>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {item.label}
    </Link>
  );
}
