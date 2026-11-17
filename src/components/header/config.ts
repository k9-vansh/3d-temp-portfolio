import { Link } from "@/types";
import { config } from "@/data/config";

interface ConfiguredLink extends Link {
  sectionKey?: "hero" | "skills" | "experience" | "projects" | "contact";
}

const allLinks: ConfiguredLink[] = [
  {
    title: "Home",
    href: "/",
    thumbnail: "/assets/nav-link-previews/landing.png",
    sectionKey: "hero",
  },
  {
    title: "About",
    href: "/#about",
    thumbnail: "/assets/nav-link-previews/about.png",
  },
  {
    title: "Skills",
    href: "/#skills",
    thumbnail: "/assets/nav-link-previews/skills.png",
    sectionKey: "skills",
  },
  {
    title: "Projects",
    href: "/#projects",
    thumbnail: "/assets/nav-link-previews/projects.png",
    sectionKey: "projects",
  },
  {
    title: "Blogs",
    href: "/blogs",
    thumbnail: "/assets/nav-link-previews/blog.png",
  },
  {
    title: "Contact",
    href: "/#contact",
    thumbnail: "/assets/nav-link-previews/contact.png",
    sectionKey: "contact",
  },
];

const sections = config.sections;

// Filter out navigation links if corresponding section is disabled in config
const links: Link[] = allLinks
  .filter((link) => {
    if (!link.sectionKey || !sections) return true;
    return sections[link.sectionKey] !== false;
  })
  .map(({ sectionKey, ...rest }) => rest);

export { links };
