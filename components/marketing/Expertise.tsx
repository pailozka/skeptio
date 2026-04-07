"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Expertise() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-foreground/40 uppercase">/ OUR EXPERTISE</span>
          <div className="h-[1px] bg-foreground/5 grow" />
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {siteData.expertise.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-sans font-medium text-[10px] tracking-widest text-foreground/40">{item.id}</span>
                {item.badge && (
                  <span className="bg-foreground text-background text-[8px] font-bold px-2 py-0.5 tracking-tighter rounded-none">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-3xl tracking-tight text-foreground uppercase mb-6">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed max-w-[320px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
