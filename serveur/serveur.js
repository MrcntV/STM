// /STM/serveur/serveur.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4242;

// ✅ Récupération des chemins en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Chemin vers le dossier build
const buildPath = path.join(__dirname, "../build");

// ✅ Middleware JSON + log des requêtes
app.use(express.json());
app.use((req, res, next) => {
  console.log(`📥 [${req.method}] ${req.url}`);
  next();
});

// ✅ Fallback React Router SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ✅ Démarrage du serveur
app.listen(port, () => {
  console.log(`✅ STM en ligne sur http://localhost:${port}`);
});
