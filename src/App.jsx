import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoboticArm from './components/RoboticArm';

const modulesData = [
  { 
    id: 'software', 
    num: '01',
    label: 'Software', 
    icon: '⚡',
    desc: 'Engineering intelligent algorithms, vision systems, modern web control interfaces, and autonomous agent backends.',
    items: ['AI / Machine Learning', 'Full-Stack Web Development', 'UI / UX Design Architecture'] 
  },
  { 
    id: 'projects', 
    num: '02',
    label: 'Projects', 
    icon: '⚙️',
    desc: 'Architecting physical robotic hardware, micro-controller firmware, telemetry sensors, and rapid mechatronic prototypes.',
    items: ['Embedded Systems', 'Robotics and Automation', 'R&D / Physical Prototyping'] 
  },
  { 
    id: 'operations', 
    num: '03',
    label: 'Operations', 
    icon: '🛰️',
    desc: 'Managing chapter logistics, external partnerships, corporate sponsorship pipelines, and university technical hackathons.',
    items: ['Event Management', 'Industry Outreach', 'Sponsorship Logistics'] 
  },
  { 
    id: 'creatives', 
    num: '04',
    label: 'Creatives', 
    icon: '🎨',
    desc: 'Crafting the visual identity, cinematic motion design, technical branding, and digital media presence of IEEE RAS.',
    items: ['Graphic & Blueprint Design', 'Social Media Media Campaigns', 'Cinematic Video Editing'] 
  }
];

const leadershipData = {
  faculty: [
    { 
      name: 'Dr. D. Vydeki', 
      role: 'Faculty Coordinator', 
      school: 'School of Electronics Engineering (SENSE)', 
      dept: 'VIT Chennai' 
    },
    { 
      name: 'Dr. C. Umayal', 
      role: 'Faculty Coordinator', 
      school: 'School of Electrical Engineering (SELECT)', 
      dept: 'VIT Chennai' 
    },
    { 
      name: 'Dr. Suchetha M', 
      role: 'Founding Faculty Coordinator', 
      school: 'School of Electronics Engineering (SENSE)', 
      dept: 'Inaugural Chapter Mentor' 
    }
  ],
  studentBoard: [
    { 
      name: 'Derrick S Richard', 
      role: 'Chairperson', 
      tenure: 'August 2025 – Present', 
      linkedin: 'https://www.linkedin.com/in/derrick-s-richard',
      badge: 'EXECUTIVE_CHAIR',
      desc: 'Leading chapter-wide strategic initiatives, IEEE global compliance, cross-department alignment, and inter-collegiate technical symposiums.'
    },
    { 
      name: 'Nikhil Bansal', 
      role: 'Data Science Co-Lead', 
      tenure: '2024 – 2026', 
      linkedin: 'https://www.linkedin.com/in/nikhil-bansal-v-a5a66728b',
      badge: 'TECHNICAL_LEAD',
      desc: 'Directing machine learning workflows, perception algorithms, edge AI integrations, and technical hackathon mentoring.'
    },
    { 
      name: 'Koushik Varma', 
      role: 'Operations & Management Lead', 
      tenure: 'February 2024 – Present', 
      linkedin: 'https://www.linkedin.com/in/koushik-varma-32019428b',
      badge: 'OPERATIONS_HEAD',
      desc: 'Supervising event logistics, corporate sponsor liaison, budget deployment, and annual TechnoVIT technical challenge hosting.'
    }
  ]
};

