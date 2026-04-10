const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "public", "images");

function getAllJpgs(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllJpgs(fullPath));
    } else if (entry.isFile() && /\.(jpg|jpeg)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convert() {
  const jpgFiles = getAllJpgs(INPUT_DIR);
  console.log(`Found ${jpgFiles.length} .jpg files to convert:\n`);

  for (const srcPath of jpgFiles) {
    const destPath = srcPath.replace(/\.(jpg|jpeg)$/i, ".webp");
    try {
      await sharp(srcPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);
      const srcSize = (fs.statSync(srcPath).size / 1024).toFixed(1);
      const destSize = (fs.statSync(destPath).size / 1024).toFixed(1);
      const saving = (((srcSize - destSize) / srcSize) * 100).toFixed(0);
      console.log(`✅  ${path.relative(INPUT_DIR, srcPath)}`);
      console.log(`    ${srcSize}KB → ${destSize}KB  (saved ${saving}%)\n`);
    } catch (err) {
      console.error(`❌  FAILED: ${srcPath}`, err.message);
    }
  }
  console.log("Conversion complete. Original .jpg files kept as backup.");
}

convert();
