"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Time Opportunity",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous clean delivery
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]">
      {/* Background Watermark Title */}
      <div className="section-watermark text-[clamp(60px,14vw,220px)]">
        CONTACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] max-w-xl">
            Let&apos;s build something exceptional together.
          </h2>
        </div>

        {/* Two-Column Contact Layout (Screenshot 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Dark Info Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-[#0F0F15] text-white border border-white/10 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for new opportunities</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1">
                    EMAIL
                  </div>
                  <a
                    href="mailto:ahmedsalauddin677785@gmail.com"
                    className="text-sm sm:text-base font-medium text-white hover:text-indigo-400 transition-colors"
                  >
                    ahmedsalauddin677785@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1">
                    PHONE & WHATSAPP
                  </div>
                  <a
                    href="tel:+8801902061020"
                    className="text-sm sm:text-base font-medium text-white hover:text-indigo-400 transition-colors"
                  >
                    +880 1902 061020
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1">
                    GITHUB
                  </div>
                  <a
                    href="https://github.com/salauddin85"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium text-white hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>github.com/salauddin85</span>
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1">
                    LOCATION
                  </div>
                  <div className="text-sm sm:text-base font-medium text-white">
                    Dhaka, Bangladesh 🇧🇩
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 text-xs font-mono text-white/60">
              Response time: Typically within 24 hours
            </div>
          </div>

          {/* Right Form Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-sm">
                  Thank you for reaching out. I have received your message and will reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 rounded-full text-xs font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    PROJECT TYPE / PURPOSE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] transition-all"
                  >
                    <option value="Full-Time Opportunity">Full-Time Software Engineer Opportunity</option>
                    <option value="Freelance Contract">Freelance / Contract Project</option>
                    <option value="Backend Architecture">Django & REST API Development</option>
                    <option value="AI / RAG Integration">AI & Vector Search Integration</option>
                    <option value="General Inquiry">General Inquiries & Coffee Chat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] hover:opacity-90 active:scale-95 transition-all shadow-md"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
