import { ArrowUpRight, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="text-display-lg text-text-primary tracking-tighter mb-8 leading-[1.1]">
            Ready to build something exceptional?
          </h2>
          <p className="text-body text-text-secondary max-w-md mb-12">
            I&apos;m currently open for new opportunities—whether it&apos;s a full-time role or a freelance project. Have a complex problem to solve? Let&apos;s talk.
          </p>
          <a 
            href="/arun_kumar _cv.pdf" 
            download="Arun_Kumar_CV.pdf"
            className="inline-flex items-center gap-3 rounded-full border border-border-subtle px-8 py-4 text-body-sm text-text-primary hover:bg-bg-tertiary hover:border-text-muted transition-all group w-fit"
          >
            Download Resume
            <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </a>
          <div className="flex flex-row gap-6 mt-16 text-body-sm text-text-secondary">
            <div>
              <span className="text-caption text-text-muted uppercase tracking-widest block mb-2">Email</span>
              <a href="mailto:arunakhil978@gmail.com" className="hover:text-text-primary transition-colors text-body">arunakhil978@gmail.com</a>
            </div>
            <div>
              <span className="text-caption text-text-muted uppercase tracking-widest block mb-2 w-32">Phone</span>
              <a href="tel:+916282717263" className="hover:text-text-primary transition-colors text-body">+91 6282717263</a>
            </div>
            <div>
              <span className="text-caption text-text-muted uppercase tracking-widest block mb-2">Location</span>
              <span className="text-body">Kochi, Ernakulam, Kerala, India</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-10 bg-bg-secondary p-8 md:p-12 border border-border-subtle">
          <div className="flex flex-col gap-3">
            <label className="text-caption text-text-muted uppercase tracking-widest">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-border-subtle pb-4 text-body text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-caption text-text-muted uppercase tracking-widest">Email</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-border-subtle pb-4 text-body text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-caption text-text-muted uppercase tracking-widest">Message</label>
            <textarea 
              className="w-full bg-transparent border-b border-border-subtle pb-4 text-body text-text-primary focus:outline-none focus:border-text-secondary transition-colors min-h-[120px] resize-y"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="button" className="self-start mt-4 flex items-center gap-3 rounded-full border border-border-subtle px-8 py-4 text-body-sm text-text-primary hover:bg-bg-tertiary hover:border-text-muted transition-all group">
            Send Message 
            <ArrowUpRight className="h-4 w-4 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full pt-32 pb-8 px-4 md:px-6 flex flex-col items-center overflow-hidden border-t border-border-subtle relative z-10 bg-bg-primary">
      <div className="text-[80px] md:text-[200px] leading-none tracking-tighter text-text-primary opacity-90 translate-y-8 select-none">
        developer®
      </div>
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-between items-center mt-24 text-micro text-text-tertiary gap-4">
        <span>© 2026 ALL RIGHTS RESERVED</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-text-primary transition-colors tracking-widest">TWITTER</a>
          <a href="#" className="hover:text-text-primary transition-colors tracking-widest">LINKEDIN</a>
          <a href="#" className="hover:text-text-primary transition-colors tracking-widest">GITHUB</a>
        </div>
      </div>
    </footer>
  );
}
