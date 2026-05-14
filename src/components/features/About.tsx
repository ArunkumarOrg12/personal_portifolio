export function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5">
          <h2 className="text-display-lg text-text-primary tracking-tighter leading-[1.1]">
            Turning complex problems into scalable software.
          </h2>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8 text-body-lg text-text-secondary">
          <p>
            I am a Full Stack Developer specializing in building high-performance web applications using the MERN stack and modern TypeScript ecosystems. I bridge the gap between complex business requirements and reliable, scalable products.
          </p>
          <p>
            With 2+ years of experience leading agile teams and delivering end-to-end projects spanning community platforms, B2B SaaS, and ERP modules, I focus on writing clean, maintainable code that drives actual business value.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"].map((skill) => (
              <span key={skill} className="px-5 py-2 rounded-full border border-border-subtle text-caption text-text-muted uppercase hover:border-accent-warm hover:text-accent-warm transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
