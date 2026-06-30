import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION, ACHIEVEMENTS } from "../data";

export default function EducationAchievements() {
  return (
    <section className="py-28 px-6 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="space-y-5">
            {EDUCATION.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-white text-sm">{ed.degree}</h3>
                    <p className="text-sm text-muted mt-1">{ed.school}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs font-mono text-muted">
                      <span>{ed.period}</span>
                      <span className="w-1 h-1 rounded-full bg-muted" />
                      <span className="text-accent2">{ed.detail}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Achievements" title="Recognition" />
          <div className="space-y-3">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
              >
                <Award size={16} className="text-accent2 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white">{a.title}</div>
                  <div className="text-xs text-muted mt-0.5">{a.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
