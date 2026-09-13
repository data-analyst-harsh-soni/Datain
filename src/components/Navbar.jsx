import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, Home, User, Layers, Cpu, 
  FileText, Trophy, Shield, Mail, Sun, Moon 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2.5 bg-[#F7F4FA]/90 dark:bg-[#0E0B15]/90 backdrop-blur-xl border-b border-[#DED5E8]/80 dark:border-[#342A43]/80 shadow-xs' 
          : 'py-3.5 sm:py-4 bg-[#F7F4FA]/75 dark:bg-[#0E0B15]/75 backdrop-blur-md border-b border-[#DED5E8]/40 dark:border-[#342A43]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Personal Avatar */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7657E8] rounded-lg p-1"
          data-cursor="HOME"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border-2 border-[#7657E8]/40 group-hover:border-[#7657E8] group-hover:shadow-[0_0_15px_rgba(118,87,232,0.35)] transition-all duration-300 bg-white dark:bg-[#15111F] shrink-0 shadow-sm">
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
            <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-[#211A2B] dark:text-[#F5F0FA] group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-colors">
              HARSH SONI
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#6F6678] dark:text-[#9E92AA] uppercase">
              Data Analyst &bull; BI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-white/85 dark:bg-[#15111F]/85 backdrop-blur-md border border-[#DED5E8] dark:border-[#342A43] p-1.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
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
                    ? 'bg-gradient-to-r from-[#7657E8]/15 via-[#A76BCE]/15 to-[#C7B6F7]/15 text-[#7657E8] dark:text-[#BDA8FF] font-semibold border border-[#7657E8]/30 dark:border-[#7657E8]/40 shadow-xs'
                    : 'text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA] hover:bg-[#F1ECF6]/80 dark:hover:bg-[#211B2F]/80')
                }
                data-cursor={item.label.toUpperCase()}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[#DED5E8] dark:border-[#342A43] bg-white/80 dark:bg-[#15111F]/80 text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8]/50 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#7657E8]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-[#7657E8] hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7657E8] to-[#A76BCE] hover:from-[#6746db] hover:to-[#995ac0] text-white shadow-md shadow-[#7657E8]/20 hover:shadow-lg hover:shadow-[#7657E8]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            data-cursor="CONNECT"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/90 dark:bg-[#15111F]/90 border border-[#DED5E8] dark:border-[#342A43] text-[#6F6678] dark:text-[#C9BED4] shadow-xs focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#7657E8]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/90 dark:bg-[#15111F]/90 border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] shadow-xs focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Compact Floating Menu (Dropdown Card) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-4 mt-2 w-64 rounded-2xl bg-white/95 dark:bg-[#15111F]/95 backdrop-blur-xl border border-[#DED5E8] dark:border-[#342A43] p-3 shadow-2xl transition-all z-50 animate-fade-in">
          <div className="flex flex-col space-y-1">
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
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all ' +
                    (isActive
                      ? 'bg-[#F1ECF6] dark:bg-[#211B2F] border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] font-semibold'
                      : 'bg-transparent border-transparent text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA] hover:bg-[#F1ECF6]/60 dark:hover:bg-[#1B1627]')
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={'w-4 h-4 ' + (isActive ? 'text-[#7657E8] dark:text-[#BDA8FF]' : 'text-[#93889D] dark:text-[#9E92AA]')} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7657E8] dark:bg-[#BDA8FF]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-2 mt-1 border-t border-[#DED5E8] dark:border-[#342A43]">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#7657E8] to-[#A76BCE] text-white font-semibold text-xs shadow-md shadow-[#7657E8]/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
