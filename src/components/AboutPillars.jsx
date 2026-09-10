import React from 'react';
import { experience } from '../data/experience';
import { Database, LineChart, Cpu, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutPillars() {
  const pillarIcons = [Cpu, LineChart, Database, Compass];

  return (
    <section id="pillars" className="py-24 relative overflow-hidden scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 font-semibold">
            Strategic Foundations
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            {experience.headline}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Building high-impact data systems requires bridging robust analytics engineering, deep business acumen, and scalable technical leadership.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experience.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.number}
                className="bg-white rounded-2xl p-7 lg:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Background glow motif */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-br from-blue-100/60 to-violet-100/40 rounded-full blur-3xl group-hover:from-blue-200/50 group-hover:to-cyan-200/50 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-bold text-2xl text-blue-600 tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:border-blue-300 group-hover:shadow-md transition-all">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-600 mb-4 tracking-wide uppercase font-semibold">
                    {pillar.subtitle}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Tech & Concept Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-700 group-hover:border-blue-200 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
