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
  nav: { services: "Serviços", process: "Como trabalhamos", about: "Sobre" },
  cta: "Fale comigo",
  hero: {
    eyebrow: "Tecnologia sob medida",
    titleStart: "Software que trabalha",
    titleAccent: "por você",
    text: "A Vidal Technologies cria sites, sistemas e automações para empresas que querem ganhar tempo e crescer com tecnologia.",
    primary: "Começar um projeto",
    secondary: "Ver serviços",
  },
  flow: {
    name: "novo-lead",
    status: "executando",
    footer: "Roda sozinho a cada novo contato",
    nodes: {
      trigger: "Novo lead",
      ai: "IA vidal technologies\nclassifica",
      check: "Qualificado?",
      whatsapp: "WhatsApp",
      crm: "CRM",
    },
  },
  services: {
    title: "Serviços",
    items: [
      {
        title: "Sites",
        text: "Sites rápidos, bonitos e fáceis de atualizar, que passam confiança para o seu cliente.",
        examples: [
          "Site institucional para a sua marca",
          "Site para profissionais e PJ",
          "Landing pages para campanhas",
          "Blog e portfólio",
        ],
      },
      {
        title: "Aplicações web",
        text: "Sistemas sob medida que organizam o dia a dia da sua empresa.",
        examples: [
          "Sistemas de gestão para empresas",
          "Dashboards para análise de dados",
          "Portal do cliente e áreas restritas",
          "Agendamentos, orçamentos e cadastros",
        ],
      },
      {
        title: "Automação e Agentes de IA",
        text: "Automação de processos, agentes inteligentes e IA aplicada ao seu negócio.",
        examples: [
          "Automação de tarefas manuais e repetitivas",
          "Agentes de IA que executam e analisam tarefas",
          "Workflows personalizados com n8n",
          "Automação de documentos, relatórios e gestão de projetos",
          "Monitoramento e melhoria contínua das automações",
        ],
      },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      {
        title: "Conversa",
        text: "Começamos com uma conversa sem compromisso para entender o seu negócio, o problema que você quer resolver e o resultado que espera. Olhamos seus processos e as ferramentas que você já usa para descobrir onde a tecnologia gera mais impacto.",
      },
      {
        title: "Proposta",
        text: "Com base nessa conversa, você recebe uma proposta clara com escopo, etapas, prazos e investimento. Antes de qualquer trabalho começar, você já sabe exatamente o que será entregue, quando e quanto vai custar.",
      },
      {
        title: "Entrega",
        text: "O desenvolvimento acontece em ciclos curtos, com versões frequentes para você testar e dar sua opinião. Depois de colocar no ar, acompanhamos o funcionamento, fazemos ajustes e damos suporte para a solução continuar evoluindo.",
      },
    ],
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "A Vidal Technologies desenvolve soluções tecnológicas que combinam Inteligência Artificial, automação de processos e integração de sistemas para ajudar empresas a trabalhar de forma mais eficiente.",
      "Nossa atuação abrange o desenvolvimento de agentes de IA, aplicações com LLMs, soluções RAG, automação de workflows, integração via APIs e desenvolvimento de aplicações personalizadas.",
      "Unimos arquitetura de software, conhecimento técnico e visão de negócio para criar soluções práticas, adaptadas às necessidades de cada operação.",
      "Nosso objetivo é transformar processos complexos em fluxos de trabalho mais simples, reduzir atividades manuais e utilizar a tecnologia para gerar resultados concretos.",
    ],
    cta: "Vamos conversar sobre como a Inteligência Artificial pode contribuir para o seu projeto?",
  },
  contact: {
    title: "Tem um projeto em mente?",
    text: "Conte o que você precisa e eu respondo com os próximos passos.",
    button: "Enviar e-mail",
    whatsapp: "Falar no WhatsApp",
    whatsappMessage: "Olá! Vim pelo site da Vidal Technologies e gostaria de conversar sobre um projeto.",
  },
  switcherLabel: "Idioma",
  rights: "Todos os direitos reservados.",
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  languageName: "English",
  nav: { services: "Services", process: "How we work", about: "About" },
  cta: "Get in touch",
  hero: {
    eyebrow: "Tailor-made technology",
    titleStart: "Software that works",
    titleAccent: "for you",
    text: "Vidal Technologies builds websites, systems and automations for companies that want to save time and grow with technology.",
    primary: "Start a project",
    secondary: "See services",
  },
  flow: {
    name: "new-lead",
    status: "running",
    footer: "Runs on its own for every new contact",
    nodes: {
      trigger: "New lead",
      ai: "vidal technologies AI\nclassifies",
      check: "Qualified?",
      whatsapp: "WhatsApp",
      crm: "CRM",
    },
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Websites",
        text: "Fast, good-looking websites that are easy to update and earn your customers' trust.",
        examples: [
          "Company website for your brand",
          "Website for professionals and freelancers",
          "Landing pages for campaigns",
          "Blog and portfolio",
        ],
      },
      {
        title: "Web applications",
        text: "Custom systems that organize your company's day-to-day work.",
        examples: [
          "Management systems for companies",
          "Data analysis dashboards",
          "Customer portals and members areas",
          "Scheduling, quotes and sign-ups",
        ],
      },
      {
        title: "Automation and AI Agents",
        text: "Process automation, intelligent agents and AI applied to your business.",
        examples: [
          "Automation of manual, repetitive tasks",
          "AI agents that carry out and analyze tasks",
          "Custom workflows with n8n",
          "Automated documents, reports and project tracking",
          "Monitoring and continuous improvement of automations",
        ],
      },
    ],
  },
  process: {
    title: "How we work",
    steps: [
      {
        title: "Conversation",
        text: "We start with a no-commitment conversation to understand your business, the problem you want to solve and the result you expect. We look at your processes and the tools you already use to find where technology will have the most impact.",
      },
      {
        title: "Proposal",
        text: "Based on that conversation, you get a clear proposal with scope, stages, timeline and investment. Before any work begins, you know exactly what will be delivered, when, and how much it will cost.",
      },
      {
        title: "Delivery",
        text: "Development happens in short cycles, with frequent releases for you to try and give feedback on. After launch, we monitor how it runs, make adjustments and provide support so the solution keeps improving.",
      },
    ],
  },
  about: {
    title: "About",
    paragraphs: [
      "Vidal Technologies builds technology solutions that combine Artificial Intelligence, process automation and systems integration to help companies work more efficiently.",
      "Our work covers AI agents, LLM-powered applications, RAG solutions, workflow automation, API integrations and custom application development.",
      "We bring together software architecture, technical expertise and business vision to create practical solutions, tailored to the needs of each operation.",
      "Our goal is to turn complex processes into simpler workflows, reduce manual work and use technology to deliver concrete results.",
    ],
    cta: "Shall we talk about how Artificial Intelligence can help your project?",
  },
  contact: {
    title: "Have a project in mind?",
    text: "Tell me what you need and I will reply with the next steps.",
    button: "Send an e-mail",
    whatsapp: "Chat on WhatsApp",
    whatsappMessage: "Hi! I found the Vidal Technologies website and would like to talk about a project.",
  },
  switcherLabel: "Language",
  rights: "All rights reserved.",
};

