"use client";
import { motion } from "framer-motion";

export default function AnimatedLines() {
  // Generate 6 lines with slightly varied configurations
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-evenly opacity-30">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#78D7C1] to-transparent -ml-[50%]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            y: [0, 20, -20, 0],
            rotate: [i % 2 === 0 ? 2 : -2, i % 2 === 0 ? -1 : 1, i % 2 === 0 ? 2 : -2],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
