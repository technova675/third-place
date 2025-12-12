import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
// Import ViewState type from App if creating a separate types file, 
// but here we can just assume string or redefine simpler type.
type ViewState = 'home' | 'about' | 'events' | 'contact' | 'how-it-works' | 'partner' | 'booking' | 'quiz' | 'auth' | 'privacy' | 'terms';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const navLinks: { name: string; view?: ViewState; href?: string }[] = [
    { name: 'About Us', view: 'about' },
    { name: 'Upcoming events', view: 'events' },
    { name: 'Contact us', view: 'contact' },
    { name: 'How It Works?', view: 'how-it-works' },
    { name: 'Become a partner', view: 'partner' },
    { name: 'Login / Sign up', view: 'auth' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glassmorphic Container */}
      <div className="w-full h-20 px-6 md:px-12 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5">

        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display font-bold text-2xl tracking-tighter-custom uppercase text-white hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/Logo_001-01.png"
              alt="Third Place Logo"
              className="h- w-auto object-contain "
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => link.view ? handleNavClick(link.view) : null}
              className={`text-sm font-sans font-medium transition-all duration-300 relative group cursor-pointer ${link.name === 'Login / Sign up' ? 'text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black' : 'text-white/80 hover:text-white'
                }`}
            >
              {link.name}
              {link.name !== 'Login / Sign up' && (
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => link.view ? handleNavClick(link.view) : null}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className={`font-display text-3xl font-bold uppercase tracking-tight ${link.name === 'Login / Sign up' ? 'text-[#25D366]' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;