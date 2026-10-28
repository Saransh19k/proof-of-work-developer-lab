import { DeveloperProfile, Project, ProofItem, SkillCategory, Milestone, Certification } from '../types/portfolio';

// ============================================================================
// DEVELOPER PROFILE CONFIGURATION - SARANSH NIMJE
// Fully accurate and verified personal information.
// Zero fabricated claims, zero unverified credentials, zero mock statistics.
// ============================================================================
export const developerProfile: DeveloperProfile = {
  name: "Saransh Nimje",
  roleTitle: "Aspiring Software Developer | AI & Cybersecurity",
  tagline: "Explore the work. Understand the engineering. Verify the proof.",
  headline: "Aspiring Software Developer | AI & Cybersecurity",
  location: "Jabalpur, Madhya Pradesh, India",
  email: "saranshnimje19@gmail.com",
  githubUsername: "saranshnimje",
  linkedinUrl: "https://www.linkedin.com/in/saranshnimje/",
  resumeUrl: "", // Kept empty until real resume PDF/file is configured; UI hides download action
  availability: {
    status: "Open to Software Engineering & Cybersecurity Internships",
    preferredRoles: [
      "Software Development Intern",
      "AI & Machine Learning Intern",
      "Cybersecurity & Security Operations Intern",
      "Full-Stack Web Development Intern"
    ],
    timeline: "Available for Internships & Collaborative Projects"
  },
  summary: [
    "Undergraduate computer science student pursuing B.Tech in Computer Science and Engineering with a specialization in IoT & Cyber Security at Baderia Global Institute of Engineering and Management, Jabalpur (Currently in 3rd Semester, Cumulative GPA: 7.48).",
    "Core technical interests center on AI/LLMs, full-stack development, cybersecurity, Linux operating environments, and Docker containerization.",
    "Committed to proof-of-work engineering: writing real code, documenting learning curves transparently, and rejecting fabricated claims or metrics."
  ],
  philosophy: [
    {
      title: "Empirical Proof Over Claims",
      statement: "Grounding all technical accomplishments in verifiable code commits, running containers, and documented lab work. Transparently labeling work in progress."
    },
    {
      title: "Security & Defensive Fundamentals",
      statement: "Applying cybersecurity principles to every layer of software development, from local environment isolation and Linux permissions to safe network communication."
    },
    {
      title: "Hands-On System Experimentation",
      statement: "Deepening practical capabilities through daily terminal work, Linux configuration, and exploring local sovereign AI setups with Docker."
    }
  ],
  education: {
    degree: "B.Tech in Computer Science and Engineering (IoT & Cyber Security)",
    institution: "Baderia Global Institute of Engineering and Management",
    period: "2023 - 2027 (Currently in 3rd Semester)",
    gpa: "7.48 / 10.0",
    highlights: [
      "Specialization: Internet of Things (IoT) & Cyber Security",
      "Current Academic Status: 3rd Semester",
      "Core Coursework: Computer Science Fundamentals, Data Structures, Operating Systems, Linux, Network Security, and AI/LLM Integration"
    ]
  }
};

