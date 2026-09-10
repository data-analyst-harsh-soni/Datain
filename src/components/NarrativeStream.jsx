import React from 'react';
import { Database, Cpu, Brain, Target, Shield } from 'lucide-react';

export default function NarrativeStream() {
  const steps = [
    { title: 'DATA', icon: Database, desc: 'Multi-source lakes, logs & events' },
    { title: 'ENGINEERING', icon: Cpu, desc: 'dbt, Snowflake, SQL & pipelines' },
    { title: 'INTELLIGENCE', icon: Brain, desc: 'Statistical models & ML inference' },
    { title: 'DECISION', icon: Target, desc: 'Executive BI & operational scorecards' },
    { title: 'TECHNOLOGY', icon: Shield, desc: 'Scalable data products & delivery' },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 bg-white/70 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono tracking-widest uppercase text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 font-semibold">
            Architectural Philosophy
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mt-2">
            The End-to-End Transformation Lifecycle
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center text-center relative group bg-white/90 border border-slate-200/80 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60 flex items-center justify-center mb-3 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.18)] transition-all">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-indigo-600 transition-colors" />
                </div>
                <div className="font-display font-extrabold text-sm tracking-wider text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow connector on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-blue-400/60 font-mono text-sm pointer-events-none">
                    &rarr;
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
