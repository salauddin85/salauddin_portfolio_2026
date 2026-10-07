"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUICK_PROMPTS = [
  "What is his tech stack?",
  "Has he built AI applications?",
  "Does he know Docker & CI/CD?",
  "Is he available to hire?",
  "What databases does he use?"
];

// Pre-grounded contextual response engine based on SRS 4.9.4 & Resume data
const KNOWLEDGE_BASE = [
  {
    keywords: ["docker", "container", "ci/cd", "devops", "deployment"],
    answer: "Yes — Salauddin uses Docker extensively. At PEPOLTEK, he containerized multi-service architectures and automated CI/CD deployment pipelines, cutting release cycles from 4 hours down to 30 minutes, and saving ~20% in infrastructure costs."
  },
  {
    keywords: ["ai", "llm", "rag", "vector", "pgvector", "embeddings", "openai"],
    answer: "Yes — Salauddin has hands-on production AI experience. In TALENTek, he built an LLM and pgvector parser cutting CV screening time by ~65%, developed a chunked RAG chatbot for automated HR policy retrieval, and integrated OpenAI API agents."
  },
  {
    keywords: ["stack", "skills", "technologies", "tech"],
    answer: "Salauddin specializes in:\n• Backend: Python, Django, Django REST Framework, JWT, Celery, Redis\n• Frontend: Next.js, React, TypeScript, Zustand, Tailwind CSS\n• Databases: PostgreSQL, MySQL, SQLite, Redis, pgvector\n• DevOps: Docker, AWS, Nginx, CI/CD, Linux VPS, Grafana"
  },
  {
    keywords: ["hire", "available", "opportunity", "status", "job", "freelance"],
    answer: "Yes — Salauddin is currently available for full-time Software Engineer positions, distributed engineering teams, and selective freelance contracts. You can contact him directly at ahmedsalauddin677785@gmail.com or via the contact form."
  },
  {
    keywords: ["database", "sql", "postgres", "redis", "mysql"],
    answer: "Salauddin works with PostgreSQL (primary production database), MySQL, SQLite, Redis (for high-speed caching and background queueing), and pgvector (for vector embeddings and AI semantic search)."
  },
  {
    keywords: ["experience", "years", "pepoltek", "work"],
    answer: "Salauddin has  2+ years of professional software engineering experience at PEPOLTEK LTD (Dec 2024 – Sep 2026), delivering enterprise platforms including AI-HRM TalenTEK, Multi-Vendor E-Commerce, and Club Management Systems."
  },
  {
    keywords: ["salary", "rate", "compensation"],
    answer: "Please reach out directly via the contact form or email (ahmedsalauddin677785@gmail.com) to discuss compensation — Salauddin is open to discussing based on role scope, impact, and organization requirements."
  },
  {
    keywords: ["education", "degree", "university", "college"],
    answer: "Salauddin is currently enrolled in a B.Sc. in Computer Science & Engineering at Northern University Bangladesh (2026–2029). He previously earned his Diploma in Computer Science & Technology from Brahmanbaria Polytechnic with a 3.51/4.00 CGPA."
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm MD. Salauddin's portfolio assistant. Ask me anything about his technical stack, production experience at PEPOLTEK, projects, or availability."
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (userText) => {
    const text = userText || input;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      content: text
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Knowledge matching
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matched = KNOWLEDGE_BASE.find((item) =>
        item.keywords.some((k) => lower.includes(k))
      );

      const responseText = matched
        ? matched.answer
        : "Salauddin is a Full-Stack Software Engineer with 2+ years of experience in Django, Next.js, Docker, and AI/RAG integrations. For specific requirements, feel free to drop him a line at ahmedsalauddin677785@gmail.com!";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: responseText
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Action Button (FAB) (SRS 4.9.2) - Icon Only */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 rounded-full bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] border border-[var(--border-default)] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all focus:outline-none cursor-pointer group"
          aria-label="Open portfolio assistant"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <MessageSquare className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Chat Panel Modal (SRS 4.9.2) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[520px] max-h-[80vh] rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-[var(--border-default)] bg-[var(--bg-elevated)]/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">
                    Portfolio Assistant
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>MD. Salauddin Context Grounded</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2 ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[82%] whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] rounded-br-xs font-medium"
                        : "bg-[var(--bg-deep)] text-[var(--text-primary)] border border-[var(--border-default)] rounded-bl-xs"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-[11px] font-mono pl-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span>Synthesizing answer...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 border-t border-[var(--border-default)] bg-[var(--bg-deep)]/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] whitespace-nowrap transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about skills, projects, notice period..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-deep)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-8 h-8 rounded-xl bg-[var(--btn-pill-bg)] text-[var(--btn-pill-text)] flex items-center justify-center disabled:opacity-40 transition-opacity"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
