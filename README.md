# Bryan Mamuyac — Personal Portfolio

A personal portfolio website built to showcase my work as a Full Stack Developer and Data Analyst.
Designed with a glassmorphism aesthetic, dark and light mode support, animated data visualizations,
and an integrated contact system — deployed live on Vercel.

**Live Site:** [bryanmamuyac.vercel.app](https://bryanmamuyac.vercel.app)  
**GitHub:** [github.com/Bryan-Mamuyac](https://github.com/Bryan-Mamuyac)  
**LinkedIn:** [linkedin.com/in/bryan-mamuyac-jr-2648543b2](https://www.linkedin.com/in/bryan-mamuyac-jr-2648543b2/)

---

## Overview

This portfolio serves as a professional digital presence documenting my skills, projects,
internship experience, and career direction in both software development and data analytics.
It is built entirely as a single-page React application with no UI component library dependencies —
all components, charts, animations, and layouts are hand-crafted.

---

## Features

- Glassmorphism design system with CSS custom properties for full theme control
- Dark mode and light mode with persistent preference via localStorage
- Animated typewriter effect on the hero section
- Infinite horizontal marquee showcasing technology icons across two independent rows
- Scroll-triggered animations using the Intersection Observer API
- Custom SVG data visualizations — line chart, donut chart, and horizontal bar chart
- Animated KPI counters in the Analytics section
- Fully functional contact form integrated with EmailJS — no backend required
- Resume download button serving a local PDF file
- Cursor glow effect that follows mouse position
- Back-to-top scroll button
- Responsive layout for mobile, tablet, and desktop
- Social links — GitHub, LinkedIn, Facebook, Instagram, X

---

## Sections

| Section | Description |
|---|---|
| Hero | Full-screen landing with profile photo, typewriter roles, and social links |
| About | Bio, quick facts, stat cards, and career path cards with SVG icons |
| Skills | Tabbed proficiency bars and two infinite-scroll technology marquees |
| Analytics | Live-animated charts — KPI cards, line chart, donut chart, bar chart |
| Projects | Filterable project cards with GitHub links and tech stack badges |
| Experience | Internship timeline, education, leadership activities, and seminars |
| Contact | EmailJS-powered contact form with social icons and resume download |

---

## Technology Stack

### Frontend Framework

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | Component-based UI framework |
| Vite | 5.3.4 | Build tool and development server |
| JavaScript ES2022 | — | Primary programming language |

### Styling

| Technology | Purpose |
|---|---|
| CSS3 with Custom Properties | Design tokens, glassmorphism variables, dark and light theming |
| CSS Keyframe Animations | Fade-in, slide-in, marquee scroll, blink, and floating orb effects |
| CSS Grid and Flexbox | All layout systems — no external grid library used |
| Google Fonts | Syne for display, DM Sans for body, JetBrains Mono for code and labels |

### Libraries

| Library | Version | Purpose |
|---|---|---|
| react-scroll | 1.9.0 | Smooth scroll navigation between sections |
| react-intersection-observer | 9.10.2 | Scroll-triggered reveal animations |
| @emailjs/browser | 4.3.3 | Contact form email delivery without a backend |

### Data Visualization

All charts are built from scratch using inline SVG and React state — no charting library is used.

| Chart | Implementation |
|---|---|
| Line chart | SVG path drawing with clip-path animation triggered on scroll |
| Donut chart | SVG arc segments with animated fill progress |
| Horizontal bar chart | Div-based bars animated via requestAnimationFrame |
| KPI counters | requestAnimationFrame count-up animation with cubic easing |

### Infrastructure

| Tool | Purpose |
|---|---|
| Vercel | Hosting and continuous deployment |
| GitHub | Version control and source repository |
| vercel.json | SPA routing rewrites for client-side navigation |
| EmailJS | Serverless email delivery from the contact form |

---

## Programming Languages Used

| Language | Role |
|---|---|
| JavaScript (JSX) | All component logic, animations, and interactivity |
| CSS3 | Styling, theming, and all animations |
| HTML5 | Semantic markup via index.html and JSX output |
| SVG | All data visualization charts and tech icons |

---

## Project Structure

```
bryan-portfolio/
├── public/
│   └── assets/
│       ├── icons/
│       │   └── favicon.svg
│       ├── images/
│       │   ├── bryan.jpg
│       │   └── dmmmsu-logo.png
│       ├── projects/
│       │   ├── internify-preview.jpg
│       │   ├── powerbi-preview.jpg
│       │   ├── aqualitics-preview.jpg
│       │   ├── luca-preview.jpg
│       │   └── dungeon-preview.jpg
│       └── resume/
│           └── Mamuyac_Bryan_Resume.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            Navigation bar with dark and light mode toggle
│   │   ├── Hero.jsx              Landing section with typewriter effect
│   │   ├── About.jsx             Bio, stats, and career path cards
│   │   ├── Skills.jsx            Marquee technology icons and proficiency bars
│   │   ├── Analytics.jsx         KPI cards and animated SVG data charts
│   │   ├── Projects.jsx          Filterable project showcase
│   │   ├── Experience.jsx        Internship, education, and seminars
│   │   ├── Contact.jsx           EmailJS contact form
│   │   ├── Footer.jsx            Footer with navigation and social links
│   │   ├── ScrollToTop.jsx       Floating back-to-top button
│   │   └── CursorGlow.jsx        Mouse-following radial glow effect
│   │
│   ├── context/
│   │   └── ThemeContext.jsx      Dark and light mode state with localStorage persistence
│   │
│   ├── data/
│   │   └── portfolio.js          Central content file — all text, links, and project data
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js Custom hook using Intersection Observer API
│   │
│   ├── styles/
│   │   └── globals.css           Global CSS — design tokens, animations, and utilities
│   │
│   ├── App.jsx                   Root component that assembles all sections
│   └── main.jsx                  React DOM entry point
│
├── index.html                    HTML shell with meta tags and Google Font imports
├── package.json                  Project dependencies and npm scripts
├── vite.config.js                Vite build configuration
├── vercel.json                   Vercel SPA routing rewrite rules
└── .gitignore                    Files excluded from version control
```

---

## Content Management

All portfolio content is centralized in one file:

```
src/data/portfolio.js
```

Editing this file updates the following across the entire site without touching any component:

- Personal information — name, bio, email, phone, location, and social links
- Resume file path
- Navigation link labels and targets
- Skills with names, proficiency levels (0 to 100), and icons
- Technology badge list
- Project cards — title, description, tech stack, GitHub URL, and screenshot path
- Work experience — role, company, period, and highlights
- Education details
- Leadership activities and seminars attended
- Career path descriptions and current technologies
- Contact information and availability status

---

## Local Development

**Requirements:** Node.js 18 or higher, npm

```bash
# Clone the repository
git clone https://github.com/Bryan-Mamuyac/bryan-portfolio.git
cd bryan-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
# Open http://localhost:5173 in your browser

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment

The project is deployed on Vercel with automatic redeployment triggered on every push to the main branch.

**Initial setup:**

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/Bryan-Mamuyac/bryan-portfolio.git
git branch -M main
git push -u origin main
```

Then on [vercel.com](https://vercel.com):

1. Sign in with GitHub
2. Click "Add New Project"
3. Import the `bryan-portfolio` repository
4. Leave all build settings as default — Vite is auto-detected
5. Click Deploy

The `vercel.json` file ensures all routes resolve to `index.html`, which is required for single-page applications using client-side routing.

---

## Contact Form

The contact form uses [EmailJS](https://emailjs.com) to send messages directly to the portfolio owner's inbox without requiring a server or backend API.

The EmailJS configuration lives at the top of `src/components/Contact.jsx`. The template uses four variables — `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}` — and delivers messages to `bryanmamuyac24@yahoo.com`.

---

## Customization Reference

**Change accent colors** — edit the CSS variables in `src/styles/globals.css`:

```css
:root {
  --accent-primary: #63b3ed;
  --accent-cyan:    #4dd0e1;
  --accent-purple:  #9f7aea;
}
```

**Add a new project** — append to the `projects` array in `src/data/portfolio.js`:

```js
{
  id: 6,
  title: "Project Name",
  subtitle: "Short tagline",
  type: "Personal Project",
  year: "2026",
  category: "fullstack",
  description: "What this project does.",
  tech: ["React", "Node.js"],
  github: "https://github.com/Bryan-Mamuyac/project-name",
  image: "/assets/projects/project-preview.jpg",
  featured: false,
  highlight: "Key achievement",
  color: "#68d391",
  tags: ["Tag1", "Tag2"],
},
```

**Update a skill level** — find the skill in `src/data/portfolio.js` and change the `level` value (0 to 100):

```js
{ name: "Power BI", level: 88, icon: "📊" },
```

---

## Design System

| Property | Value |
|---|---|
| Display font | Syne — headings and UI labels |
| Body font | DM Sans — paragraph and general text |
| Monospace font | JetBrains Mono — code, badges, and metadata |
| Border radius small | 8px |
| Border radius medium | 16px |
| Border radius large | 24px |
| Glass background | rgba(255, 255, 255, 0.04) |
| Glass blur | backdrop-filter: blur(20px) |
| Primary accent | #63b3ed |
| Secondary accent | #4dd0e1 |
| Tertiary accent | #9f7aea |

---

## Browser Compatibility

Tested and functional on Chrome, Firefox, Edge, and Safari — desktop and mobile.
The glassmorphism `backdrop-filter` property requires a modern browser. All major browsers
released after 2020 support it fully.

---

## License

This project is personal work and is not licensed for reuse, redistribution, or commercial use.
All content, text, and project descriptions belong to Bryan Mamuyac.

---

## Author

**Bryan Mamuyac**  
BS Information Technology, Major in Business Analytics  
Don Mariano Marcos Memorial State University — MLUC  
Aringay, La Union, Philippines

bryanmamuyac24@yahoo.com