import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "../ui/SectionWrapper";
import work from "../../assets/moment-work.webp";
import rest from "../../assets/moment-rest.webp";
import bbq from "../../assets/moment-bbq.webp";
import road from "../../assets/moment-road.webp";
import city from "../../assets/moment-city.webp";
import field from "../../assets/moment-field.webp";

const ITEMS = [
  {
    img: bbq,
    title: "No Churrasco",
    body: "A energia certa para reunir a família, os amigos e celebrar a vida.",
    featured: true,
    badge: "Fim de semana",
  },

  {
    img: work,
    title: "No Trabalho",
    body: "Foco, produtividade e o fundo musical perfeito para o seu expediente.",
    featured: false,
  },
  {
    img: rest,
    title: "No Descanso",
    body: "Relaxamento com as melodias mais marcantes para os momentos de pausa.",
    featured: false,
  },
  {
    img: city,
    title: "Na Cidade",
    body: "O ritmo dinâmico para acompanhar o movimento do seu dia a dia urbano.",
    featured: false,
  },
  {
    img: field,
    title: "No Campo",
    body: "A conexão autêntica com as nossas raízes e com a vida na terra.",
    featured: false,
  },
  {
    img: road,
    title: "Na Estrada",
    body: "A parceria indispensável em cada quilômetro da sua viagem.",
    featured: true,
    badge: "Viagem",
  },
];

export function MomentsGridSection() {
  return (
    <SectionWrapper tone="amberTransition" glow>
      <SectionHeader
        eyebrow="Momentos"
        title="O Sertanejo da Sua Rotina"
        subtitle="Uma trilha sonora para o churrasco, a estrada e os momentos de descanso."
      />

      {/* Bento Grid Layout Assimétrico */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-5 auto-rows-70">
        {ITEMS.map((it, i) => {
          const isLarge = it.featured;
          return (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-[rgba(254,51,0,0.2)] hover:border-brand-bright transition-all duration-500 ${
                isLarge
                  ? "md:col-span-4 md:row-span-1 lg:col-span-2 lg:row-span-1"
                  : i === 2 || i === 3
                    ? "col-span-1 md:col-span-3 lg:col-span-1"
                    : "col-span-1 md:col-span-2 lg:col-span-1"
              }
              }`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-graphite-dark via-graphite-dark/10 to-transparent" />

              {it.badge && (
                <span className="absolute top-4 left-4 z-10 rounded-full border border-[rgba(254,51,0,0.4)] bg-graphite-dark/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-bright backdrop-blur-md">
                  {it.badge}
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                <h3 className="font-display text-2xl font-bold leading-[1.12] tracking-[-0.025em] lg:text-[1.75rem] text-cream group-hover:text-brand-bright transition-colors">
                  {it.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[#d9d2c4] opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                  {it.body}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
