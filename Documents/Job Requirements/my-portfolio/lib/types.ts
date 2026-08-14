import type { StaticImageData } from "next/image";
import MYAestheticsCustomer from "@/public/project4.png";
import SelectService from "@/public/project4.1.png";
import SelectTime from "@/public/project4.2.png";
import SelectAesthetician from "@/public/project4.3.png";
import MYAestheticsAdmin from "@/public/project5.png";
import ManageAppointment from "@/public/project5.1.png";
import ManageAdmin from "@/public/project5.2.png";
import Settings from "@/public/project5.3.png";
import GrocerEase from "@/public/project1.png";
import AdminDashboard from "@/public/project2.png";
import RecipeFinder from "@/public/project3.png";
import MarketPulseAI from "@/public/project6.png";
import LiveSentiment from "@/public/project6.1.png";
import Pricing from "@/public/project6.2.png";
import MarketDashboard from "@/public/project6.3.png";
import MarketLogin from "@/public/project6.4.png";

const shield = (
  label: string,
  color: string,
  logo?: string,
  logoColor = "white",
) => {
  const params = new URLSearchParams({
    style: "flat-square",
  });

  if (logo) {
    params.set("logo", logo);
    params.set("logoColor", logoColor);
  }

  return `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?${params.toString()}`;
};

export type NavLink = {
  label: string;
  href: string;
};

export type IconLink = {
  label: string;
  href: string;
  icon: string;
};

export type SkillItem = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export type ProjectScreenshot = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  contributions: string[];
  challenges: string[];
  image: StaticImageData;
  screenshots: ProjectScreenshot[];
  link: string;
};

export type Certification = {
  name: string;
  issuedBy: string;
  date: string;
  pdfFile: string;
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string[];
};

export type Education = {
  degree: string;
  school: string;
  year: string;
};

export const NavLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SocialLinks: IconLink[] = [
  {
    label: "GitHub",
    icon: shield("GitHub", "181717", "github"),
    href: "https://github.com/rainierm1826",
  },
  {
    label: "LinkedIn",
    icon: shield("LinkedIn", "0A66C2", "linkedin"),
    href: "https://www.linkedin.com/in/rainier-m-5354662a6/",
  },
  {
    label: "Email",
    icon: shield("Email", "D14836", "gmail"),
    href: "mailto:marasiganrainier2@gmail.com",
  },
];

export const SkillsByCategory: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: shield("JavaScript", "F7DF1E", "javascript", "000000"),
      },
      {
        name: "TypeScript",
        icon: shield("TypeScript", "3178C6", "typescript"),
      },
      { name: "Python", icon: shield("Python", "3776AB", "python") },
      { name: "Dart", icon: shield("Dart", "0175C2", "dart") },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: shield("React", "61DAFB", "react", "000000") },
      { name: "Next.js", icon: shield("Next.js", "111827", "nextdotjs") },
      {
        name: "Tailwind CSS",
        icon: shield("Tailwind CSS", "06B6D4", "tailwindcss"),
      },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: shield("Node.js", "339933", "nodedotjs") },
      { name: "Express", icon: shield("Express", "000000", "express") },
      { name: "Flask", icon: shield("Flask", "000000", "flask") },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: shield("MySQL", "4479A1", "mysql") },
      {
        name: "PostgreSQL",
        icon: shield("PostgreSQL", "4169E1", "postgresql"),
      },
      { name: "MongoDB", icon: shield("MongoDB", "47A248", "mongodb") },
      {
        name: "Firebase",
        icon: shield("Firebase", "FFCA28", "firebase", "000000"),
      },
    ],
  },
  {
    title: "Data & AI",
    items: [
      { name: "Pandas", icon: shield("Pandas", "150458", "pandas") },
      { name: "NumPy", icon: shield("NumPy", "013243", "numpy") },
      {
        name: "Matplotlib",
        icon: shield("Matplotlib", "11557C", "matplotlib"),
      },
      {
        name: "Scikit-learn",
        icon: shield("Scikit-learn", "F7931E", "scikitlearn", "000000"),
      },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { name: "Git", icon: shield("Git", "F05032", "git") },
      { name: "GitHub", icon: shield("GitHub", "181717", "github") },
      { name: "Docker", icon: shield("Docker", "2496ED", "docker") },
      { name: "Vercel", icon: shield("Vercel", "000000", "vercel") },
      { name: "Render", icon: shield("Render", "46E3B7", "render") },
      { name: "Prisma", icon: shield("Prisma", "2D3748", "prisma") },
      { name: "Excel", icon: shield("Excel", "217346", "microsoftexcel") },
      {
        name: "Power BI",
        icon: shield("Power BI", "F2C811", "powerbi", "000000"),
      },
      {
        name: "SQLAlchemy",
        icon: shield("SQLAlchemy", "0F4C81", "sqlalchemy"),
      },
    ],
  },
];

