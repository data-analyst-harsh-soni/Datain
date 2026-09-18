import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Play, Pause, Maximize2, 
  X, ZoomIn, Sun, Moon, Info 
} from 'lucide-react';

export default function ProjectGallery({ 
  assets = [], 
  hasThemeToggle = false,
  isDataBuzz = false,
  projectNumber = "01"
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [themeMode, setThemeMode] = useState('dark'); // dual-theme dashboards
  
  // Touch coordinates for mobile swipe
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const totalSlides = assets.length;

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Jump to specific slide
  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Preload adjacent images (performance optimization)
  useEffect(() => {
    if (totalSlides <= 1) return;
    const nextIdx = (currentIndex + 1) % totalSlides;
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    
    [nextIdx, prevIdx].forEach((idx) => {
      const asset = assets[idx];
      if (!asset) return;
      const src = hasThemeToggle && themeMode === 'light' && asset.lightUrl
        ? asset.lightUrl
        : asset.url;
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [currentIndex, totalSlides, assets, hasThemeToggle, themeMode]);

  // Auto-play interval timer (3000ms = 3s per slide)
  useEffect(() => {
    if (!isPlaying || isHovered || isTouching || totalSlides <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isTouching, nextSlide, totalSlides, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') setSelectedImage(null);
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        return;
      }

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === ' ' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(e.target.tagName)) {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, selectedImage]);

  // Body scroll lock during fullscreen lightbox
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
    setIsTouching(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 45; // px
      if (diff > minSwipeDistance) {
        nextSlide(); // Swiped left -> next
      } else if (diff < -minSwipeDistance) {
        prevSlide(); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;

    // Grace period before resuming auto-play on mobile
    pauseTimeoutRef.current = setTimeout(() => {
      setIsTouching(false);
    }, 1200);
  };

  if (!assets || assets.length === 0) {
    return null;
  }

  const currentAsset = assets[currentIndex] || assets[0];
  const stepNumber = String(currentIndex + 1).padStart(2, '0');
  const imageSrc = hasThemeToggle && themeMode === 'light' && currentAsset.lightUrl
    ? currentAsset.lightUrl
    : currentAsset.url;

  // Smooth slide variants for framer-motion (fade + subtle horizontal slide)
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.5 },
        opacity: { duration: 0.4, ease: 'easeInOut' }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.4 },
        opacity: { duration: 0.3, ease: 'easeInOut' }
      }
    })
  };

  return (
    <div className="w-full max-w-[360px] sm:max-w-none mx-auto space-y-3 sm:space-y-6">
      
      {/* Dual Theme Toggle (if project supports Light/Dark views) */}
      {hasThemeToggle && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F1ECF6]/60 dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43]">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#211A2B] dark:text-[#F5F0FA]">
            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7657E8] dark:text-[#BDA8FF] shrink-0" />
            <span>Dual executive themes:</span>
          </div>
          <div className="flex items-center gap-1 bg-white dark:bg-[#15111F] p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-[#DED5E8] dark:border-[#342A43] shadow-xs">
            <button
              type="button"
              onClick={() => setThemeMode('dark')}
              className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
                themeMode === 'dark'
                  ? 'bg-[#211A2B] dark:bg-[#29203A] text-white shadow-xs'
                  : 'text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA]'
              }`}
            >
              <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Dark</span>
            </button>
            <button
              type="button"
              onClick={() => setThemeMode('light')}
              className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
                themeMode === 'light'
                  ? 'bg-[#7657E8] text-white shadow-xs'
                  : 'text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA]'
              }`}
            >
              <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Light</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Slide Presentation Stage */}
      <div 
        className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-md sm:shadow-xl overflow-hidden group/stage"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Presentation Header Bar (Compact on mobile) */}
        <div className="px-3 py-2.5 sm:p-5 bg-gradient-to-r from-[#F7F4FA] via-white to-[#F7F4FA] dark:from-[#15111F] dark:via-[#1B1627] dark:to-[#15111F] border-b border-[#DED5E8] dark:border-[#342A43] flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Slide Title & Counter Badge */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#7657E8] text-white font-mono font-bold text-[10px] sm:text-xs flex items-center justify-center shadow-xs shrink-0">
              {stepNumber} / {String(totalSlides).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-xs sm:text-base text-[#211A2B] dark:text-[#F5F0FA] truncate leading-tight">
                {currentAsset.title || `Dashboard View ${stepNumber}`}
              </h3>
              <p className="text-[9px] sm:text-[11px] font-mono text-[#6F6678] dark:text-[#9E92AA] truncate leading-tight mt-0.5">
                Auto-advancing presentation &bull; 3s
              </p>
            </div>
          </div>

          {/* Presentation Header Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Auto-Play Status Indicator (Desktop only) */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1ECF6] dark:bg-[#211B2F] text-[11px] font-mono text-[#7657E8] dark:text-[#BDA8FF] border border-[#C7B6F7] dark:border-[#7657E8]/40">
              <span className={`w-2 h-2 rounded-full ${isPlaying && !isHovered && !isTouching ? 'bg-[#7BC7A6] animate-pulse' : 'bg-[#93889D]'}`} />
              <span>{isPlaying && !isHovered && !isTouching ? 'Playing' : 'Paused'}</span>
            </div>

            {/* Play / Pause Toggle Button */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] transition-colors shadow-2xs h-8 w-8 sm:min-h-[38px] sm:min-w-[38px] flex items-center justify-center"
              title={isPlaying ? 'Pause Auto-Play (Space)' : 'Start Auto-Play (Space)'}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {/* Fullscreen Expand Button */}
            <button
              type="button"
              onClick={() => setSelectedImage({ ...currentAsset, currentSrc: imageSrc, stepNumber })}
              className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] transition-colors shadow-2xs h-8 w-8 sm:min-h-[38px] sm:min-w-[38px] flex items-center justify-center"
              title="Expand to Fullscreen Lightbox"
              aria-label="Expand image to fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Slide Progress Bar (fills up across 3s auto-play duration) */}
        {isPlaying && !isHovered && !isTouching && (
          <div className="w-full h-0.5 sm:h-1 bg-[#F1ECF6] dark:bg-[#211B2F] overflow-hidden">
            <motion.div
              key={`${currentIndex}-${isPlaying}`}
              className="h-full bg-gradient-to-r from-[#7657E8] via-[#A76BCE] to-[#C7B6F7]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: 'linear' }}
            />
          </div>
        )}

        {/* Slide Display Area (max-height constrained on mobile to 190px–220px) */}
        <div 
          className="relative min-h-[180px] sm:min-h-[460px] lg:min-h-[560px] flex items-center justify-center bg-[#211A2B]/5 dark:bg-[#0E0B15]/50 overflow-hidden cursor-zoom-in select-none"
          onClick={() => setSelectedImage({ ...currentAsset, currentSrc: imageSrc, stepNumber })}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={`${currentIndex}-${themeMode}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full flex items-center justify-center p-1.5 sm:p-4"
            >
              <img
                src={imageSrc}
                alt={currentAsset.title || `Dashboard screenshot ${stepNumber}`}
                className="w-full h-auto object-contain max-h-[190px] sm:max-h-[640px] lg:max-h-[720px] rounded-lg sm:rounded-xl transition-transform duration-300 group-hover/stage:scale-[1.008]"
                onError={(e) => {
                  console.error('Image load error:', imageSrc);
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button (Touch-friendly 38-44px target) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 dark:bg-[#15111F]/95 backdrop-blur-md border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] flex items-center justify-center shadow-md transition-all duration-200 z-10 opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
            aria-label="Previous slide"
            title="Previous slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow Button (Touch-friendly 38-44px target) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 dark:bg-[#15111F]/95 backdrop-blur-md border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] flex items-center justify-center shadow-md transition-all duration-200 z-10 opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
            aria-label="Next slide"
            title="Next slide (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Click to expand overlay hint (Desktop only) */}
          <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#211A2B]/80 dark:bg-[#15111F]/90 backdrop-blur-md text-white text-[11px] font-mono opacity-0 group-hover/stage:opacity-100 transition-opacity pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Click to Expand</span>
          </div>
        </div>

        {/* Slide Caption Box (Compact typography and padding on mobile) */}
        {currentAsset.caption && (
          <div className="p-2.5 sm:p-5 bg-[#F7F4FA]/70 dark:bg-[#1B1627]/60 border-t border-[#DED5E8] dark:border-[#342A43]">
            <p className="text-[11px] sm:text-sm text-[#6F6678] dark:text-[#C9BED4] leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
              <span className="font-semibold text-[#211A2B] dark:text-[#F5F0FA] mr-1 text-[11px] sm:text-sm">
                View {stepNumber}:
              </span>
              {currentAsset.caption}
            </p>
          </div>
        )}

      </div>

      {/* Slide Indicators / Thumbnails Navigation (Compact gaps and sizes on mobile) */}
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-1 sm:px-2 py-1 sm:py-2">
        {assets.map((_, index) => {
          const isActive = index === currentIndex;
          const displayNum = String(index + 1).padStart(2, '0');

          return (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 rounded-full font-mono text-[9px] sm:text-xs font-semibold flex items-center justify-center min-h-[26px] min-w-[26px] sm:min-h-[34px] sm:min-w-[34px] ${
                isActive
                  ? 'bg-[#7657E8] text-white shadow-xs ring-1 sm:ring-2 ring-[#7657E8]/30 px-2 sm:px-3'
                  : 'bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] text-[#6F6678] dark:text-[#9E92AA] hover:text-[#211A2B] dark:hover:text-[#F5F0FA] hover:border-[#7657E8]/50 px-1.5 sm:px-2'
              }`}
              title={`Jump to slide ${index + 1}`}
              aria-label={`Jump to slide ${index + 1}`}
            >
              {displayNum}
            </button>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#0E0B15]/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Lightbox Header */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between pb-3 text-white border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg bg-[#7657E8] font-mono text-[10px] sm:text-xs font-bold">
                {stepNumber} / {String(totalSlides).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-xs sm:text-base text-white truncate">
                  {currentAsset.title}
                </h4>
                {currentAsset.caption && (
                  <p className="text-[10px] sm:text-xs text-[#C9BED4] line-clamp-1 max-w-2xl">
                    {currentAsset.caption}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center"
                aria-label="Close Lightbox"
                title="Close Lightbox (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Expanded Image View with Navigation Controls */}
          <div 
            className="relative max-w-7xl max-h-[82vh] w-full flex items-center justify-center my-auto overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Prev */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all z-20"
              aria-label="Previous image"
              title="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <img
              src={imageSrc}
              alt={currentAsset.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Lightbox Next */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all z-20"
              aria-label="Next image"
              title="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Lightbox Footer Hints */}
          <div className="text-[#9E92AA] text-[10px] sm:text-xs font-mono text-center">
            Use Left / Right arrow keys to navigate &bull; Press ESC or click outside to close
          </div>
        </div>
      )}

    </div>
  );
}
