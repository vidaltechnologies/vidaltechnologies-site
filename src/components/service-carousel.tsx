"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Services = Dictionary["services"];
type Example = Services["items"][number]["examples"][number];

// Tempo que cada exemplo fica parado antes de passar para o próximo.
const INTERVAL = 4500;
// Depois de um toque ou clique, espera um pouco antes de voltar a girar sozinho.
const RESUME_AFTER = 8000;

// Carrossel horizontal dos exemplos de um serviço. Passa sozinho para o
// próximo card, para quando o visitante passa o mouse ou mexe nele e não
// anda sozinho para quem pediu menos movimento no sistema.
export function ServiceCarousel({ examples, labels }: { examples: Example[]; labels: Services["carousel"] }) {
  const track = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Posições de rolagem onde o carrossel pode parar. Com dois cards visíveis,
  // são menos paradas que cards.
  const [stops, setStops] = useState<number[]>([0]);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [held, setHeld] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const positions = Array.from(el.children, (card) => Math.min((card as HTMLElement).offsetLeft, max));
    setStops(positions.filter((p, i) => i === 0 || p - positions[i - 1] > 4));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(media.matches);
    onMotion();
    media.addEventListener("change", onMotion);
    return () => {
      window.removeEventListener("resize", measure);
      media.removeEventListener("change", onMotion);
      clearTimeout(resumeTimer.current);
    };
  }, [measure]);

  const goTo = useCallback(
    (index: number) => {
      track.current?.scrollTo({ left: stops[index] ?? 0, behavior: "smooth" });
    },
    [stops],
  );

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    let nearest = 0;
    stops.forEach((p, i) => {
      if (Math.abs(p - el.scrollLeft) < Math.abs(stops[nearest] - el.scrollLeft)) nearest = i;
    });
    setActive(nearest);
  };

  const hold = () => {
    setHeld(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setHeld(false), RESUME_AFTER);
  };

  useEffect(() => {
    if (hovered || held || reducedMotion || stops.length < 2) return;
    const timer = setInterval(() => goTo((active + 1) % stops.length), INTERVAL);
    return () => clearInterval(timer);
  }, [active, goTo, held, hovered, reducedMotion, stops.length]);

  const step = (delta: number) => {
    hold();
    goTo((active + delta + stops.length) % stops.length);
  };

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={hold}>
      <div
        ref={track}
        onScroll={onScroll}
        onPointerDown={hold}
        onWheel={hold}
        className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto"
      >
        {examples.map((example) => (
          <article
            key={example.code}
            className="flex shrink-0 basis-[85%] snap-start flex-col gap-3 rounded-2xl border border-line/60 bg-surface-2 p-6 sm:basis-[calc(50%-0.5rem)]"
          >
            <span className="font-mono text-xs font-semibold text-accent">{example.code}</span>
            <h4 className="text-lg font-semibold">{example.title}</h4>
            <p className="leading-relaxed text-muted">{example.text}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {example.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {stops.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${labels.goTo} ${i + 1}`}
              aria-current={i === active}
              onClick={() => {
                hold();
                goTo(i);
              }}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-accent" : "w-2 bg-line hover:bg-subtle"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <ArrowButton label={labels.prev} onClick={() => step(-1)} flip />
          <ArrowButton label={labels.next} onClick={() => step(1)} />
        </div>
      </div>
    </div>
  );
}

function ArrowButton({ label, onClick, flip }: { label: string; onClick: () => void; flip?: boolean }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground transition hover:border-accent hover:text-accent"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
