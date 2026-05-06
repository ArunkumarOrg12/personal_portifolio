import { StatusPill } from "@/components/ui/Buttons";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-16 bg-bg-primary/90 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 border-b border-border-subtle/20">
      <div className="text-display-md tracking-tighter text-text-primary">
        marking®
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <StatusPill />
        </div>
        <span className="text-micro text-text-muted hidden md:block">
          EST 09:41 AM
        </span>
        <button className="text-text-primary hover:text-accent-warm transition-colors">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
