import { PrimaryArrowButton } from "@/components/ui/Buttons";
import { HeroCanvas } from "@/components/features/HeroCanvas";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-4 md:px-6 overflow-hidden">
      <HeroCanvas />

      {/* Top Left Label */}
      <div className="text-micro text-text-muted mt-8 uppercase leading-relaxed relative z-10">
        Independent Creative <br />
        Director & Designer
      </div>

      {/* Bottom Row */}
      <div className="flex items-end justify-between w-full relative z-10">
        <div className="flex flex-col gap-4">
          <PrimaryArrowButton />
        </div>
        <div className="text-display-lg text-text-primary">
          © 2025
        </div>
      </div>
    </section>
  );
}
