/**
 * Personal Portfolio Data Source for N Charan Sai
 * Cleanly decoupled data layer for easy maintenance and zero-hardcoding
 */

export const personalData = {
  name: "N Charan Sai",
  initials: "CS",
  role: "Final Year Computer Science & Engineering Student",
  headline: "Final Year Computer Science and Engineering Student | AI/ML | Backend Development",
  subHeadline: "AI/ML Engineering • Spring Boot Backend • Computer Vision • Agentic AI",
  university: "SRM University, Chennai",
  institution: "SRM Institute of Science and Technology, Kattankulathur",
  degree: "B.Tech in Computer Science and Engineering (CORE)",
  graduationYear: "2026",
  currentStatus: "Final Year CSE Student",
  cgpa: "9.17",
  cgpaContext: "CGPA: 9.17 till 6th Semester",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9440940001",
  email: "charans.nallaguntla@gmail.com",
  github: "https://github.com/CHARANSAI1919",
  linkedin: "https://www.linkedin.com/in/nallaguntla-charan-sai-765852287/",
  resumeUrl: "/resume.pdf", // Place your real resume.pdf in /public/resume.pdf
  heroBadge: "Ex-Intern @ DRDL, DRDO Hyderabad",
  heroTagline: "Building practical software and AI solutions that solve real-world problems.",
  
  aboutSummary: [
    "I am a final-year Computer Science and Engineering student at SRM University, Chennai, with hands-on experience in AI/ML, backend development and software engineering. I have completed two internships at DRDL, DRDO, Hyderabad, where I worked on AI/ML and deep learning based projects.",
    "I have a strong foundation in Data Structures and Algorithms using Java, Object Oriented Programming, DBMS, Operating Systems and Computer Networks.",
    "I enjoy building practical solutions using modern technologies and applying AI to real-world problems."
  ],

  professionalInterests: [
    "AI/ML Engineering",
    "Backend Development",
    "Software Engineering",
    "Computer Vision",
    "Generative AI",
    "Agentic AI & MCP"
  ],

  personalInterests: [
    {
      title: "Coffee Enthusiast",
      description: "Appreciating artisanal brews & energizing late-night engineering sessions.",
      icon: "Coffee"
    },
    {
      title: "Automobiles",
      description: "Fascinated by high-performance vehicle engineering, telemetry, and dynamics.",
      icon: "Car"
    },
    {
      title: "Motorcycle Touring",
      description: "Long-distance riding, discovering new terrains, and coastal highway routes.",
      icon: "Compass"
    }
  ]
};

export const internshipsData = [
  {
    id: "drdo-mcp-2025",
    organization: "DRDL - DRDO",
    orgFullName: "Defence Research and Development Laboratory (DRDL), DRDO",
    location: "Hyderabad, India",
    role: "AI/ML Intern",
    duration: "10 June 2025 – 1 September 2025",
    periodBadge: "Jun 2025 – Sep 2025",
    projectTitle: "Operational Planning Agent using MCP",
    domain: "AI/ML / Agentic AI",
    description: "Developed an AI-based Operational Planning Agent using Model Context Protocol (MCP), Transformers, and modern Deep Learning architectures to integrate AI systems with external tools and support automated operational planning.",
    highlights: [
      "Engineered an autonomous agentic framework using Model Context Protocol (MCP) to standardize external tool calling and contextual information ingestion.",
      "Integrated transformer-based reasoning pipelines to parse high-level mission parameters and synthesize multi-stage operational workflows.",
      "Established verified contextual safety boundaries and communication bridges between agent runtimes and tactical operational modules."
    ],
    technologies: [
      "Transformers",
      "Deep Learning",
      "Agentic AI",
      "Model Context Protocol (MCP)",
      "AI Agents",
      "Python"
    ],
    badge: "Defence R&D"
  },
  {
    id: "drdo-yolo-2024",
    organization: "DRDL - DRDO",
    orgFullName: "Defence Research and Development Laboratory (DRDL), DRDO",
    location: "Hyderabad, India",
    role: "AI/ML Intern",
    duration: "December 2024 – January 2025",
    periodBadge: "Dec 2024 – Jan 2025",
    projectTitle: "Human Detection in Thermal Images using YOLOv7",
    domain: "AI/ML / Computer Vision / Thermal Image Processing",
    description: "Developed a YOLOv7-based deep learning system for human detection in thermal images. Worked on image preprocessing, model training, and evaluation to detect humans in low visibility and nighttime conditions.",
    highlights: [
      "Curated, preprocessed, and augmented thermal infrared image datasets to optimize target contrast across total darkness and adverse visual conditions.",
      "Configured custom anchor boxes and fine-tuned YOLOv7 feature pyramid networks for subtle thermal heat radiation signatures.",
      "Evaluated inference precision on test benchmarks, achieving 93% precision for low-light surveillance scenarios."
    ],
    technologies: [
      "YOLOv7",
      "Deep Learning",
      "Computer Vision",
      "Thermal Image Processing",
      "Python",
      "PyTorch"
    ],
    badge: "Computer Vision R&D"
  }
];

