import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4242;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Chemin vers le dossier racine STM
const rootDir = path.resolve(__dirname, "..");
const buildPath = path.join(rootDir, "build");

// ✅ Sert les assets statiques générés par React (JS, CSS, images...)
app.use("/static", express.static(path.join(buildPath, "static")));
app.use(
  "/manifest.json",
  express.static(path.join(buildPath, "manifest.json"))
);
app.use("/logo192.png", express.static(path.join(buildPath, "logo192.png")));
app.use("/favicon.ico", express.static(path.join(buildPath, "favicon.ico")));

// ✅ Toutes les autres routes → index.html (React Router SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ STM en ligne sur http://localhost:${port}`);
});
