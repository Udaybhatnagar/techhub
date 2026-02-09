import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Megaphone, Palette, BrainCircuit, 
  BarChart3, Database, Network, ArrowRight, ChevronRight 
} from 'lucide-react';

const WeOffering = () => {
  const offerings = [
    { 
      title: "Web Development", 
      icon: <Globe />, 
      color: "text-cyan-600", 
      bg: "bg-cyan-50", 
      desc: "Modern, scalable and SEO-friendly websites and web apps." 
    },
    { 
      title: "Mobile App Development", 
      icon: <Smartphone />, 
      color: "text-blue-600", 
      bg: "bg-blue-50", 
      desc: "High-performance Android & iOS applications." 
    },
    { 
      title: "Digital Marketing", 
      icon: <Megaphone />, 
      color: "text-purple-600", 
      bg: "bg-purple-50", 
      desc: "SEO, PPC and social media marketing strategies." 
    },
    { 
      title: "Graphics Design", 
      icon: <Palette />, 
      color: "text-pink-600", 
      bg: "bg-pink-50", 
      desc: "Creative branding, UI design and visual identity solutions." 
    },
    { 
      title: "AI Applications", 
      icon: <BrainCircuit />, 
      color: "text-indigo-600", 
      bg: "bg-indigo-50", 
      desc: "Smart automation and AI-powered business solutions." 
    },
    { 
      title: "Business Intelligence", 
      icon: <BarChart3 />, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50", 
      desc: "Data-driven dashboards and analytics for better decisions." 
    },
    { 
      title: "CRM | ERP | LMS", 
      icon: <Network />, 
      color: "text-orange-600", 
      bg: "bg-orange-50", 
      desc: "Enterprise management systems to streamline operations." 
    },
    { 
      title: "Data Analytics", 
      icon: <Database />, 
      color: "text-yellow-600", 
      bg: "bg-yellow-50", 
      desc: "Transform raw data into actionable insights." 
    }
  ];

  return (
    <section id="offering" className="py-32 px-6 bg-[#fcfdfe] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
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
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {React.cloneElement(item.icon, { size: 28, strokeWidth: 2.5 })}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-cyan-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {item.desc}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                  Learn More
                </span>
                <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffering;
