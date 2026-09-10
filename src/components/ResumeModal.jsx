import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = '/assets/resume/Harsh_Soni_Resume.pdf';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-50/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                HARSH SONI — OFFICIAL RESUME
              </h3>
              <p className="text-[11px] font-mono text-slate-500">
                Data Analyst • Power BI • Python • SQL
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={pdfUrl}
              download="Harsh_Soni_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700 hover:text-blue-800 transition-all shadow-xs font-semibold"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 transition-all shadow-xs"
              title="Open in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-red-50 border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-200 transition-all shadow-xs"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-slate-100 relative overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Harsh Soni Resume"
            className="w-full h-full border-0"
          />

          {/* Fallback overlay in case iframe fails in some browsers */}
          <noscript>
            <div className="p-8 text-center text-slate-700">
              <p className="mb-4">Your browser does not support inline PDF viewing.</p>
              <a
                href={pdfUrl}
                download="Harsh_Soni_Resume.pdf"
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-md shadow-blue-500/25"
              >
                Download Resume PDF
              </a>
            </div>
          </noscript>
        </div>
      </div>
    </div>
  );
}
