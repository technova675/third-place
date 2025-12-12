import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src="https://l7qzt21i1euwjh0a.public.blob.vercel-storage.com/nd1lstcb1wc5ra3tutru-obADr8lIjKUGumkzsG0nLS1n5atHwD.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;