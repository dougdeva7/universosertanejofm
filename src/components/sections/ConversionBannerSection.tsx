import { Radio } from "lucide-react";
import confetti from "canvas-confetti";
import { MagneticButton } from "../ui/MagneticButton";

export function ConversionBannerSection() {
  const handleClick = () => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 },
        colors: ["#ff935e", "#fe3300", "#b52b08", "#ffba9a"],
      });
    document.querySelector("#player")?.scrollIntoView();
  };
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-graphite-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl p-0.5"
          style={{
            background: "linear-gradient(135deg, #b52b08 0%, #ff935e 50%, #b52b08 100%)",
          }}
        >
          <div
            className="rounded-[calc(1.5rem-2px)] px-8 py-14 md:px-14 md:py-20 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #362720 0%, #221a17 50%, #362720 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(254,51,0,0.25), inset 0 -1px 0 rgba(0,0,0,0.6), 0 40px 80px -30px rgba(0,0,0,0.9)",
            }}
          >
            <div className="absolute inset-0 bg-radial-brand opacity-50 pointer-events-none" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl leading-tight">
                <span className="text-brand-gradient">Aumente o Volume</span>
                <br />
                <span className="text-cream">Ligada em você!</span>
              </h2>
              <p className="mt-5 text-[#d9d2c4] max-w-2xl mx-auto">
                Ouça a Universo Sertanejo FM ao vivo e leve o sertanejo para o seu dia.
              </p>
              <div className="mt-10">
                <MagneticButton onClick={handleClick}>
                  <Radio size={18} aria-hidden="true" /> Ouça Agora
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
