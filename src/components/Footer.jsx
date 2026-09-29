"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";

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

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--bg-deep)] border-t border-[var(--border-default)] pt-16 pb-12 text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section (Screenshot 7) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-14 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-default)] bg-[var(--bg-surface)] p-0.5 shadow-xs">
              <Image
                src="/images/portfolio.png"
                alt="MD. Salauddin"
                width={40}
                height={40}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                MD. Salauddin
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Full Stack Software Engineer based in Dhaka, Bangladesh. Open for new work.
              </p>
            </div>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] hover:opacity-90 active:scale-95 transition-all shadow-xs"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link Columns (Screenshot 7) */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a></li>
              <li><a href="#tech-stack" className="hover:text-[var(--text-primary)] transition-colors">Tech Stack</a></li>
              <li><a href="#work" className="hover:text-[var(--text-primary)] transition-colors">Selected Work</a></li>
              <li><a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">Experience</a></li>
              <li><a href="#credentials" className="hover:text-[var(--text-primary)] transition-colors">Credentials</a></li>
              <li><a href="#services" className="hover:text-[var(--text-primary)] transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="mailto:ahmedsalauddin677785@gmail.com" className="hover:text-[var(--text-primary)] transition-colors truncate block">
                  ahmedsalauddin677785@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801902061020" className="hover:text-[var(--text-primary)] transition-colors">
                  +880 1902 061020
                </a>
              </li>
              <li className="text-[var(--text-muted)]">
                Dhaka, Bangladesh 🇧🇩
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-4">
              CONNECT
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/salauddin85"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-[var(--text-primary)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/salauddinahmed85"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-[var(--text-primary)] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:ahmedsalauddin677785@gmail.com"
                className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-[var(--text-primary)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-4">
              AVAILABILITY
            </h4>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              Open to full-time SWE roles, distributed teams, and high-impact freelance engineering contracts.
            </p>
            <div className="mt-3 text-[11px] font-mono text-[var(--text-primary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Screenshot 7) */}
        <div className="pt-8 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} MD. Salauddin. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors cursor-pointer focus:outline-none"
          >
            <span className="text-sm font-mono font-bold ">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 " />
          </button>
        </div>
      </div>
    </footer>
  );
}
