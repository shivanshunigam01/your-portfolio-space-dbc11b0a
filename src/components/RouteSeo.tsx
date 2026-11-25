import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "@/data/siteConfig";
import {
  absoluteUrl,
  getSiteUrl,
  jsonLdForPath,
  resolveRouteMeta,
  stringifyJsonLd,
} from "@/lib/seo";

/**
 * Per-route meta tags, Open Graph, Twitter cards, and JSON-LD for search crawlers.
 */
export function RouteSeo() {
  const { pathname } = useLocation();
  const meta = resolveRouteMeta(pathname);
  const canonical = absoluteUrl(pathname === "/" ? "/" : pathname);
  const ogImage = absoluteUrl(SITE.defaultOgImage);
  const origin = getSiteUrl();
  const jsonLd = jsonLdForPath(pathname, origin);

  const keywords = meta.keywords?.join(", ");

  return (
    <Helmet>
      <html lang="en" className="dark" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={SITE.name} />
      <meta name="robots" content={meta.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content={SITE.city} />

      <script type="application/ld+json">{stringifyJsonLd(jsonLd)}</script>
    </Helmet>
  );
}