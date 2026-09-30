import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, ArrowUpRight, Radio, ExternalLink } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export default function MenuOverlay({
  isOpen,
  onClose,
  onSelectStage,
  currentStage,
  soundOn,
  onToggleSound
}) {
  if (!isOpen) return null;

  const STAGES = [
    { id: 0, title: "HERO - IDENTITY", desc: "Front-end engineering persona, geo coordinates & radar matrix" },
    { id: 1, title: "MANIFESTO - MINDSET", desc: "Core philosophies, inspirational axioms & drive" },
    { id: 2, title: "WORKS - ARCHIVE", desc: "9 live verified production platforms (Kinesis, Technova, AlQuran...)" },
    { id: 3, title: "TRANSMISSION - CONTACT", desc: "Direct communication terminal, email protocol & encrypted signal dispatch" }
  ];

  const SOCIALS = [
    { label: "GITHUB", link: "https://github.com/MuhammadSaim54" },
    { label: "DIRECT EMAIL", link: "mailto:saim@example.com" }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[120] bg-[#050608]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 lg:p-12 select-none cursor-none"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 border border-emerald-400 rotate-45" />
            <span className="font-mono-tech text-xs tracking-[0.25em] text-white font-bold">
              NAVIGATION SYSTEM // ATELIER
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                onToggleSound();
              }}
              className="flex items-center gap-2 px-3 py-1 border border-white/20 hover:border-emerald-400 text-white font-mono-tech text-[10px] uppercase cursor-none transition-colors"
            >
              {soundOn ? (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span>SOUND: {soundOn ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 border border-white/20 hover:border-rose-500 text-white hover:text-rose-500 transition-colors cursor-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Stages Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="font-mono-tech text-[10px] text-slate-500 uppercase tracking-widest">
              // SELECT VIEWPORT DESTINATION
            </div>

            {STAGES.map((stg) => (
              <div
                key={stg.id}
                onClick={() => {
                  sound.playStageTransition();
                  onSelectStage(stg.id);
                  onClose();
                }}
                className={`group p-4 sm:p-6 border transition-all duration-300 cursor-none ${
                  currentStage === stg.id
                    ? 'border-emerald-400/50 bg-emerald-400/5'
                    : 'border-white/[0.06] hover:border-white/25 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-display text-2xl sm:text-4xl lg:text-5xl text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                      {stg.title}
                    </div>
                    <div className="font-mono-tech text-[10px] sm:text-xs text-slate-400">
                      {stg.desc}
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Socials & Telemetry Info */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div className="space-y-3">
              <div className="font-mono-tech text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>DIRECT CHANNELS</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {SOCIALS.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2.5 border border-white/[0.08] hover:border-emerald-400 text-slate-300 hover:text-white font-mono-tech text-[10px] tracking-wider uppercase transition-colors flex items-center justify-between cursor-none"
                  >
                    <span>{soc.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="font-mono-tech text-[10px] text-slate-500 space-y-1">
              <div>LOCATION: LAHORE, PK</div>
              <div>COORDINATES: 31°14'N 74°09'E</div>
              <div className="text-emerald-400">STATUS: OPEN FOR CONTRACTS</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center border-t border-white/[0.08] pt-4 font-mono-tech text-[10px] text-slate-500 uppercase">
          <span>PRESS [ESC] TO CLOSE</span>
          <span>© 2026 SAIM ATELIER</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}