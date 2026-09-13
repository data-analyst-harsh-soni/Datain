import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, Sparkles, Trophy } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import { projects } from '../data/projects';

export default function WorkPage() {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique domains
  const domains = useMemo(() => {
    const list = ['All', ...new Set(projects.map((p) => p.domain).filter(Boolean))];
    return list;
  }, []);

  // Filter projects by domain & search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesDomain = selectedDomain === 'All' || project.domain === selectedDomain;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q)) ||
        project.domain.toLowerCase().includes(q);
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <PageTransition>
      <PageMeta
        title="Harsh Soni | Projects"
        description="Comprehensive portfolio archive of 16 end-to-end data analytics, analytics engineering, and business intelligence case studies by Harsh Soni."
      />

      <section className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Complete Portfolio Archive</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              PROJECTS &amp; CASE STUDIES
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore 16 production-grade analytics engineering pipelines, executive decision intelligence platforms, predictive models, and SQL architectures.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="mb-12 space-y-4">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by technology, domain, or keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Domain Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              {domains.map((domain) => {
                const isSelected = selectedDomain === domain;
                const count = domain === 'All' 
                  ? projects.length 
                  : projects.filter(p => p.domain === domain).length;

                return (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => setSelectedDomain(domain)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                      isSelected
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    <span>{domain}</span>
                    <span className={`ml-1.5 text-[10px] opacity-75 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Grid — Exactly 16 Projects */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-display font-bold text-slate-800 text-base mb-1">
                No matching projects found
              </h3>
              <p className="text-slate-500 text-xs font-mono mb-4">
                Try refining your search keyword or clearing the domain filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedDomain('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </PageTransition>
  );
}
