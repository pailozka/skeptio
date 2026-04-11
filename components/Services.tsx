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

    const imageData = ctx.createImageData(W, H);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = Math.random() * 50;
    }
    ctx.putImageData(imageData, 0, 0);

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
    points: ["Custom interfaces, no templates", "Fullstack: React, Next.js, Node.js"],
  },
  {
    id: "02",
    title: "AI INTEGRATION",
    points: ["LLMs and AI chat built into your product", "RAG pipelines, vector search, embeddings"],
  },
  {
    id: "03",
    title: "BUSINESS AUTOMATION",
    points: ["Agent pipelines, workflow automation", "Replace manual processes with AI"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 text-background overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <GrainyBackground />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight uppercase text-background">
            SERVICES
          </h2>
        </div>

        {/* List */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group service-row py-10 border-t border-background/10 last:border-b flex flex-col md:flex-row md:items-center gap-4 md:gap-0 -mx-6 px-6 cursor-default"
            >
              {/* Title */}
              <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight uppercase text-background md:flex-1">
                {s.title}
              </h3>

              {/* Points — fades in on hover via GSAP */}
              <ul className="flex flex-col gap-1 md:w-[40%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="font-sans text-base font-bold leading-relaxed"
                    style={{ color: "#ffffff" }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
