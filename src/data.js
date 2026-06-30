// Static, curated project data — used as the source of truth for descriptions
// and tech stacks (richer than what GitHub API alone provides), then enriched
// with live stars/forks/updated-at from the GitHub API when available.

export const GITHUB_USERNAME = "SaniyaArora03";

export const FEATURED_ORDER = ["reviewload", "ai-code-reviewer", "rehabease", "job-tracker"];

export const PROJECTS = [
  {
    id: "reviewload",
    repo: "GitHub-PR-Reviewer",
    title: "ReviewLoad",
    tagline: "Intelligent GitHub reviewer recommendation system",
    description:
      "A modular MERN application that recommends the fairest, most qualified reviewer for any pull request — built on a layered Controller–Service–Algorithm architecture integrating live GitHub data.",
    points: [
      "Integrated 5+ GitHub REST API endpoints to analyze repos, PRs, commit history, and file-level metadata in real time",
      "Built a weighted recommendation engine combining 4 metrics: expertise, review load, fairness, and burnout",
      "Computes developer expertise mapping directly from commit history — no manual tagging required",
      "Designed reusable REST APIs and a GitHub-inspired analytics dashboard for repo insights",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "GitHub REST API", "Axios"],
    demo: "https://github-pr-reviewer-frontend.onrender.com",
    color: "#6E56CF",
  },
  {
    id: "ai-code-reviewer",
    repo: "AI-Code-Reviewer",
    title: "AI Code Reviewer",
    tagline: "RAG-based developer tool for automated defect detection",
    description:
      "An end-to-end AI-powered code review platform integrating four AI components into one pipeline — semantic embedding, defect classification, vector retrieval, and LLM-based reasoning — shipped with a Chrome Extension.",
    points: [
      "Generated 768-dim semantic embeddings via CodeBERT, trained a Random Forest classifier on 21K+ samples from CodeXGLUE",
      "Built FAISS-powered vector search for retrieving similar code patterns at inference time",
      "Shipped as a Chrome Extension — real-time AI review on any selected snippet, directly in-browser",
      "DeepSeek LLM integration generates context-aware fix explanations, not just defect flags",
    ],
    stack: ["Python", "FastAPI", "React", "CodeBERT", "FAISS", "DeepSeek LLM"],
    demo: null,
    color: "#3FB950",
  },
  {
    id: "rehabease",
    repo: "RehabEase",
    title: "RehabEase",
    tagline: "Real-time physiotherapy exercise monitoring",
    description:
      "A MERN + computer vision system that tracks physiotherapy exercise form in real time, helping patients self-correct without a therapist physically present for every session.",
    points: [
      "Real-time pose tracking via MediaPipe for live exercise form correction",
      "95%+ monitoring accuracy across tracked exercise sessions",
      "JWT-authenticated patient sessions with persistent progress history",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "Node.js", "Express", "MongoDB"],
    demo: null,
    color: "#F2994A",
  },
  {
    id: "job-tracker",
    repo: "Job-Tracker",
    title: "Job Tracker",
    tagline: "MERN job application tracker, adopted by peers",
    description:
      "A personal job-application dashboard with smart filters, organically adopted by classmates for their own placement-season tracking — the best kind of validation.",
    points: [
      "Full CRUD with login system and a personalized per-user dashboard",
      "Smart filters for status, company, and deadline tracking",
      "Adopted by 5+ peers for real-time job tracking during placement season",
    ],
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "REST API"],
    demo: "https://job-tracker-j75i.onrender.com",
    color: "#58A6FF",
  },
  {
    id: "fixitnow",
    repo: "Fix_It_Now",
    title: "FixItNow",
    tagline: "Smart service request platform — MERN",
    description:
      "A role-based service marketplace with backend-driven job assignment, built around authentication correctness and scalable workflow design across customer, technician, and admin roles.",
    points: [
      "Role-based access control across customer / technician / admin with JWT + Express middleware",
      "Allocation engine factors live availability, skill tags, and technician fatigue before assigning jobs",
      "Live location-based dashboards with backend-controlled job visibility for full lifecycle tracking",
      "Post-job rating system feeds back into technician ranking for smarter future allocation",
    ],
    stack: ["React 19 (Vite)", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "https://fix-it-now-1.onrender.com",
    color: "#3FB950",
  },
  {
    id: "proctoring",
    repo: "Proctoring-System",
    title: "Adaptive AI Proctoring",
    tagline: "Explainable real-time exam proctoring system",
    description:
      "A proctoring system that learns a personalized behavioral baseline per candidate instead of applying one rigid rule to everyone — with explainability built in for human reviewers.",
    points: [
      "Unsupervised anomaly detection on gaze and head-pose patterns, baselined per individual",
      "Rolling-window smoothing + confidence-based decisions to cut false-positive alerts",
      "Fuses vision, audio activity, and system events for multi-modal cheating detection",
      "Generates explainable risk timelines and event logs for human reviewers, not a black-box flag",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "Scikit-learn"],
    demo: null,
    color: "#F25F5C",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C++"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    category: "AI / ML",
    items: ["CodeBERT", "FAISS", "Scikit-learn", "LangChain", "RAG", "NLP"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const EXPERIENCE = [
  {
    role: "Open-Source Contributor",
    org: "GirlScript Summer of Code",
    period: "Jun – Sep 2025",
    points: [
      "Contributed bug fixes and feature enhancements to open-source repositories",
      "Gained hands-on experience with GitHub workflows, issue tracking, and collaborative coding practices",
    ],
  },
  {
    role: "Super Contributor",
    org: "Hacktoberfest 2025",
    period: "Oct 2025",
    points: [
      "Merged 6+ PRs in DSA-focused open-source repositories",
      "Contributed optimized solutions and improvements through collaborative GitHub workflows",
    ],
  },
  {
    role: "Designing Head",
    org: "LEAD Society, Thapar Institute",
    period: "Jun 2025 – Apr 2026",
    points: [
      "Led visual design for 10+ technical and cultural events",
      "Delivered 50+ design assets, contributing to a 70% improvement in event engagement",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Engineering",
    school: "Thapar Institute of Engineering and Technology, Patiala",
    period: "Aug 2023 – Present",
    detail: "CGPA: 8.59 / 10",
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    school: "Police D.A.V. Public School, Jalandhar Cantt.",
    period: "May 2023",
    detail: "94%",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "400+ LeetCode Problems Solved",
    detail: "100+ day consistent solving streak",
  },
  {
    title: "Hacktoberfest 2025 — Super Contributor",
    detail: "6+ merged PRs across open-source repositories",
  },
  {
    title: "Smart India Hackathon 2025",
    detail: "Reached internal college selection round",
  },
  {
    title: "NVIDIA Deep Learning Certification",
    detail: "Getting Started with Deep Learning — NVIDIA DLI",
  },
  {
    title: "Postman API Student Expert",
    detail: "Certified in API design and testing fundamentals",
  },
];
