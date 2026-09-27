"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

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

const STATS = [
  { value: "2+", label: "YEARS EXPERIENCE" },
  { value: "15+", label: "FULL-STACK FEATURES" },
  { value: "1000+", label: "ACTIVE USERS SERVED" },
  { value: "30%", label: "API OPTIMIZATION" },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.innerWidth < 768
      );
    }

    const handleMouseMove = (e) => {
      if (isTouchDevice) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const photoParallax = isTouchDevice
    ? { x: 0, y: 0 }
    : { x: mousePos.x * 7, y: mousePos.y * 7 };
  const textParallax = isTouchDevice
    ? { x: 0, y: 0 }
    : { x: mousePos.x * -3.5, y: mousePos.y * -3.5 };

  return (
    <div className="relative w-full flex flex-col justify-between">
      {/* 4.2 Hero Section — Centered Photo Layout */}
      <section
        id="hero"
        ref={containerRef}
        className="relative w-full min-h-[90vh] lg:min-h-[100dvh] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 hero-mesh-gradient select-none"
      >
        {/* Main Center Typographic & Photo Stage */}
        <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          {/* Layer 1: Giant Typographic Centerpiece */}
          <motion.div
            animate={textParallax}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 px-2 sm:px-4"
          >
            {/* "Hi, I'm" */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-[var(--text-muted)] uppercase mb-1 sm:mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Outlined FIRST NAME */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="w-full text-center"
            >
              <h1 className="hero-stroke-text font-display font-black tracking-tighter uppercase leading-[0.9] text-[clamp(32px,8.5vw,145px)] select-none">
                MD. SALAUDDIN
              </h1>
            </motion.div>

            {/* Solid LAST NAME */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="w-full text-center -mt-1 sm:-mt-3 md:-mt-6 lg:-mt-10"
            >
              <h2 className="font-display font-black tracking-tighter uppercase leading-[0.9] text-[var(--hero-name-fill)] opacity-95 text-[clamp(38px,10vw,170px)] select-none">
                SALAUDDIN
              </h2>
            </motion.div>
          </motion.div>

          {/* Layer 2: Centered Profile Photo Cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: photoParallax.x,
              y: photoParallax.y,
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.4 },
              scale: { duration: 0.7, delay: 0.4, ease: "easeOut" },
              x: { type: "spring", stiffness: 100, damping: 18 },
              y: { type: "spring", stiffness: 100, damping: 18 },
            }}
            className="relative z-10 flex items-center justify-center pointer-events-none mt-2 sm:mt-4 md:mt-6"
          >
            {/* Ambient soft glow */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />

            {/* Salauddin's Cutout Portrait */}
            <div className="relative w-[clamp(210px,32vw,420px)] aspect-[3/4] max-h-[56vh] sm:max-h-[60vh] filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)]">
              <Image
                src="/images/salauddin.png"
                alt="MD. Salauddin — Full-Stack Software Engineer"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>

        {/* Layer 3 & 4: Overlay Controls & Content Blocks */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 sm:pb-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pointer-events-auto">
          {/* Layer 3 (Bottom-Left): Role & CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs sm:max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Full Stack Software Engineer
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-[280px]">
              I build scalable APIs and polished interfaces — from database to deployment.
            </p>
            <div className="mt-3">
              <button
                onClick={() => handleScrollTo("work")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] hover:opacity-90 active:scale-95 transition-all shadow-xs group"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Layer 5 (Center Bottom): Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onClick={() => handleScrollTo("about")}
            className="cursor-pointer hidden lg:flex flex-col items-center gap-1.5 group pb-1"
            aria-label="Scroll down"
          >
            <div className="w-5 h-8 rounded-full border border-[var(--text-muted)] group-hover:border-[var(--text-primary)] p-1 flex justify-center transition-colors">
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"
              />
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] uppercase group-hover:text-[var(--text-primary)] transition-colors">
              SCROLL
            </span>
          </motion.div>

          {/* Layer 4 (Bottom-Right): Social Link Buttons Vertical Stack */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
            className="flex flex-wrap md:flex-col items-center md:items-end justify-center gap-2 sm:gap-2.5"
          >
            {/* GitHub */}
            <a
              href="https://github.com/salauddin85"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-[13px] font-medium text-[var(--text-secondary)] shadow-xs hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:scale-105 active:scale-95 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              <span>GitHub</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ahmedsalauddin677785@gmail.com"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-[13px] font-medium text-[var(--text-secondary)] shadow-xs hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:scale-105 active:scale-95 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              <span>Email</span>
            </a>

            {/* Phone */}
            <div
              onMouseEnter={() => setPhoneHovered(true)}
              onMouseLeave={() => setPhoneHovered(false)}
              className="relative"
            >
              <a
                href="tel:+8801902061020"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-[13px] font-medium text-[var(--text-secondary)] shadow-xs hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{phoneHovered ? "+8801902061020" : "Phone"}</span>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-[13px] font-medium text-[var(--text-secondary)] shadow-xs hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] transition-all cursor-default">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats Bar (Matches Screenshot 1 directly below hero) */}
      <div className="w-full border-y border-[var(--border-default)] bg-[var(--bg-surface)] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-display">
                  {stat.value}
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-mono font-medium text-[var(--text-muted)] tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
