import { motion } from "framer-motion";
import { Play, CheckCircle, Headphones, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: IMAGE COMPOSITION */}
        <div className="relative">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent" />
          </motion.div>

          {/* Floating Video Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-10 -right-10 md:right-0 w-64 h-64 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/20 p-2 shadow-2xl overflow-hidden hidden sm:block"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
                alt="Video Preview"
                className="object-cover w-full h-full opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="relative">
          {/* Section Label */}
          <div className="flex items-center gap-3 text-cyan-500 font-black tracking-widest text-xs uppercase mb-6">
            <span className="w-10 h-[2px] bg-cyan-500" />
            About TechHub Technology
          </div>

          <h2 className="text-5xl font-black mb-8 leading-tight">
            We are Ready to Help <br />
            <span className="text-gray-500">And Improve Your Knowledge</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Welcome to TechHub Technological, where innovation meets quality in
            the field of technological solutions. We were founded with a passion
            for generating revolutionary change via cutting-edge technology, and
            we are committed to helping both organizations and individuals to
            prosper in the digital age.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  Personalized Experience
                </h4>
                <p className="text-gray-500 text-sm">
                  Refreshing to get such a personal touch.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Headphones size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  Web & Graphic Design Excellence
                </h4>
                <p className="text-gray-500 text-sm">
                  Experience excellence in web and graphic design with our
                  personalized solutions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + Founder */}
          <div className="flex items-center gap-8">
            <button className="group flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-cyan-500 hover:text-black transition-all">
              Explore More
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <div>
              <div className="font-bold text-white italic">
                From Concept to Execution
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                We Deliver Top-Notch Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
