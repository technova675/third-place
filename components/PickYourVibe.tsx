import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface EventCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface PickYourVibeProps {
  onReserve?: () => void;
}

const events: EventCardProps[] = [
  {
    id: 1,
    title: "Pitch and Pair",
    category: "Meet through friends",
    image: "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1762764877%2Foh88jzhk29zdnt32lcpb.png?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "The Listening Room",
    category: "Music & Stories",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Secret, Supper & Stories",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Sunset & Walk by the lake",
    category: "Outdoors",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Secret Picnic Meet-Cute",
    category: "Social",
    image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?auto=format&fit=crop&q=80",
  }
];

const PickYourVibe: React.FC<PickYourVibeProps> = ({ onReserve }) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">
      
      {/* 1. Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-6xl text-deep-black mb-4 md:mb-6 tracking-tight"
        >
          PICK YOUR <span className="italic font-light">VIBE</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-gray-600 text-base md:text-xl max-w-xl mx-auto leading-relaxed"
        >
          From cozy dinners to dance-all-night parties — it’s all here.
        </motion.p>
      </div>

      {/* 2. The Event Grid */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group"
            >
              {/* Image Container */}
              <div className="absolute inset-0 h-full w-full overflow-hidden bg-gray-200">
                 <motion.img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient Overlay for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              </div>

              {/* Card Content */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 group-hover:-translate-y-2"
              >
                <span className="inline-block px-3 py-1 mb-3 text-[10px] md:text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                  {event.category}
                </span>
                <h3 className="font-serif text-2xl font-bold leading-none shadow-black drop-shadow-lg">
                  {event.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Bottom CTA Button */}
      <div className="flex justify-center mt-12 lg:mt-16">
        <motion.button 
          onClick={onReserve}
          whileHover={{ scale: 1.05, backgroundColor: '#1F2937' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 md:px-10 md:py-5 bg-black text-white font-sans font-bold tracking-wide rounded-full text-sm md:text-base shadow-xl transition-all"
        >
          RESERVE YOUR SPOT
        </motion.button>
      </div>

    </section>
  );
};

export default PickYourVibe;