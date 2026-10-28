import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { ShieldCheck, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080d] text-slate-400 border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-sm tracking-wider uppercase text-white font-bold">
                PROOF-OF-WORK <span className="text-lime-400 font-sans font-semibold">DEVELOPER LAB</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {developerProfile.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${developerProfile.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={developerProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href={`mailto:${developerProfile.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Send Direct Email"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4 text-lime-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Navigation Quick Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500 pt-6 border-t border-slate-800/60">
          <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
          <a href="#proof" className="hover:text-slate-300 transition-colors">Proof of Work</a>
          <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
          <a href="#journey" className="hover:text-slate-300 transition-colors">Journey</a>
          <a href="#github" className="hover:text-slate-300 transition-colors">GitHub Live</a>
          <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
        </div>

        {/* Bottom copyright & integrity disclosure */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-600 font-mono mt-8">
          <div>
            © {new Date().getFullYear()} {developerProfile.name}. All project architectures & source code verified.
          </div>
          <div className="text-slate-500">
            Engineered with React 19, TypeScript, & Tailwind CSS · Zero Simulated Metrics
          </div>
        </div>
      </div>
    </footer>
  );
};
