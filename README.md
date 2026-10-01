# N Charan Sai — Personal Portfolio Website

A modern, high-performance, developer-centric portfolio website built with **React (Vite)**, **Tailwind CSS**, and **Lucide React** icons. Designed with a dark developer aesthetic, glassmorphic surfaces, subtle cyan/blue accents, and an interactive HTML5 neural network canvas.

---

## 🚀 Features

- **Interactive Neural Network Canvas**: Canvas 2D particle constellation with mouse proximity repulsion and synaptic connectivity in the Hero section.
- **Glassmorphism Theme**: Obsidian backdrop (`#080c14`), frosted glass cards (`backdrop-blur-md`), cyan glows, and smooth responsive typography.
- **Modular Data Architecture**: All personal, educational, project, skill, and certification details are managed in `src/data/portfolioData.js`.
- **Dedicated DRDO Timeline**: Highlights both research internships at **DRDL - DRDO, Hyderabad** (Agentic AI with MCP & Thermal Human Detection with YOLOv7).
- **Featured Projects**: Filterable project gallery with IEEE paper publication badges, architecture highlights, and repository links.
- **Categorized Skills**: Interactive tabbed filtering with instant real-time search across Programming, AI/ML, Backend, Databases, Cloud & DevOps, and Core CS.
- **Validated Credentials & Honors**: Spotlights AWS, MongoDB, SAP, and Oracle certifications, along with SRMJEE Rank 130 scholarship and hackathon victories.
- **Interactive Contact Form**: Client-state driven with quick copy-to-clipboard for Email & Phone and instant email client dispatch.
- **SEO & Accessibility Optimized**: Semantic HTML5, comprehensive Open Graph and Twitter card meta tags.

---

## 📁 Project Structure

```
charan-portfolio/
├── index.html                   # HTML entry point with SEO & Open Graph meta tags
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Custom dark theme, fonts, animations & colors
├── postcss.config.js            # PostCSS Tailwind and Autoprefixer config
├── public/
│   ├── favicon.svg              # Custom "CS" gradient monogram favicon
│   └── resume.pdf               # Place your actual resume PDF here
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application structure
│   ├── index.css                # Tailwind directives, fonts, glassmorphism utilities
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content
│   └── components/
│       ├── Navbar.jsx           # Glassmorphic navbar with mobile drawer
│       ├── HeroCanvas.jsx       # Interactive neural constellation canvas
│       ├── Hero.jsx             # Hero section with DRDO badge & CTAs
│       ├── About.jsx            # Engineering background & personal hobbies
│       ├── Skills.jsx           # Filterable categorized skills & search
│       ├── Experience.jsx       # DRDO research internship timeline
│       ├── Projects.jsx         # Categorized projects with IEEE highlight
│       ├── Certifications.jsx   # Industry credential cards
│       ├── Achievements.jsx     # Hackathons, publications & scholarships
│       ├── Education.jsx        # SRM University & Narayana Junior College
│       ├── Contact.jsx          # Contact cards & interactive form
│       └── Footer.jsx           # Scroll-to-top & copyright footer
└── README.md                    # Setup and customization guide
```

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or later recommended) and **npm** installed on your system.

### 2. Install Dependencies
Navigate into the project directory and run:
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```
The output will be placed in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## ⚙️ How to Customize Your Details

All profile content is cleanly isolated in `src/data/portfolioData.js`:

1. **Social URLs & Contact Info**:
   Open `src/data/portfolioData.js` and modify the `personalData` object:
   ```javascript
   export const personalData = {
     name: "N Charan Sai",
     email: "charans.nallaguntla@gmail.com",
     phone: "+91 9440940000",
     github: "https://github.com/CHARANSAI1919",
     linkedin: "https://www.linkedin.com/in/nallaguntla-charan-sai-765852287/",
     // ...
   };
   ```

2. **Resume PDF**:
   Replace the placeholder PDF in:
   ```
   public/resume.pdf
   ```
   All "Download Resume" buttons across the Navbar and Hero will automatically serve this file.

3. **Projects & Repositories**:
   In `src/data/portfolioData.js`, update the `projectsData` array with direct repository links or live deployment URLs:
   ```javascript
   {
     id: "smart-warranty",
     title: "Smart Warranty & Purchase Manager",
     githubUrl: "https://github.com/CHARANSAI1919/your-repo-name",
     liveUrl: "https://your-demo-url.com", // or null
     // ...
   }
   ```

4. **Contact Form Backend Integration**:
   The contact form in `src/components/Contact.jsx` currently triggers a seamless user confirmation and opens a prefilled email client. To connect a service like **Formspree** or **EmailJS**, simply update the `handleSubmit` function in `src/components/Contact.jsx`.
