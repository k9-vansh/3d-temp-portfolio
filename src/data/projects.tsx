import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  electron: brand("Electron", "electron-mono.svg"),
  vite: brand("Vite", "vite-mono.svg"),
  astro: brand("Astro", "astro-mono.svg"),
  sqlite: brand("SQLite", "sqlite-mono.svg"),
  ffmpeg: brand("FFmpeg", "ffmpeg-mono.svg"),
  ollama: brand("Ollama", "ollama-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  /** Unique project identifier, also used for wallpaper lookup in /public/assets/backgrounds/<id>.jpg */
  id: string;
  /** Category badge displayed on the project card */
  category: string;
  /** Project title */
  title: string;
  /** Thumbnail image or preview screenshot */
  src: string;
  /** Screenshots list */
  screenshots: string[];
  /** Categorized tech stack displayed in floating docks inside modal */
  skills: { frontend: Skill[]; backend: Skill[] };
  /** Rich modal body content */
  content: React.ReactNode | any;
  /** Optional GitHub repository link */
  github?: string;
  /** Live demo / website link */
  live: string;
  /** Optional featured flag to prioritize or highlight */
  featured?: boolean;
};
const projects: Project[] = [
  {
    id: "agentops",
    category: "AI Fleet Observability",
    title: "AgentOps — Autonomous Fleet & Token Telemetry Platform",
    src: "/assets/projects-screenshots/agentops/overview.png",
    screenshots: ["overview.png", "landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [
        PROJECT_SKILLS.aiSDK,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://portfolio-dashboards-mocha.vercel.app",
    github: "https://github.com/k9-vansh/portfolio-dashboards",
    featured: true,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise observability, token cost governance, and deterministic orchestration for autonomous AI agent fleets.
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered with Next.js 16 (Turbopack), Tailwind CSS v4, Vercel AI SDK, and multi-tenant Clerk authentication with seamless 1-click Guest Demo access. Tracks real-time token stream throughput, sub-150ms inference latency budgets across frontier LLMs (Claude 3.7, GPT-4o, Gemini 2.5 Flash, DeepSeek R1), and dedicated GPU compute spend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Frontier Model Registry &amp; Diagnostic Copilot</TypographyH3>
          <p className="font-mono mb-2">
            Features an interactive autonomous Copilot with real-time tool execution simulation, dynamic speculative decoding benchmarks, and Kanban task scheduling for distributed agent workflows.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/agentops/overview.png`,
              `${BASE_PATH}/agentops/landing.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "codingducks",
    category: "Tactical Pathfinding",
    title: "Town Hall 14 Trajectory Calculator",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/k9-vansh",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A military-grade geometric solver that proves your clan war loss was mathematically unavoidable.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed for Town Hall 14 competitive operators who refuse to accept personal responsibility for a 99 percent two-star result. The system computes air sweeper pushback vectors, eagle artillery targeting priority queues, and barbarian king wall distraction radiuses in real time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Chain Lightning Propagation Modeling</TypographyH3>
          <p className="font-mono mb-2">
            Simulates up to thirty-six electro dragon breath bounces across varying building footprint densities. Incorporates real-time packet jitter compensation to demonstrate that your freeze spell was placed accurately and the server failed to acknowledge your tactical brilliance.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problem.png`,
              `${BASE_PATH}/codingducks/machine-coding.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Automated Clan Tribunal Briefs</TypographyH3>
          <p className="font-mono mb-2">
            Generates thirty-page post-war analytical reports complete with velocity graphs, frame-by-frame replay telemetry, and legal justifications to prevent clan elders from demoting you before Tuesday.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/sysdesign.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "unottr",
    category: "Forensic Liquidity",
    title: "Solana Telegram Panic Radar",
    src: "/assets/projects-screenshots/unottr/landing.webp",
    screenshots: ["landing.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "#",
    github: "https://github.com/k9-vansh",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time acoustic analysis of developer vocal tremors during meme coin community calls.
          </TypographyP>
          <TypographyP className="font-mono">
            A low-latency monitoring dashboard that listens to anonymous voice channels on Telegram and detects micro-hesitations, forced laughter, and water gulp frequencies preceding significant liquidity withdrawals.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Vocal Stress Telemetry</TypographyH3>
          <p className="font-mono mb-2">
            Uses fast Fourier transform signal processing to track pitch fluctuations when community members ask about team vesting schedules or multi-signature treasury wallets. A sudden drop in vocal cadence triggers an automated market exit order via decentralized routing.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/unottr/overview.png`,
              `${BASE_PATH}/unottr/transcript.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Generative Animal Token Classifier</TypographyH3>
          <p className="font-mono mb-2">
            Evaluates newly deployed token contracts based on whether the mascot is wearing sunglasses, smoking an imaginary pipe, or accompanied by a low-effort manifesto regarding community-driven generational wealth.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/unottr/library.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "kanbi",
    category: "Productivity Theater",
    title: "Coffee Shop Terminal Aura Maximizer",
    src: "/assets/projects-screenshots/kanbi/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/k9-vansh",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automates the appearance of profound engineering focus in public spaces.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed for software engineers working in third-wave specialty coffee shops who wish to project intense technical competence without actually writing functional software. The application coordinates screen layout, font contrast, and synthetic compiler streams.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Synthetic Cargo Build Daemon</TypographyH3>
          <p className="font-mono mb-2">
            Streams endless multicolor Rust compilation outputs and warning diagnostics across four tiled tmux panes. If anyone walks behind your chair, the application automatically shifts into a full-screen hexadecimal memory dump view.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/kanbi/board.png`,
              `${BASE_PATH}/kanbi/dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Acoustic Mechanical Key Emulation</TypographyH3>
          <p className="font-mono mb-2">
            Plays high-fidelity tactile mechanical switch recordings through your headphones to maintain the rhythm of deep contemplative work while you browse architectural photography on another tab.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/kanbi/profile.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "peakposts",
    category: "Synthetic Enlightenment",
    title: "Corporate LinkedIn Oracle",
    src: "/assets/projects-screenshots/peakposts/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.anthropic,
        PROJECT_SKILLS.cloudflare,
      ],
    },
    live: "#",
    github: "https://github.com/k9-vansh",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Transforms trivial daily mishaps into viral eighteen-part leadership parables.
          </TypographyP>
          <TypographyP className="font-mono">
            An autonomous text generation engine that converts incidents like dropping an umbrella or waiting in line at an airport cafe into profound lessons regarding founder grit, pipeline velocity, and customer obsession.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Algorithmic Hook Optimization</TypographyH3>
          <p className="font-mono mb-2">
            Formats text with aggressive single-sentence spacing to maximize mobile viewport dwell time. Evaluates hook openings against historical engagement metrics to guarantee optimal comment section controversy.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/peakposts/dashboard.png`,
              `${BASE_PATH}/peakposts/posts.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Humblebrag Harmonizer</TypographyH3>
          <p className="font-mono mb-2">
            Rephrases unvarnished vanity metrics into solemn reflections on the importance of learning from temporary setbacks and remaining eternally humble while working ninety hours a week.
          </p>
        </div>
      );
    },
  },
];
export default projects;
