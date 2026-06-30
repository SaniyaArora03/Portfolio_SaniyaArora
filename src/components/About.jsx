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
  I'm a Computer Engineering student passionate about building scalable
  software that solves real-world problems. My interests span
  <span className="text-white"> Full Stack Development</span>,
  <span className="text-white"> Artificial Intelligence</span>, and
  <span className="text-white"> Machine Learning</span>, where I enjoy
  designing systems that are both practical and efficient.
</p>

<p>
  I've developed projects ranging from an
  <span className="text-white"> AI-powered Code Reviewer</span> using
  CodeBERT, FAISS, and Retrieval-Augmented Generation (RAG), to
  <span className="text-white"> ReviewLoad</span>, an intelligent GitHub
  reviewer recommendation platform that combines developer expertise,
  review workload, fairness, and burnout estimation to recommend the most
  suitable reviewer for pull requests.
</p>

<p>
  I enjoy understanding the engineering decisions behind every system—
  whether it's designing modular backend architectures, optimizing API
  interactions, or choosing algorithms that improve scalability,
  maintainability, and performance.
</p>

<p>
  I previously contributed to open-source through
  <span className="text-white"> GirlScript Summer of Code (GSSoC)</span>
  and
  <span className="text-white"> Hacktoberfest</span>. Alongside this, I
  regularly strengthen my problem-solving skills through Data Structures
  & Algorithms and continuously explore modern software engineering and
  AI technologies.
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
