import { Fragment } from "react";

/**
 * Technical drawings, in the style of a patent figure:
 * line art in ink, reference numerals in the accent colour, key in HTML.
 */

const tvmKey = [
  ["10", "Engine"],
  ["12", "Coolant loop, hot side"],
  ["14", "Thermoelectric module array"],
  ["16", "Raw seawater channel, cold side"],
  ["18", "Hull"],
  ["20", "Overboard discharge, cooler"],
  ["22", "Seawater intake"],
  ["24", "Power output"],
] as const;

function Num({ x, y, n, to }: { x: number; y: number; n: string; to: [number, number] }) {
  return (
    <g>
      <line x1={x} y1={y + 4} x2={to[0]} y2={to[1]} stroke="#0f4c81" strokeWidth="1" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontFamily="JetBrains Mono Variable, JetBrains Mono, monospace"
        fontSize="22"
        fill="#0f4c81"
      >
        {n}
      </text>
    </g>
  );
}

function ThermoVoltSvg({ id = "tvm" }: { id?: string }) {
  const modules = Array.from({ length: 8 }, (_, i) => 300 + i * 40);
  return (
      <svg
        viewBox="0 0 800 360"
        role="img"
        aria-labelledby={`${id}-t ${id}-d`}
        className="block h-auto w-full"
      >
        <title id={`${id}-t`}>ThermoVolt Marine system, schematic side view</title>
        <desc id={`${id}-d`}>
          Hot engine coolant runs through a U-shaped loop. A row of eight thermoelectric modules sits under the
          supply pipe, directly on top of a raw seawater channel that enters through the hull, passes under the
          modules and leaves overboard. Wires from the module array lead to a power output terminal.
        </desc>
        <defs>
          <pattern id={`${id}-hatch`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#121316" strokeWidth="1" />
          </pattern>
        </defs>

        <g fill="none" stroke="#121316" strokeWidth="1.5" strokeLinejoin="round">
          {/* hull, sectioned */}
          <rect x="20" y="280" width="760" height="12" fill={`url(#${id}-hatch)`} />
          <line x1="20" y1="280" x2="780" y2="280" />
          {/* sea surface below the hull */}
          <path d="M20 316 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0" strokeWidth="1" opacity=".55" />
          <path d="M460 316 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" strokeWidth="1" opacity=".55" />
          <path d="M60 340 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0" strokeWidth="1" opacity=".55" />
          <path d="M380 340 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" strokeWidth="1" opacity=".55" />

          {/* engine */}
          <rect x="50" y="110" width="140" height="110" fill="#f8f7f4" />
          {[62, 94, 126, 158].map((x) => (
            <rect key={x} x={x} y="94" width="22" height="16" fill="#f8f7f4" />
          ))}
          <line x1="64" y1="196" x2="176" y2="196" strokeWidth="1" />
          <line x1="64" y1="204" x2="176" y2="204" strokeWidth="1" />

          {/* hot coolant loop: supply (lower) and return (upper) */}
          <path d="M190 123 H654 V187 H190 V173 H640 V137 H190 Z" fill="#f8f7f4" />
          <path d="M420 180 l10 0 m-5 -4 l5 4 l-5 4" strokeWidth="1.2" />
          <path d="M430 130 l-10 0 m5 -4 l-5 4 l5 4" strokeWidth="1.2" />

          {/* thermoelectric modules */}
          {modules.map((x) => (
            <g key={x}>
              <rect x={x} y="189" width="34" height="18" fill="#f8f7f4" />
              <line x1={x + 9} y1="192" x2={x + 9} y2="204" strokeWidth="1" />
              <line x1={x + 17} y1="192" x2={x + 17} y2="204" strokeWidth="1" />
              <line x1={x + 25} y1="192" x2={x + 25} y2="204" strokeWidth="1" />
            </g>
          ))}

          {/* raw seawater channel */}
          <path d="M280 296 V209 H714 V296 H700 V223 H294 V296 Z" fill="#f8f7f4" />
          <path d="M520 216 l-10 0 m5 -4 l-5 4 l5 4" strokeWidth="1.2" />
          {/* intake and discharge arrows through the hull */}
          <path d="M707 340 V304 m-5 8 l5 -8 l5 8" strokeWidth="1.2" />
          <path d="M287 304 V340 m-5 -8 l5 8 l5 -8" strokeWidth="1.2" />

          {/* output wiring */}
          <path d="M620 198 H760 V88" strokeWidth="1.2" />
          <circle cx="760" cy="80" r="8" fill="#f8f7f4" />
          <line x1="755" y1="80" x2="765" y2="80" strokeWidth="1.2" />
          <line x1="760" y1="75" x2="760" y2="85" strokeWidth="1.2" />
        </g>

        <Num n="10" x={34} y={92} to={[56, 112]} />
        <Num n="12" x={470} y={104} to={[470, 123]} />
        <Num n="14" x={370} y={256} to={[370, 207]} />
        <Num n="16" x={560} y={256} to={[560, 223]} />
        <Num n="18" x={130} y={262} to={[150, 280]} />
        <Num n="20" x={240} y={336} to={[282, 322]} />
        <Num n="22" x={752} y={336} to={[712, 322]} />
        <Num n="24" x={720} y={66} to={[752, 76]} />
      </svg>
  );
}

export function ThermoVoltDrawing() {
  return (
    <div>
      <ThermoVoltSvg />
      <dl className="grid grid-cols-1 gap-x-8 border-t border-hairline px-4 py-4 text-[14px] sm:grid-cols-2 sm:px-5">
        {tvmKey.map(([n, label]) => (
          <div key={n} className="grid grid-cols-[2.25rem_minmax(0,1fr)] py-0.5">
            <dt className="font-mono text-[13px] text-accent">{n}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type Pinned = { src: string; alt: string; caption: string };

/**
 * A drawing laid out like an engineering sheet: border, title block, and either
 * a pinned print or a cut-out photo standing in front of it.
 */
function Sheet({
  drawing,
  rows,
  photo,
  cutout,
  fit,
}: {
  drawing: React.ReactNode;
  rows: [string, string][];
  photo?: Pinned;
  cutout?: Pinned;
  /** Fit the drawing into the space above the title block and beside the photo. */
  fit?: boolean;
}) {
  return (
    <div className={`tvs${cutout ? " has-cutout" : ""}${fit ? " fit" : ""}${!photo && !cutout ? " bare" : ""}`}>
      <div className="tvs-draw">{drawing}</div>
      <div aria-hidden className="tvs-tb">
        {rows.map(([k, v]) => (
          <Fragment key={k}>
            <span className="tvs-k">{k}</span>
            <span>{v}</span>
          </Fragment>
        ))}
      </div>
      {photo && (
        <figure className="tvs-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      )}
      {cutout && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="tvs-cutout" src={cutout.src} alt={cutout.alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}

export function ThermoVoltSheet({ photo }: { photo?: Pinned }) {
  return (
    <Sheet
      drawing={<ThermoVoltSvg id="tvs" />}
      rows={[
        ["Dwg", "TVM-01"],
        ["Title", "ThermoVolt Marine"],
        ["By", "A. Elshenawy"],
      ]}
      photo={photo}
    />
  );
}

/**
 * Wearable heart monitor, top view: three-lobe body, power button, status LED,
 * lanyard slot. Electrodes and board sit underneath, drawn as hidden (dashed) lines.
 */
function MonitorSvg() {
  const ink = "#121316";
  const body =
    "M230 80 C270 80 290 108 330 106 C360 96 442 94 442 150 C442 206 362 206 330 194 " +
    "C290 184 270 200 272 240 C274 262 282 268 282 300 C282 362 178 362 178 300 " +
    "C178 268 186 262 188 240 C190 200 170 184 130 194 C98 206 18 206 18 150 " +
    "C18 94 100 96 130 106 C170 108 190 80 230 80 Z";
  return (
    <svg viewBox="0 0 460 380" role="img" aria-label="Wearable heart monitor, top view" className="block h-full w-full">
      <g fill="none" stroke={ink} strokeLinejoin="round" strokeLinecap="round">
        <path d={body} fill="#f8f7f4" strokeWidth="1.6" />
        {/* hidden: electrodes under each lobe, main board under the centre */}
        <g strokeDasharray="5 4" strokeWidth="1" opacity="0.75">
          <circle cx="72" cy="150" r="28" />
          <circle cx="388" cy="150" r="28" />
          <circle cx="230" cy="304" r="28" />
          <rect x="170" y="112" width="120" height="96" rx="10" />
        </g>
        {/* lanyard slot */}
        <rect x="211" y="90" width="38" height="10" rx="5" strokeWidth="1.3" />
        {/* power button */}
        <circle cx="230" cy="156" r="32" fill="#f8f7f4" strokeWidth="1.4" />
        <circle cx="230" cy="156" r="25" strokeWidth="1" />
        <path d="M222 148 a12 12 0 1 0 16 0" strokeWidth="1.4" />
        <path d="M230 142 v13" strokeWidth="1.4" />
        {/* status LED */}
        <circle cx="282" cy="156" r="3.2" fill="#3fbf6a" stroke="none" />
        {/* ECG trace */}
        <path
          d="M300 318h18q6-8 12 0h8l5 8 7-48 7 56 5-16h12q10-12 20 0h30"
          stroke="#0f4c81"
          strokeWidth="1.6"
        />
      </g>
      {(
        [
          ["10", 40, 66, 62, 124],
          ["12", 318, 70, 252, 134],
          ["14", 330, 236, 285, 160],
          ["16", 168, 48, 214, 92],
          ["18", 128, 262, 172, 204],
        ] as const
      ).map(([n, x, y, tx, ty]) => (
        <Num key={n} n={n} x={x} y={y} to={[tx, ty]} />
      ))}
    </svg>
  );
}

export function MonitorSheet({ photo, cutout }: { photo?: Pinned; cutout?: Pinned }) {
  return (
    <Sheet
      drawing={<MonitorSvg />}
      rows={[
        ["Dwg", "WCM-01"],
        ["Title", "Heart monitor"],
        ["By", "A. Elshenawy"],
      ]}
      photo={photo}
      cutout={cutout}
      fit
    />
  );
}

/** Sketch: Meta Quest 3 headset linked through ROS to a BlueROV2 under the surface. */
function TeleopSvg() {
  const ink = "#121316";
  return (
    <svg viewBox="12 44 506 228" role="img" aria-label="Meta Quest 3 headset linked through ROS to a BlueROV2" className="block h-full w-full">
      <g fill="none" stroke={ink} strokeLinejoin="round" strokeLinecap="round">
        {/* Quest 3: top strap, visor, three front sensor pills, facial interface */}
        <path d="M34 112 C34 52 166 52 166 112" strokeWidth="1.3" />
        <rect x="28" y="92" width="144" height="66" rx="28" fill="#f8f7f4" strokeWidth="1.6" />
        <rect x="46" y="108" width="12" height="32" rx="6" strokeWidth="1.1" />
        <rect x="94" y="108" width="12" height="32" rx="6" strokeWidth="1.1" />
        <rect x="142" y="108" width="12" height="32" rx="6" strokeWidth="1.1" />
        <path d="M60 158 q40 16 80 0" strokeWidth="1.1" />

        {/* data link headset -> ROS */}
        <path d="M100 172 C100 214 150 222 200 214" strokeDasharray="4 4" strokeWidth="1.2" stroke="#0f4c81" />
        <rect x="200" y="196" width="60" height="34" rx="4" fill="#f8f7f4" strokeWidth="1.4" />
        <text x="230" y="218" textAnchor="middle" fontFamily="JetBrains Mono Variable, JetBrains Mono, monospace" fontSize="14" fill={ink} stroke="none">
          ROS
        </text>

        {/* water surface */}
        <path d="M282 92 q12 -7 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" strokeWidth="1" opacity="0.6" />

        {/* tether ROS -> ROV */}
        <path d="M260 213 C290 213 296 176 322 172" strokeWidth="1.6" />

        {/* BlueROV2, side view: buoyancy block, frame, electronics tube, camera dome, thrusters */}
        <rect x="322" y="122" width="150" height="26" rx="4" fill="#f8f7f4" strokeWidth="1.5" />
        <path d="M322 148 h150 v58 a6 6 0 0 1 -6 6 h-138 a6 6 0 0 1 -6 -6 z" fill="#f8f7f4" strokeWidth="1.5" />
        <rect x="340" y="160" width="112" height="28" rx="14" strokeWidth="1.3" />
        <path d="M452 162 a14 14 0 0 1 0 24" strokeWidth="1.3" />
        <circle cx="458" cy="174" r="4" fill="#0f4c81" stroke="none" />
        <ellipse cx="334" cy="212" rx="12" ry="5" strokeWidth="1.2" />
        <ellipse cx="460" cy="212" rx="12" ry="5" strokeWidth="1.2" />
        <ellipse cx="397" cy="135" rx="14" ry="5" strokeWidth="1.1" />
        <path d="M330 222 l-8 10 M464 222 l8 10" strokeWidth="1" opacity="0.6" />
      </g>
      {(
        [
          ["10", 26, 70, 40, 94],
          ["12", 230, 262, 230, 232],
          ["14", 296, 238, 290, 196],
          ["16", 492, 112, 470, 126],
          ["18", 500, 200, 462, 178],
        ] as const
      ).map(([n, x, y, tx, ty]) => (
        <Num key={n} n={n} x={x} y={y} to={[tx, ty]} />
      ))}
    </svg>
  );
}

export function TeleopSheet() {
  return (
    <Sheet
      drawing={<TeleopSvg />}
      rows={[
        ["Dwg", "XRT-01"],
        ["Title", "XR teleoperation"],
        ["By", "A. Elshenawy"],
      ]}
      fit
    />
  );
}

/**
 * Sketch: amyloid-beta clearance. A neuron releases amyloid-beta; some clumps
 * into a plaque, a microglial cell reaches for it, and the rest drains across
 * the vessel wall into the blood.
 */
function NeuroSvg() {
  const ink = "#121316";
  const blue = "#0f4c81";
  const dots: [number, number][] = [
    [322, 74], [336, 96], [318, 118], [350, 128], [344, 60], [366, 108], [300, 96], [358, 82],
  ];
  const plaque: [number, number][] = [
    [404, 84], [414, 92], [398, 96], [420, 80], [410, 104], [426, 98], [394, 106], [416, 114],
  ];
  return (
    <svg viewBox="10 26 500 230" role="img" aria-label="Sketch of amyloid-beta clearance from a neuron" className="block h-full w-full">
      <g fill="none" stroke={ink} strokeLinejoin="round" strokeLinecap="round">
        {/* neuron: dendrites, soma with nucleus, axon and terminals */}
        <path d="M100 82 l-22 -24 m10 10 l-14 2 M96 112 l-30 14 m12 -6 l-6 12 M112 74 l-4 -30 m2 12 l-12 -8" strokeWidth="1.3" />
        <circle cx="122" cy="98" r="26" fill="#f8f7f4" strokeWidth="1.5" />
        <circle cx="118" cy="96" r="8" strokeWidth="1.1" />
        <path d="M148 98 C190 92 230 104 268 98" strokeWidth="1.5" />
        <path d="M268 98 l14 -12 M268 98 l16 2 M268 98 l12 14" strokeWidth="1.3" />
        {/* amyloid-beta released */}
        {dots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill={blue} stroke="none" />
        ))}
        {/* plaque: a clump */}
        <path d="M388 92 C386 72 412 66 426 76 C440 86 436 112 420 118 C402 124 388 110 388 92 Z" strokeWidth="1.3" strokeDasharray="3 3" />
        {plaque.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill={blue} stroke="none" />
        ))}
        {/* microglia reaching for the plaque */}
        <circle cx="470" cy="126" r="12" fill="#f8f7f4" strokeWidth="1.4" />
        <path d="M460 118 C448 110 440 108 432 104 M478 116 l10 -14 m-4 6 l8 2 M482 132 l14 8 M466 138 l-6 14" strokeWidth="1.2" />
        {/* blood vessel with cells */}
        <path d="M20 196 H500 M20 232 H500" strokeWidth="1.5" />
        {[60, 150, 240, 420].map((x) => (
          <ellipse key={x} cx={x} cy="214" rx="12" ry="6" strokeWidth="1" />
        ))}
        {/* clearance route: drainage into the blood */}
        <path d="M334 136 C336 160 338 176 340 206" stroke={blue} strokeWidth="1.3" strokeDasharray="4 4" />
        <path d="M334 200 l6 8 l6 -8" stroke={blue} strokeWidth="1.3" />
        <path d="M300 214 h-40" stroke={blue} strokeWidth="1.3" />
        <path d="M268 208 l-8 6 l8 6" stroke={blue} strokeWidth="1.3" />
      </g>
      {(
        [
          ["10", 152, 52, 136, 76],
          ["12", 300, 52, 318, 70],
          ["14", 404, 46, 408, 70],
          ["16", 496, 92, 478, 116],
          ["18", 470, 250, 470, 234],
          ["20", 366, 170, 342, 172],
        ] as const
      ).map(([n, x, y, tx, ty]) => (
        <Num key={n} n={n} x={x} y={y} to={[tx, ty]} />
      ))}
    </svg>
  );
}

export function NeuroSheet() {
  return (
    <Sheet
      drawing={<NeuroSvg />}
      rows={[
        ["Dwg", "NDC-01"],
        ["Title", "Aβ clearance"],
        ["By", "A. Elshenawy"],
      ]}
      fit
    />
  );
}

/**
 * Hand-drawn sketch of TideNet: boats whose ThermoVolt module powers their own
 * flood sensor, a sentinel post at the shoreline, LoRa links, and a flood
 * forecast for the houses behind the stormwater drains.
 */
function TideNetSvg() {
  const ink = "#121316";
  const blue = "#0f4c81";
  const hand = { fontFamily: "Caveat, cursive", fontSize: 27, fontWeight: 600, fill: ink, stroke: "none" } as const;
  return (
    <svg viewBox="0 0 520 300" role="img" aria-label="Sketch of TideNet: boats powered by ThermoVolt carry flood sensors and radio data to a flood forecast" className="block h-full w-full">
      <defs>
        <filter id="tdn-sketch" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
        </filter>
      </defs>
      <g filter="url(#tdn-sketch)" fill="none" stroke={ink} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        {/* sea */}
        <path d="M0 158 q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 V300 H0 Z" fill="#e3edf4" stroke="none" />
        <path d="M0 158 q15 -8 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" />
        {/* shore and land */}
        <path d="M332 300 V176 Q372 158 408 140 L520 128 V300 Z" fill="#f1ebdd" />
        {/* house */}
        <rect x="468" y="100" width="36" height="28" fill="#f8f7f4" />
        <path d="M462 102 L486 82 L510 102" />
        <rect x="481" y="112" width="10" height="16" />
        {/* flood line */}
        <path d="M400 148 H516" stroke={blue} strokeDasharray="5 5" strokeWidth="1.4" />
        {/* mangrove */}
        <path d="M368 120 q-14 -16 4 -24 q10 -16 26 -4 q18 2 10 20 q-8 12 -24 8 q-10 6 -16 0 z" fill="#dfeadd" />
        <path d="M376 124 v30 M376 140 q-10 6 -12 20 M376 140 q10 6 12 20" />
        {/* stormwater drain to sea */}
        <path d="M486 128 V186 q0 14 -14 14 H344" strokeWidth="1.4" />
        <path d="M350 194 l-8 6 l8 6" stroke={blue} strokeWidth="1.4" />
        {/* rain cloud and drops */}
        <path d="M44 66 q-18 0 -18 -14 q0 -14 16 -14 q4 -18 26 -16 q14 -10 28 4 q18 -2 18 14 q0 16 -18 16 z" fill="#f8f7f4" />
        <path d="M48 76 l-4 10 M64 76 l-4 10 M80 76 l-4 10 M96 76 l-4 10" stroke={blue} />
        {/* boat with TVM module */}
        <path d="M96 146 H204 L190 170 H110 Z" fill="#ffffff" />
        <rect x="126" y="122" width="44" height="24" rx="3" fill="#ffffff" />
        <path d="M136 130 h10 M152 130 h10" strokeWidth="1.2" />
        <path d="M166 122 V96" />
        <rect x="178" y="151" width="18" height="11" rx="2" fill="#c27a2c" />
        <path d="M181 148 q2 -5 0 -9 M187 148 q2 -5 0 -9 M193 148 q2 -5 0 -9" stroke="#c27a2c" strokeWidth="1.2" />
        {/* sensor pod on a line */}
        <path d="M118 170 V206" strokeWidth="1.2" />
        <rect x="110" y="206" width="16" height="26" rx="8" fill="#ffffff" />
        <circle cx="118" cy="219" r="2.5" fill={blue} stroke="none" />
        {/* sentinel post */}
        <path d="M298 128 V262" />
        <rect x="290" y="114" width="16" height="14" rx="2" fill="#ffffff" />
        <path d="M298 114 V102" strokeWidth="1.2" />
        {/* LoRa: boat and post to the forecast screen */}
        <path d="M172 96 q6 -6 0 -12 M178 100 q12 -12 0 -24" stroke={blue} strokeWidth="1.3" />
        <path d="M304 100 q6 -6 0 -12 M310 104 q12 -12 0 -24" stroke={blue} strokeWidth="1.3" />
        <path d="M190 84 C240 40 330 34 396 40" stroke={blue} strokeDasharray="3 6" strokeWidth="1.3" />
        {/* forecast screen */}
        <rect x="400" y="18" width="96" height="52" rx="5" fill="#ffffff" />
        <path d="M410 58 l16 -6 l14 4 l16 -14 l14 -10 l14 -6" stroke={blue} strokeWidth="1.4" />
        <path d="M410 30 h30" strokeWidth="1.1" />
      </g>
      <text x="122" y="48" {...hand}>stormwater</text>
      <text x="204" y="190" {...hand}>TVM</text>
      <text x="134" y="230" {...hand}>sensor</text>
      <text x="306" y="250" {...hand}>sentinel</text>
      <text x="252" y="30" {...hand} fill={blue}>LoRa</text>
      <text x="296" y="72" {...hand}>forecast</text>
      <text x="404" y="174" {...hand} fill={blue}>flood line</text>
    </svg>
  );
}

export function TideNetSheet({ photo }: { photo?: Pinned }) {
  return (
    <Sheet
      drawing={<TideNetSvg />}
      rows={[
        ["Dwg", "TDN-01"],
        ["Title", "TideNet + TVM"],
        ["By", "A. Elshenawy"],
      ]}
      photo={photo}
      fit
    />
  );
}

/**
 * Sketch: a probabilistic computing chip. A grid of p-bits, each one randomly
 * on or off, with a power monitor on its supply and an LLM workload faint behind it.
 */
function PbitSvg() {
  const ink = "#121316";
  const blue = "#0f4c81";
  // fixed "random" states so the drawing is stable: 1 = on, 0 = off, 2 = flipping
  const states = [
    1, 0, 2, 1, 0, 1,
    0, 1, 1, 0, 2, 0,
    1, 0, 0, 1, 1, 2,
    2, 1, 0, 0, 1, 0,
    0, 1, 2, 1, 0, 1,
    1, 0, 1, 0, 2, 0,
  ];
  const cell = 16, gap = 4, x0 = 202, y0 = 72;
  const layers = [
    { x: 34, ys: [70, 110, 150, 190] },
    { x: 96, ys: [52, 92, 132, 172, 212] },
    { x: 424, ys: [52, 92, 132, 172, 212] },
    { x: 486, ys: [70, 110, 150, 190] },
  ];
  return (
    <svg viewBox="0 0 520 264" role="img" aria-label="Sketch of a probabilistic computing chip running an LLM workload" className="block h-full w-full">
      {/* background: an LLM network feeding the chip */}
      <g opacity="0.28" stroke={blue} strokeWidth="1" fill="none">
        {layers[0].ys.flatMap((y1) => layers[1].ys.map((y2) => <path key={`a${y1}-${y2}`} d={`M${layers[0].x} ${y1} L${layers[1].x} ${y2}`} />))}
        {layers[2].ys.flatMap((y1) => layers[3].ys.map((y2) => <path key={`b${y1}-${y2}`} d={`M${layers[2].x} ${y1} L${layers[3].x} ${y2}`} />))}
        {layers[1].ys.map((y) => <path key={`c${y}`} d={`M${layers[1].x} ${y} C150 ${y} 160 132 186 132`} />)}
        {layers[2].ys.map((y) => <path key={`d${y}`} d={`M${layers[2].x} ${y} C370 ${y} 360 132 334 132`} />)}
        {layers.flatMap((l) => l.ys.map((y) => <circle key={`n${l.x}-${y}`} cx={l.x} cy={y} r="6" fill="#f8f7f4" />))}
      </g>
      <g opacity="0.45" fontFamily="JetBrains Mono Variable, JetBrains Mono, monospace" fontSize="11" fill={blue}>
        {["the", "next", "token"].map((t, i) => (
          <g key={t}>
            <rect x={14 + i * 48} y="12" width="42" height="18" rx="4" fill="none" stroke={blue} />
            <text x={35 + i * 48} y="25" textAnchor="middle">{t}</text>
          </g>
        ))}
        <text x="482" y="252" textAnchor="end">LLM workload</text>
      </g>

      <g fill="none" stroke={ink} strokeLinejoin="round" strokeLinecap="round">
        {/* package with pins on all sides */}
        <rect x="186" y="56" width="148" height="148" rx="6" fill="#f8f7f4" strokeWidth="1.6" />
        {Array.from({ length: 8 }, (_, i) => 200 + i * 17).map((p) => (
          <g key={p} strokeWidth="1.3">
            <path d={`M${p} 56 v-9`} />
            <path d={`M${p} 204 v9`} />
            <path d={`M186 ${p - 130 + 70} h-9`} />
            <path d={`M334 ${p - 130 + 70} h9`} />
          </g>
        ))}
        <circle cx="198" cy="68" r="2.5" fill={ink} stroke="none" />
        {/* p-bit array */}
        {states.map((st, i) => {
          const cx = x0 + (i % 6) * (cell + gap);
          const cy = y0 + Math.floor(i / 6) * (cell + gap);
          return (
            <g key={i}>
              <rect x={cx} y={cy} width={cell} height={cell} rx="2" fill={st === 1 ? blue : "#f8f7f4"} stroke={st === 1 ? blue : ink} strokeWidth="1" />
              {st === 2 && <path d={`M${cx + 3} ${cy + 10} q3 -8 5 0 t5 0`} stroke={blue} strokeWidth="1.1" />}
            </g>
          );
        })}
        {/* power monitor on the supply rail */}
        <path d="M334 191 h30 v26 h24" strokeWidth="1.3" />
        <rect x="388" y="204" width="52" height="28" rx="3" fill="#f8f7f4" strokeWidth="1.4" />
        <path d="M398 212 h10 M398 220 h18" strokeWidth="1" />
        <text x="430" y="224" textAnchor="end" fontFamily="JetBrains Mono Variable, JetBrains Mono, monospace" fontSize="10" fill={ink} stroke="none">
          mW
        </text>
      </g>
      {(
        [
          ["10", 262, 236, 262, 196],
          ["12", 166, 236, 186, 196],
          ["14", 468, 222, 440, 218],
          ["16", 110, 246, 96, 214],
        ] as const
      ).map(([n, x, y, tx, ty]) => (
        <Num key={n} n={n} x={x} y={y} to={[tx, ty]} />
      ))}
    </svg>
  );
}

export function PbitSheet() {
  return (
    <Sheet
      drawing={<PbitSvg />}
      rows={[
        ["Dwg", "PBC-01"],
        ["Title", "p-bit chip"],
        ["By", "A. Elshenawy"],
      ]}
      fit
    />
  );
}

type Print = { src: string; alt: string; caption: string; ratio: number };

/** Prints laid on the dotted sheet: positions for two or three photos. */
const LAYOUTS: Record<number, { left?: string; right?: string; top: string; w: string; r: number }[]> = {
  2: [
    { left: "6%", top: "9%", w: "40%", r: -2.5 },
    { right: "5%", top: "18%", w: "52%", r: 2 },
  ],
  3: [
    { left: "4%", top: "6%", w: "44%", r: -2 },
    { right: "4%", top: "4%", w: "29%", r: 2.5 },
    { left: "38%", top: "46%", w: "27%", r: -1.5 },
  ],
};

export function Collage({ photos, label }: { photos: Print[]; label: string }) {
  const layout = LAYOUTS[photos.length] ?? LAYOUTS[2];
  return (
    <div className="tvs collage">
      <span aria-hidden className="collage-tag meta">{label}</span>
      {photos.map((p, i) => {
        const pos = layout[i] ?? layout[0];
        return (
          <figure
            key={p.src}
            className="tvs-photo collage-print"
            style={{ left: pos.left, right: pos.right, top: pos.top, bottom: "auto", width: pos.w, transform: `rotate(${pos.r}deg)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" style={{ aspectRatio: String(p.ratio) }} />
            {p.caption && <figcaption>{p.caption}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}

const teleop = [
  { name: "Operator", detail: "Head and hand input" },
  { name: "Meta Quest 3", detail: "Mixed-reality scene in Unity" },
  { name: "ROS", detail: "Bridge between headset and vehicle" },
  { name: "BlueROV2", detail: "Underwater vehicle" },
];

export function TeleopDiagram() {
  return (
    <div className="p-4 sm:p-6">
      <ol className="grid grid-cols-1 sm:grid-cols-4" aria-label="Teleoperation signal path">
        {teleop.map((b, i) => (
          <li key={b.name} className="relative flex flex-col sm:flex-row">
            <div className="flex-1 border border-ink px-3 py-3">
              <p className="text-[15px] font-medium">{b.name}</p>
              <p className="mt-1 text-[13px] leading-snug text-muted">{b.detail}</p>
            </div>
            {i < teleop.length - 1 && (
              <div aria-hidden className="flex h-8 items-center justify-center sm:h-auto sm:w-6">
                <span className="block h-full w-px bg-accent sm:h-px sm:w-full" />
              </div>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-4 grid grid-cols-1 gap-1 text-[13px] text-muted sm:grid-cols-2">
        <p>
          <span className="font-mono text-accent">Down</span> commands from the operator to the vehicle
        </p>
        <p>
          <span className="font-mono text-accent">Up</span> camera and vehicle state back to the headset
        </p>
      </div>
    </div>
  );
}
