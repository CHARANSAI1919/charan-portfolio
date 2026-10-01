import React from 'react';
import {
  FileDown,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ShieldCheck,
  Code,
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Interactive Neural Canvas */}
      <HeroCanvas />

      {/* Background radial gradient glow for depth */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Prominent Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-glow-cyan backdrop-blur-md animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>{personalData.heroBadge}</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm{' '}
          <span className="text-gradient">
            {personalData.name}
          </span>
        </h1>

        {/* Role & Headline */}
        <p className="text-lg sm:text-2xl font-semibold text-slate-200 mb-3 max-w-3xl mx-auto leading-snug">
          {personalData.role}
        </p>

        {/* Sub-Headline pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-mono text-cyan-400/90">
          <span className="bg-slate-900/80 px-3 py-1 rounded-md border border-slate-700/60">
            AI / ML Engineering
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="bg-slate-900/80 px-3 py-1 rounded-md border border-slate-700/60">
            Spring Boot Backend
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="bg-slate-900/80 px-3 py-1 rounded-md border border-slate-700/60">
            Computer Vision
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="bg-slate-900/80 px-3 py-1 rounded-md border border-slate-700/60">
            Agentic AI & MCP
          </span>
        </div>

        {/* Short description */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-9 leading-relaxed">
          {personalData.heroTagline}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-glow-cyan transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-dark-950" />
          </a>

          <a
            href={personalData.resumeUrl}
            download="N_Charan_Sai_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-100 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200 glass-card transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons Bar & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-slate-800/80 text-sm text-slate-400">
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{personalData.location}</span>
          </div>
        </div>

        {/* Quick Highlights Telemetry Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">9.17</div>
            <div className="text-xs text-slate-400 font-medium">B.Tech CGPA @ SRM</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">2x</div>
            <div className="text-xs text-slate-400 font-medium">DRDO Internships</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">Rank 130</div>
            <div className="text-xs text-slate-400 font-medium">SRMJEE Merit Scholar</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">IEEE</div>
            <div className="text-xs text-slate-400 font-medium">Published Author</div>
          </div>
        </div>
      </div>
    </section>
  );
}
