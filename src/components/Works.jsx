import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, CornerDownLeft, Eye, Terminal } from 'lucide-react';

const PROJECTS = [
  {
    id: "01",
    total: "09",
    title: "KINESIS STUDIO",
    category: "CREATIVE AGENCY ENGINE // LANDING",
    year: "2026",
    status: "PRODUCTION CORE",
    desc: "Bespoke company landing page built for high-velocity creative architecture, kinetic micro-interactions, responsive editorial layouts, and zero-layout-shift physics.",
    tech: ["REACT 19", "VITE", "TAILWIND CSS", "FRAMER MOTION"],
    metrics: "< 11MS FRAME LATENCY",
    accent: "#34d399",
    link: "https://kinesis-studio-beta.vercel.app/"
  },
  {
    id: "02",
    total: "09",
    title: "TECHNOVA",
    category: "ENTERPRISE TECHNOLOGY PLATFORM",
    year: "2026",
    status: "LIVE PRODUCTION",
    desc: "Futuristic multi-layered technology presentation ecosystem engineered with dark-mode cyberpunk design language, optimized asset pipelines, and high-performance DOM orchestration.",
    tech: ["REACT", "TAILWIND CSS", "VITE", "LUCIDE"],
    metrics: "99.9% RUNTIME FIDELITY",
    accent: "#00f0ff",
    link: "https://tech-nova-roan.vercel.app/"
  },
  {
    id: "03",
    total: "09",
    title: "AURALEDGER",
    category: "FINANCIAL TELEMETRY & EXPENSE TRACKER",
    year: "2026",
    status: "ACTIVE SYSTEM",
    desc: "High-precision financial transaction ledger featuring real-time analytical computation, interactive expense categorization, balance trends, and reactive data charts.",
    tech: ["REACT", "LOCAL STORAGE", "TAILWIND CSS", "CHARTS"],
    metrics: "INSTANT ZERO-WAIT SYNC",
    accent: "#ffb800",
    link: "https://auraledger-seven.vercel.app/"
  },
  {
    id: "04",
    total: "09",
    title: "AL-QURAN",
    category: "SPIRITUAL DIGITAL ARCHITECTURE",
    year: "2026",
    status: "VERIFIED REPO",
    desc: "Clean, reverent, and fluid holy Quran exploration interface with comprehensive Surah indexing, translation integration, responsive typography, and audio playback states.",
    tech: ["REACT 19", "QURAN REST API", "TAILWIND CSS", "AUDIO API"],
    metrics: "ACCESSIBILITY RATED A+",
    accent: "#34d399",
    link: "https://alquran-tau.vercel.app/"
  },
  {
    id: "05",
    total: "09",
    title: "APEX TELEMETRY",
    category: "ADMIN ANALYTICS & OPS DASHBOARD",
    year: "2026",
    status: "PRODUCTION READY",
    desc: "Enterprise telemetry dashboard displaying live server clusters, user retention cohorts, bandwidth throughput stats, and multi-tenant management widgets.",
    tech: ["REACT", "RECHARTS", "TAILWIND CSS", "DATA GRIDS"],
    metrics: "SUB-15MS DATA UPDATE",
    accent: "#c084fc",
    link: "https://apex-analytics-dashboard-nu.vercel.app/"
  },
  {
    id: "06",
    total: "09",
    title: "TASKMATRIX",
    category: "SYSTEM PRODUCTIVITY // TODO MATRIX",
    year: "2026",
    status: "SHIPPED",
    desc: "Brutalist keyboard-optimized task scheduler and prioritization pipeline engineered with drag sorting, persistence layers, and instant feedback loops.",
    tech: ["REACT", "VITE", "TAILWIND CSS", "STATE PIPELINE"],
    metrics: "0MS INPUT DELAY",
    accent: "#f43f5e",
    link: "https://taskmatrix-eight.vercel.app/"
  },
  {
    id: "07",
    total: "09",
    title: "AETHERIS PRO",
    category: "KNOWLEDGE OS // NOTES PLATFORM",
    year: "2026",
    status: "SHIPPED",
    desc: "Minimalist distraction-free Markdown notepad equipped with tag hierarchies, fast text searching, persistent local cache, and clean typography scales.",
    tech: ["REACT", "TAILWIND CSS", "CACHE LAYER", "MARKDOWN"],
    metrics: "LIGHTWEIGHT BUNDLE",
    accent: "#818cf8",
    link: "https://aetheris-pro.vercel.app/"
  },
  {
    id: "08",
    total: "09",
    title: "ZEPHYROS",
    category: "METEOROLOGICAL RADAR & WEATHER HUB",
    year: "2026",
    status: "SHIPPED",
    desc: "Real-time atmospheric telemetry console providing precipitation indices, 7-day barometric forecasts, wind vector maps, and dynamic atmospheric skins.",
    tech: ["REACT", "WEATHER REST API", "GEOLOCATION", "TAILWIND CSS"],
    metrics: "LIVE SATELLITE SYNC",
    accent: "#38bdf8",
    link: "https://zephyros-neon.vercel.app/"
  },
  {
    id: "09",
    total: "09",
    title: "VOLTIX STORE",
    category: "COMMERCE ENGINE // HARDWARE UI",
    year: "2026",
    status: "SHIPPED",
    desc: "Cutting-edge electronics storefront interface featuring instant cart filtering, spec comparison sheets, high-resolution product carousels, and rapid checkout mocks.",
    tech: ["REACT", "CONTEXT API", "TAILWIND CSS", "COMMERCE FLOW"],
    metrics: "SEAMLESS CHECKOUT FLOW",
    accent: "#fb923c",
    link: "https://voltix-store-lake.vercel.app/"
  }
];

