"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { HeroCanvas } from "@/components/features/HeroCanvas";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reveal text based on scroll progress
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-bg-primary">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 px-4 md:px-6">
        <HeroCanvas scrollProgress={scrollYProgress} />

        {/* Top Left Label */}
        <div className="text-micro text-text-muted mt-8 uppercase leading-relaxed relative z-10 pointer-events-none">
          Independent Creative <br />
          Director & Designer
        </div>

        {/* Centered Scroll Reveal Text */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 pointer-events-none flex flex-col items-center gap-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-text-primary drop-shadow-lg">
            Hai welcome to my world
          </h1>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between w-full relative z-10">
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-text-primary text-bg-primary px-6 py-3 font-medium hover:bg-white/90 transition-colors pointer-events-auto">
              myworks
            </button>
            <button className="rounded-full border border-text-muted text-text-primary px-6 py-3 font-medium hover:bg-text-primary/10 transition-colors pointer-events-auto backdrop-blur-sm">
              my experience
            </button>
          </div>
          <div className="text-display-lg text-text-primary hidden sm:block pointer-events-none">
            © 2025
          </div>
        </div>
      </div>
    </section>
  );
}
