import React from 'react';

export default function IdentityLogo() {
  return (
    <div className="flex items-center gap-2 select-none group cursor-pointer">
      {/* Neon Cyber Minimal Icon */}
      <span className="w-2.5 h-2.5 border-l-2 border-t-2 border-emerald-400 rotate-45 inline-block group-hover:scale-125 transition-transform" />
      <span className="font-mono-tech font-bold text-xs tracking-[0.25em] uppercase text-white group-hover:text-emerald-400 transition-colors">
        SAIM
      </span>
    </div>
  );
}