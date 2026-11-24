import { SITE_DATA } from "../../config/siteData";

export function CopyrightBar() {
  return (
    <div className="bg-[#050403] border-t border-[rgba(254,51,0,0.15)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-taupe">
        <p>© 2026 {SITE_DATA.brandName}. Todos os direitos reservados.</p>
        <p>
          <a
            href={SITE_DATA.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-brand hover:text-brand-bright transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 hover:after:w-full after:bg-brand-gradient after:transition-all after:duration-500"
          >
            {SITE_DATA.developerName}
          </a>
        </p>
      </div>
    </div>
  );
}
