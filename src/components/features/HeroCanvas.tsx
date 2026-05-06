"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface HeroCanvasProps {
  scrollProgress: MotionValue<number>;
}

export function HeroCanvas({ scrollProgress }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const frameCount = 241;
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(6, "0");
      img.src = `/frames_space/frame_${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        // Draw the first frame once everything is ready
        if (loadedCount === frameCount && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          drawCover(ctx, loadedImages[0], canvasRef.current);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Helper to draw image using object-fit: cover logic
  const drawCover = (ctx: CanvasRenderingContext2D | null, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    if (images.length === frameCount && canvasRef.current) {
      // Map scroll progress (0 to 1) to the frame index (0 to 240)
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(latest * frameCount)
      );
      
      const ctx = canvasRef.current.getContext("2d");
      drawCover(ctx, images[frameIndex], canvasRef.current);
    }
  });

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-70">
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      {/* Fallback dark gradient over the canvas to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />
    </div>
  );
}
