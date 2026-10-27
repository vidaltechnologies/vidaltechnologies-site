"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Services = Dictionary["services"];
type Example = Services["items"][number]["examples"][number];

// Tempo que cada exemplo fica na tela antes de dar lugar ao próximo.
const INTERVAL = 4500;

// Mostra um exemplo por vez dentro da coluna do serviço e troca sozinho.
// Cada coluna começa com um atraso diferente para as três não trocarem juntas.
// Para quando o visitante passa o mouse e não anda sozinho para quem pediu
// menos movimento no sistema.
export function ServiceCarousel({
  examples,
  labels,
  delay = 0,
}: {
  examples: Example[];
  labels: Services["carousel"];
  delay?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const firstTurn = useRef(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(media.matches);
    onMotion();
    media.addEventListener("change", onMotion);
    return () => media.removeEventListener("change", onMotion);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || examples.length < 2) return;
    // Um timer por troca: clicar numa bolinha recomeça a contagem.
    const wait = firstTurn.current ? INTERVAL + delay : INTERVAL;
    const timer = setTimeout(() => {
      firstTurn.current = false;
      setActive((a) => (a + 1) % examples.length);
    }, wait);
    return () => clearTimeout(timer);
  }, [active, delay, examples.length, paused, reducedMotion]);

  return (
    <div
      className="flex flex-1 flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Todos os exemplos ocupam a mesma célula, então a altura é a do maior e nada pula. */}
      <div className="grid flex-1 overflow-hidden">
        {examples.map((example, i) => (
          <div
            key={example.code}
            aria-hidden={i !== active}
            className={`col-start-1 row-start-1 flex flex-col gap-2 rounded-xl bg-surface-2 p-5 transition-all duration-500 ${
              i === active ? "translate-x-0 opacity-100" : i < active ? "-translate-x-6 opacity-0" : "translate-x-6 opacity-0"
            }`}
          >
            <span className="font-mono text-xs font-semibold text-accent">{example.code}</span>
            <h4 className="font-semibold">{example.title}</h4>
            <p className="text-sm leading-relaxed text-muted">{example.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        {examples.map((example, i) => (
          <button
            key={example.code}
            type="button"
            aria-label={`${labels.goTo} ${example.code}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-accent" : "w-1.5 bg-line hover:bg-subtle"}`}
          />
        ))}
      </div>
    </div>
  );
}
