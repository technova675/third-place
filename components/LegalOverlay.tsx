import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

interface LegalOverlayProps {
  onBack: () => void;
  type: 'privacy' | 'terms';
}

const LegalOverlay: React.FC<LegalOverlayProps> = ({ onBack, type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'PRIVACY POLICY' : 'TERMS OF SERVICE';
  const updatedDate = 'October 24, 2025';

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-[#0A0A0A] text-[#E5E5E5] flex flex-col"
    >
      {/* Sticky Header */}
      <div className="flex-none w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-4 z-50 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-black transition-all border border-white/10"
            >
              <FiArrowLeft className="text-lg" />
            </button>
            <div>
               <h1 className="font-display font-bold text-lg md:text-xl tracking-wider uppercase">{title}</h1>
               <p className="text-[10px] md:text-xs text-gray-500 font-sans">Last Updated: {updatedDate}</p>
            </div>
         </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-20 no-scrollbar">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-400 border-l-2 border-[#25D366] pl-6 italic">
             {isPrivacy 
               ? "Your privacy is sacred. We treat your digital footprint with the same respect we expect for our own."
               : "By entering The Third Place, you agree to uphold the vibe, respect the community, and be a real human being."}
          </div>

          {/* Section 1 */}
          <section>
             <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">1. {isPrivacy ? "Data Collection & Usage" : "Membership & Vetting"}</h2>
             <p className="font-sans text-base md:text-lg leading-loose text-gray-400">
               {isPrivacy 
                 ? "We collect only what is necessary to curate your experience: your name, email, and vibe preferences. We do not sell your data to third-party advertisers. Your matches are calculated locally where possible to minimize data exposure. When you attend an event, we may share your first name with the host for guest list purposes."
                 : "Membership is a privilege, not a right. All members undergo a vetting process to ensure community safety. We reserve the right to revoke access, without refund, for any violation of our Vibe Code, including but not limited to: harassment, hate speech, or consistently flaking on RSVPs without notice."}
             </p>
          </section>

          {/* Section 2 */}
          <section>
             <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">2. {isPrivacy ? "Location Services" : "Event Conduct"}</h2>
             <p className="font-sans text-base md:text-lg leading-loose text-gray-400">
               {isPrivacy
                 ? "To recommend events near you, we request access to your general location. This data is not stored permanently on our servers and is used solely for the purpose of 'Near Me' filtering. You may revoke this access at any time in your device settings."
                 : "Our events are designed for analog connection. We encourage a 'phones down' policy during active sessions. Any behavior that compromises the safety or comfort of other guests will result in immediate removal from the event and a permanent ban from the platform."}
             </p>
          </section>

          {/* Section 3 */}
          <section>
             <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">3. {isPrivacy ? "Cookies & Tracking" : "Liability & Safety"}</h2>
             <p className="font-sans text-base md:text-lg leading-loose text-gray-400">
               {isPrivacy
                 ? "We use minimal cookies strictly for authentication and session management. We do not use cross-site tracking pixels. Our analytics are anonymized to help us improve the app performance without compromising your individual identity."
                 : "While we vet our venues and members, Third Place is not liable for personal interactions that occur during events. We encourage all members to exercise common sense and responsible behavior. Alcohol consumption is at your own risk; please drink responsibly."}
             </p>
          </section>

          <div className="pt-12 border-t border-white/10 text-center">
             <p className="text-gray-500 text-sm">Questions? Contact legal@thirdplace.com</p>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default LegalOverlay;