"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Code, 
  Layers, 
  Database, 
  Cpu, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Activity
} from "lucide-react";

const EXPERTISE = [
  { name: "Web Development", icon: Code },
  { name: "Custom Systems", icon: Layers },
  { name: "Database Design", icon: Database },
  { name: "API Integration", icon: Cpu },
  { name: "AI & RAG Solutions", icon: Sparkles },
  { name: "DevOps & Cloud", icon: Server },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]">
      {/* Background Watermark Title (Screenshot 1) */}
      <div className="section-watermark text-[clamp(60px,14vw,220px)]">
        ABOUT ME
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl">
            I love building simple, reliable, and scalable systems that solve real problems.
          </h2>
        </div>

        {/* Two-Column Grid: Left Journey & Expertise / Right Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: My Journey (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">
                MY JOURNEY
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                <p>
                  I&apos;m <span className="font-semibold text-[var(--text-primary)]">MD. Salauddin</span>, a Full-Stack Software Engineer with nearly 2 years of production experience delivering maintainable software systems across the full SDLC at <span className="font-medium text-[var(--text-primary)]">PEPOLTEK LTD</span>.
                </p>
                <p>
                  My engineering journey began with a hands-on Diploma in Computer Science & Technology from Brahmanbaria Polytechnic (graduating with a 3.51 GPA), and I am currently pursuing my B.Sc. in Computer Science & Engineering at Northern University Bangladesh.
                </p>
                <p>
                  I thrive on solving complex backend challenges — optimizing database latency by 30%, automating CI/CD release cycles from 4 hours to 30 minutes, and integrating autonomous LLM pipelines and RAG vector search into enterprise applications.
                </p>
              </div>
            </div>

            {/* Expertise Grid */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">
                EXPERTISE
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EXPERTISE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-primary)] shadow-xs hover:border-[var(--border-accent)] transition-all"
                    >
                      <Icon className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Metrics / System Preview Card (Matches dashboard preview in Screenshot 1) */}
            <div className="p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-default)]">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-mono font-medium text-[var(--text-primary)]">
                    PEPOLTEK Production Metrics
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  Live Impact
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-[var(--bg-deep)]">
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)]">4h → 30m</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">CI/CD Deploy Time</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-deep)]">
                  <div className="text-base sm:text-lg font-bold text-emerald-500">+30%</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">API Query Speed</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--bg-deep)]">
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)]">-20%</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono">Infra Cloud Cost</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Training (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
              EDUCATION
            </h3>

            {/* Degree 1 */}
            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between group hover:border-[var(--border-accent)] transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  2026 to Expected 2029
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Bachelor of Science in Computer Science & Engineering
                </h4>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Northern University Bangladesh
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Currently Enrolled (Active Student)</span>
                </div>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between group hover:border-[var(--border-accent)] transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  2021 to 2026
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Diploma in Computer Science & Technology
                </h4>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Brahmanbaria Government Polytechnic Institute
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[var(--bg-deep)] text-xs font-mono font-medium text-[var(--text-primary)] border border-[var(--border-default)]">
                    CGPA 3.51 / 4.00
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
