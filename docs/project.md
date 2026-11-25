# Universo Sertanejo FM — especificação de migração V1

## Status
- **Confirmado:** repositório de origem `dborgesdev/sertanejo-studio`; destino `dborgesdev/universosertanejofm`; domínio `https://universosertanejofm.com/`.
- **Confirmado:** a branch `feat/universo-sertanejo-v1` foi criada a partir da `main` do destino; a `main` contém `public/logo-universo-sertanejo.webp` e `public/app-img.webp`.
- **Confirmado:** preservar layout, hierarquia de seções, qualidade visual, motion, player, links de app e stack existente. Não refazer desnecessariamente a arquitetura.
- **Concluído na V1:** importação dos arquivos do projeto de origem e composição dos assets da identidade Universo Sertanejo FM.
- **Pendente:** checar os dados de Instagram, WhatsApp, e-mail e localização do site original antes de publicá-los como dados da nova rádio; não assumir que os contatos da rádio antiga pertencem à nova.

## Ordem obrigatória do trabalho
1. No computador local, trabalhar no destino `D:\\_dev-projects\\universosertanejofm`, preservar os dois arquivos públicos recebidos e conferir o estado do Git antes de executar comandos. Se o diretório local já tiver alterações, preservar tudo e evitar sobrescritas. Buscar os arquivos da `main` de `dborgesdev/sertanejo-studio` para importar **todo o conteúdo versionado** ao destino, exceto `.git`. Preservar `public/app-img.webp` e `public/logo-universo-sertanejo.webp`. Não alterar a `main` do destino neste momento.
2. Trabalhar somente em `feat/universo-sertanejo-v1`. Manter a estrutura de seções em componentes independentes existente no original.
3. Na cópia do workflow `.github/workflows/sync-client-repo.yml`, mudar apenas o destino `dougdeva7/sertanejo-studio` para `dougdeva7/universosertanejofm`. Conservar `secrets.CLIENT_DEPLOY_TOKEN`, gatilho `push` na `main` e sincronização por `rsync`. Verificar se o repo espelho existe e tem `main` acessível antes do primeiro sync. Não expor token.
4. Atualizar integralmente marca e conteúdo, gerar os assets finais específicos de cada slot e executar QA local. Não fazer commit, push, PR ou merge sem solicitação.

## Identidade e conteúdo
- Nome oficial: **Universo Sertanejo FM**; slogan oficial: **Ligada em você** (em contexto publicitário, `Ligada em você!` quando apropriado).
- Cor principal: **laranja vivo do fundo do logo fornecido**, aferir a cor a partir do arquivo original, sem inventar um laranja genérico. Aplicar nos tokens, CTAs, badges, bordas, highlights, gradientes e transições; não deixar dourados residuais da marca antiga.
- Header fixo com o fundo original do Sertanejo Studio (`#140f0a` a 80%, com desfoque). A cor e a opacidade são constantes durante a rolagem. Preservar o logotipo atual e suas dimensões, assim como o contraste e a navegação.
- Em TODO conteúdo público substituir a marca anterior por Universo Sertanejo FM, incluindo alt, aria, Copyright, mensagens, títulos, seções, menu, metatags, OG, JSON-LD, canonical, favicon e configuração central. Eliminar `A mais gostosa de ouvir` e variações em todos os textos e chamadas. Evitar duplicação como `Rádio Universo Sertanejo FM` quando desnecessária.
- Manter a proposta de rádio sertaneja online e as seções do site original; adaptar a copy que depende explicitamente de marca ou slogan sem inventar alegações de audiência, disponibilidade 100%, estatísticas ou outras provas inexistentes.
- Domínio/canonical: `https://universosertanejofm.com/`. Corrigir `<html lang="pt-BR">` no shell.
- Player oficial: `https://player.svrdedicado.org/player-topo-html5/8046/0a0000` **sem alterações**.
- App: `https://player.svrdedicado.org/player-app-multi-plataforma/8046` **sem alterações**.
- Conteúdo da tela do telefone: `public/app-img.webp`. Manter a composição do mockup original, aplicando essa imagem na tela do telefone com perspectiva adequada e evitando bordas distorcidas ou texto ilegível; se `app-img.webp` já for mockup completo, verificar antes e não aplicar duas molduras.
- Logo fornecido: `public/logo-universo-sertanejo.webp`. Usá-lo sem redesenhar a identidade.
- No rodapé, manter os logotipos e links sob o título **Parceiros**.
- Footer obrigatório: texto visível exato `Desenvolvido por Douglas Borges - Smart Local`, link `https://smartlocal.com.br`, `target="_blank"`, `rel="noopener noreferrer"`.

## Direção visual — preservar alto padrão original
Manter o grid, o ritmo, a alternância entre seções claras e escuras, a hierarquia tipográfica e os componentes do site original. Aplicar Segoe UI com fallbacks `system-ui, sans-serif` aos títulos e manter Inter no texto corrido. Ajustar tamanho, peso, altura de linha e espaçamento conforme a função de cada título. Reinterpretar o antigo dourado/café em torno do laranja intenso, preto grafite, creme e neutros quentes e claros. Escuro deve funcionar como **contraste editorial**, não dominar todas as fotografias. Laranja do logo é a cor de identidade, não um filtro laranja colocado em todas as imagens.

