export type Repo = {
  name: string;
  url: string;
  summary: string;
  /** One line on why it exists. */
  why: string;
  language: "Python" | "TypeScript" | "C" | "Markdown";
  license?: string;
  status: "Released" | "In progress" | "Live" | "Archive";
  facts: { label: string; value: string }[];
  topics: string[];
  /** A short, real snippet from the repo's README. */
  snippet?: { caption: string; code: string };
  featured?: boolean;
};

export const github = "https://github.com/aysel-elsh";

export const repos: Repo[] = [
  {
    name: "tegkit",
    url: "https://github.com/aysel-elsh/tegkit",
    summary: "A small, dependency-free Python toolkit for modelling thermoelectric generators.",
    why: "The quick first-pass math I kept redoing for ThermoVolt, packaged so anyone sizing a TEG can skip it.",
    language: "Python",
    license: "MIT",
    status: "Released",
    featured: true,
    facts: [
      { label: "Version", value: "0.3.0" },
      { label: "Python", value: "3.10+" },
      { label: "Tests", value: "35" },
      { label: "Dependencies", value: "None" },
    ],
    topics: ["thermoelectric", "energy harvesting", "waste-heat recovery", "Peltier"],
    snippet: {
      caption: "Power and matched load for a 4 × 2 array, from datasheet values",
      code: `from tegkit import TEGModule, TEGArray

m = TEGModule.from_datasheet(matched_power=2.5, matched_voltage=2.1,
                             delta_t=80, thermal_conductance=0.45)
dt = m.module_delta_t(source_delta_t=60,
                      hot_side_resistance=0.3, cold_side_resistance=0.5)
arr = TEGArray(m, series=4, parallel=2)

print(arr.max_power(dt), "W at", arr.matched_load(), "ohm")`,
    },
  },
  {
    name: "pbit-energy-bench",
    url: "https://github.com/aysel-elsh/pbit-energy-bench",
    summary: "Does p-bit (probabilistic) sampling save energy on a Raspberry Pi? An INA219-measured benchmark against a small MLP.",
    why: "Probabilistic-computing chips promise big energy savings. I wanted a narrow, measurable version of that question I could test myself.",
    language: "Python",
    license: "MIT",
    status: "In progress",
    featured: true,
    facts: [
      { label: "Hardware", value: "Raspberry Pi + INA219" },
      { label: "Models", value: "RBM (Gibbs) vs MLP" },
      { label: "Tests", value: "8" },
      { label: "Results", value: "Not yet claimed" },
    ],
    topics: ["probabilistic computing", "benchmark", "energy measurement", "Raspberry Pi"],
    snippet: {
      caption: "Run the sweep on a Pi with the current sensor attached",
      code: `python -m pbitbench --sensor ina219 \\
  --sizes 32 64 128 256 512 --duration 30 --out results.csv`,
    },
  },
  {
    name: "thermovolt-marine",
    url: "https://github.com/aysel-elsh/thermovolt-marine",
    summary: "Public overview of ThermoVolt Marine: the problem, bench results, publications and recognition.",
    why: "One public place for the project, kept within what the provisional patent allows.",
    language: "Markdown",
    status: "Live",
    facts: [
      { label: "Heat removed", value: "512 W" },
      { label: "ΔT discharge", value: "−7.33 °C" },
    ],
    topics: ["cleantech", "marine", "thermoelectric"],
  },
  {
    name: "portfolio",
    url: "https://github.com/aysel-elsh/portfolio",
    summary: "This site. Next.js, TypeScript and Tailwind, exported as static pages.",
    why: "Built by hand around the PCB and lab-notebook look you're seeing now.",
    language: "TypeScript",
    status: "Live",
    facts: [{ label: "Stack", value: "Next.js / Tailwind" }],
    topics: ["nextjs", "typescript", "tailwindcss"],
  },
  {
    name: "cs50-final-project",
    url: "https://github.com/aysel-elsh/cs50-final-project",
    summary: "My Harvard CS50x final project from 2022: a command-line calculator in C.",
    why: "Where the programming started.",
    language: "C",
    status: "Archive",
    facts: [{ label: "Year", value: "2022" }],
    topics: ["c", "cs50"],
  },
];
