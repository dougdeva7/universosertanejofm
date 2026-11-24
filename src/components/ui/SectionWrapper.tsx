import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "dark" | "wood" | "amberTransition" | "champagne";
  glow?: boolean;
  divider?: boolean;
};

// Tons em escala progressiva de luz:
const toneStyles = {
  // Level 0: Fundo Escuro de Impacto
  dark: "bg-[#171616] text-[#fbf8f3]",

  // Level 1: Transição Levemente Mais Quente (Player / App)
  wood: "bg-[#f2e4d6] text-[#242121]",

  // Level 2: O Tom "Ponte" (Aproximação do Champanhe)
  amberTransition: "bg-gradient-to-b from-[#292524] via-[#312b28] to-[#40332d] text-[#fbf8f3]",

  // Level 3: Luz Total (Champanhe)
  champagne: "bg-[#faf5ee] text-[#242121]",
};

export function SectionWrapper({
  children,
  className = "",
  tone = "dark",
  glow = false,
  divider = true,
  ...rest
}: Props) {
  const isLight = tone === "champagne";

  return (
    <section
      {...rest}
      className={`relative overflow-hidden ${toneStyles[tone]} py-16 md:py-24 ${className}`}
    >
      {/* Divisor Metálico Ajustado ao Tom */}
      {divider && (
        <div
          className={`absolute top-0 inset-x-0 h-px ${
            isLight
              ? "bg-linear-to-r from-transparent via-brand-deep/30 to-transparent"
              : "bg-linear-to-r from-transparent via-brand-bright/40 to-transparent"
          } pointer-events-none`}
        />
      )}

      {/* Spotlights de Luz de Fundo para Seções Escuras */}
      {glow && !isLight && (
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background:
              tone === "amberTransition"
                ? "radial-gradient(circle at 20% 30%, rgba(255,117,61,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(254,51,0,0.12) 0%, transparent 50%)"
                : "radial-gradient(circle at 50% 0%, rgba(254,51,0,0.15) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  isLight = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  isLight?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div
          className={`inline-block mb-3 px-3.5 py-1 rounded-full backdrop-blur-md ${
            isLight
              ? "bg-[rgba(181,43,8,0.1)] border border-[rgba(181,43,8,0.3)]"
              : "bg-[rgba(254,51,0,0.08)] border border-[rgba(254,51,0,0.3)]"
          }`}
        >
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.3em] ${
              isLight ? "text-[#96300f]" : "text-brand-bright"
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide text-balance ${
          isLight ? "text-graphite-medium" : "text-cream"
        }`}
      >
        <span className={isLight ? "text-brand-gradient-dark" : "text-brand-gradient"}>
          {title}
        </span>
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto text-balance ${
            isLight ? "text-[#4a3e31]" : "text-taupe"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
