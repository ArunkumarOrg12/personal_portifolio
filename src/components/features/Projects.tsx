"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useRef, useState } from "react";

function ProjectCard({ project }: { project: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !isZoomed) {
      videoRef.current.play().catch(e => console.log(e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isZoomed) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div 
        className={`group relative aspect-[4/5] md:aspect-[1/1] overflow-hidden bg-bg-tertiary rounded-sm border border-border-subtle/50 ${project.image || project.video ? 'cursor-zoom-in' : 'cursor-pointer'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (project.video || project.image) setIsZoomed(true);
        }}
      >
        {/* Base Background */}
        <div className={`absolute inset-0 ${project.img || "bg-bg-tertiary"} transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105`} />

        {/* Media Container for Intrinsic Aspect Ratio */}
        {project.image && (
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 z-10 pointer-events-none">
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2 group-hover:scale-[1.02]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto block"
              />
              {/* Hover Video */}
              {project.video && (
                <video 
                  ref={videoRef}
                  src={project.video}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              )}
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80 z-20 pointer-events-none" />
        
        <a 
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-6 right-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-30 cursor-pointer"
        >
           <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-bg-secondary hover:text-white transition-colors">
             <ArrowUpRight className="w-5 h-5" />
           </div>
        </a>

        <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
          <h3 className="text-heading-lg text-text-primary mb-1">{project.title}</h3>
          <p className="text-caption text-text-muted uppercase tracking-widest">{project.category}</p>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[210]"
            onClick={() => setIsZoomed(false)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative w-full max-w-7xl max-h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 cursor-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {project.video ? (
              <video 
                src={project.video}
                autoPlay
                controls
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                disablePictureInPicture
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : (
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function Projects() {
  const projects = [
    { title: "Elevate", category: "Learning Management System", image: "/image/work01.png", video: "/video/work01.mp4", img: "bg-[#161616]",link: "https://elevatewe.netlify.app/" },
    { title: "Nova", category: "Fintech", img: "bg-[#111111]" },
    { title: "Lumina", category: "Web3 Platform", img: "bg-[#1a1a1a]" },
    { title: "Chronos", category: "Creative Agency", img: "bg-[#0a0a0a]" },
  ];

  return (
    <section id="work" className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border-subtle pb-8 gap-6">
        <h2 className="text-display-lg text-text-primary tracking-tighter">Selected Work</h2>
        <p className="text-body-lg text-text-secondary max-w-[400px]">
          A curated collection of recent digital products, brands, and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
