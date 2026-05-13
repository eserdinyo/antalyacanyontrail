import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);
const UNLOCK_COOKIE = "site-unlock";
const LOCALE_PATTERN = /^\/(tr|en)(\/|$)/;
const UNLOCK_PATTERN = /^\/(tr|en)\/unlock(\/|$)/;

async function expectedToken(): Promise<string | null> {
  const pw = process.env.SITE_PASSWORD;
  if (!pw) return null;
  const data = new TextEncoder().encode(`${pw}::antalyacanyontrail::v1`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function pickLocale(pathname: string): string {
  const m = pathname.match(LOCALE_PATTERN);
  return m ? m[1] : routing.defaultLocale;
}

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow the unlock page itself (handles both GET render and POST action)
  if (UNLOCK_PATTERN.test(pathname)) {
    return intl(req);
  }

  const expected = await expectedToken();
  // No password configured → site open
  if (!expected) return intl(req);

  const token = req.cookies.get(UNLOCK_COOKIE)?.value;
  if (token === expected) return intl(req);

  // Locked → bounce to /<locale>/unlock with the original path preserved
  const locale = pickLocale(pathname);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}/unlock`;
  url.search = "";
  url.searchParams.set("from", pathname || "/");
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
