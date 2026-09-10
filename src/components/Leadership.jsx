import React from 'react';
import { experience } from '../data/experience';
import { Shield, Users, Target, Compass, Award, CheckCircle2 } from 'lucide-react';

export default function Leadership() {
  const leadershipHighlights = [
    {
      title: 'Architectural Governance',
      desc: 'Defining unified semantic data layers, standardized star-schema models, and automated data quality assertions across initiatives.'
    },
    {
      title: 'Strategic Alignment',
      desc: 'Translating executive business objectives into tangible analytics roadmaps, KPI telemetry, and operational intelligence tools.'
    },
    {
      title: 'Engineering Velocity',
      desc: 'Instilling modern data stack best practices (dbt, version-controlled transformations, CI/CD testing) to eliminate pipeline debt.'
    },
    {
      title: 'Team Mentorship',
      desc: 'Cultivating analytical excellence, conducting technical code reviews, and mentoring analysts into full-cycle analytics engineers.'
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-white relative border-t border-slate-200/80 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono tracking-widest uppercase mb-4 font-semibold">
            Leadership & Execution
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Engineering Leadership & Strategic Execution
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Leading data initiatives from raw inception to board-ready intelligence platforms.
          </p>
        </div>

        {/* Role Highlight Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/90 shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 via-violet-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-bold uppercase">
                CURRENT POSITION
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                {experience.leadershipRole.title}
              </h3>
              <div className="text-sm font-mono text-blue-600 font-bold tracking-wide">
                {experience.leadershipRole.organization}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-2">
                Directing technological strategy, scalable analytics engineering infrastructure, and business intelligence standards to drive data-informed institutional growth.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {experience.leadershipRole.focus.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Leadership Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipHighlights.map((hl, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:border-blue-300 transition-colors">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {hl.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {hl.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
