import { unstable_cache } from "next/cache";

const GITHUB_API_BASE = "https://api.github.com";
const PM_REPO_OWNER = "ethereum";
const PM_REPO_NAME = "pm";

interface GitHubFile {
  name: string;
  path: string;
  type: "file" | "dir";
  download_url: string | null;
  html_url: string;
}

interface GitHubContent {
  content: string;
  encoding: string;
  html_url: string;
}

async function fetchFromGitHub<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Protocol-Support-Website",
  };

  // Add auth token if available (for higher rate limits)
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Fetch and cache the PM repo README
export const getPMRepoReadme = unstable_cache(
  async (): Promise<string> => {
    try {
      const data = await fetchFromGitHub<GitHubContent>(
        `/repos/${PM_REPO_OWNER}/${PM_REPO_NAME}/readme`
      );

      // Decode base64 content
      const content = Buffer.from(data.content, "base64").toString("utf-8");
      return content;
    } catch (error) {
      console.error("Failed to fetch PM repo README:", error);
      return "";
    }
  },
  ["pm-repo-readme"],
  {
    revalidate: 3600, // Revalidate every hour
    tags: ["github", "pm-repo"],
  }
);

// Fetch and cache breakout room information
export const getBreakoutRooms = unstable_cache(
  async (): Promise<GitHubFile[]> => {
    try {
      const data = await fetchFromGitHub<GitHubFile[]>(
        `/repos/${PM_REPO_OWNER}/${PM_REPO_NAME}/contents/Breakout-Room-Meetings`
      );

      // Filter for directories only (each breakout room has its own folder)
      return data.filter((item) => item.type === "dir");
    } catch (error) {
      console.error("Failed to fetch breakout rooms:", error);
      return [];
    }
  },
  ["breakout-rooms"],
  {
    revalidate: 3600,
    tags: ["github", "breakouts"],
  }
);

// Fetch a specific markdown file from the repo
export const getMarkdownFile = unstable_cache(
  async (path: string): Promise<string> => {
    try {
      // Validate path to prevent traversal
      if (path.includes("..") || path.startsWith("/")) {
        throw new Error("Invalid path");
      }

      const data = await fetchFromGitHub<GitHubContent>(
        `/repos/${PM_REPO_OWNER}/${PM_REPO_NAME}/contents/${path}`
      );

      const content = Buffer.from(data.content, "base64").toString("utf-8");
      return content;
    } catch (error) {
      console.error(`Failed to fetch file ${path}:`, error);
      return "";
    }
  },
  ["markdown-file"],
  {
    revalidate: 3600,
    tags: ["github"],
  }
);

// Get PM repo stats for homepage
export interface PMStats {
  acdeMeetings: number;
  acdcMeetings: number;
  breakoutSeries: number;
  contributors: number;
}

interface GitHubTree {
  tree: { path: string; type: "blob" | "tree" }[];
}

interface GitHubRepo {
  forks_count: number;
  stargazers_count: number;
}

export const getPMStats = unstable_cache(
  async (): Promise<PMStats> => {
    const defaults: PMStats = { acdeMeetings: 0, acdcMeetings: 0, breakoutSeries: 0, contributors: 0 };
    try {
      const [tree, repo] = await Promise.all([
        fetchFromGitHub<GitHubTree>(
          `/repos/${PM_REPO_OWNER}/${PM_REPO_NAME}/git/trees/master?recursive=1`
        ).catch(() => ({ tree: [] }) as GitHubTree),
        fetchFromGitHub<GitHubRepo>(
          `/repos/${PM_REPO_OWNER}/${PM_REPO_NAME}`
        ).catch(() => null),
      ]);

      const items = tree.tree;
      const breakoutDirs = new Set<string>();
      for (const f of items) {
        if (f.path.startsWith("Breakout-Room-Meetings/") && f.type === "tree") {
          const parts = f.path.split("/");
          if (parts.length === 2) breakoutDirs.add(parts[1]);
        }
      }

      return {
        acdeMeetings: items.filter(f => f.path.startsWith("AllCoreDevs-EL-Meetings/") && f.path.endsWith(".md")).length,
        acdcMeetings: items.filter(f => f.path.startsWith("AllCoreDevs-CL-Meetings/") && f.path.endsWith(".md")).length,
        breakoutSeries: breakoutDirs.size,
        contributors: repo?.forks_count ?? 0,
      };
    } catch (error) {
      console.error("Failed to fetch PM stats:", error);
      return defaults;
    }
  },
  ["pm-stats"],
  {
    revalidate: 3600,
    tags: ["github", "pm-stats"],
  }
);

