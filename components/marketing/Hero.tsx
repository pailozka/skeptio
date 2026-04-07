"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex flex-col items-start justify-end px-6 pb-20 pt-32 bg-background overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Badge */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-sans font-bold text-[10px] tracking-[0.3em] text-foreground/40 mb-12"
        >
          {siteData.hero.badge}
        </motion.p>

        {/* Headline */}
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display font-bold text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight text-foreground uppercase max-w-[1000px]"
          >
            {siteData.hero.headline.split("AND").map((text, i) => (
              <span key={i} className="block">
                {text}
                {i === 0 && <span className="font-light italic text-foreground ml-4 hidden md:inline">AND</span>}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans font-medium text-lg md:text-xl text-foreground/60 max-w-[420px] leading-relaxed mb-12"
        >
          {siteData.hero.subtext}
        </motion.p>
      </div>

      {/* Decorative Monolith (Aggressive Asymmetry) */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
        className="absolute top-0 right-[15%] w-[1px] h-full bg-foreground/5 hidden md:block origin-top"
      />
    </section>
  );
}
