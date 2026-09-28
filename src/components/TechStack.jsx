"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Sparkles, 
  Workflow, 
  Terminal, 
  Cpu,
  Layers
} from "lucide-react";

/**
 * High-fidelity vector tech icons rendered inline with currentColor for seamless hover inversion
 */
function TechIcon({ name, className = "w-3.5 h-3.5" }) {
  const n = name.toLowerCase();

  if (n.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.826H3.9S0 5.78 0 11.904c0 6.123 3.407 5.908 3.407 5.908h2.035v-2.868s-.11-3.418 3.355-3.418h5.772v-.86H8.79s-2.617.067-2.617-2.552c0-2.62 2.302-2.518 2.302-2.518h8.046S21.6 5.594 21.6 2.656C21.6-.282 17.917 0 11.914 0zM8.7 1.637a.955.955 0 1 1 0 1.91.955.955 0 0 1 0-1.91zm3.386 22.363c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.826h8.106s3.9.454 3.9-5.67c0-6.123-3.407-5.908-3.407-5.908h-2.035v2.868s.11 3.418-3.355 3.418H9.425v.86h5.779s2.617-.067 2.617 2.552c0 2.62-2.302 2.518-2.302 2.518H7.473S2.4 18.406 2.4 21.344C2.4 24.282 6.083 24 12.086 24zm3.214-1.637a.955.955 0 1 1 0-1.91.955.955 0 0 1 0 1.91z"/>
      </svg>
    );
  }
  if (n.includes("django") && !n.includes("rest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.146 0h3.325v15.654c-1.303.208-2.292.26-3.325.26V0zm-4.717 5.864h3.32v8.94c-.938.625-2.24.938-3.32.938-2.657 0-4.063-1.615-4.063-4.531 0-3.021 1.615-5.347 4.063-5.347zm-.052 2.396c-.99 0-1.51.885-1.51 2.917 0 2.083.52 2.969 1.51 2.969.52 0 1.042-.156 1.354-.365V8.26a2.03 2.03 0 0 0-1.354-.313zM21.6 9.427h2.4v10.677c-1.354.52-3.385.781-4.74.781-3.698 0-5.833-1.77-5.833-5.104 0-3.23 2.031-5.365 5.573-5.365.885 0 1.77.156 2.6.469V9.427zm-.052 8.542v-5.677c-.417-.156-.938-.208-1.51-.208-1.98 0-3.021 1.042-3.021 3.02 0 1.98 1.041 2.97 2.812 2.97.73 0 1.355-.053 1.719-.105zM0 13.906h3.325v9.844H0v-9.844z"/>
      </svg>
    );
  }
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7.5c-4.14 0-7.5 1.57-7.5 3.5 0 .54.26 1.06.74 1.53C3.21 7.47 2 8.7 2 10.25c0 1.76 1.57 3.3 4.04 4.08-.24.53-.39 1.1-.39 1.67 0 1.93 3.36 3.5 7.5 3.5s7.5-1.57 7.5-3.5c0-.57-.15-1.14-.39-1.67 2.47-.78 4.04-2.32 4.04-4.08 0-1.55-1.21-2.78-3.24-3.72.48-.47.74-.99.74-1.53 0-1.93-3.36-3.5-7.5-3.5zm0 1.5c3.31 0 6 1.12 6 2.5 0 .28-.12.56-.34.82-1.39-.74-3.27-1.28-5.66-1.32V3.5zm-1 0v1.5c-2.39.04-4.27.58-5.66 1.32-.22-.26-.34-.54-.34-.82 0-1.38 2.69-2.5 6-2.5zm7.36 5.86c1.69.78 2.64 1.68 2.64 2.64 0 1.08-1.21 2.1-3.24 2.76-.56-1.12-1.35-2.28-2.33-3.41 1.11-.83 2.1-1.49 2.93-1.99zM5.64 9.36c.83.5 1.82 1.16 2.93 1.99-.98 1.13-1.77 2.29-2.33 3.41-2.03-.66-3.24-1.68-3.24-2.76 0-.96.95-1.86 2.64-2.64zM12 17.5c-3.31 0-6-1.12-6-2.5 0-.28.12-.56.34-.82 1.39.74 3.27 1.28 5.66 1.32v1.5zm1 0v-1.5c2.39-.04 4.27-.58 5.66-1.32.22.26.34.54.34.82 0 1.38-2.69 2.5-6 2.5z"/>
      </svg>
    );
  }
  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0C5.18 0 0 5.18 0 11.572c0 6.391 5.18 11.571 11.572 11.571 6.391 0 11.571-5.18 11.571-11.571C23.143 5.18 17.963 0 11.572 0zm5.176 17.067l-5.69-7.397v7.397H9.283V7.076h1.995l5.968 7.76V7.076h1.775v9.991h-2.273z"/>
      </svg>
    );
  }
  if (n.includes("typescript") || n === "ts") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.184 10.669h3.766v1.942h-3.766v5.882h-2.316v-5.882H9.225v-1.942h3.768V5.507h2.316v5.162zm-6.702 3.692c.67 0 1.258.125 1.764.376.505.251.879.626 1.121 1.124.242.499.363 1.107.363 1.825 0 .692-.125 1.285-.376 1.78-.251.494-.627.868-1.127 1.121-.5.253-1.101.38-1.802.38-.724 0-1.341-.137-1.85-.411a3.42 3.42 0 0 1-1.233-1.196c-.279-.523-.427-1.16-.445-1.908h2.247c.026.471.162.834.408 1.089.245.255.602.383 1.07.383.479 0 .843-.119 1.092-.357.248-.238.373-.578.373-1.02 0-.422-.119-.742-.357-.96-.238-.218-.63-.377-1.176-.477l-1.096-.201c-.961-.176-1.688-.537-2.181-1.084-.493-.547-.739-1.272-.739-2.176 0-.693.136-1.285.408-1.776.273-.491.666-.86 1.18-1.107.514-.247 1.119-.371 1.815-.371.745 0 1.365.132 1.86.396.495.264.869.645 1.121 1.144.252.499.378 1.111.378 1.837h-2.26c-.015-.433-.14-.764-.374-.993-.235-.229-.582-.344-1.042-.344-.45 0-.793.111-1.03.332-.237.221-.355.526-.355.915 0 .38.114.673.342.879.228.206.598.358 1.111.456l1.242.235z"/>
      </svg>
    );
  }
  if (n.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185M23.79 11.23a8.9 8.9 0 0 0-3.64-3.41c-.08-.05-.18-.02-.23.05l-.94 1.25c-.04.06-.03.14.03.19a6.7 6.7 0 0 1 2.37 2.74c.05.1.18.12.27.06l1.98-1.22c.07-.04.09-.13.06-.21M0 13.918c0 4.196 3.194 7.597 7.135 7.597 6.012 0 10.42-3.15 12.357-8.815.1-.29-.08-.6-.39-.62-1.3-.09-2.58-.58-3.65-1.42a.37.37 0 0 0-.44-.01c-.96.64-2.07 1.03-3.23 1.13a.38.38 0 0 1-.41-.33V11.2H.39a.38.38 0 0 0-.39.38v2.338z"/>
      </svg>
    );
  }
  if (n.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.96 0C5.35 0 0 5.35 0 11.96c0 6.61 5.35 11.96 11.96 11.96s11.96-5.35 11.96-11.96C23.92 5.35 18.57 0 11.96 0zm3.87 18.23c-1.07.28-2.31.39-3.72.39-3.6 0-5.63-1.63-5.63-4.52 0-2.88 2.06-4.65 5.24-4.65 1.25 0 2.29.17 2.98.42v1.85c-.68-.28-1.6-.45-2.67-.45-2.09 0-3.35 1.05-3.35 2.72 0 1.63 1.22 2.65 3.32 2.65.98 0 1.83-.12 2.37-.3v1.89h1.46z"/>
      </svg>
    );
  }
  if (n.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.94 13.92L12.5 19.37a.99.99 0 0 1-.99 0L2.06 13.92a1 1 0 0 1-.5-.87V5.59a1 1 0 0 1 .5-.87L11.51.13a1 1 0 0 1 .99 0l9.44 5.46a1 1 0 0 1 .5.87v7.46a1 1 0 0 1-.5.87zM12 2.15L3.82 6.88 12 11.61l8.18-4.73L12 2.15zM3.56 8.35v5.19l7.44 4.3v-5.2L3.56 8.35zm9.44 9.49l7.44-4.3V8.35l-7.44 4.34v5.15z"/>
      </svg>
    );
  }
  if (n.includes("aws")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.87 15.65c-2.31 0-3.95-1.39-3.95-3.65 0-2.34 1.76-3.79 4.14-3.79 1.13 0 2.05.28 2.62.62v-.41c0-1.25-.87-1.92-2.3-1.92-.93 0-1.8.27-2.45.69l-.6-1.36c.92-.55 2.15-.88 3.42-.88 2.45 0 4.04 1.25 4.04 3.42v5.33h-1.91v-1.07c-.67.75-1.63 1.17-2.91 1.17v-.15zm7.39.2c-1.84 1.25-4.18 1.95-6.66 1.95-3.69 0-7-1.64-9.25-4.25-.19-.22-.02-.52.26-.39 2.5 1.17 5.38 1.83 8.39 1.83 2.15 0 4.22-.39 6.09-1.12.35-.14.65.23.36.48l-.19.1z"/>
      </svg>
    );
  }
  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (n.includes("linux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.005 0C8.42 0 6.64 3.01 6.64 6.78c0 1.28.2 2.58.58 3.75-.82.64-1.42 1.57-1.42 2.67 0 1.09.58 2.01 1.38 2.65-.24.78-.4 1.61-.4 2.47 0 3.14 2.37 5.68 5.22 5.68s5.22-2.54 5.22-5.68c0-.86-.16-1.69-.4-2.47.8-.64 1.38-1.56 1.38-2.65 0-1.1-.6-2.03-1.42-2.67.38-1.17.58-2.47.58-3.75 0-3.77-1.78-6.78-5.365-6.78zm-2.03 5.48a1.14 1.14 0 1 1 0 2.28 1.14 1.14 0 0 1 0-2.28zm4.06 0a1.14 1.14 0 1 1 0 2.28 1.14 1.14 0 0 1 0-2.28z"/>
      </svg>
    );
  }
  if (n.includes("javascript") || n === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.892-1.719-2.067-2.199l-.744-.305c-.655-.268-.962-.572-.962-.976 0-.488.384-.823 1.037-.823.633 0 1.042.277 1.242.827l1.733-1.077c-.506-1.121-1.442-1.722-2.915-1.722-1.921 0-3.211 1.116-3.211 2.871 0 1.341.802 2.193 2.38 2.828l.745.298c.801.321 1.139.676 1.139 1.184 0 .548-.488.944-1.272.944-.925 0-1.478-.456-1.745-1.203l-1.805 1.034c.488 1.294 1.636 2.053 3.49 2.053 2.138 0 3.424-1.157 3.424-2.916 0-.324-.035-.615-.109-.898zM9.47 18.174c.264.444.625.753 1.143.753.535 0 .864-.265.864-.852v-6.07H13.7v6.076c0 1.838-1.121 2.863-2.941 2.863-1.447 0-2.428-.737-2.88-1.748l1.591-1.022z"/>
      </svg>
    );
  }

  // Domain Category Icons
  if (n.includes("api") || n.includes("drf") || n.includes("rest") || n.includes("jwt")) {
    return <Cpu className={className} />;
  }
  if (n.includes("vector") || n.includes("ai") || n.includes("rag") || n.includes("llm")) {
    return <Sparkles className={className} />;
  }
  if (n.includes("database") || n.includes("sql") || n.includes("mysql") || n.includes("sqlite")) {
    return <Database className={className} />;
  }
  if (n.includes("cloud") || n.includes("vps") || n.includes("terraform") || n.includes("nginx")) {
    return <Cloud className={className} />;
  }
  if (n.includes("ci/cd") || n.includes("pipeline") || n.includes("solid") || n.includes("pattern") || n.includes("architecture")) {
    return <Workflow className={className} />;
  }
  if (n.includes("c++") || n.includes("c") || n.includes("java") || n.includes("terminal") || n.includes("problem")) {
    return <Terminal className={className} />;
  }
  if (n.includes("microservice") || n.includes("monolith") || n.includes("multi-tenancy")) {
    return <Layers className={className} />;
  }

  return <Code2 className={className} />;
}