// Fetch upgrade data from ethereum/forkcast
export interface ForkcastUpgrade {
  id: string;
  name: string;
  status: "done" | "active" | "planned";
  activationDate: string;
}

const FORKCAST_UPGRADES_URL =
  "https://raw.githubusercontent.com/ethereum/forkcast/main/src/data/upgrades.ts";

const FORKCAST_FALLBACK: ForkcastUpgrade[] = [
  { id: "pectra", name: "Pectra", status: "done", activationDate: "May 7, 2025" },
  { id: "fusaka", name: "Fusaka", status: "done", activationDate: "Dec 3, 2025" },
  { id: "glamsterdam", name: "Glamsterdam", status: "active", activationDate: "2026" },
  { id: "hegota", name: "Hegota", status: "planned", activationDate: "TBD" },
];

export const getForkcastUpgrades = unstable_cache(
  async (): Promise<ForkcastUpgrade[]> => {
    try {
      const res = await fetch(FORKCAST_UPGRADES_URL);
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const text = await res.text();

      const upgrades: ForkcastUpgrade[] = [];
      let cur: Partial<ForkcastUpgrade & { disabled: boolean }> = {};

      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (trimmed === "{") { cur = {}; continue; }
        if (trimmed.startsWith("}")) {
          if (cur.id && cur.name && !cur.disabled) {
            const statusMap: Record<string, ForkcastUpgrade["status"]> = {
              Live: "done", Upcoming: "active", Planning: "planned", Research: "planned",
            };
            upgrades.push({
              id: cur.id,
              name: cur.name.replace(/ Upgrade$/, ""),
              status: statusMap[cur.status as string] ?? "planned",
              activationDate: cur.activationDate ?? "TBD",
            });
          }
          cur = {};
          continue;
        }
        const m = trimmed.match(/^(\w+):\s*'([^']*)'/);
        if (m) {
          const [, key, val] = m;
          if (key === "id" || key === "name" || key === "status" || key === "activationDate") {
            (cur as Record<string, string>)[key] = val;
          }
        }
        if (trimmed.startsWith("disabled:")) {
          cur.disabled = trimmed.includes("true");
        }
      }

      if (!upgrades.some(u => u.status === "active" || u.status === "planned")) {
        console.warn("getForkcastUpgrades: no active/planned upgrades found, using fallback");
        return FORKCAST_FALLBACK;
      }
      return upgrades;
    } catch (error) {
      console.error("Failed to fetch forkcast upgrades:", error);
      return FORKCAST_FALLBACK;
    }
  },
  ["forkcast-upgrades"],
  { revalidate: 3600, tags: ["github", "forkcast"] }
);

// Get AllCoreDevs meeting notes (most recent)
export const getRecentMeetings = unstable_cache(
  async (layer: "execution" | "consensus", limit = 5): Promise<GitHubFile[]> => {
    try {
      const folder =
        layer === "execution"
          ? "AllCoreDevs-EL-Meetings"
          : "AllCoreDevs-CL-Meetings";

      const data = await fetchFromGitHub<GitHubFile[]>(
        `/repos/${PM_REPO_OWNER}/${PM_REPO_NAME}/contents/${folder}`
      );

      // Filter markdown files and sort by name (which includes the meeting number)
      const meetings = data
        .filter((item) => item.type === "file" && item.name.endsWith(".md"))
        .sort((a, b) => b.name.localeCompare(a.name))
        .slice(0, limit);

      return meetings;
    } catch (error) {
      console.error(`Failed to fetch ${layer} meetings:`, error);
      return [];
    }
  },
  ["recent-meetings"],
  {
    revalidate: 3600,
    tags: ["github", "meetings"],
  }
);
