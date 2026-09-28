"use client";

import React from "react";
import { 
  Code, 
  Server, 
  Sparkles, 
  Layers, 
  Cloud, 
  Gauge, 
  ArrowUpRight,
  ClipboardList,
  Cpu,
  Rocket,
  ShieldCheck
} from "lucide-react";

const SERVICES = [
  {
    title: "WEB & FULL-STACK DEVELOPMENT",
    desc: "Responsive, polished web apps with Next.js, React, TypeScript, and Tailwind CSS engineered for sub-second performance.",
    icon: Code,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "BACKEND & REST ARCHITECTURE",
    desc: "Scalable REST APIs using Django & DRF, clean modular service architecture, JWT security, and high-concurrency Redis caching.",
    icon: Server,
    tags: ["Python", "Django", "DRF", "JWT", "Redis"]
  },
  {
    title: "AI & RAG PIPELINES",
    desc: "Autonomous LLM parsing, vector search with pgvector, automated CV ranking, and retrieval-augmented internal policy chatbots.",
    icon: Sparkles,
    tags: ["LLMs", "RAG", "pgvector", "OpenAI API"]
  },
  {
    title: "CUSTOM ENTERPRISE SYSTEMS",
    desc: "Complex SaaS applications: 4-tier role-based access control, multi-vendor cart & checkout, and ATS recruitment pipelines.",
    icon: Layers,
    tags: ["Multi-Tenancy", "RBAC", "SSLCommerz", "Fintech"]
  },
  {
    title: "DEVOPS & CLOUD INFRASTRUCTURE",
    desc: "End-to-end containerization with Docker, Nginx reverse proxy, CI/CD pipelines cutting deployment cycles from 4 hours to 30 mins.",
    icon: Cloud,
    tags: ["Docker", "AWS", "CI/CD", "Linux VPS"]
  },
  {
    title: "API OPTIMIZATION & PERFORMANCE",
    desc: "Database indexing, query profiling, and caching strategies delivering ~30% API speedup and reducing hosting overhead by ~20%.",
    icon: Gauge,
    tags: ["PostgreSQL Tuning", "Caching", "Monitoring"]
  }
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Planning & Architecture",
    desc: "We discuss requirements, define the database schema, API contracts, and technology roadmap first.",
    icon: ClipboardList
  },
  {
    num: "02",
    title: "Development & Coding",
    desc: "I build the backend and interface with clean modular code, submitting regular staging demos.",
    icon: Cpu
  },
  {
    num: "03",
    title: "Testing & Deployment",
    desc: "Rigorous API testing, Docker containerization, and zero-downtime CI/CD deployment to production VPS.",
    icon: Rocket
  },
  {
    num: "04",
    title: "Optimization & Support",
    desc: "Post-deployment monitoring with Grafana, database query tuning, and feature iterations.",
    icon: ShieldCheck
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]">
      {/* Background Watermark Title */}
      <div className="section-watermark text-[clamp(38px,9vw,150px)]">
        SERVICES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>SERVICES & SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-3xl">
            Everything you need to launch: architecture, APIs, frontend, and cloud deployment.
          </h2>
        </div>

        {/* Services Cards (Screenshot 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 sm:mb-28">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between hover:border-[var(--border-accent)] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-[var(--btn-pill-bg)] group-hover:text-[var(--btn-pill-text)] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-default)] flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[var(--bg-deep)] text-[var(--text-muted)] border border-[var(--border-default)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Process Section (Screenshot 5) */}
        <div className="pt-8 border-t border-[var(--border-default)]">
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>HOW I WORK</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Four structured steps from initial concept to live production.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between hover:border-[var(--border-accent)] transition-all"
                >
                  <div>
                    <span className="text-3xl font-extrabold font-display text-[var(--text-muted)]/40 block mb-4">
                      {step.num}
                    </span>
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
