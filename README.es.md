<p align="center">
  <img src="src/app/icon.svg" alt="Vidal Technologies" width="72" />
</p>

<h1 align="center">Vidal Technologies — sitio institucional</h1>

<p align="center">
  Sitio web de <strong>Vidal Technologies</strong>, empresa que crea sitios web, aplicaciones y automatizaciones con IA para empresas.<br />
  Disponible en portugués, inglés y español.
</p>

<p align="center">
  <a href="README.md">Português</a> · <a href="README.en.md">English</a> · <strong>Español</strong>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Hostinger" src="https://img.shields.io/badge/Hosting-Hostinger-673DE6?logo=hostinger&logoColor=white" />
</p>

![Página de inicio del sitio de Vidal Technologies](docs/screenshots/inicio-es.png)

## Sobre el proyecto

Este repositorio contiene el sitio institucional de Vidal Technologies. Su objetivo es
presentar la empresa y sus servicios de forma clara y visual, mostrar ejemplos de
proyectos y facilitar el primer contacto de quien quiera empezar un proyecto, por
correo electrónico o WhatsApp.

El sitio también es una pieza de portafolio: el código está abierto para quien quiera
ver cómo fue construido.

### Objetivos

- Presentar la empresa y sus servicios en una sola página, rápida y fácil de navegar.
- Mostrar, de forma visual, el tipo de automatización que entrega la empresa.
- Atender clientes en Brasil y en el exterior, con el contenido en tres idiomas.
- Llevar al visitante al contacto en pocos clics.

## Funcionalidades

- **Tres idiomas:** portugués (`/`), inglés (`/en`) y español (`/es`), con cambio por
  banderas en la esquina superior derecha. Todos los textos están en un único archivo.
- **Flujo de automatización animado:** junto al título, un flujo al estilo n8n muestra
  un lead calificado por IA que sigue hacia WhatsApp, Gmail, Google Calendar o un CRM.
  En el celular, el flujo cambia a una versión vertical.
- **Servicios:** Sitios web, Aplicaciones web y Automatización y Agentes de IA, cada uno con ejemplos.
- **Cómo trabajamos:** las etapas Conversación, Propuesta y Entrega.
- **Proyectos:** tarjetas con ejemplos de proyectos y un botón que lleva a GitHub.
- **Sobre nosotros:** la presentación de la empresa.
- **Contacto:** botones para enviar un correo y hablar por WhatsApp.
- **Responsivo:** diseño pensado para computadora y celular.
- **Identidad visual propia:** fondo negro, tonos grafito y dorado `#FBC105`,
  fuente Schibsted Grotesk y logo dibujado en SVG.

## Pantallas

Las capturas de las secciones muestran la versión en portugués; todas las secciones
también están disponibles en inglés y español.

### Computadora

| Servicios | Cómo trabajamos |
| --- | --- |
| ![Servicios](docs/screenshots/servicos.png) | ![Cómo trabajamos](docs/screenshots/como-trabalho.png) |

| Proyectos | Sobre nosotros |
| --- | --- |
| ![Proyectos](docs/screenshots/projetos.png) | ![Sobre nosotros](docs/screenshots/sobre.png) |

| Contacto | |
| --- | --- |
| ![Contacto](docs/screenshots/contato.png) | |

### Otros idiomas

| Portugués (`/`) | Inglés (`/en`) |
| --- | --- |
| ![Sitio en portugués](docs/screenshots/inicio.png) | ![Sitio en inglés](docs/screenshots/inicio-en.png) |

### Celular

| Inicio | Servicios | Contacto |
| --- | --- | --- |
| <img src="docs/screenshots/celular-inicio.png" alt="Inicio en el celular" width="260" /> | <img src="docs/screenshots/celular-servicos.png" alt="Servicios en el celular" width="260" /> | <img src="docs/screenshots/celular-contato.png" alt="Contacto en el celular" width="260" /> |

## Tecnologías

| Tecnología | Para qué sirve |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | Estructura del sitio, rutas por idioma y generación de páginas estáticas |
| [React](https://react.dev/) | Componentes de la interfaz |
| [TypeScript](https://www.typescriptlang.org/) | Código tipado, más seguro de mantener |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y diseño responsivo |
| SVG y CSS | Logo, íconos y animación del flujo de automatización |

El sitio no usa base de datos ni inicio de sesión. Todas las páginas se generan como
archivos estáticos (HTML, CSS y JavaScript), lo que hace que el sitio sea rápido,
barato de alojar y sin servidor que mantener.

## Cómo ejecutarlo en tu computadora

Necesitarás [Node.js](https://nodejs.org/) 20 o una versión más reciente.

```bash
git clone https://github.com/vidaltechnologies/vidaltechnologies-site.git
cd vidaltechnologies-site
npm install
npm run dev
```

Luego abre http://localhost:3000. Las versiones en inglés y español están en
http://localhost:3000/en y http://localhost:3000/es.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera la versión final del sitio |
| `npm run start` | Ejecuta la versión generada por `build` |
| `npm run lint` | Revisa el código |

## Estructura del código

```
src/
├── app/
│   ├── page.tsx            # Página de inicio en portugués
│   ├── [lang]/page.tsx     # Páginas en inglés y español
│   ├── layout.tsx          # Estructura común, fuentes y metadatos
│   ├── globals.css         # Colores y estilos globales
│   └── icon.svg            # Ícono de la pestaña del navegador
├── components/
│   ├── home.tsx            # Secciones de la página
│   ├── automation-flow.tsx # Flujo de automatización animado
│   ├── language-switcher.tsx
│   ├── logo.tsx
│   └── whatsapp-icon.tsx
└── i18n/
    └── dictionaries.ts     # Todos los textos, en los tres idiomas
docs/
└── screenshots/            # Imágenes usadas en este README
```

---

© Vidal Technologies. Todos los derechos reservados.
