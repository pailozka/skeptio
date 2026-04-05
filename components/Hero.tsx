"use client";
import { motion } from "framer-motion";
import WaveGradient from "./WaveGradient";

const TICKER_ITEMS =
  "NEXT.JS · REACT · TYPESCRIPT · NODE.JS · POSTGRESQL · OPENAI · ANTHROPIC · FIGMA · TAILWIND · PRISMA · ";

const services = [
  "Web Design",
  "Fullstack Dev",
  "SEO",
  "AI Integration",
  "Business Automation",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex flex-col overflow-hidden bg-navy">
      {/* Holographic Iridescent Fluid Background */}
      <WaveGradient />

      {/* Content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center items-center text-center pt-32 pb-16">
        {/* Headline */}
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-display font-black leading-none uppercase pb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block text-navy text-[clamp(4rem,10vw,10rem)]">
              We build
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-[clamp(4rem,10vw,10rem)] pb-4">
              the web.
            </span>
          </motion.h1>
          <motion.p 
            className="mt-10 mx-auto text-navy/70 font-medium text-lg md:text-xl leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack development, sharp design, SEO, and AI — built to last,
            shipped to perform.
          </motion.p>
          <motion.div 
            className="mt-12 flex items-center justify-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-navy text-[#F5F7FA] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-teal-500 transition-colors shadow-xl"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="text-navy/70 hover:text-blue-600 transition-colors text-xs uppercase tracking-[0.15em] font-bold"
            >
              View work →
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 border-t border-navy/10 py-4 overflow-hidden bg-white/40 backdrop-blur-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="text-navy text-xs uppercase tracking-[0.2em] pr-8 flex-shrink-0 font-bold"
              style={{ fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {TICKER_ITEMS}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
