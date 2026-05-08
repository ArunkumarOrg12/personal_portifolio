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
    category: "Learning Management System",
    image: "/image/work01.png",
    video: "/video/work01.mp4",
    img: "bg-[#161616]",
    link: "https://elevatewe.netlify.app/",
    stack: ["react", "tailwindcss", "typescript", "postgresql"],
  },
  {
    title: "Losenyx",
    category: "Company Portfolio",
    image: "/image/work02.png",
    video: "/video/work02.mp4",
    img: "bg-[#161616]",
    link: "https://elevatewe.netlify.app/",
    stack: ["nextjs", "tailwindcss", "typescript", "gsap", "framer"],
  },
  {
    title: "Lumina",
    category: "Tourist Company",
    image: "/image/work03.png",
    video: "/video/work03.mp4",
    img: "bg-[#1a1a1a]",
    link: "https://travel-website-landing.onrender.com/",
    stack: ["nextjs", "tailwindcss", "typescript", "gsap"],
  },
  {
    title: "Chronos",
    category: "Hotel Booking App",
    image: "/image/work04.png",
    video: "/video/work04.mp4",
    img: "bg-[#0a0a0a]",
    link: "https://python-hotel-management-app.onrender.com/",
    stack: ["python", "django", "html5", "css", "javascript"],
  },
];
