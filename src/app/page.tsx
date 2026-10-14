import type { Metadata } from "next";
import { Home } from "@/components/home";

export const metadata: Metadata = {
  alternates: { languages: { "pt-BR": "/", "en-US": "/en", "es-ES": "/es" } },
};

export default function Page() {
  return <Home lang="pt" />;
}
