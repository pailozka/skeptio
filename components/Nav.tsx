"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex flex-col items-center pointer-events-none">
      {/* Brand - Centered above Nav */}
      <div className="pt-8 pb-4">
        <a
          href="/"
          className="font-display font-black text-3xl text-[#1B2220] tracking-tighter uppercase pointer-events-auto"
        >
          SKEPTIO
        </a>
      </div>

      {/* Navigation Pill - Floating Centered */}
      <nav
        className={`pointer-events-auto px-6 h-12 flex items-center transition-all duration-300 rounded-full border ${
          scrolled 
            ? "bg-white/80 border-navy/10 backdrop-blur-md shadow-lg scale-95" 
            : "bg-white/20 border-navy/5 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center gap-8">
          {[
            { label: "Work", href: "#work" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] text-navy/50 hover:text-navy transition-colors uppercase tracking-[0.2em] font-bold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-1.5 bg-[#1B2220] text-white text-[10px] font-bold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity rounded-full ml-2"
          >
            Start
          </a>
        </div>
      </nav>
    </div>
  );
}
