// resize-images.js (ESM-compatible)
import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./public/images/services"; // Mettre le chemiin d'entrée
const outputFolder = "./public/images/services/images-optimized"; // Mettre le chemiin de sortie
const widths = [400, 800, 1200];

const processImage = async (filePath) => {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);

  for (const width of widths) {
    const outputPath = path.join(outputFolder, `${baseName}-${width}.webp`);
    await sharp(filePath)
      .resize(width)
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log(`✅ Generated ${outputPath}`);
  }
};

const walkAndProcess = async () => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const files = fs.readdirSync(inputFolder);
  for (const file of files) {
    const fullPath = path.join(inputFolder, file);
    if (path.extname(file).toLowerCase() === ".png") {
      await processImage(fullPath);
    }
  }
};

walkAndProcess();
