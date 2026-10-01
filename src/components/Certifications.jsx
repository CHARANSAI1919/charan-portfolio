import React from 'react';
import {
  Award,
  Cloud,
  Database,
  Brain,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const iconMap = {
  Cloud,
  Database,
  Brain,
  ShieldCheck
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4">
            Validated technical competency across cloud computing, databases, generative AI, and enterprise infrastructure.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="group relative glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${cert.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    Issuer: <span className="text-slate-200 font-medium">{cert.issuer}</span>
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{cert.code}</span>
                  <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                    Certified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
