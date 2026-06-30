import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Where I've contributed" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-display font-semibold text-white text-base">
                    {exp.role} <span className="text-muted font-normal">· {exp.org}</span>
                  </h3>
                  <span className="text-xs font-mono text-muted">{exp.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-accent2 mt-1">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
