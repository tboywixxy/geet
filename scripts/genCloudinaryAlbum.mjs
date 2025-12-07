// scripts/genCloudinaryAlbum.mjs
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

// Load from .env
dotenv.config();

// Usage example:
// node scripts/genCloudinaryAlbum.mjs "Eighty5ers/4Q2023 Gathering" "4Q 2023 Gathering"
const folder = process.argv[2];            // e.g. "Eighty5ers/4Q2023 Gathering"
const labelPrefix = process.argv[3] || "Item";

if (!folder) {
  console.error(
    'Usage: node scripts/genCloudinaryAlbum.mjs "<folder>" [labelPrefix]'
  );
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function main() {
  try {
    const res = await cloudinary.search
      // folder may contain images, videos, pdfs, docs, etc.
      .expression(`folder="${folder}"`)
      .sort_by("public_id", "asc")
      .max_results(500)
      .execute();

    const resources = res.resources || [];

    if (resources.length === 0) {
      console.error("No assets found in folder:", folder);
      process.exit(1);
    }

    const CONST_BASE = folder
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toUpperCase();

    const imagesAndVideos = [];
    const docs = [];

    const DOC_FORMATS = ["pdf", "doc", "docx"];

    resources.forEach((r) => {
      const url = r.secure_url;
      const format = (r.format || "").toLowerCase();
      const type = r.resource_type; // "image" | "video" | "raw"

      if (type === "image" || type === "video") {
        imagesAndVideos.push({ url, type });
      } else if (type === "raw" && DOC_FORMATS.includes(format)) {
        docs.push({ url, format, publicId: r.public_id });
      }
    });

    // ----- IMAGES + VIDEOS -----
    console.log(
      `// Gallery items (images + videos) for Cloudinary folder "${folder}"`
    );
    console.log(
      `const ${CONST_BASE}_IMAGES: GalleryItem[] = [`
    );
    imagesAndVideos.forEach((item, index) => {
      const idx = index + 1;
      console.log("  {");
      console.log(`    type: "${item.type === "video" ? "video" : "image"}",`);
      console.log(`    src: "${item.url}",`);
      console.log(`    alt: "${labelPrefix} ${idx}",`);
      console.log(`    label: "${labelPrefix} ${idx}",`);
      console.log("  },");
    });
    console.log("];\n");

    // ----- DOCS (PDF / WORD) -----
    if (docs.length > 0) {
      console.log(
        `// Document items (pdf/doc/docx) for Cloudinary folder "${folder}"`
      );
      console.log(
        `const ${CONST_BASE}_DOCS: AlbumDoc[] = [`
      );
      docs.forEach((doc, index) => {
        const idx = index + 1;
        const niceTitle = `${labelPrefix} Document ${idx}`;
        console.log("  {");
        console.log(`    title: "${niceTitle}",`);
        console.log(`    src: "${doc.url}",`);
        console.log(`    format: "${doc.format}",`);
        console.log("  },");
      });
      console.log("];");
    }
  } catch (err) {
    console.error("Error fetching from Cloudinary:", err);
    process.exit(1);
  }
}

main();
