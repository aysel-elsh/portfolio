/**
 * Home page indexes. Each entry gets a photo: put the file at
 * /public/images/home/<key>.jpg and set `photo: true` (or give a full `src`).
 * For a short clip instead, put an .mp4 next to it and set `video`.
 */
export type IndexItem = {
  key: string;
  label: string;
  sub: string;
  meta?: string;
  caption: string;
  /** What the photo should show, displayed until the photo is added. */
  hint: string;
  photo?: boolean | string;
  /** Show the whole image (graphics, clippings) instead of filling the frame. */
  fit?: "contain";
  /** Several photos laid out as prints on the dotted sheet. */
  collage?: { src: string; alt: string; caption: string; ratio: number }[];
  /** A drawn picture instead of a photo, with an optional pinned photo. */
  art?: "thermovolt" | "monitor" | "teleop" | "neuro" | "tidenet" | "pbits";
  inset?: { src: string; alt: string; caption: string };
  /** A background-removed photo that stands in front of the drawing. */
  cutout?: { src: string; alt: string; caption: string };
  /** Short muted loop (1–2 s), e.g. "/images/home/hosa.mp4". Uses the photo as its poster if there is one. */
  video?: string;
  alt?: string;
  href?: string;
};

export type HomeIndex = {
  id: string;
  title: string;
  /** Reference-designator prefix: U = ICs, D = LEDs, J = connectors, Q = transistors, S = switches. */
  ref: string;
  blurb: string;
  /** Where "View more" goes. */
  more: { href: string; label: string };
  items: IndexItem[];
};

