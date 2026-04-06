"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-center px-8 pt-6 pointer-events-auto">
      <a
        href="/"
        className="font-display font-black text-2xl text-dark tracking-tight uppercase"
      >
        SKEPTIO
      </a>

      <div className="flex items-center gap-12 ml-16">
        {[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs text-dark uppercase tracking-[0.2em] font-black hover:opacity-60 transition-opacity"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="px-6 py-2 bg-dark text-light text-xs font-semibold uppercase tracking-[0.15em] hover:bg-dark/90 transition-colors"
        >
          Start
        </a>
      </div>
    </nav>
  );
}
