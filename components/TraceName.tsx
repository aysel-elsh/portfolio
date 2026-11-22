"use client";

import { useEffect, useRef } from "react";
import { attachTraceName } from "@/lib/traceName";

/**
 * The name drawn as PCB copper traces on a 4 × 6 grid per letter,
 * using only straight and 45° runs, with a pad at every stroke end.
 */
type Pt = [number, number];
const GLYPHS: Record<string, Pt[][]> = {
  A: [[[0, 6], [0, 2], [2, 0], [4, 2], [4, 6]], [[0, 4], [4, 4]]],
  Y: [[[0, 0], [0, 1], [2, 3], [2, 6]], [[4, 0], [4, 1], [2, 3]]],
  S: [[[4, 1], [3, 0], [1, 0], [0, 1], [0, 2], [1, 3], [3, 3], [4, 4], [4, 5], [3, 6], [1, 6], [0, 5]]],
  E: [[[4, 0], [0, 0], [0, 6], [4, 6]], [[0, 3], [3, 3]]],
  L: [[[0, 0], [0, 6], [4, 6]]],
  H: [[[0, 0], [0, 6]], [[4, 0], [4, 6]], [[0, 3], [4, 3]]],
  N: [[[0, 6], [0, 0], [1, 0], [3, 6], [4, 6], [4, 0]]],
  W: [[[0, 0], [0, 6], [2, 4], [4, 6], [4, 0]]],
};

const LW = 4, LH = 6, GAP = 2.4, LINE_GAP = 3.4;
const MX = 3.2, MT = 3.6, MB = 3.4; // board margins
const LINES = ["AYSEL", "ELSHENAWY"];
const VB_W = 9 * LW + 8 * GAP + MX * 2;
const VB_H = LH * 2 + LINE_GAP + MT + MB;

const d = (pts: Pt[], ox: number, oy: number) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${x + ox} ${y + oy}`).join("");

export default function TraceName() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? attachTraceName(ref.current) : undefined), []);

  const letters = LINES.flatMap((word, row) =>
    word.split("").map((ch, col) => ({
      ch,
      x: MX + col * (LW + GAP),
      y: MT + row * (LH + LINE_GAP),
    })),
  );

  return (
    <div ref={ref} className="tn">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        aria-hidden="true"
        className="block h-auto w-full max-w-[660px] cursor-crosshair touch-pan-y select-none"
      >
        <defs>
          <pattern id="tn-grid" width="1" height="1" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.06" fill="#d8d5ce" />
          </pattern>
        </defs>
        <rect width={VB_W} height={VB_H} fill="url(#tn-grid)" />
        <text className="silk" x={MX} y={2.45}>AE-01</text>
        <text className="silk" x={VB_W - MX - 4.1} y={2.45} textAnchor="end">D1</text>
        <rect className="led" x={VB_W - MX - 3.6} y={1.55} width={1.9} height={1.05} rx={0.15} />
        <text className="silk" x={VB_W - MX} y={VB_H - 1.05} textAnchor="end">REV A</text>
        <text className="silk" x={MX} y={VB_H - 1.05}>TP1–TP{letters.length}</text>
        {letters.map((l, i) => {
          const strokes = GLYPHS[l.ch];
          const ends = strokes.flatMap((s) => [s[0], s[s.length - 1]]);
          return (
            <g key={i} data-letter="" data-x={l.x} data-y={l.y} data-w={LW} data-h={LH}>
              {strokes.map((s, k) => (
                <path key={`b${k}`} className="base" d={d(s, l.x, l.y)} />
              ))}
              {strokes.map((s, k) => (
                <path key={`l${k}`} className="live" pathLength={1} d={d(s, l.x, l.y)} />
              ))}
              {ends.map(([x, y], k) => (
                <g key={`p${k}`}>
                  <circle className="pad" cx={x + l.x} cy={y + l.y} r={0.55} />
                  <circle className="drill" cx={x + l.x} cy={y + l.y} r={0.19} />
                </g>
              ))}
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="button"
          data-run=""
          className="meta min-h-11 border border-ink px-3 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Run continuity test
        </button>
        <p data-readout="" aria-live="polite" className="meta">
          Drag across my name to probe the traces.
        </p>
      </div>
    </div>
  );
}
