import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Web Solutions",
      desc: "High-performance, scalable web ecosystems built with modern frameworks to drive enterprise growth.",
      icon: "🌐",
      accent: "cyan"
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven strategies that amplify your brand presence and maximize ROI through precision targeting.",
      icon: "📈",
      accent: "blue"
    },
    {
      title: "App Development",
      desc: "Intuitive mobile experiences that bridge the gap between complex functionality and user delight.",
      icon: "📱",
      accent: "indigo"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-cyan-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4"
          >
            What We Do
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Specialized <span className="text-slate-400 italic font-medium">Services</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              {/* Floating Icon with Accent Glow */}
              <div className="relative w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-cyan-50 transition-all duration-500">
                {service.icon}
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  Explore Service
                </button>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-12 h-12 border-t-2 border-r-2 border-slate-50 rounded-tr-[2rem] group-hover:border-cyan-100 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;