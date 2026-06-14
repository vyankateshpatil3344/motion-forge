import React from 'react';
import { motion } from 'framer-motion';

const SoftwareTools = () => {
  const tools = [
    {
      name: "Adobe Photoshop",
      abbr: "Ps",
      bgColor: "bg-[#001E36]",
      textColor: "text-[#00C8FF]",
      borderColor: "border-[#00C8FF]/30",
      description: "Raster Graphics & Imaging",
      shadow: "shadow-[#00C8FF]/10",
      glowColor: "rgba(0, 200, 255, 0.2)"
    },
    {
      name: "Adobe Illustrator",
      abbr: "Ai",
      bgColor: "bg-[#261300]",
      textColor: "text-[#FF9A00]",
      borderColor: "border-[#FF9A00]/30",
      description: "Vector Graphics & Illustration",
      shadow: "shadow-[#FF9A00]/10",
      glowColor: "rgba(255, 154, 0, 0.2)"
    },
    {
      name: "Adobe After Effects",
      abbr: "Ae",
      bgColor: "bg-[#1E0030]",
      textColor: "text-[#D199FF]",
      borderColor: "border-[#D199FF]/30",
      description: "VFX & Motion Graphics",
      shadow: "shadow-[#D199FF]/10",
      glowColor: "rgba(209, 153, 255, 0.2)"
    },
    {
      name: "Adobe Premiere Pro",
      abbr: "Pr",
      bgColor: "bg-[#16002C]",
      textColor: "text-[#EA77FF]",
      borderColor: "border-[#EA77FF]/30",
      description: "Industry-standard Video Editing",
      shadow: "shadow-[#EA77FF]/10",
      glowColor: "rgba(234, 119, 255, 0.2)"
    },
    {
      name: "Blender 3D",
      customIcon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-1.5-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.76-4.52l-2.43 1.4C12.44 9.34 11.75 9 11 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.98-.36-1.88-.95-2.58l2.43-1.4c.36.71.52 1.5.52 2.38 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.19 0 2.29.35 3.24.96l2.36-2.36 1.41 1.41-2.26 2.27c.45.69.75 1.48.75 2.34z" />
        </svg>
      ),
      bgColor: "bg-[#2B1707]",
      textColor: "text-[#E87D0D]",
      borderColor: "border-[#E87D0D]/30",
      description: "3D Modeling, Rigging & Rendering",
      shadow: "shadow-[#E87D0D]/10",
      glowColor: "rgba(232, 125, 13, 0.2)"
    },
    {
      name: "Figma",
      customIcon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2h4v4H8V2zm0 4h4v4H8V6zm0 4h4v4H8v-4zm0 4h4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4zm4-12c1.1 0 2 .9 2 2s-.9 2-2 2h-2V2h2zm4 4c0 1.1-.9 2-2 2h-2V6h2c1.1 0 2 .9 2 2zm0 4c0 1.1-.9 2-2 2h-2v-4h2c1.1 0 2 .9 2 2z" />
        </svg>
      ),
      bgColor: "bg-[#1E1E1E]",
      textColor: "text-[#F24E1E]",
      borderColor: "border-[#F24E1E]/30",
      description: "UI/UX & Interactive Design",
      shadow: "shadow-[#F24E1E]/10",
      glowColor: "rgba(242, 78, 30, 0.2)"
    },
    {
      name: "Cinema 4D",
      abbr: "C4d",
      bgColor: "bg-[#001530]",
      textColor: "text-[#007CFF]",
      borderColor: "border-[#007CFF]/30",
      description: "High-End 3D Motion & Simulation",
      shadow: "shadow-[#007CFF]/10",
      glowColor: "rgba(0, 124, 255, 0.2)"
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[15vw] bg-brand-orange/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            Toolkit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black tracking-tight"
          >
            MASTER THE <span className="text-gradient-orange">TOOLS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-lightGray text-sm md:text-base max-w-lg mx-auto mt-4"
          >
            Get hands-on training with the same software stacks used by premier creative agencies and Hollywood animation studios.
          </motion.p>
        </div>

        {/* Tools flexbox / grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 15px 30px ${tool.glowColor}`,
                borderColor: tool.textColor.replace('text-[', '').replace(']', '')
              }}
              className={`w-full sm:w-[260px] glass-card p-6 flex items-center gap-4 border ${tool.borderColor} transition-all duration-300 relative group`}
            >
              {/* Left Logo Emblem */}
              <div className={`w-14 h-14 rounded-2xl ${tool.bgColor} ${tool.textColor} flex items-center justify-center font-heading font-black text-2xl border border-white/5 relative z-10 shrink-0`}>
                {tool.customIcon ? tool.customIcon : tool.abbr}
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-base group-hover:text-brand-orange transition-colors">
                  {tool.name}
                </span>
                <span className="text-brand-lightGray text-xs mt-0.5 leading-snug">
                  {tool.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTools;
