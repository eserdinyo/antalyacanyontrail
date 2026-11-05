import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  /* Only run on paths WITHOUT a locale prefix ("/", "/kids", …) so they get
     redirected to "/tr/…" or "/en/…". Already-localised paths are prerendered
     and served straight from the CDN; running the proxy on them (including
     every Link prefetch) was burning Vercel function invocations and CPU. */
  matcher: "/((?!api|trpc|_next|_vercel|(?:tr|en)(?:/|$)|.*\\..*).*)",
};
