import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, Home, User, Layers, Cpu, 
  FileText, Trophy, Shield, Mail 
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track window scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: User },
    { label: 'Projects', path: '/work', icon: Layers },
    { label: 'Skills', path: '/skills', icon: Cpu },
    { label: 'Resume', path: '/resume', icon: FileText },
    { label: 'Achievements', path: '/achievements', icon: Trophy },
    { label: 'Leadership', path: '/leadership', icon: Shield },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <header 
      className={
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ' +
        (scrolled 
          ? 'py-2.5 bg-white/92 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]' 
          : 'py-4 sm:py-5 bg-transparent')
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Personal Avatar */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          data-cursor="HOME"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border-2 border-blue-500/40 group-hover:border-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 bg-white shrink-0 shadow-sm">
            <img
              src="/assets/profile/profile-photo.jpeg"
              alt="Harsh Soni"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
              HARSH SONI
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              Data Analyst &bull; BI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-white/90 backdrop-blur-md border border-slate-200/90 p-1.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {navItems.map((item) => {
            const isWorkActive = item.path === '/work' && location.pathname.startsWith('/work');
            const isActive = location.pathname === item.path || isWorkActive;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={
                  'px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all duration-200 ' +
                  (isActive
                    ? 'bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-violet-500/15 text-blue-700 font-semibold border border-blue-300/60 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80')
                }
                data-cursor={item.label.toUpperCase()}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            data-cursor="CONNECT"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] bg-white/98 backdrop-blur-2xl border-b border-slate-200 p-5 shadow-2xl transition-all max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isWorkActive = item.path === '/work' && location.pathname.startsWith('/work');
              const isActive = location.pathname === item.path || isWorkActive;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    'flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ' +
                    (isActive
                      ? 'bg-blue-50/80 border-blue-300 text-blue-700 font-semibold'
                      : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/40')
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className={'w-4 h-4 ' + (isActive ? 'text-blue-600' : 'text-slate-500')} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-md shadow-blue-500/25"
            >
              <span>Get in Touch Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
