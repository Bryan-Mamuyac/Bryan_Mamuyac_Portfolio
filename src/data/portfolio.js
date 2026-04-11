// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Bryan Mamuyac",
  nickname: "Bryan",
  tagline: "Full Stack Developer",
  taglineAlt: "Data Analyst",
  taglineAlt2: "Problem Solver",
  location: "Aringay, La Union, Philippines",
  email: "bryanmamuyac24@yahoo.com",
  phone: "09957691537",
  bio: "Information Technology graduate from DMMMSU-MLUC, major in Business Analytics. Building systems that automates and dashboards that speak. Bridging full-stack development and data analytics to build solutions that don't just run — they reveal.",
  bio2: "Currently seeking opportunities in Full Stack Development and Data Analytics where I can bridge these two disciplines to build products that don't just run, but reveal.",
  avatar: "/assets/images/bryan.jpg",          // Replace with your actual photo
  resumeUrl: "/assets/resume/Mamuyac_Bryan_JR_Resume.pdf",
  github: "https://github.com/Bryan-Mamuyac",
  linkedin: "https://www.linkedin.com/in/bryan-mamuyac-jr-2648543b2/",
  githubRepos: "https://github.com/Bryan-Mamuyac?tab=repositories",
  facebook: "https://www.facebook.com/BETA.XbX177.03",
  instagram: "https://www.instagram.com/bryy.bocchi/",
  twitter: "https://x.com/mamuyac89900",
};

export const navLinks = [
  { label: "Home",       to: "hero"       },
  { label: "About",      to: "about"      },
  { label: "Skills",     to: "skills"     },
  { label: "Analytics",  to: "analytics"  },
  { label: "Projects",   to: "projects"   },
  { label: "Experience", to: "experience" },
  { label: "Contact",    to: "contact"    },
];

export const skills = {
  fullstack: [
    { name: "ASP.NET Core MVC 8",      level: 90, icon: "aspnet"    },
    { name: "SQL Server / Dapper",      level: 88, icon: "database"  },
    { name: "HTML / CSS / JavaScript",  level: 92, icon: "code"      },
    { name: "PHP / Laravel",            level: 75, icon: "php"       },
    { name: "MySQL",                    level: 82, icon: "mysql"     },
    { name: "SignalR (WebSockets)",     level: 78, icon: "signal"    },
    { name: "React",                    level: 70, icon: "react"     },
  ],
  dataAnalytics: [
    { name: "Power BI",                 level: 88, icon: "powerbi"   },
    { name: "Tableau",                  level: 55, icon: "tableau",  tag: "Learning" },
    { name: "Python (Pandas / NumPy)",  level: 82, icon: "python"    },
    { name: "SQL (Querying & Reporting)",level: 88, icon: "sql"      },
    { name: "Excel / SSIS",             level: 78, icon: "excel"     },
    { name: "Data Visualization",       level: 85, icon: "chart"     },
  ],
  other: [
    { name: "IoT / Arduino",            level: 72, icon: "iot"       },
    { name: "Cisco Networking",         level: 70, icon: "network"   },
    { name: "Git / GitHub",             level: 80, icon: "git"       },
    { name: "Adobe Premiere Pro",       level: 65, icon: "premiere"  },
    { name: "Canva",                    level: 85, icon: "canva"     },
  ],
};

export const techBadges = [
  "ASP.NET Core", "SQL Server", "Power BI", "Python", "React",
  "PHP", "Laravel", "MySQL", "SignalR", "JavaScript", "HTML/CSS",
  "Arduino", "Tableau", "Cisco", "Git", "Dapper", "SSIS", "Pandas", "NumPy",
];

