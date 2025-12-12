import React from 'react';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';

interface HowItWorksProps {
  onStart?: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onStart }) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Section Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl text-deep-black font-bold mb-4"
          >
            HOW IT WORKS?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-sans uppercase tracking-widest text-gray-500 text-xs md:text-sm font-medium mb-6"
          >
            Real connection in 3 easy steps
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-[1px] bg-gray-300 mx-auto"
          />
        </div>

        {/* 2. The Three Steps (Card Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1: Tell Us About You */}
          <StepCard 
            step={1} 
            title="TELL US ABOUT YOU" 
            text="Take a quick personality test — so we can match you with the right people and the right vibes."
            delay={0.1}
          >
            <VisualStepOne />
          </StepCard>

          {/* Card 2: Get Matched */}
          <StepCard 
            step={2} 
            title="GET MATCHED" 
            text="Our algorithm matches you with amazing people for unforgettable evenings and deep conversations."
            delay={0.3}
          >
            <VisualStepTwo />
          </StepCard>

          {/* Card 3: Show Up */}
          <StepCard 
            step={3} 
            title="SHOW UP & LET THE MAGIC HAPPEN" 
            text="Join curated experiences, meet real people, and spark something real—right here, in real life."
            delay={0.5}
          >
            <VisualStepThree />
          </StepCard>
        </div>

        {/* 4. Bottom CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.button 
            onClick={onStart}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-10 md:py-5 bg-black text-white font-sans font-bold tracking-wide rounded-full text-sm md:text-base transition-all"
          >
            START YOUR JOURNEY
          </motion.button>
        </div>

      </div>
    </section>
  );
};

// --- Sub-Components ---

const StepCard: React.FC<{ step: number; title: string; text: string; children: React.ReactNode; delay: number }> = ({ step, title, text, children, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#FAF8F3] rounded-3xl p-6 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[400px] md:min-h-[500px]"
    >
      {/* Step Indicator */}
      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-display font-bold text-lg mb-6 md:mb-8 shadow-lg">
        {step}
      </div>

      {/* Text Content */}
      <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 uppercase leading-tight">
        {title}
      </h3>
      <p className="font-sans text-gray-600 leading-relaxed mb-auto text-sm md:text-base">
        {text}
      </p>

      {/* Visual Container */}
      <div className="w-full h-40 md:h-56 mt-6 md:mt-8 relative flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

// --- Visual Animations ---

