import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Graphic Design',
    mode: 'In-Classroom'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const courses = [
    "Graphic Design",
    "Motion Graphics",
    "Video Editing",
    "3D Animation"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'Graphic Design',
      mode: 'In-Classroom'
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-md"
        >
          {/* Backdrop closer */}
          <div className="absolute inset-0" onClick={handleReset} />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="w-full max-w-lg rounded-3xl glass-card border border-white/10 p-6 md:p-8 relative z-10 shadow-2xl overflow-hidden"
          >
            {/* Corner glows */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-orange/15 rounded-full blur-xl pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Header */}
                <div className="mb-2">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Get 1-on-1 Mentorship</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight leading-tight">
                    BOOK A FREE <br />
                    <span className="text-gradient-orange text-glow">DEMO CLASS</span>
                  </h3>
                  <p className="text-brand-lightGray text-xs md:text-sm font-light mt-2">
                    Enter your details below to schedule your class. Our admission counselor will call you within 24 hours.
                  </p>
                </div>

                {/* Form fields */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/80 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all"
                      placeholder="alex@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-widest">Choose Course</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    >
                      {courses.map((course) => (
                        <option key={course} value={course} className="bg-neutral-900 text-white">
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-widest">Learning Mode</label>
                    <div className="flex gap-2">
                      {["In-Classroom", "Online Live"].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setFormData({ ...formData, mode })}
                          className={`flex-1 py-3 text-xs font-bold rounded-xl border transition-all ${
                            formData.mode === mode
                              ? 'bg-brand-orange/20 border-brand-orange text-brand-orange'
                              : 'bg-white/5 border-white/5 text-brand-lightGray hover:bg-white/10'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submission Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full mt-4 font-bold py-3.5 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scheduling Demo...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Confirm Demo Booking
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            ) : (
              // Success Screen representation
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h3 className="font-heading font-black text-2xl text-white tracking-tight mb-2">
                  DEMO CLASS SCHEDULED!
                </h3>
                
                <p className="text-brand-lightGray text-sm max-w-sm mb-8">
                  Thank you <span className="text-white font-bold">{formData.name}</span>. We've sent details to <span className="text-white font-bold">{formData.email}</span>. A senior career advisor will call you shortly on <span className="text-white font-bold">{formData.phone}</span>.
                </p>

                <button
                  onClick={handleReset}
                  className="btn-primary !px-8"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
