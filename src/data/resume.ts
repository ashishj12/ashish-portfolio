export const profile = {
  name: "Ashish Kumar",
  initials: "AK",
  role: "Backend Software Engineer",
  status: "Open to opportunities",
  email: "jangidashish38@gmail.com",
  phone: "+91 8690869917",
  linkedin: "https://linkedin.com/in/ashish-kumar86j",
  github: "https://github.com/ashishj12",
  summary:
    "Backend engineer who ships production-grade REST APIs - JWT auth, versioned database schemas, and third-party AI integrations, end to end.",
  bio: [
    "I'm Ashish, a backend-focused software engineer with a passion for building robust, maintainable APIs. I enjoy designing systems that are not only functional but also intuitive for other developers to use.",
    "I build APIs the way I'd want to consume them - validated inputs, predictable errors, documented contracts, and auth that doesn't leak. Most of what I ship runs on Spring Boot or Node.js, backed by PostgreSQL or MongoDB.",
    "Recently I've been deep in Spring Security 6, Flyway migrations, and wiring LLMs into real backend workflows - not demos, production paths with rate limits and error states.",
  ],
};

export const stack = [
  {
    group: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Go"],
  },
  {
    group: "Backend Frameworks",
    items: [
      "Spring Boot",
      "Spring Security 6",
      "Hibernate / JPA",
      "Node.js",
      "Express.js",
      "Next.js",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Neon (cloud)"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "GitHub Actions", "Linux"],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "Maven",
      "Flyway",
      "Swagger / OpenAPI 3.0",
      "Postman",
      "Zod",
      "Zustand",
    ],
  },
  {
    group: "Concepts",
    items: [
      "REST API Design",
      "JWT / RBAC / OAuth",
      "Clean Architecture",
      "System Design",
      "DSA",
      "LLM API Integration",
    ],
  },
];

export const marqueeItems = [
  "Java",
  "Spring Boot",
  "Spring Security 6",
  "Node.js",
  "Next.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Docker",
  "JWT",
  "REST APIs",
  "Flyway",
  "OpenAPI 3.0",
  "Groq API",
];

export type Project = {
  method: "GET" | "POST" | "PUT";
  slug: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  highlights: string[];
  link: string;
};

