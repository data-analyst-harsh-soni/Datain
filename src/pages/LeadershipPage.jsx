import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Target, Compass, Award, CheckCircle2, ArrowRight, 
  Sparkles, Layers, Workflow, BookOpen, Brain, ShieldCheck, Lightbulb 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';

export default function LeadershipPage() {
  const responsibilities = [
    {
      icon: Layers,
      title: 'Analytics Project Ownership',
      desc: 'Taking ownership of analytics deliverables, coordinating tasks, and ensuring projects move from requirements to completed outcomes.'
    },
    {
      icon: Workflow,
      title: 'Technical Collaboration',
      desc: 'Working with team members to improve technical workflows, solve implementation challenges, and maintain consistent development practices.'
    },
    {
      icon: BookOpen,
      title: 'Mentoring & Knowledge Sharing',
      desc: 'Supporting teammates through technical discussions, reviews, documentation, and practical knowledge sharing.'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      desc: 'Helping teams stay organized through clear communication, task coordination, and collaborative problem solving.'
    }
  ];

  const principles = [
    {
      icon: Brain,
      title: 'Structured Thinking',
      desc: 'Breaking complex analytics and technical problems into clear, manageable solutions.'
    },
    {
      icon: ShieldCheck,
      title: 'Ownership',
      desc: 'Taking responsibility for deliverables, quality, and continuous improvement.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      desc: 'Working closely with teammates to share ideas, solve problems, and achieve common goals.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      desc: 'Exploring better tools, workflows, and analytical approaches to improve project outcomes.'
    }
  ];

  return (
    <PageTransition>
      <PageMeta
        title="Harsh Soni | Leadership & Collaboration"
        description="Harsh Soni's technical leadership, project ownership, team collaboration, and campus organizing experience."
      />

      <section className="pt-32 pb-24 bg-[#F7F4FA] dark:bg-[#0E0B15] min-h-screen transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
              <span>LEADERSHIP &amp; COLLABORATION</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
              LEADERSHIP &amp; COLLABORATION
            </h1>
            <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base mt-3 leading-relaxed">
              Building strong teams, improving technical workflows, and contributing to data-driven projects through collaboration and ownership.
            </p>
          </div>

          {/* ================================================== */}
          {/* SECTION 1: Technical Leadership & Collaboration   */}
          {/* ================================================== */}
          <div className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold text-[#7657E8] dark:text-[#BDA8FF] uppercase tracking-widest block mb-1">
                Project &amp; Team Contribution
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#211A2B] dark:text-[#F5F0FA]">
                Technical Leadership &amp; Collaboration
              </h2>
              <p className="text-[#6F6678] dark:text-[#C9BED4] text-xs sm:text-sm mt-2 leading-relaxed">
                Experience contributing to analytics and technical projects through ownership, structured collaboration, problem solving, and team coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {responsibilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-sm hover:shadow-md hover:border-[#7657E8] dark:hover:border-[#9A7BFF] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#F1ECF6] dark:bg-[#211B2F] border border-[#C7B6F7] dark:border-[#7657E8]/40 flex items-center justify-center text-[#7657E8] dark:text-[#BDA8FF] mb-4 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#211A2B] dark:text-[#F5F0FA] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6F6678] dark:text-[#C9BED4] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* SECTION 2: Leadership Principles                   */}
          {/* ================================================== */}
          <div className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold text-[#93889D] dark:text-[#9E92AA] uppercase tracking-widest block mb-1">
                LEADERSHIP PRINCIPLES
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#211A2B] dark:text-[#F5F0FA]">
                How I Contribute to Stronger Technical Teams
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-sm hover:shadow-md hover:border-[#A76BCE] dark:hover:border-[#D178E8] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#EEE6FF] dark:bg-[#29203A] border border-[#C7B6F7] dark:border-[#A76BCE]/40 flex items-center justify-center text-[#A76BCE] dark:text-[#D178E8] mb-4 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#211A2B] dark:text-[#F5F0FA] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6F6678] dark:text-[#C9BED4] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* SECTION 3: Campus Organizing & Responsibility      */}
          {/* ================================================== */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A76BCE] dark:text-[#D178E8] uppercase tracking-wider mb-3 font-semibold">
              <Award className="w-4 h-4 text-[#A76BCE] dark:text-[#D178E8]" />
              <span>Campus Leadership</span>
            </div>

            <h2 className="font-display font-bold text-2xl text-[#211A2B] dark:text-[#F5F0FA] mb-3">
              Campus Organizing &amp; Responsibility
            </h2>

            <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm leading-relaxed max-w-3xl mb-6">
              Beyond technical projects, I have actively contributed to campus initiatives and student activities, including my role as an Electoral Literacy Club (ELC) Campus Ambassador. I helped organize events and activities on campus and contributed as a student representative during institutional and civic initiatives.
            </p>

            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#7657E8] dark:text-[#BDA8FF] hover:text-[#6746db] group"
            >
              <span>View Recognition &amp; Achievements</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
