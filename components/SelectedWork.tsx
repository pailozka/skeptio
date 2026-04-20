"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

type Project = (typeof siteData.projects)[number];

const MYRESTIQ_BG =
  "linear-gradient(to right top, #f5c126 0%, #f39200 40%, #f15530 100%)";

const DNESNISONG_BG =
  "linear-gradient(to right top, #c084fc 0%, #f472b6 40%, #fbbf24 100%)";

function getProjectStyle(project: Project) {
  if (project.title === "MYRESTIQ") {
    return { background: MYRESTIQ_BG, isLight: true };
  }
  if (project.title === "DNESNISONG.CZ") {
    return { background: DNESNISONG_BG, isLight: true };
  }

  return { background: "var(--gradient-card)", isLight: false };
}

function ProjectCard({ project }: { project: Project }) {
  const { background, isLight } = getProjectStyle(project);
  const tone = isLight
    ? {
        overline: "text-foreground/60",
        title: "text-foreground",
        description: "text-foreground/65",
        tag: "text-foreground/50 border-foreground/20",
        link: "text-foreground border-foreground/30 hover:border-foreground",
      }
    : {
        overline: "text-background/65",
        title: "text-background",
        description: "text-background/75",
        tag: "text-background/70 border-background/25",
        link: "text-background border-background/35 hover:border-background",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative h-[420px] md:h-[560px] p-6 md:p-10 flex flex-col justify-end overflow-hidden border border-surface-dim/25"
    >
      {/* Animated Backgrounds */}
      <div className="pointer-events-none absolute inset-0 transition-all duration-700 opacity-40 saturate-50 group-hover:opacity-100 group-hover:saturate-100 group-active:opacity-100 group-active:saturate-100">
        <div className="absolute inset-0" style={{ background }} />
        {!isLight && (
          <>
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div
              className="absolute inset-0 opacity-20 mix-blend-screen"
              style={{ background: "var(--gradient-gold)" }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start gap-4 pointer-events-none">
        <span
          className={`font-sans font-bold text-[10px] tracking-[0.3em] ${tone.overline}`}
        >
          {project.id} / {project.category}
        </span>
        <h3
          className={`font-display font-bold text-4xl md:text-5xl tracking-tighter uppercase ${tone.title}`}
        >
          {project.title}
        </h3>
        <p
          className={`font-sans text-sm max-w-[300px] leading-relaxed ${tone.description}`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className={`font-sans text-[8px] tracking-widest border px-2 py-0.5 uppercase ${tone.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 flex items-center gap-2 font-sans font-bold text-[10px] tracking-[0.2em] uppercase border-b pb-1 transition-all pointer-events-auto ${tone.link}`}
        >
          VISIT PROJECT
          <span className="text-xl">→</span>
        </a>
      </div>
    </motion.div>
  );
}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
