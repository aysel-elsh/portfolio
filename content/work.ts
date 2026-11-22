import type { NotebookEntry, WorkEntry } from "@/lib/types";

export const work: WorkEntry[] = [
  {
    slug: "thermovolt-marine",
    title: "ThermoVolt Marine",
    role: "Founder and lead engineer",
    org: "FAU Tech Runway venture",
    period: "Ongoing",
    field: "Energy hardware",
    status: "Active",
    hook: "Every boat engine dumps heat into the water it floats on. ThermoVolt catches some of it on the way out.",
    tools: ["Thermoelectric modules", "KiCad", "Embedded systems", "3D CAD"],
    diagram: "thermovolt",
    sections: [
      {
        heading: "The problem",
        body: [
          "Marine engines are cooled by pulling in raw seawater, running it past the engine's hot coolant, and pumping it back overboard warmer than it came in. That heat is lost energy for the vessel, and warm discharge is thermal pollution for the water around it.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A solid-state system with no moving parts that sits in the raw-water cooling circuit a boat already has. Thermoelectric modules are sandwiched between the hot coolant side and the cold seawater side, so the temperature difference across them produces electricity.",
          "It's designed to do two jobs at once: recover power, and send cooler water back into the ocean. My current paper describes a control approach that balances those two goals instead of maximizing one.",
        ],
      },
      {
        heading: "What's next",
        body: [
          "Custom power and control electronics, designed in KiCad, are headed to fabrication. The details stay private while the patent is pending.",
        ],
      },
    ],
    measures: {
      caption: "Bench results",
      note: "15 bench trials, p < 0.001",
      rows: [
        { label: "Heat removed from the cooling loop", value: "512 W" },
        { label: "Drop in discharge temperature", value: "7.33 °C" },
        { label: "Output voltage", value: "7.81 V" },
      ],
    },
    milestones: [
      { date: "Nov 2026", iso: "2026-11-16", text: "Filed a provisional patent with the USPTO myself, pro se. Sole inventor, 20 claims." },
      { date: "Nov 2026", iso: "2026-11", text: "Presenting at IOCMSE 2026: “Dual-Objective Control of Thermoelectric Waste-Heat Recovery in Marine Raw-Water Cooling Circuits.”" },
      { date: "Nov 2026", iso: "2026-11", text: "Collegiate finalist, Climate Summit Innovation Showcase." },
      { date: "Oct 2026", iso: "2026-10", text: "Finalist, Guy Harvey Foundation Conservation Scholar competition at Ocean Exchange, with TideNet, a coastal-flooding extension of the system." },
      { date: "Sep 2026", iso: "2026-09", text: "Profiled in Palm Beach Illustrated, “Turning the Tide.”" },
      { date: "2026", iso: "2026", text: "Project Green Schools National Green Difference Award, one of 42 recipients worldwide, honored at Columbia University." },
      { date: "2026", iso: "2026", text: "Abstract accepted to the Sigma Xi International Forum on Research Excellence (IFoRE)." },
      { date: "2026", iso: "2026", text: "Preprint published on Zenodo." },
      { date: "Since 10th grade", text: "FAU Tech Runway accelerator, with $100k in funding and resources awarded to the company. Also funded by FAU WAVE and the Future Waves grant." },
    ],
    photos: [
      // { src: "/images/tvm-bench.jpg", alt: "ThermoVolt prototype on the test bench", caption: "Bench prototype during a test run.", width: 1600, height: 1067 },
    ],
  },
  {
    slug: "tegkit",
    title: "tegkit",
    role: "Author and maintainer",
    org: "Open source (MIT license)",
    period: "Since Nov 2026",
    field: "Open-source software",
    status: "Active",
    hook: "A free Python toolkit for sizing thermoelectric generators from real datasheets. pip install tegkit.",
    tools: ["Python", "pytest", "GitHub Actions", "PyPI"],
    sections: [
      {
        heading: "Why I built it",
        body: [
          "Building ThermoVolt Marine meant answering the same questions again and again: how much power will this module give me at this temperature difference, what load should I put on it, and how much do my heat sinks cost me. I couldn't find a small, free tool that answered them straight from a datasheet, so I wrote one and opened it up.",
        ],
      },
      {
        heading: "What it does",
        body: [
          "It models thermoelectric generators and Peltier coolers with the standard constant-property model: power, efficiency, ZT, I-V curves, series and parallel arrays, and heat-sink sizing. It also has a command-line tool.",
          "It ships with presets for five real modules. Each one is built from a public manufacturer datasheet and tested against that datasheet's own numbers.",
          "Only general physics lives here. ThermoVolt's patent-pending design stays private.",
        ],
      },
      {
        heading: "Get involved",
        body: [
          "Install it with pip install tegkit. Issues labelled good first issue are open for new contributors.",
        ],
      },
    ],
    milestones: [
      { date: "Nov 2026", iso: "2026-11-22", text: "Released tegkit 0.3.0 on PyPI.", href: "https://pypi.org/project/tegkit/" },
    ],
    links: [
      { label: "Code on GitHub", href: "https://github.com/aysel-elsh/tegkit" },
      { label: "tegkit on PyPI", href: "https://pypi.org/project/tegkit/" },
    ],
    photos: [],
  },
  {
    slug: "underwater-teleoperation",
    title: "Underwater robotics and XR teleoperation",
    role: "Undergraduate researcher",
    org: "FAU College of Engineering",
    period: "Ongoing",
    field: "Robotics",
    status: "Ongoing",
    hook: "Piloting an underwater robot with your head and hands instead of a joystick.",
    tools: ["Meta Quest 3", "BlueROV2", "ROS", "Unity"],
    diagram: "teleop",
    sections: [
      {
        heading: "The work",
        body: [
          "I work on connecting a Meta Quest 3 spatial interface to a BlueROV2 underwater vehicle, so an operator can see and steer the robot from inside a mixed-reality scene.",
          "The headset side runs in Unity and the vehicle side runs on ROS, so most of the work lives in the bridge between the two: getting commands down to the robot and the robot's state back up to the operator.",
        ],
      },
    ],
    photos: [],
  },
  {
    slug: "neurodegenerative-clearance",
    title: "Neurodegenerative clearance research",
    role: "Research support",
    org: "FAU Schmidt College of Medicine",
    period: "Ongoing",
    field: "Neuroscience",
    status: "Ongoing",
    hook: "How the brain clears amyloid-beta, the protein that builds up in Alzheimer's disease.",
    tools: ["Amyloid-beta clearance", "Graduate symposium panel"],
    sections: [
      {
        heading: "The work",
        body: [
          "Graduate-level lab support on a project investigating the mechanisms the brain uses to clear amyloid-beta. When clearance falls behind, the protein accumulates, which is one of the hallmarks of Alzheimer's disease.",
          "I co-presented on a panel at the graduate research symposium.",
        ],
      },
    ],
    photos: [],
  },
  {
    slug: "aventusoft",
    title: "Medical device hardware",
    role: "Hardware engineering extern",
    org: "Aventusoft LLC",
    period: "Returning since Aug 2026",
    field: "Medical devices",
    status: "Active",
    hook: "Small, light boards for a wearable that listens to the heart.",
    tools: ["PCB design", "Schematic capture", "Soldering and bring-up", "Wireless charging"],
    sections: [
      {
        heading: "What I did",
        body: [
          "Designed PCBs from schematic through soldering and testing. Led the design and implementation of a wireless charger, and was one of the hardware leads on a miniature heart-tracking device funded by an FDA grant.",
          "Received a Best Technical Excellence Award.",
        ],
      },
      {
        heading: "Now",
        body: [
          "Back on the team, researching how to extend a wearable cardiac monitor to multi-day continuous recording while keeping it the same size and just as light.",
        ],
      },
    ],
    photos: [],
  },
];

