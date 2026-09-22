export const profile = {
  name: "Shan",
  role: "Developer",
  tagline: "I build large-scale data collection pipelines for social media and news.",
  subtext:
    "Chrome DevTools Protocol automation, multi-flow Python pipelines, MongoDB, GCS, and Airflow — turning constantly-changing platforms into reliable, structured data.",
  location: "Chennai, TN",
  photo: "/projects/profile.png",
  email: "sundarcss6@gmail.com",
  github: "https://github.com/shan1311",
  linkedin: "https://linkedin.com/in/",
  resume: "/resume.pdf",
};

export const experience = [
  {
    role: "Junior Software Developer",
    company: "Pinaca Technologies",
    location: "Chennai, TN",
    period: "09/2025 – Present",
    bullets: [
      "Design and maintain scalable Python-based data collection and processing pipelines for social media and news data.",
      "Develop browser automation and network-data extraction workflows, with multi-stage processing for collection, parsing, enrichment, validation, and storage.",
      "Work with MongoDB and cloud storage for structured data, media assets, job execution, and processing results.",
      "Implement parallel and concurrent processing, workflow orchestration, monitoring, logging, and error handling to improve pipeline reliability and efficiency.",
      "Troubleshoot high-volume data pipelines and create technical documentation covering architecture, data flows, deployment, and operational workflows.",
    ],
    stack: ["Python", "Browser Automation", "MongoDB", "Cloud Storage", "Workflow Orchestration"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Aristostech Pvt Ltd",
    location: "Chennai, TN",
    period: "01/2024 – 04/2024",
    bullets: [
      "Developed and maintained a full-featured CRM web application using React.js, Node.js, Express.js, and MongoDB, serving Admin, Employee, and Client modules.",
      "Implemented advanced CRUD operations and real-time validations to improve data accuracy and application reliability.",
      "Refactored backend REST APIs and frontend components to improve application performance and maintainability.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export const projects = [
  {
    title: "CRM",
    description: "Full-featured CRM web app with Admin, Employee, and Client modules.",
    tech: "MERN Stack",
    image: "/projects/crm.png",
    github: "https://github.com/shan1311/CRM",
    demo: "https://crm-frontend-shans-projects-80458369.vercel.app/",
  },
  {
    title: "Rentify",
    description: "House rental and buying platform with buyer/seller modules and secure messaging.",
    tech: "MERN Stack",
    image: "/projects/rentify.png",
    github: "https://github.com/shan1311/Rentify",
    demo: "https://rentify-client-git-main-shans-projects-80458369.vercel.app",
  },
  {
    title: "Music Recommendation System",
    description: "Recommends music using SVM and K-Means clustering on genre, mood, and listening patterns.",
    tech: "Python, scikit-learn",
    image: "/projects/music-recommender.png",
    github: "https://github.com/shan1311",
    demo: "",
  },
];

export const skills = {
  "Data Engineering": ["Python", "CDP Browser Automation", "Selenium", "Apache Airflow", "BeautifulSoup"],
  "Data & Storage": ["MongoDB", "MySQL", "Google Cloud Storage"],
  "Web": ["React.js", "Node.js", "Express.js", "JavaScript"],
  "Tools": ["Git", "Linux", "REST APIs"],
};
