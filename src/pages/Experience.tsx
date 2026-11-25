import {
  MapPin,
  Calendar,
  ExternalLink,
  Building2,
  Trophy,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type KeyProject = {
  name: string;
  description: string;
  impact: string;
  url?: string;
};

const Experience = () => {
  const experiences: Array<{
    id: number;
    company: string;
    role: string;
    location: string;
    period: string;
    type: string;
    description: string;
    projects: KeyProject[];
    technologies: string[];
    achievements: string[];
  }> = [
    {
      id: 1,
      company: "Travelodeal Holidays",
      role: "Software Engineer",
      location: "India",
      period: "Oct 15, 2025 - Present",
      type: "Current",
      description:
        "Building and evolving cloud-hosted travel and holiday products end to end: performant frontends, scalable APIs, and reliable deployments across AWS and modern DevOps workflows.",
      projects: [
        {
          name: "Travelodeal UK (travel & holidays platform)",
          description:
            "UK travel-domain product: holiday search, offers, and customer journeys for a live production site serving the travel market.",
          impact:
            "Core product development on a high-visibility travel platform with full-stack and cloud delivery",
          url: "https://www.travelodeal.co.uk/",
        },
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "REST APIs",
        "AWS",
        "Cloud",
        "DevOps",
        "Docker",
        "CI/CD",
        "Git",
      ],
      achievements: [
        "Delivered features across full stack using React, Next.js, Node, and Express",
        "Operated and improved cloud workloads on AWS with DevOps and automation focus",
        "Collaborated on scalable architecture, APIs, and production reliability",
      ],
    },
    {
      id: 2,
      company: "200Ok Solutions",
      role: "Full Stack Developer",
      location: "Ahmedabad, India",
      period: "April 2025 - Present",
      type: "Current",
      description:
        "Currently working as a Full Stack Developer, contributing to various web applications and maintaining high-quality code standards.",
      projects: [
        {
          name: "The Manor & Ashbury Resorts",
          description:
            "A dual-resort destination in Devon, England offering 70+ activities, spa services, and one of the world’s largest golf resorts.",
          impact:
            "Catering to thousands of guests yearly with inter-resort access and leisure-focused experiences",
        },
      ],
      technologies: ["React", "PHP", "SQL", "Bitbucket", "DevOps"],
      achievements: [
        "Ranked as the 9th largest golf resort in the world",
        "70+ in-house activities including sports, crafts, spa, and leisure",
        "Innovative dual-resort model offering shared guest access across locations",
      ],
    },
    {
      id: 3,
      company: "AHA Solar Technologies Limited",
      role: "Software Development Engineer",
      location: "Ahmedabad, India",
      period: "Sep 2023 - Apr 2025",
      type: "Full-time",
      description:
        "Leading full-stack development for major government renewable energy initiatives, serving millions of users nationwide.",
      projects: [
        {
          name: "PM Surya Ghar Muft Bijli Yojana",
          description:
            "Government initiative for 10 million households to receive free solar electricity",
          impact: "10M households, 400+ users",
        },
        {
          name: "BSES Rajdhani Solar Portal",
          description: "Electricity distribution platform for Delhi region",
          impact: "100K+ customers, 400+ monthly requests",
        },
        {
          name: "GOA GCZMA Portal",
          description: "Coastal zone management authority platform",
          impact: "Environmental protection & compliance",
        },
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Material UI",
        "REST APIs",
      ],
      achievements: [
        "Engineered 40+ RESTful APIs handling 10,000+ daily requests",
        "Built responsive frontends serving 500,000+ users",
        "Reduced query execution time by 25% through database optimization",
        "Automated verification system processing 450,000 entries monthly",
        "Saved 30+ man-hours through automation initiatives",
      ],
    },
    {
      id: 4,
      company: "Scale AI",
      role: "AI Trainer",
      location: "San Francisco, CA (Remote)",
      period: "Nov 2022 - Aug 2023",
      type: "Remote",
      description:
        "Specialized in training and evaluating AI models, providing critical feedback for performance improvements and accuracy enhancements.",
      projects: [
        {
          name: "AI Model Training & Evaluation",
          description:
            "Comprehensive model performance assessment and optimization",
          impact: "20% reduction in model error rates",
        },
        {
          name: "Data Review Workflow Optimization",
          description: "Improved evaluation processes and quality standards",
          impact: "30% faster evaluation process",
        },
      ],
      technologies: ["AI/ML", "Python", "Data Analysis", "Zendesk", "Slack"],
      achievements: [
        "Reduced model error rates by 20% through continuous optimization",
        "Improved data review workflows by 30% while maintaining quality",
        "Provided comprehensive feedback to engineering teams",
        "Identified and corrected systematic errors for consistency",
        "Collaborated with cross-functional teams for alignment",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Full-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Remote":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      <div className="page-main">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="page-title mb-4">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="page-lead max-w-3xl mx-auto">
            A journey through impactful roles in software development, from
            government initiatives to AI training, consistently delivering
            scalable solutions and measurable results.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-2.5 top-6 hidden h-4 w-4 rounded-full border-4 border-background bg-portfolio-primary shadow-lg sm:left-6 sm:block"></div>

                <div className="sm:ml-16">
                  <Card className="p-4 sm:p-6 hover-lift">
                    {/* Header */}
                    <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold sm:text-xl mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-portfolio-primary font-medium mb-2 text-sm sm:text-base">
                          <Building2 className="h-4 w-4 mr-2 shrink-0" />
                          <span className="break-words">{exp.company}</span>
                        </div>
                        <div className="flex flex-col gap-1 text-muted-foreground text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                          <span className="inline-flex items-center">
                            <MapPin className="h-4 w-4 mr-2 shrink-0" />
                            {exp.location}
                          </span>
                          <span className="inline-flex items-center">
                            <Calendar className="h-4 w-4 mr-2 shrink-0" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <Badge className={`${getTypeColor(exp.type)} self-start shrink-0`}>
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Projects */}
                    {exp.projects.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-3">
                          Key Projects:
                        </h4>
                        <div className="space-y-3">
                          {exp.projects.map((project, idx) => (
                            <div
                              key={idx}
                              className="bg-accent/50 rounded-lg p-3"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h5 className="font-medium text-sm mb-1">
                                    {project.name}
                                  </h5>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {project.description}
                                  </p>
                                  <div className="text-xs text-portfolio-primary font-medium">
                                    Impact: {project.impact}
                                  </div>
                                  {project.url && (
                                    <a
                                      href={project.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-portfolio-primary hover:underline"
                                    >
                                      <ExternalLink className="h-3 w-3 shrink-0" />
                                      {project.url.replace(/^https?:\/\//, "")}
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-primary mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Career Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Professional Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">
                  10M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Users Impacted
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">40+</div>
                <div className="text-sm text-muted-foreground">
                  APIs Developed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">25%</div>
                <div className="text-sm text-muted-foreground">
                  Performance Improvement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
