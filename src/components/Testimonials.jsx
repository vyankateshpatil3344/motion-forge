import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ritika Sen",
      course: "3D Animation Graduate",
      rating: 5,
      review: "Motion Forge completely transformed my career trajectory. The mentors treat you like junior artists rather than students. The 3D animation curriculum is highly practical and the placement support got me a job at Netflix within weeks of graduating!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Devashish Roy",
      course: "Graphic Design Graduate",
      rating: 5,
      review: "As a self-taught designer, I lacked agency-level workflow knowledge. The Graphic Design program taught me brand strategy, visual presentation, and high-quality prototyping. Now, I work as a Lead Brand Specialist!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Sneha Chawla",
      course: "Motion Graphics Graduate",
      rating: 5,
      review: "The motion graphics course is spectacular. Building detailed visual sequences and complex keyframe mechanics in After Effects became second nature. The live studio briefs were challenging but extremely rewarding.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
    }
  ];

  // Auto sliding carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight">
            WHAT OUR <span className="text-gradient-orange">ALUMNI SAY</span>
          </h2>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[340px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card w-full p-8 md:p-12 border border-white/5 relative flex flex-col items-center text-center shadow-2xl"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-8 w-12 h-12 text-brand-orange/15 rotate-180" />

              {/* Stars Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-brand-orange" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white text-base md:text-xl font-light italic leading-relaxed mb-8 max-w-2xl">
                "{testimonials[activeIndex].review}"
              </p>

              {/* Student Details */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange"
                />
                <div className="text-left">
                  <h4 className="font-heading font-bold text-white text-base leading-none">
                    {testimonials[activeIndex].name}
                  </h4>
                  <span className="text-brand-lightGray text-xs font-medium mt-1 inline-block">
                    {testimonials[activeIndex].course}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicator Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeIndex === index 
                  ? 'w-8 bg-brand-orange shadow-glow' 
                  : 'w-2.5 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
