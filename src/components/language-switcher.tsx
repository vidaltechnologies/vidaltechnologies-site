import Link from "next/link";
import { dictionaries, localePath, locales, type Locale } from "@/i18n/dictionaries";

// Bandeiras desenhadas em SVG: emojis de bandeira não aparecem no Windows.
function Flag({ lang }: { lang: Locale }) {
  if (lang === "pt") {
    return (
      <svg viewBox="0 0 30 20" aria-hidden className="h-full w-full">
        <rect width="30" height="20" fill="#009C3B" />
        <path d="M15 2.5 27.5 10 15 17.5 2.5 10Z" fill="#FFDF00" />
        <circle cx="15" cy="10" r="4.6" fill="#002776" />
        <path d="M10.6 8.9c3-.5 6.3 0 8.8 1.6" stroke="#fff" strokeWidth="0.9" fill="none" />
      </svg>
    );
  }
  if (lang === "en") {
    return (
      <svg viewBox="0 0 30 20" aria-hidden className="h-full w-full">
        <rect width="30" height="20" fill="#B22234" />
        {[1, 3, 5, 7, 9, 11].map((i) => (
          <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#fff" />
        ))}
        <rect width="12" height={(7 * 20) / 13} fill="#3C3B6E" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <circle key={`${r}${c}`} cx={2.2 + c * 3.8} cy={2 + r * 3.6} r="0.7" fill="#fff" />
          )),
        )}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 30 20" aria-hidden className="h-full w-full">
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </svg>
  );
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <nav aria-label={dictionaries[current].switcherLabel} className="flex items-center gap-1.5">
      {locales.map((lang) => {
        const active = lang === current;
        return (
          <Link
            key={lang}
            href={localePath(lang)}
            hrefLang={lang}
            title={dictionaries[lang].languageName}
            aria-label={dictionaries[lang].languageName}
            aria-current={active ? "true" : undefined}
            className={`block h-5 w-[30px] overflow-hidden rounded-[3px] ring-offset-2 ring-offset-background transition ${
              active ? "ring-2 ring-accent" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Flag lang={lang} />
          </Link>
        );
      })}
    </nav>
  );
}
