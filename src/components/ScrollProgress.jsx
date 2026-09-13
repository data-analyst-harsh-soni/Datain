import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-[#DED5E8]/40 dark:bg-[#342A43]/40 backdrop-blur-sm pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#7657E8] via-[#A76BCE] to-[#C7B6F7] dark:from-[#9A7BFF] dark:via-[#D178E8] dark:to-[#BDA8FF] transition-all duration-75 ease-out shadow-sm"
        style={{ width: progress + '%' }}
      />
    </div>
  );
}
