import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Radio } from "lucide-react";
import { SITE_DATA } from "@/config/siteData";
import { MagneticButton } from "../ui/MagneticButton";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";
import hero6 from "@/assets/hero-6.webp";
import mhero1 from "@/assets/hero-1m.webp";
import mhero2 from "@/assets/hero-2m.webp";
import mhero3 from "@/assets/hero-3m.webp";
import mhero4 from "@/assets/hero-4m.webp";
import mhero5 from "@/assets/hero-5m.webp";
import mhero6 from "@/assets/hero-6m.webp";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6];
const mSlides = [mhero1, mhero2, mhero3, mhero4, mhero5, mhero6];

export function HeroSection() {
  const [i, setI] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused, reducedMotion]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ block: "start" });
  };

  return (
    <section id="top" className="relative min-h-svh w-full pt-24 overflow-hidden">
      {slides.map((src, idx) => (
        <motion.picture
          key={src}
          initial={false}
          animate={{
            opacity: idx === i ? 1 : 0,
            scale: idx === i && !paused && !reducedMotion ? 1.05 : 1,
          }}
          transition={{
            opacity: { duration: reducedMotion ? 0 : 1.4 },
            scale: { duration: 7, ease: "linear" },
          }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <source media="(max-width: 767px)" srcSet={mSlides[idx]} />
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority={idx === 0 ? "high" : "low"}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </motion.picture>
      ))}
      <div className="absolute inset-0 bg-black/25" />

      {/* 2. Radial Vignette direcionado para o centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(9,7,5,0.5)_0%,rgba(9,7,5,0.1)_70%,rgba(9,7,5,0.8)_100%)]" />

      {/* Degradê inferior de transição */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-graphite-dark via-graphite-dark/20 to-transparent" />

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(254,51,0,0.5)] bg-graphite-dark/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cream backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
          </span>
          AO VIVO
        </motion.div>

        {/* 3. Aplicação de drop-shadow intenso nos textos para garantir contraste em qualquer imagem */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="font-display max-w-5xl text-balance text-[clamp(2.375rem,7vw,5.75rem)] font-extrabold leading-[1.06] tracking-[-0.045em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
        >
          <span className="text-brand-gradient block drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {SITE_DATA.brandName}
          </span>
          <span className="mt-4 block text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {SITE_DATA.slogan}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-[#f0eadd] leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-normal"
        >
          Online do Brasil para o mundo. Os grandes sucessos do sertanejo universitário, onde você
          estiver.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton onClick={() => scrollTo("#player")}>
            <Radio size={18} aria-hidden="true" /> Ouça Agora
          </MagneticButton>
        </motion.div>

        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Retomar slideshow" : "Pausar slideshow"}
            className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-graphite-dark/85 text-cream"
          >
            {paused ? (
              <Play size={16} aria-hidden="true" />
            ) : (
              <Pause size={16} aria-hidden="true" />
            )}
          </button>
        )}
      </div>
    </section>
  );
}
