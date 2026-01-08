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
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop", // Cockpit/Simulator vibe
    description: "Provided real-time support for crews during simulator sessions. Performed Qualification Test Guide (QTG) and Preventive Maintenance (PM). Built battery voltage monitoring system with IoT implementation. Performed & PIC for Subjective Test Guide (STG) and involved in several Simulator on Ground (SOG).",
    technologies: ["IoT", "Maintenance", "Level-D FFS", "AW139", "QTG", "STG"]
  },
  {
    company: "CAE KUALA LUMPUR",
    role: "Apprentice Simulator Technician",
    period: "July 2024 — Jan 2025",
    logo: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=800&auto=format&fit=crop", // Hangar/Tech vibe
    description: "Provided real-time support for crews during simulatorsessions. Assisted in troubleshooting DR (Deficiency Raised) or casualties during simulator sessions, performing Qualification Test Guide (QTG), Preventive Maintenance (PM), updating Navigation Database (NDB) and visual database. Developed software from debugged script to reduce redundancy and time during troubleshooting. (Batch) Involved in Subjective Test Guide (STG) and involved in several Simulator on Ground (SOG).",
    technologies: ["Batch Scripting", "Troubleshooting", "Database Mgmt", "Level-D FFS", "A320", "A330", "QTG"]
  },
  {
    company: "Swifty",
    role: "Freelance Mobile App Developer",
    period: "Aug 2022 — Present",
    logo: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop", // Android/Code vibe
    description: "Offering on-demand Android development services. Projects include semi-medical devices, machine learning (TF Lite) based applications, and management systems.",
    technologies: ["Android Studio", "Java", "TensorFlow Lite", "Firebase", "Python", "API", "Arduino", "MLKit"]
  },
  {
    company: "Malaysian Flying Academy",
    role: "Internship Trainee",
    period: "Mar 2022 — July 2022",
    logo: "https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?q=80&w=800&auto=format&fit=crop", // General Aviation vibe
    description: "Gained hands-on experience in Technical Control, Bonded Store operations, and Aircraft Maintenance on Piper Archer, Archer TX and Seminole aircraft.",
    technologies: ["Aircraft Maintenance", "Logistics", "Technical Control"]
  }
];

// Define the shape of a certification object
export interface Certification {
  title: string;
  issuer: string;
  url: string;
}

// Export the data array
export const certifications: Certification[] = [
  {
    title: "IBM AI Developer Professional Certificate",
    issuer: "IBM",
    url: "https://coursera.org/share/546358d25db26235710622f5df11ecd2",
  },
  {
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM",
    url: "https://coursera.org/share/8f34ed7ade64ce96128175631439455c",
  },
  {
    title: "PowerShell for Automating Administration",
    issuer: "Packt",
    url: "https://coursera.org/share/dccf882867a7e7fd8a77665a852d7bed",
  },
  {
    title: "Introduction to Networking and Storage",
    issuer: "IBM",
    url: "https://coursera.org/share/bace429be7fd4ffaab9bec352b3f59ff",
  },
  {
    title: "Mobile Development and Javascript",
    issuer: "Meta",
    url: "https://coursera.org/share/2327c62aa0493ce2ea20321067601fe4",
  },
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
    title: "Finetuning Qwen2.5 1B Model",
    description: "Engineered a local reasoning AI for avionics troubleshooting by fine-tuning Qwen 2.5 (1.5B) on 4,000+ proprietary maintenance logs. I developed a custom two-stage pipeline (SFT + GRPO), using reinforcement learning with specialized reward functions to enforce strict 'Chain-of-Thought' logic. The resulting model explicitly analyzes technical manuals step-by-step, significantly reducing hallucinations while maintaining low latency.",
    mediaType: "image",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/Qwen2.5-1.5B-Simulator-Support-Engineer.png",
    link: "https://github.com/husaynirfan1/Qwen2.5-1.5B-Simulator-Support-Engineer",
    technologies: [
        "Python",
        "Unsloth AI",
        "Qwen 2.5",
        "GRPO (Reinforcement Learning)",
        "PyTorch",
        "SFT",
        "Hugging Face TRL",
        "WandB"
    ]
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

export const COMMUNITY_CONTRIBUTIONS = [
  {
    title: "Open Source: Morphik Core",
    description: "Contributed to the Morphik Core codebase by engineering a resilient Redis connection strategy with automated Docker fallback, streamlining the local development experience.",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/91.png", 
    link: "https://github.com/morphik-org/morphik-core/pull/91"
  },
  {
    title: "Morphik Documentation",
    description: "Officially recognized in the Morphik 'Special Thanks' page for contributing critical PGVector setup instructions for Linux environments.",
    mediaSrc: "https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/ssmorphik.png", 
    link: "https://www.morphik.ai/docs/special-thanks"
  }
];

export const SKILLS = [
  "Java", "Python", "JavaScript", "C++", 
  "Android Studio", "Langchain/Langgraph", "PostgreSQL", 
  "Firebase", "RAG Frameworks", "IoT (ESP32)", "GRPO"
];
