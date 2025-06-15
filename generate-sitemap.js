import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = "https://stm-nettoyage.fr";
const today = new Date().toISOString().split("T")[0];

// Ajout des fréquences de mise à jour
const staticRoutes = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/services-particuliers", priority: "0.90", changefreq: "monthly" },
  { path: "/services-professionnels", priority: "0.90", changefreq: "monthly" },
  { path: "/services-coproprietes", priority: "0.90", changefreq: "monthly" },
  { path: "/contact", priority: "0.80", changefreq: "monthly" },
  { path: "/mentions-legales", priority: "0.40", changefreq: "yearly" },
  {
    path: "/politique-de-confidentialite",
    priority: "0.40",
    changefreq: "yearly",
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(__dirname, "public", "sitemap.xml"), sitemap.trim());
console.log(
  "✅ Sitemap généré avec <lastmod>, <changefreq> et <priority> dans /public/sitemap.xml"
);