const es: Dictionary = {
  languageName: "Español",
  nav: { services: "Servicios", process: "Cómo trabajamos", about: "Sobre mí" },
  cta: "Contáctame",
  hero: {
    eyebrow: "Tecnología a medida",
    titleStart: "Software que trabaja",
    titleAccent: "por ti",
    text: "Vidal Technologies crea sitios web, sistemas y automatizaciones para empresas que quieren ganar tiempo y crecer con tecnología.",
    primary: "Empezar un proyecto",
    secondary: "Ver servicios",
  },
  flow: {
    name: "nuevo-lead",
    status: "ejecutando",
    footer: "Se ejecuta solo con cada nuevo contacto",
    nodes: {
      trigger: "Nuevo lead",
      ai: "IA vidal technologies\nclasifica",
      check: "¿Calificado?",
      whatsapp: "WhatsApp",
      crm: "CRM",
    },
  },
  services: {
    title: "Servicios",
    items: [
      {
        title: "Sitios web",
        text: "Sitios rápidos, atractivos y fáciles de actualizar, que generan confianza en tus clientes.",
        examples: [
          "Sitio corporativo para tu marca",
          "Sitio para profesionales e independientes",
          "Landing pages para campañas",
          "Blog y portafolio",
        ],
      },
      {
        title: "Aplicaciones web",
        text: "Sistemas a medida que organizan el día a día de tu empresa.",
        examples: [
          "Sistemas de gestión para empresas",
          "Dashboards para análisis de datos",
          "Portal de clientes y áreas privadas",
          "Agendas, presupuestos y registros",
        ],
      },
      {
        title: "Automatización y Agentes de IA",
        text: "Automatización de procesos, agentes inteligentes e IA aplicada a tu negocio.",
        examples: [
          "Automatización de tareas manuales y repetitivas",
          "Agentes de IA que ejecutan y analizan tareas",
          "Workflows personalizados con n8n",
          "Automatización de documentos, informes y gestión de proyectos",
          "Monitoreo y mejora continua de las automatizaciones",
        ],
      },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      {
        title: "Conversación",
        text: "Empezamos con una conversación sin compromiso para entender tu negocio, el problema que quieres resolver y el resultado que esperas. Analizamos tus procesos y las herramientas que ya usas para descubrir dónde la tecnología genera más impacto.",
      },
      {
        title: "Propuesta",
        text: "A partir de esa conversación, recibes una propuesta clara con alcance, etapas, plazos e inversión. Antes de empezar cualquier trabajo, ya sabes exactamente qué se entregará, cuándo y cuánto costará.",
      },
      {
        title: "Entrega",
        text: "El desarrollo se hace en ciclos cortos, con versiones frecuentes para que pruebes y des tu opinión. Después del lanzamiento, seguimos su funcionamiento, hacemos ajustes y damos soporte para que la solución siga evolucionando.",
      },
    ],
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Vidal Technologies desarrolla soluciones tecnológicas que combinan Inteligencia Artificial, automatización de procesos e integración de sistemas para ayudar a las empresas a trabajar de forma más eficiente.",
      "Nuestro trabajo abarca el desarrollo de agentes de IA, aplicaciones con LLMs, soluciones RAG, automatización de workflows, integración mediante APIs y desarrollo de aplicaciones a medida.",
      "Unimos arquitectura de software, conocimiento técnico y visión de negocio para crear soluciones prácticas, adaptadas a las necesidades de cada operación.",
      "Nuestro objetivo es transformar procesos complejos en flujos de trabajo más simples, reducir las tareas manuales y utilizar la tecnología para generar resultados concretos.",
    ],
    cta: "¿Hablamos sobre cómo la Inteligencia Artificial puede contribuir a tu proyecto?",
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    text: "Cuéntame lo que necesitas y te respondo con los próximos pasos.",
    button: "Enviar e-mail",
    whatsapp: "Hablar por WhatsApp",
    whatsappMessage: "¡Hola! Vi el sitio de Vidal Technologies y me gustaría hablar sobre un proyecto.",
  },
  switcherLabel: "Idioma",
  rights: "Todos los derechos reservados.",
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };
