import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

interface OnboardingQuizOverlayProps {
  onBack: () => void;
}

const OnboardingQuizOverlay: React.FC<OnboardingQuizOverlayProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    vibe: '',
    socialBattery: 50,
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  const isNextDisabled = () => {
    if (step === 1 && formData.name.length < 2) return true;
    if (step === 2 && !formData.vibe) return true;
    return false;
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-gradient-to-br from-[#FFF5F5] via-[#FFF0F5] to-[#F0F8FF] text-black overflow-hidden flex flex-col"
    >
      {/* Top Bar */}
      <div className="relative px-4 py-4 md:px-6 md:py-6 flex items-center justify-between z-10">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors"
        >
          <FiArrowLeft className="text-xl" />
        </button>
        
        {/* Progress Bar Container */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-black rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-y-auto no-scrollbar">
        
        {/* Background blobs for pastel vibe */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <AnimatePresence mode="wait">
          
          {/* STEP 1: NAME */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-xl text-center z-10"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">First things first.</h2>
              <p className="text-gray-500 mb-8 md:mb-12 text-base md:text-lg">What should we call you?</p>
              <input
                type="text"
                autoFocus
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Type your name..."
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black py-2 md:py-4 text-center text-3xl md:text-5xl font-display font-bold outline-none placeholder:text-gray-200 transition-colors"
              />
            </motion.div>
          )}

          {/* STEP 2: VIBE CHECK */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-4xl text-center z-10"
            >
              <h2 className="font-serif text-2xl md:text-5xl font-bold mb-4">Ideally, your Friday night is...</h2>
              <p className="text-gray-500 mb-8 md:mb-12 text-base md:text-lg">Pick the one that speaks to your soul.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { id: 'party', label: 'Dancing till 4AM', emoji: '🪩', color: 'bg-pink-50 border-pink-100 hover:border-pink-300' },
                  { id: 'chill', label: 'Wine & Deep Talk', emoji: '🍷', color: 'bg-red-50 border-red-100 hover:border-red-300' },
                  { id: 'games', label: 'Board Games & Snacks', emoji: '🎲', color: 'bg-yellow-50 border-yellow-100 hover:border-yellow-300' },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => setFormData({ ...formData, vibe: option.id })}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-6 md:p-8 rounded-3xl border-2 flex flex-col items-center justify-center gap-4 transition-all ${
                      formData.vibe === option.id ? 'ring-2 ring-black ring-offset-2 border-transparent shadow-lg' : option.color
                    }`}
                  >
                    <span className="text-5xl md:text-6xl">{option.emoji}</span>
                    <span className="font-bold text-base md:text-lg">{option.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: SOCIAL BATTERY */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-2xl text-center z-10"
            >
              <h2 className="font-serif text-2xl md:text-5xl font-bold mb-4">How's your social battery?</h2>
              <p className="text-gray-500 mb-12 md:mb-16 text-base md:text-lg">Help us match the energy.</p>
              
              <div className="px-4 md:px-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.socialBattery}
                  onChange={(e) => setFormData({ ...formData, socialBattery: parseInt(e.target.value) })}
                  className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between mt-6 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
                  <span>Introvert</span>
                  <span>Ambivert</span>
                  <span>Extrovert</span>
                </div>
                <div className="mt-8 md:mt-12 text-lg md:text-xl font-serif italic h-8">
                  {formData.socialBattery < 30 && "I recharge alone."}
                  {formData.socialBattery >= 30 && formData.socialBattery <= 70 && "It depends on the vibe."}
                  {formData.socialBattery > 70 && "I recharge with people!"}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-xl text-center z-10"
            >
              <div className="mb-8 flex justify-center">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative w-24 h-24 md:w-32 md:h-32"
                >
                   <BsStars className="text-yellow-400 text-5xl md:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   <div className="absolute inset-0 border-4 border-dashed border-black/10 rounded-full" />
                </motion.div>
              </div>

              <h2 className="font-display text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-black">YOU'RE IN!</h2>
              <p className="font-serif text-xl md:text-2xl text-gray-600 mb-8">
                Welcome, {formData.name}.<br/>
                We found <span className="text-black font-bold border-b-2 border-yellow-300">12 matches</span> near you.
              </p>

              <button className="bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-black transition-colors shadow-xl text-base md:text-lg">
                See Your Matches
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="p-6 md:p-10 flex justify-between items-center z-20">
          <button 
            onClick={handleBack}
            className="text-gray-500 font-bold uppercase tracking-wider text-sm hover:text-black transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all ${
              isNextDisabled() 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-black text-white hover:scale-110 shadow-lg'
            }`}
          >
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      )}

    </motion.div>
  );
};

export default OnboardingQuizOverlay;