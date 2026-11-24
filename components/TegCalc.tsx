"use client";

import { useEffect, useRef } from "react";
import { attachTegCalc } from "@/lib/tegCalc";

/** In-browser version of tegkit's array model, with a live power curve. */
export default function TegCalc() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? attachTegCalc(ref.current) : undefined), []);

  return (
    <div ref={ref} className="teg">
      <div className="teg-head">
        <p className="text-[17px] font-semibold">Try it: size a TEG array</p>
        <p className="meta">Same equations as tegkit, with the example module from its README</p>
      </div>

      <div className="teg-grid">
        <div className="teg-inputs">
          <label className="teg-field">
            <span className="teg-label">
              Temperature difference <b data-out="dtv">60</b> K
            </span>
            <input data-in="dt" type="range" min="10" max="100" step="1" defaultValue="60" />
          </label>
          <label className="teg-field">
            <span className="teg-label">
              Modules in series <b data-out="sv">4</b>
            </span>
            <input data-in="s" type="range" min="1" max="8" step="1" defaultValue="4" />
          </label>
          <label className="teg-field">
            <span className="teg-label">
              Strings in parallel <b data-out="pv">2</b>
            </span>
            <input data-in="p" type="range" min="1" max="4" step="1" defaultValue="2" />
          </label>
        </div>

        <div className="teg-out" aria-live="polite">
          <dl className="teg-readout">
            <div>
              <dt>Max power</dt>
              <dd>
                <span data-out="p">6.08</span> W
              </dd>
            </div>
            <div>
              <dt>Open-circuit voltage</dt>
              <dd>
                <span data-out="voc">9.26</span> V
              </dd>
            </div>
            <div>
              <dt>Matched load</dt>
              <dd>
                <span data-out="r">3.53</span> Ω
              </dd>
            </div>
            <div>
              <dt>ΔT across modules</dt>
              <dd>
                <span data-out="dt">44.1</span> K
              </dd>
            </div>
          </dl>
          <figure className="teg-fig">
            <svg data-chart="" role="img" aria-label="Power delivered versus load resistance; it peaks at the matched load" />
            <figcaption className="meta">
              Power into the load as resistance rises. <span data-out="n">8</span> modules.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
