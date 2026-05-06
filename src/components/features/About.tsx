export function About() {
  return (
    <section className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5">
          <h2 className="text-display-lg text-text-primary tracking-tighter leading-[1.1]">
            Pushing boundaries in digital space.
          </h2>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8 text-body-lg text-text-secondary">
          <p>
            I am a multi-disciplinary designer and creative director focused on creating 
            premium digital experiences that stand out. With a background in traditional 
            Swiss design and modern web technologies, I bridge the gap between aesthetic 
            perfection and technical performance.
          </p>
          <p>
            My work is characterized by high contrast, meticulous typography, and organic 
            fluid motions that bring interfaces to life. I believe in designing less, but better.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {["Art Direction", "UI/UX Design", "WebGL", "Next.js", "Brand Identity"].map((skill) => (
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
