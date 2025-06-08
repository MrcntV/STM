import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOST = "https://stm-nettoyage.fr";
const SITEMAP = `${HOST}/sitemap.xml`;

const robotsTxt = `
User-agent: *
Allow: /

Host: ${HOST}
Sitemap: ${SITEMAP}
`.trim();

writeFileSync(resolve(__dirname, "public", "robots.txt"), robotsTxt);
console.log("✅ robots.txt généré automatiquement dans /public/robots.txt");
