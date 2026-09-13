import React from 'react';
import { Trophy, Award, ArrowRight, CheckCircle2, Sparkles, Star, Users } from 'lucide-react';
import { projects } from '../data/projects';

export default function AchievementsSection({ onSelectProject }) {
  const databuzzProject = projects.find(p => p.id === 'databuzz-global-competition');

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] relative border-t border-slate-200/80 scroll-mt-24 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 font-semibold shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>Honors &amp; Distinctions</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Achievements &amp; Recognition
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal max-w-2xl mx-auto">
            Competitive analytics performance benchmarks and verified institutional leadership honors.
          </p>
        </div>

        {/* Editorial Achievement Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ACHIEVEMENT 01: DataBuzz */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-100/60 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div>
              {/* Badge & Identifier */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                  ACHIEVEMENT 01
                </span>
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-extrabold tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>GLOBAL TOP 5</span>
                </span>
              </div>

              {/* Large Hero Metric */}
              <div className="mb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-blue-600 tracking-tight">
                  TOP 5
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mt-1">
                  Worldwide Standing &bull; Global Analytics Competition
                </div>
              </div>

              {/* Title & Domain */}
              <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight mb-1">
                DataBuzz
              </h3>
              <p className="text-xs font-mono text-blue-700 font-semibold mb-4">
                Global Analytics Competition
              </p>

              {/* Executive Summary Quote */}
              <blockquote className="p-4 rounded-xl bg-blue-50/60 border-l-4 border-blue-600 text-slate-700 text-sm italic mb-6">
                &ldquo;Secured a Global Top 5 position in the DataBuzz competition held in May 2026.&rdquo;
              </blockquote>

              {/* Bulleted Substantiation */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Secured a Global Top 5 position in the DataBuzz competition held in May 2026.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Demonstrated analytical problem-solving, data interpretation and solution-oriented thinking in a competitive environment.</span>
                </div>
              </div>
            </div>

            {/* Interactive Inspect Button */}
            {databuzzProject && onSelectProject && (
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Project #{databuzzProject?.number || '01'} &bull; Flagship Case Study
                </span>
                <button
                  onClick={() => onSelectProject(databuzzProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 text-xs font-semibold font-mono transition-all shadow-sm"
                  data-cursor="INSPECT"
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* ACHIEVEMENT 02: ELC Campus Ambassador */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-100/60 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div>
              {/* Badge & Identifier */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                  ACHIEVEMENT 02
                </span>
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-mono text-xs font-extrabold tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>COLLECTORATE RECOGNITION</span>
                </span>
              </div>

              {/* Large Hero Metric */}
              <div className="mb-4">
                <div className="font-display font-black text-4xl sm:text-5xl text-violet-600 tracking-tight">
                  HONOURED
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mt-1">
                  Sole Student Representative &bull; Collectorate Ceremony
                </div>
              </div>

              {/* Title & Domain */}
              <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight mb-1">
                ELC Campus Ambassador
              </h3>
              <p className="text-xs font-mono text-violet-700 font-semibold mb-4">
                Electoral Literacy Club &bull; Campus Leadership
              </p>

              {/* Executive Summary Quote */}
              <blockquote className="p-4 rounded-xl bg-violet-50/60 border-l-4 border-violet-600 text-slate-700 text-sm italic mb-6">
                &ldquo;Selected as the sole student representative from the college and honoured at the Collectorate for campus-level ELC initiatives.&rdquo;
              </blockquote>

              {/* Bulleted Substantiation */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span>Served as an ELC Campus Ambassador, organizing and coordinating student-focused events and activities across the college campus.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span>Selected as the sole student representative from the college to attend a Collectorate recognition ceremony in acknowledgment of my contribution to campus-level ELC initiatives.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span>Received formal recognition/honour at the Collectorate for active participation and event coordination.</span>
                </div>
              </div>
            </div>

            {/* Distinctions Footer */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Institutional Standing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-50 border border-violet-200 text-xs font-mono font-semibold text-violet-700">
                <Users className="w-3.5 h-3.5 text-violet-600" />
                <span>Sole Student Representative</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
