export const portfolioData = {
  personal: {
    name: "SATHISHKUMAR D",
    title: "Python Full-Stack Developer",
    subtitles: [
      "Python Full-Stack Developer",
      "Django & REST API Architect",
      "React.js & Frontend Specialist",
      "AI & IoT Solution Innovator"
    ],
    location: "Chennai, India",
    email: "sathish.code27@gmail.com",
    phone: "+91 6381838665",
    linkedin: "https://linkedin.com/in/satthsss",
    github: "https://github.com/satthsss",
    summary: "Detail-oriented and results-driven Python Full-Stack Developer with hands-on experience building responsive, scalable web applications using Python, Django, React.js, JavaScript, HTML5, CSS3, REST APIs, and MySQL. Strong understanding of backend development, API integration, database design, CRUD operations, authentication, and responsive UI development, with the ability to troubleshoot issues and write clean, maintainable code. Proactive and adaptable, seeking an opportunity to contribute to a dynamic software development team and deliver reliable solutions.",
    photoUrl: "/profile.jpg",
    resumeUrl: "/Sathishkumar_D_Resume.pdf"
  },

  experience: [
    {
      role: "Python Full Stack Developer Intern",
      company: "Besant Technologies",
      location: "Chennai, India",
      period: "Mar 2026 – Aug 2026",
      status: "Completed",
      highlights: [
        "Developed responsive web applications using Python, Django, React.js, JavaScript, HTML5, CSS3, and MySQL.",
        "Built and integrated REST APIs, implemented database operations, resolved bugs, and contributed to application development.",
        "Collaborated with the development team to translate requirements into functional and maintainable web solutions."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "WHY Global Services",
      location: "Chennai, India",
      period: "June 2025 – Sept 2025",
      status: "Completed",
      highlights: [
        "Developed responsive and user-friendly web interfaces using HTML5, CSS3, and JavaScript.",
        "Contributed to real-time website development and UI design, developing responsive layouts and improving user experience while collaborating with the team on frontend tasks."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Dhanalakshmi Srinivasan College of Engineering and Technology",
      period: "Aug 2022 – June 2026",
      cgpa: "8.1 / 10",
      description: "Specialized in Computer Science & Engineering, Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, and Full-Stack Web Architecture."
    }
  ],

  skills: {
    "Programming Languages": [
      { name: "Python (Core & Advanced)", level: 95, icon: "Code2" },
      { name: "Async Python", level: 88, icon: "Cpu" },
      { name: "JavaScript (ES6+)", level: 90, icon: "FileCode" },
      { name: "TypeScript", level: 85, icon: "FileText" },
      { name: "Bash / Shell Scripting", level: 82, icon: "Terminal" },
      { name: "SQL", level: 88, icon: "Database" }
    ],
    "Frontend Technologies": [
      { name: "React / React.js", level: 92, icon: "Atom" },
      { name: "TypeScript", level: 85, icon: "FileText" },
      { name: "HTML5", level: 95, icon: "Layout" },
      { name: "CSS3", level: 92, icon: "Palette" },
      { name: "Tailwind CSS", level: 90, icon: "Wind" },
      { name: "Responsive Web Design", level: 95, icon: "Monitor" },
      { name: "Component-Driven UI", level: 90, icon: "Layers" }
    ],
    "Backend Technologies": [
      { name: "Django", level: 92, icon: "Server" },
      { name: "Django REST Framework (DRF)", level: 90, icon: "Cpu" },
      { name: "REST APIs & API Design", level: 94, icon: "Network" },
      { name: "Authentication & Authorization", level: 88, icon: "Lock" },
      { name: "FastAPI", level: 85, icon: "Zap" },
      { name: "Flask", level: 82, icon: "Box" }
    ],
    "Databases": [
      { name: "PostgreSQL", level: 88, icon: "Database" },
      { name: "MySQL", level: 90, icon: "DatabaseZap" },
      { name: "SQLite", level: 88, icon: "HardDrive" },
      { name: "Django ORM", level: 92, icon: "Boxes" },
      { name: "Data Modeling", level: 86, icon: "GitMerge" },
      { name: "Query Optimization", level: 85, icon: "Sliders" }
    ],
    "Tools & Platforms": [
      { name: "Git", level: 92, icon: "GitBranch" },
      { name: "GitHub", level: 94, icon: "GitCommit" },
      { name: "Docker", level: 80, icon: "BoxSelect" },
      { name: "VS Code", level: 96, icon: "Terminal" },
      { name: "Postman", level: 92, icon: "Send" },
      { name: "MySQL Workbench", level: 88, icon: "Sliders" }
    ],
    "Architecture & Best Practices": [
      { name: "System Design", level: 86, icon: "Layers" },
      { name: "OAuth 2.0 & JWT Auth", level: 88, icon: "Shield" },
      { name: "RBAC (Role-Based Control)", level: 88, icon: "Lock" },
      { name: "Secure Coding Practices", level: 90, icon: "CheckCircle" },
      { name: "Code Reviews & Debugging", level: 92, icon: "Bug" },
      { name: "Mentoring Developers", level: 85, icon: "Users" }
    ]
  },

  projects: [
    {
      id: "maternal-health-tracker",
      title: "Maternal Health Tracker",
      subtitle: "IoT Healthcare Monitoring System",
      category: "IoT & Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      description: "An IoT-based maternal healthcare monitoring system using ESP32 and React Native with real-time health tracking, fall detection, and emergency alert features.",
      technologies: ["React Native", "Spring Boot", "MySQL", "ESP32", "Arduino IDE", "REST API", "BLE", "Git", "GitHub", "VS Code", "Sensor", "IoT"],
      features: [
        "Developed an IoT-based maternal healthcare monitoring system using ESP32 and React Native.",
        "Implemented real-time health tracking, fall detection, and emergency alert features.",
        "Integrated REST APIs, Bluetooth communication, and MySQL database connectivity."
      ],
      github: "https://github.com/satthsss",
      demo: "https://github.com/satthsss"
    },
    {
      id: "cab-booking-system",
      title: "Cab Booking System",
      subtitle: "Rapido Clone Platform (Django, MySQL)",
      category: "Full Stack Web App",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      description: "Built a full-stack cab/bike booking web application using Django with OTP-based authentication and role-based authorization for Customers and Drivers.",
      technologies: ["Python", "Django", "Django Authentication", "MySQL", "HTML5", "CSS3", "REST API", "Git", "GitHub", "VS Code"],
      features: [
        "Built a full-stack cab/bike booking web application using Django with OTP-based authentication and role-based authorization for Customers and Drivers.",
        "Implemented end-to-end ride lifecycle tracking (requested → accepted → started → completed) with REST-style URL routing and a Django admin panel for managing users and rides."
      ],
      github: "https://github.com/satthsss",
      demo: "https://github.com/satthsss"
    },
    {
      id: "voice-assistant",
      title: "Voice Activated Virtual Assistant",
      subtitle: "Python & NLP Command System",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
      description: "Developed an AI-powered virtual assistant using Python and NLP featuring speech recognition, text-to-speech, web search, and application control.",
      technologies: ["Python", "NLP", "Speech Recognition", "Git", "GitHub", "VS Code"],
      features: [
        "Developed an AI-powered virtual assistant using Python and NLP.",
        "Implemented speech recognition, text-to-speech, web search, and application control features.",
        "Built real-time voice command processing for task automation and improved user interaction."
      ],
      github: "https://github.com/satthsss",
      demo: "https://github.com/satthsss"
    }
  ],

  certifications: [
    {
      title: "AI Foundations Associate",
      issuer: "Oracle Cloud Infrastructure (OCI)",
      badgeColor: "from-amber-500 to-yellow-600",
      description: "Foundations of AI, ML, and generative AI on Oracle Cloud Infrastructure (OCI).",
      icon: "Brain"
    },
    {
      title: "Front End Web Developer",
      issuer: "Infosys Springboard",
      badgeColor: "from-cyan-500 to-blue-600",
      description: "Core front-end development with HTML, CSS, and JavaScript standards and techniques.",
      icon: "Code"
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      badgeColor: "from-emerald-500 to-teal-600",
      description: "Python programming fundamentals, data structures, and hands-on problem-solving.",
      icon: "Terminal"
    }
  ],

  achievements: [
    { label: "Engineering CGPA", value: "8.1", suffix: " / 10", icon: "GraduationCap" },
    { label: "Projects Built", value: "3+", suffix: " Systems", icon: "Rocket" },
    { label: "Tech Stack Tools", value: "18+", suffix: " Techs", icon: "Cpu" },
    { label: "Global Certifications", value: "3", suffix: " Badges", icon: "Award" }
  ]
};
