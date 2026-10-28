import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Sliders, X, CheckCircle2, FileCode, Copy, Check, ExternalLink } from 'lucide-react';

interface PersonalizationGuideProps {
  onOpenRecruiterView: () => void;
  onOpenResume: () => void;
}

export const PersonalizationGuide: React.FC<PersonalizationGuideProps> = ({
  onOpenRecruiterView,
  onOpenResume,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedFilePath, setCopiedFilePath] = useState(false);

  const handleCopyPath = () => {
    navigator.clipboard.writeText('/src/data/portfolioData.ts');
    setCopiedFilePath(true);
    setTimeout(() => setCopiedFilePath(false), 2000);
  };

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-5 right-5 z-40 print:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl backdrop-blur-md text-xs font-mono transition-all group"
          title="Portfolio personalization guide and fast controls"
        >
          <Sliders className="w-3.5 h-3.5 text-lime-400 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Personalization Guide</span>
        </button>
      </div>

      {/* Slide-out drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full max-w-md h-full bg-[#0c101a] border-l border-slate-800 p-6 flex flex-col justify-between text-slate-200 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
                  <FileCode className="w-4 h-4" />
                  <span>PORTFOLIO SETUP GUIDE</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Master Config File Information */}
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  How to Personalize Your Portfolio
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  All personal details, projects, proof items, certifications, and links are managed in a single, clean TypeScript file:
                </p>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-lime-400">
                  <span className="truncate">/src/data/portfolioData.ts</span>
                  <button
                    onClick={handleCopyPath}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy path"
                  >
                    {copiedFilePath ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Customization Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Quick Setup Checklist
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      1. Name & Contact Details
                    </div>
                    <p className="text-slate-400 pl-5 text-[11px]">
                      Currently: <span className="text-slate-200">{developerProfile.name}</span> ({developerProfile.email}). Update in <code className="font-mono text-lime-300">developerProfile</code>.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      2. Public GitHub Username
                    </div>
                    <p className="text-slate-400 pl-5 text-[11px]">
                      Currently set to: <span className="font-mono text-lime-300">@{developerProfile.githubUsername}</span>. Update to your handle for live stats.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      3. Projects & Proof Evidence
                    </div>
                    <p className="text-slate-400 pl-5 text-[11px]">
                      Add or update projects, repo URLs, benchmarks, and mark verification statuses truthfully.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      4. Education & Certifications
                    </div>
                    <p className="text-slate-400 pl-5 text-[11px]">
                      Input your degree, expected graduation, GPA, and credential verification IDs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast-Track Actions */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenRecruiterView();
                  }}
                  className="w-full py-2 px-3 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg transition-colors text-center"
                >
                  Launch Recruiter Fast-Track View
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center"
                >
                  Launch Printable Resume Viewer
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
              Proof-of-Work Developer Lab v1.0.0
            </div>
          </div>
        </div>
      )}
    </>
  );
};