export const projectsData = [
  {
    id: "smart-warranty",
    title: "Smart Warranty & Purchase Manager",
    category: "Backend",
    domain: "Backend Development / Full Stack Development",
    description: "Developed a Spring Boot based warranty and purchase management system using Java, MySQL, REST APIs and JWT authentication, enabling users to securely manage products, warranties and repair records.",
    features: [
      "User authentication and secure JWT-based stateless authorization",
      "Robust product lifecycle tracking with strict user ownership validation",
      "Repair record management and servicing history timeline APIs",
      "Normalized MySQL database schema with optimized queries and indexes"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT", "Maven", "Git"],
    githubUrl: "https://github.com/CHARANSAI1919",
    liveUrl: null,
    highlight: "Enterprise Architecture"
  },
  {
    id: "kidney-stone-yolov8",
    title: "Kidney Stone Detection using YOLOv8",
    category: "AI/ML",
    domain: "AI/ML / Computer Vision / Medical Image Analysis",
    description: "Developed a YOLOv8 based deep learning system to detect kidney stones in ultrasound images. Trained and evaluated the model for accurate stone detection and explored computer vision techniques for medical image analysis.",
    features: [
      "Published research paper in IEEE detailing automated ultrasound calculus detection",
      "Custom image preprocessing, speckle noise reduction, and contrast normalization",
      "Fine-tuned YOLOv8 bounding-box prediction specifically for acoustic shadow artifacts",
      "High sensitivity detection aiding clinical diagnosis workflows"
    ],
    publication: "IEEE Paper: 'Kidney Stone Detection in Ultrasound using YOLOv8'",
    technologies: ["Python", "YOLOv8", "PyTorch", "Computer Vision", "Deep Learning", "Ultrasound Image Processing"],
    githubUrl: "https://github.com/CHARANSAI1919",
    liveUrl: null,
    highlight: "IEEE Published"
  },
  {
    id: "mcp-agent",
    title: "Operational Planning Agent using MCP",
    category: "AI/ML",
    domain: "Agentic AI / Generative AI",
    description: "Developed an AI based operational planning agent using Model Context Protocol to integrate AI systems with external tools and resources for coordinated tactical execution.",
    features: [
      "Model Context Protocol (MCP) server & client tool-binding architecture",
      "Multi-step transformer reasoning pipeline with self-correcting plan verification",
      "Standardized tool execution sandbox for external resources and calculators",
      "Real-time event logging and status tracking for operational actions"
    ],
    technologies: ["Python", "Transformers", "Agentic AI", "MCP", "Deep Learning"],
    githubUrl: "https://github.com/CHARANSAI1919",
    liveUrl: null,
    highlight: "Agentic AI"
  },
  {
    id: "thermal-detection",
    title: "Human Detection in Thermal Images using YOLOv7",
    category: "AI/ML",
    domain: "Computer Vision / AI/ML",
    description: "Built a YOLOv7 based system for detecting humans in thermal infrared images, with a focus on low visibility and night time conditions.",
    features: [
      "Specialized deep learning model trained on thermal infrared spectra",
      "High accuracy human detection achieving 93% precision in darkness",
      "Optimized inference pipeline designed for low-latency edge deployment",
      "Robust detection resilience against thermal noise, occlusion, and smoke"
    ],
    technologies: ["Python", "YOLOv7", "PyTorch", "Computer Vision", "Thermal Image Processing"],
    githubUrl: "https://github.com/CHARANSAI1919",
    liveUrl: null,
    highlight: "93% Precision"
  }
];

export const skillsCategories = [
  {
    category: "Programming",
    icon: "Code2",
    skills: ["Java", "Python", "C", "C++", "SQL", "JavaScript"]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    skills: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks"
    ]
  },
  {
    category: "AI / ML",
    icon: "Brain",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Transformers",
      "PyTorch",
      "YOLOv7",
      "YOLOv8",
      "Generative AI",
      "Agentic AI",
      "Retrieval Augmented Generation",
      "Model Context Protocol"
    ]
  },
  {
    category: "Python & Analytics",
    icon: "BarChart3",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Spring Boot", "FastAPI", "REST APIs", "JWT", "Maven"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "ChromaDB", "FAISS"]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS", "EC2", "S3", "CloudWatch", "Docker", "Terraform", "Git"]
  },
  {
    category: "AI & Developer Tools",
    icon: "Wrench",
    skills: ["Hugging Face", "LangChain", "OpenAI API", "Google Maps API", "Postman"]
  }
];

