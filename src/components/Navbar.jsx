import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-lg border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display font-semibold text-base tracking-tight text-white hover:text-accent transition-colors"
        >
          Saniya<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-4 py-2 text-sm text-muted hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/SaniyaArora03"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/saniya-arora-214509298"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors"
          >
            Get in touch
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left py-2.5 text-sm text-muted hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-3 mt-2 border-t border-border">
                <a href="https://github.com/SaniyaArora03" target="_blank" rel="noreferrer" className="text-muted hover:text-white">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/saniya-arora-214509298" target="_blank" rel="noreferrer" className="text-muted hover:text-white">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:sarora1_be23@thapar.edu" className="text-muted hover:text-white">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
