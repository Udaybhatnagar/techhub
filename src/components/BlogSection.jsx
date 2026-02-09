import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "AI is Revolutionizing Web Development",
      date: "Jan 10, 2026",
      time: "5 min read",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Top SEO Strategies for Local Business",
      date: "Jan 08, 2026",
      time: "4 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Database Security Best Practices",
      date: "Jan 05, 2026",
      time: "6 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section id="blog" className="py-32 px-6 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[30%] h-[40%] bg-cyan-100/30 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-600 text-[11px] uppercase tracking-[0.3em] font-black mb-4"
            >
              <span className="w-8 h-[2px] bg-cyan-500"></span>
              Insights
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            >
              Latest <span className="bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent italic">Updates</span>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="group flex items-center gap-2 text-[12px] uppercase tracking-widest font-black text-slate-500 hover:text-cyan-600 transition-colors"
          >
            View All Insights <ArrowRight size={16} className="text-cyan-500" />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-500" />
                    {post.time}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-slate-900 mb-8 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors">
                    Read Article
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;