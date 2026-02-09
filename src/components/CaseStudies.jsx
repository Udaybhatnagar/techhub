import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Shield, Cpu, Zap, Database, ArrowUpRight } from 'lucide-react';

const CaseStudiesSlider = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      cat: "Web Dev",
      icon: <Globe size={18} />,
      image: "https://images.unsplash.com/photo-1572044158428-f10f443e0618?auto=format&fit=crop&q=80&w=400",
      color: "cyan"
    },
    {
      title: "Data Integration Hub",
      cat: "Tech Solutions",
      icon: <Layers size={18} />,
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400",
      color: "blue"
    },
    {
      title: "Enterprise Security",
      cat: "Cybersecurity",
      icon: <Shield size={18} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      color: "indigo"
    },
    {
      title: "AI-Powered Analytics",
      cat: "AI/ML",
      icon: <Cpu size={18} />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190a07ef?auto=format&fit=crop&q=80&w=400",
      color: "purple"
    },
    {
      title: "Cloud Migration",
      cat: "Infrastructure",
      icon: <Zap size={18} />,
      image: "https://images.unsplash.com/photo-1581456106606-44440c94982a?auto=format&fit=crop&q=80&w=400",
      color: "orange"
    },
    {
      title: "Secure Database",
      cat: "Data Management",
      icon: <Database size={18} />,
      image: "https://images.unsplash.com/photo-1599026330962-d4850d998394?auto=format&fit=crop&q=80&w=400",
      color: "emerald"
    },
  ];

  const infiniteProjects = [...projects, ...projects, ...projects];

  return (
    <section className="py-32 bg-[#fcfdfe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-600 font-black tracking-[0.3em] text-[10px] uppercase mb-3"
          >
            <span className="w-8 h-[2px] bg-cyan-500"></span>
            Portfolio
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Our Case <span className="text-slate-400 italic font-medium">Studies</span>
          </h2>
        </div>
        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-6 md:mt-0 flex items-center gap-3">
          <span className="w-12 h-[1px] bg-slate-200"></span>
          Drag to explore
        </div>
      </div>

      {/* Slider Container */}
      <div className="flex relative cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-33.33%"] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, 
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {infiniteProjects.map((project, index) => (
            <div 
              key={index}
              className="w-[350px] h-[450px] shrink-0 group relative rounded-[2.5rem] bg-white border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* Background Image with Light Overlay */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Refined Light Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-white shadow-sm border border-slate-50 text-${project.color}-500`}>
                    {project.icon}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-cyan-600 mb-3 block">
                    {project.cat}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1.5 bg-${project.color}-500 w-0 group-hover:w-full transition-all duration-700`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSlider;