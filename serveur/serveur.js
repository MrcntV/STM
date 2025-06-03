import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4242;

// Dossier des fichiers buildés
const staticPath = path.join(__dirname, "../build");

app.use(express.static(staticPath));

// Redirection SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`SPA disponible sur http://localhost:${PORT}`);
});
