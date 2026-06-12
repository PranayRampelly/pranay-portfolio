/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, SkillCategory, ExplorationTopic, NavItem } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "IRON HAVEN GYM",
    tagline: "Premium High-End Fitness & Conditioning Center",
    type: "Boutique Gym Experience",
    description: "A powerful, brutalist web platform designed for elite fitness centers. Featuring cinematic transitions, dynamic trainer scheduling modules, interactive grid systems, and smooth membership registration pipelines.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "High-performance Routing"],
    liveUrl: "https://iron-haven-gym-578943506155.asia-southeast1.run.app",
    accentColor: "from-amber-600 via-orange-600 to-red-600",
    primaryImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Seamless session schedulers & booking engines",
      "Dynamic trainer registries & client reviews",
      "Responsive class selectors with real-time capacity meters",
      "Custom dark-ambient layout styling with high-performance metrics"
    ]
  },
  {
    id: "project-02",
    number: "02",
    title: "DENTÉ STUDIO",
    tagline: "Luxurious Boutique Dental & Orthodontic Experience",
    type: "Orthodontic & Dentistry Portal",
    description: "An elegant, peaceful dentistry platform built to display clinical perfection and ease client anxiety. Utilizes quiet warm off-white tones, symmetric grid alignments, and a custom direct calendar appointment application.",
    tags: ["TypeScript", "React", "Inter Font", "Fluid Layouts"],
    liveUrl: "https://dentist-portfolio-we-evw3.bolt.host",
    accentColor: "from-teal-400 via-cyan-500 to-indigo-600",
    primaryImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Symmetric virtual tooth assessment and symmetry index checking",
      "Tailor-made responsive booking layout with dynamic timeslots",
      "Smooth, anxious-free user interfaces utilizing peaceful color palettes",
      "Comprehensive portfolio views for cosmetic and orthodontic treatments"
    ]
  },
  {
    id: "project-03",
    number: "03",
    title: "VAKIL & CO.",
    tagline: "Premier Corporate Legal Firm & Advocacy Agency",
    type: "Elite Legal Agency Portal",
    description: "A sophisticated, high-end editorial representation for premier corporate law firms and legal agencies. Features comprehensive practice areas, case results logs, and seamless dynamic corporate intakes.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Case Managers"],
    liveUrl: "https://vakil-co-574373755117.asia-southeast1.run.app/",
    accentColor: "from-indigo-600 via-blue-600 to-slate-800",
    primaryImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Practice area directories with clean bento-style highlights",
      "Dynamic client consultation and case intake wizard",
      "Comprehensive corporate partner and advocate profiles",
      "Polished, editorial typographic layout communicating authority and trust"
    ]
  },
  {
    id: "project-04",
    number: "04",
    title: "ADVOCATE PORTFOLIO",
    tagline: "Exclusive Digital Case Hub for Expert Legal Counsel",
    type: "Personal Lawyer & Advisory Hub",
    description: "A clean, modern personal advocate portfolio tailored to showcase individual legal accolades, consultation calendars, and interactive client testimonials with absolute clarity.",
    tags: ["React", "Vite", "Bento Grid", "Sora Font"],
    liveUrl: "https://nickbiz-513.github.io/Advocate/",
    accentColor: "from-purple-600 via-indigo-600 to-pink-600",
    primaryImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Streamlined advocate listings, bio histories, and key case archives",
      "Instant legal advisement inquiry dynamic forms",
      "Bento grid structured legal blog and regulatory update feeds",
      "Highly responsive contact details and calendar sync systems"
    ]
  },
  {
    id: "project-05",
    number: "05",
    title: "PRIME ARCH RESIDENCY",
    tagline: "Premium Multi-Brand Residential Listings & Virtual Tour Hub",
    type: "Luxury Multi-Builder Realty Platform",
    description: "An immersive real estate platform enabling users to browse elite properties (such as Lodha and Runwal) across prime regions. Features residency galleries, area-specific tower listings, and direct viewing scheduling handlers.",
    tags: ["React", "Lucide Icons", "Fluid UI", "Layout Animations"],
    liveUrl: "https://nickbiz-513.github.io/real-estate/",
    accentColor: "from-rose-500 via-pink-600 to-violet-700",
    primaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Multi-brand regional builders catalog (including Lodha, Runwal collections)",
      "Immersive gallery of interior & exterior residency photography",
      "Area-specific building lists with modern booking viewing calendars",
      "High-converting inquiry workflows connecting premium brokers in real-time"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-01",
    number: "01",
    title: "Business Websites",
    description: "Creation of modern responsive websites for business professionals, corporate brands, and local companies desiring a digital storefront that matches their premium quality.",
    features: ["Responsive Grid Systems", "Custom Visual Identity Integration", "SEO Architecture Optimization"]
  },
  {
    id: "srv-02",
    number: "02",
    title: "Landing Pages",
    description: "High-converting, hyper-focused landing pages designed for startups, digital platforms, marketing campaigns, and specialized product launches that require absolute precision.",
    features: ["A/B Ready Form Layout", "Dynamic Sales Funnel Framework", "Ultra-fast Loading Performance"]
  },
  {
    id: "srv-03",
    number: "03",
    title: "Portfolio Websites",
    description: "Tailored custom digital hubs for professionals, students, researchers, and creators wanting to claim their elegant corner of the web with standout design.",
    features: ["Cinematic Transition System", "Intuitive Case Study Templates", "Fluid Navigation Systems"]
  },
  {
    id: "srv-04",
    number: "04",
    title: "SaaS Frontends",
    description: "Sleek frontend dashboards, intuitive app settings panels, and user interfaces carefully crafted for emerging SaaS startups looking to raise their first round or secure users.",
    features: ["Interactive Chart Assemblies", "Flawless State Synchronization", "Modern Tabbed Command Centers"]
  },
  {
    id: "srv-05",
    number: "05",
    title: "Website Redesigns",
    description: "Breathe new life into aging corporate platforms. We strip out stale templates and replace them with high-end, responsive layouts that restore market dominance.",
    features: ["Complete Asset Re-optimization", "Modern UX Simplification", "SEO Score Preservation"]
  },
  {
    id: "srv-06",
    number: "06",
    title: "AI Integrations",
    description: "Elevate your custom web applications with natural language models, intelligent search fields, responsive context analyzers, and automated live service desks.",
    features: ["Google Gemini Integration", "Adaptive Automated Flows", "Sophisticated Interactive Playgrounds"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "React Native", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite", "NextJS"]
  },
  {
    title: "Tools & Workspace",
    skills: ["GitHub", "VS Code", "Cursor IDE", "Figma Design", "Chrome DevTools", "npm / yarn / pnpm", "Postman", "ESLint / Prettier"]
  },
  {
    title: "Deployment & Infrastructure",
    skills: ["Netlify", "Vercel", "Firebase Hosting", "Cloudflare Pages", "GitHub Actions", "Docker Containers"]
  }
];

