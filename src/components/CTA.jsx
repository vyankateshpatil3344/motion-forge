import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = ({ onBookDemo }) => {
  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large orange gradient banner card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange to-[#cc5600] p-8 sm:p-12 md:p-20 text-center shadow-2xl border border-brand-orange/30 group"
        >
          {/* Abstract background grids/shapes */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span>Limited seats for next batch</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
            READY TO START YOUR <br />CREATIVE JOURNEY?
          </h2>

          {/* Description */}
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Book a 1-on-1 session with our industry mentors. Discuss portfolio strategies, career opportunities, and pick the perfect curriculum for your goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-100 text-brand-orange font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Book Free Demo Class
              <ArrowRight className="w-5 h-5 text-brand-orange" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
