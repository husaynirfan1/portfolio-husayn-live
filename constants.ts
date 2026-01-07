import { Github, Linkedin, Mail } from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/husaynirfan1", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/husayn-irfan-7b4103258", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mhusaynirfan@gmail.com", label: "Email" },
];

export const EXPERIENCES = [
  {
    company: "PWN Excellence Sdn. Bhd.",
    role: "PROTÉGÉ Simulator Support Engineer",
    period: "Aug 2025 — Present",
    description: "Providing real-time support for crews during simulator sessions. Performing Qualification Test Guide (QTG) and Preventive Maintenance (PM). Built battery voltage monitoring system with IoT implementation.",
    technologies: ["IoT", "Maintenance", "Level-D FFS", "AW139", "QTG", "STG"]
  },
  {
    company: "CAE KUALA LUMPUR",
    role: "Apprentice Simulator Technician",
    period: "July 2024 — Jan 2025",
    description: "Assisted in troubleshooting deficiencies, updating Navigation and Visual databases, and performing maintenance. Developed software from debugged scripts to reduce redundancy and time during troubleshooting.",
    technologies: ["Batch Scripting", "Troubleshooting", "Database Mgmt", "Level-D FFS", "A320", "A330", "QTG"]
  },
  {
    company: "Swifty",
    role: "Freelance Mobile App Developer",
    period: "Aug 2022 — Present",
    description: "Offering on-demand Android development services. Projects include semi-medical devices, machine learning (TF Lite) based applications, and management systems.",
    technologies: ["Android Studio", "Java", "TensorFlow Lite", "Firebase", "Python", "API", "Arduino", "MLKit"]
  },
  {
    company: "Malaysian Flying Academy",
    role: "Internship Trainee",
    period: "Mar 2022 — July 2022",
    description: "Gained hands-on experience in Technical Control, Bonded Store operations, and Aircraft Maintenance on Piper Archer and Seminole aircraft.",
    technologies: ["Aircraft Maintenance", "Logistics", "Technical Control"]
  }
];

export const PROJECTS = [
  {
    title: "Brainynotes",
    description: "A document companion powered by LLMs (Llama4) with GraphRAG and custom processing methods. Features chat with notes, document rewriting with parallel agents, and keyword generation for rich chunk retrieval. [OUT OF SERVICE]",
    mediaType: "image",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/brainynotes.png",
    link: "https://brainynotes.site",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "RAG", "Morphik", "Oracle", "REST", "Python"]
  },
  {
    title: "YouTube Sentiment Analysis",
    description: "A data analysis tool that evaluates viewer engagement by scraping and processing YouTube video comments. It leverages Natural Language Processing (NLP) to classify sentiment (positive, negative, neutral) and visualizes audience feedback trends.",
    mediaType: "image",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/ssyt.png",
    link: "https://github.com/husaynirfan1/yt-sentiment-analysis",
    technologies: ["Python", "YouTube Data API", "NLP", "Pandas", "Matplotlib"]
  },
  {
    title: "Lukisan Space",
    description: "A generative AI art platform capable of creating high-fidelity digital artwork. It leverages the speed of Fireworks AI for real-time image inference, wrapped in a modern, responsive interface built with Vite and React. Built during Bolt Hackathon. [OUT OF SERVICE]",
    mediaType: "image",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/sslukisann.png",
    link: "https://lukisan.space",
    technologies: ["React", "Vite", "Tailwind CSS", "Fireworks AI", "Bolt.new"]
  },
  {
    title: "Smart Adaptive Lamp",
    description: "An IoT-enabled lighting solution designed to autonomously adjust its brightness and color temperature based on ambient environmental conditions. It utilizes sensors to sense room lighting and motion, offering automated energy efficiency and seamless integration with smart home platforms via MQTT.",
    mediaType: "image",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/smartlampp.png",
    link: "https://github.com/husaynirfan1/Smart-Adaptive-Lamp",
    technologies: ["C++", "ESP8266/ESP32", "IoT", "MQTT", "Arduino IDE", "Sensors"]
  },
  
  
];

export const SKILLS = [
  "Java", "Python", "JavaScript", "C++", 
  "Android Studio", "Langchain/Langgraph", "PostgreSQL", 
  "Firebase", "RAG Frameworks", "IoT (ESP32)", "GRPO"
];