### Mapa de imagens (cada arquivo final gerado individualmente)
- `hero-1..6.webp` + `hero-1m..6m.webp`: seis cenários com composição própria e versões desktop/mobile ajustadas ao conteúdo. Manter o princípio do slideshow com fotografias diferentes, cinematográficas porém luminosas, com área segura para textos e continuidade visual. Explorar varanda sertaneja banhada de sol, paisagem de campo sob céu claro, estrada brasileira, música sertaneja em palco de luz quente, objetos rurais de qualidade editorial e outros ambientes distintos. Não duplicar a mesma imagem com crops inapropriados.
- `style-raiz.webp`: artista/viola em paisagem rural de fim de tarde, autêntica, ampla e clara.
- `style-universitario.webp`: festa ou show sertanejo universitário com pessoas e luz de palco equilibrada, **não** ambiente preto/escuro.
- `style-estrada.webp`: ponto de vista de viagem com estrada e paisagem ampla, céu luminoso.
- `style-modao.webp`: violão/viola e atmosfera acolhedora de varanda sob luz natural.
- `live-studio.webp` (4:5) em LiveRadioSection: imagem editorial inédita, em plano amplo, de estúdio ilustrativo com mesa de transmissão, braços de microfone, monitores, tratamento acústico, luz natural e acabamentos em madeira.
- `moment-bbq.webp`: churrasco com luz natural, alimento protagonista.
- `moment-work.webp`: ambiente de trabalho claro e contemporâneo com detalhe de música.
- `moment-rest.webp`: varanda/rede/café sob luz suave.
- `moment-city.webp`: vida urbana brasileira em hora dourada ou luz diurna.
- `moment-field.webp`: interior, agricultura/campo com composição limpa e céu claro.
- `moment-road.webp`: paisagem de viagem vista aberta, estrada e horizonte.
Cada arte deve preservar função, proporção, enquadramento e legibilidade do slot original; usar foco e composição próprios, sem repetição estilística excessiva. Sem logos gerados nas fotografias, sem provas ou pessoas apresentadas como equipe real. Produzir WebP otimizado com dimensões adequadas e srcset/versões responsivas quando necessário.

## Estrutura, funcionalidades e motion
Manter Navbar, Hero (slideshow), Player, AudioExperience, LiveRadio, MomentsGrid, AppEcosystem, ConversionBanner, Instagram (apenas se URL/identidade confirmadas), Footer e CopyrightBar. Preservar o embed de streaming, comportamento do menu, âncoras e CTAs. A barra de reprodução sticky, se usada no fluxo efetivo, não pode duplicar áudio simultâneo. Adaptar todos os efeitos dourados a laranja e controlar contraste. Motion intencional: transições de slideshow, microinterações de cards/botões, entradas discretas, sem excesso; respeitar `prefers-reduced-motion`, pausando transformações contínuas e animações desnecessárias.

## Stack, arquitetura e publicação
O original já é React + TypeScript + Tailwind e TanStack Start, com Vite/Nitro configurados via `@lovable.dev/vite-tanstack-config`. Preservar inicialmente o stack e lockfile `pnpm-lock.yaml`; **não** migrar para Vite SPA durante essa adaptação sem justificativa e plano explícito. Auditar o build de produção e o target real antes de alterar deploy. Confirmar Vercel/Cloudflare target, output do build, runtime, endpoints `api/now-playing.js` e eventual integração de metadata; não presumir que tudo funciona apenas porque o dev server carrega.

## SEO e QA
Atualizar title, description, OG/Twitter, RadioStation/WebSite JSON-LD e URLs absolutas. Usar `https://universosertanejofm.com/og-image.webp` (WebP, 1733 × 907 px) em Open Graph e Twitter, com `summary_large_image` e alt descritivo. Usar apenas dados confirmados. Checar favicon, robots e sitemap existentes ou necessários. Garantir acessibilidade, alt, foco, menu mobile, player, todos os links, visual em 375/768/1024/1440px, console, possíveis vazamentos da marca antiga e screenshots visuais. Rodar `pnpm install` conforme lockfile, lint, typecheck quando disponível e build de produção, registrando resultados reais. Não publicar antes de validada a qualidade visual no desktop/mobile e o funcionamento do player/app.

## Pendências
- Confirmar Instagram, e-mail, WhatsApp e cidade da nova rádio; dados do original não são automaticamente válidos.
- Confirmar acesso e existência de `dougdeva7/universosertanejofm`, e a permissão de escrita do token no workflow.
- `public/app-img.webp` é a captura de tela aplicada ao mockup do celular.
- Não substituir imagens reais ou declarações factuais por montagens apresentadas como evidência.
