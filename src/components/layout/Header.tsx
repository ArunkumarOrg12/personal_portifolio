"use client";

import { StatusPill } from "@/components/ui/Buttons";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const navLinks = [
  { name: "Home", href: "/", target: "home" },
  { name: "About", href: "/#about", target: "about" },
  { name: "Work", href: "/#work", target: "work" },
  { name: "Experience", href: "/#experience", target: "experience" },
  { name: "Contact", href: "/#contact", target: "contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionIds = navLinks.map((link) => link.target);

    const updateActiveSection = () => {
      const viewportOffset = window.scrollY + 120;

      const currentSection =
        [...sectionIds]
          .reverse()
          .find((sectionId) => {
            const element = document.getElementById(sectionId);
            return element ? viewportOffset >= element.offsetTop : false;
          }) ?? "home";

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [isHomePage]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] h-16 bg-bg-primary/90 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 border-b border-border-subtle/20">
        <div className="flex items-center gap-8 lg:gap-12">
          <div className="text-display-md tracking-tighter text-text-primary">
            developer®
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (isHomePage) {
                if (link.target === "home") {
                  return (
                  <button
                      key={link.name}
                      type="button"
                      onClick={() => {
                        animateScroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
                        setActiveSection("home");
                      }}
                      className={`text-sm font-medium transition-colors hover:text-text-primary ${activeSection === link.target ? "text-text-primary" : "text-text-muted"}`}
                    >
                      {link.name}
                    </button>
                  );
                }

                return (
                  <ScrollLink
                    key={link.name}
                    to={link.target}
                    spy
                    smooth="easeInOutQuart"
                    duration={500}
                    offset={-88}
                    onSetActive={() => setActiveSection(link.target)}
                    className={`cursor-pointer text-sm font-medium transition-colors hover:text-text-primary ${activeSection === link.target ? "text-text-primary" : "text-text-muted"}`}
                    activeClass="text-text-primary"
                  >
                    {link.name}
                  </ScrollLink>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <StatusPill />
          </div>
          <span className="text-micro text-text-muted hidden md:block">
            EST 09:41 AM
          </span>
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="text-text-primary hover:text-accent-warm transition-colors md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            id="mobile-nav"
            className="absolute top-16 left-0 right-0 border-b border-border-subtle bg-bg-primary/95 px-4 py-6"
            onClick={(event) => event.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                if (isHomePage) {
                  if (link.target === "home") {
                    return (
                      <button
                        key={link.name}
                        type="button"
                        onClick={() => {
                          animateScroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
                          setActiveSection("home");
                          setIsMobileMenuOpen(false);
                        }}
                        className={`rounded-full border border-border-subtle px-4 py-3 text-left text-body-sm uppercase tracking-[0.18em] transition-colors hover:text-text-primary ${activeSection === link.target ? "text-text-primary" : "text-text-secondary"}`}
                      >
                        {link.name}
                      </button>
                    );
                  }

                  return (
                    <ScrollLink
                      key={link.name}
                      to={link.target}
                      spy
                      smooth="easeInOutQuart"
                      duration={500}
                      offset={-88}
                      onSetActive={() => setActiveSection(link.target)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`cursor-pointer rounded-full border border-border-subtle px-4 py-3 text-body-sm uppercase tracking-[0.18em] transition-colors hover:text-text-primary ${activeSection === link.target ? "text-text-primary border-white" : "text-text-secondary"}`}
                    >
                      {link.name}
                    </ScrollLink>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full border border-border-subtle px-4 py-3 text-body-sm uppercase tracking-[0.18em] text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
