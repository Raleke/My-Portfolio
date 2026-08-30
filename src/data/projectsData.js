// GitHub Projects Data Configuration
// Comprehensive project descriptions for portfolio showcasing

const projectsData = [
  {
    id: 1,
    title: "Freelance API",
    description: "A comprehensive backend service designed to power a full-featured freelance platform. This RESTful API provides complete functionality for managing the entire freelance workflow from user onboarding to payment processing. Built with Node.js and Express, it features real-time communication using Socket.io for instant messaging and notifications, secure payment processing through Stripe integration, and OAuth authentication with GitHub and Google. The system handles complex business logic including job posting, proposal submissions, contract management, invoice generation, dispute resolution, and comprehensive user reviews. Advanced features include organization management, availability tracking, webhook support for external integrations, and robust file upload capabilities for documents and attachments.",
    image: "freelance-api.png",
    githubUrl: "https://github.com/Raleke/freelance-api",
    liveUrl: "https://freelance-api-qd9n.onrender.com",
    swaggerUrl: "https://freelance-api-qd9n.onrender.com/api-docs",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "Stripe", "Passport.js", "OAuth", "Docker", "Jest", "Supertest"],
    featured: true,
    highlights: [
      "Real-time chat and notifications with Socket.io",
      "Secure payment processing via Stripe integration",
      "OAuth authentication with GitHub and Google",
      "Comprehensive job and proposal management",
      "Contract and invoice generation system",
      "Dispute resolution and review system",
      "Organization and team management",
      "Webhook support for external integrations"
    ]
  },
  {
    id: 2,
    title: "Dev Tracker",
    description: "A full-stack developer productivity tracking application that combines robust backend API capabilities with an intuitive frontend interface. The system enables developers to manage projects, track tasks with precision timing, and generate comprehensive reports on their productivity. Built with Node.js and Express on the backend, and React on the frontend, it features secure authentication through local registration and OAuth with Google and GitHub. The application includes sophisticated task timer functionality with start/stop capabilities and automatic duration tracking, file upload support for profile images and CVs, and detailed analytics for performance insights. The architecture emphasizes scalability and user experience with comprehensive validation and error handling throughout.",
    image: "dev-tracker-new.png",
    githubUrl: "https://github.com/Raleke/DEV_TRACKER",
    liveUrl: "https://devtracker-rose.vercel.app/",
    swaggerUrl: "https://dev-tracker-bi1l.onrender.com/api-docs",
    techStack: ["Node.js", "Express", "MongoDB", "React", "Passport.js", "JWT", "Multer", "Docker", "OAuth"],
    featured: true,
    highlights: [
      "Full-stack application with React frontend",
      "Precise task timing with start/stop functionality",
      "OAuth authentication with Google and GitHub",
      "File uploads for profile images and CVs",
      "Comprehensive project and task management",
      "Detailed productivity analytics and reporting",
      "JWT-based session management",
      "Docker containerization for deployment"
    ]
  },
  {
    id: 3,
    title: "Artisan E-Commerce with KPI",
    description: "A sophisticated e-commerce platform specifically designed for artisans and craftsmen, featuring comprehensive Key Performance Indicator (KPI) tracking and analytics. This full-stack application combines a powerful Node.js and Express backend with a dynamic React frontend, providing real-time business intelligence through Recharts visualization. The platform includes complete e-commerce functionality including product management, order processing, inventory tracking, and customer management. The KPI dashboard provides merchants with critical business insights including sales trends, revenue analytics, customer behavior patterns, and inventory turnover rates. Advanced features include sales forecasting, customer lifetime value calculations, and conversion rate optimization metrics.",
    image: "artisan-ecommerce-new.png",
    githubUrl: "https://github.com/Raleke/Artisan-E-commerce-with-KPI",
    liveUrl: "https://rolo-fyp.onrender.com",
    swaggerUrl: "https://rolo-fyp.onrender.com/api-docs",
    techStack: ["Node.js", "Express", "React", "MongoDB", "Recharts", "JWT", "Redux", "Material-UI", "Docker"],
    featured: true,
    highlights: [
      "Comprehensive KPI dashboard with Recharts visualization",
      "Real-time sales and revenue analytics",
      "Customer behavior tracking and insights",
      "Inventory management with turnover analytics",
      "Sales forecasting and trend analysis",
      "Customer lifetime value calculations",
      "Conversion rate optimization metrics",
      "Responsive React frontend with Material-UI"
    ]
  },
  {
    id: 4,
    title: "Telex Dev Tracker",
    description: "A development tracking assistant bot for Telex, built with Node.js, TypeScript, and Mastra AI agents. Manages tasks via natural language commands, auto-generates daily progress summaries, detects issues from messages, and integrates with Telex workflows through Agent-to-Agent (A2A) communication and webhooks.",
    image: "telex-dev-tracker.png",
    githubUrl: "https://github.com/Raleke/telex-dev-tracker",
    liveUrl: "https://telex-dev-tracker-production.up.railway.app",
    techStack: ["Node.js", "TypeScript", "Express", "Mastra", "SQLite", "Docker", "Cron"],
    featured: true,
    highlights: [
      "Natural language task management commands",
      "Automated daily progress summaries",
      "Issue detection from message content",
      "Agent-to-Agent (A2A) protocol integration",
      "Telex webhook support",
      "Progress tracking with visual charts",
      "Admin endpoints for manual operations",
      "Dockerized for consistent deployment"
    ]
  },
  {
    id: 5,
    title: "Happiness Crochet Corner (HCC)",
    description: "A content and e-commerce platform for learning crochet, offering free and paid stitch-by-stitch lessons for beginners through intermediate makers. Includes a tiered membership model (Free Zone / Pro Zone), a shop for hooks, yarn, and starter kits, and subscription pricing.",
    image: "hcc.png",
    githubUrl: "https://github.com/Raleke/hcc",
    liveUrl: "https://hcc-seven.vercel.app",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    featured: false,
    highlights: [
      "Free and paid crochet lesson tiers",
      "Tiered membership model (Free Zone / Pro Zone)",
      "Shop for hooks, yarn, and starter kits",
      "Subscription-based pricing",
      "Content platform for beginner to intermediate makers"
    ]
  }
];

export default projectsData;
