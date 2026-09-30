import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PixelLoader from './components/PixelLoader';
import RadarCursor from './components/RadarCursor';
import Hero from './components/Hero';
import Works from './components/Works';

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [currentStage, setCurrentStage] = useState(0); // 0: Hero, 1: Works
  const isTransitioning = useRef(false);

  const goToStage = (targetStage) => {
    if (isTransitioning.current || targetStage === currentStage) return;
    isTransitioning.current = true;
    setCurrentStage(targetStage);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1000);
  };

  useEffect(() => {
    // 1. Mouse Wheel Navigation
    const handleWheel = (e) => {
      if (!loadingDone || isTransitioning.current) return;
      const threshold = 30;
      if (e.deltaY > threshold && currentStage < 1) {
        goToStage(1);
      } else if (e.deltaY < -threshold && currentStage > 0) {
        goToStage(0);
      }
    };

    // 2. Keyboard Arrow Keys Navigation
    const handleKeyDown = (e) => {
      if (!loadingDone || isTransitioning.current) return;

      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        if (currentStage < 1) {
          goToStage(1);
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        if (currentStage > 0) {
          goToStage(0);
        }
      }
    };

    // 3. Touch Gesture Navigation for Mobile
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (!loadingDone || isTransitioning.current) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (deltaY > 45 && currentStage < 1) {
        goToStage(1);
      } else if (deltaY < -45 && currentStage > 0) {
        goToStage(0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [loadingDone, currentStage]);

  return (
    <main className="fixed inset-0 h-screen h-[100dvh] w-screen bg-[#050608] text-white overflow-hidden select-none">
      {/* 1. Purple Phosphor Radar Cursor */}
      <RadarCursor />

      {/* 2. Acid Green Pixel Mosaic Dissolve Loader */}
      {!loadingDone && (
        <PixelLoader onComplete={() => setLoadingDone(true)} />
      )}

      {/* 3. Stage Navigation Deck (Fixed 100vh Transition) */}
      <AnimatePresence mode="wait">
        {currentStage === 0 && (
          <motion.div
            key="stage-hero"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)', scale: 0.98 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero onNavigate={() => goToStage(1)} />
          </motion.div>
        )}

        {currentStage === 1 && (
          <motion.div
            key="stage-works"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 1.02 }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Works onBack={() => goToStage(0)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Side Stage Indicator Pill */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pointer-events-none">
        <button
          onClick={() => goToStage(0)}
          className={`w-1 rounded-full transition-all duration-500 pointer-events-auto ${
            currentStage === 0 ? 'bg-emerald-400 h-8 shadow-[0_0_8px_#34d399]' : 'bg-white/20 h-5 hover:bg-white/50'
          }`}
          aria-label="Navigate to Hero stage"
        />
        <button
          onClick={() => goToStage(1)}
          className={`w-1 rounded-full transition-all duration-500 pointer-events-auto ${
            currentStage === 1 ? 'bg-emerald-400 h-8 shadow-[0_0_8px_#34d399]' : 'bg-white/20 h-5 hover:bg-white/50'
          }`}
          aria-label="Navigate to Works stage"
        />
      </div>
    </main>
  );
}