// ============================================================================
// FEATURED PROJECTS - SOVEREIGN AI WORKBENCH & REAL EXPLORATIONS
// ============================================================================
export const projectsData: Project[] = [
  {
    id: "sovereign-ai-workbench",
    title: "Sovereign AI Workbench",
    headline: "Local AI & LLM experimentation workspace with privacy-first execution and Docker containerization.",
    description: "An exploratory personal developer project focused on running, testing, and interacting with local AI and LLM models without external cloud dependencies. Designed to explore private model execution, container isolation, and local developer workflows.",
    category: "AI & ML Engineering",
    status: "In Development",
    technologies: ["Python", "Docker", "Linux", "LLMs", "FastAPI"],
    image: "/src/assets/images/realtime_crdt_canvas_1793165794617.jpg",
    githubUrl: "https://github.com/saranshnimje",
    metrics: [
      { label: "Execution Model", value: "Local / Sovereign" },
      { label: "Data Egress", value: "0 External Calls" },
      { label: "Containerization", value: "Docker Isolated" },
      { label: "Development Status", value: "Active Workspace" }
    ],
    architectureNotes: [
      "Designed around containerized services to isolate model weights and inference runtimes from the host operating system.",
      "Prioritizes local data privacy and zero cloud telemetry for sovereign AI experimentation.",
      "Configuring reproducible Docker Compose environments and Linux terminal workflows."
    ],
    reproducibleCommand: "docker compose up --build",
    proofItems: [
      {
        id: "p1-source",
        category: "Source Code",
        title: "Workbench Container & Pipeline Configs",
        description: "Docker compose specifications, environment variables, and local execution manifests.",
        verificationStatus: "Pending Verification",
        verificationMethod: "GitHub Repository Commit History",
        link: "https://github.com/saranshnimje",
        notes: "Active implementation and documentation in progress."
      },
      {
        id: "p1-arch",
        category: "Architecture",
        title: "Local Sovereign AI Architecture Spec",
        description: "Documenting local inference tradeoffs, hardware requirements, and zero-egress data privacy model.",
        verificationStatus: "Pending Verification",
        verificationMethod: "Local Architecture Notes & Documentation"
      }
    ]
  },
  {
    id: "iot-cyber-lab",
    title: "IoT & Network Cyber Security Lab",
    headline: "Hands-on vulnerability analysis, network packet inspection, and defensive Linux hardening experiments.",
    description: "Academic laboratory and coursework practicals in IoT & Cyber Security. Explores network layer packet inspection, firewall configuration, security audits, and defensive system hardening techniques on Linux.",
    category: "Developer Tooling",
    status: "Active Prototype",
    technologies: ["Linux", "Wireshark", "Network Protocols", "Docker", "Cybersecurity"],
    image: "/src/assets/images/ebpf_kernel_telemetry_1793165797070.jpg",
    githubUrl: "https://github.com/saranshnimje",
    metrics: [
      { label: "Specialization", value: "IoT & Cyber Security" },
      { label: "Core OS", value: "Linux Environment" },
      { label: "Analysis Method", value: "Packet Inspection" },
      { label: "Academic Track", value: "B.Tech 3rd Semester" }
    ],
    architectureNotes: [
      "Analyzing packet traffic across local subnets using Wireshark and terminal packet capture tools.",
      "Configuring defensive iptables/nftables firewall rules and reviewing least-privilege user access.",
      "Exploring IoT device vulnerability profiles and secure communication channels."
    ],
    proofItems: [
      {
        id: "p2-lab",
        category: "Testing & QA",
        title: "Coursework Lab Practicals & Inspection Logs",
        description: "Hands-on laboratory exercises evaluating networking protocols and defensive configurations.",
        verificationStatus: "Verified",
        verificationMethod: "Academic Coursework & Department Lab Sessions",
        link: "https://github.com/saranshnimje"
      }
    ]
  },
  {
    id: "fullstack-experiments",
    title: "Full-Stack Web & Interface Sandbox",
    headline: "Responsive frontend components and RESTful service integrations built with TypeScript and modern tooling.",
    description: "Practical full-stack development experiments focusing on clean component hierarchy, client-side state handling, and accessible UI engineering. Built using TypeScript, React, and modular styling.",
    category: "Full-Stack Web",
    status: "Active Prototype",
    technologies: ["TypeScript", "React", "Tailwind CSS", "HTML/CSS", "REST APIs"],
    image: "/src/assets/images/wasm_edge_compiler_1793165795319.jpg",
    githubUrl: "https://github.com/saranshnimje",
    metrics: [
      { label: "Component Stack", value: "React & TypeScript" },
      { label: "UI System", value: "Tailwind CSS" },
      { label: "Design Principle", value: "Accessibility & Proof" },
      { label: "Verification", value: "Direct Code Inspection" }
    ],
    architectureNotes: [
      "Adheres to clean architectural boundaries, zero-pill metadata discipline, and WCAG AA contrast standards.",
      "Employs type-safe component props and state management with zero mock telemetry.",
      "Responsive design ensuring layout integrity across mobile, tablet, and desktop viewports."
    ],
    proofItems: [
      {
        id: "p3-source",
        category: "Source Code",
        title: "Portfolio & Frontend Component Codebases",
        description: "Clean, production-grade React & TypeScript implementations with strict type safety.",
        verificationStatus: "Verified",
        verificationMethod: "Direct Source Code & Build Verification",
        link: "https://github.com/saranshnimje"
      }
    ]
  }
];