const projectsData = [
  { 
    id: 'RAS_PRJ_01', 
    title: 'RASCade Core Frame', 
    domain: 'Software / Web Development', 
    status: 'VERIFIED_COMPLETED', 
    statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    summary: '36-hour rapid prototyping & software building hackathon',
    desc: 'A chapter-orchestrated 36-hour hackathon environment focused on software building operations, rapid automation development, and continuous telemetry pipelines.' 
  },
  { 
    id: 'RAS_PRJ_02', 
    title: 'RoverX Robotics Chassis', 
    domain: 'Projects / Hardware', 
    status: 'VERIFIED_COMPLETED', 
    statusColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    summary: 'Hardware mechanics & physical assembly workshop',
    desc: 'A physical hardware mechanics and assembly workshop orchestrated during the TechnoVIT national technical festival, covering kinematic drivetrains and payload servos.' 
  },
  { 
    id: 'RAS_PRJ_03', 
    title: 'RasPi Fusion & Intelligence Edge ML', 
    domain: 'Embedded AI / Edge Computing', 
    status: 'FLAGSHIP_CHALLENGE', 
    statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    summary: 'Single-board edge computer sensor integration & neural vision',
    desc: 'Campus challenge pairing Raspberry Pi embedded units with neural inferencing edge accelerators for low-latency autonomous vehicle navigation.' 
  },
  { 
    id: 'RAS_PRJ_PLACEHOLDER', 
    title: 'Future Autonomous Research Node', 
    domain: 'R&D / Prototyping', 
    status: 'IN_DEVELOPMENT', 
    statusColor: 'text-zinc-400 border-dashed border-zinc-600 bg-zinc-800/20',
    summary: 'Reserved for upcoming student chapter autonomous robotics research',
    desc: 'System entry locked. This position is explicitly reserved for an upcoming verified student chapter research initiative in embodied artificial intelligence.' 
  }
];

