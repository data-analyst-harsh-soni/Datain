import React, { useState, useRef } from 'react';
import { Sparkles, Database, BarChart3, Binary, Cpu } from 'lucide-react';

export default function ProfileHero({ size = 'large', className = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const isLarge = size === 'large';
  const imgSizeClass = isLarge 
    ? 'w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80' 
    : 'w-40 h-40 sm:w-48 sm:h-48';

  // Subtle 3D tilt calculation
  const rotateX = isHovered ? -mousePos.y * 14 : 0;
  const rotateY = isHovered ? mousePos.x * 14 : 0;

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none perspective-1000 ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Dynamic Background Glows */}
      <div 
        className="absolute -inset-8 sm:-inset-12 rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-violet-500/25 blur-2xl pointer-events-none transition-all duration-700"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) scale(${isHovered ? 1.08 : 1})`,
        }}
      />

      {/* Outer Rotating Orbital Ring 1 */}
      <div 
        className="absolute w-[124%] h-[124%] rounded-full border border-blue-400/25 pointer-events-none animate-spin-slow transition-transform duration-500"
        style={{
          animationDuration: '32s',
          transform: `rotateX(65deg) rotateY(${mousePos.x * 15}deg)`,
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      </div>

      {/* Outer Rotating Orbital Ring 2 */}
      <div 
        className="absolute w-[138%] h-[138%] rounded-full border border-violet-400/20 pointer-events-none animate-spin-slow transition-transform duration-500"
        style={{
          animationDuration: '44s',
          animationDirection: 'reverse',
          transform: `rotateX(-55deg) rotateY(${mousePos.y * 15}deg)`,
        }}
      >
        <div className="absolute bottom-0 left-1/3 w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
      </div>

      {/* 3D Tilted Photo Frame */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layered Glassmorphic Card Container */}
        <div className="relative p-3 sm:p-4 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
          {/* Subtle Gradient Ring Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-violet-500/20 pointer-events-none -z-10" />

          {/* Actual Profile Photo Container */}
          <div className={`relative ${imgSizeClass} rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200/80 shadow-inner group`}>
            <img
              src="/assets/profile/profile-photo.jpeg"
              alt="Harsh Soni — Data Analyst & Analytics Engineer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle Glass Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/15 pointer-events-none" />
          </div>

          {/* Active Status Badge on Photo */}
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg flex items-center gap-2 text-[11px] font-mono font-semibold text-slate-800 whitespace-nowrap z-20"
            style={{ transform: 'translateZ(25px) translateX(-50%)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide">Open to Opportunities</span>
          </div>
        </div>

        {/* Floating Technology Badges (3D depth layers) */}
        {isLarge && (
          <>
            {/* Power BI Node - Top Right */}
            <div 
              className="hidden sm:flex absolute -top-4 -right-6 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-amber-200 shadow-md items-center gap-1.5 text-xs font-mono font-medium text-amber-900 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px) translateZ(35px)`,
              }}
            >
              <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Power BI</span>
            </div>

            {/* SQL Node - Top Left */}
            <div 
              className="hidden sm:flex absolute -top-3 -left-6 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-blue-200 shadow-md items-center gap-1.5 text-xs font-mono font-medium text-blue-900 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * -22}px, ${mousePos.y * -22}px) translateZ(40px)`,
              }}
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>SQL</span>
            </div>

            {/* Python / dbt Node - Bottom Right */}
            <div 
              className="hidden sm:flex absolute -bottom-4 -right-8 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-violet-200 shadow-md items-center gap-1.5 text-xs font-mono font-medium text-violet-900 transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * 24}px, ${mousePos.y * 24}px) translateZ(30px)`,
              }}
            >
              <Cpu className="w-3.5 h-3.5 text-violet-600" />
              <span>dbt &bull; Python</span>
            </div>

            {/* Global Top 5 Badge - Bottom Left */}
            <div 
              className="hidden sm:flex absolute -bottom-3 -left-8 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg items-center gap-1.5 text-xs font-mono font-semibold transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * 16}px, ${mousePos.y * 16}px) translateZ(45px)`,
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Global Top 5</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
