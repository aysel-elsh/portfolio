"use client";

import { useEffect, useRef } from "react";
import { attachAwardBoard } from "@/lib/awardBoard";
import type { AwardGroup } from "@/lib/types";

/** Each group gets a key, a reference-designator prefix and a colour class. */
const KEYS = [
  { key: "tech", ref: "T" },
  { key: "ent", ref: "E" },
  { key: "acad", ref: "A" },
];

export default function AwardBoard({ groups }: { groups: AwardGroup[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? attachAwardBoard(ref.current) : undefined), []);

  const perGroup = groups.map((g, gi) =>
    g.items.map((a, i) => ({ ...a, cat: KEYS[gi]?.key ?? "tech", refDes: `${KEYS[gi]?.ref ?? "U"}${i + 1}` })),
  );
  // Deal the groups out in turn so colours mix across the board instead of sitting in blocks.
  const longest = Math.max(...perGroup.map((g) => g.length));
  const chips = Array.from({ length: longest }, (_, i) => perGroup.map((g) => g[i])).flat().filter(Boolean);

  return (
    <div ref={ref} className="ab">
      <div role="group" aria-label="Highlight a group" className="mb-5 flex flex-wrap gap-2">
        <button type="button" data-f="all" aria-pressed="true" className="legend">
          All
        </button>
        {groups.map((g, gi) => (
          <button
            key={g.field}
            type="button"
            data-f={KEYS[gi]?.key}
            aria-pressed="false"
            className={`legend cat-${KEYS[gi]?.key}`}
          >
            <span aria-hidden className="swatch" />
            {g.field}
            <span className="tnum text-muted">{g.items.length}</span>
          </button>
        ))}
      </div>

      <div className="board">
        <svg aria-hidden className="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-2 8 C 18 4, 30 22, 52 14 S 84 2, 102 10" />
          <path d="M-2 38 C 14 46, 34 30, 50 40 S 78 56, 102 44" />
          <path d="M30 -2 C 26 20, 40 34, 34 58 S 22 86, 30 102" />
          <path d="M-2 72 C 20 64, 42 84, 62 74 S 88 62, 102 76" />
          <path d="M74 -2 C 80 18, 66 40, 74 62 S 86 88, 78 102" />
        </svg>
        <div aria-hidden className="silk-row">
          <span className="meta text-[11px]">AE-01 / Recognition</span>
          <span className="meta text-[11px]">Rev A</span>
        </div>
        <ul className="chips">
          {chips.map((c) => (
            <li key={c.refDes} data-cat={c.cat} className={`chip cat-${c.cat}${c.feature ? " feature" : ""}`}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="ref font-mono text-[12px]">{c.refDes}</span>
                {c.year && <span className="meta">{c.year}</span>}
              </div>
              <p className="result mt-1.5 text-[15px] font-medium leading-snug">{c.result}</p>
              <p className="mt-0.5 text-[14px] leading-snug">{c.name}</p>
              {c.detail && <p className="mt-1 text-[13px] leading-snug text-muted">{c.detail}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
