# 📁 Assets Folder Guide

This folder holds all the images and files used in your portfolio.
Replace placeholder paths with your actual files.

---

## 📂 Folder Structure

```
public/assets/
├── icons/
│   └── favicon.svg           ← Site favicon (already created)
│
├── images/
│   ├── bryan.jpg             ← YOUR PROFILE PHOTO (rename to exactly: bryan.jpg)
│   ├── ulpi-logo.png         ← Universal Leaf Philippines logo (optional)
│   └── dmmmsu-logo.png       ← DMMMSU school logo (optional)
│
├── projects/
│   ├── internify-preview.jpg     ← Screenshot of INTERNIFY system
│   ├── powerbi-preview.jpg       ← Screenshot of Power BI Embedded website
│   ├── aqualitics-preview.jpg    ← Screenshot of Aqualitics dashboard
│   ├── luca-preview.jpg          ← Screenshot of LUCA System
│   └── dungeon-preview.jpg       ← Screenshot of Ancient Dungeon Quest
│
└── resume/
    └── Mamuyac_Bryan_JR_Resume.pdf   ← Your resume (already copied here)
```

---

## 📸 Image Tips

- Profile photo: Use a clear, professional-looking photo. Square or portrait is fine. Rename it to `bryan.jpg`.
- Project screenshots: Take full-screen or cropped screenshots of your running apps. 
  Recommended size: **1280×720px** (16:9 ratio). Save as `.jpg` or `.png`.
- If you don't have screenshots yet, the portfolio will show placeholder icons.

---

## 🔧 After Adding Images

No code changes needed! The portfolio auto-loads from these paths.
Just make sure filenames match exactly (case-sensitive on Linux/Vercel).

---

## 🚀 For Vercel Deployment

Everything inside `public/` is served as static files at the root URL.
Example: `public/assets/images/bryan.jpg` → `https://yoursite.vercel.app/assets/images/bryan.jpg`
