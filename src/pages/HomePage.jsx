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
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#F1ECF6] via-[#F7F4FA] to-white dark:from-[#15111F] dark:via-[#0E0B15] dark:to-[#0E0B15] transition-colors duration-300">
        {/* 3D WebGL Background Scene */}
        <ThreeScene />

        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none z-0" />
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* 3D Profile Frame Presentation — Mobile Top, Desktop Right */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center">
              <ProfileHero size="large" />
            </div>

            {/* Personal Introduction & Identity — Mobile Below Photo, Desktop Left */}
            <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Position / Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-[#15111F]/95 border border-[#DED5E8] dark:border-[#342A43] text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(118,87,232,0.08)]">
                <span className="w-2 h-2 rounded-full bg-[#7657E8] dark:bg-[#BDA8FF] animate-ping" />
                <span>Personal Portfolio</span>
                <span className="text-[#DED5E8] dark:text-[#342A43]">&bull;</span>
                <span className="text-[#6F6678] dark:text-[#9E92AA]">2026</span>
              </div>

              {/* Name & Titles */}
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#211A2B] dark:text-[#F5F0FA] leading-[1.05] mb-3 sm:mb-4">
                HARSH SONI
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-base md:text-lg font-mono font-semibold text-[#7657E8] dark:text-[#BDA8FF] mb-4 sm:mb-6">
                <span>Data Analyst</span>
                <span className="text-[#DED5E8] dark:text-[#342A43]">&bull;</span>
                <span>Analytics Engineer</span>
                <span className="text-[#DED5E8] dark:text-[#342A43]">&bull;</span>
                <span>Tech Lead</span>
              </div>

              {/* Short Powerful Personal Statement */}
              <blockquote className="text-[#211A2B] dark:text-[#F5F0FA] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal border-l-0 lg:border-l-2 lg:border-[#7657E8]/50 lg:pl-5 italic">
                “I turn complex data into intelligent systems, actionable insights, and decision-ready experiences.”
              </blockquote>

              {/* Focus Pillars Quick Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                {['Star Schema Modeling', 'Power BI & Advanced DAX', 'SQL & PostgreSQL', 'dbt & Snowflake', 'Python & ML'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-white/90 dark:bg-[#15111F]/90 border border-[#DED5E8] dark:border-[#342A43] text-[11px] sm:text-xs font-mono text-[#6F6678] dark:text-[#C9BED4] shadow-xs backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Clear CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                <Link
                  to="/work"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#7657E8] to-[#A76BCE] hover:from-[#6746db] hover:to-[#995ac0] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_25px_rgba(118,87,232,0.28)] hover:shadow-[0_12px_32px_rgba(118,87,232,0.38)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                  data-cursor="PROJECTS"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/90 dark:bg-[#15111F]/90 border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8]/50 hover:bg-white dark:hover:bg-[#1B1627] font-medium text-xs sm:text-sm transition-all duration-200 backdrop-blur-md shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
                  data-cursor="CONTACT"
                >
                  <span>Get in Touch</span>
                </Link>

                <Link
                  to="/about"
                  className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-transparent hover:bg-[#F1ECF6]/80 dark:hover:bg-[#1B1627] text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA] font-mono text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                  data-cursor="ABOUT"
                >
                  <User className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF]" />
                  <span>About</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. CONCISE ABOUT PREVIEW                           */}
      {/* ================================================== */}
      <section className="py-20 bg-white dark:bg-[#15111F] border-t border-[#DED5E8]/60 dark:border-[#342A43] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                <span>Personal Overview</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight leading-tight">
                Architecting Data into Decisive Value.
              </h2>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-base leading-relaxed mt-4">
                I am a final-year Computer Science student and Data Analyst with hands-on experience across Power BI, SQL, Python, and analytics engineering.
              </p>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7657E8] dark:text-[#BDA8FF] hover:text-[#6746DB] dark:hover:text-white group font-mono"
                >
                  <span>More About Me &amp; My Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:border-[#7657E8] dark:hover:border-[#9A7BFF] transition-colors">
                <Database className="w-6 h-6 text-[#7657E8] dark:text-[#BDA8FF] mb-3" />
                <h3 className="font-display font-bold text-[#211A2B] dark:text-[#F5F0FA] text-base mb-1">
                  Analytics Engineering
                </h3>
                <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs leading-relaxed">
                  Transforming raw unstructured data lakes into tested, documented, and governed dimensional models using dbt Core, Snowflake, and star schemas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:border-[#A76BCE] dark:hover:border-[#D178E8] transition-colors">
                <BarChart3 className="w-6 h-6 text-[#A76BCE] dark:text-[#D178E8] mb-3" />
                <h3 className="font-display font-bold text-[#211A2B] dark:text-[#F5F0FA] text-base mb-1">
                  Decision Intelligence
                </h3>
                <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs leading-relaxed">
                  Engineering multi-page Power BI platforms with custom DAX calculations, scenario what-if modeling, and executive scorecards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:border-[#7657E8] dark:hover:border-[#9A7BFF] transition-colors">
                <Compass className="w-6 h-6 text-[#7657E8] dark:text-[#BDA8FF] mb-3" />
                <h3 className="font-display font-bold text-[#211A2B] dark:text-[#F5F0FA] text-base mb-1">
                  Predictive &amp; ML Models
                </h3>
                <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs leading-relaxed">
                  Extracting quantitative indicators, technical signals, and building end-to-end Python/FastAPI predictive pipelines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:border-[#7BC7A6] dark:hover:border-[#7FD1AD] transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#7BC7A6] dark:text-[#7FD1AD] mb-3" />
                <h3 className="font-display font-bold text-[#211A2B] dark:text-[#F5F0FA] text-base mb-1">
                  Technology Leadership
                </h3>
                <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs leading-relaxed">
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
      <section className="py-24 bg-[#F7F4FA] dark:bg-[#0E0B15] border-t border-[#DED5E8] dark:border-[#342A43] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Selected Portfolio</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
                FEATURED PROJECTS
              </h2>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base mt-2 max-w-xl font-normal">
                A curated selection of flagship projects spanning real estate intelligence, analytics engineering pipelines, and actuarial risk modeling.
              </p>
            </div>

            <Link
              to="/work"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8]/50 font-medium text-xs shadow-xs transition-all duration-200"
            >
              <span>View All 16 Projects</span>
              <ArrowRight className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF]" />
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7657E8] hover:bg-[#6746db] dark:bg-[#15111F] dark:hover:bg-[#7657E8] text-white dark:border dark:border-[#342A43] font-semibold text-sm shadow-md shadow-[#7657E8]/20 transition-all duration-200"
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
