import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Cpu, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const achievements = portfolioData.achievements;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Rocket': return Rocket;
      case 'Cpu': return Cpu;
      case 'Award': return Award;
      default: return Award;
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#08080C] border-y border-[#2D2D2D]/60">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = getIcon(item.icon);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#121218] border border-[#2D2D2D] p-6 rounded-xl bat-glass text-center group hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <div className="p-3 bg-[#0B0B0B] border border-[#2D2D2D] rounded-full inline-flex mb-3 group-hover:border-[#FFD700] transition-colors">
                  <IconComponent className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl text-white font-black tracking-wider text-glow-gold">
                  {item.value}
                  <span className="text-sm font-tech text-[#00CFFF] ml-1">{item.suffix}</span>
                </div>
                <div className="font-tech text-xs text-gray-400 uppercase tracking-widest mt-2 font-bold">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
