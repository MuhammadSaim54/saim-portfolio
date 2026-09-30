import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, CornerDownLeft, Eye, Terminal } from 'lucide-react';
import { sound } from '../utils/soundEngine';

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

export default function Works({ onBack, onOpenMenu }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pktTime, setPktTime] = useState('');

  const project = PROJECTS[activeIdx];

  const handleNext = () => {
    sound.playChirp();
    setActiveIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    sound.playChirp();
    setActiveIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleSelectDirect = (idx) => {
    sound.playChirp();
    setActiveIdx(idx);
  };

  useEffect(() => {
    const handleKeyNav = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
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
    <div className="relative h-screen h-[100dvh] w-screen bg-[#050608] text-[#c9cbcf] overflow-hidden flex flex-col justify-between p-3 sm:p-6 lg:p-8 2xl:p-14 select-none">
      
      {/* 5-Column Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-5 h-full w-full px-3 sm:px-6 lg:px-8 2xl:px-14">
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
      <div className="relative z-20 flex items-center justify-between gap-2 font-mono-tech uppercase tracking-widest text-slate-500 pb-2 flex-shrink-0 text-[10px] sm:text-xs 2xl:text-sm">
        <div className="flex items-center gap-2 text-white">
          <button 
            onClick={() => {
              sound.playClick();
              onBack();
            }}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-none"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
            <span className="font-bold tracking-[0.15em] text-white">SAIM // ATELIER</span>
          </button>
        </div>

        <div className="hidden md:block">
          <span>MODE — <span className="text-white">PROJECTS DECK</span></span>
        </div>

        <div className="hidden lg:block">
          <div>LAHORE, PK</div>
          <div className="text-white">{pktTime || '11:45'} PKT</div>
        </div>

        <div className="hidden sm:block text-slate-500">
          <div>INDEX: [{project.id} / 09]</div>
          <div className="text-emerald-400">ACTIVE</div>
        </div>

        {/* Steppers & Menu */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button 
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-1 sm:p-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-none"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 px-1">
              {project.id}/09
            </span>
            <button 
              onClick={handleNext}
              aria-label="Next project"
              className="p-1 sm:p-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-none"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button 
            onClick={onOpenMenu}
            className="px-2 py-1 sm:px-3 sm:py-1 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-none text-[9px] sm:text-xs"
          >
            [ MENU ]
          </button>
        </div>
      </div>

      {/* Center Stage: Highly Responsive & Adaptive Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 2xl:gap-16 items-center my-auto flex-1 min-h-0 w-full overflow-y-auto lg:overflow-visible py-1 sm:py-2">
        
        {/* Left Column: Project Identity */}
        <div className="lg:col-span-7 space-y-2 sm:space-y-4 2xl:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span 
              className="px-2 py-0.5 text-black font-mono-tech text-[9px] sm:text-[10px] 2xl:text-xs font-bold tracking-widest uppercase"
              style={{ backgroundColor: project.accent }}
            >
              PROJECT {project.id}
            </span>
            <span className="font-mono-tech text-[10px] sm:text-xs text-slate-500">
              [{project.id} / {project.total}]
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono-tech text-slate-500 uppercase">
              • {project.status}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20, filter: 'blur(3px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 20, filter: 'blur(3px)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 sm:space-y-3.5 2xl:space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5vw] 2xl:text-[5vw] font-display tracking-tight text-white uppercase leading-[0.88]">
                {project.title}
              </h2>

              <div className="text-[9px] sm:text-xs font-mono-tech uppercase tracking-widest flex items-center gap-1.5" style={{ color: project.accent }}>
                <Terminal className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{project.category}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">{project.year}</span>
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm 2xl:text-base font-mono-tech text-slate-400 leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none">
                {project.desc}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px] 2xl:text-xs font-mono-tech tracking-wider uppercase bg-white/[0.03] border border-white/[0.08] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Tactical Capsule */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end space-y-3 sm:space-y-5">
          <div className="w-full max-w-full lg:max-w-md border border-white/[0.08] p-3 sm:p-5 2xl:p-7 bg-white/[0.015] backdrop-blur-md space-y-3 sm:space-y-4">
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[9px] sm:text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
              <span>SYSTEM FIDELITY</span>
              <span className="font-bold text-[9px] sm:text-[10px]" style={{ color: project.accent }}>{project.status}</span>
            </div>

            <div className="flex items-baseline justify-between sm:block space-y-0.5">
              <span className="text-[9px] sm:text-[10px] font-mono-tech text-slate-500 uppercase">LATENCY / SPEED</span>
              <div className="text-sm sm:text-xl 2xl:text-3xl font-mono-tech font-bold text-white tracking-tight">
                {project.metrics}
              </div>
            </div>

            {/* Launch Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 bg-white text-black font-mono-tech text-[9px] sm:text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-400 hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-none"
              >
                <Eye className="w-3 h-3" />
                <span className="truncate">VIEW PROJECT</span>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 border border-white/20 text-white font-mono-tech text-[9px] sm:text-[10px] tracking-widest uppercase hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all cursor-none"
              >
                <span className="truncate">INSPECT ARCH</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Micro-stepper Dots */}
          <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelectDirect(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-none ${
                  i === activeIdx ? 'w-6 bg-emerald-400' : 'w-1.5 bg-white/20 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-20 flex items-center justify-between font-mono-tech uppercase text-slate-500 pt-2 flex-shrink-0 text-[8px] sm:text-[9px] 2xl:text-xs">
        <div>
          <span className="text-slate-400">STAGE: </span>02 // WORKS
        </div>
        <div className="hidden md:block text-center">
          KEYS: [&uarr; / &darr; STAGES] • [&larr; / &rarr; 01-09 PROJECTS]
        </div>
        <div className="text-right text-slate-400">
          © 2026 SAIM
        </div>
      </div>

    </div>
  );
}