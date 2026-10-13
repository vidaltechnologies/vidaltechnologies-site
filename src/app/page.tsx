import Link from "next/link";

const services = [
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
];

const steps = [
  { n: "01", title: "Conversa", text: "Entendemos o problema e o que você precisa resolver." },
  { n: "02", title: "Proposta", text: "Escopo, prazo e investimento claros antes de começar." },
  { n: "03", title: "Entrega", text: "Versões frequentes para você acompanhar e ajustar." },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Vidal<span className="text-accent">.</span>
            <span className="font-normal text-muted"> Technologies</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#servicos" className="hover:text-foreground">Serviços</a>
            <a href="#como-trabalho" className="hover:text-foreground">Como trabalho</a>
            <a href="#sobre" className="hover:text-foreground">Sobre</a>
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            Fale comigo
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-32">
            <div className="flex flex-col gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Tecnologia sob medida
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                Software que trabalha <span className="text-accent">por você</span>.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                A Vidal Technologies cria sites, sistemas e automações para empresas que
                querem ganhar tempo e crescer com tecnologia.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:brightness-110"
                >
                  Começar um projeto
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-line px-6 py-3 font-semibold transition hover:border-foreground"
                >
                  Ver serviços
                </a>
              </div>
            </div>

            <div className="self-end rounded-2xl border border-line bg-surface p-6 font-mono text-sm leading-7">
              <div className="mb-4 flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
              <p className="text-subtle">{"// seu próximo projeto"}</p>
              <p>
                <span className="text-accent">const</span> projeto = {"{"}
              </p>
              <p className="pl-4">
                prazo: <span className="text-muted">&quot;combinado&quot;</span>,
              </p>
              <p className="pl-4">
                código: <span className="text-muted">&quot;seu&quot;</span>,
              </p>
              <p className="pl-4">
                resultado: <span className="text-muted">&quot;no ar&quot;</span>,
              </p>
              <p>{"};"}</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </section>

        <section id="servicos" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Serviços</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col gap-3 rounded-2xl border border-line/60 bg-surface-2 p-6 transition hover:border-accent/60"
              >
                <h3 className="text-xl font-semibold text-accent">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="como-trabalho" className="scroll-mt-16 border-y border-line/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Como trabalho</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="flex flex-col gap-2">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sobre</h2>
            <p className="text-lg leading-relaxed text-muted">
              [Texto sobre você e a Vidal Technologies: sua experiência, o que te motiva e
              os projetos de que mais se orgulha.]
            </p>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl scroll-mt-16 px-4 pb-24 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-2 px-6 py-16 text-center sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]"
            />
            <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
              Tem um projeto em mente?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted">
              Conte o que você precisa e eu respondo com os próximos passos.
            </p>
            <a
              href="mailto:contato@vidaltechnologies.com.br"
              className="relative mt-8 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:brightness-110"
            >
              Enviar e-mail
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-subtle sm:flex-row sm:justify-between sm:px-6">
          <p>© Vidal Technologies</p>
          <p>vidaltechnologies.com.br</p>
        </div>
      </footer>
    </>
  );
}
