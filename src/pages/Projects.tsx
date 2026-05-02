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
}

const projects: Project[] = [
  {
    title: "Punya Autowheels Platform",
    category: "Automobile",
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

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">🚀 Featured Projects</span>
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
            const cleanUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            const screenshotUrl = `https://image.thum.io/get/width/1200/crop/750/noanimate/https://${cleanUrl}`;
            return (
              <Card
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Live website preview */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block h-56 overflow-hidden bg-gradient-to-br ${gradient}`}
                >
                  <img
                    src={screenshotUrl}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge
                      className={`${categoryStyles[project.category] ?? "bg-white/90 text-slate-800"} border-0 font-semibold shadow-sm`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-green-500 hover:bg-green-500 text-white border-0 font-semibold shadow-sm gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                      Live
                    </Badge>
                  </div>
                </a>

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
