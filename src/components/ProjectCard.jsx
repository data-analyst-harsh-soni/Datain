import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldAlert, FileText, Layers } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const previewImage = project.assets?.[0]?.url || null;

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
      data-cursor="VIEW"
    >
      {/* Visual Thumbnail */}
      <div className="relative h-52 sm:h-56 bg-slate-100 overflow-hidden border-b border-slate-100">
        {previewImage ? (
          <img
            src={previewImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          /* Abstract Pipeline Fallback for Architecture Projects */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-white border border-blue-200/80 flex items-center justify-center mb-3 shadow-sm">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-mono text-xs text-blue-700 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="text-[11px] text-slate-500 mt-1 font-mono">
              Data Pipeline &amp; Architecture Case Study
            </span>
          </div>
        )}

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200/90 font-mono text-[11px] text-slate-800 font-bold tracking-wider shadow-sm">
            {project.number}
          </span>

          <div className="flex items-center gap-1.5">
            {project.isConfidentialDataset && (
              <span className="px-2 py-0.5 rounded bg-amber-100/95 border border-amber-300 text-[9px] font-mono font-bold text-amber-900 uppercase flex items-center gap-1 shadow-sm">
                <ShieldAlert className="w-3 h-3 text-amber-700" />
                <span>CONFIDENTIAL</span>
              </span>
            )}
            {project.presentationType === 'ppt' && (
              <span className="px-2 py-0.5 rounded bg-violet-100/95 border border-violet-300 text-[9px] font-mono font-bold text-violet-900 uppercase flex items-center gap-1 shadow-sm">
                <FileText className="w-3 h-3 text-violet-700" />
                <span>26 SLIDES</span>
              </span>
            )}
          </div>
        </div>

        {/* Hover Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <span className="text-[10px] font-mono text-blue-600 font-semibold tracking-wider uppercase block mb-1">
            {project.domain}
          </span>
          <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies & Footer */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/80 font-mono text-[10px] text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-900 transition-colors">
              {project.metrics?.[0]?.value || 'Case Study'}
            </span>

            <div className="flex items-center gap-1 font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
              <span>Inspect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
