// /STM/serveur.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4242;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Chemin ABSOLU vers la racine du projet STM
const rootDir = path.resolve(__dirname, "..");
const buildPath = path.join(rootDir, "build");

// ✅ Sert les fichiers statiques correctement (images, JS, CSS, fonts, etc.)
app.use(express.static(buildPath));

// ✅ Sert aussi correctement les fichiers dans des sous-chemins (ex: /static/js/...)
app.use((req, res, next) => {
  if (
    req.path.startsWith("/static") ||
    req.path.match(
      /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?|eot|ttf|otf|webm|mp4)$/
    )
  ) {
    return express.static(buildPath)(req, res, next);
  }
  next();
});

// ✅ Renvoie index.html pour toute autre route (React Router SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ STM en ligne sur http://localhost:${port}`);
});
