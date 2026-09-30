import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioImg from '../assets/images/portfolio.png';
import { sound } from '../utils/soundEngine';

export default function Hero({ onNavigate, onOpenMenu, soundOn, onToggleSound }) {
  const [pktTime, setPktTime] = useState('');

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
    <section className="relative h-screen h-[100dvh] w-screen bg-[#050608] text-[#c9cbcf] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-10 2xl:p-16 select-none">
      
      {/* Editorial 5-Column Grid */}
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

      {/* Top Editorial Bar */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-5 items-center gap-4 font-mono-tech uppercase tracking-widest text-slate-500 pb-3 sm:pb-4 flex-shrink-0 text-[10px] sm:text-xs 2xl:text-sm">
        
        {/* Col 1: Identity */}
        <div className="flex items-center gap-2 text-white">
          <span className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 border border-emerald-400 rotate-45 inline-block" />
          <span className="font-bold tracking-[0.2em]">SAIM</span>
        </div>

        {/* Col 2: Audio Toggle Button */}
        <div className="hidden sm:block">
          <button 
            onClick={onToggleSound}
            className="hover:text-emerald-400 transition-colors cursor-none uppercase"
          >
            SOUND — <span className={soundOn ? 'text-white font-bold' : 'text-rose-500 font-bold'}>{soundOn ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Col 3: Coordinates & Live Time */}
        <div className="hidden sm:block">
          <div>LAHORE, PK</div>
          <div className="text-white">{pktTime || '11:40'} PKT</div>
        </div>

        {/* Col 4: Lat/Long Geolocation */}
        <div className="hidden sm:block text-slate-500">
          <div>31°14'32.0"N</div>
          <div>74°09'55.2"E</div>
        </div>

        {/* Col 5: Menu Toggle */}
        <div className="flex justify-end">
          <button 
            onClick={onOpenMenu}
            className="px-2.5 py-1 2xl:px-4 2xl:py-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-none text-[10px] 2xl:text-xs"
          >
            [ MENU ]
          </button>
        </div>
      </div>

      {/* Center Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 2xl:gap-20 items-center my-auto flex-1 min-h-0 w-full py-2">
        <div className="lg:col-span-5 space-y-4 sm:space-y-6 2xl:space-y-10 z-20">
          <div className="space-y-1.5 font-mono-tech text-slate-400 leading-relaxed max-w-sm 2xl:max-w-lg text-[11px] sm:text-xs 2xl:text-base">
            <div className="text-[10px] 2xl:text-xs text-slate-500 uppercase tracking-widest pb-0.5">
              // CRAFT &amp; PHILOSOPHY
            </div>
            <p>
              I am a front-end developer passionate about <span className="text-rose-400 italic font-semibold">Art</span> and{' '}
              <span className="text-emerald-400 font-bold">&lt;technology/&gt;</span>. 
              Engineering bespoke digital architectures with uncompromising design taste and fluid kinetic physics.
            </p>
          </div>

          <div className="space-y-1">
            <div className="inline-block px-2.5 py-0.5 2xl:px-3.5 2xl:py-1 bg-emerald-400 text-black font-mono-tech font-bold tracking-widest uppercase text-[10px] 2xl:text-xs">
              FRONT-END DEVELOPER
            </div>
            
            <div className="font-display tracking-tight text-white leading-[0.82] select-none text-[20vw] sm:text-[14vw] lg:text-[10vw] 2xl:text-[11vw]">
              <motion.div 
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                SAIM
              </motion.div>
            </div>
          </div>
        </div>

        {/* Center Anonymous Silhouette */}
        <div className="lg:col-span-4 relative flex items-center justify-center h-full max-h-[46vh] sm:max-h-[58vh] lg:max-h-[70vh] 2xl:max-h-[78vh] min-h-0">
          <div className="relative h-full w-auto aspect-[3/4] flex items-center justify-center overflow-visible">
            <img 
              src={portfolioImg} 
              alt="Anonymous Developer"
              className="w-full h-full object-cover object-top mix-blend-luminosity brightness-95 chromatic-glitch select-none"
            />
            <div className="absolute inset-0 crt-matrix pointer-events-none opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#050608_100%)] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050608] to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display tracking-widest text-white/90 select-none text-2xl 2xl:text-4xl">
              '26
            </div>
          </div>
        </div>

        {/* Right Editorial Sidebar */}
        <div className="lg:col-span-3 hidden lg:flex flex-col justify-between items-end h-full text-right font-mono-tech uppercase tracking-widest py-2 text-[10px] 2xl:text-xs text-slate-500">
          <div className="space-y-1">
            <div className="text-white font-bold text-xs 2xl:text-sm">EDITION // 01</div>
            <div>FLAGSHIP REPO</div>
          </div>

          <div 
            onClick={() => {
              sound.playClick();
              onNavigate();
            }}
            className="flex flex-col items-center gap-4 cursor-none group"
          >
            <span className="[writing-mode:vertical-rl] text-slate-400 group-hover:text-emerald-400 transition-colors tracking-[0.3em]">
              SCROLL DOWN
            </span>
            <span className="w-1.5 h-6 2xl:h-9 bg-gradient-to-b from-emerald-400 to-transparent animate-pulse group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 items-center gap-3 font-mono-tech uppercase text-slate-500 pt-3 sm:pt-4 flex-shrink-0 text-[9px] sm:text-[10px] 2xl:text-xs">
        <div className="truncate">
          <span className="text-slate-400">SPEC: </span>REACT 19 • VITE • AUDIO ENGINE
        </div>
        <div className="hidden sm:block text-center">
          <span className="text-emerald-400">● </span>AVAILABLE FOR CONTRACTS
        </div>
        <div className="hidden sm:block text-right">
          LATENCY: &lt;10MS
        </div>
        <div className="text-right text-slate-400">
          © 2026 SAIM
        </div>
      </div>

    </section>
  );
}