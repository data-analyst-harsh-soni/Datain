import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, FileText, User, Layers, ArrowUpRight, Award, Compass, Database, BarChart3, ShieldCheck } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';
import ProfileHero from '../components/ProfileHero';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import { projects } from '../data/projects';
import { experience } from '../data/experience';

export default function HomePage() {
  // Show 4 selected flagship projects on Home: DataBuzz, Netflix dbt, RiskPulse, Stock Market
  const featuredProjects = projects.slice(0, 4);

  return (
    <PageTransition>
      <PageMeta 
        title="Harsh Soni | Data Analyst & Analytics Engineer"
        description="Personal portfolio of Harsh Soni. Data Analyst and Analytics Engineer turning complex data into intelligent systems, actionable insights, and decision-ready experiences."
      />

      {/* ================================================== */}
      {/* 1. HERO SECTION — PERSONAL IDENTITY FIRST          */}
      {/* ================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#EEF5FF] via-[#F8FAFC] to-[#FFFFFF]">
        {/* 3D WebGL Background Scene */}
        <ThreeScene />

        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none z-0" />
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Personal Introduction & Identity */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Position / Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(37,99,235,0.08)]">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span>Personal Portfolio</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-500">2025</span>
              </div>

              {/* Name & Titles */}
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 leading-[1.05] mb-4">
                HARSH SONI
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-mono font-semibold text-blue-700 mb-6">
                <span>Data Analyst</span>
                <span className="text-slate-300">&bull;</span>
                <span>Analytics Engineer</span>
                <span className="text-slate-300">&bull;</span>
                <span>Tech Lead</span>
              </div>

              {/* Short Powerful Personal Statement */}
              <blockquote className="text-slate-700 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mb-8 font-normal border-l-0 lg:border-l-2 lg:border-blue-500/40 lg:pl-5 italic">
                “I turn complex data into intelligent systems, actionable insights, and decision-ready experiences.”
              </blockquote>

              {/* Focus Pillars Quick Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10">
                {['Star Schema Modeling', 'Power BI & Advanced DAX', 'SQL & PostgreSQL', 'dbt & Snowflake', 'Python & ML'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-xs font-mono text-slate-600 shadow-xs backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Clear CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
                <Link
                  to="/work"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(37,99,235,0.28)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                  data-cursor="PROJECTS"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-white font-medium text-sm transition-all duration-200 backdrop-blur-md shadow-sm flex items-center gap-2"
                  data-cursor="ABOUT"
                >
                  <User className="w-4 h-4 text-blue-600" />
                  <span>About Me</span>
                </Link>

                <Link
                  to="/resume"
                  className="px-5 py-3.5 rounded-full bg-transparent hover:bg-slate-100/80 text-slate-600 hover:text-slate-900 font-mono text-xs transition-colors flex items-center gap-1.5"
                  data-cursor="RESUME"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>View Resume</span>
                </Link>
              </div>

            </div>

            {/* Right Column: 3D Profile Frame Presentation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <ProfileHero size="large" />
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. CONCISE ABOUT PREVIEW                           */}
      {/* ================================================== */}
      <section className="py-20 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personal Overview</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Architecting Data into Decisive Value.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mt-4">
                I am a final-year Computer Science student and Data Analyst with hands-on experience across Power BI, SQL, Python, and analytics engineering.
              </p>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group font-mono"
                >
                  <span>More About Me &amp; My Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <Database className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                  Analytics Engineering
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Transforming raw unstructured data lakes into tested, documented, and governed dimensional models using dbt Core, Snowflake, and star schemas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <BarChart3 className="w-6 h-6 text-indigo-600 mb-3" />
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                  Decision Intelligence
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Engineering multi-page Power BI platforms with custom DAX calculations, scenario what-if modeling, and executive scorecards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <Compass className="w-6 h-6 text-violet-600 mb-3" />
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                  Predictive &amp; ML Models
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Extracting quantitative indicators, technical signals, and building end-to-end Python/FastAPI predictive pipelines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                  Technology Leadership
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Led a 25-person analytics team at The Entrepreneurship Network (TEN), setting architectural standards and delivering 5+ end-to-end projects.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. SELECTED WORK PREVIEW (TOP 4 PROJECTS)           */}
      {/* ================================================== */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Selected Portfolio</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
                FEATURED PROJECTS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
                A curated selection of flagship projects spanning real estate intelligence, analytics engineering pipelines, and actuarial risk modeling.
              </p>
            </div>

            <Link
              to="/work"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium text-xs shadow-xs transition-all duration-200"
            >
              <span>View All 16 Projects</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          {/* Grid of 4 Selected Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom CTA to /work */}
          <div className="mt-14 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-blue-600 font-semibold text-sm shadow-md transition-all duration-200"
            >
              <span>Explore The Complete 16-Project Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
