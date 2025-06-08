import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const today = new Date().toISOString().split("T")[0];

const content = `
/* TEAM */
Developer: Vincent-Nicolas Marconnet
Site: https://stm-nettoyage.fr
Contact: contact@stm-nettoyage.fr
From: Saint-Étienne, France

/* SITE */
Last update: ${today}
Made with: React + TypeScript, Framer Motion
Hosted on: Hostinger

/* THANKS */
Thanks to our clients for their trust.
Respect for clean code and clean spaces 🧼
`.trim();

writeFileSync(resolve(__dirname, "public", "humans.txt"), content);
console.log("✅ humans.txt généré dans /public/humans.txt");
