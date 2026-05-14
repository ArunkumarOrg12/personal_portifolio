"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const stats = [
    { label: "Projects Completed", value: 10, suffix: "+", pad: false },
    { label: " happy clients", value: 3, suffix: "", pad: true },
    { label: "Years Experience", value: 2, suffix: "", pad: true },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        if (!el) return;
        
        const stat = stats[index];
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom center",
            once: true,
          },
          onUpdate: () => {
            let displayValue = Math.floor(obj.val).toString();
            if (stat.pad) {
              displayValue = displayValue.padStart(2, "0");
            }
            el.innerText = displayValue + stat.suffix;
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full border-y border-border-subtle bg-bg-primary relative z-10">
      <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-border-subtle max-w-[1280px] mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-12 px-8 w-full md:w-1/3 hover:bg-bg-secondary transition-colors cursor-default">
            <span 
              ref={(el) => {
                numberRefs.current[i] = el;
              }} 
              className="text-display-md text-text-primary"
            >
              {stat.pad ? "00" : "0"}{stat.suffix}
            </span>
            <span className="text-caption text-text-muted mt-2 uppercase">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
