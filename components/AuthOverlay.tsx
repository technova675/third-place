import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc'; // Assuming react-icons/fc is available, otherwise use text/svg
import { FaApple } from 'react-icons/fa';

interface AuthOverlayProps {
  onBack: () => void;
}

type AuthMode = 'login' | 'signup';

const AuthOverlay: React.FC<AuthOverlayProps> = ({ onBack }) => {
  const [mode, setMode] = useState<AuthMode>('signup');
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => setMode(mode === 'login' ? 'signup' : 'login');

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-[#050505] text-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all shadow-lg text-white"
      >
        <FiArrowLeft className="text-xl" />
      </button>

      {/* Left Column (Desktop Only) - The Vibe */}
      <div className="hidden md:flex w-1/2 relative bg-gray-900 items-end overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
            alt="Crowd Vibes" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-16 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display font-bold text-6xl leading-[1.1] mb-6"
          >
            Your third place <br/>
            <span className="text-gray-500">is waiting.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <span className="text-[#FFD700]">✨</span>
            <span className="text-sm font-sans font-medium">Join 12,000+ members in Bangalore</span>
          </motion.div>
        </div>
      </div>

      {/* Right Column - The Form */}
      <div className="w-full md:w-1/2 bg-[#111111] flex flex-col items-center justify-center p-8 md:p-20 relative">
        <div className="w-full max-w-md">
          
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-500 text-sm">
              {mode === 'login' ? "Don't have an account?" : "Already a member?"}{" "}
              <button onClick={toggleMode} className="text-white underline hover:text-[#25D366] transition-colors">
                {mode === 'login' ? "Join the vibe" : "Log in"}
              </button>
            </p>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 w-full bg-[#1A1A1A] hover:bg-[#252525] text-white py-4 rounded-xl border border-white/5 transition-all font-medium">
              <FcGoogle className="text-xl" /> 
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full bg-[#1A1A1A] hover:bg-[#252525] text-white py-4 rounded-xl border border-white/5 transition-all font-medium">
              <FaApple className="text-xl" /> 
              Continue with Apple
            </button>
          </div>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <span className="relative bg-[#111111] px-4 text-xs text-gray-500 uppercase tracking-widest">
              Or continue with email
            </span>
          </div>

          {/* Form Fields */}
          <form className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black font-display font-bold text-lg py-4 rounded-full mt-8 hover:bg-[#25D366] transition-colors flex items-center justify-center gap-2"
            >
              {mode === 'login' ? 'SIGN IN ->' : 'GET ACCESS ->'}
            </motion.button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 mt-8 leading-relaxed">
            By {mode === 'login' ? 'logging in' : 'joining'}, you agree to our<br/>
            <span className="underline cursor-pointer hover:text-gray-400">Terms of Service</span> & <span className="underline cursor-pointer hover:text-gray-400">Privacy Policy</span>.
          </p>

        </div>
      </div>
    </motion.div>
  );
};

export default AuthOverlay;