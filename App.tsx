import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import PickYourVibe from './components/PickYourVibe';
import HowItWorks from './components/HowItWorks';
import FindYourPeople from './components/FindYourPeople';
import JoinTheVibe from './components/JoinTheVibe';
import Footer from './components/Footer';
import AboutUsOverlay from './components/AboutUsOverlay';
import UpcomingEventsOverlay from './components/UpcomingEventsOverlay';
import ContactOverlay from './components/ContactOverlay';
import HowItWorksOverlay from './components/HowItWorksOverlay';
import BecomePartnerOverlay from './components/BecomePartnerOverlay';
import EventBookingOverlay from './components/EventBookingOverlay';
import OnboardingQuizOverlay from './components/OnboardingQuizOverlay';
import AuthOverlay from './components/AuthOverlay';
import LegalOverlay from './components/LegalOverlay';

// Define the valid view types
export type ViewState = 'home' | 'about' | 'events' | 'contact' | 'how-it-works' | 'partner' | 'booking' | 'quiz' | 'auth' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <main className="min-h-screen bg-black text-off-white selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* 
        We only render Navbar/Footer if we are on the 'home' view 
        OR if we want them visible behind overlays. 
        Usually, overlays cover everything, but we need the Navbar 
        to trigger the changes initially. 
      */}
      <Navbar onNavigate={setCurrentView} />

      {/* Main Landing Page Content */}
      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <div key="landing-page">
            <Hero />
            <CTASection onSignUp={() => setCurrentView('auth')} />
            <PickYourVibe onReserve={() => setCurrentView('booking')} />
            <HowItWorks onStart={() => setCurrentView('quiz')} />
            <FindYourPeople />
            <JoinTheVibe />
            <Footer onNavigate={setCurrentView} />
          </div>
        )}
      </AnimatePresence>

      {/* Full Screen Overlays */}
      <AnimatePresence>
        {currentView === 'about' && (
          <AboutUsOverlay key="about" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'events' && (
          <UpcomingEventsOverlay key="events" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'contact' && (
          <ContactOverlay key="contact" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'how-it-works' && (
          <HowItWorksOverlay key="how-it-works" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'partner' && (
          <BecomePartnerOverlay key="partner" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'booking' && (
          <EventBookingOverlay key="booking" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'quiz' && (
          <OnboardingQuizOverlay key="quiz" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'auth' && (
          <AuthOverlay key="auth" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'privacy' && (
          <LegalOverlay key="privacy" type="privacy" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'terms' && (
          <LegalOverlay key="terms" type="terms" onBack={() => setCurrentView('home')} />
        )}
      </AnimatePresence>
      
    </main>
  );
};

export default App;