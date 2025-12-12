import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsHeartFill } from 'react-icons/bs';

type ViewState = 'home' | 'about' | 'events' | 'contact' | 'how-it-works' | 'partner' | 'booking' | 'quiz' | 'auth' | 'privacy' | 'terms';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  const footerLinks: { name: string; view?: ViewState }[] = [
    { name: 'About us', view: 'about' },
    { name: 'Contact us', view: 'contact' },
    { name: 'Become a partner', view: 'partner' },
    { name: 'Privacy policy', view: 'privacy' },
    { name: 'Terms & conditions', view: 'terms' },
  ];

  return (
    <footer className="w-full bg-black border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        {/* 1. Top Row: Social & Branding */}
        <div className="flex flex-col items-center gap-6 mb-10 w-full">
          {/* Muted Logo */}
          <h3 className="font-display font-bold text-sm tracking-[0.2em] text-white/30 uppercase">
            Third Place
          </h3>

         

          <div className="flex items-center gap-8">
            <SocialIcon
              href="https://www.instagram.com/yourthird_place/#"
              label="Instagram"
            >
              <FaInstagram className="text-2xl md:text-3xl" {...({ className: "text-2xl md:text-3xl" } as any)} />
            </SocialIcon>

            <SocialIcon
              href="https://x.com/yourthird_place"
              label="X (Twitter)"
            >
              <FaXTwitter className="text-2xl md:text-3xl" {...({ className: "text-2xl md:text-3xl" } as any)} />
            </SocialIcon>
          </div>

        </div>

        {/* 2. Middle Row: Navigation Links */}
        <div className="w-full border-t border-gray-800 py-10">
          <nav className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
            {footerLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => item.view ? onNavigate(item.view) : null}
                className="font-sans text-sm text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>

        {/* 3. Bottom Row: Copyright & Micro-interaction */}
        <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="font-sans text-xs text-gray-600">
            © 2025 Commygnus Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="hidden md:flex items-center gap-2 font-sans text-xs text-gray-600 ml-4 border-l border-gray-800 pl-4">
            <span>Made in Bangalore</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <BsHeartFill className="text-red-600 text-[10px]" {...({ className: "text-red-600 text-[10px]" } as any)} />
            </motion.div>
          </div>
        </div>

      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => {
  return (
    <motion.a 
      href={href}
      target="_blank"                // Always open in new tab
      rel="noopener noreferrer"      // Security
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="text-white hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
      aria-label={label}
    >
      {children}
    </motion.a>
  );
};


export default Footer;