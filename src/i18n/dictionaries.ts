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
  nav: { services: "Serviços", process: "Como trabalhamos", projects: "Projetos", about: "Sobre" },
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
    name: "qualificacao-de-leads",
    status: "executando",
    footer: "Roda sozinho a cada novo contato",
    branches: { yes: "sim", no: "em nutrição" },
    nodes: {
      trigger: { title: "Novo lead", text: "Site / Instagram" },
      ai: { title: "Vidal Technologies AI", text: "Analisa e qualifica" },
      check: { title: "Lead qualificado?", text: "Regras comerciais" },
      whatsapp: { title: "WhatsApp", text: "Resposta personalizada" },
      gmail: { title: "Gmail", text: "Apresentação e agenda" },
      calendar: { title: "Google Calendar", text: "Reunião agendada" },
      crm: { title: "CRM", text: "Registra o contato" },
      followup: { title: "Follow-up", text: "Contato futuro programado" },
    },
  },
  services: {
    title: "Serviços",
    carousel: { goTo: "Ir para o exemplo" },
    items: [
      {
        title: "Sites",
        text: "Sua empresa bem apresentada na internet: um site rápido, bonito e fácil de atualizar, que transmite confiança e transforma visitantes em contatos.",
        examples: [
          {
            code: "S1",
            title: "Site institucional",
            text: "Apresenta a sua empresa, serviços e diferenciais, com contato direto pelo WhatsApp.",
          },
          {
            code: "S2",
            title: "Site para profissionais e PJ",
            text: "Presença online para quem trabalha por conta própria e quer ser encontrado.",
          },
          {
            code: "S3",
            title: "Landing page",
            text: "Página única e focada em uma campanha, produto ou evento, feita para converter.",
          },
          {
            code: "S4",
            title: "Blog e portfólio",
            text: "Espaço para publicar conteúdos e mostrar seus trabalhos, sempre atualizado.",
          },
        ],
      },
      {
        title: "Aplicações web",
        text: "Sistemas feitos sob medida para o jeito que a sua empresa trabalha, no lugar de planilhas soltas e processos manuais.",
        examples: [
          {
            code: "A1",
            title: "Sistema de gestão",
            text: "Controle do dia a dia da empresa em uma ferramenta feita para o seu processo.",
          },
          {
            code: "A2",
            title: "Dashboard de dados",
            text: "Os números do negócio reunidos em painéis claros para decidir com rapidez.",
          },
          {
            code: "A3",
            title: "Portal do cliente",
            text: "Área restrita onde seus clientes acompanham pedidos, documentos e informações.",
          },
          {
            code: "A4",
            title: "Agendamentos e orçamentos",
            text: "Agenda, orçamentos e cadastros online, sem troca de mensagens sem fim.",
          },
        ],
      },
      {
        title: "Automação e Agentes de IA",
        text: "Processos que rodam sozinhos e agentes inteligentes que executam e analisam tarefas, liberando a sua equipe para o que importa.",
        examples: [
          {
            code: "I1",
            title: "Automação de tarefas",
            text: "Fim das tarefas manuais e repetitivas, com menos erros e mais tempo livre.",
          },
          {
            code: "I2",
            title: "Agentes de IA",
            text: "Agentes que atendem, respondem, classificam e analisam, inclusive no WhatsApp.",
          },
          {
            code: "I3",
            title: "Workflows e integrações",
            text: "Fluxos personalizados com n8n que conectam os sistemas que você já usa.",
          },
          {
            code: "I4",
            title: "Documentos e relatórios",
            text: "Documentos, relatórios e gestão de projetos gerados e enviados automaticamente.",
          },
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
  projects: {
    title: "Projetos",
    text: "Alguns exemplos do que construímos. O código de vários projetos está no GitHub.",
    button: "Ver no GitHub",
    items: [
      {
        title: "Site institucional multilíngue",
        text: "Site rápido em português, inglês e espanhol, com fluxo animado e contato por WhatsApp.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "Agente de atendimento no WhatsApp",
        text: "Agente de IA que responde clientes, qualifica pedidos e registra tudo no CRM.",
        tags: ["n8n", "LLM", "WhatsApp"],
      },
      {
        title: "Assistente com base de conhecimento",
        text: "Assistente que responde perguntas usando os documentos internos da empresa.",
        tags: ["Python", "RAG", "LLM"],
      },
      {
        title: "Relatórios automáticos",
        text: "Fluxo que junta dados de vários sistemas e envia relatórios prontos toda semana.",
        tags: ["n8n", "APIs", "Google Sheets"],
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
  nav: { services: "Services", process: "How we work", projects: "Projects", about: "About" },
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
    name: "lead-qualification",
    status: "running",
    footer: "Runs on its own for every new contact",
    branches: { yes: "yes", no: "nurturing" },
    nodes: {
      trigger: { title: "New lead", text: "Website / Instagram" },
      ai: { title: "Vidal Technologies AI", text: "Analyzes and qualifies" },
      check: { title: "Qualified lead?", text: "Sales rules" },
      whatsapp: { title: "WhatsApp", text: "Personalized reply" },
      gmail: { title: "Gmail", text: "Intro and scheduling" },
      calendar: { title: "Google Calendar", text: "Meeting booked" },
      crm: { title: "CRM", text: "Logs the contact" },
      followup: { title: "Follow-up", text: "Future contact scheduled" },
    },
  },
  services: {
    title: "Services",
    carousel: { goTo: "Go to example" },
    items: [
      {
        title: "Websites",
        text: "Your business presented well online: a fast, good-looking website that is easy to update, earns trust and turns visitors into leads.",
        examples: [
          {
            code: "S1",
            title: "Company website",
            text: "Presents your company, services and strengths, with direct contact via WhatsApp.",
          },
          {
            code: "S2",
            title: "Website for professionals",
            text: "An online presence for people who work on their own and want to be found.",
          },
          {
            code: "S3",
            title: "Landing page",
            text: "A single, focused page for a campaign, product or event, built to convert.",
          },
          {
            code: "S4",
            title: "Blog and portfolio",
            text: "A place to publish content and show your work, always up to date.",
          },
        ],
      },
      {
        title: "Web applications",
        text: "Systems built around the way your company works, instead of scattered spreadsheets and manual processes.",
        examples: [
          {
            code: "A1",
            title: "Management system",
            text: "Day-to-day control of your company in a tool built for your process.",
          },
          {
            code: "A2",
            title: "Data dashboard",
            text: "Your business numbers gathered in clear dashboards for quick decisions.",
          },
          {
            code: "A3",
            title: "Customer portal",
            text: "A private area where your customers follow orders, documents and information.",
          },
          {
            code: "A4",
            title: "Scheduling and quotes",
            text: "Scheduling, quotes and sign-ups online, without endless message threads.",
          },
        ],
      },
      {
        title: "Automation and AI Agents",
        text: "Processes that run on their own and smart agents that carry out and analyze tasks, freeing your team for what matters.",
        examples: [
          {
            code: "I1",
            title: "Task automation",
            text: "No more manual, repetitive tasks: fewer errors and more free time.",
          },
          {
            code: "I2",
            title: "AI agents",
            text: "Agents that serve, answer, classify and analyze, including on WhatsApp.",
          },
          {
            code: "I3",
            title: "Workflows and integrations",
            text: "Custom n8n flows that connect the systems you already use.",
          },
          {
            code: "I4",
            title: "Documents and reports",
            text: "Documents, reports and project management generated and sent automatically.",
          },
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
  projects: {
    title: "Projects",
    text: "A few examples of what we build. The code for several projects is on GitHub.",
    button: "See on GitHub",
    items: [
      {
        title: "Multilingual company website",
        text: "Fast website in Portuguese, English and Spanish, with an animated flow and WhatsApp contact.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "WhatsApp support agent",
        text: "AI agent that answers customers, qualifies requests and logs everything in the CRM.",
        tags: ["n8n", "LLM", "WhatsApp"],
      },
      {
        title: "Knowledge base assistant",
        text: "Assistant that answers questions using the company's internal documents.",
        tags: ["Python", "RAG", "LLM"],
      },
      {
        title: "Automated reports",
        text: "Workflow that gathers data from several systems and sends ready-made reports every week.",
        tags: ["n8n", "APIs", "Google Sheets"],
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
  nav: { services: "Servicios", process: "Cómo trabajamos", projects: "Proyectos", about: "Sobre nosotros" },
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
    name: "calificacion-de-leads",
    status: "ejecutando",
    footer: "Se ejecuta solo con cada nuevo contacto",
    branches: { yes: "sí", no: "en nutrición" },
    nodes: {
      trigger: { title: "Nuevo lead", text: "Sitio / Instagram" },
      ai: { title: "Vidal Technologies AI", text: "Analiza y califica" },
      check: { title: "¿Lead calificado?", text: "Reglas comerciales" },
      whatsapp: { title: "WhatsApp", text: "Respuesta personalizada" },
      gmail: { title: "Gmail", text: "Presentación y agenda" },
      calendar: { title: "Google Calendar", text: "Reunión agendada" },
      crm: { title: "CRM", text: "Registra el contacto" },
      followup: { title: "Follow-up", text: "Contacto futuro programado" },
    },
  },
  services: {
    title: "Servicios",
    carousel: { goTo: "Ir al ejemplo" },
    items: [
      {
        title: "Sitios web",
        text: "Tu empresa bien presentada en internet: un sitio rápido, atractivo y fácil de actualizar, que genera confianza y convierte visitas en contactos.",
        examples: [
          {
            code: "S1",
            title: "Sitio institucional",
            text: "Presenta tu empresa, servicios y diferenciales, con contacto directo por WhatsApp.",
          },
          {
            code: "S2",
            title: "Sitio para profesionales",
            text: "Presencia online para quien trabaja por cuenta propia y quiere ser encontrado.",
          },
          {
            code: "S3",
            title: "Landing page",
            text: "Página única y enfocada en una campaña, producto o evento, hecha para convertir.",
          },
          {
            code: "S4",
            title: "Blog y portafolio",
            text: "Espacio para publicar contenidos y mostrar tus trabajos, siempre actualizado.",
          },
        ],
      },
      {
        title: "Aplicaciones web",
        text: "Sistemas hechos a medida para la forma en que trabaja tu empresa, en lugar de planillas sueltas y procesos manuales.",
        examples: [
          {
            code: "A1",
            title: "Sistema de gestión",
            text: "Control del día a día de la empresa en una herramienta hecha para tu proceso.",
          },
          {
            code: "A2",
            title: "Dashboard de datos",
            text: "Los números del negocio reunidos en paneles claros para decidir con rapidez.",
          },
          {
            code: "A3",
            title: "Portal del cliente",
            text: "Área restringida donde tus clientes siguen pedidos, documentos e información.",
          },
          {
            code: "A4",
            title: "Agendas y presupuestos",
            text: "Agenda, presupuestos y registros online, sin intercambios de mensajes sin fin.",
          },
        ],
      },
      {
        title: "Automatización y Agentes de IA",
        text: "Procesos que funcionan solos y agentes inteligentes que ejecutan y analizan tareas, liberando a tu equipo para lo que importa.",
        examples: [
          {
            code: "I1",
            title: "Automatización de tareas",
            text: "Adiós a las tareas manuales y repetitivas, con menos errores y más tiempo libre.",
          },
          {
            code: "I2",
            title: "Agentes de IA",
            text: "Agentes que atienden, responden, clasifican y analizan, incluso en WhatsApp.",
          },
          {
            code: "I3",
            title: "Workflows e integraciones",
            text: "Flujos personalizados con n8n que conectan los sistemas que ya usas.",
          },
          {
            code: "I4",
            title: "Documentos e informes",
            text: "Documentos, informes y gestión de proyectos generados y enviados automáticamente.",
          },
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
  projects: {
    title: "Proyectos",
    text: "Algunos ejemplos de lo que construimos. El código de varios proyectos está en GitHub.",
    button: "Ver en GitHub",
    items: [
      {
        title: "Sitio institucional multilingüe",
        text: "Sitio rápido en portugués, inglés y español, con flujo animado y contacto por WhatsApp.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "Agente de atención en WhatsApp",
        text: "Agente de IA que responde a clientes, califica pedidos y registra todo en el CRM.",
        tags: ["n8n", "LLM", "WhatsApp"],
      },
      {
        title: "Asistente con base de conocimiento",
        text: "Asistente que responde preguntas usando los documentos internos de la empresa.",
        tags: ["Python", "RAG", "LLM"],
      },
      {
        title: "Informes automáticos",
        text: "Flujo que reúne datos de varios sistemas y envía informes listos cada semana.",
        tags: ["n8n", "APIs", "Google Sheets"],
      },
    ],
  },
  about: {
    title: "Sobre nosotros",
    paragraphs: [
      "Vidal Technologies desarrolla soluciones tecnológicas que combinan Inteligencia Artificial, automatización de procesos e integración de sistemas para ayudar a las empresas a trabajar de forma más eficiente.",
      "Nuestro trabajo abarca el desarrollo de agentes de IA, aplicaciones con LLMs, soluciones RAG, automatización de workflows, integración mediante APIs y desarrollo de aplicaciones a medida.",
      "Unimos arquitectura de software, conocimiento técnico y visión de negocio para crear soluciones prácticas, adaptadas a las necesidades de cada operación.",
      "Nuestro objetivo es transformar procesos complejos en flujos de trabajo más simples, reducir las tareas manuales y utilizar la tecnología para generar resultados concretos.",
    ],
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
