import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#F7F4FA] dark:bg-[#0E0B15] text-[#6F6678] dark:text-[#C9BED4] border-t border-[#DED5E8] dark:border-[#342A43] transition-colors duration-300">
      {/* ================================================== */}
      {/* 1. INTEGRATED TOP CTA AREA                         */}
      {/* ================================================== */}
      <div className="bg-white dark:bg-[#15111F] text-[#211A2B] dark:text-[#F5F0FA] border-b border-[#DED5E8] dark:border-[#342A43] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[#211A2B] dark:text-[#F5F0FA]">
              Have a project or opportunity in mind?
            </h3>
            <p className="text-[#6F6678] dark:text-[#9E92AA] text-sm mt-1 leading-relaxed">
              Let's connect and turn data into something useful.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7657E8] to-[#A76BCE] hover:from-[#6746db] hover:to-[#995ac0] text-white font-semibold text-xs shadow-md shadow-[#7657E8]/20 hover:shadow-lg hover:shadow-[#7657E8]/30 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] hover:bg-[#EEE6FF] dark:hover:bg-[#211B2F] text-[#211A2B] dark:text-[#F5F0FA] font-semibold text-xs border border-[#DED5E8] dark:border-[#342A43] transition-all min-h-[44px]"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* 2. MAIN FOOTER CONTENT                             */}
      {/* ================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-12 pb-10 border-b border-[#DED5E8] dark:border-[#342A43]">
          
          {/* Left Block: Brand, Role & Personal Description */}
          <div className="max-w-md text-left">
            <Link 
              to="/" 
              className="font-display font-black text-2xl text-[#211A2B] dark:text-[#F5F0FA] tracking-wider hover:text-[#7657E8] dark:hover:text-[#BDA8FF] transition-colors inline-block"
            >
              HARSH SONI
            </Link>
            <p className="font-mono text-xs text-[#7657E8] dark:text-[#BDA8FF] font-bold uppercase tracking-wider mt-1.5">
              DATA ANALYST • ANALYTICS ENGINEER • TECH LEAD
            </p>
            <p className="text-[#6F6678] dark:text-[#9E92AA] text-xs sm:text-sm mt-3 leading-relaxed">
              Turning complex data into intelligent systems, actionable insights, and decision-ready experiences.
            </p>
          </div>

          {/* Right Block: Connect, Social Channels & Email */}
          <div className="text-left md:text-right flex flex-col items-start md:items-end">
            <span className="font-mono text-[11px] font-bold text-[#93889D] dark:text-[#9E92AA] uppercase tracking-widest block mb-3">
              CONNECT
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#F5F0FA] hover:border-[#7657E8] hover:bg-[#F1ECF6] dark:hover:bg-[#211B2F] transition-all shadow-xs min-h-[44px] min-w-[44px]"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/data-analyst-harsh-soni"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#F5F0FA] hover:border-[#7657E8] hover:bg-[#F1ECF6] dark:hover:bg-[#211B2F] transition-all shadow-xs min-h-[44px] min-w-[44px]"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshnewa@gmail.com"
                className="w-11 h-11 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#F5F0FA] hover:border-[#7657E8] hover:bg-[#F1ECF6] dark:hover:bg-[#211B2F] transition-all shadow-xs min-h-[44px] min-w-[44px]"
                title="Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:harshnewa@gmail.com"
              className="mt-3 text-xs sm:text-sm font-mono text-[#6F6678] dark:text-[#9E92AA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] transition-colors inline-block"
            >
              harshnewa@gmail.com
            </a>
          </div>

        </div>

        {/* ================================================== */}
        {/* 3. BOTTOM SUB-ROW: COPYRIGHT, TECH STACK, BACK TO TOP */}
        {/* ================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-mono text-[#93889D] dark:text-[#9E92AA] text-center sm:text-left">
          <div>
            &copy; 2026 Harsh Soni &bull; Personal Portfolio
          </div>

          <div className="text-[11px] text-[#93889D] dark:text-[#9E92AA]">
            Built with React &bull; Vite &bull; Three.js
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] hover:border-[#7657E8] text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#F5F0FA] flex items-center gap-1.5 transition-all shadow-xs text-xs min-h-[44px]"
            aria-label="Back to top of page"
          >
            <span>Back to top &uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
