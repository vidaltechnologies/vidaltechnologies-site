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
    paragraphs: [
      "Sou profissional de tecnologia com 17 anos de experiência em desenvolvimento de software, arquitetura de soluções e integração de sistemas corporativos, com atuação em projetos nacionais e internacionais.",
      "Atualmente, atuo como Arquiteto de Soluções na Oracle Consulting, conectando necessidades de negócio a soluções tecnológicas, com foco em arquitetura, integração de sistemas, automação de processos e transformação digital.",
      "Minha atuação em Inteligência Artificial Generativa reúne conhecimentos em Large Language Models (LLMs), AI Agents, Retrieval-Augmented Generation (RAG) e integração de APIs, aplicados à criação de soluções inteligentes e à automação de processos empresariais.",
    ],
    focusIntro: "Entre as soluções tecnológicas que fazem parte do meu foco de atuação, destaco:",
    focus: [
      {
        title: "Agentes de Inteligência Artificial (AI Agents)",
        text: "Desenvolvimento de agentes inteligentes para execução de tarefas, automação de atividades e integração com sistemas.",
      },
      {
        title: "LLMs e IA Generativa",
        text: "Desenvolvimento de aplicações que utilizam modelos de linguagem para processamento de informações, geração de conteúdo e execução de tarefas.",
      },
      {
        title: "RAG e bases de conhecimento",
        text: "Soluções que combinam modelos de linguagem com documentos e informações corporativas para oferecer respostas contextualizadas.",
      },
      {
        title: "Automação de processos",
        text: "Integração de sistemas, APIs e recursos de IA para otimizar fluxos de trabalho e reduzir atividades manuais.",
      },
      {
        title: "Arquitetura e integração de soluções",
        text: "Planejamento e desenvolvimento de soluções escaláveis, considerando requisitos técnicos e necessidades de negócio.",
      },
    ],
    closing: [
      "Possuo certificações oficiais Oracle, incluindo Oracle Cloud Infrastructure Generative AI Certified Professional, Multicloud Architect Associate e PL/SQL Developer Certified Professional.",
      "Minha formação inclui graduação em Análise e Desenvolvimento de Sistemas, pós-graduação em Administração de Banco de Dados Oracle, MBA em Gestão e Planejamento Estratégico e pós-graduação em Gestão de Projetos, Jornada do Cliente e Metodologias Ágeis.",
      "Meu principal diferencial está na capacidade de compreender os desafios de negócio, definir arquiteturas adequadas e transformar necessidades em soluções tecnológicas práticas.",
      "Acredito que uma boa solução de Inteligência Artificial não deve apenas utilizar tecnologias modernas, mas resolver problemas reais e gerar valor para o negócio.",
    ],
    cta: "Vamos conversar sobre como a Inteligência Artificial pode contribuir para o seu projeto?",
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
    paragraphs: [
      "I am a technology professional with 17 years of experience in software development, solution architecture and enterprise systems integration, working on projects in Brazil and abroad.",
      "I currently work as a Solutions Architect at Oracle Consulting, connecting business needs to technology solutions, with a focus on architecture, systems integration, process automation and digital transformation.",
      "My work in Generative AI brings together knowledge of Large Language Models (LLMs), AI Agents, Retrieval-Augmented Generation (RAG) and API integration, applied to building intelligent solutions and automating business processes.",
    ],
    focusIntro: "Among the technology solutions I focus on, I highlight:",
    focus: [
      {
        title: "AI Agents",
        text: "Building intelligent agents that carry out tasks, automate activities and integrate with existing systems.",
      },
      {
        title: "LLMs and Generative AI",
        text: "Building applications that use language models to process information, generate content and carry out tasks.",
      },
      {
        title: "RAG and knowledge bases",
        text: "Solutions that combine language models with company documents and information to give contextual answers.",
      },
      {
        title: "Process automation",
        text: "Integrating systems, APIs and AI capabilities to streamline workflows and reduce manual work.",
      },
      {
        title: "Solution architecture and integration",
        text: "Planning and building scalable solutions that take both technical requirements and business needs into account.",
      },
    ],
    closing: [
      "I hold official Oracle certifications, including Oracle Cloud Infrastructure Generative AI Certified Professional, Multicloud Architect Associate and PL/SQL Developer Certified Professional.",
      "My education includes a degree in Systems Analysis and Development, a postgraduate degree in Oracle Database Administration, an MBA in Strategic Management and Planning, and a postgraduate degree in Project Management, Customer Journey and Agile Methodologies.",
      "What sets me apart is the ability to understand business challenges, define the right architecture and turn needs into practical technology solutions.",
      "I believe a good Artificial Intelligence solution should not just use modern technology, but solve real problems and create value for the business.",
    ],
    cta: "Shall we talk about how Artificial Intelligence can help your project?",
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
    paragraphs: [
      "Soy un profesional de tecnología con 17 años de experiencia en desarrollo de software, arquitectura de soluciones e integración de sistemas corporativos, con participación en proyectos nacionales e internacionales.",
      "Actualmente trabajo como Arquitecto de Soluciones en Oracle Consulting, conectando las necesidades del negocio con soluciones tecnológicas, con foco en arquitectura, integración de sistemas, automatización de procesos y transformación digital.",
      "Mi trabajo en Inteligencia Artificial Generativa reúne conocimientos en Large Language Models (LLMs), AI Agents, Retrieval-Augmented Generation (RAG) e integración de APIs, aplicados a la creación de soluciones inteligentes y a la automatización de procesos empresariales.",
    ],
    focusIntro: "Entre las soluciones tecnológicas que forman parte de mi foco de trabajo, destaco:",
    focus: [
      {
        title: "Agentes de Inteligencia Artificial (AI Agents)",
        text: "Desarrollo de agentes inteligentes para ejecutar tareas, automatizar actividades e integrarse con sistemas.",
      },
      {
        title: "LLMs e IA Generativa",
        text: "Desarrollo de aplicaciones que utilizan modelos de lenguaje para procesar información, generar contenido y ejecutar tareas.",
      },
      {
        title: "RAG y bases de conocimiento",
        text: "Soluciones que combinan modelos de lenguaje con documentos e información corporativa para ofrecer respuestas contextualizadas.",
      },
      {
        title: "Automatización de procesos",
        text: "Integración de sistemas, APIs y recursos de IA para optimizar flujos de trabajo y reducir tareas manuales.",
      },
      {
        title: "Arquitectura e integración de soluciones",
        text: "Planificación y desarrollo de soluciones escalables, considerando requisitos técnicos y necesidades del negocio.",
      },
    ],
    closing: [
      "Tengo certificaciones oficiales de Oracle, entre ellas Oracle Cloud Infrastructure Generative AI Certified Professional, Multicloud Architect Associate y PL/SQL Developer Certified Professional.",
      "Mi formación incluye la carrera de Análisis y Desarrollo de Sistemas, un posgrado en Administración de Bases de Datos Oracle, un MBA en Gestión y Planificación Estratégica y un posgrado en Gestión de Proyectos, Experiencia del Cliente y Metodologías Ágiles.",
      "Mi principal diferencial es la capacidad de comprender los desafíos del negocio, definir la arquitectura adecuada y transformar necesidades en soluciones tecnológicas prácticas.",
      "Creo que una buena solución de Inteligencia Artificial no solo debe usar tecnologías modernas, sino resolver problemas reales y generar valor para el negocio.",
    ],
    cta: "¿Hablamos sobre cómo la Inteligencia Artificial puede contribuir a tu proyecto?",
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    text: "Cuéntame lo que necesitas y te respondo con los próximos pasos.",
    button: "Enviar e-mail",
  },
  switcherLabel: "Idioma",
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };
