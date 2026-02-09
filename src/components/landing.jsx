import React, { useState } from 'react';
import { Search, ChevronRight, LayoutGrid, MousePointer2, BarChart3, Square, Type, Bell } from 'lucide-react';

const ComponentsPage = () => {
  const [search, setSearch] = useState("");

  const sidebarItems = [
    { title: "Getting Started", items: ["Introduction", "Installation", "Theming"] },
    { title: "Components", items: ["Accordion", "Alert", "Buttons", "Cards", "Charts", "Dialog", "Inputs", "Tabs"] },
  ];

  return (
    <div className="min-h-screen bg-[#0d1530] text-white font-sans selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] pointer-events-none"></div>

      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#0d1530]/80">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
               <span className="text-[#0d1530] font-black text-lg">D</span>
            </div>
            <span className="font-bold tracking-tight text-lg hidden md:block">DEVELOPER UI</span>
          </div>
          
          <div className="flex-1 max-w-md mx-8 relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search components..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</button>
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto border-r border-white/5 pt-10 pr-6">
          {sidebarItems.map((group, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 px-2">{group.title}</h4>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${item === 'Buttons' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-10 pb-24 lg:pl-10">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Docs</span> <ChevronRight size={14} /> <span className="text-blue-400">Components</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Components</h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Beautifully crafted UI components designed with glassmorphism and modern aesthetics. Copy and paste into your apps.
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ComponentPreviewCard 
              title="Buttons" 
              description="Interactive button variants including primary, ghost, and glass styles."
              icon={<MousePointer2 size={18} />}
              preview={<div className="flex flex-col gap-3">
                <div className="px-4 py-1.5 bg-blue-600 rounded-md text-[10px] font-bold text-center">PRIMARY</div>
                <div className="px-4 py-1.5 border border-white/20 rounded-md text-[10px] font-bold text-center">OUTLINE</div>
                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-bold text-center">GLASS</div>
              </div>}
            />
            <ComponentPreviewCard 
              title="Charts" 
              description="Visual data representation using clean bars and line graphs."
              icon={<BarChart3 size={18} />}
              preview={<div className="flex items-end gap-1.5 h-16">
                <div className="w-3 h-8 bg-blue-500/40 rounded-t-sm" />
                <div className="w-3 h-12 bg-blue-500 rounded-t-sm" />
                <div className="w-3 h-6 bg-blue-500/20 rounded-t-sm" />
                <div className="w-3 h-14 bg-blue-500 rounded-t-sm" />
              </div>}
            />
            <ComponentPreviewCard 
              title="Inputs" 
              description="Modern text fields and selection components."
              icon={<Type size={18} />}
              preview={<div className="w-full space-y-3">
                <div className="h-8 bg-white/5 border border-white/10 rounded-md" />
                <div className="h-8 bg-blue-500/10 border border-blue-500/30 rounded-md" />
              </div>}
            />
            <ComponentPreviewCard 
              title="Alerts" 
              description="Notification and feedback banners for user interactions."
              icon={<Bell size={18} />}
              preview={<div className="w-full h-12 bg-red-500/10 border border-red-500/30 rounded-lg p-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="w-2/3 h-2 bg-white/10 rounded" />
              </div>}
            />
             <ComponentPreviewCard 
              title="Cards" 
              description="Glassmorphic containers for content organization."
              icon={<Square size={18} />}
              preview={<div className="w-full h-full bg-white/5 border border-white/10 rounded-xl flex flex-col p-3">
                <div className="w-1/2 h-2 bg-white/20 rounded mb-2" />
                <div className="w-full h-10 bg-white/5 rounded" />
              </div>}
            />
            <ComponentPreviewCard 
              title="Dashboard" 
              description="Complete layout patterns for admin panels."
              icon={<LayoutGrid size={18} />}
              preview={<div className="w-full h-full grid grid-cols-4 gap-1">
                <div className="col-span-1 bg-white/10 rounded" />
                <div className="col-span-3 grid grid-rows-2 gap-1">
                  <div className="bg-white/5 rounded" />
                  <div className="bg-white/5 rounded" />
                </div>
              </div>}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

const ComponentPreviewCard = ({ title, description, icon, preview }) => (
  <div className="group bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-blue-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
    
    {/* Preview Area (The "Image" within the code) */}
    <div className="h-40 bg-black/20 rounded-2xl mb-5 flex items-center justify-center p-6 border border-white/5 group-hover:bg-black/40 transition-colors overflow-hidden">
      {preview}
    </div>

    <p className="text-gray-500 text-sm mb-6 line-clamp-2">
      {description}
    </p>

    <button className="w-full py-2 rounded-full border border-white/10 text-xs font-bold tracking-wider hover:bg-white hover:text-blue-900 transition-all uppercase">
      Explore {title}
    </button>
  </div>
);

export default ComponentsPage;