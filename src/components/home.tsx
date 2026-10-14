import Link from "next/link";
import { Logo } from "@/components/logo";
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
            aria-label="vidal labs"
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

            <div className="self-end rounded-2xl border border-line bg-surface p-6 font-mono text-sm leading-7">
              <div className="mb-4 flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
              <p className="text-subtle">{t.code.comment}</p>
              <p>
                <span className="text-accent">const</span> {t.code.name} = {"{"}
              </p>
              {t.code.fields.map(([key, value]) => (
                <p key={key} className="pl-4">
                  {key}: <span className="text-muted">&quot;{value}&quot;</span>,
                </p>
              ))}
              <p>{"};"}</p>
            </div>
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
          <p>vidallabs.com.br</p>
        </div>
      </footer>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-[#25D366]">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.3 11.3 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}
