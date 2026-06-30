import { motion } from "framer-motion";
import { Github, ArrowUpRight, Star, GitFork } from "lucide-react";

export default function ProjectCard({ project, stats, featured, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl border bg-surface overflow-hidden transition-all hover:-translate-y-1 ${
        featured ? "border-white/15 hover:border-white/30" : "border-border hover:border-white/20"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
          Featured
        </div>
      )}

      {/* Image placeholder */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}22 0%, transparent 70%)`,
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <span
          className="font-display font-bold text-4xl relative z-10 opacity-90"
          style={{ color: project.color }}
        >
          {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-semibold text-lg text-white">{project.title}</h3>
          {stats && (
            <div className="flex items-center gap-3 text-xs text-muted font-mono shrink-0 pt-1">
              <span className="flex items-center gap-1">
                <Star size={12} /> {stats.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} /> {stats.forks}
              </span>
            </div>
          )}
        </div>

        <p className="text-sm text-muted mb-4">{project.tagline}</p>
        <p className="text-sm text-muted/90 leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-5">
          {project.points.slice(0, 3).map((pt, i) => (
            <li key={i} className="text-xs text-muted/80 leading-relaxed flex gap-2">
              <span className="text-accent2 mt-1">▸</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono px-2 py-1 rounded-md bg-surface2 border border-border text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <a
            href={`https://github.com/SaniyaArora03/${project.repo}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-accent transition-colors"
          >
            <Github size={14} /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-accent transition-colors"
            >
              <ArrowUpRight size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