export default function Works({ onBack }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pktTime, setPktTime] = useState('');

  const project = PROJECTS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Keyboard Left / Right Navigation for Projects
  useEffect(() => {
    const handleKeyNav = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setPktTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Karachi',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen h-[100dvh] w-screen bg-[#050608] text-[#c9cbcf] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 2xl:p-12 select-none">
      
      {/* 5-Column Grid Lines with Red Markers */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-5 h-full w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="border-r border-white/[0.04] relative">
          <span className="absolute top-1/3 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="border-r border-white/[0.04] relative">
          <span className="absolute top-2/3 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="border-r border-white/[0.04] relative hidden sm:block">
          <span className="absolute top-1/4 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="border-r border-white/[0.04] relative">
          <span className="absolute top-1/2 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="relative" />
      </div>

      {/* Top Editorial Bar */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-5 items-center gap-4 font-mono-tech uppercase tracking-widest text-slate-500 border-b border-white/[0.06] pb-3 sm:pb-4 flex-shrink-0 text-[10px] sm:text-xs 2xl:text-sm">
        <div className="flex items-center gap-2 text-white">
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
            <span className="font-bold tracking-[0.2em] text-white">SAIM // ATELIER</span>
          </button>
        </div>

        <div className="hidden sm:block">
          <span>MODE — <span className="text-white">PROJECTS DECK</span></span>
        </div>

        <div className="hidden sm:block">
          <div>LAHORE, PK</div>
          <div className="text-white">{pktTime || '10:33'} PKT</div>
        </div>

        <div className="hidden sm:block text-slate-500">
          <div>INDEX: [{project.id} / 09]</div>
          <div className="text-emerald-400">ACTIVE</div>
        </div>

        {/* Carousel Steppers */}
        <div className="flex justify-end gap-2 items-center">
          <button 
            onClick={handlePrev}
            aria-label="Previous project"
            className="p-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="font-mono text-[10px] text-slate-400 px-1">
            {project.id}/09
          </span>
          <button 
            onClick={handleNext}
            aria-label="Next project"
            className="p-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Stage: Current Project Presentation */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto flex-1 min-h-0 w-full max-w-[2200px] mx-auto py-4">
        
        {/* Left Column: Index, Giant Title & Narrative */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3">
            <span 
              className="px-2.5 py-0.5 text-black font-mono-tech text-[10px] font-bold tracking-widest uppercase"
              style={{ backgroundColor: project.accent }}
            >
              PROJECT {project.id}
            </span>
            <span className="font-mono-tech text-xs text-slate-500">
              [{project.id} / {project.total}]
            </span>
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase">
              • {project.status}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -25, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 25, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-display tracking-tight text-white uppercase leading-[0.88]">
                {project.title}
              </h2>

              <div className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest flex items-center gap-2" style={{ color: project.accent }}>
                <Terminal className="w-3.5 h-3.5" />
                <span>{project.category}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">{project.year}</span>
              </div>

              <p className="text-xs sm:text-sm 2xl:text-base font-mono-tech text-slate-400 leading-relaxed max-w-xl">
                {project.desc}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[9px] sm:text-[10px] font-mono-tech tracking-wider uppercase bg-white/[0.03] border border-white/[0.08] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Interactive Tactical Metric Capsule & Dual Action Launchers */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-6">
          <div className="w-full max-w-md border border-white/[0.08] p-6 bg-white/[0.015] backdrop-blur-md space-y-5">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
              <span>SYSTEM FIDELITY</span>
              <span className="font-bold" style={{ color: project.accent }}>{project.status}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase">LATENCY / SPEED</span>
              <div className="text-xl sm:text-2xl font-mono-tech font-bold text-white">
                {project.metrics}
              </div>
            </div>

            {/* Project Buttons: VIEW PROJECT & INSPECT ARCHITECTURE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black font-mono-tech text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-400 hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>VIEW PROJECT</span>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 text-white font-mono-tech text-[10px] tracking-widest uppercase hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all"
              >
                <span>INSPECT ARCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-1 text-[9px] font-mono-tech text-slate-500 truncate">
              URI: <span className="text-slate-400">{project.link}</span>
            </div>
          </div>

          {/* Quick Direct Project Switcher Dots */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-6 bg-emerald-400' : 'w-2 bg-white/20 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono-tech text-slate-500 uppercase">
            <span>PRESS &uarr; OR &darr; FOR STAGES • &larr; OR &rarr; FOR WORKS</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 items-center gap-3 font-mono-tech uppercase text-slate-500 border-t border-white/[0.06] pt-3 flex-shrink-0 text-[9px] sm:text-[10px] 2xl:text-xs">
        <div>
          <span className="text-slate-400">STAGE: </span>WORKS FEED // 02
        </div>
        <div className="hidden sm:block text-center">
          KEYS: [&uarr; / &darr; STAGES] • [&larr; / &rarr; 01-09 PROJECTS]
        </div>
        <div className="hidden sm:block text-right">
          LATENCY: &lt;10MS
        </div>
        <div className="text-right text-slate-400">
          © 2026 SAIM
        </div>
      </div>

    </div>
  );
}