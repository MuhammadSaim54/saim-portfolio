import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerDownLeft, Send, Copy, Check, Terminal, Radio, ExternalLink } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export default function Contact({ onBack, onOpenMenu }) {
  const [pktTime, setPktTime] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmissionStatus, setTransmissionStatus] = useState('IDLE'); // IDLE | TRANSMITTING | SENT

  const EMAIL_ADDRESS = "saim.frontend@gmail.com";

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

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playChirp();
    setTransmissionStatus('TRANSMITTING');

    setTimeout(() => {
      sound.playStageTransition();
      setTransmissionStatus('SENT');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setTransmissionStatus('IDLE'), 4000);
    }, 1200);
  };

  return (
    <section className="relative h-screen h-[100dvh] w-screen bg-[#050608] text-[#c9cbcf] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-10 2xl:p-16 select-none">
      
      {/* Editorial Vertical Columns with Crimson Accent Markers */}
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

      {/* Atmospheric Background Watermark */}
      <div className="absolute left-4 lg:left-12 bottom-12 pointer-events-none font-display text-[26vw] sm:text-[20vw] 2xl:text-[18vw] leading-none text-white/[0.015] font-black z-0 select-none">
        04
      </div>

      {/* Top Editorial Bar */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-5 items-center gap-4 font-mono-tech uppercase tracking-widest text-slate-500 pb-3 sm:pb-4 flex-shrink-0 text-[10px] sm:text-xs 2xl:text-sm">
        <div className="flex items-center gap-2 text-white">
          <button 
            onClick={() => {
              sound.playClick();
              onBack();
            }}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-none"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
            <span className="font-bold tracking-[0.2em] text-white">STAGE 03 // WORKS</span>
          </button>
        </div>

        <div className="hidden sm:block">
          <span>COMMS — <span className="text-white">TRANSMISSION TERMINAL</span></span>
        </div>

        <div className="hidden sm:block">
          <div>LAHORE, PK</div>
          <div className="text-white">{pktTime || '12:12'} PKT</div>
        </div>

        <div className="hidden sm:block text-slate-500">
          <div>STAGE: [04 / 04]</div>
          <div className="text-emerald-400">STATUS: ACTIVE</div>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={onOpenMenu}
            className="px-2.5 py-1 2xl:px-4 2xl:py-1.5 border border-white/20 text-white hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-none text-[10px] 2xl:text-xs"
          >
            [ MENU ]
          </button>
        </div>
      </div>

      {/* Center Stage: Full Fluid Ultra-Wide Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 2xl:gap-24 items-center my-auto flex-1 min-h-0 w-full py-2">
        
        {/* Left Column: Heading, Scope & Direct Protocol */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 2xl:space-y-12">
          
          <div className="space-y-3 2xl:space-y-6">
            <div className="inline-block px-3 py-1 bg-emerald-400 text-black font-mono-tech text-[10px] sm:text-xs 2xl:text-sm font-bold tracking-widest uppercase">
              // TRANSMISSION PROTOCOL
            </div>

            <h2 className="text-[11vw] sm:text-[7.5vw] lg:text-[5vw] 2xl:text-[5.5vw] font-display tracking-tight text-white uppercase leading-[0.85] select-none">
              INITIATE CONTACT
            </h2>

            <p className="text-xs sm:text-sm 2xl:text-xl font-mono-tech text-slate-400 max-w-xl 2xl:max-w-3xl leading-relaxed">
              Have an ambitious digital platform to architect, an enterprise front-end to engineer, or looking to collaborate? Transmit payload directly to terminal.
            </p>
          </div>

          {/* Direct Clipboard Protocol Capsule */}
          <div className="space-y-2 2xl:space-y-3">
            <span className="text-[10px] 2xl:text-xs font-mono-tech text-slate-500 uppercase tracking-widest">
              DISPATCH CHANNEL FREQUENCY:
            </span>
            <div
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 p-3.5 sm:p-5 2xl:p-6 border border-white/20 hover:border-emerald-400/80 bg-white/[0.02] hover:bg-emerald-400/[0.04] transition-all cursor-none group max-w-full"
            >
              <Terminal className="w-4 h-4 2xl:w-6 2xl:h-6 text-emerald-400 flex-shrink-0" />
              <span className="font-mono-tech text-xs sm:text-sm 2xl:text-lg text-white tracking-wider truncate">
                {EMAIL_ADDRESS}
              </span>
              <div className="ml-auto pl-4 flex items-center gap-1.5 text-[10px] 2xl:text-xs font-mono-tech text-emerald-400">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                    <span>COPIED // READY</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 opacity-60 group-hover:opacity-100" />
                    <span className="hidden sm:inline opacity-60 group-hover:opacity-100">CLICK TO COPY</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Social Radar Pills */}
          <div className="flex items-center gap-2 sm:gap-3 2xl:gap-4 flex-wrap pt-1">
            {[
              { label: "GITHUB", link: "https://github.com" },
              { label: "LINKEDIN", link: "https://linkedin.com" },
              { label: "TWITTER / X", link: "https://x.com" }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-3 py-1.5 2xl:px-5 2xl:py-2.5 border border-white/10 hover:border-emerald-400 bg-white/[0.01] hover:bg-white/[0.03] text-slate-300 hover:text-white font-mono-tech text-[10px] 2xl:text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-none"
              >
                <span>{soc.label}</span>
                <ExternalLink className="w-3 h-3 2xl:w-4 2xl:h-4 text-slate-500" />
              </a>
            ))}
          </div>

        </div>

        {/* Right Column: Tactical Console */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end">
          <div className="w-full max-w-full lg:max-w-xl 2xl:max-w-2xl border border-white/[0.08] p-5 sm:p-7 2xl:p-10 bg-white/[0.015] backdrop-blur-md space-y-4 sm:space-y-6 2xl:space-y-8">
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 2xl:pb-4 text-[10px] 2xl:text-xs font-mono-tech text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-emerald-400 animate-pulse" />
                <span>TERMINAL_01 // SECURE DISPATCH</span>
              </span>
              <span className="text-emerald-400 font-bold">NODE: ONLINE</span>
            </div>

            <form onSubmit={handleTransmit} className="space-y-3.5 sm:space-y-5 2xl:space-y-6">
              
              <div className="space-y-1.5">
                <label className="text-[10px] 2xl:text-xs font-mono-tech uppercase text-slate-400 tracking-wider">
                  IDENTIFIER / NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="EX: CYBER ARCHITECT"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => sound.playClick()}
                  className="w-full bg-white/[0.03] border border-white/15 focus:border-emerald-400 p-2.5 sm:p-3 2xl:p-4 text-xs sm:text-sm 2xl:text-base font-mono-tech text-white outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] 2xl:text-xs font-mono-tech uppercase text-slate-400 tracking-wider">
                  CONTACT FREQUENCY / EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => sound.playClick()}
                  className="w-full bg-white/[0.03] border border-white/15 focus:border-emerald-400 p-2.5 sm:p-3 2xl:p-4 text-xs sm:text-sm 2xl:text-base font-mono-tech text-white outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] 2xl:text-xs font-mono-tech uppercase text-slate-400 tracking-wider">
                  SIGNAL PAYLOAD / MESSAGE
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Brief narrative of project vision, scope, or collaboration..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => sound.playClick()}
                  className="w-full bg-white/[0.03] border border-white/15 focus:border-emerald-400 p-2.5 sm:p-3 2xl:p-4 text-xs sm:text-sm 2xl:text-base font-mono-tech text-white outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={transmissionStatus !== 'IDLE'}
                className="w-full inline-flex items-center justify-center gap-2 p-3.5 sm:p-4 2xl:p-5 bg-white text-black font-mono-tech text-xs 2xl:text-sm font-bold tracking-widest uppercase hover:bg-emerald-400 hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-none disabled:opacity-50"
              >
                {transmissionStatus === 'IDLE' && (
                  <>
                    <Send className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                    <span>TRANSMIT SIGNAL</span>
                  </>
                )}
                {transmissionStatus === 'TRANSMITTING' && (
                  <span>ENCRYPTING &amp; DISPATCHING...</span>
                )}
                {transmissionStatus === 'SENT' && (
                  <span>SIGNAL CONFIRMED // DISPATCH COMPLETE</span>
                )}
              </button>

            </form>

          </div>
        </div>

      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 items-center gap-3 font-mono-tech uppercase text-slate-500 pt-3 sm:pt-4 flex-shrink-0 text-[9px] sm:text-[10px] 2xl:text-xs">
        <div>
          <span className="text-slate-400">STAGE: </span>04 // CONTACT
        </div>
        <div className="hidden sm:block text-center">
          SCROLL UP OR &uarr; TO REVIEW WORKS
        </div>
        <div className="hidden sm:block text-right">
          AVAILABILITY: OPEN
        </div>
        <div className="text-right text-slate-400">
          © 2026 SAIM
        </div>
      </div>

    </section>
  );
}