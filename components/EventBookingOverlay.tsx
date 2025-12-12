import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiClock, FiCalendar, FiMinus, FiPlus, FiCheck } from 'react-icons/fi';

interface EventBookingOverlayProps {
  onBack: () => void;
}

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
}

const tickets: TicketType[] = [
  { id: 'early', name: 'Early Bird', price: 999, description: 'Entry + 1 Drink', available: 5 },
  { id: 'standard', name: 'Standard Access', price: 1499, description: 'Entry + 2 Drinks + Snack', available: 20 },
  { id: 'duo', name: 'Duo Pass', price: 2500, description: 'Entry for 2 people', available: 10 },
];

const EventBookingOverlay: React.FC<EventBookingOverlayProps> = ({ onBack }) => {
  const [selectedTicket, setSelectedTicket] = useState<string>(tickets[1].id);
  const [quantity, setQuantity] = useState<number>(1);

  const currentTicket = tickets.find(t => t.id === selectedTicket);
  const total = currentTicket ? currentTicket.price * quantity : 0;

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-white text-black flex flex-col md:flex-row overflow-hidden"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-black hover:text-white transition-all shadow-lg"
      >
        <FiArrowLeft className="text-xl" />
      </button>

      {/* Left: Event Details (Visual) */}
      <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full relative bg-gray-100 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" 
          alt="Event Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
           <span className="inline-block px-3 py-1 bg-[#25D366] text-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full mb-2 md:mb-4">
             Selling Fast
           </span>
           <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mb-2 md:mb-4 leading-tight">
             The Listening Room: <br/>Volume 4
           </h1>
           <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-base font-sans font-medium text-white/90">
             <div className="flex items-center gap-2"><FiCalendar /> Fri, Oct 24</div>
             <div className="flex items-center gap-2"><FiClock /> 7:00 PM</div>
             <div className="flex items-center gap-2"><FiMapPin /> The Loft, Indiranagar</div>
           </div>
        </div>
      </div>

      {/* Right: Booking Form */}
      <div className="w-full md:w-1/2 h-full bg-white overflow-y-auto relative flex flex-col grow">
        <div className="flex-1 p-6 md:p-16 pb-32">
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 md:mb-8">Select Tickets</h2>
          
          <div className="space-y-4 mb-8 md:mb-10">
            {tickets.map((ticket) => (
              <motion.div
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket.id)}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 md:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex justify-between items-center group ${
                  selectedTicket === ticket.id 
                    ? 'border-black bg-gray-50' 
                    : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <div>
                  <h3 className="font-bold text-base md:text-lg">{ticket.name}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{ticket.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-lg md:text-xl">₹{ticket.price}</div>
                  {ticket.available < 10 && (
                    <div className="text-[10px] md:text-xs text-red-500 font-medium mt-1">Only {ticket.available} left</div>
                  )}
                </div>

                {/* Selected Checkmark */}
                {selectedTicket === ticket.id && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 w-5 h-5 md:w-6 md:h-6 bg-black text-white rounded-full flex items-center justify-center shadow-md">
                    <FiCheck size={12} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quantity Section */}
          <div className="flex items-center justify-between mb-8 md:mb-12 p-4 md:p-6 bg-gray-50 rounded-2xl">
            <span className="font-bold text-base md:text-lg">Quantity</span>
            <div className="flex items-center gap-4 md:gap-6">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <FiMinus />
              </button>
              <span className="font-display text-xl md:text-2xl font-bold w-6 md:w-8 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <FiPlus />
              </button>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 md:p-6 lg:px-16 lg:py-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-10">
           <div className="flex items-center justify-between">
             <div>
               <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-1">Total Amount</p>
               <motion.div 
                 key={total}
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="font-display font-bold text-2xl md:text-3xl"
               >
                 ₹{total}
               </motion.div>
             </div>
             <button className="bg-black text-white px-6 md:px-12 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-black transition-colors shadow-lg text-sm md:text-base">
               Checkout
             </button>
           </div>
        </div>
      </div>

    </motion.div>
  );
};

export default EventBookingOverlay;