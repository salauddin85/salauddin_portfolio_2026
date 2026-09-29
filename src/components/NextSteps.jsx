"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageSquare, FileText, Rocket } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Tell me the idea",
    desc: "What you need, who it is for, and when you want it live.",
    badge: "ABOUT 2 MINUTES",
    icon: MessageSquare,
    isHighlighted: false,
  },
  {
    num: "02",
    title: "Get a clear plan",
    desc: "I reply within 24 hours with scope, timeline, and next steps.",
    badge: "WITHIN 24 HOURS",
    icon: FileText,
    isHighlighted: true,
  },
  {
    num: "03",
    title: "I start building",
    desc: "Regular updates until launch, then support after it goes live.",
    badge: "UNTIL LAUNCH",
    icon: Rocket,
    isHighlighted: false,
  },
];

export default function NextSteps() {
  const sectionRef = useRef(null);
  // Default step 2 (index 1) is active as shown in the screenshot reference
  const [activeStep, setActiveStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  return (
    <section
      id="next-steps"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* 
        Subtle Ethereal Cloudscape / Atmospheric Background (Light Theme Only)
        Matches the soft cloudy sky texture seen in the reference screenshot for light mode.
        In dark mode, hidden to strictly use the standard dark background bg-[var(--bg-deep)] consistently.
      */}
      <div className="next-cloudscape-bg absolute inset-0 pointer-events-none select-none overflow-hidden dark:hidden">
        {/* Base soft misty background */}
        <div className="absolute inset-0 bg-[#edf0f5]/80" />

        {/* Volumetric soft clouds / ethereal gradient plumes */}
        <div className="absolute -top-[25%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-gradient-to-br from-white/95 via-white/60 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-[15%] -right-[15%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-bl from-white via-neutral-200/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-[20%] left-[25%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-t from-white via-neutral-200/60 to-transparent blur-3xl pointer-events-none" />

        {/* Cloudscape texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.55] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(at 25% 25%, rgba(255,255,255,0.95) 0px, transparent 50%),
                              radial-gradient(at 80% 30%, rgba(215,225,235,0.85) 0px, transparent 55%),
                              radial-gradient(at 50% 70%, rgba(255,255,255,0.9) 0px, transparent 60%),
                              radial-gradient(at 15% 85%, rgba(220,230,240,0.7) 0px, transparent 50%),
                              radial-gradient(at 85% 85%, rgba(210,220,230,0.65) 0px, transparent 50%)`,
          }}
        />
      </div>

      {/* Background Section Title — Positioned cleanly at section top, aligned toward the left matching reference screenshot */}
      <div className="absolute top-6 sm:top-8 left-0 w-full pointer-events-none select-none z-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-start">
          <motion.div
            style={{ x: smoothWatermarkX }}
            className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-left"
          >
            NEXT
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Scroll-linked continuous leftward movement */}
        <motion.div
          style={{ x: smoothHeaderX }}
          className="flex flex-col items-start mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-normal text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
            <span>WHAT HAPPENS NEXT</span>
          </div>
          <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Websites, mobile apps, and custom systems. Three steps from first message to live product.
          </h2>
        </motion.div>

        {/* 3 Step Cards Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 cursor-pointer select-none min-h-[300px] ${
                  isActive
                    ? "bg-[#141416] text-white border border-neutral-800 dark:bg-[#18181b] dark:border-neutral-700 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.35)] dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)] -translate-y-1.5"
                    : "bg-white dark:bg-[#18181b] border border-neutral-200/80 dark:border-neutral-800/80 text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                <div>
                  {/* Top Row: Icon on Left, Hollow Number on Right */}
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-white text-black shadow-sm"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Hollow Stylized Number */}
                    <span
                      className={`text-4xl sm:text-5xl font-black font-display select-none transition-colors duration-300 ${
                        isActive
                          ? "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.45)]"
                          : "text-transparent [-webkit-text-stroke:1.5px_#18181b] dark:[-webkit-text-stroke:1.5px_#f5f5f5]"
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-neutral-900 dark:text-neutral-100"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-white/70" : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Badge/Pill */}
                <div className="mt-8 pt-2">
                  {idx === 1 ? (
                    <span
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 border border-white/10 text-white/90"
                          : "border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-black dark:bg-white"} animate-pulse`}></span>
                      <span>{step.badge}</span>
                    </span>
                  ) : (
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 border border-white/10 text-white/80"
                          : "border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {step.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
