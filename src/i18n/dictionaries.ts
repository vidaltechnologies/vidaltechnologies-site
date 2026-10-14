// Textos do site em cada idioma. Português fica em "/", os outros em "/en" e "/es".

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localePath = (lang: Locale) => (lang === "pt" ? "/" : `/${lang}`);

export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

const pt = {
  languageName: "Português",
  nav: { services: "Serviços", process: "Como trabalho", about: "Sobre" },
  cta: "Fale comigo",
  hero: {
    eyebrow: "Tecnologia sob medida",
    titleStart: "Software que trabalha",
    titleAccent: "por você",
    text: "A Vidal Labs cria sites, sistemas e automações para empresas que querem ganhar tempo e crescer com tecnologia.",
    primary: "Começar um projeto",
    secondary: "Ver serviços",
  },
  code: {
    comment: "// seu próximo projeto",
    name: "projeto",
    fields: [
      ["prazo", "combinado"],
      ["código", "seu"],
      ["resultado", "no ar"],
    ],
  },
  services: {
    title: "Serviços",
    items: [
      {
        title: "Sites e sistemas web",
        text: "Sites institucionais, painéis e aplicações sob medida, rápidos e fáceis de manter.",
      },
      {
        title: "Automação e IA",
        text: "Integrações e assistentes que tiram tarefas repetitivas do caminho da sua equipe.",
      },
      {
        title: "Consultoria técnica",
        text: "Ajuda para escolher tecnologias, revisar projetos e planejar o próximo passo.",
      },
    ],
  },
  process: {
    title: "Como trabalho",
    steps: [
      { title: "Conversa", text: "Entendemos o problema e o que você precisa resolver." },
      { title: "Proposta", text: "Escopo, prazo e investimento claros antes de começar." },
      { title: "Entrega", text: "Versões frequentes para você acompanhar e ajustar." },
    ],
  },
  about: {
    title: "Sobre",
    text: "[Texto sobre você e a Vidal Labs: sua experiência, o que te motiva e os projetos de que mais se orgulha.]",
  },
  contact: {
    title: "Tem um projeto em mente?",
    text: "Conte o que você precisa e eu respondo com os próximos passos.",
    button: "Enviar e-mail",
  },
  switcherLabel: "Idioma",
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  languageName: "English",
  nav: { services: "Services", process: "How I work", about: "About" },
  cta: "Get in touch",
  hero: {
    eyebrow: "Tailor-made technology",
    titleStart: "Software that works",
    titleAccent: "for you",
    text: "Vidal Labs builds websites, systems and automations for companies that want to save time and grow with technology.",
    primary: "Start a project",
    secondary: "See services",
  },
  code: {
    comment: "// your next project",
    name: "project",
    fields: [
      ["deadline", "agreed"],
      ["code", "yours"],
      ["result", "live"],
    ],
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Websites and web apps",
        text: "Company websites, dashboards and custom applications that are fast and easy to maintain.",
      },
      {
        title: "Automation and AI",
        text: "Integrations and assistants that take repetitive tasks off your team's plate.",
      },
      {
        title: "Technical consulting",
        text: "Help choosing technologies, reviewing projects and planning the next step.",
      },
    ],
  },
  process: {
    title: "How I work",
    steps: [
      { title: "Conversation", text: "We understand the problem and what you need to solve." },
      { title: "Proposal", text: "Clear scope, timeline and investment before we start." },
      { title: "Delivery", text: "Frequent releases so you can follow along and adjust." },
    ],
  },
  about: {
    title: "About",
    text: "[About you and Vidal Labs: your experience, what drives you and the projects you are proudest of.]",
  },
  contact: {
    title: "Have a project in mind?",
    text: "Tell me what you need and I will reply with the next steps.",
    button: "Send an e-mail",
  },
  switcherLabel: "Language",
};

const es: Dictionary = {
  languageName: "Español",
  nav: { services: "Servicios", process: "Cómo trabajo", about: "Sobre mí" },
  cta: "Contáctame",
  hero: {
    eyebrow: "Tecnología a medida",
    titleStart: "Software que trabaja",
    titleAccent: "por ti",
    text: "Vidal Labs crea sitios web, sistemas y automatizaciones para empresas que quieren ganar tiempo y crecer con tecnología.",
    primary: "Empezar un proyecto",
    secondary: "Ver servicios",
  },
  code: {
    comment: "// tu próximo proyecto",
    name: "proyecto",
    fields: [
      ["plazo", "acordado"],
      ["código", "tuyo"],
      ["resultado", "en línea"],
    ],
  },
  services: {
    title: "Servicios",
    items: [
      {
        title: "Sitios y sistemas web",
        text: "Sitios corporativos, paneles y aplicaciones a medida, rápidos y fáciles de mantener.",
      },
      {
        title: "Automatización e IA",
        text: "Integraciones y asistentes que quitan las tareas repetitivas del camino de tu equipo.",
      },
      {
        title: "Consultoría técnica",
        text: "Ayuda para elegir tecnologías, revisar proyectos y planificar el siguiente paso.",
      },
    ],
  },
  process: {
    title: "Cómo trabajo",
    steps: [
      { title: "Conversación", text: "Entendemos el problema y lo que necesitas resolver." },
      { title: "Propuesta", text: "Alcance, plazo e inversión claros antes de empezar." },
      { title: "Entrega", text: "Versiones frecuentes para que puedas seguir y ajustar." },
    ],
  },
  about: {
    title: "Sobre mí",
    text: "[Texto sobre ti y Vidal Labs: tu experiencia, lo que te motiva y los proyectos de los que más te enorgulleces.]",
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    text: "Cuéntame lo que necesitas y te respondo con los próximos pasos.",
    button: "Enviar e-mail",
  },
  switcherLabel: "Idioma",
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };
