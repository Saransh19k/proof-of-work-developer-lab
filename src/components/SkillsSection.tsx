import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Search, Wrench, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === 'All' || cat.name === activeCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.context.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (s.verifiedInProject && s.verifiedInProject.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 border-b border-slate-800/60 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
              <span>Section 04</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Stack & Domain Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Grounded in practical systems engineering, concurrent programming, and production application delivery.
            </p>
          </div>

          {/* Search Input for Fast Recruiter Verification */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. Go, Rust, WASM)..."
              className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-lime-400"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-lime-400 text-black font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        {filteredCategories.length === 0 ? (
          <div className="p-10 text-center rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-sm">
            No technical skills found matching "{searchTerm}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((cat) => (
              <div
                key={cat.name}
                className="p-6 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-lime-400" />
                      {cat.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 tabular-nums">
                      {cat.skills.length} skills
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Table / List */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">
                              {skill.name}
                            </span>
                            {skill.verifiedInProject && (
                              <span className="text-[11px] font-mono text-lime-400 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-lime-400" />
                                {skill.verifiedInProject}
                              </span>
                            )}
                          </div>

                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                            skill.level === 'Core Expertise'
                              ? 'text-lime-300 bg-lime-950/50'
                              : skill.level === 'Proficient'
                              ? 'text-cyan-300 bg-cyan-950/50'
                              : 'text-slate-400 bg-slate-800/50'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    ))}
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
