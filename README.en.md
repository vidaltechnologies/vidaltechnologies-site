<p align="center">
  <img src="src/app/icon.svg" alt="Vidal Technologies" width="72" />
</p>

<h1 align="center">Vidal Technologies — company website</h1>

<p align="center">
  Website of <strong>Vidal Technologies</strong>, a company that builds websites, web applications and AI automations for businesses.<br />
  Available in Portuguese, English and Spanish.
</p>

<p align="center">
  <a href="README.md">Português</a> · <strong>English</strong> · <a href="README.es.md">Español</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Hostinger" src="https://img.shields.io/badge/Hosting-Hostinger-673DE6?logo=hostinger&logoColor=white" />
</p>

![Vidal Technologies home page](docs/screenshots/inicio-en.png)

## About the project

This repository holds the Vidal Technologies company website. Its goal is to present
the company and its services in a clear, visual way, show example projects, and make
it easy for anyone who wants to start a project to get in touch by email or WhatsApp.

The site is also a portfolio piece: the code is open for anyone who wants to see how
it was built.

### Goals

- Present the company and its services on a single page that is fast and easy to browse.
- Show, visually, the kind of automation the company delivers.
- Serve clients in Brazil and abroad, with content in three languages.
- Bring visitors to the contact options in just a few clicks.

## Features

- **Three languages:** Portuguese (`/`), English (`/en`) and Spanish (`/es`), switched
  with flags in the top right corner. All texts live in a single file.
- **Animated automation flow:** next to the headline, an n8n-style flow shows a lead
  being qualified by AI and routed to WhatsApp, Gmail, Google Calendar or a CRM.
  On phones the flow switches to a vertical version.
- **Services:** Websites, Web applications, and Automation and AI Agents, each with examples.
- **How we work:** the Conversation, Proposal and Delivery steps.
- **Projects:** cards with example projects and a button that leads to GitHub.
- **About:** the company introduction.
- **Contact:** buttons to send an email or chat on WhatsApp.
- **Responsive:** layout designed for both desktop and phone.
- **Own visual identity:** black background, graphite tones and gold `#FBC105`,
  Schibsted Grotesk font and an SVG logo.

## Screenshots

The section screenshots below show the Portuguese version; every section is also
available in English and Spanish.

### Desktop

| Services | How we work |
| --- | --- |
| ![Services](docs/screenshots/servicos.png) | ![How we work](docs/screenshots/como-trabalho.png) |

| Projects | About |
| --- | --- |
| ![Projects](docs/screenshots/projetos.png) | ![About](docs/screenshots/sobre.png) |

| Contact | |
| --- | --- |
| ![Contact](docs/screenshots/contato.png) | |

### Other languages

| Portuguese (`/`) | Spanish (`/es`) |
| --- | --- |
| ![Site in Portuguese](docs/screenshots/inicio.png) | ![Site in Spanish](docs/screenshots/inicio-es.png) |

### Phone

| Home | Services | Contact |
| --- | --- | --- |
| <img src="docs/screenshots/celular-inicio.png" alt="Home on a phone" width="260" /> | <img src="docs/screenshots/celular-servicos.png" alt="Services on a phone" width="260" /> | <img src="docs/screenshots/celular-contato.png" alt="Contact on a phone" width="260" /> |

## Tech stack

| Technology | What it is used for |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | Site structure, per-language routes and static page generation |
| [React](https://react.dev/) | Interface components |
| [TypeScript](https://www.typescriptlang.org/) | Typed code that is safer to maintain |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive layout |
| SVG and CSS | Logo, icons and the automation flow animation |

The site has no database and no login. Every page is generated as static files (HTML,
CSS and JavaScript), which keeps it fast, cheap to host and free of servers to maintain.

## Running it locally

You will need [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/vidaltechnologies/vidaltechnologies-site.git
cd vidaltechnologies-site
npm install
npm run dev
```

Then open http://localhost:3000. The English and Spanish versions are at
http://localhost:3000/en and http://localhost:3000/es.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the production version of the site |
| `npm run start` | Serves the version produced by `build` |
| `npm run lint` | Checks the code |

## Code structure

```
src/
├── app/
│   ├── page.tsx            # Home page in Portuguese
│   ├── [lang]/page.tsx     # English and Spanish pages
│   ├── layout.tsx          # Shared layout, fonts and metadata
│   ├── globals.css         # Colors and global styles
│   └── icon.svg            # Browser tab icon
├── components/
│   ├── home.tsx            # Page sections
│   ├── automation-flow.tsx # Animated automation flow
│   ├── language-switcher.tsx
│   ├── logo.tsx
│   └── whatsapp-icon.tsx
└── i18n/
    └── dictionaries.ts     # All texts, in the three languages
docs/
└── screenshots/            # Images used in this README
```

## Deployment

The site is hosted on Hostinger as static files: the build output is uploaded to the
domain's `public_html` folder. Since there is no database, it can also be deployed to
services such as Vercel or Netlify without changes.

## Contact

- Email: [contato@vidaltechnologies.com.br](mailto:contato@vidaltechnologies.com.br)
- WhatsApp: [+55 41 98877-9179](https://wa.me/5541988779179)
- GitHub: [github.com/vidaltechnologies](https://github.com/vidaltechnologies)

---

© Vidal Technologies. All rights reserved.
