import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Layers, ExternalLink, ArrowRight, Sparkles, Filter, Database, BarChart3, Code2, Server, GitBranch } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageMeta from '../components/PageMeta';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSkillId, setActiveSkillId] = useState(skills[0]?.id || 'sql');

  // Categories list
  const categories = useMemo(() => {
    return ['All', ...new Set(skills.map((s) => s.category))];
  }, []);

  // Filter skills
  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // Find active skill object
  const activeSkill = useMemo(() => {
    return skills.find((s) => s.id === activeSkillId) || filteredSkills[0] || skills[0];
  }, [activeSkillId, filteredSkills]);

  // Resolve linked projects for the active skill
  const linkedProjects = useMemo(() => {
    if (!activeSkill || !activeSkill.projectIds) return [];
    return activeSkill.projectIds
      .map((id) => projects.find((p) => p.id === id))
      .filter(Boolean);
  }, [activeSkill]);

  return (
    <PageTransition>
      <PageMeta
        title="Harsh Soni | Skills"
        description="Comprehensive technical skills matrix of Harsh Soni. Real-world implementation mapping across Power BI, SQL, Python, dbt, Snowflake, and dimensional data modeling."
      />

      <section className="pt-32 pb-24 bg-[#F7F4FA] dark:bg-[#0E0B15] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECF6] dark:bg-[#1B1627] border border-[#C7B6F7] dark:border-[#7657E8]/40 text-[#7657E8] dark:text-[#BDA8FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-[#7657E8] dark:text-[#BDA8FF]" />
              <span>Technical Competencies</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#211A2B] dark:text-[#F5F0FA] tracking-tight">
              SKILLS &amp; TECHNOLOGY
            </h1>
            <p className="text-[#6F6678] dark:text-[#C9BED4] text-sm sm:text-base mt-3 leading-relaxed">
              Every tool and technology grounded in actual implementations across 16 case studies. No synthetic percentage scores — only verified project usage.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#7657E8] text-white font-semibold shadow-sm'
                      : 'bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] text-[#6F6678] dark:text-[#C9BED4] hover:text-[#211A2B] dark:hover:text-[#F5F0FA] hover:border-[#7657E8]/50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-[#EEE6FF]' : 'text-[#93889D] dark:text-[#9E92AA]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Grid of Skill Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredSkills.map((skill) => {
                const isActive = activeSkill?.id === skill.id;
                const projectCount = skill.projectIds?.length || 0;

                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setActiveSkillId(skill.id)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#F1ECF6] dark:bg-[#211B2F] border-[#7657E8] dark:border-[#9A7BFF] shadow-md ring-2 ring-[#7657E8]/20'
                        : 'bg-white dark:bg-[#15111F] border-[#DED5E8] dark:border-[#342A43] hover:border-[#7657E8]/60 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-display font-bold text-base text-[#211A2B] dark:text-[#F5F0FA]">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#7657E8] dark:text-[#BDA8FF] bg-[#EEE6FF] dark:bg-[#29203A] font-semibold shrink-0">
                          {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#93889D] dark:text-[#9E92AA] uppercase tracking-wider block mb-2">
                        {skill.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#6F6678] dark:text-[#C9BED4] line-clamp-2 leading-relaxed mt-1">
                      {skill.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Sticky Detail Panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              {activeSkill ? (
                <div className="p-7 rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] shadow-lg space-y-6">
                  
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#F1ECF6] dark:bg-[#211B2F] text-[#7657E8] dark:text-[#BDA8FF] font-mono text-xs font-bold uppercase tracking-wider">
                        {activeSkill.category}
                      </span>
                      <span className="text-xs font-mono text-[#93889D] dark:text-[#9E92AA]">
                        Implemented across {activeSkill.projectIds?.length || 0} projects
                      </span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl text-[#211A2B] dark:text-[#F5F0FA] mt-2">
                      {activeSkill.name}
                    </h2>
                  </div>

                  {/* What I Use It For */}
                  <div className="p-4 rounded-2xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43]">
                    <span className="text-xs font-mono font-bold text-[#211A2B] dark:text-[#F5F0FA] uppercase tracking-wider block mb-2">
                      What I Use It For
                    </span>
                    <p className="text-xs sm:text-sm text-[#6F6678] dark:text-[#C9BED4] leading-relaxed">
                      {activeSkill.description}
                    </p>
                  </div>

                  {/* Implemented Projects Section */}
                  <div>
                    <span className="text-xs font-mono font-bold text-[#211A2B] dark:text-[#F5F0FA] uppercase tracking-wider block mb-3">
                      Projects Where Implemented ({linkedProjects.length})
                    </span>

                    {linkedProjects.length > 0 ? (
                      <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                        {linkedProjects.map((p) => (
                          <Link
                            key={p.id}
                            to={`/work/${p.id}`}
                            className="p-3 rounded-xl bg-[#F7F4FA] dark:bg-[#1B1627] border border-[#DED5E8] dark:border-[#342A43] hover:border-[#7657E8] hover:bg-[#F1ECF6]/40 dark:hover:bg-[#211B2F]/40 transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-6 h-6 rounded-md bg-[#7657E8] text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                                {p.number}
                              </span>
                              <div className="min-w-0">
                                <h4 className="font-display font-semibold text-xs text-[#211A2B] dark:text-[#F5F0FA] group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] transition-colors truncate">
                                  {p.title}
                                </h4>
                                <span className="text-[10px] font-mono text-[#93889D] dark:text-[#9E92AA] truncate block">
                                  {p.domain}
                                </span>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#93889D] dark:text-[#9E92AA] group-hover:text-[#7657E8] dark:group-hover:text-[#BDA8FF] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-[#93889D] dark:text-[#9E92AA] font-mono">
                        Applied across foundational workflows and exploratory models.
                      </p>
                    )}
                  </div>

                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-white dark:bg-[#15111F] border border-[#DED5E8] dark:border-[#342A43] text-center text-[#93889D] dark:text-[#9E92AA] text-sm font-mono">
                  Select any technology on the left to view detailed implementations.
                </div>
              )}
            </div>

          </div>

          {/* Section End CTA */}
          <div className="mt-16 pt-10 border-t border-[#DED5E8] dark:border-[#342A43] text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7657E8] hover:bg-[#6746db] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all min-h-[44px]"
            >
              <span>See Skills in Real Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
