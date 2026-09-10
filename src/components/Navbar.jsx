import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Layers, Cpu, Award, Mail, FileText } from 'lucide-react';

export default function Navbar({ activeSection = 'hero' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects', icon: Layers },
    { label: 'Pillars', href: '#pillars', icon: Terminal },
    { label: 'Stack', href: '#stack', icon: Cpu },
    { label: 'Resume', href: '#resume', icon: FileText },
    { label: 'Leadership', href: '#leadership', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ' +
        (scrolled ? 'py-3 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'py-5 bg-transparent')
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          data-cursor="HOME"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-blue-500/40 group-hover:border-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 bg-white shrink-0 shadow-sm">
            <img
              src="/assets/profile/profile-photo.jpeg"
              alt="Harsh Soni"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
              HARSH SONI
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              Analytics &amp; BI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/85 backdrop-blur-md border border-slate-200/90 p-1.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={
                  'px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ' +
                  (isActive
                    ? 'bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-violet-500/15 text-blue-700 font-semibold border border-blue-300/60 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80')
                }
                data-cursor={item.label.toUpperCase()}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            data-cursor="CONNECT"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm font-medium text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                >
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-md shadow-blue-500/25"
            >
              <span>Let's Build Something Intelligent</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
