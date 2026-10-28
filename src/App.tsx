import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ProofOfWorkSection } from './components/ProofOfWorkSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { RecruiterViewModal } from './components/RecruiterViewModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { PersonalizationGuide } from './components/PersonalizationGuide';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isRecruiterViewOpen, setIsRecruiterViewOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active scroll section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'proof', 'about', 'skills', 'journey', 'github', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090c13] text-slate-100 flex flex-col font-sans selection:bg-lime-400 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Featured Projects */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Proof of Work (Evidence & Verification) */}
        <ProofOfWorkSection />

        {/* 4. About Me */}
        <AboutSection />

        {/* 5. Skills */}
        <SkillsSection />

        {/* 6. Journey & Verified Certifications */}
        <JourneySection />

        {/* 7. Live GitHub Activity */}
        <GitHubSection />

        {/* 8. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Recruiter View 60-Second Fast-Track Modal */}
      <RecruiterViewModal
        isOpen={isRecruiterViewOpen}
        onClose={() => setIsRecruiterViewOpen(false)}
        onOpenResume={() => {
          setIsRecruiterViewOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Printable Engineering Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Personalization Guide Drawer */}
      <PersonalizationGuide
        onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}
