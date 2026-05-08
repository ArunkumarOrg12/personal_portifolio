import { StatusPill } from "@/components/ui/Buttons";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-16 bg-bg-primary/90 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 border-b border-border-subtle/20">
      <div className="flex items-center gap-8 lg:gap-12">
        <div className="text-display-md tracking-tighter text-text-primary">
          developer®
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:block">
          <StatusPill />
        </div>
        <span className="text-micro text-text-muted hidden md:block">
          EST 09:41 AM
        </span>
        <button className="text-text-primary hover:text-accent-warm transition-colors md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
