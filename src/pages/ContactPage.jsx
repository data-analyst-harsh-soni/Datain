import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Send, 
  MapPin, AlertCircle, CheckCircle2, ArrowRight, Home 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import { resumeData } from '../data/resume';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshnewa@gmail.com');
    setCopied(true);
    
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

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (!validateForm()) return;

    setStatus('sending');
    setStatusMessage('Sending...');

    // Read Vite environment variables injected at build time
    // For Vercel production deployment: add these exact variable names in Project Settings -> Environment Variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Safe development diagnostics without leaking credentials
    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'EmailJS configuration is missing. Please ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are defined in your .env file for local development, or in Vercel Environment Variables for production deployment. Note: Vite requires a server restart after editing .env.'
      );
      setStatus('error');
      setStatusMessage('Unable to send. Please try again.');
      return;
    }

    try {
      // Template parameters mapped to EmailJS template variables
      // from_name  -> visitor's Full Name
      // from_email -> visitor's Email Address (preserved so you can reply)
      // reply_to   -> visitor's Email Address
      // subject    -> visitor's Subject
      // message    -> visitor's Message
      // to_email   -> receiver destination (harshnewa@gmail.com)
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: 'harshnewa@gmail.com',
        to_name: 'Harsh Soni',
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
        }
      );

      if (response && (response.status === 200 || response.text === 'OK')) {
        setStatus('success');
        setStatusMessage('Message Sent');

        // Confetti celebration
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore
        }

        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});

        // Clear success notification after 6 seconds
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 6000);
      } else {
        throw new Error(`EmailJS returned status: ${response?.status}`);
      }
    } catch (err) {
      console.error('EmailJS transmission error:', err?.text || err?.message || 'Failed to send message');
      // On error, form data is preserved so the user does not lose their entered message
      setStatus('error');
      setStatusMessage('Unable to send. Please try again.');
    }
  };

  return (
    <PageTransition>
      <PageMeta
        title="Harsh Soni | Contact"
        description="Get in touch with Harsh Soni. Send a direct message or connect via email, LinkedIn, or GitHub for analytics engineering, data analyst, or BI roles."
      />

      <section className="pt-32 pb-24 bg-[#F7F4FA] dark:bg-[#0E0B15] min-h-screen transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 2-Column Contact Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* ================================================== */}
            {/* LEFT COLUMN: GET IN TOUCH & PERSONAL IDENTITY      */}
            {/* ================================================== */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
                  <Mail className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                  <span>GET IN TOUCH</span>
                </div>

                <h1 className="font-display font-black text-4xl sm:text-5xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight leading-[1.1] mb-4">
                  Let's Talk
                </h1>

                <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base leading-relaxed">
                  I'm always open to discussing new opportunities, data challenges, analytics engineering pipelines, or potential collaborations. Whether you're a recruiter, hiring manager, or fellow engineer — let's connect!
                </p>
              </div>

              {/* Personal Avatar Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#7657E8]/40 dark:border-[#9A7BFF]/50 shadow-xs bg-white dark:bg-[#15111F] shrink-0">
                  <img
                    src={resumeData.profilePhotoUrl}
                    alt="Harsh Soni"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#211A2B] dark:text-[#F5F0FA]">
                    HARSH SONI
                  </h3>
                  <div className="text-xs font-mono text-[#7657E8] dark:text-[#BDA8FF] font-semibold mt-0.5">
                    Data Analyst &bull; Analytics Engineer &bull; Tech Lead
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#6F6678] dark:text-[#9E92AA] font-mono mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
                    <span>Jabalpur, MP, India</span>
                  </div>
                </div>
              </div>

              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-sm space-y-3">
                <span className="text-[11px] font-mono text-[#93889D] dark:text-[#9E92AA] uppercase tracking-widest block font-bold">
                  Direct Email
                </span>
                
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-[#7657E8] dark:text-[#BDA8FF] shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#211A2B] dark:text-[#F5F0FA] truncate">
                      harshnewa@gmail.com
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] hover:border-[#7657E8] text-[#211A2B] dark:text-[#F5F0FA] text-xs font-mono font-medium flex items-center gap-1.5 transition-colors shadow-2xs shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#7BC7A6] dark:text-[#7FD1AD]" />
                        <span className="text-[#7BC7A6] dark:text-[#7FD1AD] font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#93889D] dark:text-[#9E92AA]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#93889D] dark:text-[#9E92AA] uppercase tracking-widest block font-bold">
                  Professional Channels
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/harsh-soni-data-analyst/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:border-[#7657E8] hover:bg-[#F1ECF6]/30 dark:hover:bg-[#211B2F]/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F1ECF6] dark:bg-[#211B2F] text-[#7657E8] dark:text-[#BDA8FF] flex items-center justify-center">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span className="font-display font-semibold text-xs sm:text-sm text-[#211A2B] dark:text-[#F5F0FA] group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-colors">
                        LinkedIn
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#93889D] dark:text-[#9E92AA] group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-transform" />
                  </a>

                  <a
                    href="https://github.com/data-analyst-harsh-soni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-xs hover:border-[#A76BCE] hover:bg-[#EEE6FF]/30 dark:hover:bg-[#29203A]/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EEE6FF] dark:bg-[#29203A] text-[#A76BCE] dark:text-[#D178E8] flex items-center justify-center">
                        <Github className="w-4 h-4" />
                      </div>
                      <span className="font-display font-semibold text-xs sm:text-sm text-[#211A2B] dark:text-[#F5F0FA] group-hover:text-[#A76BCE] dark:group-hover:text-[#D178E8] transition-colors">
                        GitHub
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#93889D] dark:text-[#9E92AA] group-hover:text-[#A76BCE] dark:group-hover:text-[#D178E8] transition-transform" />
                  </a>
                </div>
              </div>

              {/* Contextual Back to Home Transition */}
              <div className="pt-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#6F6678] dark:text-[#C9BED4] hover:text-[#7657E8] dark:hover:text-[#BDA8FF] transition-colors group"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* ================================================== */}
            {/* RIGHT COLUMN: PROFESSIONAL CONTACT FORM           */}
            {/* ================================================== */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-md relative overflow-hidden">
                
                <div className="mb-6">
                  <h2 className="font-display font-bold text-2xl text-[#211A2B] dark:text-[#F5F0FA]">
                    Send a Message
                  </h2>
                  <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm mt-1">
                    Fill out the form below to send an inquiry directly to harshnewa@gmail.com.
                  </p>
                </div>

                {/* Status Banners */}
                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#F1ECF6] dark:bg-[#1B2720] border border-[#7BC7A6]/50 text-[#211A2B] dark:text-[#F5F0FA] flex items-start gap-3 text-xs sm:text-sm animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-[#7BC7A6] dark:text-[#7FD1AD] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <strong className="font-bold block text-[#7BC7A6] dark:text-[#7FD1AD]">Message Sent</strong>
                      <p className="text-xs text-[#6F6678] dark:text-[#C9BED4]">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50/90 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800/70 text-rose-900 dark:text-rose-200 flex items-start gap-3 text-xs sm:text-sm animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="font-bold block">Unable to send. Please try again.</strong>
                      <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
                        You can also email me directly at{' '}
                        <a 
                          href="mailto:harshnewa@gmail.com" 
                          className="underline font-semibold hover:text-rose-950 dark:hover:text-white"
                        >
                          harshnewa@gmail.com
                        </a>.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-[#211A2B] dark:text-[#F5F0FA] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        disabled={status === 'sending'}
                        className={`w-full px-4 py-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border text-xs sm:text-sm text-[#211A2B] dark:text-[#F5F0FA] placeholder-[#93889D] dark:placeholder-[#9E92AA] focus:outline-none focus:bg-white dark:focus:bg-[#15111F] transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-[#DED5E8] dark:border-[#342A43] focus:border-[#7657E8] dark:focus:border-[#BDA8FF] focus:ring-2 focus:ring-[#7657E8]/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-600 dark:text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-[#211A2B] dark:text-[#F5F0FA] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        disabled={status === 'sending'}
                        className={`w-full px-4 py-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border text-xs sm:text-sm text-[#211A2B] dark:text-[#F5F0FA] placeholder-[#93889D] dark:placeholder-[#9E92AA] focus:outline-none focus:bg-white dark:focus:bg-[#15111F] transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-[#DED5E8] dark:border-[#342A43] focus:border-[#7657E8] dark:focus:border-[#BDA8FF] focus:ring-2 focus:ring-[#7657E8]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-600 dark:text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-bold text-[#211A2B] dark:text-[#F5F0FA] uppercase tracking-wider mb-1.5">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Data Analyst Role / Analytics Engineering Discussion"
                      disabled={status === 'sending'}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border text-xs sm:text-sm text-[#211A2B] dark:text-[#F5F0FA] placeholder-[#93889D] dark:placeholder-[#9E92AA] focus:outline-none focus:bg-white dark:focus:bg-[#15111F] transition-all ${
                        errors.subject
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-[#DED5E8] dark:border-[#342A43] focus:border-[#7657E8] dark:focus:border-[#BDA8FF] focus:ring-2 focus:ring-[#7657E8]/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-rose-600 dark:text-rose-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-[#211A2B] dark:text-[#F5F0FA] uppercase tracking-wider mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Harsh, I came across your portfolio and wanted to discuss..."
                      disabled={status === 'sending'}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border text-xs sm:text-sm text-[#211A2B] dark:text-[#F5F0FA] placeholder-[#93889D] dark:placeholder-[#9E92AA] focus:outline-none focus:bg-white dark:focus:bg-[#15111F] transition-all resize-y ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-[#DED5E8] dark:border-[#342A43] focus:border-[#7657E8] dark:focus:border-[#BDA8FF] focus:ring-2 focus:ring-[#7657E8]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-600 dark:text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`w-full min-h-[46px] px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                        status === 'sending'
                          ? 'bg-[#93889D] text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#7657E8] via-[#8F63F2] to-[#A76BCE] hover:from-[#6746db] hover:to-[#995ac0] text-white shadow-[#7657E8]/20 hover:shadow-lg hover:shadow-[#7657E8]/30 hover:scale-[1.01] active:scale-[0.99]'
                      }`}
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] font-mono text-[#93889D] dark:text-[#9E92AA] pt-1">
                    Your message will be sent securely to harshnewa@gmail.com
                  </p>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
}
