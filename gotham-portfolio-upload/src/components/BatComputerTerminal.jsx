import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BatComputerTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: "=== BAT-COMPUTER TERMINAL v9.8.1 ===", type: "system" },
    { text: "Enter 'help' to view the list of available commands.", type: "system" },
    { text: "", type: "spacing" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // Focus input on click anywhere inside terminal content
  const handleContentClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const commandText = inputVal.trim();
    if (!commandText) return;

    const cmdClean = commandText.toLowerCase();
    const newHistory = [...history, { text: `recruiter@gotham:~$ ${commandText}`, type: "command" }];

    switch (cmdClean) {
      case 'help':
        newHistory.push(
          { text: "Available commands:", type: "system" },
          { text: "  whoami   - Display profile info & credentials summary", type: "info" },
          { text: "  skills   - List all developer tools, frameworks, and languages", type: "info" },
          { text: "  projects - Show detailed info of projects built by Sathishkumar D", type: "info" },
          { text: "  contact  - Output email, phone number, location, and social links", type: "info" },
          { text: "  clear    - Clear console screen logs", type: "info" },
          { text: "  exit     - Close this Bat-Computer session", type: "info" }
        );
        break;

      case 'whoami':
        newHistory.push(
          { text: `NAME: ${portfolioData.personal.name}`, type: "info" },
          { text: `ROLE: ${portfolioData.personal.title}`, type: "info" },
          { text: `SUMMARY: ${portfolioData.personal.summary}`, type: "info" }
        );
        break;

      case 'skills':
        newHistory.push({ text: "Listing developer technical competencies:", type: "system" });
        Object.entries(portfolioData.skills).forEach(([category, list]) => {
          newHistory.push({ text: `[${category.toUpperCase()}]`, type: "section" });
          const items = list.map(item => `${item.name} (${item.level}%)`).join(", ");
          newHistory.push({ text: `  ${items}`, type: "info" });
        });
        break;

      case 'projects':
        newHistory.push({ text: "Listing full stack projects:", type: "system" });
        portfolioData.projects.forEach((proj, idx) => {
          newHistory.push(
            { text: `${idx + 1}. ${proj.title.toUpperCase()} (${proj.subtitle})`, type: "section" },
            { text: `   Description: ${proj.description}`, type: "info" },
            { text: `   Stack: ${proj.technologies.join(", ")}`, type: "info" },
            { text: `   Codebase: ${proj.github}`, type: "info" }
          );
        });
        break;

      case 'contact':
        newHistory.push(
          { text: "Establishing communication channels:", type: "system" },
          { text: `  Email:    ${portfolioData.personal.email}`, type: "info" },
          { text: `  Phone:    ${portfolioData.personal.phone}`, type: "info" },
          { text: `  Location: ${portfolioData.personal.location}`, type: "info" },
          { text: `  LinkedIn: ${portfolioData.personal.linkedin}`, type: "info" },
          { text: `  GitHub:   ${portfolioData.personal.github}`, type: "info" }
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal("");
        return;

      case 'exit':
      case 'close':
        onClose();
        setInputVal("");
        return;

      default:
        newHistory.push({ text: `Command not found: '${commandText}'. Type 'help' for a list of available command commands.`, type: "error" });
    }

    newHistory.push({ text: "", type: "spacing" });
    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className={`fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 border-t-2 border-[#FFD700] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] font-mono-code transition-all duration-300 scanline ${
            isFullscreen ? 'h-[80vh]' : 'h-[40vh]'
          }`}
        >
          {/* Header controls */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#121218] border-b border-[#2D2D2D]">
            <div className="flex items-center space-x-2">
              <TerminalIcon className="w-4 h-4 text-[#FFD700]" />
              <span className="text-xs md:text-sm text-[#FFD700] font-heading tracking-wider">
                BAT-COMPUTER COGNITIVE SHELL v9.8
              </span>
              <span className="text-[10px] text-[#00CFFF] font-tech uppercase animate-pulse">
                // online
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-gray-400 hover:text-[#00CFFF] transition-colors"
                title={isFullscreen ? "Restore size" : "Maximize window"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Console output */}
          <div
            onClick={handleContentClick}
            className="w-full h-[calc(100%-40px)] overflow-y-auto p-4 text-xs text-[#00CFFF] flex flex-col cursor-text pb-12"
          >
            <div className="flex-1">
              {history.map((line, idx) => {
                if (line.type === "command") {
                  return (
                    <div key={idx} className="flex items-center text-[#F5F5F5] font-semibold mb-1">
                      <span className="text-[#FFD700] mr-2">recruiter@gotham:~$</span>
                      <span>{line.text.replace("recruiter@gotham:~$ ", "")}</span>
                    </div>
                  );
                } else if (line.type === "error") {
                  return <div key={idx} className="text-red-500 mb-1">{line.text}</div>;
                } else if (line.type === "section") {
                  return <div key={idx} className="text-[#FFD700] font-bold mt-2 mb-1">{line.text}</div>;
                } else if (line.type === "system") {
                  return <div key={idx} className="text-gray-400 mb-1">{line.text}</div>;
                } else if (line.type === "spacing") {
                  return <div key={idx} className="h-2" />;
                }
                return <div key={idx} className="text-[#00CFFF] opacity-90 leading-relaxed mb-1">{line.text}</div>;
              })}
              <div ref={bottomRef} />
            </div>

            {/* Input prompt */}
            <div className="flex items-center mt-2 relative">
              <span className="text-[#FFD700] font-semibold mr-2 shrink-0">recruiter@gotham:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type 'help'..."
                className="bg-transparent text-[#F5F5F5] border-none outline-none flex-1 font-mono-code focus:ring-0 focus:outline-none placeholder-blue-900/60"
              />
              <span className="absolute right-2 text-gray-500 text-[9px] flex items-center gap-1 opacity-50 select-none">
                Press Enter <CornerDownLeft className="w-3 h-3" />
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
