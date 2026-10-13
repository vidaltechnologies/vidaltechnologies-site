# Vidal Technologies — site

Site institucional da Vidal Technologies, com área pública e painel de postagem.

**Stack:** Next.js (TypeScript, App Router) · Tailwind CSS · Supabase (banco, login e armazenamento) · Vercel (hospedagem).

## Rodando localmente

1. Crie um projeto em [supabase.com](https://supabase.com) (plano gratuito).
2. Copie `.env.example` para `.env.local` e preencha com a URL e a chave publicável
   do projeto (Project Settings › API).
3. No Supabase, em Authentication › Users, crie o seu usuário com e-mail e senha.
4. Instale e rode:

   ```bash
   npm install
   npm run dev
   ```

5. Abra http://localhost:3000. O painel fica em `/admin` e pede login em `/login`.

## Estrutura

- `src/app/page.tsx`: página inicial pública.
- `src/app/login/`: tela de login e ações de entrar e sair.
- `src/app/admin/`: painel protegido, onde vão ficar as postagens.
- `src/lib/supabase/`: clientes do Supabase para navegador, servidor e proxy.
- `src/proxy.ts`: renova a sessão a cada requisição e redireciona `/admin` para o login.

## Publicando

1. Na [Vercel](https://vercel.com), importe este repositório do GitHub.
2. Cadastre as mesmas variáveis do `.env.local` em Settings › Environment Variables.
3. Em Settings › Domains, adicione `vidaltechnologies.com.br`. A Vercel mostra os
   registros de DNS para cadastrar no painel da Hostinger, onde o domínio continua registrado.
