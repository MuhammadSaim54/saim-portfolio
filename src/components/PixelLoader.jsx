import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLS = 16;
const ROWS = 10;

export default function PixelLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [dissolve, setDissolve] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setDissolve(true), 150);
          setTimeout(() => {
            setHidden(true);
            onComplete?.();
          }, 1000);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[100] h-full w-full pointer-events-none select-none overflow-hidden">
      {/* 160-Block Acid Green Pixel Mosaic Curtain */}
      <div className="absolute inset-0 grid grid-cols-16 grid-rows-10 w-full h-full">
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const centerDist = Math.hypot(col - COLS / 2, row - ROWS / 2);
          const noise = ((i * 37) % 11) / 25;
          const delay = dissolve ? (centerDist * 0.035 + noise) : 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 1 }}
              animate={dissolve ? { opacity: 0, scale: 0.85 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay, ease: [0.33, 1, 0.68, 1] }}
              className="bg-[#a3e635] w-full h-full border-[0.5px] border-[#84cc16]/30"
            />
          );
        })}
      </div>

      {/* Center Tactical HUD (Fades out when dissolve starts) */}
      <AnimatePresence>
        {!dissolve && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            {/* Perimeter Tactical Borders */}
            <div className="absolute inset-3 sm:inset-6 border border-black/20 pointer-events-none p-2 flex flex-col justify-between">
              <div className="flex justify-between font-mono text-[9px] sm:text-[11px] font-bold text-black/60 uppercase">
                <span>[ REC // 2026 ]</span>
                <span>SYS.GEO // 31°14'N</span>
              </div>
              <div className="flex justify-between font-mono text-[9px] sm:text-[11px] font-bold text-black/60 uppercase">
                <span>STAGE: CORE_INIT</span>
                <span>STATUS: SYNCED</span>
              </div>
            </div>

            {/* Center Box Crosshairs */}
            <div className="relative w-36 h-36 sm:w-52 sm:h-52 border border-black/25 flex flex-col items-center justify-center">
              <span className="absolute -top-2 -left-2 text-xs sm:text-sm font-mono font-bold text-black">+</span>
              <span className="absolute -top-2 -right-2 text-xs sm:text-sm font-mono font-bold text-black">+</span>
              <span className="absolute -bottom-2 -left-2 text-xs sm:text-sm font-mono font-bold text-black">+</span>
              <span className="absolute -bottom-2 -right-2 text-xs sm:text-sm font-mono font-bold text-black">+</span>

              <div className="text-3xl sm:text-5xl font-mono font-black tracking-tighter text-black">
                {progress}%
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-black/70 mt-1 uppercase">
                LOADING ATELIER
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}