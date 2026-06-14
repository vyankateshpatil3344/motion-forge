import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, TrendingUp } from 'lucide-react';

const Placements = () => {
  const sliderRef = useRef(null);

  const placementStories = [
    {
      id: 1,
      name: "Amit Patel",
      role: "Senior Motion Designer",
      company: "Rockstar Games",
      package: "18.5 LPA",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
      logoText: "R*",
      logoBg: "bg-red-600"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      role: "3D Lighting Artist",
      company: "Technicolor",
      package: "14.2 LPA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      logoText: "TC",
      logoBg: "bg-green-700"
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      role: "Lead Video Editor",
      company: "Netflix India",
      package: "22.0 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      logoText: "N",
      logoBg: "bg-black text-red-600 font-extrabold"
    },
    {
      id: 4,
      name: "Priyanjali Sen",
      role: "Brand Identity Specialist",
      company: "Landor & Fitch",
      package: "12.8 LPA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      logoText: "L&F",
      logoBg: "bg-amber-500"
    },
    {
      id: 5,
      name: "Arjun Kapoor",
      role: "Lead UX & Product Designer",
      company: "Google India",
      package: "24.5 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      logoText: "G",
      logoBg: "bg-blue-600"
    }
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="placements" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Glow lights */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-3"
            >
              Success Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-black tracking-tight"
            >
              FORGED & <span className="text-gradient-orange">PLACED</span>
            </motion.h2>
          </div>
          
          {/* Controls and description */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-lightGray hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-lightGray hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-10 pt-2 px-1 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {placementStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] glass-card p-6 border border-white/5 relative group snap-start flex flex-col justify-between"
            >
              {/* Placement Card Header */}
              <div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Package Badge */}
                  <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-brand-black/90 backdrop-blur-md border border-brand-orange/30 text-white flex items-center gap-1.5 shadow-lg">
                    <TrendingUp className="w-4 h-4 text-brand-orange" />
                    <span className="font-heading font-black text-sm text-brand-orange">{story.package}</span>
                  </div>
                </div>

                {/* Student Identity */}
                <h3 className="font-heading font-black text-xl text-white group-hover:text-brand-orange transition-colors">
                  {story.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-brand-lightGray text-xs font-semibold mt-1">
                  <Briefcase className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{story.role}</span>
                </div>
              </div>

              {/* Company Logo and Tag */}
              <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-6">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg ${story.logoBg} flex items-center justify-center text-[11px] font-black text-white`}>
                    {story.logoText}
                  </div>
                  <span className="text-white text-xs font-bold font-heading uppercase tracking-wider">
                    {story.company}
                  </span>
                </div>
                
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold bg-white/5 px-2.5 py-1 rounded">
                  Alumnus
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placements;
