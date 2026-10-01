import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Brain,
  BarChart3,
  Server,
  Layout,
  Database,
  Cloud,
  Wrench,
  Search,
  CheckCircle2
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  Cpu,
  Brain,
  BarChart3,
  Server,
  Layout,
  Database,
  Cloud,
  Wrench
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillsCategories
    .map((cat) => {
      // If a category tab is selected and not 'All', filter by category
      if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
        return null;
      }

      // If user typed a search query, filter skills within the category
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter((skill) =>
          skill.toLowerCase().includes(query)
        );
        if (matchingSkills.length === 0) return null;
        return { ...cat, skills: matchingSkills };
      }

      return cat;
    })
    .filter(Boolean);

  const totalSkillsCount = skillsCategories.reduce(
    (acc, curr) => acc + curr.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 relative bg-[#060910]/60">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4">
            A comprehensive overview of my programming languages, machine learning frameworks,
            backend architectures, databases, and engineering toolchains.
          </p>
        </div>

        {/* Filter Tabs & Quick Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyan-500 text-dark-950 font-semibold shadow-sm shadow-cyan-500/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All Domains ({totalSkillsCount})
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-cyan-500 text-dark-950 font-semibold shadow-sm shadow-cyan-500/30'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. YOLO, Java)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <div
                key={group.category}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                      {group.skills.length}
                    </span>
                  </div>

                  {/* Badges / Pill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors group cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 group-hover:bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
