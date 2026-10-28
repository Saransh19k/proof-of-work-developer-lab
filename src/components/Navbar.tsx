import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { ShieldCheck, Menu, X, Briefcase, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenRecruiterView: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRecruiterView,
  onOpenResume,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Proof of Work', href: '#proof' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'GitHub Activity', href: '#github' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090c13]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:border-lime-400 transition-colors">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm tracking-wider uppercase text-lime-400">
            PROOF-OF-WORK <span className="text-white font-sans font-semibold">LAB</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-lime-400 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSection === link.href.replace('#', '') ? 'text-lime-400 font-semibold' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Fast-Track Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {developerProfile.resumeUrl ? (
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-all whitespace-nowrap shrink-0"
              title="View developer resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </button>
          ) : null}

          <button
            onClick={onOpenRecruiterView}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-md shadow-sm transition-all whitespace-nowrap shrink-0"
            title="Fast 60-second summary for hiring managers"
          >
            <Briefcase className="w-3.5 h-3.5 text-black" />
            Recruiter View
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-lime-400 hover:text-white border border-lime-400/40 hover:border-lime-400 rounded-md transition-all whitespace-nowrap shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Contact</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090c13] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-lime-400 hover:bg-slate-800/40 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterView();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-md transition-all"
            >
              <Briefcase className="w-4 h-4" />
              Recruiter 60-Second Fast-Track
            </button>
            {developerProfile.resumeUrl ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View & Print Resume
              </button>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
};
