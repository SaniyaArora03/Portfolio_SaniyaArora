import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 grid-bg noise overflow-hidden"
    >
      {/* radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface/60 text-xs text-muted mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse" />
          Open to SDE roles & internships
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-gradient mb-6"
        >
          Saniya Arora
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Full Stack Developer &amp; AI/ML Engineer building{" "}
          <span className="text-white font-medium">RAG pipelines</span>,{" "}
          <span className="text-white font-medium">full-stack platforms</span>, and{" "}
          <span className="text-white font-medium">intelligent developer tools</span>.
          <br className="hidden sm:block" />
          Final-year Computer Engineering @ Thapar Institute.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all hover:shadow-glow"
          >
            View Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <a
            href="mailto:sarora1_be23@thapar.edu"
            className="px-6 py-3 rounded-full border border-border text-white font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="flex items-center justify-center gap-8 mt-16 text-sm"
        >
          {[
            ["6", "Projects shipped"],
            ["400+", "LeetCode solved"],
            ["8.59", "CGPA"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-display font-semibold text-2xl text-white">{num}</div>
              <div className="text-muted text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 text-muted hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
