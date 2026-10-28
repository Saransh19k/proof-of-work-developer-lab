import React from 'react';
import { developerProfile, projectsData } from '../data/portfolioData';
import { X, Printer, Download, Mail, ExternalLink, Github, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface RecruiterViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterViewModal: React.FC<RecruiterViewModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const topProjects = projectsData.slice(0, 3);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#090d16] border border-lime-400/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-200 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Recruiter Banner & Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121f] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
            <h2 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Recruiter 60-Second Fast-Track Dossier
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Print dossier or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Candidate Overview Card */}
          <div className="p-6 rounded-xl bg-[#0e1422] border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <div className="text-xs font-mono text-lime-400 uppercase tracking-wide mb-1">
                Engineering Candidate Profile
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {developerProfile.name}
              </h1>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {developerProfile.roleTitle} · {developerProfile.education.institution}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {developerProfile.location} · Cumulative GPA: {developerProfile.education.gpa}
              </p>
            </div>

            <div className="space-y-2 shrink-0">
              <div className="p-3 bg-lime-950/40 border border-lime-800/60 rounded-lg text-xs">
                <div className="text-slate-400 font-mono text-[11px]">AVAILABILITY STATUS:</div>
                <div className="text-lime-300 font-bold mt-0.5">
                  {developerProfile.availability.status}
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5">
                  Timeline: {developerProfile.availability.timeline}
                </div>
              </div>
            </div>
          </div>

          {/* Target Positions & Tech Stack Match */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Target Roles & Team Alignment
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {developerProfile.availability.preferredRoles.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Core Production Competencies
              </h3>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div>
                  <span className="text-lime-400 font-bold">Languages:</span> Go, Rust, TypeScript, C, Python, SQL
                </div>
                <div>
                  <span className="text-cyan-400 font-bold">Systems:</span> Raft Consensus, Distributed Storage, eBPF, WASM
                </div>
                <div>
                  <span className="text-lime-400 font-bold">Frontend:</span> React 19, WebSockets, CRDTs, Tailwind CSS
                </div>
                <div>
                  <span className="text-cyan-400 font-bold">DevOps & QA:</span> Docker, Linux Kernel, Prometheus, Chaos Testing
                </div>
              </div>
            </div>
          </div>

          {/* Top 3 Flagship Projects with Empirical Proof */}
          <div>
            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              Top 3 Flagship Projects (With Verified Proof)
            </h3>

            <div className="space-y-4">
              {topProjects.map((p, index) => (
                <div
                  key={p.id}
                  className="p-5 rounded-xl bg-[#0c101a] border border-slate-800 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-lime-400 font-bold">0{index + 1}.</span>
                      <h4 className="text-base font-bold text-white">{p.title}</h4>
                      <span className="text-xs font-mono text-slate-500">[{p.status}]</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-lime-400 flex items-center gap-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Repository
                      </a>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300">
                    {p.headline}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-xs font-mono">
                        <div className="text-slate-500 text-[11px]">{m.label}</div>
                        <div className="text-lime-400 font-bold tabular-nums">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#0d121f] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${developerProfile.email}?subject=Interview%20Inquiry%20from%20Portfolio`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Direct Email Candidate
            </a>

            {developerProfile.resumeUrl ? (
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Open Full Printable Resume
              </button>
            ) : (
              <span className="text-xs font-mono text-slate-500 py-2">
                Resume: File upload pending
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
