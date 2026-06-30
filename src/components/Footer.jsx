export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Saniya Arora. Built with React, Tailwind &amp; Framer Motion.
        </p>
        <p className="font-mono text-xs text-muted">Jalandhar, Punjab, India</p>
      </div>
    </footer>
  );
}
