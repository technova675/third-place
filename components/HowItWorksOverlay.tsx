import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle, FiShield, FiUsers, FiHeart } from 'react-icons/fi';

interface HowItWorksOverlayProps {
  onBack: () => void;
}

const faqs = [
  {
    question: "Can I come alone?",
    answer: "Absolutely! 80% of our members join solo. Our hosts are trained to introduce you to the group immediately, so you'll never feel awkward standing in a corner."
  },
  {
    question: "What is the age group?",
    answer: "We curate events based on 'Vibe' rather than just age, but generally, our core community falls between 25-40. We do have specific nights for different life stages!"
  },
  {
    question: "Is alcohol mandatory?",
    answer: "Not at all. While many events are at bars, we always ensure high-quality non-alcoholic options are available. We also host plenty of coffee, run club, and clay workshop events."
  },
  {
    question: "How does the vetting work?",
    answer: "We require a linked social profile and a quick personality quiz. This helps us ensure you're a real person and allows us to match you with the right crowd."
  }
];

const HowItWorksOverlay: React.FC<HowItWorksOverlayProps> = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-white text-gray-900 overflow-y-auto no-scrollbar"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-gray-100 transition-all shadow-sm"
      >
        <FiArrowLeft className="text-xl text-black" />
      </button>

      {/* 1. Hero Section */}
      <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-black">
            The Science of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Serendipity</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don't just put people in a room. We curate the energy, the safety, and the conversation.
          </p>
        </motion.div>

        {/* Abstract Background Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl opacity-10 pointer-events-none">
           <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slow">
              <motion.circle cx="250" cy="250" r="200" stroke="black" strokeWidth="1" fill="none" 
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.path d="M250,50 L250,450 M50,250 L450,250" stroke="black" strokeWidth="1" 
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }}
              />
              <circle cx="250" cy="50" r="10" fill="currentColor" className="text-purple-500" />
              <circle cx="450" cy="250" r="10" fill="currentColor" className="text-blue-500" />
              <circle cx="250" cy="450" r="10" fill="currentColor" className="text-purple-500" />
              <circle cx="50" cy="250" r="10" fill="currentColor" className="text-blue-500" />
           </svg>
        </div>
      </div>

      {/* 2. Safety & Trust Bento Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          
          {/* Card 1: Vibe Verified (Large) */}
          <div className="md:col-span-2 md:row-span-2 bg-gray-50 rounded-3xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
               <FiCheckCircle />
             </div>
             <div>
               <h3 className="font-display font-bold text-3xl mb-3">Vibe Verified.</h3>
               <p className="text-gray-600 leading-relaxed">
                 Every member goes through a social verification process. We filter out bots, scammers, and bad vibes so you can relax and be yourself.
               </p>
             </div>
          </div>

          {/* Card 2: Host-Led (Small) */}
          <div className="md:col-span-2 bg-purple-50 rounded-3xl p-8 flex items-center gap-6 border border-purple-100 hover:shadow-lg transition-shadow">
             <div className="w-12 h-12 bg-purple-200 text-purple-700 rounded-full flex flex-shrink-0 items-center justify-center text-2xl">
               <FiUsers />
             </div>
             <div>
               <h3 className="font-display font-bold text-xl mb-1">Host-Led Events</h3>
               <p className="text-gray-600 text-sm">No awkward silences. Our community hosts facilitate intros.</p>
             </div>
          </div>

          {/* Card 3: Gender Balance (Small) */}
          <div className="md:col-span-1 bg-pink-50 rounded-3xl p-6 flex flex-col justify-center border border-pink-100 hover:shadow-lg transition-shadow">
             <div className="w-10 h-10 bg-pink-200 text-pink-600 rounded-full flex items-center justify-center text-xl mb-3">
               <FiHeart />
             </div>
             <h3 className="font-display font-bold text-lg">Gender Balanced</h3>
             <p className="text-gray-500 text-xs mt-2">Strict 50/50 ratios for mixers.</p>
          </div>

          {/* Card 4: No Creep Policy (Wide) */}
          <div className="md:col-span-1 bg-gray-900 text-white rounded-3xl p-6 flex flex-col justify-center border border-gray-800 hover:shadow-lg transition-shadow">
             <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl mb-3">
               <FiShield />
             </div>
             <h3 className="font-display font-bold text-lg">Zero Tolerance</h3>
             <p className="text-gray-400 text-xs mt-2">We prioritize safety above all else.</p>
          </div>

        </div>
      </div>

      {/* 3. FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">COMMON QUESTIONS</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              layout
              onClick={() => toggleFaq(index)}
              className="border-b border-gray-200 overflow-hidden cursor-pointer group"
            >
              <motion.div layout className="py-6 flex justify-between items-center">
                 <h3 className={`font-serif text-xl transition-colors ${openFaq === index ? 'text-black font-semibold' : 'text-gray-500 group-hover:text-black'}`}>
                   {faq.question}
                 </h3>
                 <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : 'rotate-0'}`}>
                   <span className="text-2xl text-gray-400">+</span>
                 </div>
              </motion.div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="pb-8 text-gray-600 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-1 bg-gray-100" />
      <div className="py-8 text-center text-gray-400 text-sm">
        Still curious? Email us at help@thirdplace.com
      </div>

    </motion.div>
  );
};

export default HowItWorksOverlay;