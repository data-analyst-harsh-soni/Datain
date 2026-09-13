import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Github, Trophy, ShieldAlert, 
  CheckCircle2, Layers, Database, Cpu, Sparkles, Activity, FileText, ChevronLeft, ChevronRight 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import ProjectGallery from '../components/ProjectGallery';
import ArchitectureVisualizer from '../components/ArchitectureVisualizer';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find current project index & project
  const { project, prevProject, nextProject, currentIndex } = useMemo(() => {
    const idx = projects.findIndex((p) => p.id === projectId);
    if (idx === -1) return { project: null, prevProject: null, nextProject: null, currentIndex: -1 };
    
    const prevIdx = (idx - 1 + projects.length) % projects.length;
    const nextIdx = (idx + 1) % projects.length;
    
    return {
      project: projects[idx],
      prevProject: projects[prevIdx],
      nextProject: projects[nextIdx],
      currentIndex: idx
    };
  }, [projectId]);

  // Handle Project Not Found
  if (!project) {
    return (
      <PageTransition>
        <PageMeta title="Project Not Found | Harsh Soni" />
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24">
          <Layers className="w-16 h-16 text-slate-300 mb-4" />
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
            Project Not Found
          </h1>
          <p className="text-slate-600 text-sm max-w-md mb-6 font-mono">
            The project "{projectId}" does not exist in this portfolio or may have moved.
          </p>
          <Link
            to="/work"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All 16 Projects</span>
          </Link>
        </div>
      </PageTransition>
    );
  }

  const isDataBuzz = project.id === 'databuzz-global-competition';
  const heroImage = project.assets?.[0]?.url || null;

  return (
    <PageTransition>
      <PageMeta 
        title={`Harsh Soni | ${project.title}`}
        description={project.shortDescription}
      />

      <article className="pt-28 pb-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb & Navigation Bar */}
          <div className="flex items-center justify-between py-4 mb-8 border-b border-slate-200/80">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            {/* Quick Next / Prev switcher */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="hidden sm:inline">
                {project.number} / 16
              </span>
              <div className="flex items-center gap-1">
                <Link
                  to={`/work/${prevProject.id}`}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  title={`Previous: ${prevProject.title}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Link>
                <Link
                  to={`/work/${nextProject.id}`}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  title={`Next: ${nextProject.title}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* 1. PROJECT HERO                                    */}
          {/* ================================================== */}
          <header className="mb-14">
            
            {/* Badges & Category */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-blue-600 text-white font-mono font-bold text-xs">
                PROJECT {project.number}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 font-mono text-xs text-blue-700 font-semibold uppercase">
                {project.category}
              </span>
              {project.domain && (
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                  {project.domain}
                </span>
              )}
              {project.year && (
                <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-500 font-mono text-xs">
                  {project.year}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-4">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-base sm:text-xl font-mono text-blue-700 font-medium mb-4">
                {project.subtitle}
              </p>
            )}

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl mb-8 font-normal">
              {project.shortDescription}
            </p>

            {/* Global Top 5 Highlight Box for DataBuzz */}
            {isDataBuzz && (
              <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                    <Trophy className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-blue-100 uppercase block">
                      Global Analytics Competition Distinction
                    </span>
                    <h2 className="font-display font-black text-2xl text-white">
                      GLOBAL TOP 5 &bull; MAY 2026
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
                      Secured a Global Top 5 position in the DataBuzz competition held in May 2026, evaluating competitive business acumen, advanced DAX modeling, and decision intelligence.
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider self-start sm:self-center border border-white/30 whitespace-nowrap">
                  Worldwide Finalist
                </div>
              </div>
            )}

            {/* Confidentiality or Dataset Disclaimers if any */}
            {project.isConfidentialDataset && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs font-mono">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Confidential Dataset Notice</strong>
                  <span>{project.confidentialityNotice || "Underlying institutional data is confidential. PII has been strictly masked across public presentations."}</span>
                </div>
              </div>
            )}

            {project.datasetNote && (
              <div className="mb-6 p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
                <strong>Data Notice:</strong> {project.datasetNote}
              </div>
            )}

            {/* Action Buttons: Live Demo & GitHub */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 mb-10">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>Launch Live Interactive Dashboard</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.alternateLive && (
                <a
                  href={project.alternateLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-blue-600 font-medium text-xs shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Alternate Live View</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Hero Visual Preview */}
            {heroImage && (
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950/5 mb-14">
                <img
                  src={heroImage}
                  alt={project.title}
                  className="w-full h-auto object-cover max-h-[620px]"
                />
              </div>
            )}

          </header>

          {/* ================================================== */}
          {/* 2. KEY METRICS HIGHLIGHT                           */}
          {/* ================================================== */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                Benchmark Metrics &amp; Telemetry
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      {m.label}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================================================== */}
          {/* 3. PROJECT OVERVIEW, PROBLEM & APPROACH           */}
          {/* ================================================== */}
          <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Overview */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-3">
                  <FileText className="w-4 h-4" />
                  <span>Project Overview</span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                  What is this project?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Problem */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-bold uppercase tracking-wider mb-3">
                  <Activity className="w-4 h-4" />
                  <span>Business Challenge</span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                  The Problem Solved
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.problem || project.shortDescription}
                </p>
              </div>
            </div>

            {/* Approach */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Strategic Approach</span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                  How I Solved It
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.approach || "Engineered an end-to-end relational data model, custom analytical measures, and interactive reporting interface."}
                </p>
              </div>
            </div>

          </section>

          {/* ================================================== */}
          {/* 4. PIPELINE / ARCHITECTURE DIAGRAM (IF APPLICABLE) */}
          {/* ================================================== */}
          {project.presentationType === 'architecture' && (
            <section className="mb-16">
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                Architecture &amp; Data Lineage
              </h2>
              <ArchitectureVisualizer project={project} />
            </section>
          )}

          {/* ================================================== */}
          {/* 5. KEY ENGINEERING CONTRIBUTIONS & HIGHLIGHTS      */}
          {/* ================================================== */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="mb-16 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Technical Implementation</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">
                Key Engineering Highlights
              </h2>

              <ul className="space-y-3.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ================================================== */}
          {/* 6. VERTICAL CASE-STUDY GALLERY — NO SLIDESHOW      */}
          {/* ================================================== */}
          {project.assets && project.assets.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
                    Case Study Walkthrough
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mt-1">
                    Visual Analytics Gallery ({project.assets.length} Views)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
                    Scroll through the project workflow sequentially &bull; Click any view to expand
                  </p>
                </div>
              </div>

              {/* Vertical Case-Study Gallery Component */}
              <ProjectGallery
                assets={project.assets}
                hasThemeToggle={project.hasThemeToggle}
                isDataBuzz={isDataBuzz}
                projectNumber={project.number}
              />
            </section>
          )}

          {/* ================================================== */}
          {/* 7. TECHNOLOGY STACK PILLS                          */}
          {/* ================================================== */}
          <section className="mb-16 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
              Technologies &amp; Tools Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 font-medium shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* ================================================== */}
          {/* 8. NEXT / PREVIOUS PROJECT NAVIGATION FOOTER       */}
          {/* ================================================== */}
          <footer className="pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/work/${prevProject.id}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Project ({prevProject.number})</span>
              </span>
              <span className="font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-2 text-sm sm:text-base line-clamp-1">
                {prevProject.title}
              </span>
            </Link>

            <Link
              to={`/work/${nextProject.id}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between text-right"
            >
              <span className="text-xs font-mono text-slate-400 uppercase flex items-center justify-end gap-1">
                <span>Next Project ({nextProject.number})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span className="font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-2 text-sm sm:text-base line-clamp-1">
                {nextProject.title}
              </span>
            </Link>
          </footer>

        </div>
      </article>
    </PageTransition>
  );
}
