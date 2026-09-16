import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="py-12 border-b-2 border-lab-muted/20 font-mono">
      {/* High-visibility warning alert line */}
      <div className="bg-stripes h-4 w-full bg-lab-orange/10 border border-lab-orange/30 mb-12 relative overflow-hidden flex items-center justify-between px-4">
        <span className="text-[9px] uppercase tracking-widest text-lab-orange animate-pulse">⚠️ WARN_PROPULSION_LAB: AUTHORIZED_ACCESS_ONLY</span>
        <span className="text-[9px] uppercase tracking-widest text-lab-orange hidden sm:inline">LN_QTY // 0x48F7</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Massive Dynamic Tagline Callout */}
        <div className="lg:col-span-2 space-y-6">
          <div className="text-xs uppercase text-lab-muted tracking-widest">// MANIFEST_SLOGAN</div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase text-lab-text">
            <span className="block hover:text-lab-orange transition-colors duration-200 cursor-default">[ ASPIRE ]</span>
            <span className="block hover:text-lab-orange transition-colors duration-200 cursor-default">[ CREATE ]</span>
            <span className="block text-lab-orange transition-all duration-200">[ AUTOMATE ]</span>
          </h1>

          {/* Official Chapter Mission */}
          <div className="bg-lab-surface border border-lab-muted/20 p-6 relative group">
            <div className="absolute top-0 right-0 bg-lab-orange text-black px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest">
              MISSION_STATEMENT
            </div>
            <p className="text-sm leading-relaxed text-lab-text pt-2">
              "To provide an environment for students to grow and nurture their talents under the guidance of IEEE and industry experts, keeping members current with emerging technology and helping their research/projects reach a wider audience."
            </p>
          </div>
        </div>

        {/* Parent Association Directive Box */}
        <div className="bg-black border-2 border-lab-orange/40 p-6 space-y-4 shadow-xl">
          <div className="text-xs text-lab-orange font-bold uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 bg-lab-orange"></span>
            <span>PARENT_SOCIETY_PURPOSE</span>
          </div>
          <div className="text-xs text-lab-muted leading-relaxed uppercase space-y-2">
            <p>// INTENT.01:</p>
            <p className="text-lab-text pl-4">Advancing the theory and practice of robotics and automation engineering and science.</p>
            <p>// INTENT.02:</p>
            <p className="text-lab-text pl-4">Maintaining high professional standards among members.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
