import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Pawansir from "../assets/Pawan_sir_.jpg";
import Anjalimam from "../assets/Anjani_mam.jpg";
import Himanshusir from "../assets/Himanshu_sir.jpg";
import PawanBhati from "../assets/Pawan_Bhati.jpg";


const teamMembers = [
  {
    name: "Pawan Sharma",
    role: "Director",
    image: Pawansir,
  },
  {
    name: "Anjani Sharma",
    role: "HR",
    image: Anjalimam,
  },
  {
    name: "Himanshu Sharma",
    role: "UX/UI Designer",
    image: Himanshusir ,
  },
  {
    name: "Pawan Bahti",
    role: "HOD",
    image: PawanBhati,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d1ff]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Meet Our Team
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-8 tracking-tight">
            Meet Our <span className="text-[#3b41ff] italic">Tech Titans</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium leading-relaxed">
            We build strategic technology roadmaps and high-performance digital ecosystems 
            with a team of seasoned experts at the helm.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/5] transition-transform duration-300 group-hover:-translate-y-2">
                
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-5">
                    <button className="p-2 bg-white rounded-full text-[#0f172a] hover:bg-[#3b41ff] hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2 bg-white rounded-full text-[#0f172a] hover:bg-[#3b41ff] hover:text-white transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs font-black tracking-widest text-[#3b41ff] uppercase mb-2">
                  {member.role}
                </p>
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  {member.name}
                </h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