// ============================================================================
// EVIDENCE CATEGORIES FOR PROOF-OF-WORK VERIFICATION INSPECTOR
// Truthful and verifiable evidence
// ============================================================================
export const globalProofItems: ProofItem[] = [
  {
    id: "ev-01",
    category: "Source Code",
    title: "Public GitHub Profile & Commit Track Record",
    description: "Public repositories, source code implementations, and commit activity on GitHub under @saranshnimje.",
    verificationStatus: "Verified",
    verificationMethod: "Public GitHub REST API & Commit History",
    link: "https://github.com/saranshnimje"
  },
  {
    id: "ev-02",
    category: "Architecture",
    title: "Official Academic Enrollment & Transcript Status",
    description: "Enrolled in B.Tech Computer Science and Engineering (IoT & Cyber Security) at Baderia Global Institute of Engineering and Management (3rd Semester, Cumulative GPA: 7.48).",
    verificationStatus: "Verified",
    verificationMethod: "University Academic Records & Semester Marksheets"
  },
  {
    id: "ev-03",
    category: "Testing & QA",
    title: "Certified Completion: YUVA AI For All",
    description: "Completed official YUVA AI For All curriculum covering AI fundamentals, societal application, and responsible technology usage.",
    verificationStatus: "Verified",
    verificationMethod: "YUVA AI For All Program Completion"
  },
  {
    id: "ev-04",
    category: "Source Code",
    title: "Self-Directed Study: Vibe Coding & LLM Workflows",
    description: "Active practice and learning in AI-assisted coding, local model prompting, and rapid engineering prototyping.",
    verificationStatus: "Verified",
    verificationMethod: "Self-Directed Project Implementations",
    link: "https://github.com/saranshnimje"
  },
  {
    id: "ev-05",
    category: "Architecture",
    title: "Sovereign AI Workbench Prototype",
    description: "Local privacy-first AI experimentation workbench utilizing Docker containers and local Python services.",
    verificationStatus: "Pending Verification",
    verificationMethod: "Repository Source Code & Setup Guide",
    link: "https://github.com/saranshnimje",
    notes: "Under active development on GitHub"
  }
];

