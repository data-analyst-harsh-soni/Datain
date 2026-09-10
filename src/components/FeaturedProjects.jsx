import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProjectMediaViewer from './ProjectMediaViewer';
import PresentationViewer from './PresentationViewer';
import ArchitectureVisualizer from './ArchitectureVisualizer';

export default function FeaturedProjects({ onOpenModal }) {
  const featuredList = projects.filter(p => p.featured);
  const [currentIdx, setCurrentIdx] = useState(0);

  const activeProject = featuredList[currentIdx];

  const nextProject = () => {
    setCurrentIdx((prev) => (prev + 1) % featuredList.length);
  };

  const prevProject = () => {
    setCurrentIdx((prev) => (prev - 1 + featuredList.length) % featuredList.length);
  };

  if (!activeProject) return null;

  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-[#FFFFFF] via-[#F0F7FF] to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-3 font-semibold shadow-sm">
              Flagship Showcase
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Featured Digital Intelligence Systems
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-sm text-blue-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
              {String(currentIdx + 1).padStart(2, '0')} / {String(featuredList.length).padStart(2, '0')}
            </span>

            <button
              onClick={prevProject}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
              aria-label="Previous featured project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextProject}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
              aria-label="Next featured project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 lg:p-10 border border-slate-200/90 relative overflow-hidden shadow-xl bg-white/95">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              {activeProject.presentationType === 'ppt' ? (
                <PresentationViewer project={activeProject} />
              ) : activeProject.presentationType === 'architecture' ? (
                <ArchitectureVisualizer project={activeProject} />
              ) : (
                <ProjectMediaViewer project={activeProject} />
              )}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
                    PROJECT {activeProject.number} &bull; {activeProject.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {activeProject.year}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
                  {activeProject.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {activeProject.description}
                </p>

                {activeProject.metrics && activeProject.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {activeProject.metrics.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
                        <div className="font-mono font-bold text-sm text-blue-700">{m.value}</div>
                        <div className="text-[10px] font-mono uppercase text-slate-500 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenModal(activeProject)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                  data-cursor="FULL STUDY"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:border-blue-400 shadow-sm transition-all flex items-center gap-2"
                    data-cursor="LIVE DEMO"
                  >
                    <span>Live Dashboard</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all flex items-center gap-2"
                    data-cursor="GITHUB"
                  >
                    <span>View GitHub</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
