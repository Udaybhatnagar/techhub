import { motion } from "framer-motion";
import { ChevronRight, Play, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[#f8fafc]">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-cyan-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[50%] bg-indigo-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto text-center px-6 relative z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            Available for New Projects 2026
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[7rem] font-black mb-8 leading-[0.95] tracking-tight text-slate-900"
        >
          Engineering the <br />
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent italic px-2">
            Digital Frontier
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          We build strategic technology roadmaps and high-performance 
          digital ecosystems for brands that refuse to settle for average.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-3 overflow-hidden transition-all hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)] hover:-translate-y-1">
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
              Start a Project <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl flex items-center gap-3 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs group">
            View Our Work 
            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </motion.div>

        {/* Trust Pilot / Metric Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-slate-200/60 flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-slate-900">99%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Client Success</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-slate-900">150+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Projects Shipped</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-slate-900">24/7</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Expert Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;