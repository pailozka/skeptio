"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import logo from "@/app/logo.svg";
import OrganicBackground from "./OrganicBackground";

const lines = [
  ["WE", "BUILD", "WEBSITES"],
  ["AND", "AI", "TOOLS"],
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const ctx = gsap.context(() => {
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
      
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        <div className="pointer-events-auto flex flex-col xl:flex-row items-stretch gap-6 xl:gap-8">
          {/* Headline */}
          <div className="relative inline-block select-auto flex-1">
            <div
              className="backdrop-blur-xl bg-background/30 border border-white/20 p-6 md:p-10 shadow-2xl overflow-hidden !rounded-[5rem] md:!rounded-[7rem]"
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

          {/* Subtext panel */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="backdrop-blur-xl bg-background/30 border border-white/20 p-6 md:p-10 shadow-2xl overflow-hidden !rounded-[5rem] md:!rounded-[7rem] w-full sm:max-w-[460px] xl:w-[390px] xl:max-w-none flex flex-col gap-8 justify-between"
          >
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mt-6 md:mt-8"
              animate={{ scaleX: [1, 1, -1, -1, 1] }}
              transition={{
                duration: 4.2,
                times: [0, 0.35, 0.5, 0.85, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
              style={{ transformOrigin: "center center" }}
            >
              <Image
                src={logo}
                alt="Skeptio logo"
                className="w-full h-full object-contain mx-auto"
                priority
              />
            </motion.div>
            <p className="font-sans font-medium text-2xl md:text-[1.85rem] leading-[1.2] text-foreground/90 tracking-[-0.02em] mb-6 md:mb-8">
              {siteData.hero.subtext}
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
