/** Tiny schematic symbols set inline with text. Decorative. */
const base = "inline-block align-[-0.12em] h-[0.9em] w-auto text-accent";

export function ChipGlyph() {
  return (
    <svg aria-hidden viewBox="0 0 24 20" className={base} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="3" width="12" height="14" rx="1" />
      <path d="M2 6h4M2 10h4M2 14h4M18 6h4M18 10h4M18 14h4" />
      <circle cx="9" cy="6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WaveGlyph() {
  return (
    <svg aria-hidden viewBox="0 0 28 20" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M1 10c3-8 6-8 9 0s6 8 9 0 6-8 8-4" />
    </svg>
  );
}

export function ProbeGlyph() {
  return (
    <svg aria-hidden viewBox="0 0 24 20" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="7" cy="10" r="4" />
      <path d="M11 10h11M18 6v8" />
    </svg>
  );
}
