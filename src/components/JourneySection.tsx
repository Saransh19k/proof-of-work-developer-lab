import React from 'react';
import { milestonesData, certificationsData } from '../data/portfolioData';
import { Trophy, Award, CheckCircle2, Clock, ExternalLink, Calendar } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 border-b border-slate-800/60 bg-[#090c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
            <span>Section 05</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Trajectory & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Journey & Verified Accreditations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            A chronological timeline of collegiate achievements, hackathon wins, and formal technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Milestones Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <Trophy className="w-5 h-5 text-lime-400" />
              Milestones & Competitions
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {milestonesData.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline indicator node */}
                  <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#090c13] border-2 border-lime-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  </div>

                  <div className="p-5 rounded-xl bg-[#0d121c] border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-lime-400 font-bold tabular-nums">
                        {milestone.year}
                      </span>
                      {milestone.badge && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded text-black bg-lime-400 font-semibold">
                          {milestone.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {milestone.title}
                    </h4>

                    <div className="text-xs text-slate-400 font-medium mb-3">
                      {milestone.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {milestone.description}
                    </p>

                    {milestone.verificationLink && (
                      <a
                        href={milestone.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                      >
                        Verification Announcement
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <Award className="w-5 h-5 text-cyan-400" />
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0c101a] border border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Issuer: {cert.issuer}
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded shrink-0 flex items-center gap-1 ${
                        cert.status === 'Verified'
                          ? 'text-lime-400 bg-lime-950/50 border border-lime-800/60'
                          : 'text-amber-400 bg-amber-950/50 border border-amber-800/60'
                      }`}
                    >
                      {cert.status === 'Verified' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {cert.status}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {cert.issueDate}
                    </span>

                    {cert.credentialId ? (
                      <span className="text-slate-300">ID: {cert.credentialId}</span>
                    ) : (
                      <span className="text-slate-500">In Prep</span>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <div className="pt-1">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-lime-400 hover:underline"
                      >
                        Verify Credential Authority
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Note on Authenticity */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Verification Policy: </span>
              In accordance with our Proof-of-Work guidelines, credentials are only labeled as "Verified" when backed by verifiable public credential registry IDs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
