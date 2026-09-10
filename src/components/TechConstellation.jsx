import React, { useState } from 'react';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { Layers, Cpu, Sparkles } from 'lucide-react';

export default function TechConstellation({ onSelectProject }) {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL',
    'CORE ANALYTICS',
    'DATA ENGINEERING',
    'DATA SCIENCE & ML',
    'CLOUD & APPLICATION',
    'WORKFLOW'
  ];

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter(s => s.category.toUpperCase() === activeCategory);

  const relatedProjects = projects.filter(p => selectedSkill?.projectIds?.includes(p.id));

  return (
    <section id="stack" className="py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F3E8FF]/30 to-[#EEF5FF]/50 relative border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono tracking-widest uppercase mb-4 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-violet-600" />
            <span>Technology Ecosystem</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Interactive Technology Constellation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal max-w-2xl mx-auto">
            Explore my technical toolkit and see where each technology is implemented.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={
                    'px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ' +
                    (isActive
                      ? 'bg-gradient-to-r from-electric-500 to-violet-600 text-white font-bold shadow-md shadow-blue-500/25'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-xs')
                  }
                  data-cursor="FILTER"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Skill Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              const usedCount = projects.filter(p => skill.projectIds?.includes(p.id)).length;

              return (
                <button
                  key={skill.id}
                  onClick={() => {
                    setSelectedSkill(skill);
                  }}
                  className={
                    'text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ' +
                    (isSelected
                      ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-400/40'
                      : 'bg-white/90 border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-md')
                  }
                  data-cursor="SELECT"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
                        {usedCount > 0 ? `${usedCount} ${usedCount === 1 ? 'Project' : 'Projects'}` : 'Core Stack'}
                      </span>
                    </div>
                    
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-medium">
                      {skill.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                    <span className="text-slate-500 group-hover:text-slate-700 transition-colors">
                      {usedCount > 0 ? `Used in ${usedCount} ${usedCount === 1 ? 'project' : 'projects'}` : 'Foundational capability'}
                    </span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right / Bottom: Selected Skill Detail Panel */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/90 sticky top-24 shadow-xl">
            {selectedSkill ? (
              <div>
                <div className="flex items-start justify-between border-b border-slate-200 pb-4 mb-5 gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                      {selectedSkill.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                      {selectedSkill.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 flex flex-col items-center justify-center font-mono text-center shrink-0">
                    <span className="text-sm font-bold text-blue-700">
                      {relatedProjects.length}
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">
                      {relatedProjects.length === 1 ? 'Project' : 'Projects'}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {selectedSkill.description}
                </p>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-3.5">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>IMPLEMENTED IN {relatedProjects.length} {relatedProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}</span>
                  </div>

                  {relatedProjects.length > 0 ? (
                    <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
                      {relatedProjects.map((proj) => (
                        <div
                          key={proj.id}
                          onClick={() => onSelectProject && onSelectProject(proj)}
                          className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:bg-white flex items-center justify-between cursor-pointer group transition-all shadow-xs hover:shadow-md"
                          data-cursor="CASE STUDY"
                        >
                          <div>
                            <span className="text-[10px] font-mono text-blue-600 font-bold block">
                              PROJECT {proj.number} &bull; {proj.category}
                            </span>
                            <span className="font-display font-bold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                              {proj.title}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all pl-2 font-mono">
                            View &rarr;
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 italic p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono">
                      Foundational architecture skill applied across data models and strategic workflows.
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
}
