"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already loaded (e.g. from cache before this mounted)
    if (typeof window !== "undefined" && (window as any).isHeroImagesLoaded) {
      setTimeout(() => setIsLoading(false), 800); // minimum showing time
      return;
    }

    const handleLoaded = () => {
      // Ensure the loader shows for a brief moment even if cached
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    window.addEventListener("hero-images-loaded", handleLoaded);
    return () => window.removeEventListener("hero-images-loaded", handleLoaded);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center pointer-events-auto"
        >
          <video
            src="/video/Loading.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
