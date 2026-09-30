import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowRight, CornerDownLeft } from 'lucide-react';

const AXIOMS = [
  {
    index: "01",
    tag: "BOUNDLESS_SCOPE",
    title: "THE VAST HORIZON",
    quote: "You think I cry for a fish, when I have a whole sea in front of me.",
    author: "UNSHAKABLE RESOLVE",
    accent: "#34d399",
    meta: "LAT: 31°14'N // CORE_MINDSET",
    subtext: "Engineering beyond microscopic constraints with relentless scale."
  },
  {
    index: "02",
    tag: "RAW_EXECUTION",
    title: "THE IRON DISCIPLINE",
    quote: "WORK, THAT'S HOW YOU GET IT.",
    author: "PURE SWEAT & CODE",
    accent: "#f43f5e",
    meta: "RUNTIME: CONTINUOUS // 0_EXCUSES",
    subtext: "No shortcuts. Zero fluff. Only shipped commits and verified outputs."
  },
  {
    index: "03",
    tag: "HUMBLE_ARCHITECTURE",
    title: "THE INITIATION",
    quote: "Every Expert, was a beginner first.",
    author: "ITERATIVE MASTERY",
    accent: "#00f0ff",
    meta: "EXP: ACCUMULATING // INFINITE_DEPTH",
    subtext: "Every monumental digital empire started from an empty terminal screen."
  },
  {
    index: "04",
    tag: "ENDLESS_HUSTLE",
    title: "THE RELENTLESS QUEST",
    quote: "Success is a journey, not a destination. Success is not for the chosen few; it's for those who choose to hustle.",
    author: "THE HUSTLE PARADIGM 🤝🔥",
    accent: "#c084fc",
    meta: "STATUS: UNSTOPPABLE // EXPONENTIAL",
    subtext: "Relentless velocity. Day in, day out, engineering the future."
  }
];

