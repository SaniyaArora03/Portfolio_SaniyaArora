import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      <div className="inline-flex items-center gap-2 text-xs font-mono text-accent mb-3 uppercase tracking-wider">
        <span className="w-4 h-px bg-accent" />
        {eyebrow}
      </div>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted mt-3 max-w-xl text-base leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
