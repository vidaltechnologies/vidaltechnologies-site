# Vidal Technologies — site

Site institucional da Vidal Technologies, em português, inglês e espanhol.

**Stack:** Next.js (TypeScript, App Router) · Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. As versões em inglês e espanhol ficam em `/en` e `/es`.

## Estrutura

- `src/app/page.tsx` e `src/app/[lang]/page.tsx`: página inicial em cada idioma.
- `src/components/home.tsx`: seções da página (início, serviços, projetos, sobre, contato).
- `src/components/automation-flow.tsx`: fluxo animado no estilo n8n.
- `src/i18n/dictionaries.ts`: todos os textos do site, nos três idiomas.

## Publicando

O site não usa banco de dados nem login, então pode ser publicado como arquivos
estáticos (por exemplo, na hospedagem da Hostinger) ou na Vercel.
