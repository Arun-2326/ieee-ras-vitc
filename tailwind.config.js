/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: '#0f0f13',       // Dark iron panel
          surface: '#16161f',  // Machinery box surface
          orange: '#ff6b00',   // Warning high-vis orange
          amber: '#ffb300',    // Secondary alert yellow
          text: '#e2e8f0',     // Steel white text
          muted: '#64748b'     // Weathered metal labeling
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}