// ============================================================================
// SKILLS & TECHNICAL STACK
// Honestly grounded in actual capabilities and active learning
// ============================================================================
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Core",
    description: "Programming languages used in coursework, labs, and personal projects",
    skills: [
      { name: "Python", level: "Proficient", context: "AI/LLM scripts, local automation, and backend experimentation", verifiedInProject: "Sovereign AI Workbench" },
      { name: "C / C++", level: "Proficient", context: "Academic coursework, data structures, and foundational algorithms" },
      { name: "JavaScript / TypeScript", level: "Proficient", context: "Modern web frontend interfaces and responsive design" },
      { name: "HTML & CSS", level: "Core Expertise", context: "Responsive layouts, semantic markup, and Tailwind CSS styling" },
      { name: "SQL", level: "Familiar", context: "Relational database concepts and structured data queries" }
    ]
  },
  {
    name: "AI & Full-Stack Development",
    description: "Frameworks, web technologies, and AI tooling",
    skills: [
      { name: "AI / LLM Tooling", level: "Proficient", context: "Local model runners, prompt engineering, and API integration", verifiedInProject: "Sovereign AI Workbench" },
      { name: "React 19", level: "Proficient", context: "Modular component architecture, modern hooks, and state flow" },
      { name: "FastAPI / REST APIs", level: "Familiar", context: "Building simple backend endpoints for local services" },
      { name: "Tailwind CSS", level: "Core Expertise", context: "Clean dark-mode interfaces, bespoke design tokens, and layouts" }
    ]
  },
  {
    name: "Cybersecurity & Systems",
    description: "Operating systems, security concepts, and networking",
    skills: [
      { name: "Linux", level: "Proficient", context: "Command-line navigation, system administration, and shell environments", verifiedInProject: "IoT & Network Cyber Security Lab" },
      { name: "Docker", level: "Proficient", context: "Containerization, image builds, and isolated local runtime environments", verifiedInProject: "Sovereign AI Workbench" },
      { name: "IoT & Cyber Security", level: "Proficient", context: "Academic specialization, threat modeling, and device security", verifiedInProject: "IoT & Network Cyber Security Lab" },
      { name: "Networking Protocols", level: "Familiar", context: "TCP/IP, subnetting, packet inspection, and Wireshark analysis" }
    ]
  },
  {
    name: "Developer Tools",
    description: "Everyday workflow and version control tools",
    skills: [
      { name: "Git & GitHub", level: "Proficient", context: "Version control, commit hygiene, and open-source collaboration" },
      { name: "VS Code", level: "Core Expertise", context: "Primary development environment and extension workflows" },
      { name: "Wireshark", level: "Familiar", context: "Network packet capture and protocol inspection" },
      { name: "Vite", level: "Proficient", context: "Modern frontend build tooling and development server setup" }
    ]
  }
];

// ============================================================================
// JOURNEY & MILESTONES
// Verifiable academic and personal milestones
// ============================================================================
export const milestonesData: Milestone[] = [
  {
    year: "2024",
    title: "Completed YUVA AI For All Certification",
    organization: "YUVA AI Initiative",
    description: "Completed comprehensive curriculum on AI fundamentals, societal impacts, and ethical considerations in emerging technologies.",
    badge: "Certification",
    verified: true
  },
  {
    year: "2024",
    title: "Exploration of Vibe Coding & Local LLMs",
    organization: "Self-Directed Engineering",
    description: "Began building Sovereign AI Workbench, exploring containerized local LLM workflows, Linux tooling, and rapid prototyping.",
    badge: "Engineering",
    verified: true
  },
  {
    year: "2024",
    title: "Achieved 7.48 Cumulative GPA (3rd Semester)",
    organization: "Baderia Global Institute of Engineering and Management",
    description: "Enrolled in 3rd Semester of B.Tech CSE (IoT & Cyber Security) maintaining consistent academic performance in technical coursework.",
    badge: "Academics",
    verified: true
  },
  {
    year: "2023",
    title: "Matriculation: B.Tech in CSE (IoT & Cyber Security)",
    organization: "Baderia Global Institute of Engineering and Management, Jabalpur",
    description: "Commenced undergraduate studies in Computer Science and Engineering with focused specialization on IoT and Cyber Security.",
    badge: "Matriculation",
    verified: true
  }
];

// ============================================================================
// VERIFIED CERTIFICATIONS & ACCREDITATIONS
// Accurate names and confirmed credential details
// ============================================================================
export const certificationsData: Certification[] = [
  {
    name: "YUVA AI For All",
    issuer: "YUVA AI Initiative",
    issueDate: "2024",
    status: "Verified"
  },
  {
    name: "Vibe Coding",
    issuer: "Developer Learning / Self-Directed",
    issueDate: "2024",
    status: "Self-Certified"
  }
];
