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

export function ThermoVoltDrawing() {
  const modules = Array.from({ length: 8 }, (_, i) => 300 + i * 40);
  return (
    <div>
      <svg
        viewBox="0 0 800 360"
        role="img"
        aria-labelledby="tvm-t tvm-d"
        className="block h-auto w-full"
      >
        <title id="tvm-t">ThermoVolt Marine system, schematic side view</title>
        <desc id="tvm-d">
          Hot engine coolant runs through a U-shaped loop. A row of eight thermoelectric modules sits under the
          supply pipe, directly on top of a raw seawater channel that enters through the hull, passes under the
          modules and leaves overboard. Wires from the module array lead to a power output terminal.
        </desc>
        <defs>
          <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#121316" strokeWidth="1" />
          </pattern>
        </defs>

        <g fill="none" stroke="#121316" strokeWidth="1.5" strokeLinejoin="round">
          {/* hull, sectioned */}
          <rect x="20" y="280" width="760" height="12" fill="url(#hatch)" />
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
