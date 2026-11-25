export interface Project {
  title: string;
  category: string;
  url: string;
  tech: string[];
  description: string;
  features: string[];
  /** Served from /public/projects — omit to use live thumbnail fallback */
  previewImage?: string;
}

export const projects: Project[] = [
  {
    title: "Travelodeal UK",
    category: "Travel",
    previewImage: "/projects/travelodeal-uk.png",
    url: "https://www.travelodeal.co.uk/",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "AWS",
      "DevOps",
    ],
    description:
      "Travel-domain product for the UK market—holiday discovery, offers, and booking-oriented flows. Work spans the full stack and cloud delivery for a live production travel platform.",
    features: [
      "Travel & holiday-focused customer journeys",
      "Modern React / Next.js frontend with scalable APIs",
      "Cloud-hosted deployment and DevOps practices",
      "Performance-oriented delivery for a public travel site",
      "Integration with travel-domain content and services",
    ],
  },
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
    title: "Nanak Migration Group",
    category: "Immigration",
    previewImage: "/projects/nanak-migration.png",
    url: "https://www.nanakmigration.com.au/",
    tech: ["Next.js", "React.js", "SEO"],
    description:
      "Live website for Nanak Migration Group — registered Australian migration agents (MARN 2619467) across Melbourne, Geelong, and Perth. Visa pathways, employer-sponsored skills, consultations, and trust-focused UX for immigration clients.",
    features: [
      "Registered migration agent branding and compliance-ready content",
      "Visa categories: skilled, student, partner, visitor, employer-sponsored",
      "Consultation booking and employer readiness flows",
      "Multi-office presence across Australian cities",
      "SEO and conversion-focused layout for immigration services",
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
