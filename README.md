<p align="center">
  <img src="src/app/icon.svg" alt="Vidal Technologies" width="72" />
</p>

<h1 align="center">Vidal Technologies — site institucional</h1>

<p align="center">
  Site da <strong>Vidal Technologies</strong>, empresa que cria sites, sistemas e automações com IA para empresas.<br />
  Disponível em português, inglês e espanhol.
</p>

<p align="center">
  <strong>Português</strong> · <a href="README.en.md">English</a> · <a href="README.es.md">Español</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Hostinger" src="https://img.shields.io/badge/Hospedagem-Hostinger-673DE6?logo=hostinger&logoColor=white" />
</p>

![Página inicial do site da Vidal Technologies](docs/screenshots/inicio.png)

## Sobre o projeto

Este repositório contém o site institucional da Vidal Technologies. O objetivo é
apresentar a empresa e os seus serviços de forma clara e visual, mostrar exemplos de
projetos e facilitar o primeiro contato de quem quer começar um projeto, por e-mail
ou WhatsApp.

O site também funciona como peça de portfólio: o código é aberto para quem quiser ver
como ele foi construído.

### Objetivos

- Apresentar a empresa e os serviços em uma página única, rápida e fácil de navegar.
- Mostrar, de forma visual, o tipo de automação que a empresa entrega.
- Atender clientes no Brasil e no exterior, com o conteúdo em três idiomas.
- Levar o visitante ao contato com poucos cliques.

## Funcionalidades

- **Três idiomas:** português (`/`), inglês (`/en`) e espanhol (`/es`), com troca por
  bandeiras no canto superior direito. Todos os textos ficam em um único arquivo.
- **Fluxo de automação animado:** ao lado do título, um fluxo no estilo n8n mostra um
  lead sendo qualificado por IA e seguindo para WhatsApp, Gmail, Google Calendar ou CRM.
  No celular, o fluxo vira uma versão vertical.
- **Serviços:** Sites, Aplicações web e Automação e Agentes de IA, cada um com exemplos.
- **Como trabalhamos:** as etapas Conversa, Proposta e Entrega.
- **Projetos:** cards com exemplos de projetos e um botão que leva ao GitHub.
- **Sobre:** a apresentação da empresa.
- **Contato:** botões para enviar e-mail e falar no WhatsApp.
- **Responsivo:** layout pensado para computador e celular.
- **Identidade visual própria:** fundo preto, tons de grafite e dourado `#FBC105`,
  fonte Schibsted Grotesk e logo desenhada em SVG.

## Telas

### Computador

| Serviços | Como trabalhamos |
| --- | --- |
| ![Serviços](docs/screenshots/servicos.png) | ![Como trabalhamos](docs/screenshots/como-trabalho.png) |

| Projetos | Sobre |
| --- | --- |
| ![Projetos](docs/screenshots/projetos.png) | ![Sobre](docs/screenshots/sobre.png) |

| Contato | |
| --- | --- |
| ![Contato](docs/screenshots/contato.png) | |

### Outros idiomas

| Inglês (`/en`) | Espanhol (`/es`) |
| --- | --- |
| ![Site em inglês](docs/screenshots/inicio-en.png) | ![Site em espanhol](docs/screenshots/inicio-es.png) |

### Celular

| Início | Serviços | Contato |
| --- | --- | --- |
| <img src="docs/screenshots/celular-inicio.png" alt="Início no celular" width="260" /> | <img src="docs/screenshots/celular-servicos.png" alt="Serviços no celular" width="260" /> | <img src="docs/screenshots/celular-contato.png" alt="Contato no celular" width="260" /> |

## Tecnologias

| Tecnologia | Para que serve |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | Estrutura do site, rotas por idioma e geração das páginas estáticas |
| [React](https://react.dev/) | Componentes da interface |
| [TypeScript](https://www.typescriptlang.org/) | Código com tipagem, mais seguro de manter |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos e layout responsivo |
| SVG e CSS | Logo, ícones e animação do fluxo de automação |

O site não usa banco de dados nem login. Todas as páginas são geradas como arquivos
estáticos (HTML, CSS e JavaScript), o que deixa o site rápido, barato de hospedar e
sem servidor para manter.

## Como rodar no seu computador

Você vai precisar do [Node.js](https://nodejs.org/) 20 ou mais recente.

```bash
git clone https://github.com/vidaltechnologies/vidaltechnologies-site.git
cd vidaltechnologies-site
npm install
npm run dev
```

Depois, abra http://localhost:3000. As versões em inglês e espanhol ficam em
http://localhost:3000/en e http://localhost:3000/es.

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão final do site |
| `npm run start` | Roda a versão final gerada pelo `build` |
| `npm run lint` | Verifica o código |

## Estrutura do código

```
src/
├── app/
│   ├── page.tsx            # Página inicial em português
│   ├── [lang]/page.tsx     # Páginas em inglês e espanhol
│   ├── layout.tsx          # Estrutura comum, fontes e metadados
│   ├── globals.css         # Cores e estilos globais
│   └── icon.svg            # Ícone da aba do navegador
├── components/
│   ├── home.tsx            # Seções da página
│   ├── automation-flow.tsx # Fluxo de automação animado
│   ├── language-switcher.tsx
│   ├── logo.tsx
│   └── whatsapp-icon.tsx
└── i18n/
    └── dictionaries.ts     # Todos os textos, nos três idiomas
docs/
└── screenshots/            # Imagens usadas neste README
```

---

© Vidal Technologies. Todos os direitos reservados.
