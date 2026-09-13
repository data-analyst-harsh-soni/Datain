import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Database, BarChart3, Shield, Cpu, Code2, Layers, CheckCircle2 } from 'lucide-react';
import ProfileHero from '../components/ProfileHero';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';

export default function AboutPage() {
  const journeyMilestones = [
    {
      step: "01",
      role: "DATA ANALYST INTERN",
      duration: "01/01/2026 – 01/06/2026",
      desc: "Hands-on analytics experience, data preparation, pipeline workflow optimization, and practical data modeling work."
    },
    {
      step: "02",
      role: "TECH LEAD",
      duration: "01/06/2026 – 01/09/2026",
      desc: "Technical leadership, analytics delivery, engineering best practices, and cross-functional team coordination responsibilities."
    },
    {
      step: "03",
      role: "DATABUZZ — GLOBAL TOP 5",
      duration: "May 2026",
      desc: "Secured a Global Top 5 position in the DataBuzz competition held in May 2026."
    }
  ];

  return (
    <PageTransition>
      <PageMeta 
        title="Harsh Soni | About"
        description="Learn more about Harsh Soni, Data Analyst and Analytics Engineer. Explore my background, problem-solving philosophy, engineering approach, and journey."
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#EEF5FF] via-white to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Large 3D Profile Frame */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <ProfileHero size="large" />
            </div>

            {/* Right: Personal Bio */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Personal Story &amp; Identity</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                Hi, I'm <span className="text-gradient">Harsh Soni</span>.
              </h1>

              <div className="text-sm sm:text-base font-mono font-semibold text-blue-700 mb-6">
                Data Analyst &bull; Analytics Engineer &bull; Technology &amp; BI
              </div>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  I'm a final-year Computer Science student and analytics practitioner based in Jabalpur, MP. I don't just calculate metrics — I design reliable, scalable systems that turn messy data into clear, decision-ready intelligence.
                </p>
                <p className="text-slate-600 text-base">
                  I've engineered analytics solutions processing <strong>35M+ records</strong>, designed Kimball star schemas in dbt and Snowflake, modeled actuarial loss ratios across 50,000 insurance policies, and placed in the <strong>Global Top 5</strong> of the international DataBuzz competition in May 2026.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                <Link
                  to="/work"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-medium text-xs shadow-sm transition-all"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* My Engineering & Analytics Philosophy */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              HOW I THINK ABOUT DATA
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-mono">
              Four principles that guide every model, pipeline, and dashboard I build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-mono font-bold text-lg mb-6">
                01
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Systems Over Ad-Hoc Scripts
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Raw data is volatile. Rather than writing one-off spreadsheets, I build resilient pipelines with modular transformations (dbt/SQL), clean dimensional staging, and automated schema assertions so numbers remain trusted over time.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-mono font-bold text-lg mb-6">
                02
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Business Context Dictates Architecture
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A metric without business meaning is noise. I design star schemas around real questions: What is the lead-to-completion time lag? Where are mortgage rates stressing buyer affordability? Why is customer churn accelerating?
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-600 font-mono font-bold text-lg mb-6">
                03
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Decision-Ready Visual Craftsmanship
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A dashboard should guide action in seconds, not demand a manual. I invest deeply in UX hierarchy, intentional color palettes (Figma-crafted dark &amp; light modes), and DAX time-intelligence that highlights variances immediately.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-mono font-bold text-lg mb-6">
                04
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Ownership &amp; Transparent Engineering
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From raw CSV ingest and PostgreSQL database administration to automated testing and stakeholder presentation, I take end-to-end ownership of the data lifecycle with zero hand-waving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corrected Journey Timeline */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              MY JOURNEY
            </h2>
            <p className="text-slate-500 text-sm font-mono mt-2">
              Career progression, leadership experience, and competitive milestones
            </p>
          </div>

          <div className="space-y-6">
            {journeyMilestones.map((m) => (
              <div 
                key={m.step} 
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:bg-white transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {m.step}
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 tracking-tight">
                      {m.role}
                    </h3>
                  </div>

                  <div className="text-xs font-mono font-semibold text-blue-700 sm:pl-11">
                    {m.duration}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed sm:pl-11 pt-1 max-w-xl">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4">
            Interested in collaborating or discussing an analytics role?
          </h2>
          <p className="text-slate-400 text-sm mb-8 font-mono">
            I am currently open to full-time roles, internships, and high-impact analytics opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-all"
            >
              Contact Me Directly
            </Link>
            <Link
              to="/resume"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all border border-white/20"
            >
              View Full Resume
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
