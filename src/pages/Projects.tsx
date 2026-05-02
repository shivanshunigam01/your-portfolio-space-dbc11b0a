import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  category: string;
  url: string;
  tech: string[];
  description: string;
  features: string[];
  /** Served from /public/projects — omit to use live thumbnail fallback */
  previewImage?: string;
}

const projects: Project[] = [
  {
    title: "Punya Autowheels Platform",
    category: "Automobile",
    previewImage: "/projects/punya.png",
    url: "https://www.punyaautowheels.com/",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "AWS"],
    description:
      "Engineered a full-scale digital platform for an automobile dealership, designed to streamline vehicle showcasing, customer inquiries, and lead management. The system focuses on performance, scalability, and SEO to support business growth and online visibility.",
    features: [
      "Dynamic vehicle listing with detailed specifications",
      "Lead generation system with inquiry tracking",
      "SEO-optimized architecture for higher search visibility",
      "Fully responsive and performance-optimized frontend",
      "Scalable backend APIs for handling user requests",
    ],
  },
  {
    title: "Vikramshila Automobiles",
    category: "Automobile",
    previewImage: "/projects/vikramshila.png",
    url: "https://www.vikramshilaautomobiles.com/",
    tech: ["React.js", "Next.js", "Node.js"],
    description:
      "Developed a high-performance dealership website focused on enhancing customer engagement and improving conversion rates. Implemented a clean UI with structured navigation and optimized rendering to ensure fast loading speeds.",
    features: [
      "Structured vehicle catalog with detailed views",
      "Integrated inquiry and contact system",
      "Optimized frontend rendering for performance",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "Patliputra VinFast",
    category: "EV",
    previewImage: "/projects/patliputravinfast.png",
    url: "https://patliputravinfast.in/",
    tech: ["Next.js", "React.js", "REST APIs"],
    description:
      "Built a modern EV dealership platform aimed at promoting electric mobility through an engaging and visually rich interface. Focused on brand storytelling, performance optimization, and seamless user interaction.",
    features: [
      "EV product showcase with modern UI/UX",
      "Lead capture and inquiry system",
      "High-performance rendering using Next.js",
      "Clean and minimal design for better engagement",
    ],
  },
  {
    title: "Patliputra Group",
    category: "Corporate",
    previewImage: "/projects/patliputragroup.png",
    url: "https://patliputragroup.com/",
    tech: ["React.js", "Node.js"],
    description:
      "Designed and developed a corporate website representing multiple business verticals under one umbrella. Focused on structured content delivery, brand positioning, and scalable architecture.",
    features: [
      "Multi-business structured layout",
      "SEO-friendly page architecture",
      "Clean navigation and UI consistency",
      "Scalable and maintainable frontend",
    ],
  },
  {
    title: "Nanak Accountants",
    category: "Finance",
    previewImage: "/projects/nanak-accountants.png",
    url: "https://nanakaccountants.com.au/",
    tech: ["Next.js", "React.js"],
    description:
      "Created a professional accounting services platform tailored for an international client, focusing on trust, clarity, and conversion. Emphasized SEO optimization and clean UI to enhance credibility.",
    features: [
      "Professional and minimal UI design",
      "Service-focused content architecture",
      "SEO optimization for local visibility",
      "Contact and consultation integration",
    ],
  },
  {
    title: "Amar Jyoti Upload System",
    category: "Tools",
    previewImage: "/projects/amarjyoti.png",
    url: "https://amarjyoti-flax.vercel.app/upload",
    tech: ["React.js", "Node.js", "Cloud Storage"],
    description:
      "Developed a secure and efficient document upload system for managing user submissions. Implemented validation, secure storage handling, and a simple UI to ensure smooth document processing.",
    features: [
      "Secure file upload system",
      "Backend storage integration",
      "Input validation and error handling",
      "Lightweight and fast UI",
    ],
  },
  {
    title: "ZForce EV",
    category: "EV",
    previewImage: "/projects/zforceev.png",
    url: "https://www.zforceev.com/",
    tech: ["Next.js", "React.js"],
    description:
      "Built a visually engaging EV platform showcasing next-generation electric mobility solutions. Focused on animations, performance, and responsive design to deliver a premium user experience.",
    features: [
      "Interactive product showcase",
      "Smooth animations and transitions",
      "Responsive and modern UI",
      "Performance-optimized frontend",
    ],
  },
  {
    title: "Luxury Bus Rental",
    category: "Travel",
    previewImage: "/projects/luxury-bus-rental.png",
    url: "https://www.luxurybusrental.in/",
    tech: ["React.js", "Node.js"],
    description:
      "Developed a lead-generation focused platform for luxury transportation services. Designed with a conversion-first approach to maximize booking inquiries and user engagement.",
    features: [
      "Booking and inquiry system",
      "Service listing with structured information",
      "Mobile-optimized UI",
      "Conversion-focused layout",
    ],
  },
  {
    title: "Derxo Platform",
    category: "SaaS",
    previewImage: "/projects/derxo.png",
    url: "https://www.derxo.com/",
    tech: ["Next.js", "Node.js"],
    description:
      "Engineered a scalable SaaS platform with a focus on modular architecture and API-driven data handling. Designed for flexibility, performance, and future scalability.",
    features: [
      "API-driven architecture",
      "Clean and scalable UI",
      "Modular frontend structure",
      "Optimized performance",
    ],
  },
  {
    title: "True Hospitals",
    category: "Healthcare",
    previewImage: "/projects/true-hospitals.png",
    url: "https://truehospitals.com/",
    tech: ["React.js", "Next.js"],
    description:
      "Built a healthcare platform to streamline patient interaction and present hospital services effectively. Focused on accessibility, clean design, and structured content delivery.",
    features: [
      "Service and department listings",
      "Informational pages for patients",
      "Responsive UI for all devices",
      "Clean and accessible design",
    ],
  },
  {
    title: "Zentrosure",
    category: "Insurance",
    url: "https://zentrosure.com/",
    tech: ["Node.js", "React.js", "MySQL"],
    description:
      "Developed an insurance-tech platform capable of handling structured data, policy listings, and user interactions. Focused on secure backend architecture and scalable API integration.",
    features: [
      "Insurance product management",
      "Secure backend system",
      "API integrations",
      "Scalable architecture",
    ],
  },
  {
    title: "Cashivanand",
    category: "Finance",
    url: "https://cashivanand.com/",
    tech: ["React.js", "Node.js"],
    description:
      "Designed a financial services platform with a focus on clean UI, structured navigation, and lead generation. Optimized for SEO and user engagement.",
    features: [
      "Financial service presentation",
      "Lead generation system",
      "Clean and minimal UI",
      "SEO-friendly architecture",
    ],
  },
  {
    title: "Zentroverse",
    category: "Enterprise",
    previewImage: "/projects/zentroverse.png",
    url: "https://www.zentroverse.com",
    tech: ["React.js", "Node.js", "AWS", "DevOps"],
    description:
      "Built a large-scale enterprise platform with multiple modules and role-based access systems. Designed for handling complex workflows, API integrations, and scalable infrastructure deployment.",
    features: [
      "Multi-module enterprise architecture",
      "Role-based access control",
      "Scalable backend system",
      "API integrations and automation",
    ],
  },
  {
    title: "Neuro Vihar Digital",
    category: "Healthcare",
    previewImage: "/projects/neuro-vihar.png",
    url: "https://neuro-vihar-digital-58.vercel.app/",
    tech: ["Next.js", "React.js"],
    description:
      "Developed a modern healthcare interface focusing on usability, performance, and clean design. Ensured fast loading speeds and responsive experience for all users.",
    features: [
      "Responsive UI design",
      "Fast performance",
      "Clean and minimal interface",
      "Structured content delivery",
    ],
  },
];

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
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Production-grade applications built across multiple industries
            including Automotive, Healthcare, Finance, and Enterprise SaaS using
            modern full-stack technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
