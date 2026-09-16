import { useState } from 'react';

// Exact data structure provided as the source of truth in the assignment
const modules = [
  {
    id: 'creatives',
    label: 'Creatives',
    code: 'DEPT.01',
    items: ['Design', 'Social Media', 'Video Editing'],
  },
  {
    id: 'operations',
    label: 'Operations',
    code: 'DEPT.02',
    items: ['Event Management', 'Outreach', 'Sponsorship'],
  },
  {
    id: 'projects',
    label: 'Projects',
    code: 'DEPT.03',
    items: ['Embedded Systems', 'Robotics and Automation', 'R&D / Prototyping'],
  },
  {
    id: 'software',
    label: 'Software',
    code: 'DEPT.04',
    items: ['AI/ML', 'Web Development', 'UI/UX'],
  },
];

export default function Domains() {
  // Set the first department ('creatives') active by default
  const [activeDept, setActiveDept] = useState(modules[0]);

  return (
    <section id="departments" className="py-16 border-b-2 border-lab-muted/20 font-mono">
      <div className="text-xs uppercase text-lab-muted tracking-widest mb-6">// INTERNAL_STRUCTURE_MANIFEST</div>
      <h2 className="text-2xl font-bold uppercase tracking-wider text-lab-orange mb-8">[ DOMAIN_DEPARTMENTS_EXPLORER ]</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Department Selection Selector Column */}
        <div className="space-y-3">
          {modules.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept)}
              className={`w-full text-left p-4 border transition-all relative flex justify-between items-center select-none ${
                activeDept.id === dept.id
                  ? 'bg-lab-orange text-black border-lab-orange font-bold'
                  : 'bg-lab-surface text-lab-text border-lab-muted/20 hover:border-lab-orange/60'
              }`}
            >
              <div>
                <span className="text-[10px] block opacity-60 tracking-tight">{dept.code}</span>
                <span className="text-sm uppercase tracking-wider">{dept.label}</span>
              </div>
              <span className="text-xs font-bold">{activeDept.id === dept.id ? '>>>' : '[ ]'}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Simulated Computer Terminal Console Column */}
        <div className="lg:col-span-2 bg-black border-2 border-lab-muted/30 p-6 flex flex-col justify-between shadow-2xl relative">
          {/* Top header tabs decoration */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-lab-surface border-b border-lab-muted/20 flex items-center px-4 justify-between">
            <span className="text-[9px] text-lab-muted uppercase tracking-widest">CONSOLE_STREAM // {activeDept.code}</span>
            <div className="flex space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lab-muted/40"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-lab-muted/40"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-lab-orange/60"></span>
            </div>
          </div>

          {/* Terminal log stream outputs */}
          <div className="pt-6 space-y-4">
            <div className="text-xs text-lab-muted">
              <span>IEEE_RAS_VITCC_NODE_ROOT:~$ </span>
              <span className="text-lab-text">cat sub_domains.cfg</span>
            </div>

            <div className="bg-lab-surface/40 p-4 border border-lab-muted/10 space-y-2">
              <div className="text-[11px] text-lab-orange tracking-widest font-bold">
                // TARGET_SUBMODULES_MOUNTED:
              </div>
              <ul className="space-y-1.5 pl-4">
                {activeDept.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-lab-text flex items-center space-x-2">
                    <span className="text-lab-orange font-bold">↳ [{idx + 1}]</span>
                    <span className="uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prompt blinking footer decoration */}
          <div className="text-[11px] text-lab-muted mt-6 flex items-center space-x-1 border-t border-lab-muted/10 pt-3">
            <span className="w-2 h-2 bg-green-400 animate-pulse"></span>
            <span className="uppercase tracking-wider">READY_FOR_COMMUNITY_INPUT...</span>
          </div>
        </div>

      </div>
    </section>
  );
}
