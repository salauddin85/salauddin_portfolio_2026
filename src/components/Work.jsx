"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ArrowUpRight, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Eye, 
  Globe, 
  ChevronRight,
  Code2,
  FolderGit2,
  Boxes,
  Zap,
  Check
} from "lucide-react";

// Tech Vector Icons with currentColor support for light/dark & hover inversions
function TechLogo({ name, className = "w-3.5 h-3.5" }) {
  const norm = (name || "").toLowerCase().trim();

  if (norm.includes("python")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V4.5h-4.5V3h3V1.8l-.05-.18-.1-.18-.17-.15-.22-.12-.27-.08-.32-.04H9.75l-.32.04-.27.08-.22.12-.17.15-.1.18-.05.18V4.5H4.13l-.26.04-.3.1-.33.16-.34.25-.34.34-.32.45-.3.59-.26.73-.2.9v4.13l.04.32.08.27.12.22.15.17.18.1.18.05H4.5V9.75h1.5v3H1.8l-.18-.05-.18-.1-.15-.17-.12-.22-.08-.27-.04-.32V7.87l.2-.9.26-.73.3-.59.45-.32.34-.34.34-.25.33-.16.3-.1.26-.04H8.25V.18zM9.75 1.5a.75.75 0 110 1.5.75.75 0 010-1.5zm9.75 8.25v4.5H15v1.5h3v1.2l.05.18.1.18.17.15.22.12.27.08.32.04h4.5l.32-.04.27-.08.22-.12.17-.15.1-.18.05-.18V19.5h4.37l.26-.04.3-.1.33-.16.34-.25.34-.34.32-.45.3-.59.26-.73.2-.9v-4.13l-.04-.32-.08-.27-.12-.22-.15-.17-.18-.1-.18-.05H19.5V14.25h-1.5v-3h4.2l.18.05.18.1.15.17.12.22.08.27.04.32v4.13l-.2.9-.26.73-.3.59-.45.32-.34.34-.34.25-.33.16-.3.1-.26.04H15.75V23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V19.5h4.5V21h-3v1.2l.05.18.1.18.17.15.22.12.27.08.32.04h4.5l.32-.04.27-.08.22-.12.17-.15.1-.18.05-.18V19.5H19.5V9.75h4.25zM14.25 21a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
      </svg>
    );
  }
  if (norm.includes("django")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="m11.146 0h3.336v16.71c-.722.12-1.353.18-1.894.18-2.615 0-3.954-1.127-3.954-3.322 0-2.285 1.488-3.487 3.558-3.487.616 0 1.157.075 1.623.225v-3.773c-.451-.12-.992-.18-1.608-.18-4.044 0-6.974 2.404-6.974 6.883 0 4.569 2.825 6.945 7.154 6.945 1.563 0 2.84-.255 3.908-.736l.24-2.825h-.06c-.632.496-1.518.796-2.585.796-1.924 0-3.051-.931-3.051-2.675v-10.75h.307zm8.39 6.853h3.318v16.967h-3.318zm.135-4.434c0-1.338 1.052-2.419 2.39-2.419 1.337 0 2.389 1.081 2.389 2.419 0 1.353-1.052 2.435-2.389 2.435-1.338 0-2.39-1.082-2.39-2.435zM7.054 6.853v2.886h-2.9v6.524c0 1.743.826 2.509 2.314 2.509.436 0 .842-.045 1.157-.12l.135 2.6c-.6.24-1.428.375-2.344.375-3.096 0-4.584-1.743-4.584-4.885v-7.009h-1.623v-2.886h1.623v-3.52l3.329-1.037v4.557h2.893z"/>
      </svg>
    );
  }
  if (norm.includes("react")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 9.08a2.92 2.92 0 100 5.84 2.92 2.92 0 000-5.84zm0-.98a3.9 3.9 0 110 7.8 3.9 3.9 0 010-7.8zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 1.1c5.23 0 9.63 3.65 10.66 8.54-1.92-1.35-4.66-2.22-7.81-2.36a23.95 23.95 0 00-2.85-5.91c0-.09 0-.18 0-.27zm-1.85.58c.84 1.76 1.83 3.73 2.76 5.65-1.98.15-3.95.5-5.78 1.05 1.12-2.73 2.15-5.02 3.02-6.7zm-4.71 2.51c1.55-.4 3.23-.65 5-.73a25.1 25.1 0 012.75 5.86c-2.48.24-4.9.8-7.1 1.64A10.87 10.87 0 015.44 4.19zM1.1 12c0-.52.05-1.03.13-1.54 1.85 1.34 4.54 2.21 7.64 2.35.79 1.93 1.7 3.84 2.68 5.61-4.99-.44-9.28-3.14-10.45-6.42zm1.64 3.51c1.13 2.66 3.42 4.69 6.27 5.61a25.32 25.32 0 01-2.73-5.72c-1.2.07-2.39.11-3.54.11zm18.52 0c-1.15 0-2.34-.04-3.54-.11a25.32 25.32 0 01-2.73 5.72c2.85-.92 5.14-2.95 6.27-5.61zm1.64-3.51c-1.17 3.28-5.46 5.98-10.45 6.42.98-1.77 1.89-3.68 2.68-5.61 3.1-.14 5.79-1.01 7.64-2.35.08.51.13 1.02.13 1.54z"/>
      </svg>
    );
  }
  if (norm.includes("next")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.665 21.978C16.808 23.255 14.542 24 12.001 24 5.377 24 0 18.624 0 12S5.377 0 12.001 0 24 5.376 24 12c0 3.584-1.574 6.8-4.072 9.003l-10.63-13.7h-2.12v13.395h1.996V9.897l10.491 13.081zm-4.708-8.232l1.996 2.569V7.302h-1.996v6.444z" />
      </svg>
    );
  }
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.297.237-.382.4-.085.164-.127.365-.127.602 0 .305.08.56.24.764.16.205.38.381.658.53.279.15.61.288.995.414.384.126.81.267 1.28.423.47.155.932.343 1.385.565.453.222.843.504 1.17.848.328.344.577.765.748 1.264.17.499.256 1.107.256 1.824 0 .809-.136 1.534-.408 2.175a4.7 4.7 0 0 1-1.132 1.644c-.482.414-1.077.73-1.786.948-.71.218-1.52.327-2.43.327-.72 0-1.396-.06-2.028-.182a8.67 8.67 0 0 1-1.75-.544v-2.613c.582.35 1.196.616 1.84.798.646.182 1.32.273 2.023.273.364 0 .692-.036.985-.109.292-.073.54-.182.744-.327.204-.145.36-.332.468-.56.108-.228.162-.505.162-.832 0-.327-.08-.6-.24-.818a2.53 2.53 0 0 0-.679-.582c-.292-.164-.639-.313-1.04-.448-.403-.135-.852-.284-1.347-.448-.496-.164-.984-.36-1.464-.59a4.84 4.84 0 0 1-1.246-.867 4.14 4.14 0 0 1-.806-1.286c-.19-.508-.285-1.127-.285-1.856 0-.77.135-1.46.405-2.072.27-.612.65-1.134 1.14-1.567.49-.433 1.085-.768 1.785-1.004.7-.236 1.488-.354 2.365-.354zm-8.88 2.277h7.24v2.308h-2.39v10.51H9.865V14.335H7.487z"/>
      </svg>
    );
  }
  if (norm.includes("tailwind")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.637,13.382,8.276,12,6.001,12z"/>
      </svg>
    );
  }
  if (norm.includes("postgres") || norm.includes("pgvector")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.969 0C5.357 0 0 5.357 0 11.969c0 6.611 5.357 11.969 11.969 11.969 6.611 0 11.969-5.358 11.969-11.969C23.938 5.357 18.58 0 11.969 0zm5.289 17.513c-.11.233-.25.437-.424.614-.173.176-.388.312-.644.407-.257.096-.554.144-.891.144-.555 0-1.026-.134-1.414-.403a3.02 3.02 0 0 1-.951-1.077 5.15 5.15 0 0 1-.453-1.516c-.092-.56-.138-1.127-.138-1.701 0-.616.056-1.205.168-1.767a4.67 4.67 0 0 1 .536-1.53c.245-.445.58-.795 1.004-1.05.424-.256.945-.384 1.563-.384.629 0 1.157.135 1.583.405.426.27.759.645.998 1.126.24.48.36 1.05.36 1.709 0 .616-.073 1.209-.22 1.777a5.2 5.2 0 0 1-.685 1.571 3.53 3.53 0 0 1-1.18 1.134 3.07 3.07 0 0 1-1.638.441zm-6.702-.68c-.378.435-.86.76-1.446.974a4.99 4.99 0 0 1-1.782.32c-.58 0-1.096-.098-1.547-.294a3.17 3.17 0 0 1-1.154-.836c-.298-.362-.519-.806-.662-1.332-.144-.526-.216-1.116-.216-1.771 0-.68.083-1.288.249-1.823.166-.535.412-.989.739-1.362.327-.373.74-.653 1.24-.84.5-.187 1.085-.28 1.756-.28.71 0 1.32.106 1.83.318.51.212.92.518 1.23.918v5.908zm0-7.391a3.02 3.02 0 0 0-.962-.753 2.76 2.76 0 0 0-1.208-.266c-.452 0-.85.074-1.194.222a2.31 2.31 0 0 0-.86.626 3.12 3.12 0 0 0-.518.966c-.118.367-.177.778-.177 1.234 0 .445.059.845.177 1.2.118.356.29.658.518.906.228.248.514.437.86.567.344.13.742.195 1.194.195.461 0 .864-.089 1.208-.266.344-.177.665-.428.962-.753V9.442z"/>
      </svg>
    );
  }
  if (norm.includes("docker")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.928 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185M23.99 11.23a1.007 1.007 0 00-.735-.468c-.68-.11-1.325.267-1.748.86-.41.57-.45 1.343-.45 2.113 0 .78.04 1.543.45 2.113.423.593 1.068.97 1.748.86.305-.05.59-.22.735-.468.146-.247.16-.54.16-.832v-3.348c0-.292-.014-.585-.16-.832M1.986 13.916c-.08-.014-.16-.02-.24-.02-1.07 0-1.746.852-1.746 1.902 0 1.05.676 1.903 1.746 1.903.08 0 .16-.007.24-.02.433 1.637 1.48 2.94 2.87 3.827 1.39.887 3.07 1.353 4.81 1.353 3.63 0 6.89-2.02 8.71-5.187.32-.56.55-1.167.68-1.793H1.986v-.005z"/>
      </svg>
    );
  }
  if (norm.includes("redis")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M21.577 9.697l-9.014-4.717a1.23 1.23 0 00-1.126 0L2.423 9.697a1.182 1.182 0 00-.638 1.045v3.516c0 .432.235.828.618 1.033l9.014 4.841c.367.197.808.197 1.175 0l9.014-4.841c.383-.205.618-.601.618-1.033v-3.516a1.182 1.182 0 00-.647-1.045zM12 6.55l7.55 3.95-2.76 1.48-7.58-3.95 2.79-1.48zm-1.57 2.37l7.55 3.94-2.8 1.5-7.55-3.95 2.8-1.49zm-6.61 3.52l2.67-1.4 2.8 1.46-2.67 1.43-2.8-1.49zm8.18 8.95v-4.89l2.84 1.48-2.84 3.41zm-1.61-4.89v4.89l-2.84-3.41 2.84-1.48z"/>
      </svg>
    );
  }
  if (norm.includes("php")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M7.023 8.046H2.992c-.328 0-.616.208-.718.52L.037 15.11a.75.75 0 00.718.985h2.51l.836-2.617h1.922c2.183 0 3.73-1.42 4.195-3.03.48-1.662-.487-2.402-3.195-2.402zm-1.08 3.585h-1.46l.666-2.083h1.46c1.17 0 1.554.293 1.282 1.24-.265.926-.93 1.043-1.948 1.043zm15.065-3.585h-4.031c-.328 0-.616.208-.718.52L14.022 15.11a.75.75 0 00.718.985h2.51l.836-2.617h1.922c2.183 0 3.73-1.42 4.195-3.03.48-1.662-.487-2.402-3.195-2.402zm-1.08 3.585h-1.46l.666-2.083h1.46c1.17 0 1.554.293 1.282 1.24-.265.926-.93 1.043-1.948 1.043zM14.54 8.046h-2.528a.755.755 0 00-.718.52l-2.237 7.02c-.07.218.093.435.323.435h2.464a.755.755 0 00.718-.52l.668-2.096h2.247c.23 0 .393-.217.323-.435L15.26 8.566a.756.756 0 00-.72-.52zm-1.127 3.585h-.943l.564-1.767h.943l-.564 1.767z"/>
      </svg>
    );
  }
  if (norm.includes("mysql")) {
    return (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M16.924 16.326c-.322.257-.745.385-1.27.385-.688 0-1.258-.225-1.71-.676-.453-.45-.679-1.055-.679-1.815 0-.78.23-1.403.69-1.87.46-.467 1.046-.7 1.758-.7.49 0 .894.116 1.211.348v4.328zm1.616-5.835v1.27c-.496-.345-1.077-.518-1.743-.518-1.144 0-2.08.384-2.809 1.151-.728.767-1.093 1.745-1.093 2.934 0 1.178.365 2.149 1.093 2.915.729.767 1.665 1.15 2.809 1.15.666 0 1.247-.172 1.743-.517v1.282h1.616V10.49h-1.616zm-7.618 6.743h1.615V10.49h-1.615v6.743zm-2.859-6.743l-1.328 4.25-1.327-4.25H3.69v6.743h1.497v-4.52l1.245 4.52h1.168l1.246-4.52v4.52h1.497V10.49H8.063z"/>
      </svg>
    );
  }
  if (norm.includes("drf") || norm.includes("api") || norm.includes("rest")) {
    return <Cpu className={className} />;
  }
  if (norm.includes("rag") || norm.includes("ai") || norm.includes("llm")) {
    return <Sparkles className={className} />;
  }
  // Default icon
  return <Layers className={className} />;
}

