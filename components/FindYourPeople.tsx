import React from 'react';
import { motion } from 'framer-motion';

type ImageItem = {
  id: number;
  src: string;
  alt: string;
  tag?: string; // Optional floating tag
  heightClass?: string; // Hint for aspect ratio visual variety if needed, mostly handled by actual image dim
};

const galleryImages: ImageItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1670899460364-ebc917bac09a?q=80&w=735&auto=format&fit=crop&q=80",
    alt: "Group dinner party",
    tag: "📍 Rooftop Soiree"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80",
    alt: "Friends laughing at a bar",
    tag: "🥂 Friday Night"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
    alt: "Group selfie outdoors"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1665422265873-ee82b042f337?auto=format&fit=crop&q=80",
    alt: "Cheers with cocktails",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80",
    alt: "People talking in dim light",
    tag: "✨ Deep Convos"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
    alt: "Friends walking on street",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1602803056945-ebac8ae8fd00?auto=format&fit=crop&q=80",
    alt: "Laughing at cafe",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1526749464606-83091e34a261?auto=format&fit=crop&q=80",
    alt: "Listening room vibe",
    tag: "🎶 Live Music"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    alt: "Party atmosphere"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80",
    alt: "Picnic gathering"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
    alt: "Business casual networking",
    tag: "🤝 Connections"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80",
    alt: "Cozy winter gathering"
  }
];

const FindYourPeople: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050505] text-white pt-20 md:pt-24 pb-24 md:pb-32 px-4 md:px-8 z-10">
      
      {/* 1. Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-7xl mb-4 md:mb-6 tracking-tight"
        >
          FIND YOUR <span className="italic font-light text-gray-200">PEOPLE</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Say "yes" and discover the people, places, and moments you were never supposed to miss.
        </motion.p>
      </div>

      {/* 2. Masonry Gallery */}
      <div className="w-full max-w-[1920px] mx-auto">
        {/* 
          Using Tailwind's column utilities for CSS-native masonry.
          columns-2 (mobile/tablet), columns-3 (md), columns-4 (lg)
        */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 group/gallery">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group/item transition-all duration-500 hover:z-20"
            >
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/item:scale-110 group-hover/item:brightness-110"
              />
              
              {/* Overlay Gradient (Subtle) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

              {/* Floating Tag (Conditional) */}
              {img.tag && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    y: {
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    },
                    opacity: { duration: 0.5, delay: 0.5 }
                  }}
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-black text-[10px] md:text-sm font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg z-10"
                >
                  {img.tag}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional: Bottom fade for smooth transition if footer is black */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

    </section>
  );
};

export default FindYourPeople;