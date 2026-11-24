/* Runs after `next build` (static export). GitHub Pages has no server, so the
   locale redirect that next-intl's middleware did on Vercel happens in the
   browser instead:
   - out/index.html: "/" → "/tr/" or "/en/" from the browser language
   - out/404.html:   unprefixed paths ("/kids", "/races/x") → "/<locale>/kids/";
                     anything else shows a small not-found page
   It also writes the custom domain (CNAME) and disables Jekyll. */
import { writeFileSync } from "node:fs";

const OUT = "out";
const DOMAIN = "antalyacanyonultra.com";

const pickLocale = `
  var langs = navigator.languages || [navigator.language || ""];
  var locale = "tr";
  for (var i = 0; i < langs.length; i++) {
    var l = (langs[i] || "").toLowerCase();
    if (l.indexOf("tr") === 0) { locale = "tr"; break; }
    if (l.indexOf("en") === 0) { locale = "en"; break; }
  }`;

const page = (title, script, body) => `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="icon" href="/favicon.ico">
<script>${script}</script>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f4efe6;color:#1b1817;font-family:system-ui,sans-serif;text-align:center}a{color:#c2410c}</style>
</head>
<body>${body}</body>
</html>
`;

writeFileSync(
  `${OUT}/index.html`,
  page(
    "Antalya Canyon Ultra",
    `${pickLocale}
  location.replace("/" + locale + "/" + location.search + location.hash);`,
    `<p><a href="/tr/">Türkçe</a> · <a href="/en/">English</a></p>`,
  ),
);

writeFileSync(
  `${OUT}/404.html`,
  page(
    "Sayfa bulunamadı · Page not found",
    `
  var path = location.pathname;
  if (!/^\\/(tr|en)(\\/|$)/.test(path)) {${pickLocale}
    if (path.slice(-1) !== "/" && !/\\.[a-z0-9]+$/i.test(path)) path += "/";
    location.replace("/" + locale + path + location.search + location.hash);
  }`,
    `<div><h1>404</h1><p>Sayfa bulunamadı · Page not found</p><p><a href="/tr/">Ana sayfa</a> · <a href="/en/">Home</a></p></div>`,
  ),
);

writeFileSync(`${OUT}/CNAME`, `${DOMAIN}\n`);
writeFileSync(`${OUT}/.nojekyll`, "");
console.log("postexport: wrote index.html, 404.html, CNAME, .nojekyll");
