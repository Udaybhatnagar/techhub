import { Settings, ShieldCheck, Lightbulb } from "lucide-react";

export const services = [
  {
    title: "IT Management",
    desc: "Comprehensive oversight of your tech infrastructure, ensuring 99.9% uptime and seamless hardware-software integration.",
    icon: <Settings className="text-cyan-400" size={28} />,
    color: "from-cyan-500/20",
    border: "hover:border-cyan-500/50"
  },
  {
    title: "Database Security",
    desc: "Enterprise-grade encryption and real-time threat monitoring to protect your most sensitive business data from breaches.",
    icon: <ShieldCheck className="text-blue-400" size={28} />,
    color: "from-blue-500/20",
    border: "hover:border-blue-500/50"
  },
  {
    title: "IT Consultancy",
    desc: "Strategic technology roadmap planning to align your digital infrastructure with your long-term business scaling goals.",
    icon: <Lightbulb className="text-indigo-400" size={28} />,
    color: "from-indigo-500/20",
    border: "hover:border-indigo-500/50"
  }
];
