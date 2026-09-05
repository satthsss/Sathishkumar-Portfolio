import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, ShieldAlert, Sparkles, X, ChevronRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00CFFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            05 // COMMAND SYSTEMS
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            DEPLOYED <span className="text-[#FFD700]">PROJECTS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#121218] border border-[#2D2D2D] rounded-xl overflow-hidden shadow-2xl bat-glass hover:border-[#FFD700]/60 hover:shadow-[0_15px_30px_rgba(255,215,0,0.15)] transition-all duration-500 group flex flex-col h-full"
            >
              {/* Card Image Cover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 contrast-125"
                />
                
                {/* Tech Badge Tag */}
                <span className="absolute top-4 left-4 bg-[#0B0B0B]/80 border border-[#00CFFF]/40 text-[#00CFFF] text-[10px] font-tech font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {proj.category}
                </span>

                {/* Cyber Scanline overlay */}
                <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />

                {/* Subtle Neon Gold Glow Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-500 tracking-[0.2em] font-mono-code uppercase block">
                    PROJECT ARCHIVE // {idx + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl text-white font-bold tracking-wide group-hover:text-[#FFD700] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#0B0B0B] border border-[#2D2D2D] text-gray-400 rounded text-[10px] font-tech font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-[#0B0B0B] border border-[#2D2D2D] text-gray-400 rounded text-[10px] font-tech font-semibold">
                      +{proj.technologies.length - 4} More
                    </span>
                  )}
                </div>

                {/* Action Buttons inside Card */}
                <div className="flex items-center justify-between border-t border-[#2D2D2D]/60 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs font-tech tracking-wider text-[#FFD700] hover:text-white transition-colors flex items-center gap-1 group/btn font-bold"
                  >
                    MISSION SPECS
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center space-x-3">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#0B0B0B] border border-[#2D2D2D] hover:border-[#FFD700] text-gray-400 hover:text-[#FFD700] rounded transition-all"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#0B0B0B] border border-[#2D2D2D] hover:border-[#00CFFF] text-gray-400 hover:text-[#00CFFF] rounded transition-all"
                      title="Live Demo Simulator"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Project Parameters Modal Popups */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm scanline"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-[#121218] border-2 border-[#FFD700] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 bat-glass"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-[#0B0B0B] border border-[#2D2D2D] text-gray-400 hover:text-white hover:border-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Banner / Category */}
                <div className="inline-flex items-center space-x-2 text-[#00CFFF] font-tech text-xs tracking-widest uppercase mb-4">
                  <Cpu className="w-4 h-4" />
                  <span>{selectedProject.category} MISSION ARCHIVES</span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-2xl sm:text-3xl text-white font-black tracking-wide text-glow-gold">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm font-tech tracking-wider font-semibold border-b border-[#2D2D2D] pb-4 mb-4">
                  SUBTITLE: {selectedProject.subtitle}
                </p>

                {/* Summary / Description */}
                <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                  <p>{selectedProject.description}</p>
                  
                  {/* Detailed features */}
                  <div className="bg-[#0B0B0B] border border-[#2D2D2D] p-4 rounded-lg">
                    <h4 className="font-tech text-xs tracking-[0.2em] text-[#FFD700] font-bold uppercase mb-3 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" /> SYSTEM CAPABILITIES & FEATURES
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                      {selectedProject.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#00CFFF] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Tech stack tags */}
                  <div>
                    <h4 className="font-tech text-xs tracking-[0.2em] text-[#FFD700] font-bold uppercase mb-3">
                      INTEGRATED TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#0B0B0B] border border-[#2D2D2D] text-[#00CFFF] rounded text-xs font-tech font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links Footer */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#2D2D2D]">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-[#0B0B0B] border border-[#FFD700]/30 hover:border-[#FFD700] text-gray-300 hover:text-[#FFD700] rounded font-heading text-xs tracking-widest font-bold text-center transition-all flex items-center justify-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GITHUB CODE
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#00CFFF] to-[#00A2C7] text-white rounded font-heading text-xs tracking-widest font-bold text-center transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,207,255,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE PREVIEW
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
