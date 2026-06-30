import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow="Contact" title="Let's build something" center />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          Open to SDE roles, internships, and interesting problems. The fastest
          way to reach me is email — I check it more often than I'd like to admit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:sarora1_be23@thapar.edu"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all"
          >
            <Mail size={16} />
            sarora1_be23@thapar.edu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/SaniyaArora03"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/saniya-arora-214509298"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
