"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Planning & Design",
    description: "We talk about what you need, then I plan and design the screens first."
  },
  {
    number: "02",
    title: "Development",
    description: "I build your website or app with clean code and send regular updates."
  },
  {
    number: "03",
    title: "Testing & Deployment",
    description: "I test everything, fix issues, and launch when it's ready for your users."
  },
  {
    number: "04",
    title: "Maintenance & Support",
    description: "I keep it running with updates, fixes, new features, and support."
  }
];

export default function Process() {
  const sectionRef = useRef(null);
  // Default step 2 (index 1: "Development") is active matching the reference screenshot
  const [activeStep, setActiveStep] = useState(1);

  // Directly link animation to visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Physical spring physics for buttery-smooth responsive scroll matching About, TechStack, Awards
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  // Scroll-linked continuous leftward movement matching Experience
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Section Title — Centered horizontally only */}
      <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
        >
          PROCESS
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
            <span>HOW I WORK</span>
          </div>
          <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Four structured steps from initial concept to live production.
          </h2>
        </motion.div>

        {/* 4 Process Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 flex flex-col justify-start transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#141416] text-white border border-neutral-800 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] -translate-y-1.5"
                    : "bg-white dark:bg-[#18181b] border border-neutral-200/80 dark:border-neutral-800/80 text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)]"
                }`}
              >
                {/* Large Stylized Hollow Outline Number */}
                <div className="mb-8 sm:mb-10">
                  <span
                    className={`text-5xl sm:text-6xl font-black font-display tracking-tight inline-block transition-all duration-300 select-none ${
                      isActive
                        ? "text-transparent [-webkit-text-stroke:2px_#ffffff]"
                        : "text-transparent [-webkit-text-stroke:2px_#171717] dark:[-webkit-text-stroke:2px_#f5f5f5]"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-3 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-neutral-900 dark:text-neutral-100"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-neutral-300" : "text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
