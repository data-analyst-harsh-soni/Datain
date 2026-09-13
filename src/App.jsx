import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import AchievementsPage from './pages/AchievementsPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F7F4FA] dark:bg-[#0E0B15] text-[#211A2B] dark:text-[#F5F0FA] selection:bg-[#7657E8]/20 selection:text-[#7657E8] relative flex flex-col justify-between transition-colors duration-300">
      {/* Scroll restoration to (0,0) on page transition */}
      <ScrollToTop />

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Reactive Custom Cursor */}
      <CustomCursor />

      {/* Fixed Portfolio Navbar */}
      <Navbar />

      {/* Multi-Page Route Outlet */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Portfolio Footer */}
      <Footer />
    </div>
    </ThemeProvider>
  );
}
