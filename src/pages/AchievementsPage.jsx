import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
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

      <section className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-blue-600" />
              <span>Honors &amp; Recognition</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              ACHIEVEMENTS &amp; RECOGNITION
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-mono">
              Competitive analytics finishes, civic leadership honors, and verified credentials.
            </p>
          </div>

          {/* ================================================== */}
          {/* 1. FLAGSHIP DISTINCTION: DATABUZZ GLOBAL TOP 5      */}
          {/* ================================================== */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 text-white shadow-xl mb-10 relative overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute right-10 -bottom-10 w-60 h-60 rounded-full border border-white/10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-yellow-300 text-xs font-mono font-bold uppercase tracking-widest mb-4 border border-white/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Global Analytics Competition</span>
                </div>

                <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-2">
                  DataBuzz &bull; Global Top 5
                </h2>

                <p className="text-blue-200 font-mono text-sm sm:text-base font-semibold mb-5">
                  May 2026 &bull; International Analytics Competition
                </p>

                <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Secured a Global Top 5 position in the DataBuzz competition held in May 2026. Architected an end-to-end 15-page UK Real Estate Decision Intelligence Platform in Power BI with star-schema modeling, DAX time-lag logic, and mortgage stress scenario intelligence.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Global Top 5', 'May 2026', '15 Interactive Dashboards', 'DAX USERELATIONSHIP', 'Scenario Stress Testing'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/work/databuzz-global-competition"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-900 hover:bg-blue-50 font-semibold text-xs shadow-lg transition-all"
                >
                  <span>Explore DataBuzz Case Study</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </Link>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/30 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
                  <Trophy className="w-14 h-14 sm:w-16 sm:h-16 text-yellow-300 mb-2 filter drop-shadow-md" />
                  <span className="font-display font-black text-2xl text-white">
                    TOP 5
                  </span>
                  <span className="text-[11px] font-mono text-blue-200 tracking-wider uppercase">
                    May 2026
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ================================================== */}
          {/* 2. CAMPUS LEADERSHIP: ELC AMBASSADOR & COLLECTORATE */}
          {/* ================================================== */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-violet-50 border border-violet-200 flex flex-col items-center justify-center p-6 text-center shadow-sm">
                  <Award className="w-12 h-12 text-violet-600 mb-2" />
                  <span className="font-display font-bold text-base text-slate-900">
                    HONOURED
                  </span>
                  <span className="text-[10px] font-mono text-violet-700 tracking-wider uppercase font-semibold">
                    Collectorate Ceremony
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                  <Award className="w-3.5 h-3.5 text-violet-600" />
                  <span>Sole Student Representative &bull; Civic Recognition</span>
                </div>

                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-2">
                  ELC Campus Ambassador &bull; Collectorate Recognition
                </h2>

                <p className="text-violet-700 font-mono text-xs sm:text-sm font-semibold mb-4">
                  Electoral Literacy Club (ELC) &bull; District Collectorate Ceremony
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Selected as the sole student representative from the college and honoured at the Collectorate recognition ceremony in acknowledgment of outstanding contribution to campus-level Electoral Literacy Club initiatives.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Organized and coordinated campus-wide student participation events and voter awareness initiatives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Represented the student body before administrative officials at the District Collectorate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Demonstrated institutional accountability, communication, and large-scale event organization.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* ================================================== */}
          {/* 3. VERIFIED CERTIFICATIONS — TEXT-ONLY PRESENTATION */}
          {/* ================================================== */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-3 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verified Technical Credentials</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
              VERIFIED CERTIFICATIONS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-mono mb-8">
              Text-only verified certification records from certified issuers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verifiedCertifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3 hover:bg-white hover:border-blue-300 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-display font-bold text-slate-900 leading-snug">
                      {cert.name}
                    </div>
                    <div className="text-xs font-mono text-slate-500">
                      &mdash; {cert.issuer}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-blue-700 font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