export const EXPLORING: ExplorationTopic[] = [
  {
    id: "exp-01",
    title: "Freelancing & Client Growth",
    description: "Mastering high-end web design client outreach, pricing strategies, drafting pristine technical proposals, and delivering top-tier website assets.",
    status: "Deep Dive",
    iconName: "Briefcase"
  },
  {
    id: "exp-02",
    title: "SaaS Product Engineering",
    description: "Architecting flexible multi-tenant databases, building billing integrations (Stripe), managing robust server routes, and implementing lazy-load patterns.",
    status: "Launch Phase",
    iconName: "Cpu"
  },
  {
    id: "exp-03",
    title: "AI & LLM Integrations",
    description: "Leveraging SDK tools like Gemini API to insert summaries, context-aware support engines, and dynamic structured generation inside React web views.",
    status: "In Progress",
    iconName: "Sparkles"
  },
  {
    id: "exp-04",
    title: "Modern Minimalist UI/UX Design",
    description: "Studying typographic rhythm, fluid layout sizing (clamp properties), advanced CSS filters, glassmorphic refraction textures, and negative space geometry.",
    status: "Deep Dive",
    iconName: "Palette"
  },
  {
    id: "exp-05",
    title: "Startup & Indie Hacker Architecture",
    description: "Translating business goals into rapid minimum viable prototypes (MVPs) designed to load in milliseconds, convert clicks, and hook user interest immediately.",
    status: "Launch Phase",
    iconName: "Rocket"
  }
];
