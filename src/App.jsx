import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-white bg-noise flex flex-col items-center justify-center p-6 selection:bg-[#8b5cf6] selection:text-white">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[var(--accent-cyan)]">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
          <span>INITIALIZING ARCHITECTURE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
          SAIM // CRAFT
        </h1>
        <p className="text-slate-400 font-mono text-xs sm:text-sm">
          Obsidian Cyber-Editorial System • Ready for Phase 1
        </p>
      </div>
    </div>
  );
}