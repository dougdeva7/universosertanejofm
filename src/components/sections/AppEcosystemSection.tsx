import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { AppleIcon, PlayStoreIcon, WindowsIcon } from "../ui/BrandIcons";
import phone from "@/assets/phone-universo.webp";
import { SITE_DATA } from "@/config/siteData";

const BADGES = [
  { icon: PlayStoreIcon, label: "Disponível no", strong: "Google Play" },
  { icon: AppleIcon, label: "Baixar na", strong: "App Store" },
  { icon: WindowsIcon, label: "Disponível para", strong: "Windows" },
];

export function AppEcosystemSection() {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <SectionWrapper id="app" tone="wood" glow>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(26,19,12,0.25)] bg-[rgba(26,19,12,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#96300f] mb-4 backdrop-blur-md">
            Aplicativo Oficial
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-graphite-medium font-bold">
            <span className="text-brand-gradient-dark">{SITE_DATA.brandName}</span>{" "}
            <span>no Seu Dispositivo</span>
          </h2>
          <p className="mt-6 text-[#4a3e31] font-medium leading-relaxed">
            Leve o sertanejo com você. Acesse o aplicativo para ouvir a rádio pelo celular ou
            computador.
          </p>

          {/* Subcard com Contraste no Fundo Claro */}
          <div className="mt-8 rounded-2xl border border-[rgba(26,19,12,0.2)] bg-[rgba(255,255,255,0.45)] backdrop-blur-md p-5 shadow-sm">
            <p className="text-sm text-graphite-medium">
              <span className="text-[#96300f] font-bold">Baixe agora</span> o aplicativo oficial da
              {SITE_DATA.brandName}.{" "}
              <span className="italic text-[#4a3e31] font-medium">{SITE_DATA.slogan}!</span>
            </p>
          </div>

          {/* Botões do App em Café Escuro (Alto Contraste) */}
          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map(({ icon: Icon, label, strong }) => (
              <a
                href={SITE_DATA.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={strong}
                className="group relative flex items-center gap-3 rounded-xl border border-[rgba(26,19,12,0.2)] bg-graphite-medium px-4 py-3 text-left hover:border-brand-bright hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Icon className="h-7 w-7 text-cream group-hover:text-brand-bright transition-colors" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-taupe opacity-80">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-cream group-hover:text-brand-bright transition-colors">
                    {strong}
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(254,51,0,0.2),transparent)] group-hover:translate-x-full transition-transform duration-700" />
              </a>
            ))}
          </div>
        </div>

        {/* Smartphone Flutuante com Sombra de Profundidade */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-[#96300f]/20 blur-3xl rounded-full opacity-60" />
          <img
            src={phone}
            alt={`Tela do aplicativo ${SITE_DATA.brandName}`}
            width={543}
            height={608}
            loading="lazy"
            className="relative h-auto w-full max-w-md drop-shadow-[0_30px_45px_rgba(26,19,12,0.35)]"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