// Complete, rich project data tailored to MD. Salauddin's real production portfolio
const PROJECTS = [
  {
    id: "talentek",
    title: "TALENTek – Enterprise AI-HRM Platform",
    tagline: "Multi-tenant SaaS with autonomous AI CV screening, pgvector search & ATS pipeline",
    category: "AI SaaS & ATS",
    categoryTag: "ai",
    status: "Live",
    metricsHighlight: "65% faster screening time with 1536-dim embeddings",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    overview: "TALENTek is a production enterprise talent acquisition and HRM SaaS designed to eliminate manual recruiter bottlenecks. Built with a scalable multi-tenant architecture, it provides autonomous AI-driven CV parsing, pgvector semantic candidate matching, and an interactive Kanban ATS pipeline.",
    keyFeatures: [
      "Autonomous CV parsing supporting PDF, DOCX, and unstructured resumes",
      "pgvector similarity indexing with OpenAI embeddings for instant job-candidate matching",
      "Chunked RAG assistant for rapid company policy retrieval and candidate screening queries",
      "Interactive real-time ATS Kanban board with drag-and-drop state management",
      "Multi-tenant data isolation with role-based permissions (Admin, HR Manager, Recruiter)"
    ],
    tech: ["Python", "Django", "DRF", "pgvector", "Next.js", "Redis", "Docker", "PostgreSQL"],
    role: "Lead Full-Stack & AI Engineer",
    challenges: "Parsing thousands of heterogeneous resume formats simultaneously without degrading the primary HTTP response cycle, alongside scaling high-dimensional vector similarity queries across large candidate databases.",
    solution: "Engineered an asynchronous Celery task queue with Redis broker to offload heavy OCR and embedding generations. Structured pgvector with HNSW indexing, reducing candidate search latencies to under 120ms.",
    highlights: [
      "Cut recruiter candidate evaluation time by approximately 65%",
      "Reduced CI/CD container build and release pipeline from 4h to 30m via multi-stage Docker",
      "Designed secure multi-tenant schema with automated SSLCommerz payment billing hooks"
    ],
    liveUrl: "https://talentek.bd",
    githubUrl: "https://github.com/salauddin85"
  },
  {
    id: "zamara-pos",
    title: "Zamara POS & Merchandise Suite",
    tagline: "All-in-one POS, real-time inventory engine, and multi-branch retail system",
    category: "POS & Retail System",
    categoryTag: "enterprise",
    status: "Live",
    metricsHighlight: "Sub-100ms item checkout lookup across 50,000+ SKUs",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    overview: "Zamara POS is a high-speed retail checkout and merchandise system built for modern brick-and-mortar storefronts and multi-warehouse supply chains. It features instant barcode scanning, offline-first transaction resilience, thermal receipt printer integration, and automated inventory sync.",
    keyFeatures: [
      "Rapid item scanning & checkout engine optimized for touchscreens and barcode readers",
      "Multi-store inventory synchronization with automated low-stock reorder triggers",
      "Offline transactional resilience with background IndexedDB sync upon reconnect",
      "Detailed financial reporting: daily cash drawer reconciliation, profit margins, and GST/VAT tax audits",
      "Employee shift management and permission control for cashier vs manager roles"
    ],
    tech: ["React", "TypeScript", "Tailwind", "Django", "PostgreSQL", "Docker"],
    role: "Full Stack Software Engineer",
    challenges: "Handling spotty network connections in physical retail environments where dropped requests during checkout lead to duplicate charges or stranded customer queues.",
    solution: "Architected a local-first queue using IndexedDB and Service Workers. Transactions are signed locally and reconciled via idempotent Django backend APIs the moment network connectivity resumes.",
    highlights: [
      "Zero transaction drop rate across thousands of daily retail receipts",
      "Instant sub-100ms search across 50,000+ SKU catalogs using indexed PostgreSQL full-text search",
      "Cross-platform responsive interface tailored for desktop terminals, tablets, and mobile handhelds"
    ],
    liveUrl: "https://pepoltek.com",
    githubUrl: "https://github.com/salauddin85"
  },
  {
    id: "purelube",
    title: "PureLube Lubricant GmbH",
    tagline: "Corporate brand platform with global product catalog and distributor portal",
    category: "Brand Website",
    categoryTag: "web",
    status: "Live",
    metricsHighlight: "100/100 Lighthouse performance with sub-second page loads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    overview: "Corporate web platform engineered for PureLube Lubricant GmbH, a premier German automotive and industrial lubricant brand. Built to showcase extensive technical product lineups, company certifications, and handle high-volume distributor inquiries across Europe, Asia, Africa, and the Americas.",
    keyFeatures: [
      "Dynamic interactive product catalog with fluid viscosity and engine-specification filters",
      "Multi-region distributor qualification pipeline with automated lead distribution",
      "International localization with lightning-fast static page generation",
      "Rich media gallery and interactive corporate timeline showcasing German manufacturing standards",
      "Headless CMS integration enabling non-technical stakeholders to publish new spec sheets"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Docker"],
    role: "Lead Frontend & Web Architect",
    challenges: "Delivering heavy 4K product imagery, detailed oil specification sheets, and international branding assets without hurting mobile Core Web Vitals across emerging international markets.",
    solution: "Implemented Next.js Incremental Static Regeneration (ISR) paired with Next/Image AVIF/WebP auto-compression and edge-cached Cloudflare CDN distribution.",
    highlights: [
      "Achieved flawless 100/100 performance, accessibility, and SEO scores on Google Lighthouse",
      "Streamlined global distributor lead capture, increasing international inquiry conversions by 40%",
      "Engineered bespoke micro-interactions and smooth scroll ergonomics matching luxury German aesthetics"
    ],
    liveUrl: "https://pepoltek.com",
    githubUrl: "https://github.com/salauddin85"
  },
  {
    id: "ecommerce",
    title: "Multi-Vendor E-Commerce Platform",
    tagline: "Scalable marketplace with atomic split-order checkout & 4-tier RBAC",
    category: "Fintech & E-Commerce",
    categoryTag: "fintech",
    status: "Live",
    metricsHighlight: "25% query latency reduction with zero-race condition checkouts",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    overview: "A comprehensive multi-vendor digital marketplace engineered for high transaction volume. Features split-order cart checkouts, automated commission payouts, merchant analytics dashboards, and end-to-end payment gateway integrations.",
    keyFeatures: [
      "4-Tier RBAC authorization (Super Admin, Vendor Store, Brand Representative, Customer)",
      "Atomic cart & checkout system supporting multi-vendor orders in a single payment transaction",
      "Secure SSLCommerz payment gateway integration with automated webhook verification",
      "Real-time inventory deduction with row-level database locking preventing overselling",
      "Merchant analytics portal with revenue graphs, order status pipelines, and refund processors"
    ],
    tech: ["Django", "DRF", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind"],
    role: "Backend Architect & Frontend Engineer",
    challenges: "Managing concurrent checkouts during flash sales where multiple users attempt to purchase limited stock items simultaneously, risking race conditions and stock inconsistencies.",
    solution: "Leveraged Django database transactions with `select_for_update` row locks on product variants, ensuring absolute inventory integrity during split-second checkout spikes.",
    highlights: [
      "25% database query speed improvement achieved through composite PostgreSQL indexing",
      "Zero payment discrepancy records across production deployment",
      "Responsive, mobile-optimized shopping flow with Zustand-powered persistent state"
    ],
    liveUrl: "https://github.com/salauddin85",
    githubUrl: "https://github.com/salauddin85"
  },
  {
    id: "club-mgmt",
    title: "Club Member Management System",
    tagline: "High-concurrency membership portal and event operations system",
    category: "Enterprise ERP",
    categoryTag: "enterprise",
    status: "Live",
    metricsHighlight: "Serving 1,000+ active enterprise members at PEPOLTEK",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    overview: "Enterprise operations and member management platform deployed in production at PEPOLTEK. The system manages membership renewals, automated billing cycles, event registration with digital QR tickets, and administrative financial exports.",
    keyFeatures: [
      "Automated recurring membership subscriptions and digital membership card issuance",
      "Event ticketing pipeline with real-time QR code check-in scanner for door attendants",
      "Executive reporting dashboard with CSV/PDF ledger exports and dues tracking",
      "Automated SMS/Email notification alerts for upcoming meetings and renewals",
      "Granular role-based permissions protecting sensitive member personal data"
    ],
    tech: ["Django", "DRF", "TypeScript", "PostgreSQL", "Docker", "Tailwind"],
    role: "Lead Backend Developer",
    challenges: "Handling complex tier-based membership rules, member dues rollover, and high concurrency ticket reservations during annual executive summits.",
    solution: "Built a finite state machine pattern for membership lifecycles and background scheduled billing workers using Celery Beat to guarantee reliable midnight invoice generations.",
    highlights: [
      "Active production deployment serving over 1,000 registered corporate members",
      "Reduced administrative member on-boarding overhead from days to under 5 minutes",
      "Seamless integration with secure PostgreSQL audit logs"
    ],
    liveUrl: "https://pepoltek.com",
    githubUrl: "https://github.com/salauddin85"
  },
  {
    id: "talentracker",
    title: "TalentTracker Discovery Engine",
    tagline: "Recruitment discovery engine and candidate indexing pipeline",
    category: "Recruitment Tech",
    categoryTag: "ai",
    status: "Live",
    metricsHighlight: "Live discovery platform deployed at talentracker.net",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    overview: "A specialized talent discovery engine enabling headhunters and tech companies to search, categorize, and track qualified software engineers and executives with automated outreach scheduling.",
    keyFeatures: [
      "Structured search across skills, seniority, salary expectations, and tech stacks",
      "Automated candidate profile enrichment and duplicate deduplication engine",
      "Live recruitment pipeline with customizable stages and recruiter notes",
      "Production VPS containerization with Nginx reverse proxy and SSL automation"
    ],
    tech: ["Django", "DRF", "Next.js", "Docker", "PostgreSQL", "Tailwind"],
    role: "Full Stack Developer",
    challenges: "Building a fast, faceted search engine that responds instantly as recruiters toggle combinations of experience years and niche tech frameworks.",
    solution: "Optimized database schema with targeted GIN indices in PostgreSQL and implemented cached API response layers using Redis.",
    highlights: [
      "Successfully launched live at talentracker.net",
      "Unified recruiter interface reducing time-to-hire workflows"
    ],
    liveUrl: "https://talentracker.net",
    githubUrl: "https://github.com/salauddin85"
  },
  {
    id: "pepoltek-corp",
    title: "PEPOLTEK Corporate Engineering Platform",
    tagline: "Corporate presence with dynamic service matrix & client qualification",
    category: "Corporate Platform",
    categoryTag: "web",
    status: "Live",
    metricsHighlight: "Sub-second TTFB with high-converting client lead pipelines",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    overview: "Official corporate platform for PEPOLTEK, showcasing engineering capabilities, client case studies, enterprise metrics, and interactive service qualification pipelines.",
    keyFeatures: [
      "Interactive enterprise service catalog and architecture case study breakdown",
      "Interactive client inquiry qualifier with automated quotation estimates",
      "High performance Next.js server components with instant page transitions",
      "Dark/Light theme support with modern glassmorphism aesthetics"
    ],
    tech: ["DRF", "Next.js", "TypeScript", "Tailwind", "Docker"],
    role: "Lead Frontend Engineer",
    challenges: "Balancing rich interactive UI components, case study metrics, and branding animations while maintaining top-tier SEO rankings.",
    solution: "Adopted hybrid rendering with Next.js App Router, streaming server-side generated content for search spiders while client components hydrate interactive widgets.",
    highlights: [
      "Elevated PEPOLTEK's digital brand authority across global client prospects",
      "Direct pipeline for corporate service discovery and RFP submissions"
    ],
    liveUrl: "https://pepoltek.com",
    githubUrl: "https://github.com/salauddin85"
  }
];

export default function Work() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Directly link animation to visitor's continuous scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Physical spring for buttery responsive scroll synchronization
  const springConfig = { stiffness: 100, damping: 24, mass: 0.4 };

  // Scroll-linked continuous leftward movement matching About Me & Tech Stack
  const rawWatermarkX = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const smoothWatermarkX = useSpring(rawWatermarkX, springConfig);

  const rawHeaderX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const smoothHeaderX = useSpring(rawHeaderX, springConfig);

  // Filter logic
  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.categoryTag === filter);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--bg-deep)] border-t border-[var(--border-default)]"
    >
      {/* Background Section Title "WORK" — Centered horizontally by default, then scroll-linked translation to the left */}
      <div className="absolute top-[-10px] left-0 w-full flex justify-center pointer-events-none overflow-hidden z-0 select-none">
        <motion.div 
          style={{ x: smoothWatermarkX }} 
          className="font-display font-black uppercase tracking-[-0.04em] whitespace-nowrap text-[clamp(42px,11vw,180px)] leading-none text-[var(--watermark-color)] [-webkit-text-stroke:var(--watermark-stroke,0px_transparent)] max-w-[95vw] overflow-hidden"
        >
          WORK
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with scroll-linked animation */}
        <motion.div 
          style={{ x: smoothHeaderX }} 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl leading-tight">
              Live products and private builds across web, AI, SaaS, and fintech.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] font-normal max-w-xl">
              Production systems built with modern architecture, rock-solid backends, and responsive user experiences. Click any project to inspect full case details.
            </p>
          </div>

          {/* Filter Pills matching Screenshot 1 */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 shrink-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "all"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              All [{PROJECTS.length}]
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "ai"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              AI & RAG
            </button>
            <button
              onClick={() => setFilter("enterprise")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "enterprise"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              POS & Enterprise
            </button>
            <button
              onClick={() => setFilter("fintech")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "fintech"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              Fintech
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "web"
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              Brand & Web
            </button>
          </div>
        </motion.div>

        {/* Project Cards Grid — Following Screenshot 1 reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Project Image & Mockup Canvas */}
                <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-neutral-100 dark:bg-neutral-900 overflow-hidden border-b border-[var(--border-default)] flex items-center justify-center p-3 sm:p-5">
                  {/* Status Badge overlay in top-left (Screenshot 1: • Live) */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/95 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{project.status}</span>
                  </div>

                  {/* "Click to View" badge on top right hover */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-black/85 text-white dark:bg-white dark:text-black shadow-md">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>

                  {/* Mockup Image Display */}
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Card Content & Badges (Matching Screenshot 1) */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full border border-[var(--border-default)] flex items-center justify-center shrink-0 text-[var(--text-muted)] group-hover:border-black group-hover:bg-black group-hover:text-white dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Key Technical Highlight Pill */}
                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)] font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="truncate">{project.metricsHighlight}</span>
                    </div>
                  </div>

                  {/* Bottom Badges Row: Category + Tech with Icons (Exact match with reference) */}
                  <div className="mt-6 pt-5 border-t border-[var(--border-default)] flex flex-wrap items-center gap-2">
                    {/* Category Pill with Icon */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)]">
                      <Boxes className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{project.category}</span>
                    </span>

                    {/* Tech Pills with Logos */}
                    {project.tech.slice(0, 4).map((techName) => (
                      <span
                        key={techName}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-deep)] border border-[var(--border-default)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                      >
                        <TechLogo name={techName} className="w-3.5 h-3.5 shrink-0" />
                        <span>{techName}</span>
                      </span>
                    ))}

                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer info note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs text-[var(--text-secondary)] font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Architecture: Production CI/CD, Containerized Micro-services & Multi-tenant DB Schemas</span>
          </div>
          <a
            href="https://github.com/salauddin85"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[var(--text-primary)] hover:underline"
          >
            <span>Explore 40+ Repos on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* MODERN PROJECT DETAILS MODAL — Matching Screenshot 2 reference */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-[var(--text-primary)]"
            >
              {/* Modal Top Bar (Screenshot 2) */}
              <div className="px-6 py-4 border-b border-[var(--border-default)] bg-[var(--bg-elevated)] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xs shadow-xs">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                      PROJECT DETAILS
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] truncate max-w-xs sm:max-w-md">
                      {selectedProject.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{selectedProject.status}</span>
                  </span>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                    className="w-8 h-8 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-10 custom-scrollbar">
                
                {/* Hero Showcase Grid: Left Image, Right Info (Screenshot 2) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Side: Large Project Showcase Image */}
                  <div className="lg:col-span-7 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-[var(--border-default)] p-3 sm:p-4 overflow-hidden shadow-xs">
                    <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/80 text-white backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>{selectedProject.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Meta Summary & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Category & Status tags */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)]">
                          {selectedProject.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                          • {selectedProject.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] leading-snug">
                        {selectedProject.title}
                      </h3>

                      {/* Overview Paragraph */}
                      <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                        {selectedProject.overview}
                      </p>

                      {/* Structured Metadata Grid (Screenshot 2: Category, Status, Tools) */}
                      <div className="mt-6 pt-5 border-t border-[var(--border-default)] space-y-3.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[var(--text-muted)] uppercase tracking-wider text-[11px]">
                            CATEGORY
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {selectedProject.category}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[var(--text-muted)] uppercase tracking-wider text-[11px]">
                            STATUS
                          </span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            {selectedProject.status} Production
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[var(--text-muted)] uppercase tracking-wider text-[11px]">
                            MY ROLE
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {selectedProject.role}
                          </span>
                        </div>

                        <div className="pt-2">
                          <span className="block font-mono text-[var(--text-muted)] uppercase tracking-wider text-[11px] mb-2">
                            TOOLS & TECH
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedProject.tech.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-primary)]"
                              >
                                <TechLogo name={t} className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                                <span>{t}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action CTA Buttons (Screenshot 2) */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-sm"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-[var(--border-default)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] transition-all"
                      >
                        <FolderGit2 className="w-4 h-4" />
                        <span>Codebase</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Deep Dive Breakdown: Key Features, Challenges, and Solutions */}
                <div className="border-t border-[var(--border-default)] pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left: Key Features & Engineering Contributions */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold mb-4">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Key Features & Capabilities</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Key Impact & Metrics</span>
                      </h5>
                      <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                        {selectedProject.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Technical Challenges & Architecture Solutions */}
                  <div className="space-y-6">
                    <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/10">
                      <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Technical Challenge</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10">
                      <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold mb-2">
                        <Zap className="w-4 h-4" />
                        <span>Engineering Approach & Solution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* UP NEXT / MORE WORK Carousel (Screenshot 2 bottom) */}
                <div className="border-t border-[var(--border-default)] pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                        • UP NEXT
                      </span>
                      <h4 className="text-base font-bold text-[var(--text-primary)]">
                        /MORE WORK
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Click to inspect
                    </span>
                  </div>

                  {/* Horizontal Scroll of other projects */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {PROJECTS.filter(p => p.id !== selectedProject.id).slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedProject(item)}
                        className="group/mini p-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] hover:border-black dark:hover:border-white transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden mb-2.5">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover/mini:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono bg-black/80 text-white">
                            • {item.status}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold text-[var(--text-primary)] group-hover/mini:text-indigo-500 transition-colors truncate">
                            {item.title}
                          </h5>
                          <p className="text-[11px] text-[var(--text-secondary)] truncate">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
