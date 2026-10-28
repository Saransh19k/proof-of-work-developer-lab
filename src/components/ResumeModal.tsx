import React from 'react';
import { developerProfile, projectsData, skillCategories, milestonesData, certificationsData } from '../data/portfolioData';
import { X, Printer, Download, Mail, ExternalLink, Github, Linkedin, MapPin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (Dark) */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#0d121f] text-slate-200 border-b border-slate-800 shrink-0 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <span className="text-white font-semibold">ENGINEERING RESUME VIEW</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print or Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-slate-900 bg-white">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {developerProfile.name}
              </h1>
              <span className="text-base font-semibold text-slate-700">
                {developerProfile.roleTitle}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {developerProfile.location}
              </span>
              <span>·</span>
              <a href={`mailto:${developerProfile.email}`} className="text-slate-900 underline flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {developerProfile.email}
              </a>
              <span>·</span>
              <a href={`https://github.com/${developerProfile.githubUsername}`} target="_blank" rel="noreferrer" className="text-slate-900 underline flex items-center gap-1">
                <Github className="w-3 h-3" />
                github.com/{developerProfile.githubUsername}
              </a>
              <span>·</span>
              <a href={developerProfile.linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-900 underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div className="font-bold text-slate-900">
                {developerProfile.education.institution}
              </div>
              <div className="text-xs font-mono text-slate-600">
                {developerProfile.education.period}
              </div>
            </div>
            <div className="text-sm text-slate-800">
              {developerProfile.education.degree} · GPA: <span className="font-bold">{developerProfile.education.gpa}</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 mt-1.5 space-y-0.5">
              {developerProfile.education.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <span className="font-bold text-slate-950">{cat.name}: </span>
                  <span className="text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Engineering Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Engineering Projects & Systems
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold text-slate-950 text-sm">
                      {project.title}
                    </div>
                    <div className="font-mono text-slate-600 text-[11px]">
                      {project.status}
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-slate-600 mb-1">
                    Technologies: {project.technologies.join(' · ')}
                  </div>
                  <p className="text-slate-800 mb-1.5 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                    {project.architectureNotes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                    <li className="font-semibold text-slate-900">
                      Key Verified Invariant: {project.metrics.map(m => `${m.label}: ${m.value}`).join(' | ')}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Verified Certifications & Honors */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Verified Certifications & Accreditations
            </h2>
            <div className="space-y-2 text-xs">
              {certificationsData.map((c, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{c.name}</span>
                    <span className="text-slate-600"> — {c.issuer}</span>
                    {c.credentialId && (
                      <span className="font-mono text-slate-500 text-[11px]"> (ID: {c.credentialId})</span>
                    )}
                  </div>
                  <div className="font-mono text-slate-600 text-[11px]">{c.issueDate}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
