import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Copy, Check, Terminal, ShieldCheck, Activity } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCommand = () => {
    if (project.reproducibleCommand) {
      navigator.clipboard.writeText(project.reproducibleCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d15] shrink-0">
          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <span className="font-mono text-lime-400 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Architecture Visual Slot */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={`${project.title} architecture topology`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2.5 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded border border-slate-700/60 text-[11px] font-mono text-slate-300">
              Verified Topology & Data Flow Diagram
            </div>
          </div>

          {/* Project Header Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.headline}
            </p>
          </div>

          {/* Technology Badges - Unboxed with separators */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
            <span className="text-slate-500 font-sans font-medium">Stack:</span>
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-lime-300">{tech}</span>
                {idx < project.technologies.length - 1 && <span className="text-slate-700">/</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Key Verified Metrics Grid */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Verified System Invariants & Benchmarks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                  <div className="text-lg font-bold font-mono text-lime-400 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive Description & Architecture Notes */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Engineering Implementation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Key Architectural Decisions & Tradeoffs
              </h3>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                {project.architectureNotes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reproducible Test Command */}
          {project.reproducibleCommand && (
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-lime-400">
                  <Terminal className="w-3.5 h-3.5" />
                  Reproduce Benchmark / Chaos Test
                </span>
                <span>Self-hosted or local CLI</span>
              </div>
              <div className="flex items-center justify-between gap-3 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <code className="text-xs font-mono text-slate-200 overflow-x-auto whitespace-nowrap">
                  {project.reproducibleCommand}
                </code>
                <button
                  onClick={handleCopyCommand}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white shrink-0 transition-colors"
                  title="Copy command"
                >
                  {copied ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Proof-of-Work Verification Items */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              Attached Proof of Work Artifacts
            </h3>
            <div className="space-y-2.5">
              {project.proofItems.map((proof) => (
                <div 
                  key={proof.id} 
                  className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400">[{proof.category}]</span>
                      <span className="text-sm font-medium text-white">{proof.title}</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {proof.description}
                    </p>
                    <div className="text-[11px] font-mono text-slate-500">
                      Audit method: {proof.verificationMethod}
                      {proof.artifactHash && ` · Hash: ${proof.artifactHash}`}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                      proof.verificationStatus === 'Verified' 
                        ? 'text-lime-400 bg-lime-950/60 border border-lime-800/60' 
                        : 'text-amber-400 bg-amber-950/60 border border-amber-800/60'
                    }`}>
                      {proof.verificationStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090d15] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source Repository
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live System Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