export const certificationsData = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    code: "AWS SAA-C03",
    badgeColor: "from-amber-500/20 to-orange-500/10",
    borderGlow: "group-hover:border-amber-500/50",
    icon: "Cloud",
    iconColor: "text-amber-400",
    verificationStatus: "Verified Credential"
  },
  {
    id: "mongodb-assoc",
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    code: "Associate Developer",
    badgeColor: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/50",
    icon: "Database",
    iconColor: "text-emerald-400",
    verificationStatus: "Verified Credential"
  },
  {
    id: "sap-genai",
    title: "SAP Generative AI Developer",
    issuer: "SAP",
    code: "Generative AI",
    badgeColor: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-blue-500/50",
    icon: "Brain",
    iconColor: "text-blue-400",
    verificationStatus: "Verified Credential"
  },
  {
    id: "oracle-oci",
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    code: "OCI Foundations",
    badgeColor: "from-red-500/20 to-rose-500/10",
    borderGlow: "group-hover:border-red-500/50",
    icon: "ShieldCheck",
    iconColor: "text-rose-400",
    verificationStatus: "Verified Credential"
  }
];

export const achievementsData = [
  {
    id: "srm-scholarship",
    title: "Merit-Based Scholarship (SRMJEE Rank 130)",
    organization: "SRM University",
    type: "Academic Excellence",
    description: "Awarded prestigious merit-based tuition scholarship for securing All India Rank 130 in the SRMJEE examination.",
    icon: "Award",
    accent: "text-cyan-400"
  },
  {
    id: "formidium-hackathon",
    title: "Winner – Formidium Hackathon",
    organization: "BITS Goa",
    type: "Hackathon Victory",
    description: "Secured 1st Place competing among premier engineering teams, designing and implementing rapid full-stack/AI solutions under intense timeline constraints.",
    icon: "Trophy",
    accent: "text-amber-400"
  },
  {
    id: "texcelerate-bits",
    title: "Finalist – TEXCELERATE",
    organization: "BITS Hyderabad",
    type: "National Tech Competition",
    description: "Selected as national finalist for engineering innovation and technical defense presentation in flagship tech symposium.",
    icon: "Flame",
    accent: "text-rose-400"
  },
  {
    id: "ieee-paper",
    title: "Published IEEE Research Paper",
    organization: "IEEE",
    type: "Scientific Publication",
    description: "Authored and published research paper titled 'Kidney Stone Detection in Ultrasound using YOLOv8', contributing to medical computer vision literature.",
    icon: "BookOpen",
    accent: "text-blue-400"
  },
  {
    id: "drdo-internships",
    title: "Two Research Internships @ DRDL, DRDO",
    organization: "DRDL - DRDO, Hyderabad",
    type: "Defence R&D Experience",
    description: "Selected for two specialized research internships tackling thermal vision and agentic planning pipelines for defence technology applications.",
    icon: "Shield",
    accent: "text-emerald-400"
  },
  {
    id: "ncc-c-cert",
    title: "NCC 'C' Certificate Holder",
    organization: "National Cadet Corps (NCC)",
    type: "Leadership & Discipline",
    description: "Earned the highest level 'C' certificate demonstrating disciplined leadership, strategic teamwork, endurance, and national service values.",
    icon: "Medal",
    accent: "text-yellow-400"
  },
  {
    id: "aaruush-head",
    title: "Committee Head @ AARUUSH",
    organization: "SRM University National Fest",
    type: "Campus Leadership",
    description: "Served as Committee Head for SRM's flagship national-level techno-management fest, leading large student teams and orchestrating major technical events.",
    icon: "Users",
    accent: "text-purple-400"
  }
];

export const educationData = [
  {
    id: "srm-university",
    institution: "SRM Institute of Science and Technology, Kattankulathur",
    institutionShort: "SRM University, Chennai",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering (CORE)",
    period: "2022 – 2026 (Final Year)",
    score: "CGPA: 9.17 / 10.0 (till 6th Semester)",
    highlights: [
      "Merit-Based Scholarship Recipient (SRMJEE All India Rank 130)",
      "Core Specialization in Data Structures & Algorithms, OS, DBMS, Networks, and AI",
      "Two-time Research Intern at DRDL - DRDO Hyderabad"
    ],
    status: "In Progress (Graduating 2026)",
    featured: true
  },
  {
    id: "narayana-college",
    institution: "Narayana Junior College",
    institutionShort: "Narayana Junior College",
    degree: "Intermediate / High School (Class XII)",
    branch: "MPC (Mathematics, Physics, Chemistry)",
    period: "2020 – 2022",
    score: "Score: 96.6%",
    highlights: [
      "Graduated with Distinction (96.6% Aggregate)",
      "Strong analytical and mathematical problem-solving foundation",
      "Ranked in top percentile in competitive pre-engineering examinations"
    ],
    status: "Completed",
    featured: false
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
