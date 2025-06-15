import express from "express";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(helmet());
app.use(compression());
app.disable("x-powered-by");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../build");

// Logs HTTP
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

// Serve fichiers statiques avec cache long
app.use(
  express.static(buildPath, {
    maxAge: "30d",
    etag: false,
  })
);

// Endpoint de santé
app.get("/health", (_, res) => res.sendStatus(200));

// Catch-all
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const port = process.env.PORT || 4242;
app.listen(port, "127.0.0.1", () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${port}`);
});
