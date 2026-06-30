import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About" title="Engineer, first principles" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-muted text-base leading-relaxed"
          >
            <p>
              I'm a Computer Engineering student who builds full systems, not demos —
              from a <span className="text-white">RAG-based code reviewer</span> that runs CodeBERT
              embeddings through a FAISS vector store, to a{" "}
              <span className="text-white">GitHub reviewer-recommendation platform</span> with a
              layered backend architecture.
            </p>
            <p>
              I care about the decision behind a line of code as much as the line itself —
              why a JWT middleware sits where it does, why an allocation engine checks fatigue
              before availability, why a vector store beats a linear scan at scale.
            </p>
            <p>
              Currently contributing to open-source through{" "}
              <span className="text-white">GirlScript Summer of Code</span> and{" "}
              <span className="text-white">Hacktoberfest</span>, solving DSA daily on LeetCode,
              and preparing for SDE placements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-surface border border-border rounded-2xl p-6"
          >
            <div className="font-mono text-xs text-muted mb-4">profile.json</div>
            <div className="font-mono text-sm leading-loose">
              <div className="text-muted">{"{"}</div>
              <div className="pl-4">
                <span className="text-accent">"role"</span>
                <span className="text-white">: </span>
                <span className="text-accent2">"Full Stack + AI/ML"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-accent">"education"</span>
                <span className="text-white">: </span>
                <span className="text-accent2">"B.E, Thapar"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-accent">"cgpa"</span>
                <span className="text-white">: </span>
                <span className="text-orange-300">8.59</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-accent">"leetcode"</span>
                <span className="text-white">: </span>
                <span className="text-orange-300">400</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-accent">"location"</span>
                <span className="text-white">: </span>
                <span className="text-accent2">"Punjab, IN"</span>
              </div>
              <div className="text-muted">{"}"}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
