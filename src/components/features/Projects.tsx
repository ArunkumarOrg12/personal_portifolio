"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { DiPostgresql } from "react-icons/di";
import { FaPython, FaReact } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDjango,
  SiFramer,
  SiGsap,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  projects,
  type Project,
  type ProjectStackIcon,
} from "@/data/projects";

interface ProjectsProps {
  title?: string;
  description?: string;
  limit?: number;
  showAllProjectsButton?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const stackIconMap: Record<ProjectStackIcon, IconType> = {
  react: FaReact,
  postgresql: DiPostgresql,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  django: SiDjango,
  html5: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  python: FaPython,
  gsap: SiGsap,
  framer: SiFramer,
};

export function ProjectCard({ project }: ProjectCardProps) {
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
        
        {/* Tech Stack Icons */}
        {project.stack && (
          <div className="absolute top-6 left-6 z-30 flex gap-2 pointer-events-none">
            {project.stack.map((iconName) => {
              const Icon = stackIconMap[iconName];

              return (
                <div
                  key={iconName}
                  className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-sm"
                >
                  <Icon className="w-8 h-8" />
                </div>
              );
            })}
          </div>
        )}
        
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

export function Projects({
  title = "Selected Work",
  description = "A curated collection of recent digital products, brands, and experiences.",
  limit = 4,
  showAllProjectsButton = true,
}: ProjectsProps) {
  const visibleProjects = projects.slice(0, limit);
  const hasMoreProjects = showAllProjectsButton && projects.length > limit;

  return (
    <section id="work" className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border-subtle pb-8 gap-6">
        <h2 className="text-display-lg text-text-primary tracking-tighter">{title}</h2>
        <p className="text-body-lg text-text-secondary max-w-[400px]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-12 flex justify-center">
          <Link
            href="/all-projects"
            className="group inline-flex items-center gap-3 rounded-full border border-border-subtle px-8 py-4 text-body-sm text-text-primary transition-all duration-300 hover:border-text-primary hover:bg-bg-secondary"
          >
            <span className="uppercase tracking-[0.18em] text-text-secondary transition-colors group-hover:text-text-primary">
              View More Projects
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </section>
  );
}
