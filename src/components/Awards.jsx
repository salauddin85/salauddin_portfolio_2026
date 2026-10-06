"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Award } from "lucide-react";

// Placeholder award data matching the reference screenshots
// const AWARDS = [
//   {
//     id: "system-developer",
//     title: "System Developer",
//     issuer: "SAINT COLUMBAN COLLEGE",
//     year: "2024",
//     desc: "Recognized as System Developer for outstanding contribution as lead developer on the capstone project."
//   },
//   {
//     id: "web-developer",
//     title: "Web Developer",
//     issuer: "DEPARTMENT OF TRADE & INDUSTRY",
//     year: "2024",
//     desc: "Recognized for outstanding participation as a Web Developer in partnership with DTI, Saint Columban College, and industry partners."
//   },
//   {
//     id: "byte-president",
//     title: "BYTE President",
//     issuer: "COLLEGE OF COMPUTING STUDIES",
//     year: "2024",
//     desc: "Served as President of the BYTE Organization, demonstrating leadership and commitment to the computing studies community."
//   },
//   {
//     id: "deans-lister",
//     title: "Dean's Lister",
//     issuer: "SAINT COLUMBAN COLLEGE",
//     year: "2021 to 2025",
//     desc: "Academic excellence with a GPA of 1.50 while completing Bachelor of Science in Information Technology."
//   },
//   {
//     id: "cert-recognition",
//     title: "Certificate of Recognition",
//     issuer: "SIBUGAY TECHNICAL INSTITUTE INC.",
//     year: "2021",
//     desc: "Graduated With Honors and Best in Research from the STEM senior high school program (GPA 1.75)."
//   },
//   {
//     id: "computer-literacy",
//     title: "Computer Literacy",
//     issuer: "DEPARTMENT OF EDUCATION | ALS",
//     year: "2017",
//     desc: "Completed a basic computer literacy program under the Department of Education Alternative Learning System."
//   }
// ];
const AWARDS = [
  {
    id: "academic-honors-polytechnic",
    title: "Academic Honors Recognition",
    issuer: "Brahmanbaria Govt. Polytechnic",
    year: "2024",
    desc: "Achieved Academic Honors recognition with a CGPA of 3.51 for excellence in Diploma Engineering studies."
  },
  {
    id: "devops-cloud-engineering",
    title: "DevOps & Cloud Specialization",
    issuer: "Ostad",
    year: "2025",
    desc: "Recognized for mastering containerization, CI/CD pipelines, AWS infrastructure, and Nginx reverse proxy management."
  },
  {
    id: "backend-web-development",
    title: "Backend Engineering Distinction",
    issuer: "Phitron",
    year: "2023",
    desc: "Honored for successfully completing rigorous backend curriculum specializing in Django, DRF, and complex database architectures."
  },
  {
    id: "frontend-engineering-vercel",
    title: "Next.js & React Frontend Engineering",
    issuer: "Vercel Ecosystem Training",
    year: "2026",
    desc: "Credentialed for advanced client-server architecture, modern rendering patterns, and scalable React application engineering."
  },
  {
    id: "leadership-excellence-award",
    title: "Leadership Excellence Award",
    issuer: "10 Minute School",
    year: "2022",
    desc: "Recognized for outstanding team coordination, leadership principles, and professional soft-skill development."
  },
  {
    id: "python-problem-solving",
    title: "Python Problem Solving Certificate",
    issuer: "HackerRank",
    year: "2021",
    desc: "Certified for algorithmic proficiency, data structure implementation, and core Python language mastery."
  }
];
export default function Awards() {
  const sectionRef = useRef(null);

  // Directly link animation to visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Physical spring physics for buttery-smooth responsive scroll
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  // Scroll-linked continuous leftward movement matching Experience
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  return (
    <section 
      id="awards" 
      ref={sectionRef} 
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Section Title — Centered horizontally only */}
      <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
        >
          AWARDS
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Scroll-linked continuous leftward movement */}
        <motion.div 
          style={{ x: smoothHeaderX }}
          className="flex flex-col items-start mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-normal text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
            <span className="font-extrabold opacity-90">RECOGNITION</span>
          </div>
          <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Awards, certifications, and academic honors.
          </h2>
        </motion.div>

        {/* 6 Award Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="group rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 cursor-default"
            >
              <div>
                {/* Top Row: Ribbon Icon + Year Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Ribbon Icon Circle: transitions to solid black circle with white icon on hover (Screenshot signature feature) */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black shadow-xs">
                    <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Year Tag */}
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-default)] bg-[var(--bg-elevated)] group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors">
                    {award.year}
                  </span>
                </div>

                {/* Award Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-black dark:group-hover:text-white transition-colors">
                  {award.title}
                </h3>

                {/* Issuer / Institution */}
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">
                  {award.issuer}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
