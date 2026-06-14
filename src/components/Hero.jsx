import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const Hero = ({ onBookDemo }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const ringRef = useRef(null);
  
  // Parallax scrolling effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Mouse tilt effect on the logo box
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate rotation (-15deg to +15deg)
    const rotateX = -((clientY - innerHeight / 2) / innerHeight) * 30;
    const rotateY = ((clientX - innerWidth / 2) / innerWidth) * 30;
    
    gsap.to(".logo-3d-wrapper", {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".logo-3d-wrapper", {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Soft Glows & Gradients */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#ff8c3b]/5 blur-[150px] pointer-events-none"
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>#1 Creative Training Institute</span>
          </motion.div>

          {/* Heading */}
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6.5xl lg:text-7xl font-heading font-black leading-[1.05] tracking-tight mb-6"
          >
            FORGE YOUR <br />
            <span className="relative inline-block text-gradient-orange text-glow">
              CREATIVE
            </span> <br />
            FUTURE
          </h1>

          {/* Supporting Text */}
          <p className="text-brand-lightGray text-base sm:text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
            Master Graphic Design, Motion Graphics, Video Editing, and 3D Animation from industry specialists. Learn with live client briefs and build a high-caliber professional portfolio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#courses" 
              onClick={handleExploreClick}
              className="btn-primary btn-glow text-center justify-center font-bold"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              onClick={onBookDemo}
              className="btn-secondary text-center justify-center font-bold flex items-center gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              Book Free Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side 3D Floating Logo */}
        <motion.div 
          style={{ y: logoY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px]"
        >
          {/* Main 3D Wrapper */}
          <div className="logo-3d-wrapper relative w-[320px] h-[320px] flex items-center justify-center transition-all duration-300 ease-out select-none">
            
            {/* Orange Glowing Ring (Orbital/Pulse) */}
            <div 
              ref={ringRef}
              className="absolute w-[340px] h-[340px] rounded-full border border-brand-orange/20 animate-pulse-glow pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 107, 0, 0.05) 0%, transparent 80%)',
                boxShadow: '0 0 50px rgba(255, 107, 0, 0.1), inset 0 0 50px rgba(255, 107, 0, 0.05)',
              }}
            />

            {/* Inner Ring with dotted border */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '30s' }} />

            {/* 3D Glass Layer Card Container */}
            <div className="absolute w-60 h-60 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/15 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden animate-float">
              
              {/* Internal abstract grid */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,107,0,0.08)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Glowing core behind logo */}
              <div className="absolute w-24 h-24 rounded-full bg-brand-orange/40 blur-[30px] animate-pulse pointer-events-none" />

              {/* Logo Typography - Big and Impactful */}
              <div className="relative text-8xl font-heading font-black tracking-tighter text-white flex flex-col items-center">
                <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">M</span>
                <span className="text-brand-orange -mt-8 translate-x-4 drop-shadow-[0_4px_16px_rgba(255,107,0,0.6)]">F</span>
              </div>
            </div>

            {/* Floating Particles (Framer Motion managed) */}
            {[...Array(6)].map((_, i) => {
              const sizes = [12, 16, 8, 20, 10, 14];
              const positions = [
                { top: '10%', left: '15%' },
                { top: '80%', left: '20%' },
                { top: '25%', left: '85%' },
                { top: '75%', left: '80%' },
                { top: '45%', left: '5%' },
                { top: '55%', left: '92%' },
              ];
              const delays = [0, 1.2, 0.6, 2.1, 1.7, 0.8];
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-lg bg-gradient-to-tr from-brand-orange/60 to-white/40 border border-white/20 backdrop-blur-sm pointer-events-none shadow-glow-soft"
                  style={{
                    width: sizes[i],
                    height: sizes[i],
                    ...positions[i],
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: delays[i],
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
