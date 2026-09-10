import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, CheckCircle2, Copy, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'harshnewa@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-[#FFFFFF] via-[#EEF5FF] to-[#EDE9FE]/50 scroll-mt-24">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-blue-200/40 via-violet-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Initiate Collaboration</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.05] mb-6">
          LET'S BUILD SOMETHING <br className="hidden sm:inline" />
          <span className="text-gradient">INTELLIGENT.</span>
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Whether you need a high-scale analytics engineering pipeline, an executive business intelligence command center, or quantitative predictive modeling — let's connect.
        </p>

        {/* Interactive Direct Communication Hub */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto border border-slate-200/90 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-semibold">Direct Contact</span>
                <span className="font-mono font-semibold text-sm sm:text-base text-slate-900">
                  {emailAddress}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-blue-600 flex items-center justify-center gap-2 transition-all shadow-xs"
              data-cursor="COPY"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social & Direct Contact Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white flex items-center justify-between group transition-all shadow-xs hover:shadow-md"
              data-cursor="LINKEDIN"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-900 block group-hover:text-blue-600 transition-colors">LinkedIn</span>
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[110px] block">harsh-soni</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="https://github.com/data-analyst-harsh-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white flex items-center justify-between group transition-all shadow-xs hover:shadow-md"
              data-cursor="GITHUB"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-slate-800" />
                <div className="text-left">
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-900 block group-hover:text-blue-600 transition-colors">GitHub</span>
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[110px] block">harsh-soni</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="p-4 rounded-2xl bg-gradient-to-r from-electric-500 to-violet-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              data-cursor="EMAIL"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
