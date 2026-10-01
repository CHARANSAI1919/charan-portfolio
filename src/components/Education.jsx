import React from 'react';
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
  BookOpen,
  MapPin
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                item.featured
                  ? 'border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'border-slate-800/80'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                      item.featured
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Institution Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {item.institution}
                </h3>
                <p className="text-sm font-semibold text-cyan-300 mb-2">
                  {item.degree} — {item.branch}
                </p>

                {/* Grade / Score pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-100 text-sm font-mono font-bold mb-5">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>{item.score}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Academic Highlights
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {item.featured && (
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Chennai, Tamil Nadu
                  </span>
                  <span className="text-cyan-400">SRMJEE Rank 130</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
