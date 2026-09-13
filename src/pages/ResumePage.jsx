import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Download, ExternalLink, Linkedin, Github, Mail, 
  GraduationCap, Award, CheckCircle2, Sparkles, Terminal, Eye, EyeOff, ArrowRight 
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

      <section className="pt-32 pb-24 bg-[#F7F4FA] dark:bg-[#0E0B15] min-h-screen transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <FileText className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
              <span>Professional Credentials</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
              RESUME &amp; IDENTITY
            </h1>
            <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base mt-3 font-mono">
              Data Analyst &bull; Power BI &bull; Python &bull; SQL &bull; Analytics Engineering
            </p>
          </div>

          {/* Master Profile & Summary Card */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DED5E8] dark:border-[#342A43] shadow-md bg-white dark:bg-[#15111F] mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Profile Photo & Direct Channels */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] shadow-inner">
                <div className="relative mb-5 group">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#7657E8]/40 dark:border-[#9A7BFF]/50 shadow-md relative z-10 bg-white dark:bg-[#15111F]">
                    <img
                      src={resumeData.profilePhotoUrl}
                      alt="Harsh Soni"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7657E8] via-[#A76BCE] to-[#C7B6F7] opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
                </div>

                <h2 className="font-display font-black text-2xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
                  HARSH SONI
                </h2>
                <div className="text-xs font-mono text-[#7657E8] dark:text-[#BDA8FF] font-semibold uppercase tracking-wider mt-1 mb-2">
                  {resumeData.title}
                </div>
                <p className="text-xs text-[#6F6678] dark:text-[#9E92AA] font-mono mb-4">
                  {resumeData.location}
                </p>

                {/* PDF Actions */}
                <div className="w-full flex flex-col gap-2.5 pt-2">
                  <a
                    href={resumeData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#7657E8] via-[#8F63F2] to-[#A76BCE] hover:from-[#6746db] hover:to-[#995ac0] text-white font-semibold text-xs shadow-md shadow-[#7657E8]/20 hover:shadow-lg hover:shadow-[#7657E8]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View PDF in Browser</span>
                  </a>

                  <a
                    href={resumeData.pdfUrl}
                    download="Harsh_Soni_Resume.pdf"
                    className="w-full min-h-[44px] px-5 py-2.5 rounded-xl bg-white dark:bg-[#15111F] hover:bg-[#F7F4FA] dark:hover:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] text-[#211A2B] dark:text-[#F5F0FA] text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF]" />
                    <span>Download Resume PDF</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowPdfEmbed(!showPdfEmbed)}
                    className="w-full min-h-[44px] px-5 py-2 rounded-xl bg-[#F1ECF6] dark:bg-[#211B2F] hover:bg-[#EEE6FF] dark:hover:bg-[#29203A] text-[#6F6678] dark:text-[#C9BED4] text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {showPdfEmbed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showPdfEmbed ? 'Hide Embedded Viewer' : 'Preview PDF Below'}</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#DED5E8] dark:border-[#342A43] w-full justify-center">
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] transition-all shadow-sm"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA] hover:border-[#342A43] transition-all shadow-sm"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${resumeData.email}`}
                    className="w-9 h-9 rounded-lg bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] flex items-center justify-center text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] hover:border-[#7657E8] transition-all shadow-sm"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right: Summary & Skills Breakdown */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div className="p-6 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-wider mb-2.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-[#211A2B] dark:text-[#F5F0FA] text-sm sm:text-base leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  {resumeData.skillGroups.map((group) => (
                    <div key={group.category} className="p-4 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8]/60 dark:border-[#342A43]">
                      <span className="text-[11px] font-mono text-[#7657E8] dark:text-[#BDA8FF] font-bold uppercase tracking-wider block mb-2">
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] text-xs font-mono text-[#211A2B] dark:text-[#F5F0FA] shadow-xs"
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
            <div className="mb-12 rounded-3xl overflow-hidden border border-[#DED5E8] dark:border-[#342A43] shadow-xl bg-[#211A2B] dark:bg-[#15111F] p-4 animate-fade-in">
              <div className="flex items-center justify-between text-white pb-3 border-b border-[#342A43] mb-3 px-2">
                <span className="font-mono text-xs font-semibold">Harsh Soni — Master Resume Preview</span>
                <a
                  href={resumeData.pdfUrl}
                  download="Harsh_Soni_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#7657E8] text-white text-xs font-mono hover:bg-[#6746db]"
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
            <div className="lg:col-span-5 rounded-2xl p-6 sm:p-7 border border-[#DED5E8] dark:border-[#342A43] bg-white dark:bg-[#15111F] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-wider mb-4 font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF]" />
                  <span>Formal Education</span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#211A2B] dark:text-[#F5F0FA] mb-1">
                  {resumeData.education.degree}
                </h3>
                <p className="text-sm text-[#7657E8] dark:text-[#BDA8FF] font-semibold">
                  {resumeData.education.institution}
                </p>
                <p className="text-xs font-mono text-[#6F6678] dark:text-[#9E92AA] mt-1 mb-4">
                  {resumeData.education.period} &bull; CGPA: <span className="text-[#7657E8] dark:text-[#BDA8FF] font-bold">{resumeData.education.cgpa}</span>
                </p>

                <div className="pt-3 border-t border-[#F1ECF6] dark:border-[#342A43]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F6678] dark:text-[#9E92AA] block mb-2 font-medium">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.education.coursework.map((c) => (
                      <span key={c} className="px-2.5 py-0.5 rounded bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] font-mono text-[11px] text-[#211A2B] dark:text-[#F5F0FA]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1ECF6] dark:border-[#342A43] flex items-center justify-between">
                <span className="text-xs font-mono text-[#6F6678] dark:text-[#9E92AA]">Status</span>
                <span className="text-xs font-mono text-[#7BC7A6] dark:text-[#7FD1AD] bg-[#F1ECF6] dark:bg-[#1B2720] px-2.5 py-0.5 rounded border border-[#7BC7A6]/40 font-semibold">
                  {resumeData.education.standing}
                </span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="lg:col-span-7 rounded-2xl p-6 sm:p-7 border border-[#DED5E8] dark:border-[#342A43] bg-white dark:bg-[#15111F] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A76BCE] dark:text-[#D178E8] uppercase tracking-wider mb-4 font-semibold">
                <Award className="w-4 h-4 text-[#A76BCE] dark:text-[#D178E8]" />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-3">
                {resumeData.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8]/60 dark:border-[#342A43] flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7BC7A6] dark:text-[#7FD1AD] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#211A2B] dark:text-[#F5F0FA]">
                          {cert.name}
                        </div>
                        <div className="text-[11px] font-mono text-[#6F6678] dark:text-[#9E92AA]">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#7657E8] dark:text-[#BDA8FF] px-2.5 py-0.5 rounded bg-[#F1ECF6] dark:bg-[#211B2F] border border-[#C7B6F7] dark:border-[#7657E8]/40 flex-shrink-0 font-semibold">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Section End CTA */}
          <div className="mt-14 pt-8 border-t border-[#DED5E8] dark:border-[#342A43] text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#7657E8] dark:text-[#BDA8FF] hover:text-[#6746db] group min-h-[44px]"
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