export const projects = [
  {
    id: 1,
    title: "INTERNIFY",
    subtitle: "OJT Management System",
    type: "Intern Project",
    year: "2026",
    category: "fullstack",
    description: "A web-based On-the-Job Training management system built for Universal Leaf Philippines, Inc. Supports multi-branch trainee supervision, real-time communication, task management, file handling, and performance tracking.",
    longDescription: "Sole full-stack developer of Internify. Implemented real-time chat via SignalR, automated task expiry via SQL Server Agent, FullCalendar scheduling, multi-role access control (Admin, Employee, OJT), complete file lifecycle for task submissions, and branch-level performance dashboards.",
    tech: ["ASP.NET Core MVC 8", "SQL Server", "Dapper", "SignalR", "FullCalendar", "JavaScript"],
    github: "https://github.com/Bryan-Mamuyac/INTERNIFY_Intern-Project_Universal-Leaf-Philippines-Inc.",
    image: "/assets/projects/internify-preview.jpg",  // Add your screenshot here
    featured: true,
    highlight: "Solo full-stack developer",
    color: "#63b3ed",
    tags: ["Real-Time", "Multi-Branch", "MVC"],
  },
  {
    id: 2,
    title: "Power BI Embedded Website",
    subtitle: "Report Management System",
    type: "Intern Project",
    year: "2026",
    category: "fullstack",
    description: "A web-based Power BI report management system featuring embedded report viewing, user authentication, drag-to-reorder dashboards, and role-based access control.",
    longDescription: "Built using ASP.NET Core MVC 8 with SQL Server for user and report metadata management. Features include embedded Power BI reports, profile management, and multi-role access control.",
    tech: ["ASP.NET Core MVC 8", "SQL Server", "Power BI Embedded", "JavaScript"],
    github: "https://github.com/Bryan-Mamuyac/Power-BI--Embedded-website",
    image: "/assets/projects/powerbi-preview.jpg",   // Add your screenshot here
    featured: true,
    highlight: "Power BI Embedded Integration",
    color: "#9f7aea",
    tags: ["Power BI", "Embedded", "Analytics"],
  },
  {
    id: 3,
    title: "Aqualitics",
    subtitle: "IoT Water Quality Monitoring",
    type: "Capstone Project",
    year: "2026",
    category: "iot",
    description: "An IoT-based real-time monitoring system assessing tap water quality (temperature, pH, turbidity, TDS, and electrical conductivity) via Arduino Uno R3 with a live web dashboard.",
    longDescription: "Developed the full stack: Arduino sensor integration, hardware data pipelines, PHP/MySQL backend, and a live visualization dashboard. Combines IoT hardware with meaningful visual outputs for informed decision-making.",
    tech: ["Arduino Uno R3", "PHP", "MySQL", "HTML/CSS/JS", "IoT Sensors"],
    github: "https://github.com/Bryan-Mamuyac/AQUALITICS-IoT-BASED-REAL-TIME-MONITORING-FOR-TAP-WATER-QUALITY-ASSESSMENT",
    image: "/assets/projects/aqualitics-preview.jpg", // Add your screenshot here
    featured: true,
    highlight: "Hardware + Software integration",
    color: "#4dd0e1",
    tags: ["IoT", "Real-Time", "Arduino"],
  },
  {
    id: 4,
    title: "LUCA System",
    subtitle: "Double-Entry Bookkeeping App",
    type: "Personal Project",
    year: "2026",
    category: "fullstack",
    description: "A modern web-based double-entry bookkeeping application that helps users record, manage, and analyze financial transactions in real time, featuring an interactive ledger and automatic journal entries.",
    longDescription: "Built with HTML, CSS, and JavaScript with Vercel deployment. Features an interactive ledger, automatic double-entry posting, and real-time financial analytics.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    github: "https://github.com/Bryan-Mamuyac/LUCA_System",
    image: "/assets/projects/luca-preview.jpg",       // Add your screenshot here
    featured: false,
    highlight: "Deployed on Vercel",
    color: "#68d391",
    tags: ["Finance", "JavaScript", "Deployed"],
  },
  {
    id: 5,
    title: "Ancient Dungeon Quest",
    subtitle: "2D Fighting Game",
    type: "College Project",
    year: "2025",
    category: "game",
    description: "A thrilling 2D dungeon escape game built with Python and Pygame using OOP architecture, featuring enemy AI, melee/ranged combat mechanics, unique boss enemies, and full game state management.",
    longDescription: "Implemented with OOP patterns: player classes, enemy hierarchy (Fire Worm with melee immunity and reflected fireball damage), UI (health bars, retry/exit buttons), combat mechanics, and complete game state management.",
    tech: ["Python", "Pygame", "OOP"],
    github: "https://github.com/Bryan-Mamuyac/Ancient-Dungeon-Quest_OOP_Project",
    image: "/assets/projects/dungeon-preview.jpg",    // Add your screenshot here
    featured: false,
    highlight: "OOP Game Architecture",
    color: "#fc8181",
    tags: ["Game Dev", "Python", "OOP"],
  },
];

