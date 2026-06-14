import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Portfolio from './components/Portfolio';
import SoftwareTools from './components/SoftwareTools';
import Placements from './components/Placements';
import Testimonials from './components/Testimonials';
import Transformation from './components/Transformation';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-brand-orange selection:text-white">
      {/* Structural layout wrapper */}
      <Navbar onBookDemo={handleBookDemo} />
      
      <main>
        <Hero onBookDemo={handleBookDemo} />
        <Stats />
        <Courses onBookDemo={handleBookDemo} />
        <Portfolio />
        <SoftwareTools />
        <Placements />
        <Testimonials />
        <Transformation />
        <CTA onBookDemo={handleBookDemo} />
      </main>

      <Footer onBookDemo={handleBookDemo} />

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating CTA WhatsApp & Scroll-to-Top controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Icon with pulse glow */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          title="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping group-hover:animate-none" />
          <Phone className="w-6 h-6 fill-current" />
        </motion.a>

        {/* Scroll To Top Indicator */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 shadow-lg hover:border-brand-orange/30 hover:text-brand-orange transition-all active:scale-95"
              title="Scroll to Top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
