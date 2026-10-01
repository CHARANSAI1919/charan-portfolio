import React from 'react';
import {
  User,
  Coffee,
  Car,
  Compass,
  GraduationCap,
  Sparkles,
  Terminal,
  Cpu,
  Server,
  Layers
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

// Mapping helper for hobby icons
const iconMap = {
  Coffee: Coffee,
  Car: Car,
  Compass: Compass
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Technical Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800/80">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Engineering Mindset & Background</span>
              </h3>

              {personalData.aboutSummary.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Primary Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalData.professionalInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">AI / Deep Learning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Computer vision, YOLOv7/v8, PyTorch & agentic systems with MCP.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Backend Systems</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Java Spring Boot, REST APIs, MySQL, and secure JWT authentication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Core Fundamentals</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Solid DSA in Java, OOP principles, DBMS, OS, and Computer Networks.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info & Beyond Code / Personal Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Details Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Quick Snapshot</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400 font-mono">Current Status</span>
                  <span className="text-slate-200 font-medium">{personalData.currentStatus}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400 font-mono">University</span>
                  <span className="text-slate-200 font-medium text-right">{personalData.university}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400 font-mono">Academic Standing</span>
                  <span className="text-cyan-400 font-mono font-bold">{personalData.cgpaContext}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400 font-mono">Location</span>
                  <span className="text-slate-200 font-medium">{personalData.location}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400 font-mono">Availability</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open to Engineering Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Interests / Beyond Code */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Beyond Code</span>
              </h3>
              <p className="text-xs text-slate-400">
                When I step away from terminal screens and model training loops:
              </p>

              <div className="space-y-3">
                {personalData.personalInterests.map((interest) => {
                  const Icon = iconMap[interest.icon] || Compass;
                  return (
                    <div
                      key={interest.title}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3.5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-200">{interest.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{interest.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
