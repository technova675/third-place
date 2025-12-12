import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiCalendar } from 'react-icons/fi';

interface UpcomingEventsOverlayProps {
  onBack: () => void;
}

const categories = ['All', 'Music', 'Dining', 'Outdoors', 'Workshops'];

const eventsData = [
  { id: 1, title: 'Secret Jazz Loft', category: 'Music', date: 'OCT 24', location: 'Downtown Loft', price: '$25', img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Rooftop Sunset Yoga', category: 'Outdoors', date: 'OCT 26', location: 'Skyline Terrace', price: '$20', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Clay & Wine Workshop', category: 'Workshops', date: 'NOV 02', location: 'Studio 4B', price: '$45', img: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Midnight Supper Club', category: 'Dining', date: 'NOV 05', location: 'Undisclosed', price: '$80', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Indie Folk Night', category: 'Music', date: 'NOV 12', location: 'The Basement', price: '$15', img: 'https://img.freepik.com/premium-photo/carport-band-fantasies-about-becoming-wildly-successful-music-business_822882-432780.jpg' },
  { id: 6, title: 'Urban Hiking Club', category: 'Outdoors', date: 'NOV 15', location: 'Central Park', price: 'Free', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80' },
];

const UpcomingEventsOverlay: React.FC<UpcomingEventsOverlayProps> = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEvents = activeFilter === 'All' 
    ? eventsData 
    : eventsData.filter(e => e.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-[#050505] text-white overflow-y-auto no-scrollbar"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all shadow-lg text-white"
      >
        <FiArrowLeft className="text-xl" />
      </button>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-display font-bold text-4xl md:text-7xl uppercase tracking-tighter mb-2"
            >
              Calendar
            </motion.h1>
            <p className="text-gray-500 font-sans text-sm md:text-base">Curated happenings for the next 30 days.</p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-all ${
                  activeFilter === cat 
                    ? 'bg-[#25D366] border-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)]' 
                    : 'border-white/20 text-gray-400 hover:text-white hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredEvents.map((event) => (
              <motion.div
                layout
                key={event.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#121212] rounded-2xl overflow-hidden hover:ring-1 hover:ring-white/30 transition-all cursor-pointer"
              >
                {/* Image Section */}
                <div className="h-56 md:h-64 w-full relative overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 font-display font-bold text-center leading-tight rounded shadow-lg">
                    <span className="text-xs block text-gray-500 uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-lg">{event.date.split(' ')[1]}</span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                     <span className="text-xs font-bold uppercase tracking-wider text-white/80 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                       {event.category}
                     </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 relative">
                  <h3 className="font-serif text-2xl text-white font-bold mb-2 group-hover:text-[#25D366] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <FiMapPin /> {event.location}
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full" />
                    <div>{event.price}</div>
                  </div>

                  {/* Hover Action (Always visible on mobile, or handle via tap) */}
                  <div className="md:h-10 overflow-hidden relative">
                    <div className="hidden md:block absolute top-0 left-0 w-full transform group-hover:-translate-y-10 transition-transform duration-300">
                       <p className="text-gray-500 text-sm h-10 flex items-center">Tap for details</p>
                       <div className="h-10 flex items-center">
                          <button className="bg-white text-black font-bold uppercase text-xs px-6 py-2 rounded-full hover:bg-[#25D366] transition-colors w-full">
                            Book Seat
                          </button>
                       </div>
                    </div>
                    {/* Mobile Button always visible */}
                    <div className="md:hidden mt-2">
                       <button className="bg-white text-black font-bold uppercase text-xs px-6 py-3 rounded-full w-full">
                          Book Seat
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
           <div className="py-20 text-center text-gray-500 font-sans">
             No events found for this vibe. Try another?
           </div>
        )}

      </div>
    </motion.div>
  );
};

export default UpcomingEventsOverlay;