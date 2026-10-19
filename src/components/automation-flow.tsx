import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { LogoMark } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

// Fluxo de qualificação de leads no estilo n8n, o mesmo da apresentação:
// o lead passa pela IA e, se qualificado, segue para WhatsApp, Gmail e
// Google Calendar; senão, vai para o CRM e ganha um follow-up.
// Em loop, cada etapa acende na sua vez, pontos percorrem as ligações e as
// etapas concluídas ganham um check verde. A animação é SVG puro (SMIL).

const CYCLE = "7s";
const NODE = 76;
const WIDTH = 1090;
const HEIGHT = 340;
// Cores fixas: a animação SMIL não entende variáveis CSS.
const LINE = "#3d3d3d";
const ACCENT = "#fbc105";
const MUTED = "#8a8a8a";

type Step = { x: number; y: number; start: number; end: number };

// Posições no viewBox e o trecho do ciclo (0 a 1) em que cada etapa roda.
const steps = {
  trigger: { x: 34, y: 127, start: 0, end: 0.06 },
  ai: { x: 209, y: 127, start: 0.14, end: 0.26 },
  check: { x: 384, y: 127, start: 0.34, end: 0.4 },
  whatsapp: { x: 604, y: 37, start: 0.48, end: 0.54 },
  gmail: { x: 779, y: 37, start: 0.62, end: 0.68 },
  calendar: { x: 954, y: 37, start: 0.76, end: 0.82 },
  crm: { x: 604, y: 217, start: 0.48, end: 0.54 },
  followup: { x: 779, y: 217, start: 0.62, end: 0.68 },
} satisfies Record<string, Step>;

type StepKey = keyof typeof steps;

const links: { from: StepKey; to: StepKey; start: number; end: number; nurture?: boolean }[] = [
  { from: "trigger", to: "ai", start: 0.06, end: 0.14 },
  { from: "ai", to: "check", start: 0.26, end: 0.34 },
  { from: "check", to: "whatsapp", start: 0.4, end: 0.48 },
  { from: "whatsapp", to: "gmail", start: 0.54, end: 0.62 },
  { from: "gmail", to: "calendar", start: 0.68, end: 0.76 },
  { from: "check", to: "crm", start: 0.4, end: 0.48, nurture: true },
  { from: "crm", to: "followup", start: 0.54, end: 0.62, nurture: true },
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

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Ícone de cada etapa, desenhado numa caixa de 24x24 (ou 48x48 nos logos).
const icons: Record<StepKey, { viewBox: string; size: number; body: ReactNode }> = {
  trigger: {
    viewBox: "0 0 24 24",
    size: 30,
    body: <path d="M14 3 6 14h6l-2 7 8-11h-6l2-7Z" {...stroke} />,
  },
  ai: { viewBox: "0 0 318 221", size: 40, body: null },
  check: {
    viewBox: "0 0 24 24",
    size: 30,
    body: <path d="M4 12h6l4-6h6M10 12l4 6h6" {...stroke} />,
  },
  whatsapp: { viewBox: "0 0 24 24", size: 36, body: null },
  // Como no n8n, nós de apps mostram o logo do próprio app.
  gmail: {
    viewBox: "0 0 48 48",
    size: 38,
    body: (
      <>
        <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75V40h7c1.657 0 3-1.343 3-3V16.2z" />
        <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z" />
        <path fill="#e53935" d="M35 11.2 24 19.45 13 11.2 12 17l1 6.7 11 8.25 11-8.25 1-6.7z" />
        <path
          fill="#c62828"
          d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.3 4.3 0 0 0 7.298 8C4.924 8 3 9.924 3 12.298z"
        />
        <path
          fill="#fbc02d"
          d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.3 4.3 0 0 1 40.702 8C43.076 8 45 9.924 45 12.298z"
        />
      </>
    ),
  },
  calendar: {
    viewBox: "0 0 48 48",
    size: 40,
    body: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="5" fill="#fff" />
        <path fill="#4285f4" d="M11 6h26v8H6v-3a5 5 0 0 1 5-5Z" />
        <path fill="#34a853" d="M6 34h26v8H11a5 5 0 0 1-5-5Z" />
        <path fill="#fbbc04" d="M34 14h8v20h-8Z" />
        <path fill="#ea4335" d="M34 34h8l-8 8Z" />
        <text
          x="22"
          y="31"
          textAnchor="middle"
          fontWeight="800"
          fontSize="14"
          fill="#1a73e8"
          className="font-sans"
        >
          31
        </text>
      </>
    ),
  },
  crm: {
    viewBox: "0 0 24 24",
    size: 30,
    body: <path d="M4 5h16v14H4ZM4 10h16M4 15h16M10 5v14" {...stroke} />,
  },
  followup: {
    viewBox: "0 0 24 24",
    size: 30,
    body: (
      <>
        <circle cx="12" cy="13" r="8" {...stroke} />
        <path d="M12 9v4l3 2M9 2h6" {...stroke} />
      </>
    ),
  },
};

