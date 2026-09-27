"use client";

import React from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck, BookmarkCheck } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Backend Web Development (Django & DRF)",
    issuer: "Phitron",
    desc: "Mastery in scalable Django architectures, DRF REST APIs, token authentication, and relational database modeling.",
    date: "Certified",
    badge: "Verified Certificate"
  },
  {
    title: "DevOps Fundamentals & Deployment",
    issuer: "Ostad",
    desc: "Production containerization with Docker, Nginx reverse proxy configuration, Linux VPS administration, and CI/CD pipelines.",
    date: "Certified",
    badge: "Verified Certificate"
  },
  {
    title: "Professional Spoken English Training",
    issuer: "3-Month Professional Program",
    desc: "Advanced professional verbal communication, cross-functional engineering collaboration, and client negotiation.",
    date: "Completed",
    badge: "Professional Training"
  },
  {
    title: "Diploma in Computer Science & Technology",
    issuer: "Brahmanbaria Govt. Polytechnic",
    desc: "Graduated with honors (CGPA 3.51/4.00) with academic emphasis on core computing foundations and algorithms.",
    date: "2021 – 2026",
    badge: "Academic Honors"
  },
  {
    title: "Algorithmic Problem Solving",
    issuer: "LeetCode & HackerRank",
    desc: "Completed 150+ LeetCode, 120+ Codeforces, and 150+ HackerRank problems in data structures and graph algorithms.",
    date: "Active",
    badge: "Competitive Coding"
  },
  {
    title: "Full-Stack System Delivery Recognition",
    issuer: "PEPOLTEK LTD",
    desc: "Recognized for spearheading AI-HRM TalenTEK features and cutting release deployment times by 87%.",
    date: "Production Impact",
    badge: "Engineering Impact"
  }
];

export default function Credentials() {
  return (
    <section id="credentials" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]">
      {/* Background Watermark Title */}
      <div className="section-watermark text-[clamp(50px,12vw,200px)]">
        CREDENTIALS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>RECOGNITION & CERTIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl">
            Verified credentials, professional courses, and academic honors.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between hover:border-[var(--border-accent)] transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-deep)] text-[var(--text-muted)] border border-[var(--border-default)]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-indigo-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  {cert.issuer}
                </p>
                <p className="mt-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-default)] flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>{cert.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
