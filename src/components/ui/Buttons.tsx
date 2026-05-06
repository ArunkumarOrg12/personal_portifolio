import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function PrimaryArrowButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full border border-[#262626] bg-transparent text-white transition-all duration-300 hover:scale-105 hover:border-white",
        className
      )}
      {...props}
    >
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
}

export function TextLink({ className, children, ...props }: TextLinkProps) {
  return (
    <a
      className={cn(
        "text-[12px] uppercase tracking-[0.05em] text-[#A3A3A3] underline-offset-4 transition-colors duration-150 hover:text-white hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function StatusPill() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#262626] bg-transparent px-4 py-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </span>
      <span className="text-[12px] uppercase tracking-[0.05em] text-[#A3A3A3]">
        Available for project
      </span>
    </div>
  );
}