const CATEGORIES = [
  {
    id: "frontend",
    title: "FRONTEND",
    count: 8,
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Zustand", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    id: "backend",
    title: "BACKEND",
    count: 6,
    icon: Server,
    skills: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Auth", "Celery & Redis"]
  },
  {
    id: "database",
    title: "DATABASES",
    count: 5,
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "pgvector"]
  },
  {
    id: "devops",
    title: "HOSTING & DEVOPS",
    count: 10,
    icon: Cloud,
    skills: ["Docker", "AWS", "Terraform", "Nginx", "CI/CD Pipelines", "Linux", "VPS", "Grafana", "Loki", "Prometheus"]
  },
  {
    id: "ai",
    title: "AI & VECTOR SEARCH",
    count: 7,
    icon: Sparkles,
    skills: ["Generative AI", "LLMs", "RAG Systems", "pgvector", "Vector Embeddings", "OpenAI API", "AI Agents"]
  },
  {
    id: "architecture",
    title: "SYSTEM ARCHITECTURE",
    count: 8,
    icon: Workflow,
    skills: ["SOLID Principles", "DRY & KISS", "Microservices", "Monolith", "Repository Pattern", "Factory Pattern", "System Design", "Zero-Trust Multi-Tenancy"]
  },
  {
    id: "languages",
    title: "CORE LANGUAGES & PROBLEM SOLVING",
    count: 7,
    icon: Terminal,
    skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"]
  }
];

