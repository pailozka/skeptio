export default function Footer() {
  return (
    <footer className="border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-black text-xl text-navy">
          SKEPTIO
        </span>
        <span className="text-navy/30 text-xs">
          © {new Date().getFullYear()} Skeptio. All rights reserved.
        </span>
        <div className="flex gap-6">
          {[
            { label: "Work", href: "#work" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-navy/40 hover:text-gold text-xs uppercase tracking-[0.15em] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