/** Smaller entries that don't need their own page. */
export const notebook: NotebookEntry[] = [
  {
    title: "Stockholm Junior Water Prize research",
    context: "Florida state competition",
    note: "Placed third in Florida. Now adapting the paper into a technical article for the Florida Water Resources Journal at the state chair's invitation.",
    status: "Ongoing",
  },
  {
    title: "Low-power computing experiments",
    context: "Independent",
    note: "Does probabilistic-bit (p-bit) sampling actually save energy? An open benchmark against a small neural network on a Raspberry Pi, with an INA219 measuring power draw. Results come once it runs on real hardware.",
    status: "Exploring",
    href: "https://github.com/aysel-elsh/pbit-energy-bench",
  },
  {
    title: "FAU AI Sandbox",
    context: "Florida Atlantic University",
    note: "Project work in the university's AI Sandbox through the last academic year.",
    status: "Completed",
  },
  {
    title: "FIRST Robotics",
    context: "Team 3932",
    note: "Where the hardware started.",
    status: "Completed",
  },
];

export const coursework = {
  now: [
    "Electronics 1",
    "Electrical Machines",
    "Signals and Digital Filter Design",
    "Systems Programming",
    "Intro to Data Science and Analytics",
  ],
  next: [
    "Computer Architecture",
    "Design of Digital Systems",
    "Control Systems",
    "Hardware/Software Co-design (graduate)",
  ],
};

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
