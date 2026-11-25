/**
 * Writes public/sitemap.xml (run before build or via npm run generate:sitemap).
 * Set VITE_SITE_URL in .env to your production domain.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

dotenv.config({ path: path.join(root, ".env") });

const siteUrl = (
  process.env.VITE_SITE_URL?.trim() || "https://shivanshu.shop"
).replace(/\/$/, "");

const routes = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/experience", changefreq: "monthly", priority: "0.8" },
  { loc: "/projects", changefreq: "weekly", priority: "0.9" },
  { loc: "/skills", changefreq: "monthly", priority: "0.7" },
  { loc: "/contact", changefreq: "monthly", priority: "0.8" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const body = routes
  .map(
    (r) => `  <url>
    <loc>${siteUrl}${r.loc === "/" ? "/" : r.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const outDir = path.join(root, "public");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
fs.writeFileSync(
  path.join(outDir, "robots.txt"),
  fs
    .readFileSync(path.join(outDir, "robots.txt"), "utf8")
    .replace(/Sitemap: .+/m, `Sitemap: ${siteUrl}/sitemap.xml`),
);

console.log(`sitemap.xml → ${siteUrl} (${routes.length} URLs)`);