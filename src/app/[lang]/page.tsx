import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home } from "@/components/home";
import { hasLocale } from "@/i18n/dictionaries";

// Português fica na raiz "/"; aqui só inglês e espanhol.
const otherLocales = ["en", "es"];

export function generateStaticParams() {
  return otherLocales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  alternates: { languages: { "pt-BR": "/", "en-US": "/en", "es-ES": "/es" } },
};

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!otherLocales.includes(lang) || !hasLocale(lang)) notFound();
  return <Home lang={lang} />;
}
