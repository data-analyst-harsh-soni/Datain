import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Send, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import { resumeData } from '../data/resume';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshnewa@gmail.com');
    setCopied(true);
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 }
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <PageTransition>
      <PageMeta
        title="Harsh Soni | Contact"
        description="Get in touch with Harsh Soni. Connect via email, LinkedIn, or GitHub for analytics engineering roles, consulting, or collaborations."
      />

      <section className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Communication</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              LET'S CONNECT
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Open to full-time Data Analyst &amp; Analytics Engineer roles, institutional initiatives, and technical discussions.
            </p>
          </div>

          {/* Master Personal Contact Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-8 sm:p-12 mb-10">
            
            {/* Identity Banner */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100 text-center sm:text-left">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-md bg-white shrink-0">
                <img
                  src={resumeData.profilePhotoUrl}
                  alt="Harsh Soni"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-1.5">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  HARSH SONI
                </h2>
                <div className="text-xs sm:text-sm font-mono font-semibold text-blue-700">
                  Data Analyst &bull; Analytics Engineer &bull; Technology Leader
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Jabalpur, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Direct Email Channel */}
            <div className="py-8 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                Primary Email Channel
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono font-semibold text-sm sm:text-base text-slate-900">
                      harshnewa@gmail.com
                    </div>
                    <span className="text-[11px] font-mono text-emerald-600">
                      Direct inbox &bull; Typically responds within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:harshnewa@gmail.com?subject=Regarding%20Data%20Analytics%20Role%20/%20Opportunity"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Send Email</span>
                    <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="pt-8">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Professional Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-xs">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        harsh-soni-data-analyst
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://github.com/data-analyst-harsh-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-400 hover:bg-slate-100/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-xs">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-slate-900 group-hover:text-slate-900 transition-colors block">
                        GitHub Profile
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        data-analyst-harsh-soni
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
}
