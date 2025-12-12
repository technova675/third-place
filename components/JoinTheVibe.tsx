import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaSearch, FaPlus } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { BsBatteryFull, BsWifi, BsReception4, BsGlobe } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';

const JoinTheVibe: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050505] py-16 md:py-24 px-4 overflow-hidden flex flex-col items-center">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-[#25D366] opacity-[0.06] blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      {/* 1. Section Header */}
      <div className="text-center mb-12 md:mb-16 relative z-10 max-w-2xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4"
        >
          JOIN THE <span className="italic text-[#25D366]">VIBE</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-gray-400 text-base md:text-xl"
        >
          Real talk. Real people. No small talk, just a WhatsApp away.
        </motion.p>
      </div>

      {/* 2. Animated Phone Mockup Area */}
      <div className="relative z-10 mt-4 md:mt-8 mb-8 w-full flex justify-center">

        {/* Wrapper to position bubbles relative to the phone */}
        <div className="relative">
          
          {/* --- External Floating Chat Bubbles --- */}
          {/* Left Top */}
          <ExternalChatBubble
            text="Did someone say Pizza? 🍕"
            side="left"
            className="hidden lg:flex absolute right-full mr-6 top-12 rotate-[-6deg] z-20"
            delay={0.2}
            color="bg-white text-black"
          />
          {/* Left Bottom */}
          <ExternalChatBubble
            text="Hiking this Sunday? ⛰️"
            side="left"
            className="hidden lg:flex absolute right-full mr-10 bottom-32 rotate-[3deg] z-20"
            delay={0.6}
            color="bg-[#DCF8C6] text-black"
          />

          {/* Right Top */}
          <ExternalChatBubble
            text="Jazz night! 🎷"
            side="right"
            className="hidden lg:flex absolute left-full ml-8 top-24 rotate-[6deg] z-20"
            delay={0.4}
            color="bg-[#DCF8C6] text-black"
          />
          {/* Right Bottom */}
          <ExternalChatBubble
            text="Count me in! 🙋‍♂️"
            side="right"
            className="hidden lg:flex absolute left-full ml-4 bottom-24 rotate-[-3deg] z-20"
            delay={0.8}
            color="bg-white text-black"
          />

          {/* --- The Phone --- */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[600px] sm:h-[700px] md:h-[760px] border-[8px] md:border-[10px] border-[#0e0e0e] rounded-[2.5rem] md:rounded-[3.2rem] bg-black shadow-2xl overflow-hidden ring-1 ring-white/10"
            >
              {/* Dynamic Island */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-black rounded-b-3xl z-40 flex items-center justify-center">
                <div className="w-16 md:w-20 h-2 md:h-3 bg-black rounded-full" />
              </div>

              {/* Screen Area */}
              <div className="w-full h-full bg-[#111] flex flex-col relative font-sans">

                {/* Status Bar */}
                <div className="w-full h-12 md:h-14 flex justify-between items-center px-6 text-white text-[10px] md:text-xs font-semibold z-30">
                  <span>9:41</span>
                  <div className="flex gap-1 md:gap-2 text-white">
                    <BsReception4 size={12} />
                    <BsWifi size={14} />
                    <BsBatteryFull size={16} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-hidden relative pb-20">

                  {/* Header Image */}
                  <div className="relative w-full h-40 md:h-48 overflow-hidden">
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSegI81dnW6fa1qkXyRICLq4it5jw-Tswb6nqyDiUNyoazjpxRD"
                      className="w-full h-full object-cover"
                      alt="Community Header"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#111]/80" />

                    <div className="absolute top-4 left-4 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <IoIosArrowBack />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <BsGlobe size={14} />
                    </div>
                  </div>

                  {/* Title Row */}
                  <div className="px-5 mt-3 flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      Third Place<br />Community
                    </h3>

                    <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white">
                      <FaPlus size={12} />
                    </div>
                  </div>

                  {/* Main App Content */}
                  <div className="px-5 mt-4">

                    {/* Announcements */}
                    <div className="space-y-3 mb-6 md:mb-8">
                      <div className="bg-[#1f1f1f] p-3 rounded-2xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                          <HiOutlineSpeakerphone size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">Announcements</h4>
                          <p className="text-gray-400 text-[10px]">Welcome to the community!</p>
                        </div>
                      </div>
                    </div>

                    {/* Groups Section */}
                    <h4 className="text-gray-400 text-xs font-semibold mb-3">Groups you're in</h4>

                    {/* Feed Card */}
                    <div className="bg-[#1f1f1f] rounded-3xl p-3 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/file-storage-2fa40.firebasestorage.app/o/Screenshot%202025-12-12%20215832-Photoroom.png?alt=media&token=32e7d058-9030-49e5-a992-f6db39590e4b"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-white text-xs font-bold truncate max-w-[150px]">
                            Third Place Com...
                            <span className="text-gray-500 text-[10px] ml-1">7:56 AM</span>
                          </h5>
                          <p className="text-gray-400 text-[10px]">~ Choix. Game night today at 7!</p>
                        </div>
                      </div>

                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/file-storage-2fa40.firebasestorage.app/o/Screenshot%202025-12-12%20215832-Photoroom.png?alt=media&token=32e7d058-9030-49e5-a992-f6db39590e4b"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-3 left-3 text-2xl">🎲</span>
                        <span className="absolute top-3 right-3 text-2xl">✨</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Sticky Button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-30">
                  <button className="w-full bg-[#25D366] text-white font-bold py-3 md:py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg text-sm">
                    <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                      <FaPlus size={8} />
                    </div>
                    Add group
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-Components ---

const ExternalChatBubble: React.FC<{
  text: string;
  side: 'left' | 'right';
  className: string;
  delay: number;
  color: string;
}> = ({ text, side, className, delay, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: side === 'left' ? 50 : -50 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }
        }}
        className={`flex items-center gap-2 px-5 py-3 rounded-2xl shadow-2xl pointer-events-none backdrop-blur-sm ${color}`}
      >
        <span className="text-lg font-medium whitespace-nowrap">{text}</span>
        {/* Little tail for the bubble */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 transform rotate-45 ${color} ${side === 'left' ? '-right-1' : '-left-1'}`} />
      </motion.div>
    </motion.div>
  );
};

export default JoinTheVibe;