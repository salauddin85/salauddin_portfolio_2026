"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowUpRight, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", badge: "7", href: "#tech-stack" },
  { name: "Work", badge: "10", href: "#work" },
  { name: "Experience", badge: "2y+", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isAvailable = process.env.NEXT_PUBLIC_AVAILABLE !== "false";

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sectionIds = ["hero", "about", "tech-stack", "work", "experience", "credentials", "services", "contact"];
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${
          scrolled
            ? "glass-nav border-b border-[var(--border-default)] shadow-xs"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & Availability Pill */}
          <div className="flex items-center gap-3">
            <Link
              href="#hero"
              onClick={(e) => scrollTo(e, "#hero")}
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Home"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[var(--border-default)] bg-[var(--bg-surface)] p-0.5 shadow-xs group-hover:border-[var(--border-accent)] transition-all">
                <Image
                  src="/images/logo.png"
                  alt="MD. Salauddin Logo"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full rounded-md"
                  priority
                />
              </div>
            </Link>

            {isAvailable && (
              <div
                className="relative hidden sm:flex items-center"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-secondary)] shadow-xs hover:border-[var(--border-accent)] cursor-default transition-all">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for New Project</span>
                </div>

                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] text-[11px] font-medium border border-[var(--border-default)] shadow-lg whitespace-nowrap z-50"
                    >
                      Open to full-time & freelance
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Center: Nav links with superscript brackets */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-[13.5px] font-medium transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span className="inline-flex items-center gap-0.5">
                    {link.name}
                    {link.badge && (
                      <span className="text-[10px] font-mono text-[var(--text-muted)] -top-1 relative ml-0.5">
                        [{link.badge}]
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[var(--text-primary)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle & "Let's Talk ↗" Pill Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-all focus:outline-none"
              aria-label="Toggle dark/light theme"
              type="button"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 rounded-full text-[13px] font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] hover:opacity-90 active:scale-95 transition-all shadow-xs group"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-accent)] focus:outline-none transition-colors"
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-40 bg-[var(--bg-deep)]/95 backdrop-blur-xl border-b border-[var(--border-default)] flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pt-2">
              {isAvailable && (
                <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] w-fit text-xs font-medium text-[var(--text-secondary)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for New Project</span>
                </div>
              )}

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 + 0.04 }}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold border border-[var(--border-default)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)]/50 hover:text-[var(--text-primary)]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-2 py-0.5 rounded-full border border-[var(--border-default)]">
                          [{link.badge}]
                        </span>
                      )}
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 pb-4 border-t border-[var(--border-default)] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-base font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] shadow-md"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <p className="text-center text-xs text-[var(--text-muted)]">
                Dhaka, Bangladesh · ahmedsalauddin677785@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
