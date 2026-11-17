/**
 * Skill identifiers for the portfolio and 3D keyboard.
 * Order in SKILLS determines the keycap layout on the 3D keyboard (6 keys per row).
 */
export enum SkillNames {
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  VUE = "vue",
  EXPO = "expo",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  BUN = "bun",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  LINUX = "linux",
  GIT = "git",
  VIM = "vim",
  DOCKER = "docker",
  NGINX = "nginx",
  CLAUDE = "claude",
  CLOUDFLARE = "cloudflare",
  GCP = "gcp",
  AWS = "aws",
  HOME_ASSISTANT = "homeassistant",
  PROXMOX = "proxmox",
  STEAM = "steam",
}

/**
 * Skill configuration interface.
 * Defines both the 2D HTML presentation and the interactive 3D keycap rendering.
 */
export type Skill = {
  /** Numeric identifier for ordering */
  id: number;
  /** Internal key name matching SkillNames */
  name: string;
  /** Human-readable skill label displayed on screen */
  label: string;
  /** Fun or informative description shown when key is hovered/pressed */
  shortDescription: string;
  /** HTML brand accent color (used for hover glows and badge styling) */
  color: string;
  /** URL or path to skill icon (e.g. devicon SVG or local path) */
  icon: string;
  /** Optional local vector logo for the 3D keycap surface; falls back to icon */
  keyboardIcon?: string;
  /** Plastic hex color of the 3D keycap model; independent of the 2D brand accent */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code (e.g. KeyJ, KeyA). Defaults to the displayed key order */
  shortcut?: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 3,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    keyboardIcon: "/assets/keyboard/logos/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.NEXTJS]: {
    id: 4,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nextjs.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.VUE]: {
    id: 5,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/vue.svg",
    keyboardColor: "#00b880",
  },
  [SkillNames.EXPO]: {
    id: 6,
    name: "expo",
    label: "Expo",
    shortDescription: "one codebase, every screen, zero Xcode tears 📱✨",
    color: "#000020",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    keyboardIcon: "/assets/keyboard/logos/expo.svg",
    keyboardColor: "#1b1f2e",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    keyboardIcon: "/assets/keyboard/logos/tailwind.svg",
    keyboardColor: "#00bfd8",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nodejs.svg",
    keyboardColor: "#00952c",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.simpleicons.org/express/9CA3AF",
    keyboardIcon: "/assets/keyboard/logos/express.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.BUN]: {
    id: 10,
    name: "bun",
    label: "Bun",
    shortDescription: "node but it chugged three energy drinks 🥟⚡",
    color: "#fbf0df",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    keyboardIcon: "/assets/keyboard/logos/bun.svg",
    keyboardColor: "#ec6fa5",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/postgres.svg",
    keyboardColor: "#146888",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    keyboardIcon: "/assets/keyboard/logos/mongodb.svg",
    keyboardColor: "#00c51b",
  },
  [SkillNames.LINUX]: {
    id: 13,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.VIM]: {
    id: 15,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    keyboardIcon: "/assets/keyboard/logos/vim.svg",
    keyboardColor: "#009f18",
  },
  [SkillNames.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.NGINX]: {
    id: 17,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nginx.svg",
    keyboardColor: "#00a20b",
  },
  [SkillNames.CLAUDE]: {
    id: 18,
    name: "claude",
    label: "Claude",
    shortDescription: "my pair programmer that never asks for a coffee break 🤖☕",
    color: "#d97757",
    icon: "https://cdn.simpleicons.org/claude/D97757",
    keyboardIcon: "/assets/keyboard/logos/claude.svg",
    keyboardColor: "#d97757",
  },
  [SkillNames.CLOUDFLARE]: {
    id: 19,
    name: "cloudflare",
    label: "Cloudflare",
    shortDescription: "edge go brrr, my homelab hides behind this orange cloud ☁️🛡️",
    color: "#f38020",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    keyboardIcon: "/assets/keyboard/logos/cloudflare.svg",
    keyboardColor: "#f38020",
  },
  [SkillNames.GCP]: {
    id: 20,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    keyboardIcon: "/assets/keyboard/logos/gcp.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.AWS]: {
    id: 21,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    keyboardIcon: "/assets/keyboard/logos/aws.svg",
    keyboardColor: "#ff9208",
  },
  [SkillNames.HOME_ASSISTANT]: {
    id: 22,
    name: "homeassistant",
    label: "Home Assistant",
    shortDescription: "my house runs on YAML and vibes, lights obey me fr 🏠💡",
    color: "#18bcf2",
    icon: "https://cdn.simpleicons.org/homeassistant/18BCF2",
    keyboardIcon: "/assets/keyboard/logos/homeassistant.svg",
    keyboardColor: "#03a9f4",
  },
  [SkillNames.PROXMOX]: {
    id: 23,
    name: "proxmox",
    label: "Proxmox",
    shortDescription: "a whole datacenter in my closet, power bill said ouch 🖥️🔥",
    color: "#e57000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/proxmox/proxmox-original.svg",
    keyboardIcon: "/assets/keyboard/logos/proxmox.svg",
    keyboardColor: "#e57000",
  },
  [SkillNames.STEAM]: {
    id: 24,
    name: "steam",
    label: "Steam",
    shortDescription: "\"just one more match\" at 3am, every night 🎮🌙",
    color: "#66c0f4",
    icon: "https://cdn.simpleicons.org/steam/66C0F4",
    keyboardIcon: "/assets/keyboard/logos/steam.svg",
    keyboardColor: "#1b2838",
  },
};

