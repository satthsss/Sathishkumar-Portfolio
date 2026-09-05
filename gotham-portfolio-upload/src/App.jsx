import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component imports
import GothamAtmosphere from './components/GothamAtmosphere';
import BatComputerStartup from './components/BatComputerStartup';
import BatComputerTerminal from './components/BatComputerTerminal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isRainActive, setIsRainActive] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isBooting ? (
          <BatComputerStartup key="startup" onComplete={() => setIsBooting(false)} />
        ) : (
          <div className="relative min-h-screen text-[#F5F5F5] select-none overflow-hidden transition-opacity duration-1000 bg-[#0B0B0B]">
            {/* Ambient canvas backdrop */}
            <GothamAtmosphere isRainActive={isRainActive} showBats={true} />

            {/* Cyber grid overlays */}
            <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0" />
            <div className="fixed inset-0 scanline opacity-[0.07] pointer-events-none z-10" />

            {/* Floating Batcave HUD Header Navbar */}
            <Navbar
              onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)}
              isRainActive={isRainActive}
              onRainToggle={() => setIsRainActive(!isRainActive)}
            />

            {/* Main Application Sections */}
            <main className="relative z-10">
              <Hero onTerminalOpen={() => setIsTerminalOpen(true)} />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Certifications />
              <Achievements />
              <ResumeSection />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Collapsible command panel drawer */}
            <BatComputerTerminal
              isOpen={isTerminalOpen}
              onClose={() => setIsTerminalOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
