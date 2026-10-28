import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ExternalLink, Github, ArrowUpRight, Cpu, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Distributed Systems', 'Full-Stack Web', 'Developer Tooling'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/60 bg-[#090c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
              <span>Section 01</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Engineering Artifacts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Concrete implementations with verified throughput benchmarks, failure recovery metrics, and accessible source code.
            </p>
          </div>

          {/* Interactive Category Filter Controls (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-lime-400 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
            <Cpu className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">No projects matching the selected category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col rounded-2xl bg-[#0d121c] border border-slate-800 hover:border-lime-500/50 transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Visual Image Header */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121c] via-transparent to-transparent opacity-80" />

                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded-md border border-slate-700/60 text-[11px] font-mono text-lime-400">
                    {project.status}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata: Unboxed Text with Separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                      <span className="text-cyan-400">{project.category}</span>
                      <span aria-hidden="true" className="text-slate-700">·</span>
                      <span className="text-slate-400">{project.metrics[0]?.value}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Headline */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {project.headline}
                    </p>

                    {/* Tech Stack: Clean Unboxed Separators */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-300">{tech}</span>
                          {idx < project.technologies.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Key Metrics Snippet */}
                    <div className="grid grid-cols-2 gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 mb-6">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="text-xs text-slate-400">{m.label}</div>
                          <div className="text-sm font-bold font-mono text-lime-400 tabular-nums">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Inspect Proof & Architecture
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700/60 transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/70 rounded-lg border border-cyan-800/60 transition-colors"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