export const projects: Project[] = [
  {
    method: "POST",
    slug: "ai-learning-adventure",
    name: "AI Learning Adventure",
    tag: "Gamified AI-Literacy Learning Platform",
    description:
      "A full-stack Next.js app teaching AI literacy through missions, quizzes, and flashcards - with a real backend: SQLite repository layer, Zod-validated API routes, and an AI tutor that degrades gracefully instead of breaking.",
    stack: [
      "Next.js",
      "TypeScript",
      "SQLite",
      "Zustand",
      "Zod",
      "Groq API",
      "Docker",
    ],
    highlights: [
      "8 missions across 5 difficulty levels, each with quizzes, flashcards, and an inline AI tutor scoped to that mission's content",
      "Hand-written repository layer over better-sqlite3 - server-side enforced publish/enabled checks, unreachable by learners even via direct URL",
      "Single AI provider function with an 8s timeout: live Groq call on success, deterministic topic-aware mock on any failure - the app never shows a broken screen",
      "Idempotent badge awards and quiz scoring, with progress persisted client-side via Zustand and a browser session id - no login required",
      "Passcode-gated admin panel to create/edit missions, quizzes, and flashcards, with draft/published and enabled/disabled toggles and a learner-preview mode",
      "Containerized with Docker Compose - first-run auto-seed, persisted named volume, and no local Node.js install required",
    ],
    link: "https://github.com/ashishj12/ai-learning-adventure",
  },
  {
    method: "POST",
    slug: "mockmate",
    name: "MockMate",
    tag: "AI-Powered Career Coaching Backend",
    description:
      "10+ microservices on Clean Architecture, stateless JWT via Clerk, and four Gemini-powered career tools behind one consistent API contract.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "Clerk"],
    highlights: [
      "10+ microservices - controllers, services, repositories, DTOs, mappers kept independently testable",
      "Stateless JWT auth with a custom JwtAuthFilter and JWKS key rotation in the Spring Security 6 chain",
      "Gemini API integration: ATS resume scoring, cover letters, mock interviews, weekly trend digests",
      "Generic ApiResponse<T> wrapper + global @ControllerAdvice - one error-handling layer for every endpoint",
      "Flyway-versioned schema across 6 tables, zero-downtime on a Neon PostgreSQL instance",
      "Full Swagger / OpenAPI 3.0 contracts + a Postman collection for manual and automated testing",
    ],
    link: "https://github.com/ashishj12/mockmate",
  },
  {
    method: "GET",
    slug: "edutrack",
    name: "EduTrack",
    tag: "Facial Recognition Attendance System",
    description:
      "Node.js backend wired to an MTCNN + FaceNet inference pipeline, with three-tier RBAC and sub-500ms response times under live load.",
    stack: ["Node.js", "Express.js", "MongoDB", "MTCNN", "Docker"],
    highlights: [
      "MTCNN + FaceNet inference over REST - 82% recognition accuracy, sub-500ms responses live",
      "Three-tier RBAC (Admin / Faculty / Student) with fine-grained checks on every protected route",
      "Cut manual attendance time by ~80% for a 60-student cohort",
      "Stateless JWT + bcrypt, with Postman suites covering invalid, expired, and concurrent sessions",
    ],
    link: "https://github.com/ashishj12/EduTrack",
  },
  {
    method: "GET",
    slug: "booknest",
    name: "BookNest",
    tag: "Full-Stack E-Commerce Bookstore",
    description:
      "Modular Express APIs for catalog, users, and orders, end to end from cart to checkout, with Firebase-backed auth and structured request logging.",
    stack: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "Firebase",
      "Docker",
    ],
    highlights: [
      "Modular REST APIs - user management, product catalog, order processing, role-based access",
      "End-to-end cart-to-checkout workflow across the storefront",
      "Firebase Authentication with bcrypt-encrypted sessions",
      "Structured logging tracking API response times and error rates",
    ],
    link: "https://github.com/ashishj12/Books_Store",
  },
];

export const experience = [
  {
    company: "Freelance",
    role: "Backend Software Engineer",
    location: "Remote",
    period: "Nov 2025 - Apr 2026",
    points: [
      "Designed and developed scalable RESTful APIs using Node.js, Express.js, and Java Spring Boot for web applications and client projects.",
      "Built secure authentication and authorization systems using JWT, Spring Security, and role-based access control (RBAC).",
      "Integrated and managed databases including MongoDB, PostgreSQL, and MySQL, optimizing queries for improved performance.",
      "Developed backend modules for AI-powered and business applications, ensuring clean architecture and maintainable code.",
    ],
  },
  {
    company: "OctaNet Services Pvt. Ltd.",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Jul 2024 - Nov 2024",
    points: [
      "Shipped RESTful endpoints in Node.js / Express.js for core product features, with express-validator input validation and structured error handling on every route",
      "Implemented JWT auth with bcrypt hashing; ran Postman scenarios covering invalid tokens, expired sessions, and concurrent logins",
      "Added compound indexes to MongoDB schemas - cut average query response time by 35% and lowered read load on high-traffic endpoints",
    ],
  },
];

export const education = {
  school: "Sri Balaji College of Engineering & Technology",
  degree: "B.Tech in Computer Science",
  detail: "CGPA 8.3 / 10",
  location: "Jaipur, Rajasthan",
  period: "2021 - 2025",
};

export const navLinks = [
  { path: "/about", label: "About", href: "#about" },
  { path: "/stack", label: "Stack", href: "#stack" },
  { path: "/work", label: "Work", href: "#work" },
  { path: "/experience", label: "Experience", href: "#experience" },
  { path: "/contact", label: "Contact", href: "#contact" },
];
