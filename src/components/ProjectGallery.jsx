import React, { useState, useEffect } from 'react';
import { Maximize2, X, ZoomIn, Sun, Moon, Info } from 'lucide-react';

export default function ProjectGallery({ 
  assets = [], 
  hasThemeToggle = false,
  isDataBuzz = false,
  projectNumber = "01"
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [themeMode, setThemeMode] = useState('dark'); // for projects with dark/light themes

  // Keyboard escape listener for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when lightbox is open
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

  if (!assets || assets.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-12">
      {/* Theme Toggle if applicable */}
      {hasThemeToggle && (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#211A2B] dark:text-[#F5F0FA]">
            <Info className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF]" />
            <span>This project features dual Dark &amp; Light executive interfaces:</span>
          </div>
          <div className="flex items-center gap-1 bg-white dark:bg-[#15111F] p-1 rounded-xl border border-[#DED5E8] dark:border-[#342A43] shadow-sm">
            <button
              type="button"
              onClick={() => setThemeMode('dark')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                themeMode === 'dark'
                  ? 'bg-[#211A2B] dark:bg-[#29203A] text-white shadow-sm'
                  : 'text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA]'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Dark UI</span>
            </button>
            <button
              type="button"
              onClick={() => setThemeMode('light')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                themeMode === 'light'
                  ? 'bg-[#7657E8] text-white shadow-sm'
                  : 'text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Light UI</span>
            </button>
          </div>
        </div>
      )}

      {/* Vertical Case-Study Gallery */}
      <div className="space-y-14">
        {assets.map((asset, index) => {
          const stepNumber = String(index + 1).padStart(2, '0');
          const imageSrc = hasThemeToggle && themeMode === 'light' && asset.lightUrl
            ? asset.lightUrl
            : asset.url;

          return (
            <figure
              key={asset.url || index}
              className="group relative rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header with Step Title */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F7F4FA] via-white to-[#F7F4FA] dark:from-[#15111F] dark:via-[#1B1627] dark:to-[#15111F] border-b border-[#DED5E8] dark:border-[#342A43] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#7657E8] text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
                    {stepNumber}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#211A2B] dark:text-[#F5F0FA]">
                      {asset.title || `Dashboard View ${stepNumber}`}
                    </h3>
                    {asset.caption && (
                      <p className="text-xs sm:text-sm text-[#6F6678] dark:text-[#C9BED4] mt-0.5 leading-relaxed">
                        {asset.caption}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedImage({ ...asset, currentSrc: imageSrc, stepNumber })}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] text-xs font-medium shadow-xs transition-colors shrink-0"
                  title="Expand to Fullscreen Lightbox"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                  <span>Click to Expand</span>
                </button>
              </div>

              {/* Image Frame with Click-to-Zoom */}
              <div 
                onClick={() => setSelectedImage({ ...asset, currentSrc: imageSrc, stepNumber })}
                className="relative bg-[#211A2B]/5 dark:bg-[#0E0B15]/40 cursor-zoom-in overflow-hidden"
              >
                <img
                  src={imageSrc}
                  alt={asset.title || `Project screenshot ${stepNumber}`}
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-[820px] transition-transform duration-500 group-hover:scale-[1.01]"
                  onError={(e) => {
                    console.error("Image load failed:", imageSrc);
                  }}
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#0E0B15]/0 group-hover:bg-[#0E0B15]/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                  <span className="px-4 py-2 rounded-full bg-[#211A2B]/80 dark:bg-[#15111F]/90 backdrop-blur-md text-white text-xs font-mono font-medium flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Fullscreen</span>
                  </span>
                </div>
              </div>
            </figure>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#0E0B15]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Lightbox Header */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between pb-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#7657E8] font-mono text-xs font-bold">
                {selectedImage.stepNumber}
              </span>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  {selectedImage.title}
                </h4>
                {selectedImage.caption && (
                  <p className="text-xs text-[#C9BED4] line-clamp-1 max-w-2xl">
                    {selectedImage.caption}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Expanded Image View */}
          <div 
            className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.currentSrc || selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          <div className="text-[#9E92AA] text-xs font-mono mt-3">
            Press ESC or click anywhere outside to close
          </div>
        </div>
      )}
    </div>
  );
}