// Rich showcase of all primary technologies
const MARQUEE_TECH = [
  "Python",
  "Django",
  "Django REST Framework",
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "Docker",
  "pgvector",
  "RAG Systems",
  "Redis",
  "AWS",
  "CI/CD Pipelines",
  "Tailwind CSS",
  "Linux",
  "Celery",
  "Nginx",
  "MySQL",
  "Zustand",
  "System Design"
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  // Directly link animation to visitor's continuous scroll progress (matching About Me)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Physical spring physics for buttery-smooth scroll response
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  // Scroll-linked continuous leftward movement
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  const filteredCategories = activeFilter === "all" 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.id === activeFilter);

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]"
    >
      {/* Background Section Title "TECH STACK" — Scroll-linked continuous leftward movement */}
      <div className="absolute top-[-10px] left-0 w-full flex justify-center pointer-events-none overflow-hidden z-0 select-none">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-[-0.04em] whitespace-nowrap text-[clamp(38px,9vw,150px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] max-w-[95vw] overflow-hidden"
        >
          TECH STACK
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Scroll-linked continuous leftward movement */}
        <motion.div 
          style={{ x: smoothHeaderX }}
          className="flex flex-col items-start mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>TECH STACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-3xl">
            The tools I use to build complete websites, apps, and scalable backends.
          </h2>
        </motion.div>

        {/* 
          Feature 1: Horizontal Auto-Scrolling Continuous Technology Showcase (Right to Left)
          Smooth, seamless, infinite loop with official icons and CTA-style black hover
        */}
        <div className="relative w-full overflow-hidden py-4 mb-12 border-y border-[var(--border-default)] bg-[var(--bg-surface)]/60 backdrop-blur-xs rounded-2xl select-none">
          {/* Subtle gradient side fades for ultra-clean edge blending */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            }}
            className="flex items-center gap-3 sm:gap-4 w-max hover:[animation-play-state:paused]"
          >
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                className="group flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-[13px] font-medium text-[var(--text-primary)] shadow-2xs hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
              >
                <span className="text-indigo-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                  <TechIcon name={tech} className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs tracking-tight">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Filter Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
              activeFilter === "all"
                ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] shadow-xs"
                : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)]"
            }`}
          >
            All [7]
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] shadow-xs"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 
          Feature 2: Categorized Cards Grid with Smooth Hover Shadow & Interactive Inverted Black Hover
        */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  key={cat.id}
                  className="group/card p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5)] hover:border-[var(--border-accent)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border-default)]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-indigo-500 group-hover/card:text-white transition-all duration-300 shadow-2xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                          {cat.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-[var(--text-muted)] bg-[var(--bg-deep)] px-2.5 py-0.5 rounded-full border border-[var(--border-default)]">
                        {cat.count}
                      </span>
                    </div>

                    {/* 
                      Skills Pills: Displayed with authentic icons/logos and CTA-style black hover
                    */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group/item flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-deep)] text-[var(--text-primary)] border border-[var(--border-default)] hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer select-none"
                        >
                          <span className="text-indigo-500 group-hover/item:text-white dark:group-hover/item:text-black transition-colors shrink-0">
                            <TechIcon name={skill} className="w-3.5 h-3.5" />
                          </span>
                          <span className="transition-colors">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Problem Solving Stat Card with Smooth Hover Shadow Effect */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5)] hover:border-[var(--border-accent)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                Algorithmic & Problem Solving Foundations
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Strong computational thinking, data structure optimization, and clean algorithmic problem-solving
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-xs text-[var(--text-primary)] flex-wrap">
            <div className="group/stat px-3.5 py-1.5 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] font-semibold hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-xs transition-all cursor-pointer">
              LeetCode 150+
            </div>
            <div className="group/stat px-3.5 py-1.5 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] font-semibold hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-xs transition-all cursor-pointer">
              Codeforces 120+
            </div>
            <div className="group/stat px-3.5 py-1.5 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] font-semibold hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-xs transition-all cursor-pointer">
              HackerRank 150+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
