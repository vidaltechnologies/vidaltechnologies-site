import Link from "next/link";
import { AutomationFlow } from "@/components/automation-flow";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { LanguageSwitcher } from "@/components/language-switcher";
import { dictionaries, htmlLang, localePath, type Locale } from "@/i18n/dictionaries";

export function Home({ lang }: { lang: Locale }) {
  const t = dictionaries[lang];

  return (
    <div lang={htmlLang[lang]} className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-line/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href={localePath(lang)}
            aria-label="vidal technologies"
            className="flex items-center text-2xl leading-none"
          >
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#servicos" className="hover:text-foreground">{t.nav.services}</a>
            <a href="#como-trabalho" className="hover:text-foreground">{t.nav.process}</a>
            <a href="#sobre" className="hover:text-foreground">{t.nav.about}</a>
          </nav>
          <div className="flex items-center gap-5">
            <a
              href="#contato"
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink transition hover:brightness-110 sm:block"
            >
              {t.cta}
            </a>
            <LanguageSwitcher current={lang} />
          </div>
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
                {t.hero.eyebrow}
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                {t.hero.titleStart} <span className="text-accent">{t.hero.titleAccent}</span>.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted">{t.hero.text}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:brightness-110"
                >
                  {t.hero.primary}
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-line px-6 py-3 font-semibold transition hover:border-foreground"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>

            <AutomationFlow t={t.flow} />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </section>

        <section id="servicos" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.services.title}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.services.items.map((s) => (
              <article
                key={s.title}
                className="flex flex-col gap-3 rounded-2xl border border-line/60 bg-surface-2 p-6 transition hover:border-accent/60"
              >
                <h3 className="text-xl font-semibold text-accent">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-2 flex flex-col gap-2 text-sm text-foreground">
                  {s.examples.map((example) => (
                    <li key={example} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="como-trabalho" className="scroll-mt-16 border-y border-line/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.process.title}</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              {t.process.steps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-2">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.about.title}</h2>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
              {t.about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <p>{t.about.focusIntro}</p>
              <ul className="flex flex-col gap-3 border-l-2 border-accent/60 pl-5">
                {t.about.focus.map((item) => (
                  <li key={item.title}>
                    <strong className="font-semibold text-foreground">{item.title}:</strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
              {t.about.closing.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <a
                href="#contato"
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                {t.about.cta}
              </a>
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl scroll-mt-16 px-4 pb-24 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-2 px-6 py-16 text-center sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]"
            />
            <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted">{t.contact.text}</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:contato@vidallabs.com.br"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:brightness-110"
              >
                {t.contact.button}
              </a>
              <a
                href={`https://wa.me/5541988779179?text=${encodeURIComponent(t.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold transition hover:border-[#25D366]"
              >
                <WhatsAppIcon />
                {t.contact.whatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-subtle sm:flex-row sm:justify-between sm:px-6">
          <Logo className="text-lg text-muted" />
          <p>© Vidal Technologies. {t.rights}</p>
        </div>
      </footer>
    </div>
  );
}
