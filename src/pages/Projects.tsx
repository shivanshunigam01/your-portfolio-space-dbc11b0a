import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const categoryStyles: Record<string, string> = {
  Automobile: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
  EV: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  Corporate: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  Finance: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200",
  Tools: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  Travel: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200",
  SaaS: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
  Healthcare: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
  Insurance: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200",
  Enterprise: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-200",
  Immigration:
    "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-200",
};

const gradientPalette = [
  "from-purple-500 via-fuchsia-500 to-pink-500",
  "from-blue-500 via-cyan-500 to-teal-500",
  "from-emerald-500 via-green-500 to-lime-500",
  "from-orange-500 via-red-500 to-pink-500",
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-yellow-500 via-orange-500 to-red-500",
];

// Multiple screenshot providers — if one fails, we fall through to the next.
// mShots is free + reliable but generates async (returns a placeholder on first hit, then caches).
// We retry the same mShots URL a few times with a small delay before falling through.
const buildScreenshotSources = (url: string): string[] => {
  const encoded = encodeURIComponent(url);
  return [
    `https://s.wordpress.com/mshots/v1/${encoded}?w=1280&h=800`,
    `https://image.thum.io/get/width/1280/noanimate/https://${url.replace(/^https?:\/\//, "")}`,
  ];
};

interface PreviewProps {
  url: string;
  title: string;
  gradient: string;
}

const MAX_MSHOTS_RETRIES = 4;
const MSHOTS_PLACEHOLDER_WIDTH = 400; // mShots placeholder is 400x300

const ProjectPreview = ({ url, title, gradient }: PreviewProps) => {
  const sources = buildScreenshotSources(url);
  const [srcIndex, setSrcIndex] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [cacheBust, setCacheBust] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const isMshots = sources[srcIndex].includes("mshots");
  const currentSrc = isMshots && cacheBust > 0
    ? `${sources[srcIndex]}&retry=${cacheBust}`
    : sources[srcIndex];

  const advanceProvider = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(srcIndex + 1);
      setRetryCount(0);
      setCacheBust(0);
    } else {
      setFailed(true);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      {!loaded && !failed && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/40 to-muted/10" />
      )}

      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-black text-white/90 drop-shadow-lg tracking-tight">
            {initials}
          </span>
        </div>
      )}

      {!failed && (
        <img
          key={`${srcIndex}-${cacheBust}`}
          src={currentSrc}
          alt={`${title} live preview`}
          loading="lazy"
          onLoad={(e) => {
            const img = e.currentTarget;
            // mShots placeholder while screenshot generates — retry the SAME url a few times
            if (
              isMshots &&
              img.naturalWidth > 0 &&
              img.naturalWidth <= MSHOTS_PLACEHOLDER_WIDTH + 20
            ) {
              if (retryCount < MAX_MSHOTS_RETRIES) {
                const next = retryCount + 1;
                setTimeout(() => {
                  setRetryCount(next);
                  setCacheBust(next);
                }, 2500);
                return;
              }
              advanceProvider();
              return;
            }
            setLoaded(true);
          }}
          onError={advanceProvider}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />
    </a>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pb-12 pt-20 sm:pb-16 sm:pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in">
          <h1 className="page-title lg:text-6xl mb-4 sm:mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="page-lead">
            Production-grade applications built across multiple industries
            including Automotive, Healthcare, Finance, and Enterprise SaaS using
            modern full-stack technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          {projects.map((project, idx) => {
            const gradient = gradientPalette[idx % gradientPalette.length];
            return (
              <Card
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {project.previewImage ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block aspect-[16/10] min-h-[200px] overflow-hidden rounded-t-2xl bg-gradient-to-br ${gradient}`}
                  >
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge
                        className={`${categoryStyles[project.category] ?? "bg-white/90 text-slate-800"} border-0 font-semibold shadow-sm`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 z-10 pointer-events-none">
                      <Badge className="bg-green-500 hover:bg-green-500 text-white border-0 font-semibold shadow-sm gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                        Live
                      </Badge>
                    </div>
                  </a>
                ) : (
                  <div className="relative">
                    <ProjectPreview
                      url={project.url}
                      title={project.title}
                      gradient={gradient}
                    />
                    <div className="pointer-events-none absolute top-4 left-4 z-10">
                      <Badge
                        className={`${categoryStyles[project.category] ?? "bg-white/90 text-slate-800"} border-0 font-semibold shadow-sm`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="pointer-events-none absolute top-4 right-4 z-10">
                      <Badge className="bg-green-500 hover:bg-green-500 text-white border-0 font-semibold shadow-sm gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                        Live
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-portfolio-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          className="text-sm text-foreground/80 flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-portfolio-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-foreground/80 border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:opacity-90 text-white border-0 shadow-md hover:shadow-lg transition-all"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
