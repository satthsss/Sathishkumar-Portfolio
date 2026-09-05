import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Briefcase, Mail, Cpu, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onTerminalOpen }) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const subtitles = portfolioData.personal.subtitles;

  // Typing animation effect
  useEffect(() => {
    const currentSubtitle = subtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentSubtitle.substring(0, displayText.length + 1));
        if (displayText.length === currentSubtitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentSubtitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, subtitleIndex, subtitles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFD700]/10 to-[#00CFFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Text Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121218] border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.15)] text-[11px] font-mono-code text-[#FFD700]">
            <Cpu className="w-3.5 h-3.5 text-[#00CFFF] animate-pulse" />
            <span className="tracking-widest uppercase">AVAILABLE FOR FULL-STACK ROLES</span>
          </div>

          {/* Headline Name */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
              GOTHAM DEVELOPER ARCHIVES // IDENTIFICATION
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-[#F5F5F5] tracking-tight leading-none text-glow-gold">
              SATHISHKUMAR <span className="text-[#FFD700]">D</span>
            </h1>
          </div>

          {/* Typing Title */}
          <div className="h-10 flex items-center justify-center lg:justify-start">
            <span className="font-tech text-xl sm:text-2xl lg:text-3xl text-[#00CFFF] tracking-wider font-semibold">
              {displayText}
            </span>
            <span className="w-0.5 h-6 bg-[#FFD700] ml-1 animate-pulse" />
          </div>

          {/* Short Bio */}
          <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed font-sans font-light">
            Detail-oriented <span className="text-[#FFD700] font-medium">Python Full-Stack Developer</span> specializing in building scalable web applications with <span className="text-[#00CFFF]">Django</span>, <span className="text-[#00CFFF]">React.js</span>, and <span className="text-[#00CFFF]">MySQL</span>. Proven track record in API integration, IoT healthcare telemetry, and voice-assisted NLP systems.
          </p>

          {/* Key Metrics Quick Ribbon */}
          <div className="grid grid-cols-3 gap-4 py-4 max-w-lg mx-auto lg:mx-0 border-y border-[#2D2D2D]/60 font-tech">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-heading text-[#FFD700]">8.1 / 10</div>
              <div className="text-[10px] text-gray-400 tracking-wider">BE CS CGPA</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-heading text-[#00CFFF]">3+</div>
              <div className="text-[10px] text-gray-400 tracking-wider">FULL PROJECTS</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-heading text-[#FFD700]">BESANT</div>
              <div className="text-[10px] text-gray-400 tracking-wider">INTERN EXP</div>
            </div>
          </div>

          {/* Call-to-action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            {/* Hire Me */}
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#E6B800] text-[#0B0B0B] font-heading text-xs sm:text-sm tracking-widest font-bold rounded shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              HIRE ME
            </a>

            {/* Download Resume */}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sathishkumar_D_Resume.pdf"
              className="px-6 py-3.5 bg-[#121218] border border-[#00CFFF]/50 text-[#00CFFF] hover:text-white font-heading text-xs sm:text-sm tracking-widest font-bold rounded shadow-[0_0_15px_rgba(0,207,255,0.2)] hover:border-[#00CFFF] hover:bg-[#00CFFF]/20 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>

            {/* Explore Portfolio */}
            <a
              href="#projects"
              className="px-5 py-3.5 bg-transparent border border-[#2D2D2D] hover:border-[#FFD700] text-gray-300 hover:text-[#FFD700] font-tech text-xs sm:text-sm tracking-widest font-bold rounded transition-all flex items-center gap-1 group"
            >
              EXPLORE WORK
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Professional Photo in Futuristic Cyber Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group max-w-sm sm:max-w-md w-full">
            
            {/* Ambient Outer Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] via-[#00CFFF] to-[#FFD700] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-bat-pulse" />

            {/* Frame Body */}
            <div className="relative bg-[#121218] border-2 border-[#FFD700]/50 rounded-2xl p-3 shadow-2xl overflow-hidden bat-glass">
              
              {/* Corner Accent Brackets */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#00CFFF] z-20" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#00CFFF] z-20" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#00CFFF] z-20" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#00CFFF] z-20" />

              {/* Photo Image Container */}
              <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={portfolioData.personal.photoUrl}
                  alt="Sathishkumar D - Python Full Stack Developer"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />

                {/* Gradient bottom shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />

                {/* Overlaid HUD Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-[#0B0B0B]/80 backdrop-blur-md p-2.5 rounded border border-[#FFD700]/30 text-xs font-tech">
                  <div className="flex flex-col">
                    <span className="text-[#FFD700] font-bold tracking-wider">SATHISHKUMAR D</span>
                    <span className="text-[10px] text-[#00CFFF]">CHENNAI, INDIA</span>
                  </div>
                  <Award className="w-5 h-5 text-[#FFD700] animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
