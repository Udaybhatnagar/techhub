import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading, progress }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[10000] bg-[#f8fafc] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Background Text for Premium Feel */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[20vw] font-black text-slate-100/50 leading-none select-none">
              121
            </span>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Percentage Display */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-baseline gap-1"
            >
              <span className="text-8xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-none">
                {progress}
              </span>
              <span className="text-2xl font-black text-cyan-500 italic">%</span>
            </motion.div>

            {/* Label */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-900 mt-2 mb-10"
            >
              System Initializing
            </motion.p>

            {/* Modern Progress Bar - Expanding from Center */}
            <div className="relative w-64 h-[2px] bg-slate-200">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 origin-center"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
              
              {/* Animated Glow Dot */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full blur-[4px]"
                style={{ 
                  left: `${progress}%`,
                  opacity: progress > 0 ? 1 : 0 
                }}
              />
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-[1px] bg-slate-300" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                TechHub Technologies&copy; 2026
              </span>
              <div className="w-6 h-[1px] bg-slate-300" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;