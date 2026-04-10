const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.resolve('public/images');

function getAllPngs(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(getAllPngs(fullPath));
    else if (entry.isFile() && /\.(png)$/i.test(entry.name)) results.push(fullPath);
  }
  return results;
}

async function run() {
  const files = getAllPngs(INPUT_DIR);
  console.log('Found ' + files.length + ' .png files');
  
  for (const src of files) {
    const dest = src.replace(/\.(png)$/i, '.webp');
    // Using near-lossless or high quality for PNG replacements to preserve UI crispness
    await sharp(src).webp({ quality: 90, effort: 6 }).toFile(dest);
    
    const s1 = (fs.statSync(src).size/1024).toFixed(1);
    const s2 = (fs.statSync(dest).size/1024).toFixed(1);
    const pct = (((s1-s2)/s1)*100).toFixed(0);
    console.log('OK  ' + path.relative(INPUT_DIR, src) + '  ' + s1 + 'KB -> ' + s2 + 'KB  (-' + pct + '%)');
  }
  console.log('Conversion complete. Originals kept.');
}

run().catch(console.error);
