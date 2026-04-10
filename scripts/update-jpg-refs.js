const fs = require("fs");
const path = require("path");

const replacements = [
  ["/images/hero-blogs.jpg",                           "/images/hero-blogs.webp"],
  ["/images/hero-contact.jpg",                         "/images/hero-contact.webp"],
  ["/images/hero-services.jpg",                        "/images/hero-services.webp"],
  ["/images/specializations/diabetes-management.jpg",  "/images/specializations/diabetes-management.webp"],
  ["/images/specializations/growth-disorders.jpg",     "/images/specializations/growth-disorders.webp"],
  ["/images/specializations/metabolism-disorders.jpg", "/images/specializations/metabolism-disorders.webp"],
  ["/images/specializations/obesity-management.jpg",   "/images/specializations/obesity-management.webp"],
  ["/images/specializations/pcod-pcos.jpg",            "/images/specializations/pcod-pcos.webp"],
  ["/images/specializations/thyroid-disorders.jpg",    "/images/specializations/thyroid-disorders.webp"],
  // Fix missing blog image → closest matching existing image
  ["/images/blogs/endocrinologist-signs.jpg",          "/images/specializations/thyroid-disorders.webp"],
];

const targets = [
  "data/index.ts",
  "app/services/[slug]/page.tsx",
  "app/services/page.tsx",
  "app/contact/page.tsx",
  "app/contact/ContactForm.tsx",
  "app/blogs/[slug]/page.tsx",
  "app/blogs/page.tsx",
  "app/about/page.tsx",
  "app/layout.tsx",
  "app/patient-corner/page.tsx",
  "app/patient-corner/PatientCornerContent.tsx",
  "app/resources/[slug]/page.tsx",
];

let totalFiles = 0;

for (const relPath of targets) {
  const filePath = path.resolve(relPath);
  if (!fs.existsSync(filePath)) {
    console.log("SKIP (not found):", relPath);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let changed = 0;

  for (const [from, to] of replacements) {
    // Escape special regex chars
    const escaped = from.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
    const regex = new RegExp(escaped, "g");
    const next = content.replace(regex, to);
    if (next !== content) {
      changed++;
      content = next;
    }
  }

  if (changed > 0) {
    fs.writeFileSync(filePath, content, "utf8");
    const remaining = (content.match(/\.jpg/g) || []).length;
    console.log("OK  " + relPath + "  (" + changed + " patterns, " + remaining + " .jpg remaining)");
    totalFiles++;
  } else {
    console.log("--  " + relPath + "  (no .jpg refs)");
  }
}

console.log("\nDone. " + totalFiles + " files updated.");
