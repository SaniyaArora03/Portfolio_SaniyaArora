import { motion } from "framer-motion";
import { Github, Star, GitFork, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useGithubStats } from "../useGithubStats";
import { GITHUB_USERNAME } from "../data";

export default function GitHubStats() {
  const { profile, repos } = useGithubStats();

  const totalStars = repos ? repos.reduce((sum, r) => sum + r.stargazers_count, 0) : null;
  const totalForks = repos ? repos.reduce((sum, r) => sum + r.forks_count, 0) : null;

  const stats = [
    { label: "Public Repos", value: profile?.public_repos ?? "—", icon: Github },
    { label: "Followers", value: profile?.followers ?? "—", icon: Users },
    { label: "Total Stars", value: totalStars ?? "—", icon: Star },
    { label: "Total Forks", value: totalForks ?? "—", icon: GitFork },
  ];

  return (
    <section className="py-28 px-6 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="GitHub"
          title="Live from GitHub"
          
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-2xl p-6 text-center"
            >
              <s.icon size={18} className="mx-auto mb-3 text-accent" />
              <div className="font-display font-semibold text-2xl text-white">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-muted hover:text-white transition-colors"
        >
          <Github size={16} />
          View full GitHub profile →
        </motion.a>
      </div>
    </section>
  );
}
