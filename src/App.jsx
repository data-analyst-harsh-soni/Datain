import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NarrativeStream from './components/NarrativeStream';
import AboutPillars from './components/AboutPillars';
import TechConstellation from './components/TechConstellation';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectArchive from './components/ProjectArchive';
import ResumeSection from './components/ResumeSection';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { projects } from './data/projects';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle URL hash and ensure top start on initial page load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Track active section for navbar indicator with robust boundary detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'resume', 'projects', 'archive', 'pillars', 'stack', 'leadership', 'contact'];
      
      // If near very top
      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      // Check if near bottom of page (Contact section)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Find currently visible section using getBoundingClientRect
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveSection(section === 'archive' ? 'projects' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (project) => {
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
  };

  const handleNextModal = () => {
    if (!activeModalProject) return;
    const currentIdx = projects.findIndex(p => p.id === activeModalProject.id);
    const nextIdx = (currentIdx + 1) % projects.length;
    setActiveModalProject(projects[nextIdx]);
  };

  const handlePrevModal = () => {
    if (!activeModalProject) return;
    const currentIdx = projects.findIndex(p => p.id === activeModalProject.id);
    const prevIdx = (currentIdx - 1 + projects.length) % projects.length;
    setActiveModalProject(projects[prevIdx]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-500/20 selection:text-blue-700 relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Reactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections: Exact Requested Sequence */}
      <main>
        {/* 1. Hero */}
        <Hero onExploreWork={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <NarrativeStream />

        {/* 2. Resume & Professional Identity */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 3. Work / Featured Projects */}
        <FeaturedProjects onOpenModal={handleOpenModal} />

        {/* 4. Project Archive (All 15 Projects, AIML = #15) */}
        <ProjectArchive onOpenModal={handleOpenModal} />

        {/* 5. Pillars */}
        <AboutPillars />

        {/* 6. Stack */}
        <TechConstellation onSelectProject={handleOpenModal} />

        {/* 7. Leadership */}
        <Leadership />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Project Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={handleCloseModal}
          onNext={handleNextModal}
          onPrev={handlePrevModal}
        />
      )}

      {/* Full-Screen Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
