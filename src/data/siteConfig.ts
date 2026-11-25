/** Production domain (also set VITE_SITE_URL in .env for builds) */
export const SITE_ORIGIN = "https://shivanshu.shop";

/** Public site identity — used for SEO, JSON-LD, and social previews */
export const SITE = {
  name: "Shivanshu Nigam",
  website: SITE_ORIGIN,
  shortTitle: "Full Stack Developer Shivanshu Nigam",
  defaultTitle:
    "Hire Full Stack Developer | Software, Frontend & Backend — Shivanshu Nigam",
  tagline:
    "Full-stack web apps, WhatsApp business automations, AWS & DevOps, and technical solutions that help startups and businesses in every sector grow—with stronger digital and social visibility.",
  defaultDescription:
    "Hire Shivanshu Nigam — full stack developer, software developer, frontend & backend developer in Ahmedabad, India. React, Next.js, Node.js, AWS, DevOps, WhatsApp automations for startups and all sectors.",
  keywords: [
    "Shivanshu Nigam",
    "hire full stack developer",
    "full stack developer India",
    "full stack developer Ahmedabad",
    "software developer India",
    "software developer Ahmedabad",
    "frontend developer India",
    "frontend developer React",
    "backend developer Node.js",
    "backend developer India",
    "remote full stack developer",
    "freelance software developer",
    "WhatsApp business automation",
    "AWS deployment developer",
    "DevOps engineer India",
    "React developer hire",
    "Next.js developer",
    "Node.js developer",
    "n8n automation",
    "startup software developer",
  ],
  locale: "en_IN",
  email: "shivanshunigam8@gmail.com",
  phone: "+917247650665",
  city: "Ahmedabad",
  country: "India",
  github: "https://github.com/shivanshunigam",
  linkedin: "https://linkedin.com/in/shivanshunigam",
  defaultOgImage: "/og-image.png",
  services: [
    "Full-stack web application development",
    "WhatsApp automations for business",
    "AWS cloud deployment & DevOps",
    "AI & n8n workflow automation",
    "Technical solutions for startups",
    "Digital visibility & social-media-ready product delivery",
  ],
} as const;

export const PUBLIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/experience", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/skills", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
] as const;

export type RouteMeta = {
  title: string;
  description: string;
  keywords?: string[];
  noindex?: boolean;
};

export const ROUTE_SEO: Record<string, RouteMeta> = {
  "/": {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    keywords: [...SITE.keywords],
  },
  "/about": {
    title: `About ${SITE.name} | Full Stack Developer & Technical Partner`,
    description:
      "Shivanshu Nigam — Full Stack Developer helping startups and established businesses with web platforms, WhatsApp automations, AWS, DevOps, and growth-focused technical delivery.",
    keywords: ["About Shivanshu Nigam", "Full Stack Developer", ...SITE.keywords],
  },
  "/experience": {
    title: `Experience | Full Stack Developer ${SITE.name}`,
    description:
      "Experience building travel tech, government-scale apps, cloud on AWS, and production systems — Travelodeal, AHA Solar, 200Ok Solutions, and more.",
    keywords: ["Shivanshu Nigam experience", ...SITE.keywords],
  },
  "/projects": {
    title: `Projects | ${SITE.name} — Live Apps & Client Delivery`,
    description:
      "16+ live projects across travel, healthcare, finance, immigration, EV, and enterprise — proof of full-stack delivery, AWS-ready architecture, and business outcomes.",
    keywords: ["portfolio projects", "live web apps", ...SITE.keywords],
  },
  "/skills": {
    title: `Frontend & Backend Developer Skills | ${SITE.name}`,
    description:
      "Full stack developer skills: React & Next.js frontend, Node.js backend, SQL, AWS, DevOps, APIs — hire a software developer with production experience.",
    keywords: [
      "frontend developer skills",
      "backend developer skills",
      "full stack skills",
      ...SITE.keywords,
    ],
  },
  "/contact": {
    title: `Contact Shivanshu | Hire Full Stack Developer & Automation Partner`,
    description:
      "Hire Shivanshu for web development, WhatsApp business automations, AWS deployment, DevOps, and end-to-end technical solutions — startups & all industries welcome.",
    keywords: ["hire full stack developer", "WhatsApp automation developer", ...SITE.keywords],
  },
};