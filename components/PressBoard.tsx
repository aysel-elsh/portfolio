import type { Press } from "@/lib/types";

/** Press coverage as connectors (J1, J2…) on the same hand-routed board as the awards. */
export default function PressBoard({ items }: { items: Press[] }) {
  return (
    <div className="ab">
      <div className="board">
        <svg aria-hidden className="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-2 20 C 20 10, 36 34, 58 22 S 86 8, 102 18" />
          <path d="M40 -2 C 34 24, 50 44, 44 70 S 34 92, 40 102" />
          <path d="M-2 78 C 22 70, 46 90, 66 80 S 90 68, 102 82" />
        </svg>
        <div aria-hidden className="silk-row">
          <span className="meta text-[11px]">AE-01 / Press</span>
          <span className="meta text-[11px]">Rev A</span>
        </div>
        <ul className="chips">
          {items.map((p, i) => {
            const title = <span className="font-serif text-[23px] leading-[1.15] tracking-[-0.01em]">{p.title}</span>;
            return (
              <li key={p.title} className="chip cat-press">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="ref font-mono text-[12px]">J{i + 1}</span>
                  <time dateTime={p.iso} className="meta">
                    {p.date}
                  </time>
                </div>
                <p className="mt-1.5 text-[14px] italic text-muted">{p.outlet}</p>
                <p className="mt-0.5">
                  {p.href ? (
                    <a href={p.href} rel="noopener" className="ulink">
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </p>
                <p className="mt-1.5 text-[14px] leading-snug text-muted">{p.note}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
