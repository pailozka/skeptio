"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import OrganicBackground from "./OrganicBackground";

const lines = [
  ["WE", "BUILD", "WEBSITES"],
  ["AND", "AI", "TOOLS"],
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    let ctx = gsap.context(() => {
      const words = headlineRef.current!.querySelectorAll<HTMLElement>(".word-inner");
      
      // Delay to ensure rendering is complete, especially on network mobile browsers where layout may fluctuate initially
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
    }, headlineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-start justify-end px-6 pb-20 pt-32 bg-background overflow-hidden"
    >
      <OrganicBackground />
      
      <div className="max-w-[1440px] w-full mx-auto relative z-10 pointer-events-none">
        {/* Headline */}
        <div className="relative mb-8 inline-block select-auto pointer-events-auto">
          <div 
            className="backdrop-blur-xl bg-background/30 border border-white/20 p-6 md:p-10 shadow-2xl overflow-hidden !rounded-[6rem]"
          >
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
        </div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <p className="font-sans font-medium text-lg md:text-xl text-foreground/90 max-w-[420px] leading-relaxed mb-12 backdrop-blur-lg bg-background/40 border border-white/10 rounded-2xl p-6 shadow-xl">
            {siteData.hero.subtext}
          </p>
        </motion.div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
        className="absolute top-0 right-[15%] w-[1px] h-full bg-foreground/10 hidden md:block origin-top z-10"
      />
    </section>
  );
}
