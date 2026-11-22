import type { AwardGroup, Press } from "@/lib/types";

export const press: Press[] = [
  {
    outlet: "Palm Beach Illustrated",
    title: "Turning the Tide",
    date: "Sep 2026",
    iso: "2026-09",
    note: "Feature by Nila Do Simon on ThermoVolt Marine and turning marine waste heat into power.",
    // href: "https://…",  add the article link
  },
  {
    outlet: "Town-Crier",
    title: "9/11 Day of Service",
    date: "Sep 2026",
    iso: "2026-09",
    note: "Coverage of the Speak Up for Kids service day where 100+ students assembled hurricane kits for foster families.",
  },
  {
    outlet: "FAU High School research blog",
    title: "ThermoVolt Marine",
    date: "2026",
    iso: "2026",
    note: "Student research write-up on the project.",
  },
];

export const awards: AwardGroup[] = [
  {
    field: "Technical and research",
    items: [
      { name: "National Green Difference Award", result: "Winner", detail: "Project Green Schools. One of 42 worldwide, honored at Columbia University.", year: "2026", feature: true },
      { name: "Florida State Science and Engineering Fair", result: "Top Sustainability Innovation Award" },
      { name: "Palm Beach Regional Science and Engineering Fair", result: "First place", feature: true },
      { name: "Stockholm Junior Water Prize, Florida", result: "Third place", detail: "Paper invited for publication in the Florida Water Resources Journal." },
      { name: "Aventusoft", result: "Best Technical Excellence Award", detail: "Medical device hardware team" },
      { name: "Guy Harvey Foundation Conservation Scholar", result: "Finalist", detail: "Ocean Exchange", year: "2026" },
      { name: "Climate Summit Innovation Showcase", result: "Collegiate finalist", year: "2026" },
    ],
  },
  {
    field: "Entrepreneurship",
    items: [
      { name: "FAU Tech Runway", result: "$100k in funding and resources", detail: "Accelerator participant since 10th grade.", feature: true },
      { name: "FAU Business Pitch Competition", result: "Top 5", detail: "Ocean economy track" },
      { name: "Future Waves Competition", result: "State finalist", detail: "Top 10 innovations statewide, $1,000 grant" },
      { name: "FAU WAVE", result: "Entrepreneurial funding" },
    ],
  },
  {
    field: "Academic and leadership",
    items: [
      { name: "HOSA International Leadership Conference", result: "Third place internationally", detail: "Family Medicine", year: "2026", feature: true },
      { name: "National Merit Scholarship Program", result: "Commended Scholar" },
      { name: "HOSA Barbara James Service Award", result: "Gold" },
      { name: "Youth District Coalition Champion", result: "Recipient", detail: "Palm Beach County youth prevention work" },
      { name: "CADCA", result: "Invited twice", detail: "Community Anti-Drug Coalitions of America" },
    ],
  },
];
