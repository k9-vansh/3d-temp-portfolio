import { cacheLife } from "next/cache";
import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
// returns null on 404, rate limit, or network failure so the site never crashes
export async function getGithubStars(): Promise<number | null> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  if (!config.githubUsername || !config.githubRepo) return null;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (typeof data.stargazers_count !== "number") {
      return null;
    }
    return data.stargazers_count;
  } catch {
    return null;
  }
}
