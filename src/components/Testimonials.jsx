import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechFlow India",
    content: "TechHub Technology transformed our legacy systems into a blazing-fast React infrastructure with rock-solid security.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Anita Desai",
    role: "Marketing Director, Global Retail",
    content: "Their digital strategy helped us grow organic conversions by 150% in just four months. Truly exceptional work by TechHub Technology.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Founder, SecureFin",
    content: "Clear roadmap, smart decisions, and serious cost savings. The team at TechHub Technology are true partners.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5
  }
];


  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-32 px-6 bg-[#f8fafc] relative overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/40 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-cyan-600 text-[10px] font-black uppercase tracking-[0.3em] mb-12"
        >
          <Quote size={12} className="fill-cyan-600" />
          Client Voices
        </motion.div>

        {/* Testimonial Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 md:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative z-10"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: reviews[index].stars }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <h3 className="text-2xl md:text-3xl leading-[1.4] font-bold text-slate-900 mb-10 tracking-tight">
                “{reviews[index].content}”
              </h3>

              {/* Author Profile */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="relative">
                  <img
                    src={reviews[index].avatar}
                    alt={reviews[index].name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-500 rounded-lg flex items-center justify-center text-white">
                    <Quote size={10} fill="currentColor" />
                  </div>
                </div>
                <div className="md:text-left">
                  <h4 className="text-slate-900 font-black text-lg leading-tight">
                    {reviews[index].name}
                  </h4>
                  <p className="text-cyan-600 text-[11px] font-bold uppercase tracking-widest mt-1">
                    {reviews[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Premium Navigation Controls */}
          <div className="absolute inset-y-0 -left-6 md:-left-12 flex items-center z-20">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute inset-y-0 -right-6 md:-right-12 flex items-center z-20">
            <button
              onClick={next}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-slate-900" : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;