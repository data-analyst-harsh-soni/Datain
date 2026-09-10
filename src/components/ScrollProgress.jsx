import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-slate-200/60 backdrop-blur-sm pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 transition-all duration-75 ease-out shadow-sm"
        style={{ width: progress + '%' }}
      />
    </div>
  );
}
