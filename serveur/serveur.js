// /STM/serveur.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4242;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 Sert les fichiers statiques React
app.use(express.static(path.join(__dirname, "build")));

// 👉 Renvoie index.html pour toute autre route (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`✅ STM en ligne sur http://localhost:${port}`);
});
