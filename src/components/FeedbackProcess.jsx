"use client";

import React from "react";
import { Quote, Clock, CheckCircle } from "lucide-react";

const FEEDBACK = [
  {
    quote: "Salauddin engineered our DRF backend and automated our deployment cycle down from 4 hours to 30 minutes. His attention to query optimization and API reliability is exceptional.",
    author: "Senior Engineering Lead",
    title: "PEPOLTEK LTD"
  },
  {
    quote: "He built the LLM and pgvector CV screening engine for TalenTEK with incredible precision. Our candidate screening time dropped by over 60%.",
    author: "Product Manager",
    title: "TalenTEK AI-HRM"
  },
  {
    quote: "Working with Salauddin on the multi-vendor e-commerce platform was seamless. Clean REST APIs, atomic checkout integration, and 25% lower database latency.",
    author: "Frontend Collaborator",
    title: "Fintech Platform"
  }
];

export default function FeedbackProcess() {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]">
      {/* Background Watermark Title */}
      <div className="section-watermark text-[clamp(38px,9vw,150px)]">
        FEEDBACK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>RECOMMENDATIONS & FEEDBACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl">
            What collaborators and managers say about working with me.
          </h2>
        </div>

        {/* Feedback Cards (Screenshot 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 sm:mb-32">
          {FEEDBACK.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs flex flex-col justify-between hover:border-[var(--border-accent)] transition-all"
            >
              <div>
                <Quote className="w-6 h-6 text-indigo-400 mb-4 opacity-70" />
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-default)]">
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {item.author}
                </div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What Happens Next Section (Screenshot 6) */}
        <div>
          <div className="flex flex-col items-start mb-10">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>WHAT HAPPENS NEXT</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Three simple steps from your first message to live execution.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-7 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Tell me the idea
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  What you need built, who it is for, and when you want it launched.
                </p>
              </div>
              <div className="mt-8 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                ABOUT 2 MINUTES
              </div>
            </div>

            {/* Step 2 (Highlighted Dark Card as in Screenshot 6) */}
            <div className="p-7 rounded-3xl border border-black bg-[#111115] text-white shadow-lg flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white">
                  Get a clear plan
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                  I reply within 24 hours with technical scope, milestone timeline, and architecture design.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WITHIN 24 HOURS</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  I start building
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Regular staging updates until production launch, followed by ongoing optimization.
                </p>
              </div>
              <div className="mt-8 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                UNTIL LAUNCH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
