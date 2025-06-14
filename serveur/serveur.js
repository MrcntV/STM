import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(helmet());
app.disable("x-powered-by");
const port = 4242;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../build");

app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, "127.0.0.1", () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${port}`);
});
