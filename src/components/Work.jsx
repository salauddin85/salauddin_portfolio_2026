"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Check, Layers } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const FEATURED_PROJECTS = [
  {
    id: "talentek",
    title: "TALENTek – Enterprise AI-HRM Platform",
    tagline: "Multi-tenant SaaS with autonomous AI CV screening & ATS",
    category: "ai",
    tech: ["Python", "Django", "DRF", "pgvector", "Next.js", "Redis", "Docker", "SSLCommerz"],
    metrics: [
      "LLM & pgvector parser cutting CV screening time by ~65%",
      "Chunked RAG chatbot for automated HR policy retrieval",
      "Interactive ATS Kanban pipeline built with Next.js & Zustand",
      "Dockerized micro-architecture cutting release time from 4h to 30m"
    ],
    liveUrl: "https://talentek.bd",
    githubUrl: "https://github.com/salauddin85",
    isLive: true
  },
  {
    id: "ecommerce",
    title: "Multi-Vendor E-Commerce Platform",
    tagline: "Scalable marketplace with atomic checkout & 4-tier RBAC",
    category: "fintech",
    tech: ["Django", "DRF", "Next.js", "TypeScript", "Zustand", "PostgreSQL", "Docker"],
    metrics: [
      "4-tier access control (Admin, Vendor, Brand, Customer) with JWT",
      "Atomic cart & checkout engine with split-order fulfillment",
      "SSLCommerz fintech payment lifecycle integration",
      "25% response latency reduction via PostgreSQL query indexing"
    ],
    liveUrl: "https://github.com/salauddin85",
    githubUrl: "https://github.com/salauddin85",
    isLive: true
  },
  {
    id: "club-mgmt",
    title: "Club Member Management System",
    tagline: "High-concurrency membership & administrative operations",
    category: "web",
    tech: ["Django", "DRF", "TypeScript", "Docker", "PostgreSQL"],
    metrics: [
      "Production-deployed at PEPOLTEK serving 1,000+ active users",
      "Automated membership workflows and event ticketing pipelines",
      "Role-based administrative dashboards with exportable analytics"
    ],
    liveUrl: "https://pepoltek.com",
    githubUrl: "https://github.com/salauddin85",
    isLive: true
  },
  {
    id: "pepoltek-corp",
    title: "Pepoltek.com Corporate Platform",
    tagline: "Corporate presence with headless CMS & dynamic pipelines",
    category: "web",
    tech: ["DRF", "Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    metrics: [
      "Modern corporate portal showcasing engineering services & solutions",
      "SEO-optimized Next.js architecture with sub-second page loads",
      "Integrated lead capture and client qualification system"
    ],
    liveUrl: "https://pepoltek.com",
    githubUrl: "https://github.com/salauddin85",
    isLive: true
  },
  {
    id: "talentracker",
    title: "TalentTracker Platform",
    tagline: "Recruitment discovery engine and candidate tracking",
    category: "web",
    tech: ["Django REST Framework", "Next.js", "Docker", "PostgreSQL"],
    metrics: [
      "Live discovery platform deployed at talentracker.net",
      "Fast candidate profile indexing and recruiter matchmaking",
      "Production VPS containerization with Nginx reverse proxy"
    ],
    liveUrl: "https://talentracker.net",
    githubUrl: "https://github.com/salauddin85",
    isLive: true
  }
];

const OTHER_PROJECTS = [
  {
    title: "Hospital Management Core",
    desc: "Patient EHR, appointments, and doctor scheduling APIs with DRF.",
    tech: ["Django", "DRF", "PostgreSQL"],
    link: "https://github.com/salauddin85"
  },
  {
    title: "School Management Workflow",
    desc: "Academic grading, attendance tracking, and tuition billing platform.",
    tech: ["Next.js", "DRF", "Docker"],
    link: "https://github.com/salauddin85"
  },
  {
    title: "Scalable JWT & Celery Boilerplate",
    desc: "Production-ready backend starter with async tasks and Redis caching.",
    tech: ["Python", "Celery", "Redis"],
    link: "https://github.com/salauddin85"
  },
  {
    title: "AI Semantic Search Engine",
    desc: "Document embeddings & cosine similarity using pgvector & OpenAI.",
    tech: ["pgvector", "Python", "OpenAI"],
    link: "https://github.com/salauddin85"
  },
  {
    title: "DevOps Automated CI/CD Setup",
    desc: "GitHub Actions workflow deploying multi-container stacks to AWS VPS.",
    tech: ["Docker", "Nginx", "GitHub Actions"],
    link: "https://github.com/salauddin85"
  }
];

export default function Work() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]">
      {/* Background Watermark Title */}
      <div className="section-watermark text-[clamp(65px,16vw,240px)]">
        WORK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] max-w-xl">
              Live products and production builds across web, AI, SaaS, and fintech.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              All [10]
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "ai"
                  ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              AI & RAG
            </button>
            <button
              onClick={() => setFilter("fintech")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "fintech"
                  ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Fintech
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "web"
                  ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              SaaS & Web
            </button>
          </div>
        </div>

        {/* Featured Projects Grid (Screenshots 2 & 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden shadow-xs hover:border-[var(--border-accent)] transition-all flex flex-col justify-between"
              >
                {/* Mockup / Terminal Preview Banner */}
                <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[var(--bg-deep)] to-[var(--bg-elevated)] p-6 flex flex-col justify-between border-b border-[var(--border-default)] relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Live Production</span>
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                      PEPOLTEK
                    </span>
                  </div>

                  {/* Visual Decorative Grid/Code Representation */}
                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface)]/90 backdrop-blur border border-[var(--border-default)]/80 shadow-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-1.5">
                      <span>architecture.sys</span>
                      <span className="text-emerald-500 font-semibold">200 OK</span>
                    </div>
                    <p className="text-xs font-mono text-[var(--text-primary)] truncate">
                      {project.title} · {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Impact Metrics */}
                    <div className="mt-5 space-y-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[var(--bg-deep)] border border-[var(--border-default)] text-[var(--text-primary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-[var(--border-default)] flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:underline"
                    >
                      <span>Live Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Codebase</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Other Work Section (SRS 4.5.1 - 5 smaller projects) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
              OTHER SELECTED PROJECTS
            </h4>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              5 additional builds
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OTHER_PROJECTS.map((other, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-[var(--border-accent)] transition-all flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-sm font-bold text-[var(--text-primary)]">
                    {other.title}
                  </h5>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {other.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-default)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {other.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-[var(--text-muted)]">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={other.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--text-primary)] hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
