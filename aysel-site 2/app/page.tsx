import { profile } from "@/content/profile";
import TraceName from "@/components/TraceName";
import Clock from "@/components/Clock";
import { ChipGlyph } from "@/components/Glyphs";
import { TextLink } from "@/components/ui";
import PhotoIndex from "@/components/PhotoIndex";
import { indexes } from "@/content/home";

/** What drives the work, each tied to what I actually do about it. */


const now = [
  { what: "Founder", where: "ThermoVolt Marine" },
  { what: "Hardware engineering extern", where: "Aventusoft" },
  { what: "President", where: "Teen Coalition in Action" },
];

const focus = ["Thermoelectrics", "Embedded hardware", "Medical devices", "Underwater robotics", "Neuroscience"];



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
          I build <ChipGlyph /> hardware for problems nobody's looking at.
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
            At Florida Atlantic University I work across energy hardware, embedded systems and medical
            devices. I founded ThermoVolt Marine, have done research in two FAU labs, and
            lead youth programs in Palm Beach County. Here's all of it, in one place.
          </p>
        </div>
      </section>

      <nav aria-label="On this page" className="border-t border-hairline py-5">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
          {indexes.map((ix) => (
            <li key={ix.id}>
              <a href={`#${ix.id}`} className="ulink-static">
                <span className="mr-1.5 font-mono text-[12px] text-accent">{ix.ref}</span>
                {ix.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {indexes.map((ix) => (
        <PhotoIndex key={ix.id} index={ix} />
      ))}
    </>
  );
}
