import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-lab-orange bg-lab-surface/95 backdrop-blur-sm sticky top-0 z-50 px-4 sm:px-8 py-4 font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-lab-orange animate-pulse"></div>
          <div>
            <span className="text-sm font-bold tracking-widest text-lab-orange">IEEE RAS</span>
            <span className="text-xs text-lab-muted hidden sm:inline sm:ml-2 border-l border-lab-muted pl-2">VIT CHENNAI</span>
          </div>
        </div>

        {/* Unique Feature: Active Node Status Indicator */}
        <div className="hidden md:flex items-center space-x-2 bg-black/50 px-3 py-1 border border-lab-muted/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-green-400">SYS_NODE: ACTIVE_RUNNING</span>
        </div>

        <div className="hidden md:flex space-x-6 text-xs uppercase tracking-widest">
          <a href="#about" className="hover:text-lab-orange transition-all">01// Mission</a>
          <a href="#departments" className="hover:text-lab-orange transition-all">02// Domains</a>
          <a href="#history" className="hover:text-lab-orange transition-all">03// Timeline</a>
          <a href="#events" className="hover:text-lab-orange transition-all">04// Logs</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-lab-orange text-xs">
          {isOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-lab-muted/20 flex flex-col space-y-3 text-xs uppercase tracking-widest bg-lab-surface p-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-lab-orange">01// Mission</a>
          <a href="#departments" onClick={() => setIsOpen(false)} className="hover:text-lab-orange">02// Domains</a>
          <a href="#history" onClick={() => setIsOpen(false)} className="hover:text-lab-orange">03// Timeline</a>
          <a href="#events" onClick={() => setIsOpen(false)} className="hover:text-lab-orange">04// Logs</a>
        </div>
      )}
    </nav>
  );
}
