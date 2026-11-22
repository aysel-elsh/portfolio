/**
 * Behaviour for <TraceName />. Plain DOM code so it also runs outside React.
 * Dragging across the letters "probes" them; the button sweeps every letter.
 */
export function attachTraceName(root: HTMLElement): () => void {
  const svg = root.querySelector("svg");
  const out = root.querySelector<HTMLElement>("[data-readout]");
  const btn = root.querySelector<HTMLButtonElement>("[data-run]");
  const letters = Array.from(root.querySelectorAll<SVGGElement>("[data-letter]"));
  if (!svg || !out || !btn || letters.length === 0) return () => {};

  const total = letters.length;
  const lit = new Set<number>();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timers: number[] = [];

  const render = () => {
    letters.forEach((g, i) => g.classList.toggle("on", lit.has(i)));
    root.classList.toggle("pass", lit.size === total);
    if (lit.size === 0) {
      out.textContent = "Drag across my name to probe the traces.";
      btn.textContent = "Run continuity test";
    } else if (lit.size < total) {
      out.textContent = `Continuity ${lit.size}/${total}`;
      btn.textContent = "Run continuity test";
    } else {
      out.textContent = `Continuity ${total}/${total}. Pass.`;
      btn.textContent = "Clear";
    }
  };

  const light = (i: number) => {
    if (lit.has(i)) return;
    lit.add(i);
    render();
  };

  const probe = (e: PointerEvent) => {
    const m = svg.getScreenCTM();
    if (!m) return;
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
    letters.forEach((g, i) => {
      const x = Number(g.dataset.x), y = Number(g.dataset.y);
      const w = Number(g.dataset.w), h = Number(g.dataset.h);
      if (p.x >= x - 1 && p.x <= x + w + 1 && p.y >= y - 1.2 && p.y <= y + h + 1.2) light(i);
    });
  };

  const onMove = (e: PointerEvent) => {
    if (e.pointerType === "mouse" || e.buttons > 0) probe(e);
  };

  const onRun = () => {
    timers.forEach(clearTimeout);
    timers = [];
    if (lit.size === total) {
      lit.clear();
      render();
      return;
    }
    letters.forEach((_, i) => {
      timers.push(window.setTimeout(() => light(i), reduce ? 0 : i * 70));
    });
  };

  svg.addEventListener("pointermove", onMove);
  svg.addEventListener("pointerdown", probe);
  btn.addEventListener("click", onRun);
  render();

  return () => {
    timers.forEach(clearTimeout);
    svg.removeEventListener("pointermove", onMove);
    svg.removeEventListener("pointerdown", probe);
    btn.removeEventListener("click", onRun);
  };
}
