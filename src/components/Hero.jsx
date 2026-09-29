"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
  { value: "100+", label: "FULL-STACK FEATURES" },
  { value: "5000+", label: "ACTIVE USERS SERVED" },
  { value: "30%", label: "API OPTIMIZATION" },
];

/**
 * Animated counter that smoothly increments numbers from 0 to target on scroll into view
 */
function AnimatedCounter({ value, duration = 1.8 }) {
  const numericMatch = value.match(/(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.includes("+") ? "+" : value.includes("%") ? "%" : "";

  const [displayCount, setDisplayCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const durationMs = duration * 1000;

    const animateNumber = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Smooth custom ease-out curve (fast initial climb, silky settle)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setDisplayCount(target);
      }
    };

    const frameId = requestAnimationFrame(animateNumber);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <span ref={counterRef}>
      {displayCount}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.innerWidth < 768,
      );
    }

    const handleMouseMove = (e) => {
      if (isTouchDevice) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 25);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Fallback safety timer in case tab is in background or animation callback is delayed
    const fallbackTimer = setTimeout(() => {
      setNameComplete(true);
    }, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, [isTouchDevice]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const photoParallax = isTouchDevice
    ? { x: 0, y: 0 }
    : { x: mousePos.x * 5, y: mousePos.y * 5 };

  const isColor = imageHovered || hasScrolled;

  return (
    <div className="relative w-full flex flex-col justify-between">
      <section
        id="hero"
        ref={containerRef}
        className="relative w-full min-h-[100dvh] md:h-[100dvh] md:max-h-[100dvh] md:overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 pb-3 sm:pb-6 lg:pb-7 bg-[var(--bg-deep)] select-none"
      >
        {/* Layer 1: Outlined "MD." & Solid "SALAUDDIN" */}
        <div className="relative md:absolute md:inset-0 flex flex-col items-center justify-center pointer-events-none z-0 px-4 pt-5 sm:pt-4 md:pt-0 md:-translate-y-16 lg:-translate-y-24">
          {/* "Hi, I'm" greeting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-[var(--text-muted)] uppercase mb-1 sm:mb-2"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Line 1 (Outlined): "MD." */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full text-center"
          >
            <h1 className="hero-stroke-text font-display font-black tracking-widest uppercase leading-[0.88] text-[clamp(34px,9vw,135px)] select-none">
              MD.
            </h1>
          </motion.div>

          {/* Line 2 (Solid): "SALAUDDIN" */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            onAnimationComplete={() => {
              setNameComplete(true);
            }}
            className="w-full text-center mt-2 sm:mt-2.5 md:mt-3"
          >
            <h2 className="font-display font-black tracking-tight sm:tracking-normal uppercase leading-[0.88] text-[var(--hero-name-fill)] opacity-95 text-[clamp(26px,7.2vw,132px)] select-none">
              SALAUDDIN
            </h2>
          </motion.div>
        </div>

        {/* 
          Layer 2: Profile Photo - Positioned cleanly on mobile without covering text, layered on desktop
        */}
        <div className="relative md:absolute md:inset-0 flex items-center md:items-end justify-center pointer-events-none z-10 overflow-hidden -mt-2 sm:my-4 md:my-0 mb-1 sm:mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: photoParallax.x,
              y: photoParallax.y,
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              x: { type: "spring", stiffness: 100, damping: 18 },
              y: { type: "spring", stiffness: 100, damping: 18 },
            }}
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
            className="relative pointer-events-auto cursor-pointer"
          >
            <div
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 70%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
              className={`relative w-[clamp(180px,52vw,270px)] sm:w-[clamp(240px,50vw,340px)] md:w-[clamp(300px,40vw,560px)] h-[200px] sm:h-[280px] md:h-[66vh] filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)] transition-all duration-700 ease-in-out ${
                isColor ? "grayscale-0 contrast-100" : "grayscale contrast-110"
              }`}
            >
              <Image
                src="/images/salauddin1.png"
                alt="MD. Salauddin — Full-Stack Software Engineer"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 380px, 500px"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>

        {/* Spacer for top flex on desktop */}
        <div className="hidden md:block w-full pointer-events-none" />

        {/* 
          Layer 3 & 4: Controls & Content Blocks
          On mobile: Flows below the photo with zero overlap
          On desktop: Positioned at bottom corners
        */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 sm:pb-6 md:pb-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-3 sm:gap-4 md:gap-6 pointer-events-auto">
          {/* Role, Subtitle & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={
                nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.65,
                delay: 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]"
            >
              Full Stack Software Engineer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={
                nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-sm font-normal"
            >
              I build websites and scalable systems that are simple, reliable,
              and fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2.5 sm:mt-4"
            >
              <button
                onClick={() => handleScrollTo("work")}
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Contact Pills: Responsive 2x2 grid on mobile, vertical stack on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full max-w-[285px] sm:max-w-sm md:flex md:flex-col md:w-auto items-center md:items-end justify-center"
          >
            {/* GitHub */}
            <a
              href="https://github.com/salauddin85"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-[11.5px] sm:text-sm font-medium text-[var(--text-primary)] shadow-xs hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all w-full md:w-auto md:min-w-[125px] cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>GitHub</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ahmedsalauddin677785@gmail.com"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-[11.5px] sm:text-sm font-medium text-[var(--text-primary)] shadow-xs hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all w-full md:w-auto md:min-w-[125px] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Email</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801902061020"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-[11.5px] sm:text-sm font-medium text-[var(--text-primary)] shadow-xs hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all w-full md:w-auto md:min-w-[125px] cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Phone</span>
            </a>

            {/* Location */}
            <button
              type="button"
              onClick={() => handleScrollTo("next-steps")}
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-[11.5px] sm:text-sm font-medium text-[var(--text-primary)] shadow-xs hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all w-full md:w-auto md:min-w-[125px] cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Location</span>
            </button>
          </motion.div>
        </div>

        {/* 
          Subtle, Minimal Scroll Indicator:
          Fades in once name is settled.
        */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          onClick={() => handleScrollTo("about")}
          className="absolute bottom-3 sm:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-30 cursor-pointer hidden lg:flex flex-col items-center gap-1 group select-none"
          aria-label="Scroll down to About section"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-14 h-[1px] bg-neutral-400/40 dark:bg-neutral-600/40 transition-colors group-hover:bg-neutral-600 dark:group-hover:bg-neutral-300"></span>
            <div className="w-3.5 h-6 rounded-full border border-neutral-700/60 dark:border-neutral-300/60 p-0.5 flex justify-center transition-colors group-hover:border-black dark:group-hover:border-white">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="w-0.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-200"
              />
            </div>
            <span className="w-10 sm:w-14 h-[1px] bg-neutral-400/40 dark:bg-neutral-600/40 transition-colors group-hover:bg-neutral-600 dark:group-hover:bg-neutral-300"></span>
          </div>
          <span className="text-[8.5px] font-mono font-bold tracking-[0.32em] text-neutral-500/80 dark:text-neutral-100/80 uppercase transition-colors text-neutral-900 dark:group-hover:text-neutral-100 pl-1">
            SCROLL
          </span>
        </motion.div>
      </section>

      {/* Stats Bar with Entrance Animation & Counting Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full border-y border-[var(--border-default)] bg-[var(--bg-surface)] py-8 sm:py-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] font-display">
                  <AnimatedCounter
                    value={stat.value}
                    duration={1.8 + i * 0.2}
                  />
                </span>
                <span className="mt-1 text-[10px] sm:text-xs font-mono font-medium text-[var(--text-muted)] tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
