import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FFD700]/10 to-[#00CFFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#121218] border-2 border-[#FFD700]/40 p-8 sm:p-12 rounded-2xl bat-glass text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B0B0B] border border-[#00CFFF]/40 text-[11px] font-mono-code text-[#00CFFF] mb-6">
            <Shield className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="uppercase tracking-widest">OFFICIAL RESUME ARCHIVE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl text-white font-black tracking-wide text-glow-gold mb-4">
            DOWNLOAD FULL <span className="text-[#FFD700]">RESUME</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Access the complete verified curriculum vitae of Sathishkumar D, detailing project blueprints, full stack engineering internships, and verified cloud AI credentials.
          </p>

          {/* Quick Checklist Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left font-tech text-xs sm:text-sm text-gray-300 mb-10 bg-[#0B0B0B]/70 p-4 rounded-xl border border-[#2D2D2D]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>Full Stack Python & Django</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00CFFF] shrink-0" />
              <span>B.E. CS (CGPA 8.1 / 10)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>Oracle OCI AI Foundations</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sathishkumar_D_Resume.pdf"
              className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#E6B800] text-[#0B0B0B] font-heading text-sm tracking-widest font-black rounded-lg shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] transform hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD PDF CV
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0B0B0B] border border-[#00CFFF] text-[#00CFFF] hover:text-white font-heading text-sm tracking-widest font-bold rounded-lg hover:bg-[#00CFFF]/20 transform hover:-translate-y-1 transition-all flex items-center gap-3 shadow-[0_0_15px_rgba(0,207,255,0.2)]"
            >
              <FileText className="w-5 h-5" />
              VIEW IN BROWSER
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
