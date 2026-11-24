import Link from "next/link";
import type { ReactNode } from "react";
import type { Measure, Milestone, Photo, Status } from "@/lib/types";

/** Page opener: serif title, optional standfirst. */
export function PageHead({ title, standfirst, crumb }: { title: string; standfirst?: string; crumb?: { href: string; label: string } }) {
  return (
    <header className="border-b border-hairline pb-10">
      {crumb && (
        <p className="meta mb-6">
          <Link href={crumb.href} className="ulink">
            {crumb.label}
          </Link>
        </p>
      )}
      <h1 className="font-serif text-[48px] font-[700] leading-[0.98] tracking-[-0.015em] sm:text-[64px]">
        {title}
      </h1>
      {standfirst && (
        <p className="mt-5 max-w-[34rem] text-[19px] leading-[1.5] text-muted sm:text-[21px]">
          {standfirst}
        </p>
      )}
    </header>
  );
}

/** Section within a page: heading on its own line, hairline above. */
export function Block({ title, aside, children, id }: { title: string; aside?: ReactNode; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="border-b border-hairline py-10 last:border-b-0 sm:py-12">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 className="font-serif text-[36px] font-[680] leading-[1.02] tracking-[-0.01em]">{title}</h2>
        {aside && <div className="meta">{aside}</div>}
      </div>
      {children}
    </section>
  );
}

export function StatusMark({ status }: { status: Status }) {
  const live = status === "Active" || status === "Ongoing" || status === "Filed" || status === "Accepted";
  return (
    <span className="meta inline-flex items-center gap-2 whitespace-nowrap">
      <span
        aria-hidden
        className={`inline-block size-[7px] ${live ? "bg-accent" : "border border-muted"}`}
      />
      {status}
    </span>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:|^mailto:/.test(href);
  if (external) {
    return (
      <a href={href} className="ulink-static" rel={href.startsWith("http") ? "noopener" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="ulink-static">
      {children}
    </Link>
  );
}

export function SpecTable({ caption, note, rows }: { caption: string; note: string; rows: Measure[] }) {
  return (
    <table className="w-full border-collapse text-[15px]">
      <caption className="pb-3 text-left">
        <span className="meta">{caption}</span>
      </caption>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-t border-hairline">
            <th scope="row" className="py-3 pr-4 text-left font-normal">
              {r.label}
            </th>
            <td className="tnum whitespace-nowrap py-3 text-right font-mono text-[15px] text-ink">{r.value}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t border-ink">
          <td colSpan={2} className="pt-2 text-[13px] text-muted">
            {note}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export function Ledger({ items }: { items: Milestone[] }) {
  return (
    <ol className="border-t border-hairline">
      {items.map((m, i) => (
        <li
          key={i}
          className="grid grid-cols-1 gap-1 border-b border-hairline py-3.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6"
        >
          {m.iso ? (
            <time dateTime={m.iso} className="meta pt-[3px]">
              {m.date}
            </time>
          ) : (
            <span className="meta pt-[3px]">{m.date}</span>
          )}
          <span className="text-[15px] leading-relaxed">
            {m.href ? <TextLink href={m.href}>{m.text}</TextLink> : m.text}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** A numbered plate: photo or drawing with a caption, lab-notebook style. */
export function Plate({ n, caption, children }: { n: number; caption: string; children: ReactNode }) {
  return (
    <figure className="my-10">
      <div className="border border-hairline bg-paper">{children}</div>
      <figcaption className="mt-3 grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 text-[14px] leading-snug text-muted">
        <span className="meta pt-[2px] text-ink">Fig. {n}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export function PhotoPlate({ n, photo }: { n: number; photo: Photo }) {
  return (
    <Plate n={n} caption={photo.caption}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </Plate>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {items.map((t) => (
        <li key={t} className="meta">
          {t}
        </li>
      ))}
    </ul>
  );
}