export default function Manifesto({ onNext, onPrev, onOpenMenu }) {
  const [activeQuote, setActiveQuote] = useState(0);
  const [pktTime, setPktTime] = useState('');

  useEffect(() => {
    const autoTimer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % AXIOMS.length);
    }, 5500);

    return () => clearInterval(autoTimer);
  }, [activeQuote]);

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

  const current = AXIOMS[activeQuote];

  return (
    <section className="relative h-screen h-[100dvh] w-screen bg-[#050608] text-[#c9cbcf] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-10 2xl:p-16 select-none">
      
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-5 h-full w-full px-4 sm:px-6 lg:px-10 2xl:px-16">
        <div className="border-r border-white/[0.04] relative">
          <span className="absolute top-1/4 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="border-r border-white/[0.04] relative">
          <span className="absolute top-2/3 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="border-r border-white/[0.04] relative hidden sm:block">
          <span className="absolute top-1/2 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="border-r border-white/[0.04] relative">
          <span className="absolute top-1/3 right-0 w-1.5 h-3 bg-rose-500 translate-x-1/2" />
        </div>
        <div className="relative" />
      </div>

      <div className="absolute left-4 lg:left-12 bottom-12 pointer-events-none font-display text-[26vw] sm:text-[20vw] leading-none text-white/[0.015] font-black z-0 select-none">
        0{activeQuote + 1}
      </div>

      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-5 items-center gap-4 font-mono-tech uppercase tracking-widest text-slate-500 pb-3 sm:pb-4 flex-shrink-0 text-[10px] sm:text-xs 2xl:text-sm">
        <div className="flex items-center gap-2 text-white">
          <button 
            onClick={onPrev}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-none"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
            <span className="font-bold tracking-[0.2em] text-white">STAGE 01 // HERO</span>
          </button>
        </div>

        <div className="hidden sm:block">
          <span>PHILOSOPHY — <span className="text-white">CORE CREED</span></span>
        </div>

        <div className="hidden sm:block">
          <div>LAHORE, PK</div>
          <div className="text-white">{pktTime || '11:26'} PKT</div>
        </div>

        <div className="hidden sm:block text-slate-500">
          <div>INDEX: [{current.index} / 04]</div>
          <div className="text-emerald-400">AUTO-CYCLE ON</div>
        </div>

        <div className="flex justify-end items-center gap-3">
          <button
            onClick={onNext}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 border border-emerald-400/40 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all cursor-none text-[10px] 2xl:text-xs font-bold"
          >
            <span>NEXT: WORKS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button 
            onClick={onOpenMenu}
            className="px-2.5 py-1 2xl:px-4 2xl:py-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-none text-[10px] 2xl:text-xs"
          >
            [ MENU ]
          </button>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 2xl:gap-20 items-center my-auto flex-1 min-h-0 w-full py-2">
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 2xl:space-y-12">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span 
              className="px-3 py-1 text-black font-mono-tech text-[10px] sm:text-xs 2xl:text-sm font-bold tracking-widest uppercase transition-colors"
              style={{ backgroundColor: current.accent }}
            >
              // MINDSET AXIOM {current.index}
            </span>
            <span className="font-mono-tech text-xs 2xl:text-sm text-slate-400 tracking-wider">
              {current.tag}
            </span>
            <span className="hidden sm:inline-block font-mono-tech text-xs text-slate-600">//</span>
            <span className="hidden sm:inline-block font-mono-tech text-xs text-slate-500">
              {current.meta}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote}
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 2xl:space-y-10"
            >
              <h2 className="text-[7.5vw] sm:text-[5.5vw] lg:text-[4.2vw] 2xl:text-[4vw] font-display tracking-tight text-white uppercase leading-[0.88] max-w-6xl select-none">
                “{current.quote}”
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 font-mono-tech text-xs sm:text-sm 2xl:text-base text-slate-400">
                <div className="flex items-center gap-2 text-white font-bold tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.accent }} />
                  <span>{current.author}</span>
                </div>
                <span className="hidden sm:inline text-slate-600">•</span>
                <p className="text-slate-400 text-xs sm:text-sm 2xl:text-base max-w-xl">
                  {current.subtext}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center space-y-3.5 2xl:space-y-5">
          <div className="text-[10px] 2xl:text-xs font-mono-tech uppercase text-slate-500 tracking-widest pb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>CATALYST ROTATION</span>
            </div>
            <span className="text-slate-600">[{activeQuote + 1} / 04]</span>
          </div>

          {AXIOMS.map((axiom, idx) => (
            <button
              key={axiom.index}
              onClick={() => setActiveQuote(idx)}
              className={`text-left p-4 sm:p-5 2xl:p-6 border transition-all duration-300 cursor-none group relative overflow-hidden ${
                activeQuote === idx
                  ? 'border-white/35 bg-white/[0.04] shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                  : 'border-white/[0.06] bg-transparent hover:border-white/20 hover:bg-white/[0.015]'
              }`}
            >
              {activeQuote === idx && (
                <motion.div
                  key={`progress-${idx}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5.5, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ backgroundColor: axiom.accent }}
                />
              )}

              <div 
                className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                  activeQuote === idx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: axiom.accent }}
              />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 font-mono-tech text-[10px] 2xl:text-xs uppercase tracking-wider">
                    <span className={activeQuote === idx ? 'text-white font-bold' : 'text-slate-500'}>
                      [{axiom.index}]
                    </span>
                    <span className={activeQuote === idx ? 'text-white font-bold' : 'text-slate-400'}>
                      {axiom.title}
                    </span>
                  </div>
                  <div className="font-mono-tech text-xs 2xl:text-sm text-slate-400 truncate max-w-[260px] sm:max-w-sm 2xl:max-w-md">
                    {axiom.quote}
                  </div>
                </div>

                <div className="flex flex-col items-end pl-3">
                  <span className="font-mono text-[9px] 2xl:text-xs text-slate-600 group-hover:text-slate-400">
                    AXIOM
                  </span>
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-1"
                    style={{ backgroundColor: activeQuote === idx ? axiom.accent : 'transparent' }}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 items-center gap-3 font-mono-tech uppercase text-slate-500 pt-3 sm:pt-4 flex-shrink-0 text-[9px] sm:text-[10px] 2xl:text-xs">
        <div>
          <span className="text-slate-400">STAGE: </span>02 // MANIFESTO
        </div>
        <div className="hidden sm:block text-center">
          AUTO-CYCLE ACTIVE • SCROLL OR &darr; TO VIEW WORKS
        </div>
        <div className="hidden sm:block text-right">
          INTEGRITY: 100%
        </div>
        <div className="text-right text-slate-400">
          © 2026 SAIM
        </div>
      </div>

    </section>
  );
}