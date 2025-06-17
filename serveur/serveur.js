// Importe les modules nécessaires
import express from "express"; // Framework pour créer un serveur HTTP
import helmet from "helmet"; // Middleware pour sécuriser les headers HTTP
import compression from "compression"; // Middleware pour compresser les réponses HTTP (gzip)
import morgan from "morgan"; // Middleware pour logger les requêtes HTTP
import fs from "fs"; // Module pour manipuler le système de fichiers
import path from "path"; // Module pour gérer les chemins de fichiers
import { fileURLToPath } from "url"; // Permet d'obtenir __filename dans un module ES

// Initialise l'application Express
const app = express();

// Applique les headers de sécurité via Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [
          "'self'",
          "https://www.google.com",
          "https://www.gstatic.com",
          "https://recaptcha.net",
        ],
        scriptSrc: [
          "'self'",
          "https://www.google.com",
          "https://www.gstatic.com",
          "https://recaptcha.net",
        ],
        frameSrc: [
          "'self'",
          "https://www.google.com",
          "https://www.gstatic.com",
          "https://recaptcha.net",
        ],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "https://www.gstatic.com"],
        connectSrc: [
          "'self'",
          "https://www.google.com",
          "https://www.gstatic.com",
        ],
      },
    },
  })
);

// Active la compression gzip des réponses
app.use(compression());

// Supprime l’en-tête "X-Powered-By" pour éviter de révéler qu’on utilise Express
app.disable("x-powered-by");

// Détermine le chemin du fichier actuel et son répertoire parent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../build"); // Dossier contenant les fichiers front-end à servir

// Prépare un flux d’écriture pour les logs d’accès HTTP
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"), // Fichier log
  { flags: "a" } // 'a' signifie append (ajouter à la fin)
);

// Configure Morgan pour logger toutes les requêtes HTTP dans access.log
app.use(morgan("combined", { stream: accessLogStream }));

// Sert les fichiers statiques (comme le front React) avec un cache de 30 jours
app.use(
  express.static(buildPath, {
    maxAge: "30d", // Cache les fichiers statiques pendant 30 jours
    etag: false, // Désactive les ETags pour éviter les vérifications conditionnelles
  })
);

// Route spéciale pour tester si le serveur est en ligne (utile pour les outils de monitoring)
app.get("/health", (_, res) => res.sendStatus(200));

// Middleware pour afficher build.html si index.html est temporairement indisponible
app.use((req, res, next) => {
  const indexPath = path.join(buildPath, "index.html");
  const buildStatusPath = path.join(buildPath, "build.html");

  if (!fs.existsSync(indexPath) && fs.existsSync(buildStatusPath)) {
    console.log("⚠️ index.html manquant. Affichage de la page de build.");
    return res.sendFile(buildStatusPath);
  }

  next();
});

// Catch-all : redirige toutes les autres routes vers index.html (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Démarre le serveur sur le port défini (variable d’environnement ou 4242 par défaut)
const port = process.env.PORT || 4242;
app.listen(port, "127.0.0.1", () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${port}`);
});
