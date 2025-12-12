import React from 'react';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';

interface CTASectionProps {
  onSignUp?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onSignUp }) => {
  return (
    <section className="relative w-full min-h-[70vh] bg-black flex flex-col items-center justify-center py-24 px-6">
      
      <div className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-16">
        {/* Decorative Element */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="mb-4"
        >
          <BsStars className="text-[#FFE66D] text-4xl md:text-5xl" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          FIND SOMETHING REAL
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 font-sans text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          Curated IRL experiences that spark real connections. 
          Step away from the screen and into the moment.
        </motion.p>
      </div>

      {/* Primary Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <button 
          onClick={onSignUp}
          className="group relative px-10 py-4 rounded-full border border-white bg-transparent overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
          <span className="relative z-10 font-sans font-semibold tracking-wider text-sm md:text-base text-white group-hover:text-black transition-colors duration-300 uppercase">
            Sign Up Now
          </span>
        </button>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown className="text-white/30 text-2xl md:text-3xl" />
      </motion.div>

    </section>
  );
};

export default CTASection;