function NodeIcon({ name, x, y, size }: { name: StepKey; x: number; y: number; size: number }) {
  if (name === "ai") {
    // A IA do fluxo é a da Vidal Technologies: o V da marca.
    return <LogoMark x={x} y={y} width={size} height={size} className="text-accent" />;
  }
  if (name === "whatsapp") {
    return <WhatsAppIcon x={x} y={y} width={size} height={size} className="fill-[#25D366]" />;
  }
  const icon = icons[name];
  return (
    <svg x={x} y={y} width={size} height={size} viewBox={icon.viewBox} className="text-foreground">
      {icon.body}
    </svg>
  );
}

// Versão em lista para telas estreitas, onde o diagrama ficaria pequeno demais.
function MobileFlow({ t }: { t: Dictionary["flow"] }) {
  const item = (key: StepKey) => (
    <li
      key={key}
      className={`flex items-center gap-3 rounded-xl border bg-surface-2 px-3 py-2.5 ${
        key === "ai" ? "border-accent" : "border-line"
      }`}
    >
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <NodeIcon name={key} x={(40 - 28) / 2} y={(40 - 28) / 2} size={28} />
      </svg>
      <span className="flex flex-col">
        <span className="text-sm font-semibold">{t.nodes[key].title}</span>
        <span className="text-xs text-muted">{t.nodes[key].text}</span>
      </span>
    </li>
  );
  const pill = (text: string, yes: boolean) => (
    <li
      className={`self-start rounded-full border px-3 py-0.5 font-mono text-xs ${
        yes ? "border-[#3ddc84]/50 text-[#3ddc84]" : "border-line text-muted"
      }`}
    >
      {text}
    </li>
  );
  return (
    <ol className="flex flex-col gap-2 md:hidden">
      {item("trigger")}
      {item("ai")}
      {item("check")}
      {pill(t.branches.yes, true)}
      {item("whatsapp")}
      {item("gmail")}
      {item("calendar")}
      {pill(t.branches.no, false)}
      {item("crm")}
      {item("followup")}
    </ol>
  );
}

export function AutomationFlow({ t }: { t: Dictionary["flow"] }) {
  const label = [
    t.nodes.trigger.title,
    t.nodes.ai.title,
    t.nodes.check.title,
    `${t.branches.yes}: ${[t.nodes.whatsapp, t.nodes.gmail, t.nodes.calendar].map((n) => n.title).join(", ")}`,
    `${t.branches.no}: ${[t.nodes.crm, t.nodes.followup].map((n) => n.title).join(", ")}`,
  ].join(" → ");

  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
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

      <MobileFlow t={t} />

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={label}
        className="hidden w-full md:block"
      >
        <defs>
          <pattern id="flow-grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--line)" opacity="0.5" />
          </pattern>
        </defs>
        <rect width={WIDTH} height={HEIGHT} fill="url(#flow-grid)" />

        {links.map((link) => {
          const d = linkPath(steps[link.from], steps[link.to]);
          const on = link.nurture ? MUTED : ACCENT;
          return (
            <g key={`${link.from}-${link.to}`}>
              <path d={d} fill="none" stroke={LINE} strokeWidth="2">
                <animate
                  attributeName="stroke"
                  dur={CYCLE}
                  repeatCount="indefinite"
                  {...during(link.start, link.end, LINE, on)}
                />
              </path>
              <circle r="4.5" fill={on} opacity="0">
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

        <text x="516" y="118" textAnchor="middle" fill="#3ddc84" fontSize="13" className="font-mono">
          {t.branches.yes}
        </text>
        <text x="548" y="290" textAnchor="middle" fill={MUTED} fontSize="13" className="font-mono">
          {t.branches.no}
        </text>

        {(Object.keys(steps) as StepKey[]).map((key) => {
          const { x, y, start, end } = steps[key];
          const size = icons[key].size;
          return (
            <g key={key}>
              <rect
                x={x}
                y={y}
                width={NODE}
                height={NODE}
                // No n8n o nó de gatilho é mais arredondado que os outros.
                rx={key === "trigger" ? 26 : 12}
                fill="var(--surface-2)"
                stroke={key === "ai" ? ACCENT : LINE}
                strokeWidth="2"
              >
                <animate
                  attributeName="stroke"
                  dur={CYCLE}
                  repeatCount="indefinite"
                  {...during(start, end, key === "ai" ? ACCENT : LINE, ACCENT)}
                />
              </rect>
              <NodeIcon
                name={key}
                x={x + (NODE - size) / 2}
                y={y + (NODE - size) / 2}
                size={size}
              />
              <g opacity="0">
                <circle cx={x + NODE - 3} cy={y + 3} r="9" fill="#3ddc84" />
                <path
                  d={`M${x + NODE - 7.5} ${y + 3}l3 3 5.5-6`}
                  fill="none"
                  stroke="#000"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <animate attributeName="opacity" dur={CYCLE} repeatCount="indefinite" {...after(end)} />
              </g>
              <text
                x={x + NODE / 2}
                y={y + NODE + 22}
                textAnchor="middle"
                fill="var(--foreground)"
                fontSize="15"
                fontWeight="700"
              >
                {t.nodes[key].title}
              </text>
              <text
                x={x + NODE / 2}
                y={y + NODE + 39}
                textAnchor="middle"
                fill="var(--muted)"
                fontSize="12.5"
              >
                {t.nodes[key].text}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-2 font-mono text-xs text-subtle">{t.footer}</p>
    </div>
  );
}
