import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

interface AboutUsOverlayProps {
  onBack: () => void;
}

const AboutUsOverlay: React.FC<AboutUsOverlayProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-[#FAF9F6] text-[#121212] overflow-y-auto no-scrollbar"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white transition-all shadow-sm"
      >
        <FiArrowLeft className="text-xl" />
      </button>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        
        {/* Header - Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 md:mb-32 text-center md:text-left"
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] mb-6 md:mb-8">
            We Are The<br />
            <span className="text-gray-400">Third</span> Place.
          </h1>
        </motion.div>

        {/* The Story & Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32">
          
          {/* Left: Text */}
          <div className="font-serif text-lg md:text-2xl leading-relaxed text-gray-800 space-y-6 md:space-y-8">
            <p>
              Your first place is home. Your second is work. 
              <span className="italic font-bold"> The Third Place</span> is where you actually live.
            </p>
            <p className="text-base md:text-lg font-sans text-gray-600">
              In a world of digital noise, infinite scrolling, and shallow likes, we are building spaces for analog connection. We believe that spontaneity is a lost art, and that the best conversations happen when you least expect them.
            </p>
            <p className="text-base md:text-lg font-sans text-gray-600">
              We curate experiences, not just events. We bring strangers together and turn them into communities.
            </p>
          </div>

          {/* Right: Polaroid Collage */}
          <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center mt-8 md:mt-0">
            {/* Image 1 */}
            <motion.div 
              className="absolute w-40 md:w-60 bg-white p-3 shadow-2xl rotate-[-6deg] z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all" alt="Vibe 1" />
            </motion.div>
            
            {/* Image 2 */}
            <motion.div 
              className="absolute w-40 md:w-60 bg-white p-3 shadow-2xl rotate-[3deg] z-20 translate-x-8 md:translate-x-12 translate-y-6 md:translate-y-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all" alt="Vibe 2" />
            </motion.div>
             {/* Image 3 */}
             <motion.div 
              className="absolute w-40 md:w-60 bg-white p-3 shadow-2xl rotate-[-12deg] z-0 -translate-x-12 md:-translate-x-16 -translate-y-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all" alt="Vibe 3" />
            </motion.div>
          </div>
        </div>

        {/* The Team */}
        <div className="mb-20 md:mb-24">
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8 md:mb-10 tracking-tight text-center md:text-left">Meet the Curators</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
            {[
              { name: "Alex R.", role: "Founder", vibe: "Jazz Nights", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" },
              { name: "Sarah K.", role: "Events Lead", vibe: "Rooftop Sunsets", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
              { name: "Marcus J.", role: "Community", vibe: "Run Clubs", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" },
              { name: "Priya D.", role: "Partnerships", vibe: "Secret Dinners", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl md:rounded-full overflow-hidden mb-4 border border-black/5 relative bg-gray-100">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h4 className="font-serif text-lg md:text-xl font-bold">{member.name}</h4>
                <p className="text-xs md:text-sm font-sans text-gray-500 uppercase tracking-wider">{member.role}</p>
                <p className="text-[10px] md:text-xs font-sans text-gray-400 mt-1">Fave Vibe: {member.vibe}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Signature */}
        <div className="border-t border-black/10 pt-8 flex justify-between items-end">
           <span className="font-display font-bold text-lg tracking-widest">THIRD PLACE</span>
           <span className="font-serif italic text-gray-500">Est. 2025</span>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutUsOverlay;