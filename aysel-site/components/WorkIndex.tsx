import Link from "next/link";
import type { WorkEntry } from "@/lib/types";
import { StatusMark } from "./ui";

/** Dossier-style index. Each row is one link to the entry's page. */
export default function WorkIndex({ entries }: { entries: WorkEntry[] }) {
  return (
    <ul className="border-t border-ink">
      {entries.map((w) => (
        <li key={w.slug} className="border-b border-hairline">
          <Link
            href={`/work/${w.slug}/`}
            className="group -mx-3 grid grid-cols-1 gap-x-6 gap-y-2 px-3 py-5 transition-colors duration-150 hover:bg-surface sm:grid-cols-[minmax(0,1fr)_9rem]"
          >
            <div>
              <p className="meta">
                {w.field} / {w.org}
              </p>
              <h3 className="mt-1.5 font-serif text-[24px] font-[450] leading-tight tracking-[-0.01em] transition-colors group-hover:text-accent">
                {w.title}
              </h3>
              <p className="mt-1.5 max-w-[36rem] text-[15px] leading-relaxed text-muted">{w.hook}</p>
            </div>
            <div className="flex flex-row items-start gap-4 sm:flex-col sm:items-end sm:gap-1.5 sm:pt-1 sm:text-right">
              <StatusMark status={w.status} />
              <span className="meta">{w.role}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
