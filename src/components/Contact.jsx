"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle2 } from "lucide-react";

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

const PROJECT_TYPES = [
  "Website",
  "Web Application",
  "Mobile App",
  "Custom System",
  "API / Integration",
  "Maintenance & Support",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[var(--bg-deep)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Contact Layout matching the reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Dark Card (DIRECT CONTACT / REACH OUT) */}
          <div className="lg:col-span-5 rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 lg:p-10 bg-[#141416] text-white border border-neutral-800 shadow-xl flex flex-col justify-between">
            <div>
              {/* Tag */}
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                DIRECT CONTACT
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white mb-3">
                REACH OUT
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8 max-w-sm">
                Prefer email or call? Use the details below. I typically reply within 24 hours.
              </p>

              {/* 4 Contact Pill Containers */}
              <div className="space-y-3.5">
                {/* 1. Email */}
                <a
                  href="mailto:ahmedsalauddin677785@gmail.com"
                  className="group rounded-2xl bg-[#1c1c20]/90 border border-neutral-800/90 p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-neutral-700 hover:bg-[#222228] transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white shrink-0 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                      EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      ahmedsalauddin677785@gmail.com
                    </span>
                  </div>
                </a>

                {/* 2. Phone */}
                <a
                  href="tel:+8801902061020"
                  className="group rounded-2xl bg-[#1c1c20]/90 border border-neutral-800/90 p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-neutral-700 hover:bg-[#222228] transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white shrink-0 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                      PHONE
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      +880 1902 061020
                    </span>
                  </div>
                </a>

                {/* 3. GitHub */}
                <a
                  href="https://github.com/salauddin85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-[#1c1c20]/90 border border-neutral-800/90 p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-neutral-700 hover:bg-[#222228] transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white shrink-0 transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                      GITHUB
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      github.com/salauddin85
                    </span>
                  </div>
                </a>

                {/* 4. Location */}
                <div className="rounded-2xl bg-[#1c1c20]/90 border border-neutral-800/90 p-3.5 sm:p-4 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                      LOCATION
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right White Card (GET IN TOUCH / LET'S BUILD SOMETHING) */}
          <div className="lg:col-span-7 rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 lg:p-10 bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between text-neutral-900">
            <div>
              {/* Tag */}
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                GET IN TOUCH
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-neutral-900 mb-6">
                LET&apos;S BUILD SOMETHING
              </h2>

              {submitted ? (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 max-w-sm">
                    Thank you for reaching out. I typically reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", projectType: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#141416] text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-900 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-neutral-200/90 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-white focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-neutral-200/90 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-white focus:outline-none focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-semibold text-neutral-900 mb-2">
                      Project type
                    </label>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full rounded-2xl border border-neutral-200/90 px-4 py-3 text-sm flex items-center justify-between text-left bg-white transition-colors cursor-pointer focus:outline-none focus:border-neutral-400"
                    >
                      <span className={formData.projectType ? "text-neutral-900 font-medium" : "text-neutral-400"}>
                        {formData.projectType || "Select..."}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu matching Screenshot 2 */}
                    {dropdownOpen && (
                      <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-neutral-200/90 bg-white shadow-xl p-2 z-30 space-y-0.5">
                        {PROJECT_TYPES.map((type) => (
                          <div
                            key={type}
                            onClick={() => {
                              setFormData({ ...formData, projectType: type });
                              setDropdownOpen(false);
                            }}
                            className={`px-3.5 py-2.5 rounded-xl text-sm cursor-pointer transition-colors ${
                              formData.projectType === type
                                ? "bg-neutral-100 font-medium text-neutral-900"
                                : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                            }`}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-900 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full rounded-2xl border border-neutral-200/90 p-4 text-sm text-neutral-900 placeholder:text-neutral-400 bg-white focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button with Send icon matching Screenshot */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#141416] text-white text-sm font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-60"
                    >
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                      <Send className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
