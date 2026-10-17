import type { Dictionary } from "@/i18n/dictionaries";
import { LogoMark } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

// Fluxo de automação no estilo n8n, em loop: cada etapa acende na sua vez,
// pontos percorrem as ligações e as etapas concluídas ganham um check verde.
// A animação é SVG puro (SMIL), sem JavaScript.

const CYCLE = "5s";
const NODE = 56;
// Cores fixas: a animação SMIL não entende variáveis CSS.
const LINE = "#3d3d3d";
const ACCENT = "#fbc105";

type Step = { x: number; y: number; start: number; end: number };

// Posições no viewBox e o trecho do ciclo (0 a 1) em que cada etapa roda.
const steps = {
  trigger: { x: 12, y: 112, start: 0, end: 0.1 },
  ai: { x: 124, y: 112, start: 0.24, end: 0.42 },
  check: { x: 236, y: 112, start: 0.54, end: 0.62 },
  whatsapp: { x: 348, y: 36, start: 0.78, end: 0.88 },
  crm: { x: 348, y: 188, start: 0.78, end: 0.88 },
} satisfies Record<string, Step>;

type StepKey = keyof typeof steps;

const links: { from: StepKey; to: StepKey; start: number; end: number }[] = [
  { from: "trigger", to: "ai", start: 0.1, end: 0.24 },
  { from: "ai", to: "check", start: 0.42, end: 0.54 },
  { from: "check", to: "whatsapp", start: 0.62, end: 0.78 },
  { from: "check", to: "crm", start: 0.62, end: 0.78 },
];

const linkPath = (from: Step, to: Step) => {
  const x1 = from.x + NODE;
  const y1 = from.y + NODE / 2;
  const x2 = to.x;
  const y2 = to.y + NODE / 2;
  const mid = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mid} ${y1} ${mid} ${y2} ${x2} ${y2}`;
};

// Valores animados que só mudam dentro de [start, end] do ciclo.
const during = (start: number, end: number, off: string, on: string) => ({
  values: `${off};${off};${on};${on};${off};${off}`,
  keyTimes: `0;${start};${start + 0.01};${end};${end + 0.01};1`,
});

const after = (end: number) => ({
  values: "0;0;1;1;0",
  keyTimes: `0;${end};${end + 0.01};0.97;1`,
});

function Icon({ name }: { name: Exclude<StepKey, "ai" | "whatsapp"> }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "trigger":
      return <path d="M14 3 6 14h6l-2 7 8-11h-6l2-7Z" {...common} />;
    case "check":
      return <path d="M4 12h6l4-6h6M10 12l4 6h6" {...common} />;
    case "crm":
      return <path d="M4 5h16v14H4ZM4 10h16M4 15h16M10 5v14" {...common} />;
  }
}

export function AutomationFlow({ t }: { t: Dictionary["flow"] }) {
  return (
    <div className="self-end rounded-2xl border border-line bg-surface p-5">
      <div className="mb-3 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <span className="text-subtle">{t.name}</span>
        </div>
        <span className="flex items-center gap-2 text-[#3ddc84]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#3ddc84]" />
          {t.status}
        </span>
      </div>

      <svg
        viewBox="0 0 416 270"
        role="img"
        aria-label={Object.values(t.nodes).join(" → ").replaceAll("\n", " ")}
        className="w-full"
      >
        <defs>
          <pattern id="flow-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--line)" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="416" height="270" fill="url(#flow-grid)" />

        {links.map((link) => {
          const d = linkPath(steps[link.from], steps[link.to]);
          const active = during(link.start, link.end, LINE, ACCENT);
          return (
            <g key={`${link.from}-${link.to}`}>
              <path d={d} fill="none" stroke={LINE} strokeWidth="2">
                <animate attributeName="stroke" dur={CYCLE} repeatCount="indefinite" {...active} />
              </path>
              <circle r="4" fill={ACCENT} opacity="0">
                <animateMotion
                  path={d}
                  dur={CYCLE}
                  repeatCount="indefinite"
                  calcMode="linear"
                  keyPoints="0;0;1;1"
                  keyTimes={`0;${link.start};${link.end};1`}
                />
                <animate
                  attributeName="opacity"
                  dur={CYCLE}
                  repeatCount="indefinite"
                  {...during(link.start, link.end, "0", "1")}
                />
              </circle>
            </g>
          );
        })}

        {(Object.keys(steps) as StepKey[]).map((key) => {
          const { x, y, start, end } = steps[key];
          const isTrigger = key === "trigger";
          return (
            <g key={key}>
              <rect
                x={x}
                y={y}
                width={NODE}
                height={NODE}
                // No n8n o nó de gatilho é mais arredondado que os outros.
                rx={isTrigger ? 20 : 10}
                fill="var(--surface-2)"
                stroke={LINE}
                strokeWidth="2"
              >
                <animate
                  attributeName="stroke"
                  dur={CYCLE}
                  repeatCount="indefinite"
                  {...during(start, end, LINE, ACCENT)}
                />
              </rect>
              {key === "ai" ? (
                // A IA do fluxo é a da Vidal Technologies: o V da marca.
                <LogoMark x={x + 12} y={y + 18} width="32" height="22" className="text-accent" />
              ) : key === "whatsapp" ? (
                // Como no n8n, nós de apps mostram o logo do próprio app.
                <WhatsAppIcon x={x + 14} y={y + 14} width="28" height="28" className="fill-[#25D366]" />
              ) : (
                <svg
                  x={x + 16}
                  y={y + 16}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-foreground"
                >
                  <Icon name={key} />
                </svg>
              )}
              <g opacity="0">
                <circle cx={x + NODE - 2} cy={y + 2} r="8" fill="#3ddc84" />
                <path
                  d={`M${x + NODE - 6} ${y + 2}l3 3 5-6`}
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <animate attributeName="opacity" dur={CYCLE} repeatCount="indefinite" {...after(end)} />
              </g>
              <text
                x={x + NODE / 2}
                y={y + NODE + 18}
                textAnchor="middle"
                fill="var(--muted)"
                fontSize="12"
              >
                {t.nodes[key].split("\n").map((line, i) => (
                  <tspan key={line} x={x + NODE / 2} dy={i === 0 ? 0 : 15}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-2 font-mono text-xs text-subtle">{t.footer}</p>
    </div>
  );
}
