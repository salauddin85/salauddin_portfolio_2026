"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Sparkles, 
  Workflow, 
  Terminal, 
  Check, 
  ExternalLink 
} from "lucide-react";

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

const MARQUEE_SKILLS = [
  "Python", "Django", "DRF", "Next.js", "React", "TypeScript", "PostgreSQL", 
  "Docker", "pgvector", "RAG", "Redis", "AWS", "CI/CD", "Tailwind CSS", "Linux"
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = activeFilter === "all" 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.id === activeFilter);

  return (
    <section id="tech-stack" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]">
      {/* Background Watermark Title */}
      <div className="section-watermark text-[clamp(55px,13vw,210px)]">
        TECH STACK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>TECHNOLOGIES I USE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl">
            The tools I use to build complete websites, apps, and scalable backends.
          </h2>
        </div>

        {/* Top Marquee Strip (Screenshot 2) */}
        <div className="w-full overflow-hidden py-3 mb-10 border-y border-[var(--border-default)] bg-[var(--bg-surface)]/60 rounded-xl">
          <div className="flex items-center gap-4 animate-none overflow-x-auto no-scrollbar sm:justify-center flex-wrap px-4">
            {MARQUEE_SKILLS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Tab Strip (SRS 4.4.1) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
              activeFilter === "all"
                ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            All [7]
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
                activeFilter === cat.id
                  ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Cards Grid (Screenshot 2) */}
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={cat.id}
                  className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between hover:border-[var(--border-accent)] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-default)]">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-indigo-500" />
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                          {cat.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-deep)] px-2 py-0.5 rounded-full border border-[var(--border-default)]">
                        {cat.count}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-deep)] text-[var(--text-primary)] border border-[var(--border-default)] group-hover:border-[var(--border-default)]/80 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Problem Solving Stat Card (SRS 4.4.1) */}
        <div className="mt-8 p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Algorithmic & Problem Solving Foundations
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Strong computational thinking and data structure optimization
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-primary)]">
            <span className="px-3 py-1 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] font-semibold">
              LeetCode 150+
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] font-semibold">
              Codeforces 120+
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] font-semibold">
              HackerRank 150+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
