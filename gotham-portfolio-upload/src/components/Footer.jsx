import React, { useEffect, useState } from 'react';
import { ChevronUp, Shield, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08080C] border-t border-[#2D2D2D] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden font-tech">
      {/* Decorative top grid accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center space-x-3 text-center md:text-left">
          <Shield className="w-6 h-6 text-[#FFD700]" />
          <div className="flex flex-col">
            <span className="font-heading font-black text-xs sm:text-sm tracking-widest text-[#F5F5F5]">
              SATHISHKUMAR D
            </span>
            <span className="text-[9px] text-[#00CFFF] font-bold tracking-[0.2em] uppercase">
              DESIGNED FOR THE FUTURE
            </span>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-xs text-gray-500 tracking-wider">
          &copy; {new Date().getFullYear()} Sathishkumar D. All Rights Reserved. // Code decrypted.
        </div>

        {/* Right: Quick Social links */}
        <div className="flex items-center space-x-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#0B0B0B] border border-[#2D2D2D] hover:border-[#FFD700] text-gray-400 hover:text-[#FFD700] rounded transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#0B0B0B] border border-[#2D2D2D] hover:border-[#00CFFF] text-gray-400 hover:text-[#00CFFF] rounded transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2 bg-[#0B0B0B] border border-[#2D2D2D] hover:border-[#FFD700] text-gray-400 hover:text-[#FFD700] rounded transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Back to top Floating button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 bg-[#FFD700] hover:bg-[#E6B800] text-[#0B0B0B] rounded-full shadow-[0_0_15px_#FFD700] hover:shadow-[0_0_20px_#FFD700] transition-all transform hover:-translate-y-1"
          title="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[3]" />
        </button>
      )}
    </footer>
  );
}
