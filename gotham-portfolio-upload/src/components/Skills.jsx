import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const skillCategories = portfolioData.skills;

  const categoriesList = ["All", ...Object.keys(skillCategories)];

  // Look up icons dynamically
  const renderIcon = (iconName, colorClass) => {
    const IconComponent = Icons[iconName] || Icons.Cpu;
    return <IconComponent className={`w-5 h-5 ${colorClass}`} />;
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] cyber-grid">
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            02 // SYSTEM CAPABILITIES
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            TECHNICAL <span className="text-[#FFD700]">COMPETENCY</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-tech tracking-widest border transition-all rounded ${
                activeCategory === cat
                  ? 'bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.2)]'
                  : 'bg-[#121218] border-[#2D2D2D] text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories)
            .filter(([category]) => activeCategory === "All" || activeCategory === category)
            .map(([category, items], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-[#121218] border border-[#2D2D2D] rounded-xl p-6 shadow-xl bat-glass hover:border-[#00CFFF]/40 transition-all duration-300 relative group"
              >
                {/* Decorative circuit line */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#00CFFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <h3 className="font-heading text-xs tracking-[0.2em] text-[#FFD700] uppercase font-bold mb-6 border-b border-[#2D2D2D]/60 pb-3 flex items-center justify-between">
                  <span>{category}</span>
                  <span className="text-[10px] text-[#00CFFF] font-tech tracking-wider uppercase font-medium group-hover:animate-pulse">
                    // Ready
                  </span>
                </h3>

                <div className="space-y-4">
                  {items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs tracking-wide">
                        <div className="flex items-center space-x-2 text-gray-200">
                          {renderIcon(skill.icon, skillIdx % 2 === 0 ? 'text-[#FFD700]' : 'text-[#00CFFF]')}
                          <span className="font-tech text-sm font-semibold">{skill.name}</span>
                        </div>
                        <span className="font-mono-code text-[11px] text-gray-400">{skill.level}%</span>
                      </div>

                      {/* Bar indicator */}
                      <div className="w-full h-1.5 bg-[#0B0B0B] rounded-full overflow-hidden p-[1px] border border-[#2D2D2D]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                          className={`h-full rounded-full ${
                            skillIdx % 2 === 0 
                              ? 'bg-gradient-to-r from-[#FFD700] to-[#E6B800]' 
                              : 'bg-gradient-to-r from-[#00CFFF] to-[#00A2C7]'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
