import { Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import TechhubLogo from "../assets/techhub_logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full z-50 px-6">
      {/* Floating Glass Container */}
      <div className="max-w-[1400px] mx-auto h-20 px-8 flex justify-between items-center bg-white/40 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 font-black text-xl tracking-tight group cursor-pointer">
          <img
            src={TechhubLogo}
            alt="TechHub Logo"
            className="h-10 object-contain"
          />
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            TechHub Technology
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden lg:flex items-center gap-10">
          {["Home", "Services", "Blog", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative text-[12px] uppercase tracking-[0.25em] font-bold text-slate-500 hover:text-cyan-600 transition-all duration-300 flex items-center gap-1 group"
            >
              {item}
              <ChevronDown size={12} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-0.5" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+918527657955" 
            className="relative overflow-hidden px-7 py-3 rounded-2xl bg-slate-900 text-white flex items-center gap-3 shadow-xl shadow-slate-200 group"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 -skew-x-[45deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000"></div>
            
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
              <Phone size={12} className="text-cyan-400 fill-cyan-400" />
            </div>
            <span className="font-bold text-[11px] uppercase tracking-widest">
              Consult Now
            </span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
