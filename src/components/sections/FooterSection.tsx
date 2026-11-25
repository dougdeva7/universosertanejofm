import { SITE_DATA } from "../../config/siteData";
import clubeLogo from "@/assets/cluberadios.webp";

export function FooterSection() {
  return (
    <footer className="bg-[#080604] pt-16 pb-10 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-brand to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={SITE_DATA.logoPath}
              alt={SITE_DATA.brandName}
              className="w-56 rounded-lg object-contain drop-shadow-[0_0_15px_rgba(254,51,0,0.3)] transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand">{SITE_DATA.slogan}</p> */}
          <p className="mt-4 text-sm text-taupe max-w-sm leading-relaxed">
            Sua rádio online para ouvir os grandes sucessos e lançamentos do sertanejo universitário.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-display mb-4 text-base font-bold leading-snug tracking-[0.09em] text-cream">
            NAVEGAÇÃO
          </h4>
          <ul className="space-y-3 text-sm text-taupe">
            <li>
              <a href="#top" className="hover:text-brand-bright transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#player" className="hover:text-brand-bright transition-colors">
                Ouça Agora
              </a>
            </li>
            <li>
              <a href="#estilos" className="hover:text-brand-bright transition-colors">
                Sobre a Rádio
              </a>
            </li>
            <li>
              <a href="#app" className="hover:text-brand-bright transition-colors">
                Aplicativo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="w-full my-8 pt-6 border-t border-current/10 text-center"
        aria-label="Parceiros"
      >
        <h3 className="mb-5 text-base font-bold leading-snug tracking-[-0.01em]">Parceiros</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <a
            key="myTuner Radio"
            href="https://mytuner-radio.com/pt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="myTuner Radio"
            className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
          >
            <img
              src={"/mytuner.webp"}
              alt="myTuner Radio"
              loading="lazy"
              className="h-10 sm:h-12 w-auto max-w-[130px] object-contain brightness-0 invert"
            />
          </a>
          <a
            key="Clube de Rádios"
            href="https://www.cluberadios.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Clube de Rádios"
            className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
          >
            <img
              src={clubeLogo}
              alt="Clube de Rádios"
              loading="lazy"
              className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
            />
          </a>
          <a
            key="Online Radio Box"
            href="https://onlineradiobox.com/br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Online Radio Box"
            className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
          >
            <img
              src={"/radiobox.webp"}
              alt="Online Radio Box"
              loading="lazy"
              className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
            />
          </a>
          <a
            key="RádiosNet"
            href="https://www.radios.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RádiosNet"
            className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
          >
            <img
              src={"/radiosnet.webp"}
              alt="RádiosNet"
              loading="lazy"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
          <a
            key="Streema"
            href="https://streema.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Streema"
            className="inline-flex items-center justify-center min-w-[105px] min-h-14 transition-transform hover:scale-105"
          >
            <img
              src={"/streema.webp"}
              alt="Streema"
              loading="lazy"
              className="h-10 sm:h-12 w-auto max-w-[130px] object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
