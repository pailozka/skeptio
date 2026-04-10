"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function GrainyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    // Fine grain layer
    const imageData = ctx.createImageData(W, H);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = Math.random() * 50; // denser grain
    }
    ctx.putImageData(imageData, 0, 0);

    // Sparkle layer — more frequent, smaller points
    const sparkleCount = Math.floor((W * H) / 700);
    for (let i = 0; i < sparkleCount; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 0.3 + 0.1;
      const opacity = Math.random() * 0.65 + 0.25;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${opacity})`;
      ctx.fill();

      // Occasional larger bright star
      if (Math.random() > 0.92) {
        const sr = r * 1.8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, sr * 3);
        gradient.addColorStop(0, `rgba(255,255,255,${opacity * 0.6})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(x, y, sr * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
    />
  );
}

const services = [
  {
    id: "01",
    title: "WEB DESIGN & DEVELOPMENT",
    points: [
      "Custom interfaces — no templates",
      "Fullstack: React, Next.js, Node.js",
      "Mobile-first, performance-optimized",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="32" height="24" />
        <path d="M4 14h32" />
        <path d="M14 22l-4 3 4 3" />
        <path d="M26 22l4 3-4 3" />
        <path d="M18 28l4-6" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "AI INTEGRATION",
    points: [
      "LLMs and AI chat built into your product",
      "RAG pipelines, vector search, embeddings",
      "OpenAI, Anthropic, open-source models",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="12" y="6" width="16" height="20" />
        <path d="M20 26v8" />
        <circle cx="20" cy="14" r="3" />
        <path d="M12 14H6M34 14h-6" />
        <path d="M12 10H6M34 10h-6" />
        <path d="M12 18H6M34 18h-6" />
        <path d="M14 34h12" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 text-background overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
      <GrainyBackground />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight uppercase text-background">
            SERVICES
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 border-l border-t border-background/10"
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={item}
              className="border-r border-b border-background/10 p-10 flex flex-col items-center text-center group hover:bg-background/[0.04] transition-colors"
            >
              {/* Icon */}
              <div className="text-background/60 group-hover:text-background transition-colors mb-6">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg tracking-tight text-background mb-5 leading-tight">
                {s.title}
              </h3>

              {/* Bullet points */}
              <ul className="space-y-2 text-left w-full max-w-xs mb-8">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-background/60 font-sans">
                    <span className="mt-[5px] w-1 h-1 bg-background/40 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-auto font-sans font-bold text-[10px] tracking-[0.25em] uppercase border border-background/30 px-5 py-2.5 text-background hover:bg-background hover:text-foreground transition-colors"
              >
                LEARN MORE
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
