import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const edu = portfolioData.education[0];

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] cyber-grid">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            04 // ACADEMIC RECORD
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            ACADEMIC <span className="text-[#FFD700]">DOSSIER</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        {/* Education Showcase */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#121218] border border-[#2D2D2D] p-6 sm:p-8 rounded-xl bat-glass hover:border-[#FFD700]/50 transition-all duration-300 relative group"
          >
            {/* Design accents */}
            <div className="absolute top-4 right-4 text-[10px] font-mono-code text-gray-500 uppercase tracking-widest">
              [ Verified File ]
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Left Logo Emblem */}
              <div className="p-4 bg-[#0B0B0B] border border-[#2D2D2D] rounded-xl inline-flex items-center justify-center shrink-0 w-16 h-16 shadow-inner group-hover:border-[#FFD700] transition-colors duration-300">
                <GraduationCap className="w-8 h-8 text-[#FFD700] filter drop-shadow-[0_0_5px_#FFD700]" />
              </div>

              {/* Right content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-heading text-lg sm:text-2xl text-white font-bold group-hover:text-[#FFD700] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="font-tech text-sm sm:text-base text-[#00CFFF] font-semibold mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-0.5 rounded text-[#FFD700] font-mono-code text-[11px] font-bold">
                      <Award className="w-3.5 h-3.5" />
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>

                {/* Core Courses */}
                <div className="border-t border-[#2D2D2D]/60 pt-4">
                  <h4 className="font-tech text-xs tracking-[0.2em] text-[#FFD700] uppercase font-bold mb-3">
                    CORE SPECIALIZATIONS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00CFFF]" />
                      Data Structures & OOP
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00CFFF]" />
                      Relational DBMS (MySQL)
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00CFFF]" />
                      Full Stack Systems (React & Django)
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00CFFF]" />
                      AI Foundations & NLP
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
