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
    liveUrl: "https://dev-tracker-bi1l.onrender.com",
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
    title: "Hospital Management System",
    description: "A comprehensive hospital management system designed to streamline healthcare operations and improve patient care. This backend API provides complete functionality for managing hospital resources, patient records, appointments, staff scheduling, and medical inventory. The system includes role-based access control for different user types (doctors, nurses, administrators, patients), appointment booking and management, electronic health records (EHR) management and prescription handling. Advanced features include automated scheduling algorithms, inventory alerts for medical supplies, patient history tracking, and comprehensive reporting for hospital administrators.",
    image: "hospital-new.png",
    githubUrl: "https://github.com/Raleke/hospital",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose", "Docker", "Jest", "Supertest"],
    featured: true,
    highlights: [
      "Complete patient management system",
      "Electronic health records (EHR) management",
      "Appointment booking and scheduling",
      "Role-based access control",
      "Medical inventory management",
      "Prescription and medication tracking",
      "Staff scheduling and management",
      "Comprehensive reporting and analytics"
    ]
  },
  {
    id: 5,
    title: "AI Semantic API",
    description: "An innovative AI-powered semantic analysis API currently in active development. This cutting-edge project focuses on natural language processing and semantic understanding, providing intelligent text analysis capabilities. The system is being built to offer advanced features including sentiment analysis, entity recognition, topic modeling, and semantic similarity matching. While still under construction, the architecture is designed to support scalable AI processing with integration capabilities for various NLP models and services.",
    image: "ai-semantic-new.png",
    githubUrl: "https://github.com/Raleke/ai-semantic-api",
    techStack: ["Node.js", "Express", "Python", "TensorFlow", "Natural Language Processing", "MongoDB", "Docker", "Microservices"],
    featured: false,
    highlights: [
      "Natural language processing capabilities",
      "Sentiment analysis and entity recognition",
      "Topic modeling and semantic similarity",
      "Scalable AI processing architecture",
      "Integration with various NLP models",
      "Microservices-based design",
      "RESTful API with comprehensive documentation",
      "Active development with continuous improvements"
    ]
  }
];

export default projectsData;
