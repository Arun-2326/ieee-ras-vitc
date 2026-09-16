import React, { useState, useEffect } from 'react';
import RoboticArm from './components/RoboticArm';

const modulesData = [
  { id: '01', label: 'Creatives', items: ['Design', 'Social Media', 'Video Editing'] },
  { id: '02', label: 'Operations', items: ['Event Management', 'Outreach', 'Sponsorship'] },
  { id: '03', label: 'Projects', items: ['Embedded Systems', 'Robotics and Automation', 'R&D / Prototyping'] },
  { id: '04', label: 'Software', items: ['AI/ML', 'Web Development', 'UI/UX'] }
];

const projectsData = [
  { id: 'RAS_PRJ_01', title: 'RASCade Core Frame', domain: 'Software / Web Development', status: 'VERIFIED_COMPLETED', desc: 'A chapter-orchestrated 36-hour hackathon environment focused on software building operations and rapid automation development.' },
  { id: 'RAS_PRJ_02', title: 'RoverX Robotics Chassis', domain: 'Projects / Hardware', status: 'VERIFIED_COMPLETED', desc: 'A physical hardware mechanics and assembly workshop orchestrated during the TechnoVIT national technical festival.' },
  { id: 'RAS_PRJ_PLACEHOLDER', title: 'Future Verified Research Node', domain: 'PLACEHOLDER', status: 'AWAITING_VERIFIED_METRICS', desc: 'System entry locked. This position is explicitly reserved as a placeholder for a future verified student chapter project outcome.' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeDept, setActiveDept] = useState(modulesData[0]);
  const [expandedProj, setExpandedProj] = useState(null);
  const [eggCount, setEggCount] = useState(0);
  const [triggerEgg, setTriggerEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'departments', 'projects', 'events', 'community', 'contact'];
      let current = 'hero';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.getBoundingClientRect().top <= 250) {
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
      
      {/* Edge Viewport Measurement Rules */}
      <div className="fixed top-0 left-0 right-0 h-3 bg-black z-50 border-b border-cmd-surface-brd overflow-hidden">
        <div className="w-full h-full ruler-x opacity-40"></div>
      </div>
      <div className="fixed top-3 bottom-0 left-0 w-3 bg-black z-50 border-r border-cmd-surface-brd overflow-hidden hidden md:block">
        <div className="w-full h-full ruler-y opacity-40"></div>
      </div>

      {/* Floating Arm Diagnostic HUD */}
      <div className="fixed bottom-6 right-6 z-40 bg-black/90 border border-cmd-surface-brd p-3 hidden md:flex flex-col items-center w-32 font-mono">
        <div className="text-[8px] text-cmd-muted uppercase tracking-wider mb-1">ARM_POSE_FEED</div>
        <RoboticArm activeSection={activeSection} isPersistent={true} />
        <div className="text-[9px] text-cmd-amber mt-1 uppercase tracking-tight font-bold">[ {activeSection.toUpperCase()} ]</div>
      </div>

      {/* Main Command Header Menu */}
      <header className="sticky top-3 bg-cmd-bg/95 border-b border-cmd-surface-brd z-40 font-mono px-4 lg:px-8 py-4 ml-0 md:ml-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleBeaconClick} 
              className="w-2.5 h-2.5 bg-cmd-amber focus-visible:ring-2 focus-visible:ring-cmd-amber focus:outline-none motion-safe:animate-pulse cursor-pointer"
              aria-label="Diagnostic anchor node link"
            ></button>
            <span className="text-xs font-bold tracking-widest text-cmd-amber uppercase">IEEE RAS VITCC</span>
          </div>
          <nav className="hidden lg:flex space-x-6 text-[11px] uppercase tracking-widest text-cmd-muted">
            <a href="#about" className="hover:text-cmd-amber focus:outline-none transition-colors">01 About</a>
            <a href="#departments" className="hover:text-cmd-amber focus:outline-none transition-colors">02 Depts</a>
            <a href="#projects" className="hover:text-cmd-amber focus:outline-none transition-colors">03 Projects</a>
            <a href="#events" className="hover:text-cmd-amber focus:outline-none transition-colors">04 Events</a>
            <a href="#community" className="hover:text-cmd-amber focus:outline-none transition-colors">05 Comm</a>
            <a href="#contact" className="hover:text-cmd-amber focus:outline-none transition-colors">06 Contact</a>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-32 pl-4 md:pl-12">
        
        {/* Core Control Hero Module */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center pt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="font-mono text-xs text-cmd-amber tracking-widest uppercase">// SYSTEM MAIN ENGINE STAGE</div>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none text-cmd-text">
              Aspire.<br />Create.<br /><span className="text-cmd-amber">Automate.</span>
            </h1>
          </div>
          <div className="bg-cmd-surface border border-cmd-surface-brd p-8 flex flex-col items-center justify-center relative min-h-[320px]">
            <div className="absolute top-3 left-3 font-mono text-[9px] text-cmd-muted">SYS_SCHEMATIC_VIEWPORT</div>
            <RoboticArm activeSection={activeSection} isPersistent={false} />
          </div>
        </section>

        {/* 01 About Section */}
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

        {/* 02 Departments Section */}
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
                  className={`text-left p-3 text-xs uppercase tracking-wider transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-cmd-amber focus:outline-none ${
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
              <div className="absolute top-2 right-4 text-[9px] text-cmd-muted">CONSOLE_STREAM</div>
              <div className="text-xs text-cmd-amber uppercase tracking-wider mb-4">// RECRUITMENT POSTER BREAKDOWN</div>
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

        {/* 03 Expandable Project Lab */}
        <section id="projects" className="border-t border-cmd-surface-brd pt-16 space-y-8">
          <div className="font-mono">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">03 Expandable Project Lab</h2>
          </div>
          <div className="space-y-3 font-mono">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-cmd-surface border border-cmd-surface-brd p-4">
                <div 
                  onClick={() => setExpandedProj(expandedProj === project.id ? null : project.id)}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer text-xs space-y-2 sm:space-y-0 select-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-cmd-amber font-bold">{project.id}</span>
                    <span className="text-cmd-text uppercase">{project.title}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-cmd-muted hidden md:inline">DOMAIN: {project.domain}</span>
                    <span className={`px-2 py-0.5 text-[10px] ${project.id.includes('PLACEHOLDER') ? 'border border-dashed border-cmd-muted text-cmd-muted' : 'bg-cmd-amber/10 border border-cmd-amber/30 text-cmd-amber'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                {expandedProj === project.id && (
                  <div className="mt-4 pt-4 border-t border-cmd-surface-brd text-sm text-cmd-muted">
                    {project.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 04 Activity Log Timeline */}
        <section id="events" className="border-t border-cmd-surface-brd pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="font-mono">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">04 Activity Log</h2>
          </div>
          <div className="lg:col-span-2 border-l border-cmd-surface-brd pl-6 space-y-8 font-mono">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-2 h-2 bg-cmd-amber rounded-full"></div>
              <h3 className="text-sm text-cmd-text font-bold">TechnoVIT Festival</h3>
              <p className="text-xs text-cmd-muted mt-1">Flagship technical festival featuring robotics workshops and competitions.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-2 h-2 bg-cmd-amber rounded-full"></div>
              <h3 className="text-sm text-cmd-text font-bold">RASCade Hackathon</h3>
              <p className="text-xs text-cmd-muted mt-1">A chapter-orchestrated 36-hour hackathon environment.</p>
            </div>
          </div>
        </section>

        {/* 05 Community Section */}
        <section id="community" className="border-t border-cmd-surface-brd pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="font-mono">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">05 Community</h2>
          </div>
          <div className="lg:col-span-2 font-mono text-sm text-cmd-muted leading-relaxed">
             <p>Join our thriving community of robotics enthusiasts, developers, and engineers. We collaborate on open-source projects, host peer-to-peer learning sessions, and bridge the gap between academic theory and industry practice.</p>
          </div>
        </section>

        {/* 06 Contact Section */}
        <section id="contact" className="border-t border-cmd-surface-brd pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cmd-amber">06 Registry &amp; Contact</h2>
          </div>
          <div className="lg:col-span-2 space-y-6 text-xs uppercase text-cmd-muted">
            <div className="bg-cmd-surface border border-cmd-surface-brd p-6 space-y-2">
              <div><span className="text-cmd-amber font-bold">FOUNDED INAUGURATED:</span> 7 August 2018</div>
              <div><span className="text-cmd-amber font-bold">FACULTY COORDINATOR:</span> Dr. Suchetha M</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="mailto:ieeerasvitchennai@gmail.com" className="flex items-center justify-between bg-cmd-surface border border-cmd-surface-brd p-4 normal-case hover:border-cmd-amber/40 transition-colors">
                <span className="lowercase">ieeerasvitchennai@gmail.com</span>
                <span className="text-cmd-amber">↗</span>
              </a>
              <a href="https://instagram.com/ieeerasvitc" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-cmd-surface border border-cmd-surface-brd p-4 hover:border-cmd-amber/40 transition-colors">
                <span>@ieeerasvitc</span>
                <span className="text-cmd-amber">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Hidden Diagnostic Terminal Overlay Module Layer */}
      {triggerEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6" onClick={() => setTriggerEgg(false)}>
          <div className="w-full max-w-md bg-cmd-surface border border-cmd-amber/40 p-6 font-mono text-xs space-y-2" onClick={(e) => e.stopPropagation()}>
            <div className="text-cmd-amber font-bold uppercase tracking-widest mb-2">// SECURITY DIAGNOSTIC TRIGGERED //</div>
            <div className="text-cmd-text space-y-1">
              <div>[LOG] CORE RUNTIME INITIALIZATION: OK</div>
              <div>[NODE] IEEE RAS / VIT CHENNAI STUDENT CHAPTER</div>
              <div>[DEPT] SOFTWARE / WEB DEVELOPMENT DEPARTMENT</div>
              <div>[AUTH] SECURE DIAGNOSTIC DEPLOYMENT COMPLETED.</div>
              <div>[STATUS] SYSTEMS RUNNING STABLE. READY FOR GRADE EVALUATION.</div>
            </div>
            <button onClick={() => setTriggerEgg(false)} className="w-full bg-cmd-amber text-black py-2 text-xs uppercase font-bold tracking-wider hover:bg-cmd-amber/90 transition-colors cursor-pointer mt-4">
              [ DISMISS DIAGNOSTICS ]
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-cmd-surface-brd font-mono text-[10px] text-cmd-muted px-4 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 max-w-7xl mx-auto ml-0 md:ml-12">
        <span>IEEE RAS VITCC // CORE REDIRECTIONS:</span>
        <div className="flex gap-4">
          <a href="https://edu.ieee.org/in-rasvitcc/" target="_blank" rel="noreferrer" className="hover:text-cmd-amber">OFFICIAL_PAGE ↗</a>
        </div>
      </footer>
    </div>
  );
}