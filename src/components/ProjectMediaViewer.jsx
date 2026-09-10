import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Sun, Moon, ShieldAlert, Play, Pause } from 'lucide-react';

export default function ProjectMediaViewer({ project }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbRailRef = useRef(null);
  const touchStartX = useRef(null);

  const assets = project.assets || [];
  const totalAssets = assets.length;

  const nextAsset = () => {
    setCurrentIdx((prev) => (prev + 1) % totalAssets);
  };

  const prevAsset = () => {
    setCurrentIdx((prev) => (prev - 1 + totalAssets) % totalAssets);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextAsset();
    } else if (diff < -50) {
      prevAsset();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextAsset();
      } else if (e.key === 'ArrowLeft') {
        prevAsset();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalAssets, isFullscreen]);

  useEffect(() => {
    let timer;
    if (isPlaying && totalAssets > 1) {
      timer = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % totalAssets);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalAssets]);

  useEffect(() => {
    if (thumbRailRef.current && thumbRailRef.current.children[currentIdx]) {
      thumbRailRef.current.children[currentIdx].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIdx]);

  if (totalAssets === 0) return null;

  const activeItem = assets[currentIdx];
  const displayUrl = isLightMode && activeItem?.lightUrl ? activeItem.lightUrl : activeItem?.url;

  const containerClass = isFullscreen
    ? 'fixed inset-0 z-50 rounded-none border-none bg-slate-950 flex flex-col'
    : 'relative rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col w-full shadow-xl';

  return (
    <div className={containerClass}>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200 z-10">
        <div className="flex items-center gap-3">
          {project.isConfidentialDataset && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-400/40 text-[10px] font-mono text-amber-800 font-bold uppercase">
              <ShieldAlert className="w-3 h-3 text-amber-600" />
              <span>CONFIDENTIAL / PII MASKED</span>
            </span>
          )}

          <span className="font-display font-semibold text-sm text-slate-800 truncate max-w-sm sm:max-w-md">
            {activeItem?.title || project.title}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2.5">
          {project.hasThemeToggle && (
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shadow-xs"
              title="Toggle Dashboard Light/Dark UI"
            >
              {isLightMode ? <Moon className="w-3.5 h-3.5 text-blue-600" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              <span className="hidden sm:inline">{isLightMode ? 'Light UI' : 'Dark UI'}</span>
            </button>
          )}

          {totalAssets > 1 && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
              title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-blue-600" /> : <Play className="w-4 h-4" />}
            </button>
          )}

          <span className="font-mono text-xs font-semibold text-blue-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
            {String(currentIdx + 1).padStart(2, '0') + ' / ' + String(totalAssets).padStart(2, '0')}
          </span>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Image Display */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 min-h-[340px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden group touch-pan-y"
      >
        <img
          key={displayUrl}
          src={displayUrl}
          alt={activeItem?.title || project.title}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {totalAssets > 1 && (
          <>
            <button
              onClick={prevAsset}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextAsset}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Caption Bar */}
      {activeItem?.caption && (
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
          <p className="truncate">{activeItem.caption}</p>
        </div>
      )}

      {/* Thumbnail Rail */}
      {totalAssets > 1 && (
        <div 
          ref={thumbRailRef}
          className="flex items-center gap-2.5 p-3.5 bg-slate-100 border-t border-slate-200 overflow-x-auto scrollbar-thin select-none"
        >
          {assets.map((asset, idx) => {
            const thumbUrl = isLightMode && asset.lightUrl ? asset.lightUrl : asset.url;
            const isSelected = currentIdx === idx;
            const thumbClass = 'relative flex-shrink-0 w-24 sm:w-28 h-14 sm:h-16 rounded-lg overflow-hidden border transition-all duration-200 ' +
              (isSelected
                ? 'border-blue-500 ring-2 ring-blue-400/50 scale-105 shadow-sm'
                : 'border-slate-300 opacity-70 hover:opacity-100 hover:border-slate-400');

            return (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={thumbClass}
              >
                <img
                  src={thumbUrl}
                  alt={'View ' + (idx + 1)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[9px] text-white font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
