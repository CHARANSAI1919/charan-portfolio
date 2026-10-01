import React from 'react';
import {
  Trophy,
  Award,
  Flame,
  BookOpen,
  Shield,
  Medal,
  Users,
  CheckCircle2
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Award,
  Trophy,
  Flame,
  BookOpen,
  Shield,
  Medal,
  Users
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-[#060910]/60">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4">
            Competitive programming hackathons, academic merit honors, peer-reviewed scientific publications, and leadership credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400/90 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Distinction</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
