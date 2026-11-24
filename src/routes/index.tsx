import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { HeroSection } from "../components/sections/HeroSection";
import { PlayerSection } from "../components/sections/PlayerSection";
import { AudioExperienceSection } from "../components/sections/AudioExperienceSection";
import { LiveRadioSection } from "../components/sections/LiveRadioSection";
import { MomentsGridSection } from "../components/sections/MomentsGridSection";
import { AppEcosystemSection } from "../components/sections/AppEcosystemSection";
import { ConversionBannerSection } from "../components/sections/ConversionBannerSection";
import { FooterSection } from "../components/sections/FooterSection";
import { CopyrightBar } from "../components/sections/CopyrightBar";
import { Navbar } from "../components/sections/Navbar";
import { SITE_DATA } from "@/config/siteData";

const { brandName, slogan, description, url, logoPath } = SITE_DATA;
const title = `${brandName} | ${slogan}`;
const image = new URL(logoPath, url).href;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `Logotipo ${brandName}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: `Logotipo ${brandName}` },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "RadioStation",
              "@id": `${url}#station`,
              name: brandName,
              slogan,
              url,
              image,
              logo: image,
              description,
              genre: ["Sertanejo", "Modão", "Sertanejo Universitário"],
            },
            {
              "@type": "WebSite",
              "@id": `${url}#website`,
              url,
              name: brandName,
              description,
              inLanguage: "pt-BR",
              publisher: { "@id": `${url}#station` },
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-graphite-dark text-cream">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-graphite-dark focus:p-3"
          href="#conteudo"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo" tabIndex={-1}>
          <HeroSection />
          <PlayerSection />
          <AudioExperienceSection />
          <LiveRadioSection />
          <MomentsGridSection />
          <AppEcosystemSection />
          <ConversionBannerSection />
        </main>
        <FooterSection />
        <CopyrightBar />
      </div>
    </MotionConfig>
  );
}
