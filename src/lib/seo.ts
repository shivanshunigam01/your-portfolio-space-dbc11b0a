import { projects as PROJECTS } from "@/data/projects";
import { SEO_FAQS } from "@/data/seoFaqs";
import {
  PUBLIC_ROUTES,
  ROUTE_SEO,
  SITE,
  SITE_ORIGIN,
  type RouteMeta,
} from "@/data/siteConfig";

const FALLBACK_ORIGIN = SITE_ORIGIN;

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined") return window.location.origin;
  return FALLBACK_ORIGIN;
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function resolveRouteMeta(pathname: string): RouteMeta {
  if (ROUTE_SEO[pathname]) return ROUTE_SEO[pathname];
  return {
    title: `Page not found | ${SITE.name}`,
    description: SITE.defaultDescription,
    noindex: true,
  };
}

export function buildPersonJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: [
      "Full Stack Developer",
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    url: origin,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.country,
    },
    sameAs: [SITE.github, SITE.linkedin],
    knowsAbout: [
      ...SITE.services,
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "AWS",
      "DevOps",
      "REST APIs",
      "MySQL",
      "Social media marketing integration",
    ],
  };
}

export function buildWebSiteJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.shortTitle,
    url: origin,
    description: SITE.defaultDescription,
    inLanguage: "en-IN",
    author: { "@type": "Person", name: SITE.name },
  };
}

export function buildProjectsItemListJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} — Portfolio Projects`,
    url: `${origin}/projects`,
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: p.url,
      description: p.description,
    })),
  };
}

export function buildBreadcrumbJsonLd(origin: string, pathname: string) {
  const segments = pathname === "/" ? [] : pathname.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", item: origin }];
  let acc = origin;
  for (const seg of segments) {
    acc += `/${seg}`;
    const label = seg.charAt(0).toUpperCase() + seg.slice(1);
    crumbs.push({ name: label, item: acc });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SEO_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildProfessionalServiceJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.name} — Full Stack & Software Development`,
    url: origin,
    description: SITE.defaultDescription,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: "Gujarat",
      addressCountry: SITE.country,
    },
    serviceType: [
      "Full Stack Developer",
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
      "AWS Cloud Deployment",
      "DevOps",
      "WhatsApp Business Automation",
    ],
    provider: {
      "@type": "Person",
      name: SITE.name,
      url: origin,
    },
  };
}

export function buildProfilePageJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: SITE.defaultTitle,
    url: origin,
    mainEntity: {
      "@type": "Person",
      name: SITE.name,
      jobTitle: "Full Stack Developer",
    },
  };
}

export function stringifyJsonLd(nodes: object[]): string {
  if (nodes.length === 0) return "{}";
  if (nodes.length === 1) return JSON.stringify(nodes[0]);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const copy = { ...node } as Record<string, unknown> & { "@context"?: string };
      delete copy["@context"];
      return copy;
    }),
  });
}

export function jsonLdForPath(pathname: string, origin: string): object[] {
  const base = [buildWebSiteJsonLd(origin), buildPersonJsonLd(origin)];
  if (pathname === "/") {
    return [
      ...base,
      buildProfilePageJsonLd(origin),
      buildProfessionalServiceJsonLd(origin),
      buildFaqJsonLd(),
      buildProjectsItemListJsonLd(origin),
    ];
  }
  if (pathname === "/projects") {
    return [...base, buildProjectsItemListJsonLd(origin), buildBreadcrumbJsonLd(origin, pathname)];
  }
  if (ROUTE_SEO[pathname]) {
    return [...base, buildBreadcrumbJsonLd(origin, pathname)];
  }
  return base;
}

export { PUBLIC_ROUTES, SITE };