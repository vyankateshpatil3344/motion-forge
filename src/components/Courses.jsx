import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Palette, Film, Award, Box } from 'lucide-react';

const Courses = ({ onBookDemo }) => {
  const coursesData = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      duration: "6 Months",
      description: "Master typography, brand identity, layout design, and design principles. Build projects ranging from logos to marketing campaigns.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
      icon: Palette,
      tools: ["Photoshop", "Illustrator", "Figma", "Indesign"],
      tag: "Design Core"
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics",
      duration: "8 Months",
      description: "Create cinematic title sequences, explainer videos, VFX, and visual loops. Combine design, typography, and animation principles.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      icon: Film,
      tools: ["After Effects", "Illustrator", "Cinema 4D"],
      tag: "Best Seller"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      duration: "6 Months",
      description: "Learn professional narrative editing, color grading, sound design, and speed ramping. Edit commercials, YouTube videos, and films.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      icon: Award,
      tools: ["Premiere Pro", "DaVinci Resolve", "Audition"],
      tag: "Trending"
    },
    {
      id: "3d-animation",
      title: "3D Animation",
      duration: "10 Months",
      description: "Dive deep into 3D modeling, texturing, character animation, rigging, fluid simulations, and high-fidelity environment design.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      icon: Box,
      tools: ["Blender", "Cinema 4D", "Substance Painter"],
      tag: "Advanced"
    }
  ];

  return (
    <section id="courses" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[45vw] h-[45vw] bg-brand-orange/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[45vw] h-[45vw] bg-brand-orange/3 blur-[160px] rounded-full pointer-events-none" />

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
              Curated Programs
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-black tracking-tight"
            >
              CHOOSE YOUR <span className="text-gradient-orange">CRAFT</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-lightGray text-sm md:text-base max-w-md"
          >
            Our industry-aligned courses are designed to transition you from an absolute beginner to a battle-tested professional creative.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coursesData.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-white/5 hover:border-brand-orange/40 hover:shadow-glow duration-500"
              >
                {/* Course Header/Banner Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />
                  
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating badge */}
                  <span className="absolute top-6 left-6 z-20 px-3.5 py-1.5 rounded-full bg-brand-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-brand-orange tracking-wider">
                    {course.tag}
                  </span>

                  <span className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold tracking-wider">
                    {course.duration}
                  </span>

                  {/* Icon floating on the bottom overlay */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center text-white shadow-glow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6 sm:p-8 flex flex-col justify-between min-h-[200px]">
                  <p className="text-brand-lightGray text-sm sm:text-base leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Tools and Footer */}
                  <div>
                    {/* Tools list */}
                    <div className="flex flex-wrap gap-2 mb-8 border-t border-white/5 pt-6">
                      {course.tools.map((tool) => (
                        <span 
                          key={tool} 
                          className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/5 text-brand-lightGray font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={onBookDemo}
                        className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors flex items-center gap-1.5"
                      >
                        Learn More 
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>

                      <button
                        onClick={onBookDemo}
                        className="px-5 py-2 rounded-full border border-white/10 hover:border-brand-orange hover:bg-brand-orange hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300"
                      >
                        Book Demo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
