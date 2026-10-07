"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ExternalLink,
  X,
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// Placeholder IT Certificates (Auto-scrolls Right to Left)
// You can replace image URLs with local paths like "/images/certificates/my-cert.png"
const IT_CERTIFICATES = [
  {
    id: "it-1",
    title: "Backend Web Development (Django & DRF)",
    issuer: "Phitron",
    category: "Technical Cert",
    image: "/images/certificates/phitron_certificate.jpeg",
    credentialUrl: "https://drive.google.com",
  },
  {
    id: "it-2",
    title: "DevOps & Cloud (AWS , Docker, CI/CD, Nginx)",
    issuer: "Ostad",
    category: "Technical Cert II",
    image: "/images/certificates/ostad_certificate.jpeg",
    credentialUrl: "https://drive.google.com",
  },
  {
    id: "it-3",
    title: "Git for Freshers",
    issuer: "Omar Faruk",
    category: "Technical Certification",
    image: "/images/certificates/git_for_fresher.jpeg",
    credentialUrl: "https://drive.google.com",
  },
  {
    id: "AC89E6F98FF0",
    title: "Python (Basic)",
    issuer: "HackerRank",
    category: "Technical Certification",
    image: "/images/certificates/python_certificate.png",
    credentialUrl: "https://drive.google.com",
  },
  // {
  //   id: "it-5",
  //   title: "Relational Database Design & PostgreSQL",
  //   issuer: "Phitron",
  //   category: "Technical Cert V",
  //   image:
  //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
  //   credentialUrl: "https://drive.google.com",
  // },
  {
    id: "it-6",
    title: "Next.js 15 & React Frontend Engineering",
    issuer: "Vercel Ecosystem Training",
    category: "Technical Cert VI",
    image: "/images/certificates/react_nextjs_certificate.png",
    credentialUrl: "https://drive.google.com",
  },
];

// Placeholder Non-IT Certificates (Auto-scrolls Left to Right)
const NON_IT_CERTIFICATES = [
  {
    id: "non-it-1",
    title: "COMMUNICATION SECRETS",
    issuer: "10 Minute School",
    category: "Professional Development",
    image: "/images/certificates/communication_certificate.png",
    credentialUrl: "https://drive.google.com",
  },
  {
    id: "non-it-2",
    title: "LEADERSHIP EXCELLENCE",
    issuer: "10 Minute School",
    category: "Professional Development",
    image:
      "/images/certificates/leadership_certificate.jpeg",
    credentialUrl: "https://drive.google.com",
  },
  // {
  //   id: "non-it-3",
  //   title: "Career Pathing & Leadership Cert",
  //   issuer: "Youth Development Center",
  //   category: "Career Guidance",
  //   image:
  //     "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=700&q=80",
  //   credentialUrl: "https://drive.google.com",
  // },
  {
    id: "non-it-4",
    title: "Professional Spoken English Training",
    issuer: "3-Month Intensive Program",
    category: "Communication",
    image: "/images/certificates/spoken_certificate.jpeg",
    credentialUrl: "https://drive.google.com",
  },
  {
    id: "non-it-5",
    title: "Academic Honors Recognition (CGPA 3.51)",
    issuer: "Brahmanbaria Govt. Polytechnic",
    category: "Academic Distinction",
    image: "/images/certificates/diploma_certificate.jpeg",
    credentialUrl: "https://drive.google.com",
  },
];

