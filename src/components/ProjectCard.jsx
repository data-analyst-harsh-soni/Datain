import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, FileText, Layers, Trophy, Award, ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  const previewImage = project.assets?.[0]?.url || null;

  return (
    <Link
      to={`/work/${project.id}`}
      className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-[#DED5E8] dark:border-[#342A43] bg-white dark:bg-[#15111F] shadow-sm hover:shadow-xl hover:border-[#7657E8] dark:hover:border-[#9A7BFF] transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-[#7657E8]"
      data-cursor="CASE STUDY"
    >
      {/* Visual Thumbnail */}
      <div className="relative h-52 sm:h-56 bg-[#F1ECF6] dark:bg-[#1B1627] overflow-hidden border-b border-[#DED5E8] dark:border-[#342A43]">
        {previewImage ? (
          <img
            src={previewImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          /* Abstract Pipeline Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F1ECF6] via-[#EEE6FF] to-white dark:from-[#1B1627] dark:via-[#211B2F] dark:to-[#15111F] p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center mb-3 shadow-sm">
              {project.presentationType === 'competition' ? (
                <Trophy className="w-6 h-6 text-[#7657E8] dark:text-[#BDA8FF]" />
              ) : (
                <Layers className="w-6 h-6 text-[#7657E8] dark:text-[#BDA8FF]" />
              )}
            </div>
            <span className="font-mono text-xs text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="text-[11px] text-[#6F6678] dark:text-[#9E92AA] mt-1 font-mono">
              {project.type || 'Data Pipeline & Architecture Case Study'}
            </span>
          </div>
        )}

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#15111F]/95 backdrop-blur-md border border-[#DED5E8] dark:border-[#342A43] font-mono text-[11px] text-[#211A2B] dark:text-[#F5F0FA] font-bold tracking-wider shadow-sm">
            {project.number}
          </span>

          <div className="flex items-center gap-1.5">
            {project.highlight && (
              <span className="px-2 py-0.5 rounded bg-[#EEE6FF] dark:bg-[#29203A] border border-[#C7B6F7] dark:border-[#7657E8]/50 text-[9px] font-mono font-bold text-[#7657E8] dark:text-[#BDA8FF] uppercase flex items-center gap-1 shadow-sm">
                <Award className="w-3 h-3 text-[#7657E8] dark:text-[#BDA8FF]" />
                <span>{project.highlight}</span>
              </span>
            )}
            {project.isConfidentialDataset && (
              <span className="px-2 py-0.5 rounded bg-amber-100/95 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/50 text-[9px] font-mono font-bold text-amber-900 dark:text-amber-300 uppercase flex items-center gap-1 shadow-sm">
                <ShieldAlert className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>CONFIDENTIAL</span>
              </span>
            )}
            {project.presentationType === 'ppt' && (
              <span className="px-2 py-0.5 rounded bg-[#F1ECF6] dark:bg-[#211B2F] border border-[#CFC3DD] dark:border-[#463756] text-[9px] font-mono font-bold text-[#A76BCE] dark:text-[#D178E8] uppercase flex items-center gap-1 shadow-sm">
                <FileText className="w-3 h-3 text-[#A76BCE] dark:text-[#D178E8]" />
                <span>26 SLIDES</span>
              </span>
            )}
          </div>
        </div>

        {/* Hover Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#211A2B]/40 dark:from-[#0E0B15]/60 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-[#15111F]">
        <div>
          <span className="text-[10px] font-mono text-[#7657E8] dark:text-[#BDA8FF] font-semibold tracking-wider uppercase block mb-1">
            {project.domain}
          </span>
          <h3 className="font-display font-bold text-lg text-[#211A2B] dark:text-[#F5F0FA] group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-colors line-clamp-2 mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-[#6F6678] dark:text-[#C9BED4] leading-relaxed line-clamp-2 mb-4 font-normal">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies & Footer */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] font-mono text-[10px] text-[#6F6678] dark:text-[#C9BED4] shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 rounded bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] font-mono text-[10px] text-[#93889D] dark:text-[#9E92AA]">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="pt-3 border-t border-[#F1ECF6] dark:border-[#342A43] flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] text-[#93889D] dark:text-[#9E92AA]">
              {project.metrics?.[0]?.value || 'Case Study'}
            </span>

            <div className="flex items-center gap-1.5 font-semibold text-[#7657E8] dark:text-[#BDA8FF] group-hover:text-[#6746DB] dark:group-hover:text-white group-hover:translate-x-1 transition-all">
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
