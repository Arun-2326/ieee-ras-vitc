# ⚙️ IEEE RAS VITC - Command Center Portal

**Software & Web Development Department Task Submission**

An engineered, blueprint-style web application developed for the IEEE Robotics and Automation Society (RAS) VIT Chennai Student Chapter. This project serves as a dynamic, interactive portfolio and recruitment node, strictly adhering to the architectural and data-sincerity guidelines provided by the department.

---

## 🛠️ Technical Stack & Architecture

This platform was built with modern performance and fluid interactivity in mind:

*   **Core Engine:** React 19 + Vite
*   **Styling & UI:** Tailwind CSS v4 (Custom Theme Setup)
*   **Animation Physics:** Framer Motion
*   **Typography:** System UI & Monospace Technical Fonts
*   **Linting & Standards:** ESLint

---

## 🚀 Key Engineered Features

### 1. Dynamic SVG Articulation (Robotic Arm HUD)
A custom-built, vector-drawn robotic arm component (`RoboticArm.jsx`) sits in the viewport HUD. Instead of looping an idle animation, it programmatically calculates joint angles (Base, Shoulder, Elbow, Wrist) and articulates its physical pose dynamically based on the user's active scroll section.

### 2. Blueprint Aesthetic & Viewport Metrics
The user interface avoids stock templates and generic glassmorphism. Instead, it utilizes a strict technical color palette (Dark Iron `#0a0a0c` & High-Vis Amber `#ffb300`). The viewport is framed by programmatic CSS gradient ruler tick marks (`.ruler-x`, `.ruler-y`) to simulate a mechanical engineering workspace.

### 3. Expandable Project Lab Matrix
A state-driven project laboratory that allows users to expand individual project nodes (e.g., *RASCade Core Frame*, *RoverX*). It clearly displays Domain, Status tags, and deep-dive descriptions, handling unverified projects with a strict placeholder fallback mechanism.

### 4. Accessibility & UI/UX Compliance
*   **Keyboard Navigation:** Implemented explicit focus ring layers (`focus-visible:ring-2`) for seamless keyboard accessibility.
*   **Reduced Motion Support:** Utilizes Tailwind's `motion-safe` selectors to respect user OS-level accessibility constraints.
*   **Scroll Tracking:** Intersection observation triggers update the active navigation state and mechanical arm pose in real-time.

### 5. Hidden Diagnostic Overlay (Easter Egg)
A secure diagnostic terminal is hidden within the UI. Tapping the system beacon node 5 times sequentially overrides the main view, triggering a system evaluation log overlay specific to the Software/Web Dev wing.

---

## 📂 Data Sincerity

All foundational chapter data has been strictly validated against official records:
*   **Inauguration Date:** 7 August 2018
*   **Faculty Coordinator:** Dr. Suchetha M
*   **Official Contact:** ieeerasvitchennai@gmail.com
*   **Department Submodules:** Creatives, Operations, Projects, and Software actively mounted and logged.

---

## 💻 Local Development Setup

To initialize the command center on a local machine:

1. Clone the repository:
   git clone https://github.com/Arun-2326/ieee-ras-vitc
2. Navigate into the directory:
cd ieee-ras-vitc
3. Install dependencies:
npm install
4. Boot the Vite development server:
npm run dev