export const experience = [
  {
    id: 1,
    role: "IT Department Intern",
    subtitle: "Full-Stack Developer & Data Analyst · QA & User Testing",
    company: "Universal Leaf Philippines, Inc. (ULPI)",
    location: "Sta. Rita Norte, Agoo, La Union",
    period: "January 2026 – April 2026",
    hours: "520 Hours",
    type: "OJT / Internship",
    highlights: [
      "Designed and deployed a Power BI data visualization dashboard from raw company Excel data, delivering clearer operational insights for the IT department.",
      "Sole full-stack developer of Internify — a web-based OJT Management System built with ASP.NET Core MVC 8 and SQL Server, supporting multi-branch trainee supervision.",
      "Implemented real-time chat via SignalR, task management, file handling, and performance tracking with multi-role access control.",
      "Performed Quality Assurance (QA) and User Testing on the Internify system — identifying and resolving bugs, validating user flows, and ensuring system reliability across Admin, Employee, and OJT roles.",
      "Configured and applied SQL Server Agent jobs for automated task expiry, scheduled maintenance, and background job processing within the Internify system.",
      "Contributed to ASP.NET MVC enterprise web development following MVC patterns used in production systems.",
      "Performed server patching, network troubleshooting, and desktop hardware diagnostics across departmental units.",
      "Managed server cable organization and cleaned data cabinets to maintain a structured and efficient IT infrastructure environment.",
      "Assisted in the configuration of Windows Server 2012 R2 — including Active Directory setup, DNS and DHCP configuration, and VLAN management across network segments.",
      "Participated in IP Brick (VoIP/PBX) telephone configuration, contributing to the company's internal communication infrastructure setup.",
    ],
    logo: "/assets/images/ulpi-logo.png",  // Add company logo if available
    color: "#63b3ed",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    major: "Business Analytics",
    school: "Don Mariano Marcos Memorial State University – MLUC",
    location: "San Fernando City, La Union",
    period: "2021 – 2026",
    logo: "/assets/images/dmmmsu-logo.png",  // Add school logo if available
  },
];

export const activities = [
  {
    title: "University Esports Champion",
    subtitle: "DMMMSU-MLUC University Meet – Dota 2",
    year: "2021",
    icon: "🏆",
    description: "Represented the university in competitive gaming, demonstrating teamwork and strategic performance under pressure.",
  },
];

export const seminars = [
  "IWOSCS – International Webinar on Online Safety & Cybersecurity (2025)",
  "Building a Web Solution using Gemini and Firebase Studio Workshop (2025)",
  "Hour of Code – AI Ready ASEAN Programme (2025)",
  "VA: Future-Proof Your Skills, AI-Powered Info Session Webinar (2025)",
  "Tech-Driven Projects: Effective ICT Planning to Closing Info Session (2025)",
];

export const careerPath = {
  primary: {
    title: "Full Stack Developer",
    icon: "⚡",
    color: "#63b3ed",
    description: "Building scalable web apps with clean architecture and real-time features.",
    current: ["ASP.NET Core MVC", "SQL Server", "SignalR", "JavaScript", "PHP/Laravel"],
    learning: ["React", "Node.js", "Docker", "Azure"],
  },
  secondary: {
    title: "Data Analyst / Data Engineer",
    icon: "📊",
    color: "#9f7aea",
    description: "Transforming raw data into actionable business insights through visualization and pipelines.",
    current: ["Power BI", "Python (Pandas, NumPy)", "SQL", "SSIS"],
    learning: ["Tableau", "Apache Spark", "dbt", "Cloud Data Warehouses"],
  },
};

export const contactInfo = {
  email: "bryanmamuyac24@yahoo.com",
  phone: "09957691537",
  location: "Aringay, La Union, Philippines",
  github: "https://github.com/Bryan-Mamuyac",
  linkedin: "https://www.linkedin.com/in/bryan-mamuyac-jr-2648543b2/",
  facebook: "https://www.facebook.com/BETA.XbX177.03",
  instagram: "https://www.instagram.com/bryy.bocchi/",
  twitter: "https://x.com/mamuyac89900",
  availability: "Open to Work",
  availabilityNote: "Actively looking for Full Stack Developer and Data Analyst roles.",
};