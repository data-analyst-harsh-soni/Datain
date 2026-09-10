import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200 relative z-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Positioning */}
        <div className="text-center sm:text-left">
          <div className="font-display font-bold text-base text-slate-900 tracking-wider mb-1">
            HARSH SONI
          </div>
          <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            Analytics Engineer • Data Analyst • Technology Leader
          </p>
        </div>

        {/* Copyright */}
        <div className="font-mono text-[11px] text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Harsh Soni. Built with React, Three.js &amp; Tailwind CSS.
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center gap-2 transition-all font-mono text-[11px] shadow-xs"
          data-cursor="TOP"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
