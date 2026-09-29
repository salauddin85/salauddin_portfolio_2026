"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  Activity,
  Building2,
  Rocket,
  Zap
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
  const sectionRef = useRef(null);

  // Directly link animation to the visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth, physical spring configuration for responsive scroll
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  const rawJourneyX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const smoothJourneyX = useSpring(rawJourneyX, springConfig);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Section Title — Centered horizontally only */}
      <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
        >
          ABOUT ME
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          style={{ x: smoothHeaderX }}
          className="flex flex-col items-start mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-normal text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
            <span className="font-extrabold opacity-90">GET TO KNOW ME</span>
          </div>
          <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            I love building simple, reliable, and scalable systems that solve real problems.
          </h2>
        </motion.div>

        {/* Two-Column Grid: Left Journey & Expertise / Right Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: My Journey, Expertise & Metrics (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* My Journey */}
            <motion.div style={{ x: smoothJourneyX }}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                MY JOURNEY
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                <p>
                  I&apos;m <span className="font-semibold text-[var(--text-primary)]">MD. Salauddin</span>, a Full-Stack Software Engineer with nearly 2 years of production experience delivering maintainable software systems across the full SDLC at <span className="font-semibold text-[var(--text-primary)]">PEPOLTEK LTD</span>.
                </p>
                <p>
                  My engineering journey began with a hands-on Diploma in Computer Science & Technology from Brahmanbaria Polytechnic (graduating with a 3.51 GPA), and I am currently pursuing my B.Sc. in Computer Science & Engineering at Northern University Bangladesh.
                </p>
                <p>
                  I thrive on solving complex backend challenges — optimizing database latency by 30%, automating CI/CD release cycles from 4 hours to 30 minutes, and integrating autonomous LLM pipelines and RAG vector search into enterprise applications.
                </p>
              </div>
            </motion.div>

            {/* Expertise Grid with Monochrome Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                EXPERTISE
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {EXPERTISE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-[13px] font-medium text-[var(--text-primary)] shadow-2xs hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out cursor-pointer select-none"
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--text-primary)] group-hover:text-white dark:group-hover:text-black shrink-0 transition-colors duration-300" />
                      <span className="transition-colors duration-300 whitespace-nowrap">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* PEPOLTEK Production Metrics — Pure Black & White Styling */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[var(--border-default)] gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] flex items-center justify-center shadow-xs">
                    <Activity className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                      PEPOLTEK LTD. Production Metrics
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)] font-medium">
                      Real-world engineering impact & optimization
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] border border-[var(--border-default)] text-[11px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
                  <span>Live Impact</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Metric 1: CI/CD Deployment Time */}
                <div className="group p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)]/70 hover:bg-[var(--bg-deep)] hover:border-[var(--border-accent)] hover:shadow-xs transition-all duration-300">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)]">
                      -87% Time
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] tracking-tight">
                    4h <span className="text-sm text-[var(--text-muted)] font-normal">→</span> 30m
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mt-1">
                    CI/CD Deploy Time
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-snug">
                    Automated Docker release cycle
                  </div>
                </div>

                {/* Metric 2: API Query Speedup */}
                <div className="group p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)]/70 hover:bg-[var(--bg-deep)] hover:border-[var(--border-accent)] hover:shadow-xs transition-all duration-300">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)]">
                      Faster
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] tracking-tight">
                    +30%
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mt-1">
                    API Performance
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-snug">
                    PostgreSQL indexing & Redis cache
                  </div>
                </div>

                {/* Metric 3: Cloud Infrastructure Savings */}
                <div className="group p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)]/70 hover:bg-[var(--bg-deep)] hover:border-[var(--border-accent)] hover:shadow-xs transition-all duration-300">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Server className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)]">
                      Savings
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] tracking-tight">
                    -20%
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mt-1">
                    Infra Cloud Cost
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-snug">
                    Linux VPS & resource optimization
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[var(--text-muted)] font-mono">
                <span>Production Platforms: TalenTEK AI-HRM · Club Mgmt · Pepoltek.com</span>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:opacity-70 font-semibold transition-opacity"
                >
                  <span>View Timeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Education & Qualifications (5 Cols) with Pure Black-and-White Scheme */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
              EDUCATION
            </h3>

            {/* Degree 1: B.Sc. in CSE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5)] hover:border-[var(--border-accent)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-105 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300 shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-[var(--border-default)] bg-[var(--bg-deep)] text-[11px] font-mono font-medium text-[var(--text-muted)]">
                    2026 – Expected 2029
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                  Bachelor of Science in Computer Science & Engineering
                </h4>

                <div className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                  <span>Northern University Bangladesh</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border-default)] flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-[var(--border-default)] text-xs font-mono font-medium text-[var(--text-primary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] animate-pulse"></span>
                  <span>Currently Enrolled (Active Student)</span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Dhaka, BD</span>
              </div>
            </motion.div>

            {/* Degree 2: Diploma in CST */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5)] hover:border-[var(--border-accent)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-105 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300 shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-[var(--border-default)] bg-[var(--bg-deep)] text-[11px] font-mono font-medium text-[var(--text-muted)]">
                    2021 – 2026
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                  Diploma in Computer Science & Technology
                </h4>

                <div className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                  <span>Brahmanbaria Government Polytechnic Institute</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border-default)] flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-deep)] border border-[var(--border-default)] text-xs font-mono font-semibold text-[var(--text-primary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                  <span>CGPA 3.51 / 4.00</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-[var(--text-primary)]">
                  Academic Honors
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
