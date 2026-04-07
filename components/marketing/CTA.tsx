"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function CTA() {
  return (
    <section className="bg-foreground py-32 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-bold text-[10px] tracking-[0.4em] text-background/40 uppercase mb-12"
        >
          {siteData.cta.subtitle}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-display font-bold text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] tracking-tighter text-background uppercase max-w-[1200px] mb-20"
        >
          {siteData.cta.headline}
        </motion.h2>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-background text-foreground px-12 py-5 font-sans font-bold text-sm tracking-[0.2em] uppercase hover:bg-surface-highest transition-colors"
        >
          {siteData.cta.button}
        </motion.button>
      </div>
    </section>
  );
}
