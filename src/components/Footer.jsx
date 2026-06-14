import React from 'react';
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin, Globe, ArrowRight } from 'lucide-react';
import logo from '../logo.png';


const Footer = ({ onBookDemo }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="about" className="relative bg-[#050505] border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: About & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group mb-6">
              <img src={logo} alt="Motion Forge" className="h-16 md:h-20 w-auto object-contain" />
            </a>
            
            <p className="text-brand-lightGray text-sm font-light leading-relaxed mb-6 max-w-sm">
              Motion Forge is a premium training institute dedicated to molding creative aspirations into industry-standard expertise. We specialize in Graphic Design, Motion Graphics, Video Editing, and 3D Animation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/motionforge", color: "hover:text-[#E1306C] hover:border-[#E1306C]/30 hover:bg-[#E1306C]/5" },
                { icon: Youtube, href: "https://youtube.com/motionforge", color: "hover:text-[#FF0000] hover:border-[#FF0000]/30 hover:bg-[#FF0000]/5" },
                { icon: Linkedin, href: "https://linkedin.com/school/motionforge", color: "hover:text-[#0077B5] hover:border-[#0077B5]/30 hover:bg-[#0077B5]/5" },
                { icon: Globe, href: "#", color: "hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange/5" }
              ].map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-brand-lightGray transition-all duration-300 ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: "Home", href: "#home" },
                { name: "Courses", href: "#courses" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Placements", href: "#placements" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-brand-lightGray hover:text-brand-orange transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">
              Our Programs
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: "Graphic Design", href: "#courses" },
                { name: "Motion Graphics", href: "#courses" },
                { name: "Video Editing", href: "#courses" },
                { name: "3D Animation", href: "#courses" }
              ].map((course, i) => (
                <li key={i}>
                  <a
                    href={course.href}
                    onClick={(e) => handleNavClick(e, course.href)}
                    className="text-brand-lightGray hover:text-brand-orange transition-colors text-sm font-medium"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Google Map Card */}
          <div id="contact" className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex items-start gap-3 text-brand-lightGray text-sm">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>1st Floor, Creative Space, Bandra West, Mumbai, MH 400050</span>
              </li>
              <li className="flex items-center gap-3 text-brand-lightGray text-sm">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-brand-lightGray text-sm">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <a href="mailto:info@motionforge.in" className="hover:text-white transition-colors">info@motionforge.in</a>
              </li>
            </ul>

            {/* Google Map Mini Card */}
            <div className="relative rounded-2xl overflow-hidden h-36 border border-white/10 group shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8029074983057!2d72.82559567583648!3d19.028399582169608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced000000001%3A0xe5102ffebc116c4f!2sBandra%20West%20Railway%20Station!5e0!3m2!1sen!2sin!4v1718118000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(90%) contrast(1.1) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Motion Forge Institute Location Map"
              ></iframe>
              
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-color opacity-40 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
              
              {/* Floating Maps CTA Link */}
              <a
                href="https://maps.google.com/?q=Bandra+West+Railway+Station"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 z-10 px-2.5 py-1.5 rounded-lg bg-brand-black/90 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-orange hover:border-brand-orange transition-all"
              >
                Directions
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* Footer Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 mt-12 text-center sm:text-left">
          <p className="text-brand-lightGray text-xs font-light">
            &copy; {currentYear} Motion Forge. All rights reserved. Built with pride for creative artists.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-lightGray hover:text-brand-orange text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-lightGray hover:text-brand-orange text-xs transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
