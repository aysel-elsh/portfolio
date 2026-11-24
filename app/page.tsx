import { profile } from "@/content/profile";
import TraceName from "@/components/TraceName";
import Clock from "@/components/Clock";
import { ChipGlyph } from "@/components/Glyphs";
import { TextLink } from "@/components/ui";
import PhotoIndex from "@/components/PhotoIndex";
import { indexes } from "@/content/home";

/** What drives the work, each tied to what I actually do about it. */






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
        <h2 id="hi" className="max-w-[40rem] font-serif text-[28px] font-[650] leading-[1.15] tracking-[-0.01em] sm:text-[34px]">
          Hi, I'm Aysel. I study electrical engineering, and I like the problems most people walk right past.
        </h2>
        <p className="mt-5 max-w-[38rem] text-[17px] leading-[1.7]">
          At Florida Atlantic University, I work across energy hardware, embedded systems and medical devices. I founded
          ThermoVolt Marine, have done research in two FAU labs, and lead youth programs in Palm Beach County. Here&apos;s
          all of it, in one place.
        </p>
      </section>

      <nav aria-label="On this page" className="border-t border-hairline py-5">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
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
