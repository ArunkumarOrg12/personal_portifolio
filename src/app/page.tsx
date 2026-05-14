import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/features/Hero";
import { ScrollProgress } from "@/components/ui/Progress";
import { StatsBar } from "@/components/features/StatsBar";
import { About } from "@/components/features/About";
import { Projects } from "@/components/features/Projects";
import { Experience } from "@/components/features/Experience";
import { Marquee } from "@/components/features/Marquee";
import { HowItWorks } from "@/components/features/HowItWorks";
import { Contact, Footer } from "@/components/features/Contact";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <main className="flex flex-col relative w-full min-h-screen bg-bg-primary">
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Marquee />
      <Projects />
      <HowItWorks />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
