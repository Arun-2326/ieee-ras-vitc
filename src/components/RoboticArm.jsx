import React from 'react';
import { motion } from 'framer-motion';

export default function RoboticArm({ activeSection, isPersistent = false }) {
  // Mechanical configurations mapped per section index matrices
  const poses = {
    hero:        { base: 0,   shoulder: -25, elbow: 55,  wrist: 15 },
    about:       { base: 15,  shoulder: -45, elbow: 90,  wrist: -30 },
    departments: { base: -20, shoulder: 10,  elbow: -40, wrist: 45 },
    projects:    { base: 45,  shoulder: -60, elbow: 110, wrist: -45 },
    events:      { base: -10, shoulder: -15, elbow: 30,  wrist: 0 },
    contact:     { base: 0,   shoulder: -35, elbow: 75,  wrist: 20 }
  };

  const currentPose = poses[activeSection] || poses.hero;

  return (
    <div className={`transition-all duration-500 ${isPersistent ? 'w-24 h-24' : 'w-full max-w-[280px] h-[280px]'}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-cmd-amber fill-none" strokeWidth="1.5" strokeLinecap="round">
        {/* Engineering Crosshair Target Grids */}
        {!isPersistent && (
          g font-size="8" font-family="monospace" className="fill-cmd-muted stroke-none opacity-40">
            <line x1="20" y1="160" x2="180" y2="160" stroke="#71717a" strokeWidth="0.5" strokeDasharray="2,4" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="#71717a" strokeWidth="0.5" strokeDasharray="2,4" />
            <circle cx="100" cy="160" r="70" stroke="#71717a" strokeWidth="0.5" strokeDasharray="4,8" />
            <text x="25" y="155">RADAR_ARC_Z01</text>
          </g>
        )}

        {/* Foundation Mechanical Platform Anchor */}
        <rect x="75" y="160" width="50" height="12" className="fill-cmd-bg stroke-cmd-amber font-bold" strokeWidth="2" />
        <line x1="60" y1="172" x2="140" y2="172" strokeWidth="2" />

        {/* Dynamic Articulating Limb Assemblage */}
        <motion.g transform={`translate(100, 160) rotate(${currentPose.base})`}>
          {/* Base Rotator Joint */}
          <circle cx="0" cy="0" r="6" className="fill-cmd-bg" />
          
          {/* Primary Lower Structural Arm Bone */}
          <motion.g transform={`rotate(${currentPose.shoulder})`}>
            <line x1="0" y1="0" x2="0" y2="-55" strokeWidth="2.5" />
            <line x1="-3" y1="-25" x2="3" y2="-25" opacity="0.5" /> {/* Structural mark */}
            
            {/* Secondary Elbow Joint */}
            <motion.g transform={`translate(0, -55) rotate(${currentPose.elbow})`}>
              <circle cx="0" cy="0" r="5" className="fill-cmd-bg" />
              
              {/* Forearm Upper Bone Segment */}
              <motion.g transform={`rotate(${currentPose.wrist})`}>
                <line x1="0" y1="0" x2="0" y2="-45" strokeWidth="1.75" />
                
                {/* End Effector Clamping Tool Assembly */}
                <g transform="translate(0, -45)">
                  <circle cx="0" cy="0" r="3.5" className="fill-cmd-bg" />
                  {/* Pneumatic Claws Layout */}
                  <path d="M -6,-10 L -2,-4 L 2,-4 L 6,-10" strokeWidth="1.5" />
                  <path d="M -4,-14 L -4,-10 M 4,-14 L 4,-10" strokeWidth="1.25" />
                </g>
              </motion.g>
            </motion.g>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
