import { useState, useEffect } from "react";
import { GITHUB_USERNAME } from "./data";

// Fetches live GitHub profile + repo stats to enrich the static project data.
// Fails gracefully — if the API is rate-limited or unreachable, the UI just
// falls back to the curated static data with no live badges.

export function useGithubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);
        if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API error");
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();
        if (!cancelled) {
          setProfile(profileData);
          setRepos(reposData);
        }
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  function getRepoStats(repoName) {
    if (!repos) return null;
    const match = repos.find((r) => r.name.toLowerCase() === repoName.toLowerCase());
    if (!match) return null;
    return {
      stars: match.stargazers_count,
      forks: match.forks_count,
      language: match.language,
      updatedAt: match.updated_at,
      url: match.html_url,
    };
  }

  return { profile, repos, error, getRepoStats };
}
