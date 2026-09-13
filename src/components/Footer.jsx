import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/work' },
    { label: 'Skills', path: '/skills' },
    { label: 'Resume', path: '/resume' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Leadership', path: '/leadership' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="py-14 bg-white border-t border-slate-200 relative z-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-display font-black text-lg text-slate-900 tracking-wider hover:text-blue-600 transition-colors">
              HARSH SONI
            </Link>
            <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mt-1">
              Data Analyst &bull; Analytics Engineer &bull; Technology Leader
            </p>
          </div>

          {/* Page Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/data-analyst-harsh-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshnewa@gmail.com"
              className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Harsh Soni &bull; Personal Portfolio
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center gap-2 transition-all shadow-xs"
            data-cursor="TOP"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
