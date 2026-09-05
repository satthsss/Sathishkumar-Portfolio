import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Shield, Droplets, CloudRain } from 'lucide-react';

export default function Navbar({ onTerminalToggle, isRainActive, onRainToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00CFFF] to-[#FFD700] origin-[0%] z-50 shadow-[0_0_8px_#00CFFF]"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#0B0B0B]/85 border-b border-[#FFD700]/15 backdrop-blur-md shadow-lg shadow-black/40' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-2 group">
            {/* Custom geometric crest */}
            <div className="relative p-1">
              <Shield className="w-7 h-7 text-[#FFD700] filter drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#00CFFF]/20 rounded-full blur group-hover:scale-125 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm md:text-base tracking-[0.2em] text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors">
                SATHISHKUMAR D
              </span>
              <span className="font-tech text-[9px] md:text-[10px] tracking-[0.25em] text-[#00CFFF] font-bold">
                CORE SYSTEM OVERSEER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-tech text-xs tracking-widest text-gray-300 hover:text-[#FFD700] transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-4">
            {/* Live indicator (Chennai, IN) */}
            <div className="hidden md:flex items-center space-x-2 bg-[#121218] border border-[#2D2D2D] px-3 py-1 rounded text-[10px] font-mono-code text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CFFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00CFFF]"></span>
              </span>
              <span className="tracking-wide">SYS ONLINE // CHENNAI</span>
            </div>

            {/* Rain Toggle */}
            <button
              onClick={onRainToggle}
              className={`p-1.5 rounded border transition-all ${
                isRainActive 
                  ? 'border-[#00CFFF]/40 text-[#00CFFF] bg-[#00CFFF]/5 shadow-[0_0_10px_rgba(0,207,255,0.2)]' 
                  : 'border-[#2D2D2D] text-gray-400 hover:text-white'
              }`}
              title={isRainActive ? "Disable Rain Effect" : "Enable Rain Effect"}
            >
              {isRainActive ? <CloudRain className="w-4 h-4" /> : <Droplets className="w-4 h-4" />}
            </button>

            {/* Terminal Trigger Button */}
            <button
              onClick={onTerminalToggle}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 hover:border-[#FFD700] text-[#FFD700] rounded text-xs font-tech tracking-wider transition-all duration-300 shadow-[0_0_10px_rgba(255,215,0,0.1)] hover:shadow-[0_0_15px_rgba(255,215,0,0.35)]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">BAT-COMPUTER</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
