import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_DATA } from "@/config/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(229,169,60,0.15)] bg-[#140f0a]/80 text-cream backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="relative mx-auto grid h-30 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8">
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex gap-5 xl:gap-7">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a className="text-sm font-bold hover:text-brand-bright hover:underline" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#top" className="col-start-2 row-start-1 block" onClick={() => setOpen(false)}>
          <img
            src={SITE_DATA.logoPath}
            alt={SITE_DATA.brandName}
            width={800}
            height={328}
            className="h-auto w-52 [clip-path:inset(2px)] sm:w-56"
          />
        </a>
        <a
          href="#player"
          className="hidden justify-self-end rounded-full bg-graphite-dark px-4 py-2 text-xs font-bold uppercase tracking-wider text-cream lg:inline-flex"
        >
          <span
            aria-hidden="true"
            className="mr-2 self-center h-2 w-2 rounded-full bg-brand-bright"
          />{" "}
          Ao vivo
        </a>
        <button
          ref={toggle}
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
          className="col-start-3 row-start-1 justify-self-end rounded-xl bg-graphite-dark p-2.5 text-cream lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="menu-mobile"
        aria-label="Navegação móvel"
        hidden={!open}
        className="border-t bg-graphite-dark px-4 py-2 text-cream lg:hidden"
      >
        <ul className="mx-auto max-w-md">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                className="block rounded-lg px-4 py-3 font-semibold hover:bg-white/10"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
