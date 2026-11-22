import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, work } from "@/content/work";
import { ThermoVoltDrawing, TeleopDiagram } from "@/components/Diagrams";
import { Ledger, PageHead, PhotoPlate, Plate, SpecTable, StatusMark, Tags, TextLink } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWork(slug);
  return entry ? { title: entry.title, description: entry.hook } : {};
}

const diagramCaption = {
  thermovolt:
    "Side view of the system. Modules sit between the hot coolant loop and the cold seawater channel; the temperature difference across them produces power.",
  teleop: "Signal path from the operator's headset to the vehicle and back.",
};

export default async function WorkEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getWork(slug);
  if (!entry) notFound();

  const i = work.findIndex((w) => w.slug === slug);
  const next = work[(i + 1) % work.length];
  let fig = 0;

  return (
    <article>
      <PageHead title={entry.title} standfirst={entry.hook} crumb={{ href: "/work/", label: "Work" }} />

      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-b border-hairline py-6 sm:grid-cols-4">
        {[
          ["Role", entry.role],
          ["Where", entry.org],
          ["When", entry.period],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="meta">{k}</dt>
            <dd className="mt-1 text-[14px] leading-snug">{v}</dd>
          </div>
        ))}
        <div>
          <dt className="meta">Status</dt>
          <dd className="mt-1.5">
            <StatusMark status={entry.status} />
          </dd>
        </div>
      </dl>

      {entry.diagram && (
        <Plate n={++fig} caption={diagramCaption[entry.diagram]}>
          {entry.diagram === "thermovolt" ? <ThermoVoltDrawing /> : <TeleopDiagram />}
        </Plate>
      )}

      <div className="max-w-[38rem]">
        {entry.sections.map((s) => (
          <section key={s.heading} className="mt-10 first:mt-8">
            <h2 className="font-serif text-[24px] font-[450] leading-tight">{s.heading}</h2>
            <div className="prose-entry mt-3 text-[16px] leading-[1.7]">
              {s.body.map((p, k) => (
                <p key={k}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {entry.measures && (
        <div className="mt-12 max-w-[38rem]">
          <SpecTable {...entry.measures} />
        </div>
      )}

      {entry.photos?.map((p) => <PhotoPlate key={p.src} n={++fig} photo={p} />)}

      {entry.milestones && (
        <section className="mt-12">
          <h2 className="mb-4 font-serif text-[24px] font-[450] leading-tight">Record</h2>
          <Ledger items={entry.milestones} />
        </section>
      )}

      <section className="mt-12">
        <p className="meta mb-3">Tools and methods</p>
        <Tags items={entry.tools} />
      </section>

      {entry.links && entry.links.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          {entry.links.map((l) => (
            <li key={l.href}>
              <TextLink href={l.href}>{l.label}</TextLink>
            </li>
          ))}
        </ul>
      )}

      <nav aria-label="Next entry" className="mt-16 border-t border-ink pt-5">
        <p className="meta">Next entry</p>
        <Link
          href={`/work/${next.slug}/`}
          className="mt-1 inline-block font-serif text-[26px] leading-tight tracking-[-0.01em] transition-colors hover:text-accent"
        >
          {next.title}
        </Link>
      </nav>
    </article>
  );
}
