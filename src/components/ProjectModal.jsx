import React, { useEffect } from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle, ShieldAlert } from 'lucide-react';
import ProjectMediaViewer from './ProjectMediaViewer';
import PresentationViewer from './PresentationViewer';
import ArchitectureVisualizer from './ArchitectureVisualizer';

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-fadeIn"
    >
      
      <div 
        className="relative w-full max-w-6xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 z-20 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              PROJECT {project.number}
            </span>
            <span className="font-display font-bold text-base sm:text-lg text-slate-900 truncate max-w-sm sm:max-w-xl">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-blue-400 hover:bg-slate-50 transition-all"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-blue-400 hover:bg-slate-50 transition-all"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition-all ml-2"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 scrollbar-thin">
          
          <div className="w-full">
            {project.presentationType === 'ppt' ? (
              <PresentationViewer project={project} />
            ) : project.presentationType === 'architecture' ? (
              <ArchitectureVisualizer project={project} />
            ) : (
              <ProjectMediaViewer project={project} />
            )}
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-mono font-bold text-base sm:text-lg text-blue-700">{m.value}</div>
                  <div className="text-[10px] font-mono uppercase text-slate-500 mt-0.5 font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-display font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>The Challenge & Context</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {project.problem || project.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-display font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                <span>Technical Approach & Architecture</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {project.approach || project.shortDescription}
              </p>
            </div>
          </div>

          {project.id === 'aiml-academic-performance' && (
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
              <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider block mb-1 font-semibold">
                Real-World Institutional Data Pipeline (AIML &amp; CS-DS Unified)
              </span>
              <h4 className="font-display font-bold text-sm text-slate-900 mb-4">
                Unstructured CSV &rarr; Excel Structuring &amp; Cleaning &rarr; PostgreSQL Database &rarr; Power BI
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-mono text-blue-600 mb-1 font-semibold">01. INGESTION</div>
                  <div className="font-display font-bold text-xs text-slate-900 mb-1">Unstructured CSV Exports</div>
                  <div className="text-[11px] text-slate-600 leading-relaxed">Raw semester marksheets, grade reports, and student logs from university systems.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-mono text-cyan-600 mb-1 font-semibold">02. STRUCTURING &amp; CLEANING</div>
                  <div className="font-display font-bold text-xs text-slate-900 mb-1">Microsoft Excel Modeling</div>
                  <div className="text-[11px] text-slate-600 leading-relaxed">Converted unstructured rows into relational tables, handled nulls, and normalized schemas.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-mono text-emerald-600 mb-1 font-semibold">03. DATABASE STORAGE</div>
                  <div className="font-display font-bold text-xs text-slate-900 mb-1">PostgreSQL &amp; PgAdmin4</div>
                  <div className="text-[11px] text-slate-600 leading-relaxed">Loaded into PostgreSQL schemas, executing relational joins across AIML and CS-DS datasets.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-mono text-violet-600 mb-1 font-semibold">04. REPORTING &amp; BI</div>
                  <div className="font-display font-bold text-xs text-slate-900 mb-1">Power BI Executive Suite</div>
                  <div className="text-[11px] text-slate-600 leading-relaxed">Engineered custom DAX measures, time-intelligence comparisons, and 5-page interactive dashboards.</div>
                </div>
              </div>
            </div>
          )}

          {project.highlights && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-display font-bold text-base text-slate-900 mb-4">
                Key Engineering & Analytical Achievements
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.datasetNote && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="text-blue-700 font-bold uppercase mr-2">Note:</span>
              {project.datasetNote}
            </div>
          )}

          {project.isConfidentialDataset && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-800 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-600" />
              <span>Real-world institutional dataset with strict PII masking applied. Public visuals preserve confidential student data.</span>
            </div>
          )}

          <div>
            <h4 className="font-display font-bold text-sm text-slate-900 mb-3">Technologies & Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-slate-50/95 backdrop-blur-md border-t border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-500 to-violet-600 text-white font-semibold text-xs shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Open Live Dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.alternateLive && (
              <a
                href={project.alternateLive}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Alternate Live View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all flex items-center gap-2 shadow-xs"
              >
                <span>View GitHub Repository</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close Window &times;
          </button>
        </div>

      </div>
    </div>
  );
}
