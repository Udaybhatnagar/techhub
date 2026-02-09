import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Layout, BarChart, 
  Search, Star, Palette, ArrowRight, ChevronRight 
} from 'lucide-react';

const WeOffering = () => {
  const offerings = [
    { title: "Website Development", icon: <Globe />, color: "text-cyan-600", bg: "bg-cyan-50", glow: "shadow-cyan-100", desc: "High-performance, SEO-ready web applications." },
    { title: "iOS Development", icon: <Smartphone />, color: "text-blue-600", bg: "bg-blue-50", glow: "shadow-blue-100", desc: "Premium native apps for Apple's ecosystem." },
    { title: "Android Development", icon: <Smartphone />, color: "text-indigo-600", bg: "bg-indigo-50", glow: "shadow-indigo-100", desc: "Scalable and robust Android solutions." },
    { title: "SMO Services", icon: <BarChart />, color: "text-purple-600", bg: "bg-purple-50", glow: "shadow-purple-100", desc: "Strategic social media optimization for brands." },
    { title: "Google Ads (PPC)", icon: <Search />, color: "text-orange-600", bg: "bg-orange-50", glow: "shadow-orange-100", desc: "High-conversion paid search campaigns." },
    { title: "Google Review Mgmt", icon: <Star />, color: "text-yellow-600", bg: "bg-yellow-50", glow: "shadow-yellow-100", desc: "Reputation management and trust building." },
    { title: "Graphic Design", icon: <Palette />, color: "text-pink-600", bg: "bg-pink-50", glow: "shadow-pink-100", desc: "Visual storytelling and brand identity." },
    { title: "Custom UI/UX", icon: <Layout />, color: "text-emerald-600", bg: "bg-emerald-50", glow: "shadow-emerald-100", desc: "User-centric designs that drive engagement." }
  ];

  return (
    <section id="offering" className="py-32 px-6 bg-[#fcfdfe] relative overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[40%] bg-indigo-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyan-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-cyan-500"></span>
              Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter"
            >
              Shaping Brands <br /> 
              <span className="text-slate-400 italic font-medium">Through Technology</span>
            </motion.h2>
          </div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="group flex items-center gap-3 text-[12px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-2 transition-all"
          >
            Explore All Services <ArrowRight size={18} className="text-cyan-500 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {React.cloneElement(item.icon, { size: 28, strokeWidth: 2.5 })}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-cyan-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {item.desc}
              </p>

              {/* Interaction Link */}
              <div className="mt-auto flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                  Learn More
                </span>
                <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                  <ChevronRight size={18} />
                </div>
              </div>

              {/* Subtle hover glow accent */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] ${item.bg.replace('bg-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffering;