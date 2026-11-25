import { motion } from "framer-motion";
import { Radio, Mic, Smartphone } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { MagneticButton } from "../ui/MagneticButton";
import studio from "@/assets/live-studio.webp";

const CARDS = [
  {
    icon: Radio,
    title: "Rádio Online",
    body: "Ouça a programação ao vivo pelo player do site.",
  },
  {
    icon: Mic,
    title: "Seleção Sertaneja",
    body: "Os grandes hits e as novidades do sertanejo universitário.",
  },
  {
    icon: Smartphone,
    title: "Site e Aplicativo",
    body: "Escute no navegador ou acesse o aplicativo no seu dispositivo.",
  },
];

export function LiveRadioSection() {
  const scrollTo = () => document.querySelector("#player")?.scrollIntoView();

  return (
    <SectionWrapper tone="champagne" divider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Imagem do Estúdio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-radial-brand blur-2xl opacity-40" />
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-[rgba(181,43,8,0.3)] shadow-[0_20px_50px_rgba(26,19,12,0.12)]">
            <img
              src={studio}
              alt="Vista ampla de um estúdio de rádio ilustrativo, com mesa de transmissão, microfones articulados e monitores"
              loading="lazy"
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
            {/* Marcadores de Canto Laranja */}
            <span className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-brand-deep" />
            <span className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-brand-deep" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-brand-deep" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-brand-deep" />
          </div>
        </motion.div>

        {/* Conteúdo Institucional */}
        <div className="relative">
          <div className="hidden lg:block absolute -left-10 top-0 h-full w-px bg-linear-to-b from-transparent via-brand-deep/40 to-transparent" />

          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(26,19,12,0.25)] bg-[rgba(26,19,12,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#96300f] mb-4 backdrop-blur-md">
            Rádio online
          </p>

          <h2 className="mt-3 font-display text-[clamp(2.125rem,4.1vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">
            <span className="text-brand-gradient-dark">Companhia de Verdade,</span>
            <br />
            <span className="text-graphite-medium">Ao Vivo</span>
          </h2>

          <p className="mt-6 text-[#4a3e31] leading-relaxed text-base font-normal">
            Grandes sucessos e lançamentos do sertanejo universitário fazem parte da programação da
            Universo Sertanejo FM. Dê o play e acompanhe a rádio onde estiver.
          </p>

          {/* Lista de Cards Claros */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="mt-8 space-y-4"
          >
            {CARDS.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-4 rounded-2xl bg-white/90 border border-[rgba(181,43,8,0.2)] p-4 shadow-sm transition-all hover:shadow-md hover:border-[rgba(181,43,8,0.5)]"
              >
                <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-[rgba(254,51,0,0.15)] border border-[rgba(254,51,0,0.3)] text-brand-deep">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-graphite-medium">{title}</h3>
                  <p className="text-sm text-[#5c4f40] mt-1 leading-snug">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex items-center justify-start">
            <MagneticButton onClick={scrollTo}>
              <Radio size={18} aria-hidden="true" /> Ouça Agora
            </MagneticButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
