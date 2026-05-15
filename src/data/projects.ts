export type ProjectStackIcon =
  | "react"
  | "postgresql"
  | "nextjs"
  | "tailwindcss"
  | "typescript"
  | "django"
  | "html5"
  | "css"
  | "javascript"
  | "python"
  | "gsap"
  | "framer";

export interface Project {
  title: string;
  category: string;
  image?: string;
  video?: string;
  img: string;
  link?: string;
  stack?: ProjectStackIcon[];
}

export const projects: Project[] = [
  {
    title: "Elevate",
    category: "Full-Stack Learning Management System",
    image: "/image/work01.png",
    video: "/video/Work01.webm",
    img: "bg-[#161616]",
    link: "https://elevatewe.netlify.app/",
    stack: ["react", "tailwindcss", "typescript", "postgresql"],
  },
  {
    title: "Losenyx",
    category: "Cyber Security Corporate Website",
    image: "/image/work02.png",
    video: "/video/Work02.webm",
    img: "bg-[#161616]",
    link: "https://elevatewe.netlify.app/",
    stack: ["nextjs", "tailwindcss", "typescript", "gsap", "framer"],
  },
  {
    title: "Jadoo",
    category: "Modern Travel Experience",
    image: "/image/work03.png",
    video: "/video/Work03.webm",
    img: "bg-[#1a1a1a]",
    link: "https://travel-website-landing.onrender.com/",
    stack: ["nextjs", "tailwindcss", "typescript", "gsap"],
  },
  {
    title: "Chronos",
    category: "Full-Stack Hotel Management",
    image: "/image/work04.png",
    video: "/video/Work04.webm",
    img: "bg-[#0a0a0a]",
    link: "https://python-hotel-management-app.onrender.com/",
    stack: ["python", "django", "html5", "css", "javascript"],
  },
];
