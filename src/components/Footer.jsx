export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-lab-muted mt-20 font-mono text-xs text-lab-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="text-lab-orange font-bold text-sm tracking-wider">[ CORE INSTANCE ]</div>
          <p className="text-lab-text">IEEE Robotics & Automation Society<br />VIT Chennai Student Chapter</p>
          <p className="text-[10px]">Est. August 2018 // Tamil Nadu, India</p>
        </div>

        <div className="space-y-3">
          <div className="text-lab-orange font-bold text-sm tracking-wider">[ COMM_PROTOCOLS ]</div>
          <p className="text-lab-text">Email: <a href="mailto:ieeerasvitchennai@gmail.com" className="text-lab-orange hover:underline">ieeerasvitchennai@gmail.com</a></p>
          <p className="text-lab-text">Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-lab-orange hover:underline">@ieeerasvitc</a></p>
        </div>

        <div className="space-y-3">
          <div className="text-lab-orange font-bold text-sm tracking-wider">[ EXTERNAL_DIRECTORIES ]</div>
          <div className="flex flex-col space-y-2">
            <a href="https://ieee.org" target="_blank" rel="noreferrer" className="bg-lab-surface p-2 border border-lab-muted/30 text-center hover:border-lab-orange text-lab-text transition-all">Official Portal ↗</a>
            <a href="https://vercel.app" target="_blank" rel="noreferrer" className="bg-lab-surface p-2 border border-lab-muted/30 text-center hover:border-lab-orange text-lab-text transition-all">Recruitment Site ↗</a>
          </div>
        </div>
      </div>
      <div className="border-t border-lab-muted/10 bg-lab-bg py-4 text-center text-[10px] tracking-widest uppercase">
        © {new Date().getFullYear()} IEEE RAS VITCC // PROTOCOL DEPLOYED SUCCESSFULLY
      </div>
    </footer>
  );
}
