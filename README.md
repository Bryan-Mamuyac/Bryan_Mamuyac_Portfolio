# Bryan Mamuyac JR. — Personal Portfolio

A modern, glassmorphism-themed personal portfolio website built with **React + Vite**, featuring dark/light mode, animated backgrounds, and smooth scroll interactions.

---

## 🗂 Project Structure

```
bryan-portfolio/
├── public/
│   └── assets/
│       ├── icons/
│       │   └── favicon.svg
│       ├── images/
│       │   ├── bryan.jpg             ← ADD YOUR PHOTO HERE
│       │   ├── ulpi-logo.png         ← (optional)
│       │   └── dmmmsu-logo.png       ← (optional)
│       ├── projects/
│       │   ├── internify-preview.jpg     ← ADD PROJECT SCREENSHOTS
│       │   ├── powerbi-preview.jpg
│       │   ├── aqualitics-preview.jpg
│       │   ├── luca-preview.jpg
│       │   └── dungeon-preview.jpg
│       ├── resume/
│       │   └── Mamuyac_Bryan_JR_Resume.pdf   ← Resume (already here)
│       └── README.md
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Navigation + dark/light toggle
│   │   ├── Hero.jsx          ← Landing section with typewriter
│   │   ├── About.jsx         ← About me + career paths
│   │   ├── Skills.jsx        ← Animated skill bars + tech badges
│   │   ├── Projects.jsx      ← Project cards with GitHub links
│   │   ├── Experience.jsx    ← OJT, education, seminars
│   │   ├── Contact.jsx       ← Contact form + resume download
│   │   ├── Footer.jsx        ← Footer with links
│   │   ├── ScrollToTop.jsx   ← Back-to-top button
│   │   └── CursorGlow.jsx    ← Cursor light effect
│   │
│   ├── context/
│   │   └── ThemeContext.jsx  ← Dark/light mode state
│   │
│   ├── data/
│   │   └── portfolio.js      ← ⭐ ALL YOUR CONTENT IS HERE — edit this!
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js   ← Scroll-triggered animations
│   │
│   ├── styles/
│   │   └── globals.css       ← Design tokens, glassmorphism styles
│   │
│   ├── App.jsx               ← Root component
│   └── main.jsx              ← Entry point
│
├── index.html
├── package.json
├── vite.config.js
├── vercel.json               ← Vercel SPA routing config
└── .gitignore
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- npm (comes with Node.js)
- Git

### Steps

```bash
# 1. Navigate to the folder
cd bryan-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser at http://localhost:5173
```

---

## ✏️ How to Update Your Content

**All your portfolio content lives in one file:**

```
src/data/portfolio.js
```

Edit it to update:
- Your name, bio, email, phone, social links
- Projects (add/remove/edit)
- Skills and proficiency levels
- Experience and education
- Career path details

---

## 🖼️ Adding Your Photos & Screenshots

See `public/assets/README.md` for the full guide.

**Quick version:**
1. Copy your profile photo → rename to `bryan.jpg` → paste into `public/assets/images/`
2. Take screenshots of your projects → save to `public/assets/projects/` with the exact filenames listed in `portfolio.js`
3. Done! No code changes needed.

---

## 🚀 Deploying to Vercel (Free)

### Method 1: GitHub + Vercel (Recommended — Auto-deploys on push)

**Step 1: Push to GitHub**
```bash
# Inside bryan-portfolio folder:
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repo on GitHub: github.com/new
# Then connect and push:
git remote add origin https://github.com/Bryan-Mamuyac/bryan-portfolio.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `bryan-portfolio` repository
4. Vercel auto-detects Vite — leave settings as default
5. Click **"Deploy"** ✅

**Step 3: Get your live URL**
- Vercel gives you a free URL like: `bryan-portfolio.vercel.app`
- You can add a custom domain later (e.g., `bryanmamuyac.dev`)

**Auto-deploy:** Every time you `git push`, Vercel automatically redeploys! 🔄

---

### Method 2: Vercel CLI (No GitHub needed)

```bash
# Install Vercel CLI
npm install -g vercel

# Build and deploy
npm run build
vercel --prod

# Follow the prompts (login, confirm settings)
# Your site goes live instantly!
```

---

## 🎨 Customization Guide

### Change theme colors
Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --accent-primary: #63b3ed;   /* Main blue accent */
  --accent-cyan: #4dd0e1;      /* Cyan accent */
  --accent-purple: #9f7aea;    /* Purple accent */
}
```

### Add a new project
In `src/data/portfolio.js`, add to the `projects` array:
```js
{
  id: 6,
  title: "My New Project",
  subtitle: "What it does",
  type: "Personal Project",
  year: "2026",
  category: "fullstack",   // fullstack | iot | game
  description: "Short description...",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  image: "/assets/projects/new-project.jpg",
  featured: false,
  highlight: "Key achievement",
  color: "#68d391",
  tags: ["Tag1", "Tag2"],
},
```

### Add/update a skill
```js
{ name: "Docker", level: 60, icon: "🐳" },
```

---

## 📦 Tech Stack Used

| Purpose | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | react-scroll (single page) |
| Animations | CSS animations + Intersection Observer |
| Fonts | Syne (display) + DM Sans (body) + JetBrains Mono |
| Deployment | Vercel |
| Theme | Glassmorphism + CSS Variables |

---

## 📞 Support

Built by Bryan Mamuyac JR. — bryanmamuyac24@yahoo.com
