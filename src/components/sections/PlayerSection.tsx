import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { SITE_DATA } from "../../config/siteData";
import { SectionWrapper } from "../ui/SectionWrapper";

import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";
import hero6 from "@/assets/hero-6.webp";

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

export function PlayerSection() {
  const [current, setCurrent] = useState(0);

  const reducedMotion = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  const staticVisuals = paused || reducedMotion;
  useEffect(() => {
    if (staticVisuals) return;
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [staticVisuals]);

  return (
    <SectionWrapper id="player" tone="wood" glow className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        {/* Cabeçalho da Seção com Alto Contraste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(26,19,12,0.25)] bg-[rgba(26,19,12,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#96300f] mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
            </span>
            Rádio ao vivo
          </span>

          <h2 className="font-display text-balance text-[clamp(1.875rem,4.2vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-graphite-medium">
            <span className="text-brand-gradient-dark">{SITE_DATA.brandName}</span>
          </h2>

          <p className="mt-3 text-[#4a3e31] text-sm md:text-base font-semibold">
            Dê o play e acompanhe a programação ao vivo.
          </p>
        </motion.div>

        {/* Card do Player Destaque Sólido (Pop do Escuro no Claro) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-[rgba(26,19,12,0.3)] shadow-[0_20px_50px_rgba(26,19,12,0.35)] bg-[#121010]"
        >
          {/* Topo: Slideshow de Imagens */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            {images.map((img, i) => (
              <img
                key={img}
                src={img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100 motion-safe:scale-105" : "opacity-0 scale-100"
                }`}
                loading="lazy"
              />
            ))}

            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Retomar animações do player" : "Pausar animações do player"}
                className="absolute right-4 bottom-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-graphite-dark/85 text-cream"
              >
                {paused ? (
                  <Play size={16} aria-hidden="true" />
                ) : (
                  <Pause size={16} aria-hidden="true" />
                )}
              </button>
            )}

            <div className="absolute inset-0 bg-linear-to-t from-[#121010]/10 via-[#121010]/5 to-transparent" />

            {/* Barra Equalizadora Interativa Laranja */}
            <div
              aria-hidden="true"
              className="absolute bottom-20 left-1/2 flex w-max max-w-full -translate-x-1/2 items-end gap-[5px] py-3 sm:gap-[7px]"
            >
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-[5px] rounded-full bg-linear-to-t from-[#96300f] via-[#fe3300] to-[#ff935e]"
                  animate={{
                    height: staticVisuals ? 24 : [16, 28 + 2 * ((i * 13) % 26), 16],
                  }}
                  transition={{
                    duration: 0.6 + (i % 5) * 0.08,
                    repeat: staticVisuals ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: i * 0.04,
                  }}
                />
              ))}
            </div>
          </div>

          {/* A altura do player oficial varia com a largura interna do iframe. */}
          <div className="@container relative bg-[#121010] border-t border-[rgba(254,51,0,0.15)]">
            <iframe
              src={SITE_DATA.streamIframeUrl}
              className="block h-10 w-full border-0 @min-[599px]:h-[60px] @min-[959px]:h-20"
              title={`Player ao vivo da ${SITE_DATA.brandName}`}
              allow="autoplay"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
