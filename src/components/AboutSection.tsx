import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { GraduationCap, Compass, Code2, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/60 bg-[#090c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
            <span>Section 03</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Profile & Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About the Engineer
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Focusing on the intersection of systems architecture, deterministic state management, and developer empathy.
          </p>
        </div>

        {/* 2-Column Split: Summary & Education vs Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Background & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-lime-400" />
                Background & Focus
              </h3>
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                {developerProfile.summary.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Education
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {developerProfile.education.period}
                </span>
              </div>

              <div>
                <div className="text-base font-semibold text-white">
                  {developerProfile.education.degree}
                </div>
                <div className="text-sm text-lime-400 font-medium">
                  {developerProfile.education.institution}
                </div>
                {developerProfile.education.gpa && (
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Cumulative GPA: <span className="text-white font-bold">{developerProfile.education.gpa}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                  Academic Highlights:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {developerProfile.education.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Core Engineering Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Engineering First Principles
            </div>

            {developerProfile.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0c101a] border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="text-xs font-mono text-lime-400 mb-1">
                  Principle 0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
