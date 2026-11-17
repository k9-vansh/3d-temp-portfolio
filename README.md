<div align="center">

# 🚀 3D Portfolio Template

**A fully customizable, high-performance 3D developer portfolio template.** Press keys on an interactive 3D keyboard mapped to your skills, show off your work with animated project modals, and optionally enable multiplayer live cursors and realtime chat.

### [✨ Live Demo → nareshkhatri.dev](https://nareshkhatri.dev)

[![GitHub stars](https://img.shields.io/github/stars/Naresh-Khatri/3d-portfolio?style=flat&logo=github)](https://github.com/Naresh-Khatri/3d-portfolio/stargazers)
[![Forks](https://img.shields.io/github/forks/Naresh-Khatri/3d-portfolio?style=flat&logo=github)](https://github.com/Naresh-Khatri/3d-portfolio/network/members)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Naresh-Khatri/3d-portfolio)

![Portfolio Preview](https://github.com/Naresh-Khatri/3d-portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

</div>

> **Free to use!** This portfolio template is open source under the MIT License. If you use it, a credit/link back to the original author ([Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio)) is greatly appreciated! 🙏

---

## ✨ Features

- **Interactive 3D Keyboard** — Programmatically generated Chibi 3D keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press. Supports custom logos, colors, shortcuts, and columns.
- **Data-Driven Architecture** — Customize your entire portfolio (name, hero, experience, skills, projects, contact info, SEO) by editing simple TypeScript configuration files without modifying React components.
- **Section Toggles** — Turn any section (Hero, Skills, Experience, Projects, Contact) on or off in configuration without breaking 3D animations or leaving empty layout gaps.
- **Live Multiplayer (Optional)** — See other visitors' cursors in realtime, check who's online, and chat with them when connected to a WebSocket backend.
- **Fluid Animations** — Powered by GSAP and Framer Motion for smooth scroll effects, keycap drops, and interactive reveals.
- **Space Theme** — Interactive particle field on a dark canvas.
- **Light & Dark Mode** — Full theme support with disclaimer toasts.
- **Contact Form** — Email delivery via Resend with built-in validation and graceful fallback when credentials are not set.
- **SEO Ready** — Comprehensive Open Graph, Twitter cards, metadata, dynamic sitemap, and robots.txt.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP 3, Framer Motion (`motion/react`) |
| **3D & WebGL** | `@chibi3d/runtime`, Three.js |
| **Email** | Resend |
| **Smooth Scroll** | Lenis |
| **Form Validation** | Zod |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `20.9.0` or higher
- `pnpm` (version 10 or 11 recommended): `npm install -g pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Naresh-Khatri/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 🎨 Customization Guide

All portfolio content is decoupled from presentation components. You can customize the entire site by editing three primary configuration files:

```
src/
  data/
    config.ts      <-- Personal details, Hero copy, CTAs, SEO, social links, section toggles
    constants.ts   <-- 3D Keyboard skills, colors, key bindings, and work experience
    projects.tsx   <-- Projects, descriptions, screenshots, and tech tags
```

---

### 1. Personal Information & Hero (`src/data/config.ts`)

Open `src/data/config.ts` to configure your identity, hero banner, and social profiles:

```ts
import { PortfolioConfig } from "@/types/portfolio";

const config: PortfolioConfig = {
  // Author & Display Names
  author: "Your Name",
  displayName: "Your Name",             // Used in Hero header & Résumé view
  title: "Your Name | Full-Stack Developer",
  
  // Hero section customizable text & CTAs
  greeting: "Hi, I am",
  subtitle: "A Full Stack Web Developer",
  hero: {
    greeting: "Hi, I am",
    subtitle: "A Full Stack Web Developer",
    cta: {
      primary: {
        label: "Resume",
        href: "https://your-resume-link.pdf",
      },
      secondary: {
        label: "Hire Me",
        href: "#contact",
      },
    },
  },

  // Contact & Website
  email: "you@example.com",
  site: "https://yoursite.com",

  // Assets
  resumePdfPath: "/Your_Resume.pdf",    // Placed in /public
  profileImage: "/assets/me.jpg",

  // Social Links (any non-empty links are automatically rendered)
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://x.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    facebook: "",
    youtube: "",
    discord: "",
  },

  // Optional Section Toggles: enable or disable sections
  sections: {
    hero: true,
    skills: true,
    experience: true,
    projects: true,
    contact: true,
  },

  // SEO metadata
  description: {
    long: "Your detailed portfolio overview for search engines...",
    short: "Your short summary for social cards...",
  },
  keywords: ["developer", "portfolio", "full-stack", "react", "nextjs"],

  // GitHub stars button in the header (leave empty to hide)
  githubUsername: "yourusername",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
};

export { config };
```

---

### 2. Interactive 3D Keyboard & Skills (`src/data/constants.ts`)

The 3D keyboard dynamically builds its keycaps from the `SKILLS` record in `src/data/constants.ts`. The order of skills dictates the physical layout on the keyboard (6 keys per row by default).

Each skill accepts:
- `label`: Name of the skill displayed on screen.
- `shortDescription`: Catchphrase or description displayed when hovering or pressing the keycap.
- `color`: Accent color for hover glows and badges.
- `icon`: 2D SVG icon URL or path.
- `keyboardColor`: Plastic color of the 3D keycap in WebGL.
- `keyboardIcon`: Vector SVG displayed on the top face of the 3D keycap (placed in `/public/assets/keyboard/logos/` or external SVG).
- `shortcut`: Physical keyboard key code (e.g. `KeyA`, `KeyS`, `KeyD`).

Example skill entry:
```ts
[SkillNames.REACT]: {
  id: 3,
  name: "react",
  label: "React",
  shortDescription: "Declarative component-driven UI library",
  color: "#61dafb",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  keyboardIcon: "/assets/keyboard/logos/react.svg",
  keyboardColor: "#00cce8",
  shortcut: "KeyR",
},
```

> [!TIP]
> **Adding or Removing Skills:** You can add or remove entries from `SKILLS`. The keyboard layout engine in `@chibi3d/runtime` dynamically recalculates key wells, rows, and camera bounds.

---

### 3. Work Experience (`src/data/constants.ts`)

Work experience is stored in the `EXPERIENCE` array in `src/data/constants.ts`:

```ts
export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [
      { start: "Jan 2024", end: "Present" },
    ],
    title: "Senior Software Engineer",
    company: "Tech Corp · Remote",
    description: [
      "Led migration of legacy services to Next.js and serverless microservices.",
      "Optimized WebGL rendering pipeline, improving frame rates by 40%.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
    ],
  },
];
```

---

### 4. Projects (`src/data/projects.tsx`)

Projects are listed in `src/data/projects.tsx`. Each project defines metadata, screenshots, categorized tech chips, and rich modal content:

```tsx
{
  id: "my-project",
  category: "Full Stack Application",
  title: "My Project",
  src: "/assets/projects-screenshots/my-project/landing.png",
  screenshots: ["landing.png"],
  skills: {
    frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
  },
  live: "https://myproject.com",
  github: "https://github.com/myusername/my-project",
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Summary of your project.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        {/* Additional headings, paragraphs, and SlideShow components */}
      </div>
    );
  },
}
```

---

### 5. Replacing Assets & Résumé

Place your personal assets in `public/`:
- **Résumé:** Drop your PDF in `public/` (e.g. `public/Your_Resume.pdf`) and set `resumePdfPath: "/Your_Resume.pdf"` in `src/data/config.ts`.
- **Profile Image:** Replace `public/assets/me.jpg`.
- **Open Graph Preview:** Replace `public/assets/seo/og-image.png`.
- **Project Screenshots:** Add folders under `public/assets/projects-screenshots/<project-id>/`.

---

## 🔐 Environment Variables

Create a `.env.local` file from `.env.example`:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Optional | API key from [Resend](https://resend.com) to enable email delivery from the contact form. If unset, the site builds and runs normally without crashing. |
| `NEXT_PUBLIC_WS_URL` | Optional | WebSocket server endpoint for realtime cursors, online user presence, and chat. Leave blank to disable realtime features. |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics tracking ID (e.g. `G-XXXXXXXXXX`). |
| `UMAMI_DOMAIN` | Optional | Self-hosted Umami script URL. |
| `UMAMI_SITE_ID` | Optional | Umami website ID. |
| `NEXT_PUBLIC_LEGACY_HOST` | Optional | Previous domain to display a one-time migration banner. |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the project on [Vercel](https://vercel.com/new).
3. Set your environment variables (e.g. `RESEND_API_KEY`).
4. Click **Deploy**.

### Production Build & Verification

```bash
# Typecheck
pnpm typecheck

# Lint check
pnpm lint

# Production build
pnpm build

# Start production server
pnpm start
```

---

## 📄 License & Attribution

This project is licensed under the [MIT License](LICENSE).

Original project created and maintained by **[Naresh Khatri](https://github.com/Naresh-Khatri)** ([nareshkhatri.dev](https://nareshkhatri.dev)).
If you build something with this template, please keep attribution and link back to the original repository.
