"use client";

import { siteData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-surface-dim/20 py-20 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col items-start gap-4">
          <span className="font-display font-bold text-3xl tracking-tighter">{siteData.logo}</span>
          <p className="font-sans text-[10px] tracking-[0.2em] text-foreground/40 max-w-[240px] uppercase">
            ARCHITECTURAL MINIMALISM FOR THE DIGITAL AGE.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {siteData.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-bold text-[10px] tracking-widest text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-surface-dim/10">
        <p className="font-sans text-[8px] tracking-widest text-foreground/20 text-center md:text-left">
          {siteData.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
