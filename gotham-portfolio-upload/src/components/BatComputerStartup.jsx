import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BatComputerStartup({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const diagnosticLogs = [
    "INITIALIZING BAT-COMPUTER COMMAND SYSTEM...",
    "ESTABLISHING SECURE CONNECTION TO GOTHAM NETWORKS...",
    "UPLOADING SATHISHKUMAR D PROFILE SUMMARY...",
    "IMPORTING DJANGO BACKEND ARTIFACTS...",
    "LOADING REACT.JS FRONTEND ARCHITECTURES...",
    "CALIBRATING CANVAS WEATHER ENGINE [RAIN=ACTIVE, FOG=ENGAGED]...",
    "SYNCING LOCAL SQL SCHEMAS AND DATABASE MAPS...",
    "VERIFYING INTELLECTUAL SAFEGUARDS [BAT-SHIELD ACTIVE]...",
    "READY TO LAUNCH COGNITIVE COMMAND HUB."
  ];

  useEffect(() => {
    // Increment loading logs
    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < diagnosticLogs.length) {
        setLogs((prev) => [...prev, diagnosticLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 280);

    // Percentage counter
    const pctInterval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(pctInterval);
          setTimeout(onComplete, 500); // trigger final callback
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      clearInterval(logInterval);
      clearInterval(pctInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0B0B0B] z-50 flex flex-col items-center justify-center p-6 select-none font-tech scanline">
      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#FFD700] opacity-80" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#FFD700] opacity-80" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#FFD700] opacity-80" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#FFD700] opacity-80" />

      {/* Cyber Grid backdrop */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Bat Logo Emblem Placeholder (original stylized bat silhouette, non-copyrighted) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center mb-8"
      >
        {/* Stylized geometric original wings logo */}
        <svg
          width="120"
          height="60"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FFD700] filter drop-shadow-[0_0_15px_#FFD700] stroke-[1.5]"
        >
          {/* Symmetrical custom bat-wing aesthetic geometric shape */}
          <path
            d="M 50 15 
               C 42 15, 38 8, 30 15 
               C 22 22, 10 20, 5 30 
               C 15 35, 25 32, 35 28 
               C 42 25, 48 38, 50 42 
               C 52 38, 58 25, 65 28 
               C 75 32, 85 35, 95 30 
               C 90 20, 78 22, 70 15 
               C 62 8, 58 15, 50 15 Z"
            fill="rgba(255, 215, 0, 0.08)"
            stroke="#FFD700"
          />
        </svg>

        {/* Floating circuit rings */}
        <div className="absolute w-36 h-36 border border-dashed border-[#00CFFF] rounded-full animate-spin [animation-duration:12s] opacity-30" />
        <div className="absolute w-44 h-44 border border-dotted border-[#FFD700] rounded-full animate-spin [animation-duration:20s] opacity-20" />
      </motion.div>

      {/* Title */}
      <h1 className="font-heading text-xl md:text-2xl text-center text-[#FFD700] tracking-[0.25em] mb-1 text-glow-gold">
        BAT-COMPUTER COMMAND HUB
      </h1>
      <p className="text-xs text-[#00CFFF] tracking-[0.3em] font-tech text-center uppercase mb-8">
        Sathishkumar D // Python Full Stack Core
      </p>

      {/* Terminal Screen log window */}
      <div className="w-full max-w-2xl h-48 bg-[#121218] border border-[#00CFFF]/30 rounded p-4 font-mono-code text-[10px] md:text-xs text-[#00CFFF] overflow-y-auto mb-8 shadow-inner shadow-black/80 flex flex-col justify-end space-y-1">
        {logs.map((log, idx) => (
          <div key={idx} className="flex items-start">
            <span className="text-[#FFD700] mr-2">&gt;&gt;</span>
            <span className="break-all">{log}</span>
          </div>
        ))}
        {percentage < 100 && (
          <div className="flex items-center">
            <span className="text-[#00CFFF] animate-pulse">■ CALIBRATING SYSTEM MATRIX...</span>
          </div>
        )}
      </div>

      {/* Progress bar container */}
      <div className="w-full max-w-sm flex flex-col items-center">
        <div className="flex justify-between w-full text-xs text-[#F5F5F5] tracking-[0.1em] mb-2 font-mono-code">
          <span>DIAGNOSTIC STATUS</span>
          <span className="text-[#FFD700] text-glow-gold">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-[#1A1A1A] border border-[#2D2D2D] rounded overflow-hidden p-[1px]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            className="h-full bg-gradient-to-r from-[#00CFFF] to-[#FFD700] rounded shadow-[0_0_10px_#00CFFF]"
          />
        </div>
      </div>
    </div>
  );
}
