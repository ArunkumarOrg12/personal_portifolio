import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    { title: "Aethel", category: "E-Commerce", img: "bg-[#161616]" },
    { title: "Nova", category: "Fintech", img: "bg-[#111111]" },
    { title: "Lumina", category: "Web3 Platform", img: "bg-[#1a1a1a]" },
    { title: "Chronos", category: "Creative Agency", img: "bg-[#0a0a0a]" },
  ];

  return (
    <section className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border-subtle pb-8 gap-6">
        <h2 className="text-display-lg text-text-primary tracking-tighter">Selected Work</h2>
        <p className="text-body-lg text-text-secondary max-w-[400px]">
          A curated collection of recent digital products, brands, and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((p, i) => (
          <div key={i} className="group relative aspect-[4/5] md:aspect-[1/1] overflow-hidden bg-bg-tertiary cursor-pointer rounded-sm border border-border-subtle/50">
            {/* Placeholder for project images - uses dark tones for now */}
            <div className={`absolute inset-0 ${p.img} transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105`} />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-6 right-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
               <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                 <ArrowUpRight className="w-5 h-5" />
               </div>
            </div>

            <div className="absolute bottom-8 left-8">
              <h3 className="text-heading-lg text-text-primary mb-1">{p.title}</h3>
              <p className="text-caption text-text-muted uppercase tracking-widest">{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