const VisualStepOne: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-4">
      {/* Scene Container */}
      <div className="relative w-[280px] md:w-[300px] h-[200px] md:h-[240px] flex items-end justify-center">

        {/* 1. Introvert Label (Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          className="absolute top-8 md:top-12 left-0 md:-left-2 z-20"
        >
          <span className="font-serif italic font-bold text-gray-800 text-base md:text-lg relative z-10">Introvert?</span>
          {/* Curved Dotted Line to Ear */}
          <svg className="absolute top-6 left-8 md:left-10 w-12 md:w-16 h-8 md:h-12 pointer-events-none" viewBox="0 0 60 40">
             <path d="M0,0 Q20,20 50,40" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </motion.div>

        {/* 2. Humor Label (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
          className="absolute top-16 md:top-20 right-0 md:-right-2 z-20"
        >
          <span className="font-serif italic font-bold text-gray-800 text-base md:text-lg relative z-10">Humor?</span>
          {/* Curved Dotted Line to Ear */}
          <svg className="absolute top-4 right-10 md:right-12 w-12 md:w-16 h-8 md:h-12 pointer-events-none" viewBox="0 0 60 40">
             <path d="M60,0 Q40,20 10,40" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </motion.div>

        {/* 3. The Character */}
        <svg width="200" height="200" viewBox="0 0 200 200" className="z-10 drop-shadow-lg scale-90 md:scale-100 origin-bottom">
           <motion.g 
             initial={{ y: 5 }} 
             animate={{ y: 0 }} 
             transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
           >
              {/* Body (Red Shirt) */}
              <path d="M40,200 C40,160 60,150 70,145 L130,145 C140,150 160,160 160,200 L160,220 L40,220 Z" fill="#EF4444" />
              
              {/* Neck */}
              <rect x="85" y="125" width="30" height="25" fill="#FFDFC4" />
              <path d="M85,145 Q100,155 115,145" fill="black" opacity="0.1" />

              {/* Head */}
              <rect x="70" y="60" width="60" height="75" rx="24" fill="#FFDFC4" />
              
              {/* Ears */}
              <circle cx="68" cy="95" r="5" fill="#FFDFC4" />
              <circle cx="132" cy="95" r="5" fill="#FFDFC4" />

              {/* Hair (Brown, Wavy Top) */}
              <path d="M65,70 C60,40 80,30 100,30 C120,30 140,40 135,70 L135,85 L130,80 L130,70 L70,70 L70,80 L65,85 Z" fill="#4E342E" />
              {/* Extra floof on top */}
              <path d="M75,40 Q100,10 125,40" fill="#4E342E" />

              {/* Face Details */}
              <motion.g animate={{ y: [0, -1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                
                {/* Eyebrows */}
                <path d="M80,82 Q90,80 95,82" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M105,82 Q110,80 120,82" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Glasses */}
                <circle cx="85" cy="95" r="10" stroke="#1F2937" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
                <circle cx="115" cy="95" r="10" stroke="#1F2937" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
                <line x1="95" y1="95" x2="105" y2="95" stroke="#1F2937" strokeWidth="2" />

                {/* Eyes (Animated Looking) */}
                <motion.g
                  animate={{ x: [0, -2, 0, 2, 0] }} // Look left (Introvert), then right (Humor)
                  transition={{ 
                    duration: 5, 
                    times: [0, 0.2, 0.4, 0.6, 1],
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  <circle cx="85" cy="95" r="2.5" fill="#1F2937" />
                  <circle cx="115" cy="95" r="2.5" fill="#1F2937" />
                </motion.g>

                {/* Nose */}
                <path d="M100,100 Q102,105 98,108" stroke="#E0B09C" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Mouth (Smile) */}
                <path d="M95,118 Q100,122 105,118" stroke="#C89078" strokeWidth="2" fill="none" strokeLinecap="round" />

              </motion.g>

           </motion.g>
        </svg>

      </div>
    </div>
  );
};

const VisualStepTwo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-end justify-center gap-2 overflow-hidden pb-4">
      {/* Hand 1 */}
      <motion.div
        className="w-10 md:w-12 bg-red-500 rounded-t-full"
        initial={{ height: 40 }}
        animate={{ height: [40, 90, 40] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      >
        <div className="w-full h-full opacity-20 bg-white rounded-t-full" />
      </motion.div>
      {/* Hand 2 */}
      <motion.div
        className="w-10 md:w-12 bg-yellow-400 rounded-t-full"
        initial={{ height: 60 }}
        animate={{ height: [60, 110, 60] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <div className="w-full h-full opacity-20 bg-white rounded-t-full" />
      </motion.div>
      {/* Hand 3 */}
      <motion.div
        className="w-10 md:w-12 bg-green-500 rounded-t-full"
        initial={{ height: 30 }}
        animate={{ height: [30, 80, 30] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
         <div className="w-full h-full opacity-20 bg-white rounded-t-full" />
      </motion.div>
       {/* Hand 4 */}
       <motion.div
        className="w-10 md:w-12 bg-blue-500 rounded-t-full"
        initial={{ height: 50 }}
        animate={{ height: [50, 100, 50] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      >
         <div className="w-full h-full opacity-20 bg-white rounded-t-full" />
      </motion.div>
    </div>
  );
};

const VisualStepThree: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
       {/* Sparkle */}
       <motion.div
         animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
         transition={{ duration: 2, repeat: Infinity }}
         className="absolute top-6 md:top-10 right-6 md:right-10 text-yellow-400 text-2xl md:text-3xl z-10"
       >
         <BsStars />
       </motion.div>

       {/* Ticket Group */}
       <motion.div
         animate={{ rotate: [-5, 5, -5] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="relative scale-90 md:scale-100"
       >
          {/* Back Ticket */}
          <div className="absolute top-0 left-4 w-28 md:w-32 h-16 md:h-20 bg-pink-400 rounded-lg transform rotate-12 border-2 border-white/50 border-dashed" />
          
          {/* Front Ticket */}
          <div className="relative w-28 md:w-32 h-16 md:h-20 bg-[#F43F5E] rounded-lg shadow-lg flex items-center justify-center border-l-4 border-r-4 border-dashed border-black/20">
             {/* Ticket Circles */}
             <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAF8F3] rounded-full" />
             <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAF8F3] rounded-full" />
             
             <span className="font-display font-bold text-white tracking-wider text-base md:text-lg">INVITE</span>
          </div>
          
          {/* Hand holding it */}
          <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 w-6 md:w-8 h-20 md:h-24 bg-yellow-400 rounded-full border-4 border-[#FAF8F3]" />
       </motion.div>
    </div>
  );
};

export default HowItWorks;