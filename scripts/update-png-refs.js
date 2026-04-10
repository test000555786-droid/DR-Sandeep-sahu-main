const fs = require('fs');
const path = require('path');

const targets = [
  'components/sections/PatientResourcesGrid.tsx',
  'components/sections/HeroSection.tsx',
  'components/sections/AboutPreview.tsx',
  'data/index.ts',
  'components/layout/Navbar.tsx',
  'app/page.tsx',
  'app/layout.tsx',
  'app/resources/[slug]/page.tsx',
  'app/blogs/page.tsx',
  'app/patient-corner/PatientCornerContent.tsx',
  'app/patient-corner/page.tsx',
  'app/blogs/[slug]/page.tsx',
  'app/about/page.tsx'
];

let totalFiles = 0;

for (const relPath of targets) {
  const filePath = path.resolve(relPath);
  if (!fs.existsSync(filePath)) {
    console.log("SKIP (not found):", relPath);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  
  const regex = /(images\/[-\w]+\.png)/g;
  const nextContent = content.replace(regex, (match) => match.replace('.png', '.webp'));

  // Let's also do a blanket replacement for `.png` just to be sure we get everything like `/logo.png`.
  // Actually, we can just replace /\.png/g with '.webp' because the client wants all .png references replaced!
  
  const finalContent = nextContent.replace(/\.png/g, '.webp');

  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent, "utf8");
    console.log("OK  " + relPath + " updated");
    totalFiles++;
  } else {
    console.log("--  " + relPath + " no changes");
  }
}

console.log("\nDone. " + totalFiles + " files updated.");
