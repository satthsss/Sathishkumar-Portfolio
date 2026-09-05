import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedText, setCopiedText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { label: "Email Address", value: portfolioData.personal.email, icon: Mail, copy: true },
    { label: "Phone Connection", value: portfolioData.personal.phone, icon: Phone, copy: true },
    { label: "Command Center Location", value: portfolioData.personal.location, icon: MapPin, copy: false }
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] cyber-grid">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00CFFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-xs sm:text-sm font-tech tracking-[0.3em] text-[#00CFFF] uppercase font-bold">
            07 // SECURE CHANNELS
          </h2>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-wide text-[#F5F5F5]">
            CONTACT <span className="text-[#FFD700]">COMMAND CENTER</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#FFD700] mx-auto rounded shadow-[0_0_8px_#00CFFF]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-heading text-lg sm:text-xl text-[#FFD700] tracking-wide text-glow-gold">
              COMMUNICATION MATRIX
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Initiate a secure transmission. Whether you have a project blueprint, a full-time opening, or general inquiries, the connection is open.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-center justify-between p-4 bg-[#121218] border border-[#2D2D2D] rounded-xl hover:border-[#00CFFF]/40 transition-colors group relative overflow-hidden"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2.5 bg-[#0B0B0B] border border-[#2D2D2D] rounded-lg group-hover:border-[#FFD700] transition-colors">
                        <Icon className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-tech tracking-wider uppercase block">
                          {info.label}
                        </span>
                        <span className="text-xs sm:text-sm text-white font-mono-code font-semibold break-all">
                          {info.value}
                        </span>
                      </div>
                    </div>

                    {info.copy && (
                      <button
                        onClick={() => handleCopy(info.value, info.label)}
                        className="p-2 bg-[#0B0B0B] border border-[#2D2D2D] hover:border-[#FFD700] text-gray-400 hover:text-[#FFD700] rounded transition-all"
                        title={`Copy ${info.label}`}
                      >
                        {copiedText === info.label ? <Check className="w-3.5 h-3.5 text-green-500 animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Links Badge Ribbon */}
            <div className="bg-[#121218] border border-[#2D2D2D] p-5 rounded-xl flex items-center justify-around">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group text-gray-400 hover:text-white"
              >
                <div className="p-3 bg-[#0B0B0B] border border-[#2D2D2D] group-hover:border-[#FFD700] group-hover:bg-[#FFD700]/5 rounded-full transition-all">
                  <GithubIcon className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest mt-1">GITHUB</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group text-gray-400 hover:text-[#00CFFF]"
              >
                <div className="p-3 bg-[#0B0B0B] border border-[#2D2D2D] group-hover:border-[#00CFFF] group-hover:bg-[#00CFFF]/5 rounded-full transition-all">
                  <LinkedinIcon className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest mt-1">LINKEDIN</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#121218] border border-[#2D2D2D] p-6 sm:p-8 rounded-2xl bat-glass relative overflow-hidden">
              
              <div className="absolute top-2 right-4 text-[9px] font-mono-code text-gray-600 uppercase tracking-widest">
                [ TRANSMISSION PROTOCOL: SECURE ]
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#FFD700]">YOUR CODENAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Bruce Wayne"
                      className="w-full bg-[#0B0B0B] border border-[#2D2D2D] rounded-lg p-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#FFD700]">RETURN CHANNEL (EMAIL)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., bruce@waynecorp.com"
                      className="w-full bg-[#0B0B0B] border border-[#2D2D2D] rounded-lg p-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#FFD700]">MESSAGE ENCRYPT TITLE</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Full Stack Project Inquiry"
                    className="w-full bg-[#0B0B0B] border border-[#2D2D2D] rounded-lg p-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#FFD700]">MESSAGE LOG CONTENT</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter message details here..."
                    className="w-full bg-[#0B0B0B] border border-[#2D2D2D] rounded-lg p-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#00CFFF] to-[#00A2C7] disabled:opacity-50 text-white font-heading text-xs sm:text-sm tracking-widest font-black rounded-lg transition-all shadow-[0_0_15px_rgba(0,207,255,0.3)] hover:shadow-[0_0_25px_rgba(0,207,255,0.6)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}
                </button>
              </form>

              {/* Status Alert Overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-[#121218]/95 flex flex-col items-center justify-center p-6 text-center z-10"
                  >
                    <div className="p-3 bg-[#FFD700]/10 border border-[#FFD700] rounded-full mb-4 text-[#FFD700] animate-bounce">
                      <Send className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading text-lg text-white font-bold tracking-wider mb-2">
                      TRANSMISSION RECEIVED
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-sm">
                      Encryption check complete. Connection pipeline open. Sathishkumar will respond shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
