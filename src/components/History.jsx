import React, { useState, useEffect } from 'react';

export default function History() {
  const [daysActive, setDaysActive] = useState(0);

  useEffect(() => {
    // Inauguration date: August 7, 2018
    const foundingDate = new Date('2018-08-07');
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - foundingDate.getTime();
    // Convert milliseconds to total calendar days
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDaysActive(totalDays);
  }, []);

  return (
    <section id="history" className="py-16 font-mono">
      {/* Visual Anchor Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
        
        {/* Unique Feature: Live Operational Day Calculator */}
        <div className="bg-black border-2 border-lab-orange p-6 text-center lg:col-span-1 shadow-xl">
          <div className="text-[10px] text-lab-muted uppercase tracking-widest mb-2">// TIME_IN_OPERATION</div>
          <div className="text-4xl font-extrabold text-lab-orange tracking-tight font-sans">
            {daysActive.toLocaleString()}
          </div>
          <div className="text-[10px] text-lab-text uppercase tracking-widest mt-2 font-mono">DAYS SINCE INAUGURATION</div>
          <div className="w-full bg-lab-muted/20 h-1 mt-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-lab-orange h-full w-2/3 animate-pulse"></div>
          </div>
        </div>

        {/* Founding Registry Records */}
        <div className="lg:col-span-2 bg-lab-surface border border-lab-muted/20 p-6 relative">
          <div className="absolute top-0 right-0 bg-lab-muted text-black px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest">
            REGISTRY: INAUGURATION_LOG
          </div>
          <h3 className="text-sm font-bold text-lab-orange uppercase tracking-wider mb-4">// DEPLOYMENT_MANIFEST [07.AUG.2018]</h3>
          <div className="text-xs space-y-3 leading-relaxed text-lab-text">
            <p><span className="text-lab-orange font-bold">STAMP:</span> Chapter officially operationalized under a VIT Chennai initiative-grant decree.</p>
            <p><span className="text-lab-orange font-bold">CHIEF GUEST:</span> Mr. Karthik (Project Head, Fiat Chrysler Automobiles Pvt Ltd).</p>
            <p><span className="text-lab-orange font-bold">GUEST OF HONOUR:</span> Dr. Rajasekaran (Assistant Director, Student Welfare, VIT Chennai).</p>
            <p><span className="text-lab-orange font-bold">FACULTY COORDINATOR:</span> Dr. Suchetha M, Associate Professor, School of Electronics Engineering (SENSE).</p>
          </div>
        </div>
      </div>

      {/* Flagship Activities Log */}
      <div id="events" className="border-t border-dashed border-lab-muted/30 pt-16">
        <div className="text-xs uppercase text-lab-muted tracking-widest mb-2">// HISTORICAL_VERIFIED_ACTIVITY</div>
        <h2 className="text-2xl font-bold uppercase tracking-wider text-lab-orange mb-8">[ VERIFIED_FLAGSHIP_LOGS ]</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Activity Card 1: RASCade */}
          <div className="bg-lab-surface border border-lab-muted/20 p-6 relative group hover:border-lab-orange/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] text-lab-orange font-bold uppercase tracking-widest">// EVENT.01 // COMPLETED</span>
              <span className="text-[10px] text-lab-muted bg-black px-2 py-0.5 border border-lab-muted/20">36-HOUR TIMEBOX</span>
            </div>
            <h4 className="text-lg font-bold uppercase text-lab-text tracking-wide mb-3">RASCade Hackathon</h4>
            <p className="text-xs text-lab-muted leading-relaxed uppercase">
              A high-intensity, continuous 36-hour hackathon engineered by the student chapter focusing on rapid prototyping, hardware integration, and software scaling models.
            </p>
          </div>

          {/* Activity Card 2: RoverX 2025 */}
          <div className="bg-lab-surface border border-lab-muted/20 p-6 relative group hover:border-lab-orange/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] text-lab-orange font-bold uppercase tracking-widest">// EVENT.02 // ARCHIVED</span>
              <span className="text-[10px] text-lab-muted bg-black px-2 py-0.5 border border-lab-muted/20">OCT 31 – NOV 2</span>
            </div>
            <h4 className="text-lg font-bold uppercase text-lab-text tracking-wide mb-3">RoverX 2025 — Hardware Workshop</h4>
            <p className="text-xs text-lab-muted leading-relaxed uppercase">
              A specialized physical assembly and mechanics workshop orchestrated as part of TechnoVIT, VIT Chennai's national-level technical festival.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
