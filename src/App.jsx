import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PixelLoader from './components/PixelLoader';
import RadarCursor from './components/RadarCursor';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Works from './components/Works';
import MenuOverlay from './components/MenuOverlay';
import { sound } from './utils/soundEngine';

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [currentStage, setCurrentStage] = useState(0); // 0: Hero, 1: Manifesto, 2: Works
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const isTransitioning = useRef(false);

  // Sync sound engine state
  const handleToggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    sound.toggle(nextState);
    if (nextState) sound.playClick();
  };

  const goToStage = (targetStage) => {
    if (isTransitioning.current || targetStage === currentStage) return;
    if (targetStage < 0 || targetStage > 2) return;
    
    isTransitioning.current = true;
    sound.playStageTransition();
    setCurrentStage(targetStage);
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 900);
  };

  const handleOpenMenu = () => {
    sound.playChirp();
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    sound.playClick();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // 1. Mouse Wheel Navigation
    const handleWheel = (e) => {
      if (!loadingDone || isTransitioning.current || isMenuOpen) return;
      const threshold = 35;
      if (e.deltaY > threshold && currentStage < 2) {
        goToStage(currentStage + 1);
      } else if (e.deltaY < -threshold && currentStage > 0) {
        goToStage(currentStage - 1);
      }
    };

    // 2. Keyboard Navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseMenu();
        return;
      }
      if (!loadingDone || isTransitioning.current || isMenuOpen) return;

      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        if (currentStage < 2) goToStage(currentStage + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        if (currentStage > 0) goToStage(currentStage - 1);
      }
    };

    // 3. Touch Gestures for Mobile
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (!loadingDone || isTransitioning.current || isMenuOpen) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (deltaY > 50 && currentStage < 2) {
        goToStage(currentStage + 1);
      } else if (deltaY < -50 && currentStage > 0) {
        goToStage(currentStage - 1);
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
  }, [loadingDone, currentStage, isMenuOpen]);

  return (
    <main className="fixed inset-0 h-screen h-[100dvh] w-screen bg-[#050608] text-white overflow-hidden select-none">
      {/* 1. Purple Phosphor Radar Cursor */}
      <RadarCursor />

      {/* 2. Acid Green Pixel Mosaic Dissolve Loader */}
      {!loadingDone && (
        <PixelLoader onComplete={() => {
          sound.playChirp();
          setLoadingDone(true);
        }} />
      )}

      {/* 3. Tactical Fullscreen Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        onSelectStage={goToStage}
        currentStage={currentStage}
        soundOn={soundOn}
        onToggleSound={handleToggleSound}
      />

      {/* 4. 3-Stage Navigation Deck */}
      <AnimatePresence mode="wait">
        {currentStage === 0 && (
          <motion.div
            key="stage-hero"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)', scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero 
              onNavigate={() => goToStage(1)} 
              onOpenMenu={handleOpenMenu} 
              soundOn={soundOn}
              onToggleSound={handleToggleSound}
            />
          </motion.div>
        )}

        {currentStage === 1 && (
          <motion.div
            key="stage-manifesto"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Manifesto 
              onNext={() => goToStage(2)} 
              onPrev={() => goToStage(0)} 
              onOpenMenu={handleOpenMenu} 
            />
          </motion.div>
        )}

        {currentStage === 2 && (
          <motion.div
            key="stage-works"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 1.02 }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Works 
              onBack={() => goToStage(1)} 
              onOpenMenu={handleOpenMenu} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent 3-Stage Indicator Stepper */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 pointer-events-none">
        {[0, 1, 2].map((stg) => (
          <button
            key={stg}
            onClick={() => {
              sound.playClick();
              goToStage(stg);
            }}
            aria-label={`Jump to Stage ${stg + 1}`}
            className={`w-1 rounded-full transition-all duration-500 pointer-events-auto cursor-none ${
              currentStage === stg
                ? 'bg-emerald-400 h-8 shadow-[0_0_8px_#34d399]'
                : 'bg-white/20 h-4 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </main>
  );
}