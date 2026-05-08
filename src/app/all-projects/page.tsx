import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/features/Contact";
import { ProjectCard } from "@/components/features/Projects";
import { projects } from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-primary">
      <Header />

      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 pt-32 pb-24 relative z-10">
        <div className="mb-10">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 text-caption uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border-subtle pb-8 gap-6">
          <h1 className="text-display-lg text-text-primary tracking-tighter">
            All Projects
          </h1>
          <p className="text-body-lg text-text-secondary max-w-[420px]">
            A complete view of product builds, brand systems, and interactive experiences across the portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      
    </main>
  );
}
