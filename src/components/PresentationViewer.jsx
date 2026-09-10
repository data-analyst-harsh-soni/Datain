import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Minimize2 } from 'lucide-react';

export default function PresentationViewer({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef(null);
  const thumbRailRef = useRef(null);
  const touchStartX = useRef(null);

  const slides = project.assets || [];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, isFullscreen]);

  useEffect(() => {
    let timer;
    if (isPlaying && totalSlides > 0) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalSlides]);

  useEffect(() => {
    if (thumbRailRef.current && thumbRailRef.current.children[currentSlide]) {
      thumbRailRef.current.children[currentSlide].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentSlide]);

  if (totalSlides === 0) return null;

  const activeAsset = slides[currentSlide];

  const containerClass = isFullscreen
    ? 'fixed inset-0 z-50 rounded-none border-none bg-slate-950 flex flex-col'
    : 'relative rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col w-full shadow-xl';

  return (
    <div ref={viewerRef} className={containerClass}>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200 z-10">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold tracking-wider uppercase">
            KEYNOTE SLIDESHOW
          </span>
          <span className="font-display font-semibold text-sm text-slate-800 hidden sm:inline-block truncate max-w-md">
            {activeAsset?.title || ('Slide ' + (currentSlide + 1))}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-blue-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
            {String(currentSlide + 1).padStart(2, '0') + ' / ' + String(totalSlides).padStart(2, '0')}
          </span>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
            title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-blue-600" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Display Area */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-6 min-h-[360px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden group touch-pan-y"
      >
        <img
          key={activeAsset?.url}
          src={activeAsset?.url}
          alt={activeAsset?.title || 'Slide'}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Context Bar */}
      {activeAsset?.caption && (
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
          <p className="truncate">{activeAsset.caption}</p>
        </div>
      )}

      {/* Horizontal Thumbnail Rail */}
      <div 
        ref={thumbRailRef}
        className="flex items-center gap-2.5 p-3.5 bg-slate-100 border-t border-slate-200 overflow-x-auto scrollbar-thin select-none"
      >
        {slides.map((slide, idx) => {
          const isSelected = currentSlide === idx;
          const thumbClass = 'relative flex-shrink-0 w-24 sm:w-28 h-14 sm:h-16 rounded-lg overflow-hidden border transition-all duration-200 ' +
            (isSelected
              ? 'border-blue-500 ring-2 ring-blue-400/50 scale-105 shadow-sm'
              : 'border-slate-300 opacity-70 hover:opacity-100 hover:border-slate-400');

          return (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={thumbClass}
            >
              <img
                src={slide.url}
                alt={'Slide ' + (idx + 1)}
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
    </div>
  );
}
