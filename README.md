# Universo Sertanejo FM

Rádio online com os grandes sucessos e lançamentos do sertanejo universitário. **Ligada em você**.

## Desenvolvimento local

O site usa React, TypeScript, Tailwind e TanStack Start com Vite e Nitro.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verificações

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

O build de produção usa o preset Cloudflare do Nitro. O preview de produção usa Wrangler com a configuração gerada pelo build.

A especificação da migração está em [docs/project.md](docs/project.md).
