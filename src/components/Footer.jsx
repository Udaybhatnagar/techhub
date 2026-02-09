import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import TechhubLogo from "../assets/techhub_logo.png";

/* ---------- Motion Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  const services = [
    "IT Management",
    "Database Security",
    "IT Consultancy",
    "App Development",
    "Cyber Security",
  ];

  const links = [
    "Home",
    "About Us",
    "Services",
    "Blog",
    "Contact Us",
    "Privacy Policy",
  ];

  const socials = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <footer className="relative bg-[#0a0c10] pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-center gap-3 font-black text-2xl tracking-tight">
              <img src={TechhubLogo} className="h-10" alt="TechHub Logo" />
              <span className="text-white">TechHub Technology</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Empowering businesses with innovative technology, web development,
              and design solutions for the digital era.
            </p>

            <div className="flex gap-4">
              {socials.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Our Services
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {services.map((item) => (
                <li key={item}>
                  <a className="group flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                    <ArrowRight size={14} className="text-cyan-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {links.map((item) => (
                <li key={item}>
                  <a className="group flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                    <ArrowRight size={14} className="text-cyan-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={4}>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Contact Us
            </h4>

            <div className="space-y-6 text-sm text-gray-500">
              {/* <div className="flex gap-4">
                <IconBox icon={MapPin} color="cyan">
                  211A/05, Sec-91, Faridabad <br /> Haryana (121013)
                </IconBox>
              </div> */}

              <div className="flex gap-4">
                <IconBox icon={Phone} color="blue">
                  <a href="tel:+918527657955" className="hover:text-white">
                    +91 8527657955
                  </a>
                </IconBox>
              </div>

              <div className="flex gap-4">
                <IconBox icon={Clock} color="indigo">
                  <span className="block font-semibold text-gray-300">
                    Mon – Sat
                  </span>
                  10:00 AM – 8:00 PM
                </IconBox>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[11px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} TechHub Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const IconBox = ({ icon: Icon, color, children }) => {
  const colors = {
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  };

  return (
    <>
      <div className={`w-10 h-10 shrink-0 rounded-lg border flex items-center justify-center ${colors[color]}`}>
        <Icon size={18} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Footer;
