import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactiveEl = target.closest('button, a, [data-cursor], input, select, textarea');
      
      if (interactiveEl) {
        setIsPointer(true);
        const text = interactiveEl.getAttribute('data-cursor');
        setCursorText(text || '');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  let ringClass = 'fixed top-0 left-0 rounded-full border border-blue-600/30 transition-transform duration-100 ease-out flex items-center justify-center ';
  if (cursorText) {
    ringClass += 'w-20 h-20 -ml-10 -mt-10 bg-slate-900/90 backdrop-blur-md border border-blue-500/80 text-[10px] font-mono font-bold text-white tracking-wider shadow-lg shadow-blue-500/20';
  } else if (isPointer) {
    ringClass += 'w-10 h-10 -ml-5 -mt-5 bg-blue-500/10 border-blue-500 scale-110';
  } else {
    ringClass += 'w-7 h-7 -ml-3.5 -mt-3.5';
  }

  const ringTransform = 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)';
  const dotTransform = 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 hidden md:block">
      {/* Outer Ring */}
      <div 
        className={ringClass}
        style={{ transform: ringTransform }}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>

      {/* Center Dot */}
      {!cursorText && (
        <div 
          className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          style={{ transform: dotTransform }}
        />
      )}
    </div>
  );
}
