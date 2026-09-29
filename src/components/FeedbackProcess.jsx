"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Authentic Bangladeshi clients & local organizations matching MD. Salauddin's real full-stack work
const FEEDBACK = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    initials: "TA",
    role: "Client",
    quote: "Salauddin built a system that our staff actually enjoys using. Clear screens, fast loading, and he explained everything in simple terms."
  },
  {
    id: 2,
    name: "Farhan Kabir",
    initials: "FK",
    role: "Business owner",
    quote: "He delivered on time and stayed easy to reach. When we asked for changes, he applied them quickly without extra fuss."
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    initials: "NJ",
    role: "Organization",
    quote: "Our office work is much smoother now. The system matches how we already work, so the team needed almost no training."
  },
  {
    id: 4,
    name: "Mahmudur Rahman",
    initials: "MR",
    role: "Client",
    quote: "From first meeting to launch, the process was clear. The website looks clean and works well on phones."
  },
  {
    id: 5,
    name: "Kazi Shamsul Alam",
    initials: "KS",
    role: "Business owner",
    quote: "He understood what we needed and built it without overcomplicating things. Support after launch has been reliable."
  },
  {
    id: 6,
    name: "Shahidul Islam",
    initials: "SI",
    role: "Client",
    quote: "Professional, patient, and honest about timelines. The custom system saved us hours of manual work every week."
  },
  {
    id: 7,
    name: "Nayeem Chowdhury",
    initials: "NC",
    role: "Client",
    quote: "Easy to work with from start to finish. He kept us updated and the final result was exactly what we asked for."
  }
];

export default function FeedbackProcess() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Directly link animation to visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  const totalSteps = 5; // 5 steps across 7 items showing 3 items at a time

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
  };

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // 3 visible items per slide step
  const visibleItems = [
    FEEDBACK[currentIndex],
    FEEDBACK[currentIndex + 1],
    FEEDBACK[currentIndex + 2]
  ];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section 
      id="feedback" 
      ref={sectionRef} 
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Section Title — Centered horizontally only, matching Experience */}
      <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
        >
          FEEDBACK
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
            <span className="font-extrabold opacity-90">KIND WORDS</span>
          </div>
          <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            What clients say about working with me.
          </h2>
        </motion.div>

        {/* Carousel Container with Left/Right Navigation Buttons */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 pointer-events-none" />
          </button>

          {/* Right Navigation Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 pointer-events-none" />
          </button>

          {/* Cards Carousel View */}
          <div className="overflow-hidden px-1 py-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleItems.map((item) => (
                  <div
                    key={`${currentIndex}-${item.id}`}
                    className="p-7 sm:p-9 rounded-[28px] sm:rounded-[32px] border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#18181b] shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 select-none"
                  >
                    <div>
                      {/* Outline Quotation Icon (matching screenshot) */}
                      <svg 
                        className="w-7 h-7 sm:w-8 sm:h-8 mb-5 text-neutral-300 dark:text-neutral-600 select-none" 
                        viewBox="0 0 32 32" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M10 8C6.686 8 4 10.686 4 14C4 17.314 6.686 20 10 20C10.5 20 10.97 19.93 11.41 19.8C10.74 22.24 8.57 24 6 24H5V26H6C10.418 26 14 22.418 14 18V14C14 10.686 11.314 8 10 8ZM24 8C20.686 8 18 10.686 18 14C18 17.314 20.686 20 24 20C24.5 20 24.97 19.93 25.41 19.8C24.74 22.24 22.57 24 20 24H19V26H20C24.418 26 28 22.418 28 18V14C28 10.686 25.314 8 24 8Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* Quote Text */}
                      <p className="text-xs sm:text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal min-h-[92px]">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Info Row: Initials Avatar + Name & Role */}
                    <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider select-none shrink-0 shadow-xs">
                        {item.initials}
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                          {item.name}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 font-normal mt-1">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators (5 Dots matching the 5 steps in the screenshot) */}
          <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12 select-none">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 h-1.5 rounded-full bg-black dark:bg-white"
                    : "w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
