"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HeroCanvas } from "@/components/features/HeroCanvas";
import { ArrowUpRight } from "lucide-react";

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
    <section id="home" ref={containerRef} className="relative h-[300vh] w-full bg-bg-primary">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 px-4 md:px-6">
        <HeroCanvas scrollProgress={scrollYProgress} />

        {/* Top Left Label */}
        <div className="text-micro text-text-muted mt-8 uppercase leading-relaxed relative z-10 pointer-events-none">
          Full Stack <br />
          Developer
        </div>

        {/* Centered Scroll Reveal Text */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 pointer-events-none flex flex-col items-center gap-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-text-primary drop-shadow-lg">
            Building robust web applications that scale.
          </h1>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex items-end justify-center sm:justify-between w-full relative z-10">
          <div className="flex flex-row gap-4 sm:justify-start">
            <ScrollLink
              to="work"
              smooth="easeInOutQuart"
              duration={500}
              offset={-88}
              className="cursor-pointer rounded-full bg-text-primary text-bg-primary px-6 py-3 font-medium hover:bg-white/90 transition-colors pointer-events-auto flex flex-row items-center gap-2"
            >
              myworks
                          <ArrowUpRight className="h-4 w-4 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />

            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth="easeInOutQuart"
              duration={500}
              offset={-88}
              className="cursor-pointer rounded-full border border-text-muted text-text-primary px-6 py-3 font-medium hover:bg-text-primary/10 transition-colors pointer-events-auto backdrop-blur-sm flex flex-row items-center gap-2"
            >
              my experience
                          <ArrowUpRight className="h-4 w-4 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </ScrollLink>
          </div>
          <div className="text-display-lg text-text-primary hidden sm:block pointer-events-none">
            © 2026
          </div>
        </div>
      </div>
    </section>
  );
}
