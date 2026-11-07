export const profile = {
  name: "Sahed Ahmed",
  role: "Full-stack developer and CSE student building scalable web software.",
  proof: "A hospital billing system I built is live in production and used by real staff every day.",
  email: "asahed532@gmail.com",
  phone: "+8801959110458",
  location: "Airport, Dhaka, Bangladesh",
  github: "https://github.com/SahedShovo",
  linkedin: "https://www.linkedin.com/in/sahed-ahmed-918130352/",
  videoId: "NSE187LflxU",
  about:
    "I'm a Computer Science and Engineering student at AIUB (2023–2026) with a strong base in software development, analytical thinking and problem solving. I build full-stack applications with clean APIs, solid databases and responsive interfaces, and I want to keep growing in a professional team on innovative projects.",
};

export const skills = [
  { group: "Languages", items: ["C++", "C#", "Java", "JavaScript", "TypeScript", "Python"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST API design", "JWT authentication"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { group: "Architecture", items: ["Design patterns", "Scalability", "Requirement engineering", "OOP", "Software testing"] },
  { group: "Tools and AI", items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Data analysis", "Computer vision"] },
];

export const projects = [
  {
    title: "DKPSSHP Hospital Billing System",
    stack: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Drizzle ORM"],
    points: [
      "Full-stack system to manage patients, doctors, diagnostic tests, service packages, admissions, bills, payments and expenses.",
      "Deployed to production and used by real users for hospital billing.",
      "NestJS REST API with PostgreSQL and Drizzle ORM, secured with JWT authentication and role-based access control.",
      "Paginated records, financial reports, date-based exports, printable invoices and audit logging.",
      "SQL migrations and database safeguards that keep bill balances consistent with the payment and refund ledger.",
    ],
    demo: "https://dkpss-hospital-billing.vercel.app/login",
    github: "https://github.com/SahedShovo/DKPSS_Hospital_Billing",
  },
  {
    title: "FounderLink (team project)",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    points: [
      "Built the frontend of a co-founder matching platform that scores profiles against startup roles with an explainable, four-factor compatibility score.",
      "Created responsive, reusable UI components with Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
      "Deployed on Vercel and worked with teammates using Git and GitHub.",
    ],
    demo: "https://founderlink-client.vercel.app/",
    github: "https://github.com/sisiam08/FounderLink-Frontend.git",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  school: "American International University-Bangladesh (AIUB), 2023–2026",
  courses:
    "Advanced Web Technologies, Data Structures and Algorithms, Software Architecture and Design Patterns, Object-Oriented Programming, Database Management Systems, Software Engineering, Computer Networks, Operating Systems, Artificial Intelligence, Data Science, Computer Vision and Pattern Recognition.",
  extras: [
    "Participated in the AIUB Inter University Problem Solving Competition, 2024.",
    "Ongoing research work with a supervising faculty member.",
    "Languages: English (fluent), Bangla (native).",
  ],
};

export const reference =
  "Dr. Khandaker Tabin Hasan, Professor and Associate Dean, Department of Computer Science, AIUB (tabin@aiub.edu)";
