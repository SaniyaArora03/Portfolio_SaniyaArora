import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Skills" title="Tools I reach for" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <h3 className="font-display font-medium text-white text-sm mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1.5 rounded-md bg-surface2 border border-border text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
