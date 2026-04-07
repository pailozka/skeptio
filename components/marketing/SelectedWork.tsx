"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight uppercase text-foreground">
            SELECTED WORK
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-dim/20 border border-surface-dim/20 overflow-hidden">
          {siteData.projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative h-[600px] bg-background p-8 flex flex-col justify-end overflow-hidden"
            >
              {/* Card Image */}
              <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start gap-4">
                <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-foreground/60">{project.id} // {project.category}</span>
                <h3 className="font-display font-bold text-5xl tracking-tighter text-foreground group-hover:text-foreground/80 transition-colors uppercase">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-foreground/40 max-w-[280px] leading-relaxed group-hover:text-foreground/60 transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="font-sans text-[8px] tracking-widest text-foreground/30 border border-foreground/10 px-2 py-0.5 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 font-sans font-bold text-[10px] tracking-[0.2em] uppercase border-b border-foreground/20 pb-1 hover:border-foreground transition-all"
                >
                  VISIT PROJECT
                  <span className="text-xl">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
