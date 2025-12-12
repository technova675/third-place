import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTrendingUp, FiStar } from 'react-icons/fi';
import { FaDollarSign } from 'react-icons/fa';

interface BecomePartnerOverlayProps {
  onBack: () => void;
}

const BecomePartnerOverlay: React.FC<BecomePartnerOverlayProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-[#111111] text-white overflow-y-auto no-scrollbar"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all shadow-lg text-white"
      >
        <FiArrowLeft className="text-xl" />
      </button>

      {/* 1. Header Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
            alt="Busy Bar Scene" 
            className="w-full h-full object-cover opacity-40 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6"
          >
            Fill Your Space With <br/> 
            <span className="text-[#D4AF37]">The Right Crowd.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif italic text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            We bring 50-100 curated guests to your venue on your slowest nights. No marketing spend required.
          </motion.p>
        </div>
      </div>

      {/* 2. Why Partner? */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FiTrendingUp />
            </div>
            <h3 className="font-display font-bold text-xl uppercase mb-3">Revenue Boost</h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Transform your slow Tuesdays and Wednesdays into your busiest nights with high-spend groups.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-2xl mb-6 group-hover:scale-110 transition-transform relative">
              <FaDollarSign />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-0.5 bg-red-500 rotate-45 transform" />
              </div>
            </div>
            <h3 className="font-display font-bold text-xl uppercase mb-3">Zero Marketing Cost</h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              We handle the invites, the promotion, and the curation. You just pour the drinks.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FiStar />
            </div>
            <h3 className="font-display font-bold text-xl uppercase mb-3">High-Quality Guests</h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Our community is vetted. No rowdy crowds, just respectful professionals looking to connect.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Application Form */}
      <div className="max-w-3xl mx-auto px-6 pb-32">
        <div className="border border-[#D4AF37]/30 bg-[#161616] p-8 md:p-12 rounded-sm relative">
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

          <h3 className="font-display text-2xl font-bold text-center mb-10 text-white tracking-widest">
            PARTNER APPLICATION
          </h3>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-2">
                 <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Venue / Brand Name</label>
                 <input type="text" className="bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-serif" placeholder="e.g. The Jazz Corner" />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Location</label>
                 <input type="text" className="bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-serif" placeholder="City, Neighborhood" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-2">
                 <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Venue Type</label>
                 <select className="bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-serif appearance-none">
                   <option className="bg-[#111]">Bar / Speakeasy</option>
                   <option className="bg-[#111]">Cafe</option>
                   <option className="bg-[#111]">Restaurant</option>
                   <option className="bg-[#111]">Studio / Event Space</option>
                   <option className="bg-[#111]">Other</option>
                 </select>
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Capacity</label>
                 <input type="number" className="bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-serif" placeholder="Approx number" />
               </div>
            </div>

            <div className="flex flex-col gap-2">
                 <label className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Contact Person</label>
                 <input type="text" className="bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-serif" placeholder="Name & Phone" />
            </div>

            <div className="pt-8">
              <button className="w-full border border-[#D4AF37] text-[#D4AF37] py-4 font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                Apply as Partner
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* 4. Footer Trust */}
      <div className="border-t border-white/5 py-12 text-center">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">Trusted by</p>
        <div className="flex justify-center gap-10 opacity-40 grayscale">
           {/* Placeholder Text Logos for venues */}
           <span className="font-display font-bold text-xl">SOCIAL.</span>
           <span className="font-serif font-bold text-xl italic">The Reservoire</span>
           <span className="font-sans font-bold text-xl tracking-tighter">TOIT</span>
           <span className="font-display font-bold text-xl">SLY GRANNY</span>
        </div>
      </div>

    </motion.div>
  );
};

export default BecomePartnerOverlay;