import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

const Transformation = () => {
  const beforePoints = [
    "No Portfolio to show clients",
    "No Industry-relevant skills",
    "Lack of confidence in tools",
    "Stuck in career uncertainty"
  ];

  const afterPoints = [
    "Strong, high-caliber Portfolio",
    "Hands-on with live client briefs",
    "Freelancing & Business skills",
    "100% Placement & Job ready"
  ];

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-[#ff8c3b]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            The Journey
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight">
            STUDENT <span className="text-gradient-orange">TRANSFORMATION</span>
          </h2>
          <p className="text-brand-lightGray text-sm md:text-base max-w-lg mx-auto mt-4">
            See the progression from an aspiring creative into a highly demanded industry expert.
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-8 items-center">
          
          {/* Before Motion Forge Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 glass-card p-8 md:p-10 border border-red-500/10 hover:border-red-500/20 bg-red-950/5 relative overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-red-500/5 rounded-full blur-xl" />
            
            <h3 className="font-heading font-black text-2xl text-red-500 mb-8 tracking-wide flex items-center gap-2.5">
              <span>BEFORE</span>
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                Motion Forge
              </span>
            </h3>

            <ul className="flex flex-col gap-6">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <XCircle className="w-5.5 h-5.5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-brand-lightGray text-sm md:text-base font-light">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Central Logo Indicator */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center relative min-h-[160px] lg:min-h-0">
            {/* Horizontal Line connector (Desktop only) */}
            <div className="hidden lg:block absolute left-0 right-0 h-[2px] bg-gradient-to-r from-red-500/20 via-brand-orange/40 to-green-500/20 z-0" />

            {/* Glowing Ring Core */}
            <div className="relative w-28 h-28 rounded-full bg-brand-black border border-brand-orange/30 flex items-center justify-center z-10 shadow-glow animate-pulse-glow">
              {/* Outer spin dots */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-orange/20 animate-spin" style={{ animationDuration: '8s' }} />
              
              <div className="flex flex-col items-center select-none font-heading font-black text-3xl">
                <span className="text-white leading-none">M</span>
                <span className="text-brand-orange leading-none -mt-2">F</span>
              </div>
            </div>

            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-4 z-10">
              The Catalyst
            </span>
          </div>

          {/* After Motion Forge Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 glass-card p-8 md:p-10 border border-green-500/10 hover:border-green-500/30 bg-green-950/5 relative overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-green-500/5 rounded-full blur-xl" />
            
            <h3 className="font-heading font-black text-2xl text-green-400 mb-8 tracking-wide flex items-center gap-2.5">
              <span>AFTER</span>
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                Motion Forge
              </span>
            </h3>

            <ul className="flex flex-col gap-6">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5.5 h-5.5 text-green-400 shrink-0 mt-0.5 animate-pulse" />
                  <span className="text-white text-sm md:text-base font-semibold">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Transformation;
