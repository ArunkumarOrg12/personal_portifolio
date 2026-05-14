"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We discuss your business goals, target audience, and the specific problems you want to solve. I ensure we're aligned on the outcomes."
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "I plan the optimal tech stack, design the system architecture for scale, and create wireframes to map out the user journey."
  },
  {
    num: "03",
    title: "Development & Delivery",
    desc: "I build the product using clean, maintainable code, set up robust CI/CD pipelines, and deliver a production-ready application."
  }
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={sectionRef} className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-display-lg text-text-primary tracking-tighter leading-[1.1] mb-6">
            How We Collaborate.
          </h2>
          <p className="text-body-lg text-text-secondary">
            A simple, transparent process designed to reduce complexity and deliver high-performance scalable products.
          </p>
        </div>

        <div className="md:w-2/3 relative">
          {/* Vertical Progress Line Background */}
          <div className="absolute left-7 md:left-10 top-8 bottom-8 w-px bg-border-subtle" />
          
          {/* Animated Vertical Progress Line */}
          <motion.div 
            className="absolute left-7 md:left-10 top-8 w-px bg-text-primary origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 relative z-10">
            {steps.map((step, i) => {
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex gap-8 md:gap-12 group"
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-bg-primary border border-border-subtle flex items-center justify-center text-body-lg md:text-heading-sm text-text-primary group-hover:border-text-primary group-hover:scale-110 transition-all duration-300">
                    {step.num}
                  </div>
                  <div className="flex flex-col pt-1 md:pt-4">
                    <h3 className="text-heading-lg text-text-primary mb-4">{step.title}</h3>
                    <p className="text-body text-text-secondary max-w-md">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
