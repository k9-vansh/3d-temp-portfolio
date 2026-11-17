import { PortfolioConfig } from "@/types/portfolio";

const config: PortfolioConfig = {
  // Author & SEO
  author: "Vansh Kumar",
  displayName: "Vansh Kumar",
  title: "Vansh Kumar | AI & Full Stack Developer",
  description: {
    long: "Explore the portfolio of Vansh Kumar, an AI & Full Stack Developer specializing in interactive web experiences, AI integrations, 3D animations, and innovative software solutions.",
    short:
      "Discover the portfolio of Vansh Kumar, an AI & Full Stack Developer creating interactive web applications and intelligent systems.",
  },
  keywords: [
    "Vansh Kumar",
    "Vansh",
    "portfolio",
    "AI developer",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "React",
    "Next.js",
    "GSAP",
    "Three.js",
    "TypeScript",
  ],
  email: "k9.vansh@gmail.com",
  site: "https://3d-temp-portfolio.vercel.app",

  // Assets & Links
  resumeUrl: "/resume",
  resumePdfPath: "/resume.pdf",
  profileImage: "/assets/me.jpg",

  // Hero section customizable text & CTAs
  greeting: "Hi, I am",
  subtitle: "AI & Full Stack Developer",
  hero: {
    greeting: "Hi, I am",
    subtitle: "AI & Full Stack Developer",
    cta: {
      primary: {
        label: "Resume",
        href: "/resume",
      },
      secondary: {
        label: "Hire Me",
        href: "#contact",
      },
    },
  },

  // Toggle sections on or off without breaking layout or 3D animations
  sections: {
    hero: true,
    skills: true,
    experience: true,
    projects: true,
    contact: true,
  },

  // For github stars button (optional)
  githubUsername: "k9-vansh",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "https://x.com/k9Vansh",
    linkedin: "https://www.linkedin.com/in/vansh09l/",
    instagram: "https://www.instagram.com/k9.vansh",
    facebook: "",
    github: "https://github.com/k9-vansh",
  },
};

export { config };
