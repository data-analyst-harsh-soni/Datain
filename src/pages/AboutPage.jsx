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
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F1ECF6] via-[#F7F4FA] to-white dark:from-[#15111F] dark:via-[#0E0B15] dark:to-[#0E0B15] relative overflow-hidden transition-colors duration-300">
        {/* Subtle decorative glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#C7B6F7]/20 dark:bg-[#7657E8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* 3D Profile Frame — Mobile Top (order-1), Desktop Left (lg:order-1) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <ProfileHero size="large" />
            </div>

            {/* Personal Bio — Mobile Below Photo (order-2), Desktop Right (lg:order-2) */}
            <div className="lg:col-span-7 order-2 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                <span>Personal Story &amp; Identity</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight leading-[1.1] mb-3 sm:mb-4">
                Hi, I'm <span className="text-gradient">Harsh Soni</span>.
              </h1>

              <div className="text-xs sm:text-base font-mono font-semibold text-[#7657E8] dark:text-[#BDA8FF] mb-5 sm:mb-6">
                Data Analyst &bull; Analytics Engineer &bull; Technology &amp; BI
              </div>

              <div className="space-y-4 text-[#211A2B] dark:text-[#F5F0FA] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                <p>
                  I'm a final-year Computer Science student and analytics practitioner based in Jabalpur, MP. I don't just calculate metrics — I design reliable, scalable systems that turn messy data into clear, decision-ready intelligence.
                </p>
                <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-base leading-relaxed">
                  I've engineered analytics solutions processing <strong className="text-[#211A2B] dark:text-[#F5F0FA] font-semibold">35M+ records</strong>, designed Kimball star schemas in dbt and Snowflake, modeled actuarial loss ratios across 50,000 insurance policies, and placed in the <strong className="text-[#7657E8] dark:text-[#BDA8FF] font-semibold">Global Top 5</strong> of the international DataBuzz competition in May 2026.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mt-8">
                <Link
                  to="/work"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7657E8] to-[#A76BCE] hover:from-[#6746db] hover:to-[#995ac0] text-white font-semibold text-xs shadow-md shadow-[#7657E8]/20 transition-all flex items-center gap-2 min-h-[44px]"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] hover:border-[#7657E8] text-[#211A2B] dark:text-[#F5F0FA] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] font-medium text-xs shadow-2xs transition-all min-h-[44px] flex items-center"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* My Engineering & Analytics Philosophy */}
      <section className="py-20 bg-white dark:bg-[#15111F] border-t border-[#DED5E8]/80 dark:border-[#342A43] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-widest block mb-2">
              Engineering Mindset
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
              HOW I THINK ABOUT DATA
            </h2>
            <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base mt-2 font-mono">
              Four principles that guide every model, pipeline, and dashboard I build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:shadow-md hover:border-[#7657E8] dark:hover:border-[#9A7BFF] transition-all duration-300 group relative">
              <div className="w-11 h-11 rounded-2xl bg-[#F1ECF6] dark:bg-[#211B2F] border border-[#C7B6F7] dark:border-[#7657E8]/40 flex items-center justify-center text-[#7657E8] dark:text-[#BDA8FF] font-mono font-bold text-base mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                01
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#211A2B] dark:text-[#F5F0FA] mb-2 group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-colors">
                Systems Over Ad-Hoc Scripts
              </h3>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm leading-relaxed">
                Raw data is volatile. Rather than writing one-off spreadsheets, I build resilient pipelines with modular transformations (dbt/SQL), clean dimensional staging, and automated schema assertions so numbers remain trusted over time.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:shadow-md hover:border-[#A76BCE] dark:hover:border-[#D178E8] transition-all duration-300 group relative">
              <div className="w-11 h-11 rounded-2xl bg-[#EEE6FF] dark:bg-[#29203A] border border-[#C7B6F7] dark:border-[#A76BCE]/40 flex items-center justify-center text-[#A76BCE] dark:text-[#D178E8] font-mono font-bold text-base mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#211A2B] dark:text-[#F5F0FA] mb-2 group-hover:text-[#A76BCE] dark:group-hover:text-[#D178E8] transition-colors">
                Business Context Dictates Architecture
              </h3>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm leading-relaxed">
                A metric without business meaning is noise. I design star schemas around real questions: What is the lead-to-completion time lag? Where are mortgage rates stressing buyer affordability? Why is customer churn accelerating?
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:shadow-md hover:border-[#7657E8] dark:hover:border-[#9A7BFF] transition-all duration-300 group relative">
              <div className="w-11 h-11 rounded-2xl bg-[#F1ECF6] dark:bg-[#211B2F] border border-[#C7B6F7] dark:border-[#7657E8]/40 flex items-center justify-center text-[#7657E8] dark:text-[#BDA8FF] font-mono font-bold text-base mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#211A2B] dark:text-[#F5F0FA] mb-2 group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-colors">
                Decision-Ready Visual Craftsmanship
              </h3>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm leading-relaxed">
                A dashboard should guide action in seconds, not demand a manual. I invest deeply in UX hierarchy, intentional color palettes (Figma-crafted dark &amp; light modes), and DAX time-intelligence that highlights variances immediately.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:shadow-md hover:border-[#7BC7A6] dark:hover:border-[#7FD1AD] transition-all duration-300 group relative">
              <div className="w-11 h-11 rounded-2xl bg-[#F1ECF6] dark:bg-[#1B2720] border border-[#7BC7A6]/40 flex items-center justify-center text-[#7BC7A6] dark:text-[#7FD1AD] font-mono font-bold text-base mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                04
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#211A2B] dark:text-[#F5F0FA] mb-2 group-hover:text-[#7BC7A6] dark:group-hover:text-[#7FD1AD] transition-colors">
                Ownership &amp; Transparent Engineering
              </h3>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm leading-relaxed">
                From raw CSV ingest and PostgreSQL database administration to automated testing and stakeholder presentation, I take end-to-end ownership of the data lifecycle with zero hand-waving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corrected Journey Timeline — Centered, Balanced, Connector */}
      <section className="py-20 bg-[#F7F4FA] dark:bg-[#0E0B15] border-t border-[#DED5E8] dark:border-[#342A43] relative transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-widest block mb-2">
              Progression &amp; Milestones
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
              MY JOURNEY
            </h2>
            <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm font-mono mt-2">
              Career progression, leadership experience, and competitive milestones
            </p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Connector Line (Desktop) */}
            <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#7657E8] via-[#A76BCE] to-[#C7B6F7] rounded-full" />

            <div className="space-y-6 relative">
              {journeyMilestones.map((m) => {
                const isDataBuzz = m.step === '03';
                return (
                  <div 
                    key={m.step} 
                    className="relative flex items-start gap-4 sm:gap-6"
                  >
                    {/* Node Dot on Desktop */}
                    <div className="hidden sm:flex w-16 items-center justify-center shrink-0 pt-6 z-10">
                      <div className={`w-4 h-4 rounded-full border-4 bg-white dark:bg-[#15111F] shadow-xs ${
                        isDataBuzz ? 'border-[#A76BCE] ring-4 ring-[#EEE6FF] dark:ring-[#29203A]' : 'border-[#7657E8] ring-4 ring-[#F1ECF6] dark:ring-[#211B2F]'
                      }`} />
                    </div>

                    {/* Milestone Card */}
                    <div className={`flex-1 p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                      isDataBuzz 
                        ? 'bg-gradient-to-br from-white via-[#F1ECF6] to-[#EEE6FF] dark:from-[#15111F] dark:via-[#1B1627] dark:to-[#211B2F] border-[#C7B6F7] dark:border-[#7657E8]/50 shadow-sm hover:shadow-md hover:border-[#7657E8]' 
                        : 'bg-white dark:bg-[#15111F] border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:shadow-md hover:border-[#7657E8] dark:hover:border-[#9A7BFF]'
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-7 h-7 rounded-lg text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs ${
                            isDataBuzz ? 'bg-gradient-to-r from-[#7657E8] to-[#A76BCE]' : 'bg-[#7657E8]'
                          }`}>
                            {m.step}
                          </span>
                          <h3 className="font-display font-black text-base sm:text-lg text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
                            {m.role}
                          </h3>
                        </div>

                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F1ECF6] dark:bg-[#211B2F] text-[#7657E8] dark:text-[#BDA8FF] border border-[#C7B6F7] dark:border-[#7657E8]/40">
                          {m.duration}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#6F6678] dark:text-[#C9BED4] leading-relaxed mt-2 pl-0 sm:pl-9">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Container */}
      <section className="py-16 sm:py-20 bg-[#F1ECF6] dark:bg-[#0E0B15] px-4 sm:px-6 lg:px-8 border-t border-[#DED5E8] dark:border-[#342A43] transition-colors duration-300">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#211A2B] dark:bg-[#15111F] text-[#F5F0FA] p-8 sm:p-12 text-center shadow-xl border border-[#342A43] relative overflow-hidden">
          {/* Subtle glow inside card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#7657E8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display font-bold text-xl sm:text-3xl mb-3 sm:mb-4 text-[#F5F0FA]">
              Interested in collaborating or discussing an analytics role?
            </h2>
            <p className="text-[#C9BED4] text-xs sm:text-sm mb-8 font-mono max-w-xl mx-auto">
              I am currently open to full-time roles, internships, and high-impact analytics opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/work"
                className="px-6 py-3 rounded-full bg-[#7657E8] hover:bg-[#6746db] text-white font-semibold text-xs shadow-lg shadow-[#7657E8]/30 transition-all inline-flex items-center gap-2 min-h-[44px]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/resume"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F0FA] font-medium text-xs transition-all border border-white/20 inline-flex items-center min-h-[44px]"
              >
                View Full Resume
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F0FA] font-medium text-xs transition-all border border-white/20 inline-flex items-center min-h-[44px]"
              >
                Contact Me Directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
