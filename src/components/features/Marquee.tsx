"use client";
import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-24 bg-bg-primary border-y border-border-subtle flex items-center relative z-0">
      <motion.div 
        className="flex shrink-0 w-fit"
        animate={{ x: "-50%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <span 
            key={i} 
            className="text-display-xl mx-8 font-light tracking-tighter"
            style={{ 
              WebkitTextStroke: "1px var(--color-border-subtle)", 
              color: "transparent" 
            }}
          >
            PREVIOUS PROJECTS — 
          </span>
        ))}
      </motion.div>
    </div>
  );
}
