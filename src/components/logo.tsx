// Marca "vidal technologies": o V dourado desenhado em SVG (fica nítido em
// qualquer tamanho) e o nome em texto, com "vidal" forte e "technologies" fino.

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 318 221" aria-hidden className={className}>
      <path d="M0 0H86L184 165L138 221Z" fill="currentColor" />
      <path d="M231 0H318L200 145L167 89Z" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-[0.9em] w-auto text-accent" />
      <span className="font-logo leading-none tracking-tight">
        <span className="font-extrabold">vidal</span>
        <span className="font-light"> technologies</span>
      </span>
    </span>
  );
}
