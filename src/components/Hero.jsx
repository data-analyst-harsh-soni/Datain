import React from 'react';
import { ArrowRight, Database, GitBranch, Cpu, ShieldCheck, ExternalLink, Sparkles, FileText, Linkedin, Github } from 'lucide-react';
import ThreeScene from './ThreeScene';

export default function Hero({ onExploreWork }) {
  const quickMetrics = [
    { label: 'Enrollments Analyzed', value: '35M+' },
    { label: 'Automated Tests', value: '143' },
    { label: 'Premium Analyzed', value: '$3.67B' },
    { label: 'Subject Pass Rate', value: '97.3%' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#EEF5FF] via-[#F8FAFC] to-[#FFFFFF]">
      {/* 3D WebGL Background Scene */}
      <ThreeScene />

      {/* Radial Background Atmosphere */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Positioning Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(37,99,235,0.08)]">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span>Analytics Engineer &bull; Data Analyst &bull; Technology Leader</span>
        </div>

        {/* Identity & Main Statement */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 max-w-5xl leading-[1.05] mb-6">
          HARSH SONI
          <span className="block text-gradient mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            BUILDING INTELLIGENCE FROM DATA.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-normal">
          I design scalable analytical systems, cloud data pipelines, and executive intelligence platforms that transform complex data lakes into decisive enterprise advantages.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(37,99,235,0.28)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            data-cursor="EXPLORE"
          >
            <span>Explore 15 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#pillars"
            className="px-6 py-3.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-white font-medium text-sm transition-all duration-200 backdrop-blur-md shadow-sm"
            data-cursor="ARCHITECTURE"
          >
            System Architecture
          </a>
        </div>

        {/* Subtle Profile / Social / Resume Quick Access */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          <a
            href="#resume"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-blue-700 hover:text-blue-800 hover:border-blue-400 text-xs font-mono transition-all backdrop-blur-sm shadow-sm"
            data-cursor="RESUME"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>View Resume</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 text-xs font-mono transition-all backdrop-blur-sm shadow-sm"
            data-cursor="LINKEDIN"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/data-analyst-harsh-soni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 text-xs font-mono transition-all backdrop-blur-sm shadow-sm"
            data-cursor="GITHUB"
          >
            <Github className="w-3.5 h-3.5 text-slate-700" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Dynamic Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          {quickMetrics.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 text-left relative overflow-hidden group bg-white/90 border border-slate-200/80 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all" />
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                {item.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
