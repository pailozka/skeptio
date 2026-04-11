"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

const lines = [
  ["WE", "BUILD", "WEBSITES"],
  ["AND", "AI", "TOOLS"],
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const words = headlineRef.current.querySelectorAll<HTMLElement>(".word-inner");

    gsap.fromTo(
      words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-start justify-end px-6 pb-20 pt-32 bg-background overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Headline */}
        <div className="relative mb-8">
          <h1
            ref={headlineRef}
            className="font-display font-bold text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight text-foreground uppercase max-w-[1000px]"
          >
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.map((word, wi) => (
                  <span
                    key={wi}
                    className="inline-block mr-[0.2em] last:mr-0"
                  >
                    <span className="word-inner inline-block">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="font-sans font-medium text-lg md:text-xl text-foreground/60 max-w-[420px] leading-relaxed mb-12"
        >
          {siteData.hero.subtext}
        </motion.p>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
        className="absolute top-0 right-[15%] w-[1px] h-full bg-foreground/5 hidden md:block origin-top"
      />
    </section>
  );
}