export const Projects: Project[] = [
  {
    slug: "myaesthetics-customer",
    name: "MY Aesthetics Brow Studio Website - Customer Side",
    description:
      "Customer-facing website for MY Aesthetics Brow Studio with online appointment booking and an AI chatbot.",
    overview:
      "Customer-facing website for MY Aesthetics Brow Studio that supports online appointment booking and a guided AI chatbot experience.",
    problem:
      "The studio needed a clearer way for customers to browse services and book appointments online.",
    solution:
      "Built a customer-focused web experience centered on booking and quick access to support.",
    features: [
      "Online appointment booking",
      "AI-Customer Service Chatbot",
      "Responsive customer experience",
    ],
    technologies: [
      "Next.js",
      "Python",
      "Flask",
      "Scikit-learn",
      "Linear Regression",
      "AI-Customer Service Chatbot",
    ],
    contributions: [
      "Designed and implemented the customer-facing booking flow and page structure.",
    ],
    challenges: [
      "Keeping the booking journey simple while still giving users a direct path to the chatbot.",
    ],
    image: MYAestheticsCustomer,
    screenshots: [
      {
        src: MYAestheticsCustomer,
        alt: "MY Aesthetics customer side screenshot",
      },
      {
        src: SelectService,
        alt: "MY Aesthetics customer side screenshot",
      },
      {
        src: SelectTime,
        alt: "MY Aesthetics customer side screenshot",
      },
      {
        src: SelectAesthetician,
        alt: "MY Aesthetics customer side screenshot",
      },
    ],
    link: "https://www.myaestheticsbrowstudio.com/",
  },
  {
    slug: "myaesthetics-admin",
    name: "MY Aesthetics Brow Studio Website - Admin Side",
    description:
      "Admin side of MY Aesthetics Brow Studio website for managing business operations with predictive analytics.",
    overview:
      "Admin-side website for MY Aesthetics Brow Studio focused on business operations management and predictive analytics visibility.",
    problem:
      "The business needed a central place to manage operations and review data more efficiently.",
    solution:
      "Built an admin interface that organizes management tasks and surfaces analytics in one place.",
    features: [
      "Admin management workflow",
      "Predictive analytics view",
      "Clear administrative navigation",
    ],
    technologies: [
      "Next.js",
      "Python",
      "Flask",
      "Scikit-learn",
      "Linear Regression",
      "AI-Customer Service Chatbot",
    ],
    contributions: [
      "Implemented the admin-side layout and dashboard experience.",
    ],
    challenges: [
      "Presenting operational information in a way that stays readable during day-to-day use.",
    ],
    image: MYAestheticsAdmin,
    screenshots: [
      { src: MYAestheticsAdmin, alt: "MY Aesthetics admin side screenshot" },
      {
        src: ManageAppointment,
        alt: "MY Aesthetics appointment management screenshot",
      },
      { src: ManageAdmin, alt: "MY Aesthetics admin management screenshot" },
      { src: Settings, alt: "MY Aesthetics admin settings screenshot" },
    ],
    link: "https://www.myaestheticsbrowstudio.com/",
  },
  {
    slug: "market-pulse-ai",
    name: "Market Pulse AI",
    description:
      "Built a Market Pulse AI landing site and live sentiment preview using Next.js 16, Tailwind CSS v4 and shadcn-style components.",
    overview:
      "Built a Market Pulse AI landing site and live sentiment preview using Next.js 16, Tailwind CSS v4 and shadcn-style components.",
    problem:
      "The concept needed a clear product story that could demonstrate sentiment-driven UI patterns without relying on a backend service.",
    solution:
      "Created a landing experience that showcases a live sentiment preview, static data-driven sections, and a sample price trend visualization.",
    features: [
      "Live sentiment preview",
      "Static JSON dataset rendering",
      "Sample price trend chart",
      "Product-style landing page",
    ],
    technologies: [
      "Next.js 16",
      "Tailwind CSS v4",
      "shadcn-style components",
      "Static JSON datasets",
      "Interactive visualizations",
    ],
    contributions: [
      "Leveraged GitHub Copilot and GPT (Claude/GPT-4o) for rapid prototyping and content assistance during development.",
      "Built the landing site and live sentiment preview UI around static market datasets.",
    ],
    challenges: [
      "Presenting market data in a polished demo format while keeping the interface lightweight and understandable.",
    ],
    image: MarketPulseAI,
    screenshots: [
      { src: MarketPulseAI, alt: "Market Pulse AI landing page screenshot" },
      {
        src: LiveSentiment,
        alt: "Market Pulse AI live sentiment preview screenshot",
      },
      { src: Pricing, alt: "Market Pulse AI pricing tiers screenshot" },
      { src: MarketDashboard, alt: "Market Pulse AI dashboard screenshot" },
      { src: MarketLogin, alt: "Market Pulse AI login screenshot" },
    ],
    link: "https://market-pulse-ai-blond.vercel.app/",
  },
  {
    slug: "grocerease",
    name: "E-Commerce Website",
    description:
      "GrocerEase is an e-commerce website that allows users to buy groceries online.",
    overview:
      "GrocerEase is an e-commerce website that lets users browse and buy groceries online.",
    problem:
      "Users needed a practical online shopping flow for everyday grocery purchases.",
    solution:
      "Built a customer-facing shopping experience that supports product discovery and ordering.",
    features: [
      "Online grocery shopping",
      "Responsive storefront",
      "Production deployment",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Render"],
    contributions: [
      "Built the storefront experience and shaped the buying flow.",
    ],
    challenges: [
      "Keeping the shopping interface straightforward across desktop and mobile screens.",
    ],
    image: GrocerEase,
    screenshots: [{ src: GrocerEase, alt: "GrocerEase storefront screenshot" }],
    link: "https://final-project-grocerease-1.onrender.com",
  },
  {
    slug: "grocerease-admin-dashboard",
    name: "Admin Dashboard",
    description:
      "Admin Dashboard is a dashboard for the admin to manage the website.",
    overview:
      "Admin dashboard for the GrocerEase website that separates back-office management from the customer storefront.",
    problem:
      "The store needed an internal area for management tasks that stayed separate from the public shop.",
    solution:
      "Built an administrative dashboard for internal workflows and access control.",
    features: ["Admin login", "Management dashboard", "Back-office workflow"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Render"],
    contributions: [
      "Implemented the admin-side interface and login-facing entry point.",
    ],
    challenges: [
      "Balancing admin clarity with the need to keep the public storefront isolated.",
    ],
    image: AdminDashboard,
    screenshots: [
      { src: AdminDashboard, alt: "GrocerEase admin dashboard screenshot" },
    ],
    link: "https://final-project-grocerease-1.onrender.com/admin/login",
  },
  {
    slug: "recipe-finder",
    name: "Recipe Finder",
    description:
      "Recipe Finder is a website that allows users to find recipes based on the ingredients they have.",
    overview:
      "Recipe Finder helps users discover recipes based on the ingredients they already have on hand.",
    problem:
      "Users needed a quicker way to decide what to cook from the ingredients available to them.",
    solution:
      "Built a search-driven recipe discovery interface that keeps the browsing experience simple.",
    features: [
      "Ingredient-based recipe discovery",
      "Responsive search interface",
      "Public deployment",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    contributions: ["Created the recipe search experience and supporting UI."],
    challenges: [
      "Keeping the interface lightweight while still making recipe discovery feel fast.",
    ],
    image: RecipeFinder,
    screenshots: [{ src: RecipeFinder, alt: "Recipe Finder screenshot" }],
    link: "https://food-porn.vercel.app/",
  },
];

export const Certifications: Certification[] = [
  {
    name: "Data Science Essentials with Python",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/dataScienceEssentialsWithPython.pdf",
  },
  {
    name: "Data Analytics Essentials",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/dataAnalyticsEssentials.pdf",
  },
  {
    name: "Introduction to Data Science",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/introductionToDataScience.pdf",
  },
  {
    name: "Introduction to Modern AI",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/introductionToModernAI.pdf",
  },
  {
    name: "JavaScript Essentials 1",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/javaScriptEssentials1.pdf",
  },
  {
    name: "JavaScript Essentials 2",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/javaScriptEssentials2.pdf",
  },
  {
    name: "Python Essentials 1",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/pythonEssentials1.pdf",
  },
  {
    name: "Python Essentials 2",
    issuedBy: "Networking Academy",
    date: "March 2026",
    pdfFile: "/pythonEssentials2.pdf",
  },
];

export const Experiences: Experience[] = [
  {
    title: "IT/OJT Intern",
    company: "DICT Region IVA - CALABARZON",
    duration: "February 2026 - May 2026",
    description: [
      "Completed hands-on technical training in robotics, computer hardware servicing, and software troubleshooting.",
      "Assisted in diagnosing and resolving computer hardware and software issues.",
      "Performed basic networking tasks including network setup and troubleshooting.",
      "Designed and developed a Procurement Monitoring System to improve tracking and management of procurement records.",
    ],
  },
];

export const Education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Batangas State University",
    year: "2022 - 2026",
  },
  {
    degree:
      "The Technical-Vocational-Livelihood (TVL) Information and Communications Technology (ICT)",
    school: "Asian Institute of Computer Studies",
    year: "2020 - 2022",
  },
];
