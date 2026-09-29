"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ArrowUpRight, 
  X, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  ClipboardList 
} from "lucide-react";

// Services Data tailored to MD. Salauddin's real skills & screenshots
// Replace image URLs with your local assets anytime
const SERVICES = [
  {
    id: "web-dev",
    title: "WEB DEVELOPMENT",
    desc: "Websites and web apps that look good, load fast, and are easy to maintain.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "custom-systems",
    title: "CUSTOM SYSTEMS",
    desc: "Billing, inventory, CRM, and office tools built around how you work.",
    tags: ["Full-Stack", "Enterprise ERP", "Zustand", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "database-design",
    title: "DATABASE DESIGN",
    desc: "Clean database setup with MySQL, PostgreSQL, Firebase, or the stack you prefer.",
    tags: ["PostgreSQL", "pgvector", "Redis", "Schema Design"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "api-integration",
    title: "API INTEGRATION",
    desc: "Connect third-party tools, payment gateways, and custom RESTful endpoints.",
    tags: ["Django REST", "Webhooks", "SSLCommerz", "JWT Security"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "mobile-dev",
    title: "MOBILE DEVELOPMENT",
    desc: "One codebase, both iOS and Android, built with Flutter or React Native.",
    tags: ["React Native", "Flutter", "Cross-Platform", "PWA"],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "maintenance",
    title: "MAINTENANCE & SUPPORT",
    desc: "Updates, fixes, and support to keep your system safe and running smoothly.",
    tags: ["Docker VPS", "CI/CD", "Performance Tuning", "SLA Support"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80"
  }
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Planning & Architecture",
    desc: "We discuss requirements, define the database schema, API contracts, and technology roadmap first.",
    icon: ClipboardList
  },
  {
    num: "02",
    title: "Development & Coding",
    desc: "I build the backend and interface with clean modular code, submitting regular staging demos.",
    icon: Cpu
  },
  {
    num: "03",
    title: "Testing & Deployment",
    desc: "Rigorous API testing, Docker containerization, and zero-downtime CI/CD deployment to production VPS.",
    icon: Rocket
  },
  {
    num: "04",
    title: "Optimization & Support",
    desc: "Post-deployment monitoring with Grafana, database query tuning, and feature iterations.",
    icon: ShieldCheck
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  // Persistent clicked/open items (Max 2 items)
  const [persistentIds, setPersistentIds] = useState(["web-dev"]);
  // Transient hovered item (only activates if persistentIds.length < 2)
  const [hoveredId, setHoveredId] = useState(null);
  // Guard flag to prevent immediate hover-reopen when Close button is clicked
  const [recentlyClosedId, setRecentlyClosedId] = useState(null);

  // Scroll-linked continuous leftward movement matching Awards & About Me
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  // STRICT MAXIMUM 2 ITEMS LOGIC
  // If persistentIds has 2 items -> ONLY those 2 items are active (hovering a 3rd will NOT open it).
  // If persistentIds has 1 item -> Persistent item is active + 1 hovered item can be active (total 2).
  // If persistentIds has 0 items -> 1 hovered item can be active.
  const isItemActive = useCallback(
    (id) => {
      if (persistentIds.includes(id)) return true;
      if (
        hoveredId === id &&
        id !== recentlyClosedId &&
        persistentIds.length < 2
      ) {
        return true;
      }
      return false;
    },
    [persistentIds, hoveredId, recentlyClosedId]
  );

  // Hover handlers
  const handleMouseEnter = (id) => {
    if (recentlyClosedId === id) return;
    // Strictly enforce maximum 2: if already 2 persistent items, hover does not open a 3rd
    if (persistentIds.length >= 2) return;
    if (!persistentIds.includes(id)) {
      setHoveredId(id);
    }
  };

  const handleMouseLeave = (id) => {
    if (recentlyClosedId === id) {
      setRecentlyClosedId(null);
    }
    if (hoveredId === id) {
      setHoveredId(null);
    }
  };

  // Click on item to toggle/persist
  const handleClickItem = (id) => {
    setRecentlyClosedId(null);
    setHoveredId(null);

    setPersistentIds((prev) => {
      // If already persistent, do nothing
      if (prev.includes(id)) return prev;

      // Strictly enforce maximum 2: if 2 already exist, replace oldest with new one
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  // Immediate Close handler
  const handleClose = (id, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // Block immediate hover reopen while cursor sits on this item
    setRecentlyClosedId(id);
    setHoveredId((curr) => (curr === id ? null : curr));
    setPersistentIds((prev) => prev.filter((item) => item !== id));
  };

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Section Title — Centered horizontally only */}
      <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
        >
          SERVICES
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
            <span className="font-extrabold opacity-90">WHAT I OFFER</span>
          </div>
          <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Everything you need to launch: planning, design, development, and support.
          </h2>
        </motion.div>

        {/* 
          Interactive Services List:
          - Strictly enforces maximum 2 active items at all times.
          - Hover shows temporary preview (up to 2 total).
          - Click makes item persistent.
          - Close button immediately closes that item without needing cursor to move away.
        */}
        <div 
          onMouseLeave={() => {
            setHoveredId(null);
            setRecentlyClosedId(null);
          }}
          className="flex flex-col"
        >
          {SERVICES.map((service) => {
            const isActive = isItemActive(service.id);

            return (
              <div 
                key={service.id} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={() => handleMouseLeave(service.id)}
              >
                <AnimatePresence initial={false}>
                  {isActive ? (
                    /* Active Expanded Black Card State (Screenshot reference) */
                    <motion.div
                      key={`active-${service.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden py-3"
                    >
                      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0E0E14] text-white p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
                        
                        {/* Left Side: Title & Description */}
                        <div className="max-w-xl pr-4">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                            {service.desc}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right Side: Mockup Image (moves in from right & upward) + Close Button */}
                        <div className="flex items-center gap-4 sm:gap-6 self-end md:self-center shrink-0">
                          {/* Service Mockup Card (Appears from right and moves upward into view with -3deg tilt) */}
                          <motion.div
                            initial={{ opacity: 0, x: 50, y: 35, rotate: 2, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, y: 0, rotate: -3, scale: 1 }}
                            exit={{ opacity: 0, x: 30, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-44 sm:w-56 md:w-64 bg-white text-black p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 select-none cursor-default"
                          >
                            <div className="w-full aspect-16/10 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100 relative">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover filter grayscale contrast-105"
                              />
                            </div>
                            <div className="mt-2 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 truncate">
                              {service.title}
                            </div>
                          </motion.div>

                          {/* Close Option Button: Positioned on right, immediately dismisses item */}
                          <button
                            type="button"
                            onClick={(e) => handleClose(service.id, e)}
                            aria-label={`Close ${service.title}`}
                            className="z-30 relative w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0 shadow-md focus:outline-none"
                          >
                            <X className="w-4 h-4 pointer-events-none" />
                          </button>
                        </div>

                      </div>
                    </motion.div>
                  ) : (
                    /* Default Inactive Single-Line State */
                    <motion.div
                      key={`inactive-${service.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleClickItem(service.id)}
                      className="w-full py-6 sm:py-8 border-b border-[var(--border-default)] flex items-center justify-between cursor-pointer group transition-colors duration-200"
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)] group-hover:text-black dark:group-hover:text-white transition-colors">
                        {service.title}
                      </h3>

                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                        <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}
