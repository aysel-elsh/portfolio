import type { Publication } from "@/content/publications";

const live = new Set(["Accepted", "Filed", "Published", "Presented", "Presenting"]);

/**
 * A reference list: numbered citations on a single trace, a via at each entry.
 * Formal type, one quiet nod to the board.
 */
export default function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ol className="pubs">
      {items.map((p, i) => (
        <li key={`${p.title}-${i}`} className="pub">
          <span className="font-mono text-[13px] text-muted tnum">[{i + 1}]</span>
          <div>
            <p className="text-[14px]">
              <span className="font-semibold">{p.authors.split(",")[0]}</span>
              {p.authors.includes(",") && <span className="text-muted">,{p.authors.split(",").slice(1).join(",")}</span>}
            </p>
            <p className="mt-0.5 font-serif text-[19px] leading-[1.3] tracking-[-0.005em]">
              {p.href ? (
                <a href={p.href} rel="noopener" className="ulink-static">
                  “{p.title}”
                </a>
              ) : (
                <>“{p.title}”</>
              )}
            </p>
            <p className="mt-1 text-[14px] italic leading-snug text-muted">
              {p.venue}
              {p.date && <span className="not-italic">, {p.date}</span>}
            </p>
          </div>
          <div className="pub-meta">
            <span className="meta">{p.kind}</span>
            <span className="meta inline-flex items-center gap-1.5 text-ink">
              <span
                aria-hidden
                className={`inline-block size-[7px] ${live.has(p.status) ? "bg-accent" : "border border-muted"}`}
              />
              {p.status}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
