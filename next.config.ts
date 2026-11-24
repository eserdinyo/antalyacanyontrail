import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/* Static export for GitHub Pages: every route is prerendered to HTML at build
   time and served as plain files. There is no server, so:
   - images are served as-is (no image optimizer), and
   - the "/" → "/tr" | "/en" redirect that proxy.ts used to do lives in
     scripts/postexport.mjs (out/index.html and out/404.html). */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
