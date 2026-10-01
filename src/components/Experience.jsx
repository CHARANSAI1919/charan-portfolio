import React from 'react';
import {
  Briefcase,
  Shield,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { internshipsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Research & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4">
            Specialized research internships conducted at{' '}
            <strong className="text-cyan-300 font-semibold">DRDL – DRDO, Hyderabad</strong>,
            advancing deep learning vision models and agentic operational frameworks.
          </p>
        </div>

        {/* Prominent DRDO Spotlight Banner */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-cyan-950/30 to-slate-900/90 border border-cyan-500/30 glass-card flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-sm shadow-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                  Govt. of India Defence R&D
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                  2x Intern
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Defence Research and Development Laboratory (DRDL), DRDO
              </h3>
              <p className="text-xs text-slate-400">
                Premier laboratory of DRDO dedicated to the design and development of advanced missile and defence systems.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hyderabad, Telangana</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-cyan-500/20 space-y-12 ml-2 sm:ml-4">
          {internshipsData.map((internship, index) => (
            <div key={internship.id} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow-cyan transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800/80 transition-all">
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-800/80 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                        {internship.role}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">•</span>
                      <span className="text-slate-300 font-semibold text-sm">
                        {internship.organization}
                      </span>
                      <span className="text-xs text-slate-500 hidden sm:inline">
                        ({internship.orgFullName})
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {internship.projectTitle}
                    </h3>
                  </div>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {internship.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {internship.location}
                    </span>
                  </div>
                </div>

                {/* Domain & Description */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-cyan-400/90 mb-2">
                    <span className="text-slate-500">Domain: </span>
                    {internship.domain}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {internship.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Key Highlights & Implementation
                  </h4>
                  <ul className="space-y-2">
                    {internship.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Technologies & Concepts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