export const indexes: HomeIndex[] = [
  {
    id: "projects",
    title: "Projects",
    ref: "U",
    blurb: "Things I've designed, built or researched.",
    more: { href: "/work/", label: "Engineering and research" },
    items: [
      {
        key: "thermovolt",
        label: "ThermoVolt Marine",
        sub: "Turns boat-engine waste heat into electricity and cooler discharge water",
        meta: "Founder",
        caption: "ThermoVolt Marine, thermoelectric waste-heat recovery. Pinned: me pitching it.",
        hint: "The prototype on the bench, or the test setup",
        art: "thermovolt",
        inset: {
          src: "/images/home/thermovolt-pitch.jpg",
          alt: "Aysel pitching ThermoVolt Marine",
          caption: "Pitching TVM",
        },
        href: "/work/thermovolt-marine/",
      },
      {
        key: "aventusoft",
        label: "Medical device hardware",
        sub: "Boards and a wireless charger for a wearable heart monitor at Aventusoft",
        meta: "Extern",
        caption: "Hardware for a wearable heart monitor. Pinned: me soldering at the bench.",
        hint: "A board you designed, or you soldering or testing",
        art: "monitor",
        inset: {
          src: "/images/home/soldering.jpg",
          alt: "Aysel soldering at her workbench",
          caption: "At the bench",
        },
        href: "/work/aventusoft/",
      },
      {
        key: "water",
        label: "Water solutions research",
        sub: "Stormwater flooding and water quality solutions. Third in Florida, Stockholm Junior Water Prize",
        meta: "SJWP",
        caption: "Stockholm Junior Water Prize, third in Florida. TideNet: boats powered by ThermoVolt carry their own flood sensors. Pinned: my TideNet booth.",
        hint: "Your poster or presenting at the state competition",
        art: "tidenet",
        inset: {
          src: "/images/home/tidenet-booth.jpg",
          alt: "Aysel at her TideNet booth with the project poster",
          caption: "TideNet booth",
        },
      },
      {
        key: "teleop",
        label: "Underwater robotics and XR",
        sub: "Piloting a BlueROV2 from a Meta Quest 3",
        meta: "FAU",
        caption: "Mixed-reality teleoperation: a Meta Quest 3 driving a BlueROV2 through ROS.",
        hint: "The BlueROV2, or you with the headset",
        art: "teleop",
        href: "/work/underwater-teleoperation/",
      },
      {
        key: "computing",
        label: "Low-power computing",
        sub: "Probabilistic computing benchmarks on a Raspberry Pi",
        meta: "Exploring",
        caption: "Probabilistic computing: chips built from random p-bits, the kind of hardware being explored for AI. Power-benchmarked on a Raspberry Pi.",
        hint: "The Pi and INA219 setup",
        art: "pbits",
        href: "/work/",
      },
      {
        key: "neuro",
        label: "Neurodegenerative clearance",
        sub: "How the brain clears amyloid-beta",
        meta: "FAU Medicine",
        caption: "Amyloid-beta clearance research: how the brain clears the protein before it builds up.",
        hint: "In the lab, or at the symposium panel",
        art: "neuro",
        href: "/work/neurodegenerative-clearance/",
      },
    ],
  },
  {
    id: "achievements",
    title: "Achievements",
    ref: "D",
    blurb: "The ones I'm proudest of.",
    more: { href: "/recognition/", label: "Press and recognition" },
    items: [
      {
        key: "green-difference",
        label: "National Green Difference Award",
        sub: "One of 42 winners worldwide and 1 of 2 in Florida, honored at Columbia University",
        meta: "2026",
        caption: "Project Green Schools National Green Difference Award.",
        hint: "At the ceremony at Columbia",
        href: "/recognition/",
        photo: "/images/home/green-difference.jpg",
        fit: "contain",
        alt: "Project Green Schools 2026 Green Difference Award winner announcement for Aysel Elshenawy",
      },
      {
        key: "runway",
        label: "FAU Tech Runway",
        sub: "$100k in funding and resources for ThermoVolt Marine",
        meta: "Since 10th grade",
        caption: "FAU Tech Runway accelerator.",
        hint: "At Tech Runway, or pitching",
        photo: "/images/home/runway.jpg",
        fit: "contain",
        alt: "FAU blue economy feature on ThermoVolt Marine and its founder",
      },
      {
        key: "patent",
        label: "Patent pending",
        sub: "Filed my own provisional patent with the USPTO",
        meta: "Nov 2026",
        caption: "FIG. 1 of my provisional application: the system installed on a marine engine's raw-water cooling circuit.",
        hint: "The prototype, or a drawing from the filing",
        photo: "/images/home/patent-fig1.jpg",
        fit: "contain",
        alt: "FIG. 1 of the ThermoVolt Marine provisional patent application",
      },
      {
        key: "hosa",
        label: "HOSA International Leadership Conference",
        sub: "Third place internationally, Family Medicine",
        meta: "2026",
        caption: "HOSA International Leadership Conference: third place internationally, Family Medicine.",
        hint: "On stage or with your medal at ILC",
        href: "/recognition/",
        photo: "/images/home/hosa.jpg",
        alt: "Aysel holding her HOSA medal in Indianapolis",
      },
      {
        key: "science-fair",
        label: "Science and engineering fairs",
        sub: "1st at Palm Beach Regional; Top Sustainability Innovation Award and 6th place at the Florida State Science and Engineering Fair",
        meta: "SEF",
        caption: "Science and engineering fairs, with my ThermoVolt Marine poster.",
        hint: "With your board at regionals or states",
        photo: true,
        alt: "Aysel with her ThermoVolt Marine research poster at a science fair",
        href: "/recognition/",
      },
      {
        key: "pbi",
        label: "Palm Beach Illustrated",
        sub: "Featured in “Turning the Tide”",
        meta: "Sep 2026",
        caption: "Palm Beach Illustrated, September 2026.",
        hint: "A photo you took of the printed page",
        href: "/recognition/",
        photo: "/images/home/pbi.jpg",
        fit: "contain",
        alt: "Palm Beach Illustrated feature headline, Turning the Tide",
      },
    ],
  },
  {
    id: "talks",
    title: "Talks and conferences",
    ref: "J",
    blurb: "Where I've presented the work.",
    more: { href: "/recognition/", label: "Publications and presentations" },
    items: [
      {
        key: "iocmse",
        label: "IOCMSE 2026",
        sub: "Dual-objective control of thermoelectric waste-heat recovery",
        meta: "Nov 2026",
        caption: "International Online Conference on Marine Science and Engineering.",
        hint: "A slide or screenshot from the talk",
        href: "/recognition/",
      },
      {
        key: "ocean-exchange",
        label: "Ocean Exchange",
        sub: "TideNet, Guy Harvey Conservation Scholar finalist",
        meta: "Oct 2026",
        caption: "Presenting TideNet at Ocean Exchange 2026 as a Guy Harvey Conservation Scholar finalist.",
        hint: "Presenting at Ocean Exchange",
        collage: [
          { src: "/images/home/oex-poster.jpg", alt: "Aysel beside her TideNet poster", caption: "TideNet poster", ratio: 0.75 },
          { src: "/images/home/oex-table.jpg", alt: "The TideNet booth table with handouts and demos", caption: "The booth", ratio: 1.35 },
        ],
      },
      {
        key: "capitol",
        label: "Florida State Capitol",
        sub: "Presented youth prevention work to legislators",
        meta: "TCIA",
        caption: "Teen Coalition in Action at the Capitol.",
        hint: "At the Capitol in Tallahassee",
        href: "/community/",
      },
      {
        key: "climate-summit",
        label: "Climate Summit Innovation Showcase",
        sub: "Collegiate finalist",
        meta: "Nov 2026",
        caption: "Climate Summit Innovation Showcase, collegiate finalist.",
        hint: "At the showcase",
        collage: [
          { src: "/images/home/climate-1.jpg", alt: "Aysel presenting at the Climate Summit Innovation Showcase", caption: "Presenting", ratio: 1.12 },
          { src: "/images/home/climate-2.jpg", alt: "Aysel recognized at the Climate Summit Innovation Showcase", caption: "Recognized", ratio: 1.29 },
        ],
      },
      {
        key: "symposium",
        label: "FAU graduate research symposium",
        sub: "Panel co-presenter, amyloid-beta clearance",
        meta: "FAU",
        caption: "Graduate research symposium panel.",
        hint: "On the panel",
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership and community",
    ref: "Q",
    blurb: "986 volunteer hours so far.",
    more: { href: "/community/", label: "Leadership and community" },
    items: [
      {
        key: "tcia",
        label: "Teen Coalition in Action",
        sub: "President. Youth mental health and prevention; ~300 hours",
        meta: "President",
        caption: "Teen Coalition in Action, Palm Beach County Behavioral Health Coalition.",
        hint: "Tabling, a meeting, or an event you ran",
        href: "/community/",
      },
      {
        key: "ssufk",
        label: "Speak Up for Kids",
        sub: "Lead intern, project creator and Life Skills Portal lead; 561+ hours",
        meta: "4th year",
        caption: "Speak Up for Kids of Palm Beach County.",
        hint: "Hurricane kit day, or a chapter event",
        href: "/community/",
        photo: "/images/home/ssufk.jpg",
        alt: "Aysel at the Students Speak Up for Kids outreach table",
      },
      {
        key: "crc",
        label: "Competitive Research Club",
        sub: "President. Doubled membership, mentored 21 middle schoolers",
        meta: "President",
        caption: "FAU High Competitive Research Club, where I'm president.",
        hint: "A club meeting or the poster fair",
        href: "/community/",
        collage: [
          { src: "/images/home/crc-table.jpg", alt: "Competitive Research Club recruiting table", caption: "", ratio: 1.33 },
          { src: "/images/home/crc-president.jpg", alt: "Meet the President club announcement", caption: "Meet the president", ratio: 1.0 },
          { src: "/images/home/crc-friends.jpg", alt: "Aysel at the club table with a club officer", caption: "", ratio: 0.96 },
        ],
      },
      {
        key: "teaching",
        label: "Teaching",
        sub: "S.T.A.R.S. Ambassador at the Marcus Center; math tutor at FAU",
        meta: "Mentor",
        caption: "Teaching at the Marcus Center and FAU.",
        hint: "Running a lab with younger students",
        href: "/community/",
      },
    ],
  },
  {
    id: "life",
    title: "Outside the lab",
    ref: "S",
    blurb: "The rest of me.",
    more: { href: "/about/", label: "About" },
    items: [
      {
        key: "swim",
        label: "Swimming",
        sub: "Varsity swimmer; FHSAA Class 2A state qualifier",
        meta: "Since age 3",
        caption: "FAU High varsity swimming.",
        hint: "Racing, or with the team at states",
      },
      {
        key: "first",
        label: "FIRST Robotics",
        sub: "Team 3932, where the hardware started",
        meta: "Team 3932",
        caption: "FIRST Robotics Team 3932, at the field.",
        hint: "With the team or the robot",
        photo: "/images/home/first.jpg",
        alt: "Aysel with FIRST Robotics Team 3932 at the field",
      },
    ],
  },
];
