import { profile } from "@/content/profile";
import { serviceHours } from "@/content/community";
import TraceName from "@/components/TraceName";
import Clock from "@/components/Clock";
import { ChipGlyph, ProbeGlyph, WaveGlyph } from "@/components/Glyphs";
import { Block, Ledger, TextLink } from "@/components/ui";
import type { Milestone } from "@/lib/types";

/** What drives the work, each tied to what I actually do about it. */
const cares = [
  {
    name: "The environment",
    text: "It's why I started ThermoVolt Marine: boat engines dump their waste heat into the water, and I wanted to turn that heat into electricity instead.",
    href: "/work/thermovolt-marine/",
    link: "ThermoVolt Marine",
  },
  {
    name: "Kids in foster care",
    text: "Four years with Speak Up for Kids, helping student chapters across Palm Beach County run projects for kids in the system.",
    href: "/community/",
    link: "Community work",
  },
  {
    name: "Teen mental health",
    text: "I'm president of Teen Coalition in Action, the youth arm of our county's behavioral health coalition, and I've presented our work to Florida legislators.",
    href: "/community/",
    link: "Community work",
  },
  {
    name: "Passing it on",
    text: "I run my school's research club, mentor middle schoolers through science fair, and tutor math at FAU.",
    href: "/community/",
    link: "Mentoring",
  },
  {
    name: "Hard questions",
    text: "In the lab that means piloting underwater robots in mixed reality and studying how the brain clears amyloid-beta.",
    href: "/work/",
    link: "Research",
  },
];

const offClock = [
  ["In the water", "Swimming since I was three. Varsity co-captain and FHSAA Class 2A state placer."],
  ["On stage", "Original Oratory. This year's speech is “The Convenience of Not Knowing.”"],
  ["On repeat", "Eurodance: Gigi D'Agostino, The Riddle."],
];

const now = [
  { what: "Founder", where: "ThermoVolt Marine" },
  { what: "Hardware engineering extern", where: "Aventusoft" },
  { what: "Undergraduate researcher", where: "FAU College of Engineering" },
  { what: "President", where: "Teen Coalition in Action" },
];

const focus = ["Thermoelectrics", "Embedded hardware", "Medical devices", "Underwater robotics", "Neuroscience"];

const lately: Milestone[] = [
  { date: "Nov 2026", iso: "2026-11-16", text: "Filed a provisional patent for ThermoVolt Marine with the USPTO, on my own." },
  { date: "Nov 2026", iso: "2026-11", text: "Won a Youth Service America grant for an MLK Day film project with Speak Up for Kids chapters." },
  { date: "Oct 2026", iso: "2026-10", text: "Presented TideNet as a Guy Harvey Conservation Scholar finalist at Ocean Exchange." },
  { date: "Sep 2026", iso: "2026-09", text: "Featured in Palm Beach Illustrated, “Turning the Tide.”", href: "/recognition/" },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-1.5 border-b border-hairline py-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
      <h3 className="meta pt-[3px] text-ink">{label}</h3>
      <div>{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="pb-12">
        <h1 className="sr-only">{profile.name}</h1>
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <p className="meta">
            Florida, <Clock /> ET
          </p>
          <p className="meta">Class of 2027 / FAU</p>
        </div>
        <TraceName />
        <p className="mt-8 font-serif text-[26px] leading-[1.25] tracking-[-0.01em] sm:text-[30px]">
          I build <ChipGlyph /> hardware for <WaveGlyph /> problems nobody's <ProbeGlyph /> looking at.
        </p>
        <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-hairline pt-5 sm:grid-cols-2">
          <div>
            <p className="meta mb-2">Currently</p>
            <ul className="space-y-1 text-[15px] leading-snug">
              {now.map((n) => (
                <li key={n.what}>
                  {n.what} <span className="text-muted">/ {n.where}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta mb-2">Focus</p>
            <ul className="flex flex-wrap gap-1.5">
              {focus.map((f) => (
                <li key={f} className="focus-tag">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          {profile.linkedin && (
            <li>
              <TextLink href={profile.linkedin}>LinkedIn</TextLink>
            </li>
          )}
          <li>
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          </li>
          <li>
            <TextLink href="/recognition/">Press</TextLink>
          </li>
          <li>
            <TextLink href="/cv/">CV</TextLink>
          </li>
        </ul>
      </header>

      <section aria-labelledby="hi" className="border-t border-ink py-10 sm:py-12">
        <h2 id="hi" className="font-serif text-[28px] font-[420] leading-[1.25] tracking-[-0.01em] sm:text-[32px]">
          Hi, I'm Aysel. I study electrical engineering, and I like the problems most people walk right past.
        </h2>
        <div className="mt-6 max-w-[38rem] space-y-4 text-[17px] leading-[1.7]">
          <p>
            My family is from Egypt, and Arabic was my first language; I didn't speak English until I started school.
            I skipped ahead, started college classes early, and I'm now 118 credits into an electrical engineering
            degree at Florida Atlantic University while I finish high school.
          </p>
          <p>
            I care a lot about the environment. Here's where my time goes.
          </p>
        </div>
      </section>

      <Block title="What I care about">
        <div className="border-t border-hairline">
          {cares.map((c) => (
            <Row key={c.name} label={c.name}>
              <p className="max-w-[38rem] text-[16px] leading-relaxed">{c.text}</p>
              <p className="mt-1.5 text-[14px]">
                <TextLink href={c.href}>{c.link}</TextLink>
              </p>
            </Row>
          ))}
        </div>
        <p className="mt-5 text-[14px] text-muted">{serviceHours} volunteer hours so far.</p>
      </Block>

      <Block title="Off the clock">
        <div className="border-t border-hairline">
          {offClock.map(([k, v]) => (
            <Row key={k} label={k}>
              <p className="text-[16px] leading-relaxed">{v}</p>
            </Row>
          ))}
        </div>
      </Block>

      <Block title="Lately" aside="From the notebook">
        <Ledger items={lately} />
      </Block>
    </>
  );
}