export default function Credentials() {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Directly link animation to visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Physical spring physics for buttery-smooth responsive scroll
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  // Scroll-linked continuous leftward movement calibrated to keep full word visible
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  // Duplicate arrays for 100% seamless infinite marquee
  const itMarquee = [
    ...IT_CERTIFICATES,
    ...IT_CERTIFICATES,
    ...IT_CERTIFICATES,
  ];
  const nonItMarquee = [
    ...NON_IT_CERTIFICATES,
    ...NON_IT_CERTIFICATES,
    ...NON_IT_CERTIFICATES,
  ];

  return (
    <section
      id="credentials"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Section Title — Centered horizontally only */}
      <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center pointer-events-none select-none z-0 px-4 sm:px-8">
        <motion.div
          style={{ x: smoothWatermarkX }}
          className="font-display font-black uppercase tracking-tight whitespace-nowrap text-[clamp(26px,6vw,90px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] select-none text-center"
        >
          CREDENTIALS
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Scroll-linked continuous leftward movement matching Screenshot 1 */}
        <motion.div
          style={{ x: smoothHeaderX }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-normal text-[var(--text-muted)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
              <span className="font-extrabold opacity-90">CREDENTIALS</span>
            </div>
            <h2 className="text-base sm:text-lg font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Gallery of certifications in IT and non-IT fields.
            </h2>
          </div>

          {/* Action button matching Screenshot 1 */}
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>View all credentials on Google Drive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* 
          2. Auto-Scroll Rows (Continuous Marquees with smooth pause-on-hover)
        */}
        <div className="space-y-10 sm:space-y-12">
          {/* Row 1: IT Field Certificates (Auto-scrolls Right to Left) */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-medium text-[var(--text-muted)] mb-4 px-1">
              <span>IT FIELD · {IT_CERTIFICATES.length} CERTIFICATES</span>
            </div>

            <div className="relative w-full overflow-hidden py-2 select-none group/row1">
              {/* Edge gradient fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 36,
                }}
                className="flex gap-5 sm:gap-6 w-max group-hover/row1:[animation-play-state:paused]"
              >
                {itMarquee.map((cert, index) => (
                  <div
                    key={`${cert.id}-${index}`}
                    onClick={() => setSelectedCert(cert)}
                    className="w-[240px] sm:w-[280px] p-3 sm:p-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between shrink-0 group/card"
                  >
                    {/* Certificate Preview Frame */}
                    <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/70 border border-[var(--border-default)]/60 mb-3 flex items-center justify-center p-1.5">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-contain filter grayscale group-hover/card:grayscale-0 transition-all duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    </div>

                    {/* Certificate Name & Details */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover/card:text-black dark:group-hover/card:text-white transition-colors line-clamp-1">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider truncate mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Row 2: Non-IT Field Certificates (Auto-scrolls Left to Right) */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-medium text-[var(--text-muted)] mb-4 px-1">
              <span>
                NON-IT FIELD · {NON_IT_CERTIFICATES.length} CERTIFICATES
              </span>
            </div>

            <div className="relative w-full overflow-hidden py-2 select-none group/row2">
              {/* Edge gradient fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 36,
                }}
                className="flex gap-5 sm:gap-6 w-max group-hover/row2:[animation-play-state:paused]"
              >
                {nonItMarquee.map((cert, index) => (
                  <div
                    key={`${cert.id}-${index}`}
                    onClick={() => setSelectedCert(cert)}
                    className="w-[240px] sm:w-[280px] p-3 sm:p-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between shrink-0 group/card"
                  >
                    {/* Certificate Preview Frame */}
                    <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/70 border border-[var(--border-default)]/60 mb-3 flex items-center justify-center p-1.5">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-contain filter grayscale group-hover/card:grayscale-0 transition-all duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    </div>

                    {/* Certificate Name & Details */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover/card:text-black dark:group-hover/card:text-white transition-colors line-clamp-1">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider truncate mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal View when a certificate is clicked */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-3xl shadow-2xl overflow-hidden my-auto p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[var(--border-default)]">
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold">
                    {selectedCert.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-0.5">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono uppercase mt-0.5">
                    {selectedCert.issuer}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-primary)] hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Large Certificate Preview */}
              <div className="rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/80 border border-[var(--border-default)] p-3 flex items-center justify-center mb-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-full text-xs font-medium border border-[var(--border-default)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-xs cursor-pointer"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