/**
 * Work experience entry configuration.
 */
export type Experience = {
  /** Unique numeric ID for keying */
  id: number;
  /** Employment periods (multiple periods support returning stints without duplicate cards) */
  periods: { start: string; end: string }[];
  /** Job title / role */
  title: string;
  /** Company name and location (e.g. "Acme Corp · Remote") */
  company: string;
  /** Bullet points detailing accomplishments and responsibilities */
  description: string[];
  /** Skills or technologies utilized (keys from SKILLS or custom strings) */
  skills: (SkillNames | string)[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [
      { start: "2018", end: "Present" },
    ],
    title: "Town Hall 14 Base Architect",
    company: "Clash of Clans · Global",
    description: [
      "Coordinated high-stakes clan war league offensives across opposing global time zones with zero formal management background.",
      "Maxed out defensive walls and hero levels through multiple economic shifts without paying for gold passes.",
      "Calculated complex troop pathing and spell placements under severe time pressure to secure clutch three-star victories.",
      "Consistently removed inactive clan members within thirty minutes of season conclusion to uphold elite competitive standards.",
    ],
    skills: [],
  },
  {
    id: 2,
    periods: [{ start: "2023", end: "Present" }],
    title: "Meme Coin Liquidity Specialist",
    company: "Decentralized Casino · Remote",
    description: [
      "Bought local tops and surrendered generational bottoms with sub-second execution accuracy across decentralized exchanges.",
      "Conducted extensive technical due diligence on whitepapers for tokens whose primary utility was a generative dog wearing headgear.",
      "Allocated high-conviction capital across seven distinct animal tokens to distribute catastrophic downside exposure.",
      "Exhibited unwavering composure and reassurance in telegram voice chats while ninety percent underwater on initial positions.",
    ],
    skills: [],
  },
  {
    id: 3,
    periods: [{ start: "2022", end: "Present" }],
    title: "Lifestyle Architect & Digital Larper",
    company: "Instagram & X · Remote",
    description: [
      "Strategically positioned cold brew coffee cups adjacent to open terminal windows to communicate rigorous productivity.",
      "Engaged in heated philosophical debates in comments sections regarding software frameworks never deployed to production.",
      "Liked morning mindset and discipline videos at five in the morning before falling back asleep until midday.",
      "Published profound one-liners about compound interest and stoicism directly from an unmade bed.",
    ],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
