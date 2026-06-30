import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS, FEATURED_ORDER } from "../data";
import { useGithubStats } from "../useGithubStats";

export default function Projects() {
  const { getRepoStats } = useGithubStats();

  const featured = FEATURED_ORDER.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  const rest = PROJECTS.filter((p) => !FEATURED_ORDER.includes(p.id));

  return (
    <section id="projects" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          subtitle="Six shipped projects spanning full-stack platforms, RAG pipelines, and applied computer vision — pulled live from GitHub."
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} stats={getRepoStats(p.repo)} featured index={i} />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <div className="font-mono text-xs text-muted uppercase tracking-wider mb-6">More projects</div>
            <div className="grid sm:grid-cols-2 gap-6">
              {rest.map((p, i) => (
                <ProjectCard key={p.id} project={p} stats={getRepoStats(p.repo)} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