const eventsData = [
  {
    title: 'TechnoVIT Festival — RoverX & RasPi Fusion',
    category: 'National Technical Festival',
    badge: 'FLAGSHIP_CAMPUS',
    desc: 'Campus-wide technical festival hosting high-intensity robotics challenges including "RasPi Fusion", "Intelligence Edge ML", and the RoverX mechanical assembly workshop.'
  },
  {
    title: 'RASCade 36-Hour Hackathon',
    category: 'Continuous Prototyping Marathon',
    badge: 'HACKATHON_CORE',
    desc: 'A high-intensity, continuous 36-hour hackathon environment focused on rapid automation, software scaling models, and embedded control prototypes.'
  },
  {
    title: 'Haxios Hackathon & "Makers Gonna Make"',
    category: 'Innovation Challenge & Demos',
    badge: 'INNOVATION_CHALLENGE',
    desc: 'Hands-on sprint where multidisciplinary student squads design, build, and demonstrate functional automation proofs-of-concept to industry jury panels.'
  },
  {
    title: 'IEEE Day Celebrations & Tech Battles',
    category: 'Global Society Celebration',
    badge: 'ANNUAL_SYMPOSIUM',
    desc: 'Annual celebration featuring technical robotics quizzes, engineering idea debates, guest lectures from FCA/tech leaders, and intra-college robot wars.'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeDept, setActiveDept] = useState(modulesData[0]);
  const [expandedProj, setExpandedProj] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic calculation of active calendar days since inauguration (7 August 2018)
  const foundingDate = new Date('2018-08-07');
  const daysActive = Math.max(1, Math.floor((Date.now() - foundingDate.getTime()) / (1000 * 60 * 60 * 24)));

  // Scroll tracking to update RoboticArm pose and background image
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'departments', 'leadership', 'projects', 'publications', 'events', 'contact'];
      let current = 'hero';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active background image based on current scroll section
  const getActiveBackground = () => {
    if (activeSection === 'about' || activeSection === 'departments' || activeSection === 'leadership') {
      return 'chalkboard';
    }
    if (activeSection === 'projects' || activeSection === 'publications' || activeSection === 'events') {
      return 'magazine';
    }
    return 'roboticArm'; // 'hero' and default
  };

  const currentBg = getActiveBackground();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e4e4e7] font-sans relative selection:bg-amber-400 selection:text-black overflow-x-hidden">
      
      {/* =========================================================================
          DYNAMIC CINEMATIC BACKGROUND ENGINE (Images as full-bleed backdrop)
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Background 1: High-Tech Robotic Arm Telemetry (Hero) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            currentBg === 'roboticArm' ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: "url('/telemetry-robotic-arm.jpg')" }}
        />

        {/* Background 2: Mathematical Neural & AI Chalkboard (About, Domains, Leadership) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            currentBg === 'chalkboard' ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: "url('/embodied-ai-chalkboard.jpg')" }}
        />

        {/* Background 3: Embodied AI Humanoid in Sci-Fi Corridor (Projects, Publications, Events) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            currentBg === 'magazine' ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: "url('/ram-magazine-embodied-ai.jpg')" }}
        />

        {/* Dark Vignette and Ambient Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/85 via-[#0a0a0c]/90 to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0a0a0c]/70 to-[#0a0a0c]" />
        
        {/* Subtle Sci-Fi Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* =========================================================================
          PERSISTENT ROBOTIC ARM HUD (Dynamic SVG Articulation & Joint Telemetry)
          ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-50 bg-black/85 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 hidden md:flex flex-col items-center w-36 shadow-2xl font-mono text-center hover:border-amber-400 transition-colors">
        <div className="flex items-center justify-between w-full mb-1">
          <span className="text-[8px] text-zinc-400 uppercase tracking-wider">ARM_HUD</span>
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
          </span>
        </div>
        
        {/* Dynamic Interactive SVG Robotic Arm Component */}
        <RoboticArm activeSection={activeSection} isPersistent={true} />
        
        <div className="text-[10px] text-amber-400 mt-1 uppercase tracking-tight font-bold">
          [ {activeSection.toUpperCase()} ]
        </div>
        <div className="text-[7px] text-zinc-500 uppercase mt-0.5 tracking-widest">
          POSE_LOCKED // 6-DOF
        </div>
      </div>

      {/* =========================================================================
          MODERN FLOATING NAVIGATION BAR (With Large, Clear IEEE RAS Logo)
          ========================================================================= */}
      <div className="sticky top-4 z-40 px-4 sm:px-8 max-w-7xl mx-auto">
        <header className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-3 flex justify-between items-center shadow-2xl">
          <div className="flex items-center space-x-3.5">
            {/* Prominent Large IEEE RAS Logo */}
            <a href="#hero" className="flex items-center group">
              <img 
                src="/ras-logo.jpg" 
                alt="IEEE Robotics and Automation Society Logo" 
                className="h-11 sm:h-13 w-auto object-contain bg-white rounded-xl px-2 py-1 shadow-md group-hover:scale-105 transition-transform" 
              />
            </a>
            <div>
              <span className="text-sm sm:text-base font-extrabold tracking-wider text-white uppercase block leading-tight">
                IEEE RAS <span className="text-amber-400">VIT CHENNAI</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>STUDENT CHAPTER • SENSE // EST. 2018</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5 text-xs uppercase font-mono tracking-wider text-zinc-400">
            <a href="#about" className={`hover:text-amber-400 transition-colors ${activeSection === 'about' ? 'text-amber-400 font-bold' : ''}`}>// 01 About</a>
            <a href="#departments" className={`hover:text-amber-400 transition-colors ${activeSection === 'departments' ? 'text-amber-400 font-bold' : ''}`}>// 02 Domains</a>
            <a href="#leadership" className={`hover:text-amber-400 transition-colors ${activeSection === 'leadership' ? 'text-amber-400 font-bold' : ''}`}>// 03 Leadership</a>
            <a href="#projects" className={`hover:text-amber-400 transition-colors ${activeSection === 'projects' ? 'text-amber-400 font-bold' : ''}`}>// 04 Projects</a>
            <a href="#publications" className={`hover:text-amber-400 transition-colors ${activeSection === 'publications' ? 'text-amber-400 font-bold' : ''}`}>// 05 Research</a>
            <a href="#events" className={`hover:text-amber-400 transition-colors ${activeSection === 'events' ? 'text-amber-400 font-bold' : ''}`}>// 06 Events</a>
            <a href="#contact" className={`hover:text-amber-400 transition-colors ${activeSection === 'contact' ? 'text-amber-400 font-bold' : ''}`}>// 07 Contact</a>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://linktr.ee/IEEERAS_VITC" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-400/20"
            >
              <span>Join Us</span>
              <span>↗</span>
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-white/10 text-amber-400 text-xs font-mono font-bold hover:bg-white/5 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="xl:hidden mt-2 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col space-y-2.5 font-mono text-xs uppercase tracking-wider text-zinc-400 shadow-2xl"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 01 About Chapter</a>
              <a href="#departments" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 02 Departments Matrix</a>
              <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 03 Leadership &amp; Board</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 04 Project Lab</a>
              <a href="#publications" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 05 Research &amp; Publications</a>
              <a href="#events" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 06 Activity Log</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 p-2 rounded-lg hover:bg-white/5">// 07 Registry &amp; Contact</a>
              <a 
                href="https://linktr.ee/IEEERAS_VITC" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center bg-amber-400 text-black py-2.5 rounded-xl font-bold uppercase"
              >
                Join Chapter ↗
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          MAIN PAGE SECTIONS
          ========================================================================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-32">
        
        {/* =======================================================================
            HERO SECTION (Featuring Prominent Official IEEE RAS Emblem)
            ======================================================================= */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-6 sm:pt-12">
          <div className="max-w-4xl space-y-6">
            
            {/* Prominent Emblem Showcase Card */}
            <div className="inline-flex items-center gap-4 bg-black/70 backdrop-blur-2xl border border-white/15 p-3 sm:p-4 rounded-2xl shadow-2xl">
              <img 
                src="/ras-logo.jpg" 
                alt="IEEE Robotics & Automation Society Official Logo" 
                className="h-14 sm:h-18 w-auto object-contain bg-white rounded-xl px-3 py-1 shadow-md"
              />
              <div className="pr-2">
                <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 font-bold uppercase tracking-widest block">
                  OFFICIAL STUDENT CHAPTER
                </span>
                <span className="text-sm sm:text-lg font-black text-white uppercase tracking-tight block leading-tight">
                  IEEE Robotics &amp; Automation Society
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 font-mono block">
                  VIT Chennai Student Branch • Established August 7, 2018
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none text-white">
              Aspire.<br />
              Create.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Automate.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
              Dedicated to advancing the scientific foundations, practical engineering, and societal ethics of robotics, mechatronics, and artificial intelligence for peaceful civilian progress.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                  {daysActive.toLocaleString()}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono uppercase mt-1">
                  Days Active
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  1,000+
                </div>
                <div className="text-[10px] text-zinc-400 font-mono uppercase mt-1">
                  LinkedIn Network
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  2011 / 18
                </div>
                <div className="text-[10px] text-zinc-400 font-mono uppercase mt-1">
                  Branch / Chapter Est.
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  SENSE
                </div>
                <div className="text-[10px] text-zinc-400 font-mono uppercase mt-1">
                  Parent School
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#departments" 
                className="bg-amber-400 hover:bg-amber-300 text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs font-mono transition-all shadow-lg hover:shadow-amber-400/20"
              >
                Explore Departments ↓
              </a>
              <a 
                href="#leadership" 
                className="bg-white/10 hover:bg-white/15 text-white border border-white/15 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs font-mono transition-all backdrop-blur-sm"
              >
                Executive Board 2025–26 ↗
              </a>
            </div>
          </div>
        </section>

        {/* =======================================================================
            01 ABOUT SECTION (Heritage, Charter, Parent IEEE Branch)
            ======================================================================= */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 01 CHARTER &amp; HERITAGE</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-colors rounded-2xl p-8 space-y-6 shadow-2xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                WHAT IS IEEE RAS VIT CHENNAI?
              </div>
              <p className="text-base sm:text-lg text-white font-light leading-relaxed">
                The <strong className="text-amber-400 font-semibold">IEEE Robotics and Automation Society (RAS) Student Chapter at VIT Chennai</strong> is a technical student chapter dedicated to advancing the theory, practice, and scientific foundations of robotics and automation. It was inaugurated on <strong className="text-white font-semibold">August 7, 2018</strong>, operating under the broader IEEE Student Branch at VIT Chennai (established in 2011).
              </p>
              
              <blockquote className="text-base sm:text-xl text-zinc-200 font-light leading-relaxed italic border-l-2 border-amber-400 pl-6">
                "To provide an environment for students to grow and nurture their talents under the guidance of reputed IEEE and industrial experts, keeping members current with emerging technology and helping their research and projects reach a wider global audience."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs text-zinc-300">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                  <div className="text-amber-400 font-bold uppercase text-[10px]">GLOBAL AFFILIATION</div>
                  <div>Part of IEEE RAS Worldwide, promoting civilian robotics and ecological sustainability.</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                  <div className="text-amber-400 font-bold uppercase text-[10px]">CAMPUS RECOGNITION</div>
                  <div>Official VIT Chennai technical chapter alongside IEEE PES, IEEE SPS, and IEEE Photonics.</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-colors rounded-2xl p-6 space-y-3 shadow-2xl">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                  PARENT SOCIETY PURPOSE
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  Advancing the theory and practice of robotics and automation engineering and science, while maintaining the highest professional and ethical standards among members.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-colors rounded-2xl p-6 space-y-2.5 shadow-2xl font-mono text-xs">
                <div className="text-xs text-amber-400 uppercase tracking-wider font-bold">
                  INDEPENDENT INAUGURAL LOG
                </div>
                <div className="text-zinc-300"><strong className="text-white">Inauguration:</strong> 7 August 2018</div>
                <div className="text-zinc-300"><strong className="text-white">School:</strong> School of Electronics Engineering (SENSE)</div>
                <div className="text-zinc-300"><strong className="text-white">Chief Guest:</strong> Mr. Karthik (Fiat Chrysler Automobiles)</div>
                <div className="text-zinc-300"><strong className="text-white">Guest of Honour:</strong> Dr. Rajasekaran (Student Welfare, VITC)</div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            02 DEPARTMENTS MATRIX
            ======================================================================= */}
        <section id="departments" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 02 DEPARTMENTS MATRIX</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Department Buttons */}
            <div className="space-y-3 font-mono">
              {modulesData.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    activeDept.id === dept.id
                      ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-lg shadow-amber-400/10'
                      : 'bg-black/60 backdrop-blur-xl text-zinc-300 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-base">{dept.icon}</span>
                    <span className="text-xs uppercase tracking-wider">{dept.num} {dept.label}</span>
                  </div>
                  <span className="text-xs">{activeDept.id === dept.id ? '●' : '○'}</span>
                </button>
              ))}
            </div>

            {/* Active Department Details Card */}
            <div className="lg:col-span-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    ACTIVE WORKING WING // {activeDept.num}
                  </span>
                  <h3 className="text-2xl font-bold uppercase text-white mt-0.5">
                    {activeDept.label} Department
                  </h3>
                </div>
                <div className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-zinc-400">
                  STATUS: MOUNTED &amp; ACTIVE
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {activeDept.desc}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                  SPECIALIZED DOMAIN FOCUS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeDept.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center space-x-2.5 font-mono text-xs text-zinc-200"
                    >
                      <span className="text-amber-400 font-bold">↳</span>
                      <span className="uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            03 LEADERSHIP & EXECUTIVE BOARD (NEW SECTION)
            ======================================================================= */}
        <section id="leadership" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 03 ORGANIZATIONAL STRUCTURE &amp; LEADERSHIP</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="space-y-6">
            {/* Student Office Bearers 2025–2026 */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>ELECTED STUDENT EXECUTIVE BOARD (2025–2026)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leadershipData.studentBoard.map((member, idx) => (
                  <div 
                    key={idx}
                    className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 rounded-2xl p-6 shadow-2xl flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 uppercase">
                          {member.badge}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">{member.tenure}</span>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white uppercase group-hover:text-amber-400 transition-colors">
                          {member.name}
                        </h4>
                        <span className="text-xs font-mono text-amber-300/90">{member.role}</span>
                      </div>

                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {member.desc}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/10 mt-4">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 hover:text-white transition-colors"
                      >
                        <span>LinkedIn Profile</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Coordinators Panel */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>FACULTY COORDINATION &amp; ACADEMIC MENTORSHIP</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {leadershipData.faculty.map((fac, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1 font-mono text-xs">
                    <div className="text-white font-bold">{fac.name}</div>
                    <div className="text-amber-400 text-[11px]">{fac.role}</div>
                    <div className="text-zinc-400 text-[10px]">{fac.school}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            04 PROJECT LAB MATRIX
            ======================================================================= */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 04 PROJECT LAB &amp; TECHNICAL REPOSITORY</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="space-y-4 font-mono">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className={`bg-black/60 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 ${
                  expandedProj === project.id 
                    ? 'border-amber-400/70 shadow-xl shadow-amber-400/5' 
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div 
                  onClick={() => setExpandedProj(expandedProj === project.id ? null : project.id)}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpandedProj(expandedProj === project.id ? null : project.id);
                    }
                  }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-bold text-amber-400">{project.id}</span>
                      <h4 className="text-base font-bold uppercase text-white">{project.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 font-sans">{project.summary}</p>
                  </div>

                  <div className="flex items-center space-x-3 self-end md:self-center">
                    <span className={`text-[10px] px-3 py-1 rounded-full border font-bold ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-amber-400 font-bold">
                      {expandedProj === project.id ? '[-] COLLAPSE' : '[+] EXPAND'}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedProj === project.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 pt-4 border-t border-white/10 text-xs text-zinc-300 leading-relaxed font-sans"
                    >
                      <p className="text-sm text-zinc-200">{project.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-[10px] font-mono text-zinc-400 uppercase">
                        <div>DOMAIN: <strong className="text-white">{project.domain}</strong></div>
                        <div>NODE VERIFICATION: <strong className="text-emerald-400">PASSED</strong></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            05 EMBODIED AI & PUBLICATIONS SPOTLIGHT (Using user images)
            ======================================================================= */}
        <section id="publications" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 05 EMBODIED AI &amp; PUBLICATIONS SPOTLIGHT</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feature 1: Official IEEE RAM Magazine */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div>
                <div className="h-64 overflow-hidden relative border-b border-white/10">
                  <img 
                    src="/ram-magazine-embodied-ai.jpg" 
                    alt="IEEE Robotics & Automation Magazine - Embodied AI" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/40 text-[9px] font-mono text-amber-400 font-bold uppercase">
                    FLAGSHIP PUBLICATION
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    IEEE RAM • VOL. 33, NO. 1 • MARCH 2026
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase leading-snug group-hover:text-amber-400 transition-colors">
                    Embodied AI: Where Potential Meets Reality
                  </h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed font-sans">
                    Official IEEE RAS publication spotlighting the transition of artificial intelligence into physical locomotion, sensory feedback, and cybernetic embodiment.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href="https://www.ieee-ras.org/publications/ram" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-amber-400 hover:text-black text-white py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  <span>Explore Journal</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Feature 2: Kinematic Telemetry & Robotic Arm Manipulators */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div>
                <div className="h-64 overflow-hidden relative border-b border-white/10">
                  <img 
                    src="/telemetry-robotic-arm.jpg" 
                    alt="Kinematic Telemetry & Robotic Arm" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/40 text-[9px] font-mono text-amber-400 font-bold uppercase">
                    MANIPULATOR TELEMETRY
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    KINEMATICS &amp; SENSOR STREAMS
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase leading-snug group-hover:text-amber-400 transition-colors">
                    Multi-Axis Robotic Actuation &amp; HUD
                  </h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed font-sans">
                    Real-time angular position feedback and sensor telemetry mapped to interactive vector models and joint controllers.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href="#hero" 
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-amber-400 hover:text-black text-white py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  <span>Inspect Arm HUD</span>
                  <span>↑</span>
                </a>
              </div>
            </div>

            {/* Feature 3: Mathematical Modeling & Neural Dynamics */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div>
                <div className="h-64 overflow-hidden relative border-b border-white/10">
                  <img 
                    src="/embodied-ai-chalkboard.jpg" 
                    alt="Embodied Cognition Mathematical Models" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/40 text-[9px] font-mono text-amber-400 font-bold uppercase">
                    NEURAL &amp; FORMAL DYNAMICS
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    CONTROL THEORY &amp; DEEP MODELS
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase leading-snug group-hover:text-amber-400 transition-colors">
                    Embodied Cognition &amp; Dynamics
                  </h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed font-sans">
                    Rigorous mathematical modeling, kinematic Jacobian equations, and neural network policies that govern closed-loop robotic automation.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href="#departments" 
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-amber-400 hover:text-black text-white py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  <span>View Software Domain</span>
                  <span>↳</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            06 ACTIVITY LOG & WORKSHOPS (Expanded from Official Records)
            ======================================================================= */}
        <section id="events" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 06 FLAGSHIP ACTIVITIES &amp; CAMPUS HACKATHONS</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsData.map((evt, idx) => (
              <div 
                key={idx}
                className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-all rounded-2xl p-6 space-y-3 shadow-2xl"
              >
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-amber-400 font-bold uppercase">{evt.category}</span>
                  <span className="bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[9px] font-bold">
                    {evt.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold uppercase text-white">{evt.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">{evt.desc}</p>
              </div>
            ))}
          </div>

          {/* Digital Credential & Badgr Verification Banner */}
          <div className="bg-gradient-to-r from-amber-400/10 via-black/60 to-black/60 border border-amber-400/30 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">VERIFIABLE DIGITAL ACCREDITATION (BADGR)</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans max-w-2xl">
                IEEE RAS VIT Chennai officially issues cryptographically verifiable digital badges and certificates on Badgr to participants of our hackathons, technical workshops, and competitive challenges.
              </p>
            </div>
            <a 
              href="https://badgr.com/public/issuers/3zOGysYoRTmLUXAcMOZ3Hg" 
              target="_blank" 
              rel="noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-black px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-colors"
            >
              Verify Badges ↗
            </a>
          </div>
        </section>

        {/* =======================================================================
            07 REGISTRY & CONTACT DISPATCH (Institutional Details)
            ======================================================================= */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">// 07 REGISTRY &amp; OFFICIAL CHANNELS</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-2">
                <span className="text-zinc-500 uppercase block tracking-wider text-[10px]">// CAMPUS DISPATCH</span>
                <div className="text-white font-bold">IEEE RAS Student Chapter</div>
                <div className="text-zinc-400">School of Electronics Engineering (SENSE)</div>
                <div className="text-zinc-400 leading-relaxed">
                  VIT Chennai Campus, Vandalur–Kelambakkam Road, Chennai – 600127, Tamil Nadu, India
                </div>
                <div className="text-zinc-400 pt-1">
                  Phone: <a href="tel:+914439931026" className="text-amber-400 hover:underline">+91 44 3993 1026</a>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-zinc-500 uppercase block tracking-wider text-[10px]">// OFFICIAL COMMUNICATION</span>
                <div>
                  <span className="text-zinc-500 block text-[10px]">Chapter Email:</span>
                  <a href="mailto:ieeerasvitchennai@gmail.com" className="text-amber-400 hover:underline block truncate">
                    ieeerasvitchennai@gmail.com ↗
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">Institutional Dean Office:</span>
                  <a href="mailto:deancc.sense@vit.ac.in" className="text-zinc-300 hover:text-amber-400 hover:underline block truncate">
                    deancc.sense@vit.ac.in ↗
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">Social Follow:</span>
                  <a href="https://instagram.com/ieeerasvitc" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline block">
                    @ieeerasvitc (Instagram) ↗
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-zinc-500 uppercase block tracking-wider text-[10px]">// VERIFIED REPOSITORIES</span>
                <a 
                  href="https://www.linkedin.com/company/ieeerasvitc" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-amber-400 hover:underline block"
                >
                  LinkedIn (1,000+ Followers) ↗
                </a>
                <a 
                  href="https://ieeerasvitc.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-white block"
                >
                  Production Portal (Vercel) ↗
                </a>
                <a 
                  href="https://badgr.com/public/issuers/3zOGysYoRTmLUXAcMOZ3Hg" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-white block"
                >
                  Badgr Digital Credentials Profile ↗
                </a>
                <a 
                  href="https://chennaievents.vit.ac.in/technovit/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-white block"
                >
                  TechnoVIT Events Directory ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md mt-20 py-8 px-4 sm:px-8 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2.5">
            <img 
              src="/ras-logo.jpg" 
              alt="IEEE RAS Logo" 
              className="h-6 w-auto object-contain bg-white rounded px-1"
            />
            <span>IEEE RAS VIT CHENNAI // ADVANCING THEORY &amp; PRACTICE OF ROBOTICS</span>
          </div>
          <div>
            © {new Date().getFullYear()} IEEE RAS VITCC • Under IEEE Student Branch VIT Chennai (Est. 2011)
          </div>
        </div>
      </footer>
    </div>
  );
}