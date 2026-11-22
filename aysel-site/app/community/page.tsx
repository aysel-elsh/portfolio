import type { Metadata } from "next";
import { roles, serviceHours } from "@/content/community";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Community" };

export default function Community() {
  return (
    <>
      <PageHead
        title="Leadership and community"
        standfirst={`${serviceHours} volunteer hours, most of them with foster youth and teen mental health programs in Palm Beach County.`}
      />

      <ul className="mt-4">
        {roles.map((r) => (
          <li
            key={r.org}
            className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-hairline py-8 sm:grid-cols-[minmax(0,5fr)_minmax(0,8fr)]"
          >
            <div>
              <h2 className="font-serif text-[22px] font-[450] leading-snug tracking-[-0.005em]">{r.org}</h2>
              <p className="mt-1 text-[14px] leading-snug text-muted">{r.role}</p>
              {(r.period || r.hours) && (
                <p className="meta mt-2">{[r.period, r.hours].filter(Boolean).join(" / ")}</p>
              )}
            </div>
            <div>
              <p className="text-[15px] leading-relaxed">{r.summary}</p>
              {r.points.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="grid grid-cols-[1rem_minmax(0,1fr)] text-[15px] leading-relaxed text-muted">
                      <span aria-hidden className="mt-[0.8em] block h-px w-2 bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
