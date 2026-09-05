import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const certifications = portfolioData.certifications;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'Code': return Code;
      case 'Terminal': return Terminal;
      default: return Award;
    }
  };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] cyber-grid">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            06 // VERIFIED CREDENTIALS
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            SYSTEM <span className="text-[#FFD700]">CERTIFICATIONS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => {
            const IconComponent = getIcon(cert.icon);
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#121218] border border-[#2D2D2D] p-6 rounded-xl bat-glass hover:border-[#FFD700]/60 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Header emblem */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#0B0B0B] border border-[#2D2D2D] rounded-lg group-hover:border-[#FFD700] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <span className="text-[10px] font-mono-code text-[#00CFFF] border border-[#00CFFF]/30 px-2 py-0.5 rounded font-bold uppercase">
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="font-heading text-lg text-white font-bold tracking-wide group-hover:text-[#FFD700] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="font-tech text-xs text-[#00CFFF] font-bold uppercase tracking-wider">
                    ISSUER: {cert.issuer}
                  </p>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D2D2D]/60 flex items-center justify-between text-[11px] font-mono-code text-gray-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00CFFF]" />
                    AUTHENTICATED
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
