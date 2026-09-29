"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus, Minus, Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    id: "pepoltek",
    num: "01",
    role: "Junior Software Developer",
    company: "PEPOLTEK LTD",
    period: "December 2024 – September 2026",
    location: "Dhaka, Bangladesh",
    type: "Experience",
    icon: Briefcase,
    summary: "Worked across the full software lifecycle on multiple production products, from requirement analysis and system design to development, testing, deployment and long-term maintenance, in close collaboration with clients.",
    sections: [
      {
        heading: "End-to-end ownership",
        points: [
          "Handled projects from planning to production: requirement analysis, documentation (PDD, SRS, SDD), database design, API design, development, testing, deployment, bug fixing and continuous feature additions."
        ]
      },
      {
        heading: "Backend",
        points: [
          "Built scalable REST APIs with Django REST Framework, PostgreSQL and Redis for Club Management System, Talent Tracker (talentracker.net) and Pepoltek (pepoltek.com), supporting 1000-5000+ active users.",
          "Improved API performance by ~30% through caching strategies and optimized database queries."
        ]
      },
      {
        heading: "Frontend & UI/UX",
        points: [
          "Delivered 15+ full-stack features for AI-HRM TalenTEK (talentek.bd) using Next.js, TypeScript and Zustand.",
          "Turned UI designs into responsive, user-friendly interfaces and suggested UX improvements based on user feedback."
        ]
      },
      {
        heading: "DevOps & Infrastructure",
        points: [
          "Automated CI/CD with Docker pipelines, cutting deployment time from 4 hours to 30 minutes.",
          "Managed VPS deployments and production systems, reducing infrastructure costs by ~20% through server optimization."
        ]
      },
      {
        heading: "Testing & Quality (SQA)",
        points: [
          "Wrote API tests with Pytest, verified features before release, and reproduced, triaged and fixed reported bugs."
        ]
      },
      {
        heading: "Client collaboration & support",
        points: [
          "Worked closely with clients to understand their needs and turn ideas into simple, reliable software.",
          "Added new features, fixed bugs and improved performance based on client feedback.",
          "Provided technical support, system maintenance and regular updates to keep applications secure, reliable and running smoothly."
        ]
      }
    ],
    tech: ["Python", "Django", "DRF", "Next.js", "TypeScript", "Zustand", "PostgreSQL", "Redis", "Docker", "CI/CD", "Pytest", "Nginx", "Linux VPS"]
  },
  {
    id: "nub",
    num: "02",
    role: "B.Sc. in Computer Science & Engineering",
    company: "Northern University Bangladesh",
    period: "April 2026 to Expected October 2029",
    location: "Dhaka, Bangladesh",
    type: "Education",
    icon: GraduationCap,
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
    icon: GraduationCap,
    bullets: [
      "Graduated with CGPA 3.51 out of 4.00.",
      "Strong foundational coursework in C, C++, Java, Database Management Systems, and Software Engineering."
    ],
    tech: ["C / C++", "Java", "SQL", "OOP", "Networking"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);
  const sectionRef = useRef(null);

  // Directly link animation to visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Physical spring physics for buttery-smooth responsive scroll
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  // Scroll-linked continuous leftward movement calibrated to stay unclipped inside black box
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inverted Dark Card Container with modern border and shadow */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 pt-16 sm:pt-20 lg:pt-24 bg-[#0E0E14] text-white border border-white/10 shadow-2xl overflow-hidden [--watermark-color:transparent] [--watermark-stroke:1px_rgba(255,255,255,0.14)]">
          
          {/* Centered Watermark Title inside the Black Box — Complete word unclipped & clearly visible */}
          <div className="absolute top-4 sm:top-6 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
            <motion.div 
              style={{ x: smoothWatermarkX }}
              className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
            >
              EXPERIENCE
            </motion.div>
          </div>

          {/* Section Header: Scroll-linked continuous leftward movement with clear comfortable gap */}
          <motion.div 
            style={{ x: smoothHeaderX }}
            className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-2 sm:mt-4"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-normal text-white/60 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="font-extrabold opacity-90">CAREER & EDUCATION</span>
              </div>
              <h2 className="text-base sm:text-lg font-normal text-white/80 leading-relaxed">
                Engineering roles from architecture to production.
              </h2>
            </div>
            <div className="text-xs font-mono text-white/60 shrink-0 whitespace-nowrap">
              2y+ of professional experience
            </div>
          </motion.div>

          {/* Timeline Accordion Items (Experience & Education) */}
          <div className="relative z-10 space-y-4">
            {EXPERIENCES.map((item) => {
              const isExpanded = expandedId === item.id;
              const TypeIcon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    {/* Left text block: subtle horizontal hover animation from right to left */}
                    <div className="flex items-center gap-4 sm:gap-6 transition-transform duration-300 ease-out group-hover:-translate-x-2">
                      <span className="text-xs sm:text-sm font-mono text-white/40 font-semibold group-hover:text-white transition-colors duration-200">
                        {item.num}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors">
                            {item.company}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                            <TypeIcon className="w-3 h-3 text-white/70" />
                            <span>{item.type}</span>
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70 mt-1 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Right side: period and "+" icon button */}
                    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-mono text-white/50 transition-transform duration-300 ease-out group-hover:-translate-x-1">
                        {item.period}
                      </span>

                      {/* "+" icon button: background turns solid white with black icon on hover */}
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-300 ease-out group-hover:bg-white group-hover:text-black group-hover:border-white hover:bg-white hover:text-black hover:border-white shadow-sm">
                        {isExpanded ? (
                          <Minus className="w-4 h-4 transition-transform duration-200" />
                        ) : (
                          <Plus className="w-4 h-4 transition-transform duration-200" />
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
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/10"
                      >
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 pt-4 pb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        {/* High-level summary paragraph */}
                        {item.summary && (
                          <div className="pt-2 pb-3 mb-3 border-b border-white/10">
                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                              {item.summary}
                            </p>
                          </div>
                        )}

                        {/* Structured Sections (Item 1) or Standard Bullets (Item 2 & 3) */}
                        {item.sections ? (
                          <div className="space-y-4 mt-2">
                            {item.sections.map((sec, sIdx) => (
                              <div key={sIdx} className="space-y-1.5">
                                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                  <span>{sec.heading}</span>
                                </h4>
                                <div className="space-y-1.5 pl-2 sm:pl-3.5">
                                  {sec.points.map((pt, pIdx) => (
                                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                                      <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                                      <span>{pt}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-2.5 mt-2">
                            {item.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                                <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}

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
