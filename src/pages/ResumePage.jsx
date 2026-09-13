import React, { useState } from 'react';
import { 
  FileText, Download, ExternalLink, Linkedin, Github, Mail, 
  GraduationCap, Award, CheckCircle2, Sparkles, Terminal, Eye, EyeOff 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import { resumeData } from '../data/resume';

export default function ResumePage() {
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);

  return (
    <PageTransition>
      <PageMeta 
        title="Harsh Soni | Resume"
        description="Harsh Soni's verified resume, educational credentials, certifications, technical skill matrix, and downloadable PDF resume."
      />

      <section className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Professional Credentials</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              RESUME &amp; IDENTITY
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 font-mono">
              Data Analyst &bull; Power BI &bull; Python &bull; SQL &bull; Analytics Engineering
            </p>
          </div>

          {/* Master Profile & Summary Card */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-md bg-white mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Profile Photo & Direct Channels */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-inner">
                <div className="relative mb-5 group">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-md relative z-10 bg-white">
                    <img
                      src={resumeData.profilePhotoUrl}
                      alt="Harsh Soni"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
                </div>

                <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight">
                  HARSH SONI
                </h2>
                <div className="text-xs font-mono text-blue-700 font-semibold uppercase tracking-wider mt-1 mb-2">
                  {resumeData.title}
                </div>
                <p className="text-xs text-slate-500 font-mono mb-4">
                  {resumeData.location}
                </p>

                {/* PDF Actions */}
                <div className="w-full flex flex-col gap-2.5 pt-2">
                  <a
                    href={resumeData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View PDF in Browser</span>
                  </a>

                  <a
                    href={resumeData.pdfUrl}
                    download="Harsh_Soni_Resume.pdf"
                    className="w-full px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-blue-600" />
                    <span>Download Resume PDF</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowPdfEmbed(!showPdfEmbed)}
                    className="w-full px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {showPdfEmbed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showPdfEmbed ? 'Hide Embedded Viewer' : 'Preview PDF Below'}</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-200/80 w-full justify-center">
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${resumeData.email}`}
                    className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right: Summary & Skills Breakdown */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-2.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  {resumeData.skillGroups.map((group) => (
                    <div key={group.category} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider block mb-2">
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Embedded PDF Viewer (Expandable) */}
          {showPdfEmbed && (
            <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 p-4 animate-fade-in">
              <div className="flex items-center justify-between text-white pb-3 border-b border-slate-800 mb-3 px-2">
                <span className="font-mono text-xs font-semibold">Harsh Soni — Master Resume Preview</span>
                <a
                  href={resumeData.pdfUrl}
                  download="Harsh_Soni_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-mono hover:bg-blue-700"
                >
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </a>
              </div>
              <iframe
                src={resumeData.pdfUrl}
                title="Harsh Soni Resume PDF"
                className="w-full h-[750px] rounded-xl border-0 bg-white"
              />
            </div>
          )}

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Education Card */}
            <div className="lg:col-span-5 rounded-2xl p-6 sm:p-7 border border-slate-200/80 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Formal Education</span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                  {resumeData.education.degree}
                </h3>
                <p className="text-sm text-blue-700 font-semibold">
                  {resumeData.education.institution}
                </p>
                <p className="text-xs font-mono text-slate-500 mt-1 mb-4">
                  {resumeData.education.period} &bull; CGPA: <span className="text-blue-700 font-bold">{resumeData.education.cgpa}</span>
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.education.coursework.map((c) => (
                      <span key={c} className="px-2.5 py-0.5 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Status</span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                  {resumeData.education.standing}
                </span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="lg:col-span-7 rounded-2xl p-6 sm:p-7 border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-700 uppercase tracking-wider mb-4 font-semibold">
                <Award className="w-4 h-4 text-violet-600" />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-3">
                {resumeData.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-900">
                          {cert.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-blue-700 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 flex-shrink-0 font-semibold">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
}
