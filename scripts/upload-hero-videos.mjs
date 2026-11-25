/**
 * One-off: upload public/hero-*.mp4 to Cloudinary (folder from CLOUDINARY_FOLDER).
 * Run: node scripts/upload-hero-videos.mjs
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

dotenv.config({ path: path.join(root, ".env") });

const folder = process.env.CLOUDINARY_FOLDER || "twinklingz";
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

cloudinary.config({
  cloud_name: cloudName,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function deliveryUrl(publicId) {
  return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto:good,vc_auto/${folder}/${publicId}`;
}

const uploads = [
  { file: "hero-1.mp4", publicId: "hero-1" },
  { file: "hero-2.mp4", publicId: "hero-2" },
];

const urls = {};

for (const { file, publicId } of uploads) {
  const filePath = path.join(root, "public", file);
  const result = await cloudinary.uploader.upload(filePath, {
    resource_type: "video",
    folder,
    public_id: publicId,
    overwrite: true,
    invalidate: true,
  });
  urls[publicId] = deliveryUrl(publicId);
  console.log(`${publicId}: ${result.secure_url}`);
  console.log(`  optimized: ${urls[publicId]}`);
}

console.log("\nAdd to .env (Vite):");
console.log(`VITE_HERO_VIDEO_1=${urls["hero-1"]}`);
console.log(`VITE_HERO_VIDEO_2=${urls["hero-2"]}`);