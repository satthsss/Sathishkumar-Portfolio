import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Terminal, Server, Database, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const points = [
    {
      title: "Full-Stack Development",
      description: "Hands-on experience coding end-to-end user interfaces and RESTful backends using React, HTML5, CSS3, Django, and DRF.",
      icon: Server,
      color: "text-[#FFD700]"
    },
    {
      title: "Database Architecture",
      description: "Skilled in structured database design, querying, and optimization with MySQL, creating robust relational schemas.",
      icon: Database,
      color: "text-[#00CFFF]"
    },
    {
      title: "IoT & Mobile Integrations",
      description: "Practical development of smart systems utilizing ESP32 microcontrollers, sensor telemetry, and cross-platform React Native apps.",
      icon: Smartphone,
      color: "text-[#FFD700]"
    },
    {
      title: "Natural Language Processing",
      description: "Developing intelligent speech assistants with local text-to-speech feedback and script automation hooks using Python NLP.",
      icon: Brain,
      color: "text-[#00CFFF]"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
      {/* Glow Effect */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00CFFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            01 // DOSSIER FILE
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            ABOUT <span className="text-[#FFD700]">THE DEVELOPER</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio Story & Terminal Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-heading text-lg sm:text-xl text-[#FFD700] tracking-wide text-glow-gold">
              THE MISSION BRIEFING
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am Sathishkumar D, a Chennai-based Python Full-Stack Developer with a Bachelor of Engineering in Computer Science. My philosophy revolves around engineering robust, clean, and scalable web infrastructures that bridge the gap between complex backend logic and user-centric interfaces.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              From building a complete ride-hailing clone with OTP multi-factor authentication to developing an IoT Maternal Health system measuring real-time fall detection, I love exploring how technology meets real-world needs.
            </p>

            {/* Custom Terminal Panel */}
            <div className="bg-[#121218] border border-[#FFD700]/20 rounded p-4 font-mono-code text-[11px] sm:text-xs text-[#00CFFF] shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-6 bg-[#0B0B0B] border-b border-[#2D2D2D] flex items-center px-3 justify-between">
                <span className="text-[10px] text-gray-500 font-bold">SATHISH_CONSOLE.SH</span>
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
              </div>
              <div className="pt-6 space-y-1">
                <div><span className="text-[#FFD700]">&gt;</span> cat location.info</div>
                <div className="text-gray-400">Chennai, Tamil Nadu, India</div>
                <div><span className="text-[#FFD700]">&gt;</span> cat motivation.env</div>
                <div className="text-gray-400">"Build elegant code to solve challenging human puzzles."</div>
                <div><span className="text-[#FFD700]">&gt;</span> cat status.log</div>
                <div className="text-green-400 font-semibold uppercase tracking-widest animate-pulse">[READY FOR ENGAGEMENT]</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-[#121218] border border-[#2D2D2D] p-5 rounded-lg bat-glass hover:border-[#FFD700]/50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,215,0,0.05)]"
                >
                  <div className="p-3 bg-[#0B0B0B] border border-[#2D2D2D] rounded-md inline-block mb-4 group-hover:border-[#FFD700] group-hover:bg-[#FFD700]/5 transition-all">
                    <Icon className={`w-6 h-6 ${point.color}`} />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base text-white tracking-wider mb-2 font-bold group-hover:text-[#FFD700] transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
