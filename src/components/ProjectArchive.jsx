import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Search, Layers } from 'lucide-react';

export default function ProjectArchive({ onOpenModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('ALL');

  const domainList = [
    'ALL',
    'Analytics Engineering',
    'Enterprise BI',
    'Finance & Insurance',
    'Public Data',
    'Machine Learning & Finance',
    'Real Estate',
    'HR',
    'SQL',
    'Python & EDA',
    'Automotive',
    'Academic & Institutional'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        project.title.toLowerCase().includes(query) ||
        project.domain.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some(t => t.toLowerCase().includes(query));

      const matchesDomain = selectedDomain === 'ALL' || project.domain === selectedDomain;

      return matchesSearch && matchesDomain;
    });
  }, [searchQuery, selectedDomain]);

  return (
    <section id="archive" className="py-24 bg-[#F8FAFC] relative border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-3 font-semibold shadow-sm">
              Complete Portfolio
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
              All {projects.length} Engineering &amp; BI Projects
            </h2>
          </div>

          <div className="font-mono text-xs text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
            Showing <span className="text-blue-700 font-bold">{filteredProjects.length}</span> of {projects.length} Projects
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/90 mb-12 space-y-4 bg-white/95 shadow-md">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by technology (dbt, SQL, Power BI, Python), name, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400/40 transition-all font-sans"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {domainList.map((domain) => {
              const isSelected = selectedDomain === domain;
              return (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={
                    'px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ' +
                    (isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-md shadow-blue-500/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm')
                  }
                  data-cursor="FILTER"
                >
                  {domain}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">No matching projects found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
              Try adjusting your search query or select another category filter above.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedDomain('ALL'); }}
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700 hover:bg-blue-50 transition-all font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
