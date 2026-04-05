"use client";
import { motion } from "framer-motion";

const WaveGradient = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-white z-0 pointer-events-none">
      {/* 1. The Liquid Gradient Layer - Now with sinusoidal/easeInOut movement */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{
          background: `linear-gradient(105deg, #DBDCF9, #E7EAF9, #8E82DC, #DBDCF9)`,
          backgroundSize: "200% 200%",
          filter: "url(#liquid-noise) blur(40px)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "20% 80%", "80% 20%", "0% 0%"],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 25, // Slower for more liquid feel
          repeat: Infinity,
          ease: "easeInOut", // This creates the sinusoidal acceleration/deceleration
        }}
      />

      {/* 2. The SVG Filter (Standard version) */}
      <svg className="hidden">
        <filter id="liquid-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005" // Large, organic waves
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="100" 
          />
        </filter>
      </svg>

      {/* 3. Softness & Blend Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "contrast(1.1) brightness(1.05)" 
        }} 
      />
    </div>
  );
};

export default WaveGradient;
