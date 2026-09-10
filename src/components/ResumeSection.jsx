import React from 'react';
import { FileText, Download, ExternalLink, Linkedin, Github, Mail, GraduationCap, Award, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export default function ResumeSection({ onOpenResumeModal }) {
  const pdfUrl = '/assets/resume/Harsh_Soni_Resume.pdf';
  const profilePhotoUrl = '/assets/profile/profile-photo.jpeg';

  const certifications = [
    { name: 'Advanced Excel', issuer: 'Accounts Expert Training Services', date: 'May 2026' },
    { name: 'AWS Academy Graduate: Machine Learning Foundations', issuer: 'Amazon Web Services', date: 'Apr 2026' },
    { name: 'Data Analytics (Python, SQL, Power BI)', issuer: 'Cisco NetAcad', date: 'Jan 2026' },
    { name: 'Introduction to Data Science and Machine Learning', issuer: 'Cisco NetAcad', date: 'Feb 2026' },
    { name: 'Data Analysis with Python & Machine Learning', issuer: 'Microsoft Learn', date: 'Nov 2025' },
    { name: 'Data Analysis using KQL', issuer: 'Microsoft Learn', date: 'Oct 2024' },
    { name: 'Build with AI', issuer: 'Google Developer Group', date: 'Nov 2024' }
  ];

  const skillGroups = [
    {
      category: 'Core Analytics',
      skills: ['Power BI', 'DAX', 'Power Query', 'SQL', 'PostgreSQL', 'MySQL', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Excel']
    },
    {
      category: 'Data Engineering & Analytics',
      skills: ['ETL Pipelines', 'Data Warehousing', 'Star Schema Modeling', 'Data Cleaning', 'Data Quality', 'EDA', 'Statistical Modeling', 'A/B Testing', 'API Integration']
    },
    {
      category: 'Cloud & Technologies',
      skills: ['AWS', 'Machine Learning Foundations', 'Big Data Fundamentals', 'Tableau', 'Streamlit', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
    },
    {
      category: 'Workflow',
      skills: ['Agile/Scrum', 'Git', 'GitHub', 'Stakeholder Communication', 'Project Management']
    }
  ];

  return (
    <section id="resume" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200/80 scroll-mt-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/30 via-indigo-100/30 to-violet-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Credentials &amp; Profile</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            RESUME &amp; PROFESSIONAL IDENTITY
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 font-mono">
            Data Analyst &bull; Power BI &bull; Python &bull; SQL
          </p>
        </div>

        {/* Main Resume Profile Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl mb-12 relative overflow-hidden bg-white/95">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Profile Photo & Quick Contact Identity */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-inner">
              <div className="relative mb-5 group">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-md relative z-10 bg-white">
                  <img
                    src={profilePhotoUrl}
                    alt="Harsh Soni"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
              </div>

              <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight">
                HARSH SONI
              </h3>
              <div className="text-xs font-mono text-blue-700 font-semibold uppercase tracking-wider mt-1 mb-2">
                Data Analyst | Power BI | Python | SQL
              </div>
              <p className="text-xs text-slate-500 font-mono mb-4">
                Jabalpur, MP &bull; <a href="mailto:harshnewa@gmail.com" className="text-blue-600 hover:underline font-semibold">harshnewa@gmail.com</a>
              </p>

              {/* Verified Action Buttons */}
              <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  data-cursor="RESUME"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>

                <a
                  href={pdfUrl}
                  download="Harsh_Soni_Resume.pdf"
                  className="w-full px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  data-cursor="DOWNLOAD"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-200/80 w-full justify-center">
                <a
                  href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                  title="LinkedIn Profile"
                  data-cursor="LINKEDIN"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/data-analyst-harsh-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
                  title="GitHub Profile"
                  data-cursor="GITHUB"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="mailto:harshnewa@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                  title="Email Harsh"
                  data-cursor="EMAIL"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Professional Summary & Technical Highlights */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              
              {/* Professional Summary */}
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-2.5 font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>Executive Professional Summary</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  Final-year Computer Science student and Data Analyst with hands-on experience across Power BI, SQL, and Python — built dashboards processing 35M+ records and ETL pipelines that cut processing latency by 20%. Led a 25-person analytics team at The Entrepreneurship Network while delivering 5 end-to-end BI projects, from risk modeling to enrollment intelligence. Comfortable owning a dataset from raw extraction through to a stakeholder-ready dashboard.
                </p>
              </div>

              {/* Skills breakdown from resume */}
              <div className="space-y-3.5">
                {skillGroups.map((group) => (
                  <div key={group.category} className="p-4 rounded-xl bg-slate-50/60 border border-slate-200/60">
                    <span className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider block mb-2">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200/90 text-xs font-mono text-slate-700 shadow-sm"
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

        {/* Bottom Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 bg-white shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Education</span>
              </div>

              <h4 className="font-display font-bold text-lg text-slate-900 mb-1">
                B.Tech in Computer Science Engineering
              </h4>
              <p className="text-sm text-blue-700 font-semibold">
                Gyan Ganga Institute of Technology and Sciences, Jabalpur
              </p>
              <p className="text-xs font-mono text-slate-500 mt-1 mb-4">
                Aug 2023 – May 2027 &bull; CGPA: <span className="text-blue-700 font-bold">7.5 / 10</span>
              </p>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['DBMS', 'Machine Learning', 'Data Structures', 'Statistics for Data Science', 'Operating Systems'].map((c) => (
                    <span key={c} className="px-2.5 py-0.5 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Institutional Standing</span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">In Progress (Senior Year)</span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 bg-white shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono text-violet-700 uppercase tracking-wider mb-4 font-semibold">
              <Award className="w-4 h-4 text-violet-600" />
              <span>Verified Certifications</span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 flex items-start justify-between gap-3"
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
  );
}
