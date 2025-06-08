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

// 👉 Sert les fichiers statiques React
app.use(express.static(path.join(rootDir, "build")));

// 👉 Renvoie index.html pour toute autre route (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`✅ STM en ligne sur http://localhost:${port}`);
});
