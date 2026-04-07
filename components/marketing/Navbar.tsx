"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-surface-dim/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display font-bold text-2xl tracking-tighter">
          {siteData.logo}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {siteData.nav.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="font-sans font-medium text-xs tracking-widest hover:text-foreground/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-foreground text-background px-8 py-3 font-sans font-bold text-xs tracking-widest hover:bg-surface-highest hover:text-foreground transition-all">
            {siteData.hero.cta}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
        >
          <span className={`w-6 h-[2px] bg-foreground transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-foreground transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-foreground transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {siteData.nav.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display font-bold text-4xl tracking-tighter"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-foreground text-background w-2/3 py-4 font-sans font-bold text-sm tracking-widest mt-4">
              {siteData.hero.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
