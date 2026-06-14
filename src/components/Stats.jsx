import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Star } from 'lucide-react';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      number: "1500+",
      label: "Students Trained",
      icon: Users,
      color: "from-orange-500/20 to-transparent",
      glow: "group-hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]",
    },
    {
      id: 2,
      number: "100+",
      label: "Placements",
      icon: Briefcase,
      color: "from-orange-500/20 to-transparent",
      glow: "group-hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]",
    },
    {
      id: 3,
      number: "50+",
      label: "Industry Projects",
      icon: Award,
      color: "from-orange-500/20 to-transparent",
      glow: "group-hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]",
    },
    {
      id: 4,
      number: "4.9",
      label: "Rating",
      icon: Star,
      color: "from-orange-500/20 to-transparent",
      glow: "group-hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]",
    }
  ];

  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      {/* Background Soft Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[20vw] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative"
              >
                {/* Background glow hover container */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glassmorphism Card */}
                <div className={`glass-card p-6 md:p-8 flex flex-col items-center text-center h-full relative z-10 border border-white/5 hover:border-brand-orange/20 overflow-hidden`}>
                  {/* Subtle Gradient Spot */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-brand-orange/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Stat Number */}
                  <span className="font-heading font-black text-3xl md:text-5xl text-white mb-2 tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {stat.number}
                  </span>

                  {/* Stat Label */}
                  <span className="text-brand-lightGray text-xs md:text-sm font-medium uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
