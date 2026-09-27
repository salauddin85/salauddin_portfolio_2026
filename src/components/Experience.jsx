"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    id: "pepoltek",
    num: "01",
    role: "Junior Software Developer",
    company: "PEPOLTEK LTD",
    period: "December 2024 to September 2026",
    location: "Dhaka, Bangladesh",
    type: "Work",
    bullets: [
      "Engineered scalable REST APIs using Django REST Framework and maintained production-grade backend systems.",
      "Built backend architecture for Club Management System, Talent Tracker (talentracker.net), and Pepoltek (pepoltek.com) using DRF, TypeScript, and Docker.",
      "Contributed 15+ full-stack features for AI-HRM TalenTEK (talentek.bd) using Next.js and JavaScript for seamless frontend integration.",
      "Automated CI/CD deployment processes with Docker pipelines, reducing deployment times from 4 hours to 30 minutes.",
      "Improved API performance by ~30% through caching strategies and optimized database queries.",
      "Managed VPS deployments and production systems, reducing infrastructure costs by ~20% via server optimization."
    ],
    tech: ["Python", "Django", "DRF", "Next.js", "TypeScript", "Docker", "PostgreSQL", "CI/CD", "AWS"]
  },
  {
    id: "nub",
    num: "02",
    role: "B.Sc. in Computer Science & Engineering",
    company: "Northern University Bangladesh",
    period: "April 2026 to Expected October 2029",
    location: "Dhaka, Bangladesh",
    type: "Education",
    bullets: [
      "Currently pursuing B.Sc. in CSE focusing on Advanced Algorithms, Distributed Systems, and AI integrations.",
      "Active participant in collegiate competitive programming and engineering projects."
    ],
    tech: ["Data Structures", "Algorithms", "System Architecture", "AI & ML"]
  },
  {
    id: "bgpi",
    num: "03",
    role: "Diploma in Computer Science & Technology",
    company: "Brahmanbaria Government Polytechnic Institute",
    period: "May 2021 to March 2026",
    location: "Brahmanbaria, Bangladesh",
    type: "Education",
    bullets: [
      "Graduated with CGPA 3.51 out of 4.00.",
      "Strong foundational coursework in C, C++, Java, Database Management Systems, and Software Engineering."
    ],
    tech: ["C / C++", "Java", "SQL", "OOP", "Networking"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState("pepoltek");

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inverted Dark Card Container (Screenshot 3) */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#0E0E14] text-white border border-white/10 shadow-2xl overflow-hidden">
          {/* Faint Dark Watermark */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 font-display font-black text-[clamp(50px,12vw,170px)] text-white/[0.03] select-none pointer-events-none whitespace-nowrap tracking-wider">
            EXPERIENCE
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-indigo-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>CAREER & EDUCATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-xl">
                Where I&apos;ve worked and what I did, from architecture to production.
              </h2>
            </div>
            <div className="text-xs font-mono text-white/50">
              2y+ of professional experience
            </div>
          </div>

          {/* Timeline Accordion Items (Screenshot 3) */}
          <div className="space-y-4">
            {EXPERIENCES.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-xs sm:text-sm font-mono text-white/40 font-semibold">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.company}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-mono text-white/50">
                        {item.period}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors">
                        {isExpanded ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/10"
                      >
                        <div className="flex items-center gap-4 text-xs font-mono text-indigo-400 pt-4 pb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        <div className="space-y-2 mt-2">
                          {item.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/10 text-white/90 border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
