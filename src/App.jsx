import React, { useState } from 'react';
import PixelLoader from './components/PixelLoader';
import RadarCursor from './components/RadarCursor';
import Hero from './components/Hero';

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <main className="min-h-screen w-screen bg-[#050608] text-white overflow-hidden relative">
      {/* 1. Curtis-Inspired Dot Matrix Radar Cursor */}
      <RadarCursor />

      {/* 2. Acid Green Pixel Dissolve Loader */}
      {!loadingDone && (
        <PixelLoader onComplete={() => setLoadingDone(true)} />
      )}

      {/* 3. Hero Section with Periodic Glitch */}
      <Hero />
    </main>
  );
}