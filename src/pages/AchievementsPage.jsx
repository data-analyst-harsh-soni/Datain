import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';

export default function AchievementsPage() {
  const verifiedCertifications = [
    {
      name: "Advanced Excel",
      issuer: "Accounts Expert Training Services",
      date: "May 2026"
    },
    {
      name: "AWS Academy Graduate: Machine Learning Foundations",
      issuer: "AWS",
      date: "April 2026"
    },
    {
      name: "Data Analytics (Python, SQL, Power BI)",
      issuer: "Cisco Networking Academy",
      date: "January 2026"
    },
    {
      name: "Introduction to Data Science and Machine Learning",
      issuer: "Cisco Networking Academy",
      date: "February 2026"
    },
    {
      name: "Data Analysis with Python & Machine Learning",
      issuer: "Microsoft Learn",
      date: "November 2025"
    },
    {
      name: "Data Analysis using KQL",
      issuer: "Microsoft Learn",
      date: "October 2024"
    },
    {
      name: "Build with AI",
      issuer: "Google Developer Group",
      date: "November 2024"
    }
  ];

  return (
    <PageTransition>
      <PageMeta
        title="Harsh Soni | Achievements"
        description="Verified honors, awards, and distinctions earned by Harsh Soni, including Global Top 5 in DataBuzz (May 2026) and Collectorate Recognition as ELC Campus Ambassador."
      />

      <section className="pt-32 pb-24 bg-[#F7F4FA] dark:bg-[#0E0B15] min-h-screen transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
              <span>ACHIEVEMENTS &amp; RECOGNITION</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
              ACHIEVEMENTS &amp; RECOGNITION
            </h1>
            <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base mt-3 leading-relaxed font-normal">
              Milestones that reflect analytical performance, initiative, and contribution.
            </p>
          </div>

          {/* ================================================== */}
          {/* PERSONAL ACHIEVEMENT TIMELINE                      */}
          {/* ================================================== */}
          <div className="relative mb-20">
            
            {/* Vertical Connector Line */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#7657E8] via-[#A76BCE] to-[#C7B6F7]" />

            <div className="space-y-8 relative">
              
              {/* Milestone 01: DataBuzz Global Top 5 */}
              <div className="relative sm:pl-20 group">
                {/* Timeline Number Node */}
                <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-7 w-9 h-9 rounded-xl bg-gradient-to-br from-[#7657E8] to-[#A76BCE] text-white font-mono font-bold text-xs items-center justify-center shadow-md shadow-[#7657E8]/30 z-10">
                  01
                </div>

                <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-[#F1ECF6] to-[#EEE6FF] dark:from-[#15111F] dark:via-[#1B1627] dark:to-[#211B2F] border border-[#C7B6F7] dark:border-[#7657E8]/50 shadow-sm hover:shadow-md hover:border-[#7657E8] transition-all">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="sm:hidden w-7 h-7 rounded-lg bg-[#7657E8] text-white font-mono font-bold text-xs flex items-center justify-center">
                        01
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE6FF] dark:bg-[#29203A] text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-bold uppercase tracking-wider">
                        <Trophy className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                        <span>Global Analytics Competition</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#7657E8] dark:text-[#BDA8FF] bg-white dark:bg-[#15111F] px-3 py-1 rounded-full border border-[#DED5E8] dark:border-[#342A43] shadow-2xs">
                      May 2026
                    </span>
                  </div>

                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight mb-2">
                    DataBuzz &mdash; Global Top 5
                  </h2>

                  <p className="text-[#211A2B] dark:text-[#F5F0FA] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Secured a Global Top 5 position in the DataBuzz competition held in May 2026.
                  </p>

                  <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm leading-relaxed mb-6">
                    Architected an enterprise-grade 15-dashboard UK Real Estate Decision Intelligence Platform in Power BI. Modeled £970M in transaction volume across 10 UK regions using star schemas, DAX USERELATIONSHIP time-lag calculations, and mortgage scenario stress testing.
                  </p>

                  <div className="pt-4 border-t border-[#DED5E8] dark:border-[#342A43] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {['Global Top 5', 'May 2026', 'Power BI', 'Advanced DAX', '15 Views'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] font-mono text-[11px] text-[#7657E8] dark:text-[#BDA8FF] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/work/databuzz-global-competition"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7657E8] hover:bg-[#6746db] text-white font-semibold text-xs shadow-sm shadow-[#7657E8]/20 hover:scale-[1.02] active:scale-[0.98] transition-all group/btn"
                    >
                      <span>Explore DataBuzz Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>

              {/* Milestone 02: ELC Campus Ambassador */}
              <div className="relative sm:pl-20 group">
                {/* Timeline Number Node */}
                <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-7 w-9 h-9 rounded-xl bg-white dark:bg-[#15111F] border-2 border-[#A76BCE] text-[#A76BCE] dark:text-[#D178E8] font-mono font-bold text-xs items-center justify-center shadow-sm z-10">
                  02
                </div>

                <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-sm hover:shadow-md hover:border-[#A76BCE] transition-all">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="sm:hidden w-7 h-7 rounded-lg bg-[#EEE6FF] dark:bg-[#29203A] text-[#A76BCE] dark:text-[#D178E8] font-mono font-bold text-xs flex items-center justify-center">
                        02
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1ECF6] dark:bg-[#211B2F] text-[#A76BCE] dark:text-[#D178E8] text-xs font-mono font-bold uppercase tracking-wider border border-[#C7B6F7] dark:border-[#A76BCE]/40">
                        <Award className="w-3.5 h-3.5 text-[#A76BCE] dark:text-[#D178E8]" />
                        <span>Civic &amp; Campus Leadership</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#A76BCE] dark:text-[#D178E8] bg-[#F1ECF6] dark:bg-[#211B2F] px-3 py-1 rounded-full border border-[#C7B6F7] dark:border-[#A76BCE]/40">
                      Collectorate Recognition
                    </span>
                  </div>

                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight mb-2">
                    ELC Campus Ambassador
                  </h2>

                  <p className="text-[#211A2B] dark:text-[#F5F0FA] text-sm sm:text-base leading-relaxed mb-4 font-normal">
                    Selected as the sole student representative from the college and honoured at the Collectorate recognition ceremony in acknowledgment of outstanding contribution to campus-level Electoral Literacy Club initiatives.
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#6F6678] dark:text-[#C9BED4] mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7BC7A6] dark:text-[#7FD1AD] shrink-0 mt-0.5" />
                      <span>Organized and coordinated campus-wide student participation events and voter awareness initiatives.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7BC7A6] dark:text-[#7FD1AD] shrink-0 mt-0.5" />
                      <span>Contributed as a student representative during institutional and civic ceremonies.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7BC7A6] dark:text-[#7FD1AD] shrink-0 mt-0.5" />
                      <span>Demonstrated institutional accountability, communication, and large-scale coordination.</span>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-[#F1ECF6] dark:border-[#342A43] flex flex-wrap gap-1.5">
                    {['Campus Leadership', 'Event Coordination', 'Student Representative', 'Civic Engagement'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] font-mono text-[11px] text-[#6F6678] dark:text-[#C9BED4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* ================================================== */}
          {/* VERIFIED CERTIFICATIONS — CLEAN TEXT-ONLY LIST      */}
          {/* ================================================== */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-sm mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-wider mb-2 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF]" />
              <span>Technical Credentials</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight mb-2">
              VERIFIED CERTIFICATIONS
            </h2>
            <p className="text-[#6F6678] dark:text-[#9E92AA] text-xs sm:text-sm font-mono mb-8">
              Text-only verified records from certified institutions &amp; course providers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {verifiedCertifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] flex items-start justify-between gap-3 hover:bg-white dark:hover:bg-[#211B2F] hover:border-[#7657E8] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-display font-bold text-[#211A2B] dark:text-[#F5F0FA] leading-snug">
                      {cert.name}
                    </div>
                    <div className="text-xs font-mono text-[#6F6678] dark:text-[#9E92AA]">
                      &mdash; {cert.issuer}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#7657E8] dark:text-[#BDA8FF] font-semibold px-2 py-0.5 rounded bg-[#F1ECF6] dark:bg-[#211B2F] border border-[#C7B6F7] dark:border-[#7657E8]/40 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Section End CTA */}
          <div className="text-center pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#7657E8] dark:text-[#BDA8FF] hover:text-[#6746db] group"
            >
              <span>Explore All 16 Projects &amp; Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
