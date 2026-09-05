import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            03 // FIELD OPERATIVE LOGS
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            PROFESSIONAL <span className="text-[#FFD700]">EXPERIENCE</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical glowing spine */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FFD700] via-[#00CFFF] to-[#FFD700]/20 rounded shadow-[0_0_10px_#FFD700]" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative mb-12 sm:mb-16 flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                {/* Timeline Center Glowing Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121218] border-2 border-[#FFD700] flex items-center justify-center z-20 shadow-[0_0_15px_#FFD700]">
                  <Briefcase className="w-4 h-4 text-[#FFD700]" />
                </div>

                {/* Content Box */}
                <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-24px)] w-full ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="bg-[#121218] border border-[#2D2D2D] p-6 rounded-xl bat-glass hover:border-[#FFD700]/50 transition-all duration-300 relative group">
                    
                    {/* Status Pill */}
                    <span className="inline-block px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-[10px] font-tech tracking-widest rounded mb-3">
                      {exp.status.toUpperCase()}
                    </span>

                    <h3 className="font-heading text-lg sm:text-xl text-white font-bold tracking-wide group-hover:text-[#FFD700] transition-colors">
                      {exp.role}
                    </h3>

                    <div className={`flex flex-wrap items-center gap-4 text-xs font-tech text-[#00CFFF] my-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                      <span className="flex items-center gap-1 font-bold">
                        <ChevronRight className="w-3.5 h-3.5 text-[#FFD700]" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-300 text-left">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00CFFF] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
