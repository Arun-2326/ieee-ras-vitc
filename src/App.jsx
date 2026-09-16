import React, { useState, useEffect } from 'react';
import RoboticArm from './components/RoboticArm';

const modulesData = [
  { id: '01', label: 'Creatives', items: ['Design', 'Social Media', 'Video Editing'] },
  { id: '02', label: 'Operations', items: ['Event Management', 'Outreach', 'Sponsorship'] },
  { id: '03', label: 'Projects', items: ['Embedded Systems', 'Robotics and Automation', 'R&D / Prototyping'] },
  { id: '04', label: 'Software', items: ['AI/ML', 'Web Development', 'UI/UX'] }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeDept, setActiveDept] = useState(modulesData[0]);
  const [eggCount, setEggCount] = useState(0);
  const [triggerEgg, setTriggerEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'departments', 'projects', 'contact'];
      let current = 'hero';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBeaconClick = () => {
    setEggCount((prev) => {
      if (prev + 1 >= 5) {
        setTriggerEgg(true);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen bg-cmd-bg text-cmd-text font-sans relative selection:bg-cmd-amber selection:text-black">
      
      <div className="fixed top-0 left-0 right-0 h-2 bg-black/80 backdrop-blur-sm z-50 border-b border-cmd-surface-brd overflow-hidden">
        <div className="w-full h-full ruler-x opacity-25"></div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 bg-black/90 border border-cmd-surface-brd p-3 hidden md:flex flex-col items-center shadow-2xl w-32 font-mono">
        <div className="text-[8px] text-cmd-muted uppercase tracking-wider mb-1">ARM_POSE_FEED</div>
        <RoboticArm activeSection={activeSection} isPersistent={true} />
        <div className="text-[9px] text-cmd-amber mt-1 uppercase tracking-tight font-bold">[ {activeSection.toUpperCase()} ]</div>
      </div>

      <header className="sticky top-2 bg-cmd-bg/95 border-b border-cmd-surface-brd z-40 font-mono px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleBeaconClick} 
              className="w-2.5 h-2.5 bg-cmd-amber focus:outline-none cursor-pointer animate-pulse" 
              title="SYS_NODE"
            ></button>
            <span className="text-xs font-bold tracking-widest text-cmd-amber uppercase">IEEE RAS VIT CHENNAI</span>
          </div>
          <nav className="hidden lg:flex space-x-6 text-[11px] uppercase tracking-widest text-cmd-muted">
            <a href="#about" className="hover:text-cmd-amber transition-colors">01 About</a>
            <a href="#departments" className="hover:text-cmd-amber transition-colors">02 Departments</a>
            <a href="#projects" className="hover:text-cmd-amber transition-colors">03 Projects & Events</a>
            <a href="#contact" className="hover:text-cmd-amber transition-colors">04 Contact</a>
          </nav>
          <span className="text-[10px] text-cmd-muted hidden sm:inline">[ REC_TASK.SW_DEV ]</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-32">
        
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center pt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="font-mono text-xs text-cmd-amber tracking-widest uppercase">// AUTOMATION MANIFEST V1.0</div>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none text-cmd-text">
              Aspire.<br />Create.<br /><span className="text-cmd-amber">Automate.</span>
            </h1>
          </div>
          <div className="bg-cmd-surface border border-cmd-surface-brd p-8 flex flex-col items-center justify-center relative min-h-[320px]">
            <div className="absolute top-3 left-3 font-mono text-[9px] text-cmd-muted">SYS_SCHEMATIC_VIEWPORT</div>
            <RoboticArm activeSection={activeSection} isPersistent={false} />
          </div>
        </section>

        <section id="about" className="border-t border-cmd-surface-brd pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="font-mono">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">01 About Chapter</h2>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-cmd-text font-normal leading-relaxed">
              "To provide an environment for students to grow and nurture their talents under the guidance of IEEE and industry experts, keeping members current with emerging technology and helping their research/projects reach a wider audience."
            </p>
            <div className="text-xs text-cmd-muted uppercase font-mono tracking-wide bg-cmd-surface p-4 border border-cmd-surface-brd">
              <span className="text-cmd-amber font-bold block mb-1">PARENT SOCIETY PURPOSE</span>
              Advancing the theory and practice of robotics and automation engineering and science, and maintaining high professional standards among members.
            </div>
          </div>
        </section>

        <section id="departments" className="border-t border-cmd-surface-brd pt-16 space-y-8">
          <div className="font-mono">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">02 Departments Matrix</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            <div className="flex flex-col space-y-2 font-mono">
              {modulesData.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept)}
                  className={`text-left p-3 text-xs uppercase tracking-wider transition-all border cursor-pointer ${
                    activeDept.id === dept.id
                      ? 'bg-cmd-amber text-black border-cmd-amber font-bold'
                      : 'bg-cmd-surface text-cmd-text border-cmd-surface-brd hover:border-cmd-amber/40'
                  }`}
                >
                  {dept.id} {dept.label}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3 bg-black border border-cmd-surface-brd p-6 min-h-[160px] font-mono relative">
              <div className="absolute top-2 right-4 text-[9px] text-cmd-muted">CONSOLE_DATA_STREAM</div>
              <div className="text-xs text-cmd-amber uppercase tracking-wider mb-4">// MOUNTED SUBMODULES</div>
              <ul className="space-y-2">
                {activeDept.items.map((subItem, index) => (
                  <li key={index} className="text-sm text-cmd-text flex items-center space-x-2">
                    <span className="text-cmd-amber">{"->"}</span>
                    <span className="uppercase tracking-wide">{subItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-cmd-surface-brd pt-16 space-y-8">
          <div className="font-mono">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">03 Project Logs & Activity</h2>
          </div>
          
          <div className="space-y-4 font-mono">
            <div className="bg-cmd-surface border border-cmd-surface-brd p-5 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
              <div className="text-xs text-cmd-amber font-bold">ID: RAS_PRJ_01</div>
              <div className="text-sm uppercase text-cmd-text font-bold lg:col-span-2">RASCade Hackathon</div>
              <div className="text-xs text-cmd-muted uppercase text-left lg:text-right">[ 36-HOUR RUNTIME ]</div>
            </div>

            <div className="bg-cmd-surface border border-cmd-surface-brd p-5 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
              <div className="text-xs text-cmd-amber font-bold">ID: RAS_PRJ_02</div>
              <div className="text-sm uppercase text-cmd-text font-bold lg:col-span-2">RoverX 2025 Workshop</div>
              <div className="text-xs text-cmd-muted uppercase text-left lg:text-right">[ TechnoVIT Festival ]</div>
            </div>

            <div className="bg-cmd-surface/30 border border-dashed border-cmd-surface-brd p-5 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center opacity-60">
              <div className="text-xs text-cmd-muted">ID: RAS_PRJ_PLACEHOLDER</div>
              <div className="text-sm uppercase text-cmd-muted lg:col-span-2">Future Verified Project Node</div>
              <div className="text-xs text-cmd-muted uppercase text-left lg:text-right">[ AWAITING METRICS ]</div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-cmd-surface-brd pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">04 Registry & Contact</h2>
          </div>
          <div className="lg:col-span-2 space-y-6 text-xs uppercase text-cmd-muted">
            <div className="bg-cmd-surface border border-cmd-surface-brd p-6 space-y-2">
              <div><span className="text-cmd-amber font-bold">FOUNDED INAUGURATED:</span> 7 August 2018</div>
