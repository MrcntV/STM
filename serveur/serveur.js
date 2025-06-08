require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// ✅ Configuration
const PORT = process.env.PORT_STANDARD || 4242;
const buildPath = path.join(__dirname, "../build");

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Logs simples
app.use((req, res, next) => {
  console.log(`📥 [${req.method}] ${req.url}`);
  next();
});

// ✅ Sert les fichiers statiques (React)
app.use("/static", express.static(path.join(buildPath, "static")));
app.use("/favicon.ico", express.static(path.join(buildPath, "favicon.ico")));
app.use(
  "/manifest.json",
  express.static(path.join(buildPath, "manifest.json"))
);
app.use("/logo192.png", express.static(path.join(buildPath, "logo192.png")));

// ✅ Fallback vers index.html (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ✅ Démarrage serveur HTTP
app.listen(PORT, () => {
  console.log(`✅ STM lancé sur le port ${PORT}`);
});
