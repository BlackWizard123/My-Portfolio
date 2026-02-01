# Personal Portfolio Website 🚀

A modern, fully responsive **personal portfolio website** built using **HTML, CSS, and Vanilla JavaScript**, designed to showcase my skills, experience, projects, problem-solving profile, and contact information in a clean, recruiter-friendly way.

The site is **content-driven**, **easy to update**, and **deployed using GitHub Pages**.

---

## ✨ Features

### 🧑‍💼 Hero Section
- Clean split layout with introduction and profile photo
- Professional headline and summary
- Responsive across devices

### 🧠 LeetCode Showcase
- Displays **400+ solved problems** in a circular animated ring
- Infinite marquee of core DSA topics (DP, Graphs, Backtracking, etc.)
- Hover effects and subtle animations
- Direct link to LeetCode profile

### 🛠 Skills
- Rendered dynamically from JSON
- Easy to add/remove skills without touching HTML

### 📦 Projects
- Project cards rendered from JSON
- Clickable cards with **modal-based detailed view**
- Clean UX without page expansion

### 🏢 Experience
- Two-column grid layout for better space utilization
- Company logos aligned with role details
- Modal view for deep dive into responsibilities and impact

### 🏆 Certifications
- Badge-style layout
- Supports certificate images / logos

### ✍️ Blogs
- Blog list rendered dynamically
- Markdown-based content
- Opens inside a modal for focused reading

### 📞 Contact / Connect
- Designed as a **conversion-focused section**
- Supports multiple platforms:
  - LinkedIn
  - GitHub
  - LeetCode
  - Naukri
  - Medium
  - Notion
  - Reddit
  - Instagram
  - Facebook
- Primary email, secondary email, and phone number
- Fully configurable via JSON

### 📄 Resume
- Prominent Resume button in navbar
- Outline + fill hover effect
- Resume opens after a **3s delay**
- Friendly toast message shown on click

### ⬆️ Back to Top Button
- Floating bottom-right button
- Appears on scroll
- Smooth scroll to top

### 🎨 UI & UX
- Subtle hover animations
- Accent glow effects
- Section dividers and styled titles
- Background doodle patterns
- Favicon support

---

## 🧱 Tech Stack

- **HTML5**
- **CSS3**
  - Flexbox & Grid
  - Animations & transitions
- **Vanilla JavaScript (ES6+)**
- **JSON-based content management**
- **GitHub Pages** for hosting

No frameworks. No libraries. Fast and lightweight.

---

## 📁 Project Structure
```
/
├── index.html
├── css/
│ ├── base.css
│ ├── layout.css
│ └── animations.css
├── js/
│ ├── main.js
│ ├── modal.js
│ ├── renderHero.js
│ ├── renderLeetCode.js
│ ├── renderSkills.js
│ ├── renderProjects.js
│ ├── renderExperience.js
│ ├── renderCertifications.js
│ ├── renderBlogs.js
│ └── renderFooter.js
├── data/
│ ├── profile.json
│ ├── skills.json
│ ├── projects.json
│ ├── experience.json
│ ├── certifications.json
│ ├── blogs.json
│ ├── leetcode.json
│ └── contact.json
└── assets/
  ├── profile/
  │ └── me.jpg
  ├── companies/
  ├── resumes/
  ├── favicon/
  └── certifications/

```

---

## 🔄 Updating Content

All major content is **data-driven**.

### Examples:
- Update skills → `data/skills.json`
- Add a project → `data/projects.json`
- Update LeetCode count → `data/leetcode.json`
- Add social links → `data/contact.json`
- Replace resume → `assets/resume.pdf`

After making changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Your live site updates automatically 🚀

---

## 🌍 Live Deployment

This site is hosted using GitHub Pages.
```
Live URL:
https://<your-username>.github.io/My-Portfolio/
```
---

## 🤝 Connect
### Feel free to use it!!!.
If you like this portfolio or want to build something similar, feel free to connect or reach out.

Thanks for visiting! 😊
