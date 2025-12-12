import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCopy } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface ContactOverlayProps {
  onBack: () => void;
}

const ContactOverlay: React.FC<ContactOverlayProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] flex flex-col md:flex-row bg-black overflow-hidden"
    >
      {/* Back Button (Absolute) */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white transition-all shadow-lg"
      >
        <FiArrowLeft className="text-xl" />
      </button>

      {/* Left Side: Info (Dark) */}
      <div className="w-full md:w-1/2 bg-[#050505] text-white p-8 pt-20 md:p-20 flex flex-col justify-center relative overflow-hidden shrink-0">
        
        {/* Abstract Deco */}
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl mb-8 tracking-tighter"
          >
            LET'S<br />CHAT.
          </motion.h2>

          <div className="space-y-6 md:space-y-8 font-sans">
            <div className="group cursor-pointer">
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-1">Email Us</p>
              <div className="flex items-center gap-2 text-xl md:text-3xl font-light hover:text-[#25D366] transition-colors break-all">
                hello@thirdplace.com <FiCopy className="opacity-0 group-hover:opacity-100 text-lg transition-opacity hidden md:block" />
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-1">HQ</p>
              <p className="text-lg md:text-2xl font-light text-gray-300">
                12th Main Rd, Indiranagar<br />
                Bangalore, 560038
              </p>
            </div>
            
            <div className="pt-4 md:pt-8 flex gap-6">
               <FaInstagram className="text-2xl md:text-3xl hover:text-[#25D366] cursor-pointer transition-colors" />
               <FaTwitter className="text-2xl md:text-3xl hover:text-[#25D366] cursor-pointer transition-colors" />
               <FaLinkedin className="text-2xl md:text-3xl hover:text-[#25D366] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form (White) */}
      <div className="w-full md:w-1/2 bg-white text-black p-8 md:p-20 flex flex-col justify-center overflow-y-auto grow">
        <div className="max-w-md w-full mx-auto pb-10">
          <p className="font-serif italic text-xl md:text-2xl mb-8 md:mb-12 text-gray-500">
            "I want to create a space for..."
          </p>

          <form className="space-y-8 md:space-y-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full py-3 md:py-4 border-b border-gray-300 bg-transparent text-lg md:text-xl font-sans focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
              />
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full py-3 md:py-4 border-b border-gray-300 bg-transparent text-lg md:text-xl font-sans focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="relative">
               <select className="w-full py-3 md:py-4 border-b border-gray-300 bg-transparent text-lg md:text-xl font-sans focus:outline-none focus:border-black transition-colors text-gray-800 cursor-pointer appearance-none">
                 <option value="" disabled selected>What's the vibe?</option>
                 <option value="partnership">Partnership</option>
                 <option value="host">Hosting an Event</option>
                 <option value="press">Press / Media</option>
                 <option value="other">Just saying hi</option>
               </select>
               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
            </div>

            <div className="relative">
              <textarea 
                rows={3}
                placeholder="Tell us more..." 
                className="w-full py-3 md:py-4 border-b border-gray-300 bg-transparent text-lg md:text-xl font-sans focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
              />
            </div>

            <button 
              type="button"
              className="w-full bg-black text-white font-display font-bold text-lg md:text-xl py-4 md:py-6 hover:bg-[#25D366] hover:text-black transition-colors uppercase tracking-widest mt-4 md:mt-8"
            >
              Send It &rarr;
            </button>
          </form>
        </div>
      </div>

    </motion.div>
  );
};

export default ContactOverlay;