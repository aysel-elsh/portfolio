/**
 * Live tegkit model: the same equations tegkit uses, run in the browser.
 * Example module from tegkit's README: 2.5 W matched at 2.1 V across 80 K,
 * thermal conductance 0.45 W/K, heat exchangers 0.3 K/W hot and 0.5 K/W cold.
 */
const MODULE = { matchedPower: 2.5, matchedVoltage: 2.1, datasheetDT: 80, k: 0.45, rHot: 0.3, rCold: 0.5 };

export function tegModel(sourceDT: number, series: number, parallel: number) {
  const voc = 2 * MODULE.matchedVoltage;
  const seebeck = voc / MODULE.datasheetDT; // V/K per module
  const r = (voc * voc) / (4 * MODULE.matchedPower); // ohm per module
  const rModule = 1 / MODULE.k;
  const dt = (sourceDT * rModule) / (rModule + MODULE.rHot + MODULE.rCold);
  const sArr = seebeck * series;
  const rArr = (r * series) / parallel;
  const vocArr = sArr * dt;
  const pMax = (vocArr * vocArr) / (4 * rArr);
  return { dt, vocArr, rArr, pMax, modules: series * parallel };
}

const fmt = (n: number, d = 2) => (Math.abs(n) >= 100 ? n.toFixed(0) : n.toFixed(d));

export function attachTegCalc(root: HTMLElement): () => void {
  const q = <T extends HTMLElement>(s: string) => root.querySelector<T>(s);
  const dtIn = q<HTMLInputElement>("[data-in=dt]");
  const sIn = q<HTMLInputElement>("[data-in=s]");
  const pIn = q<HTMLInputElement>("[data-in=p]");
  const svg = root.querySelector<SVGSVGElement>("[data-chart]");
  if (!dtIn || !sIn || !pIn || !svg) return () => {};

  const set = (k: string, v: string) => root.querySelectorAll<HTMLElement>(`[data-out="${k}"]`).forEach((el) => (el.textContent = v));

  const draw = () => {
    const src = Number(dtIn.value), s = Number(sIn.value), p = Number(pIn.value);
    const m = tegModel(src, s, p);
    set("dtv", String(src));
    set("sv", String(s));
    set("pv", String(p));
    set("n", String(m.modules));
    set("dt", fmt(m.dt, 1));
    set("voc", fmt(m.vocArr));
    set("r", fmt(m.rArr));
    set("p", fmt(m.pMax));

    // Power into a load from 0 to 4x the matched load, peak at R_load = R_array.
    const W = svg.clientWidth || 320, H = svg.clientHeight || 150, pad = { l: 8, r: 8, t: 14, b: 22 };
    const maxR = 4 * m.rArr, pTop = tegModel(100, s, p).pMax * 1.08; // scale to the hottest case for this array
    const x = (rl: number) => pad.l + (rl / maxR) * (W - pad.l - pad.r);
    const y = (pw: number) => H - pad.b - (pw / pTop) * (H - pad.t - pad.b);
    let d = "";
    for (let i = 0; i <= 80; i++) {
      const rl = (maxR * i) / 80;
      const pw = (m.vocArr * m.vocArr * rl) / ((m.rArr + rl) * (m.rArr + rl));
      d += `${i ? "L" : "M"}${x(rl).toFixed(1)} ${y(pw).toFixed(1)}`;
    }
    const mx = x(m.rArr), my = y(m.pMax);
    svg.innerHTML =
      `<line x1="${pad.l}" y1="${H - pad.b}" x2="${W - pad.r}" y2="${H - pad.b}" stroke="#d8d5ce"/>` +
      `<path d="${d}" fill="none" stroke="#c27a2c" stroke-width="2.2" stroke-linejoin="round"/>` +
      `<line x1="${mx}" y1="${my}" x2="${mx}" y2="${H - pad.b}" stroke="#0f4c81" stroke-dasharray="3 4"/>` +
      `<circle cx="${mx}" cy="${my}" r="5" fill="#c9962f" stroke="#f8f7f4" stroke-width="2"/>` +
      `<text x="${pad.l}" y="${H - 6}" font-family="B612 Mono, monospace" font-size="11" fill="#52565e">0 Ω</text>` +
      `<text x="${mx}" y="${H - 6}" text-anchor="middle" font-family="B612 Mono, monospace" font-size="11" fill="#0f4c81">matched</text>` +
      `<text x="${W - pad.r}" y="${H - 6}" text-anchor="end" font-family="B612 Mono, monospace" font-size="11" fill="#52565e">${fmt(maxR, 1)} Ω</text>`;
  };

  const inputs = [dtIn, sIn, pIn];
  inputs.forEach((i) => i.addEventListener("input", draw));
  const ro = new ResizeObserver(draw);
  ro.observe(svg);
  draw();
  return () => {
    inputs.forEach((i) => i.removeEventListener("input", draw));
    ro.disconnect();
  };
}
