import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    'All',
    'Branding',
    'Graphic Design',
    'Motion Graphics',
    'Video Editing',
    '3D Animation'
  ];

  const projects = [
    {
      id: 1,
      title: "Vapor Brand Identity",
      category: "Branding",
      student: "Aravind K.",
      image: "https://images.unsplash.com/photo-1541462608141-2f58c6e68e98?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Neoteric Poster Series",
      category: "Graphic Design",
      student: "Sara Malhotra",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Hyperdrive Loop Animation",
      category: "Motion Graphics",
      student: "Rohan Das",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Echoes of Silence (Short Film)",
      category: "Video Editing",
      student: "Tanya Sharma",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Biomechanical Mech Render",
      category: "3D Animation",
      student: "Vikram Rathore",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Nirvana Workspace Branding",
      category: "Branding",
      student: "Ananya Roy",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Retro Wave Audio Visualizer",
      category: "Motion Graphics",
      student: "Kabir Sen",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Cybernetic Oasis Environment",
      category: "3D Animation",
      student: "Siddharth J.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[35vw] h-[35vw] bg-brand-orange/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-black tracking-tight mb-6"
          >
            STUDENT PORTFOLIO <span className="text-gradient-orange">SHOWCASE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-lightGray text-sm md:text-base max-w-xl mx-auto"
          >
            Real projects built by students during their graduation. See the quality of skills forged under the guidance of our mentors.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                selectedFilter === category 
                  ? 'bg-brand-orange text-white shadow-glow' 
                  : 'bg-white/5 border border-white/5 text-brand-lightGray hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass-card aspect-[4/5] border border-white/5"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Orange Overlay */}
                <div className="absolute inset-0 bg-brand-black/90 md:bg-brand-orange/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />

                {/* Content on hover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="text-right">
                    <span className="text-xs font-semibold tracking-widest text-white/75 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-xl text-white mb-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-xs font-medium mb-5">
                      By {project.student}
                    </p>

                    <button
                      onClick={() => setActiveImage(project)}
                      className="w-full flex items-center justify-center gap-2 bg-white text-brand-orange hover:bg-white/95 text-xs font-bold py-3 rounded-xl transition-all duration-300 shadow-lg active:scale-95"
                    >
                      <Eye className="w-4 h-4" />
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-bold text-white">{activeImage.title}</h3>
                <p className="text-brand-orange text-sm font-semibold mt-1">{activeImage.category} Project by {activeImage.student}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
