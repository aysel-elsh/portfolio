import type { Metadata } from "next";
import { github, repos, type Repo } from "@/content/opensource";
import { Block, PageHead, TextLink } from "@/components/ui";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = { title: "Open source" };

const langColor: Record<Repo["language"], string> = {
  Python: "#3572a5",
  TypeScript: "#0f4c81",
  C: "#52565e",
  Markdown: "#c27a2c",
};

function Status({ s }: { s: Repo["status"] }) {
  const live = s === "Released" || s === "Live";
  return (
    <span className="meta inline-flex items-center gap-2 text-ink">
      <span aria-hidden className={`inline-block size-[7px] ${live ? "bg-accent" : "border border-muted"}`} />
      {s}
    </span>
  );
}

function Featured({ r, n }: { r: Repo; n: number }) {
  return (
    <article className="os-card">
      <header className="os-head">
        <span className="font-mono text-[12px] text-accent">R{n}</span>
        <a href={r.url} rel="noopener" className="os-path">
          <span className="text-muted">aysel-elsh/</span>
          {r.name}
        </a>
        <Status s={r.status} />
      </header>

      <div className="px-4 pb-5 pt-4 sm:px-5">
        <p className="font-serif text-[22px] leading-[1.25] tracking-[-0.005em]">{r.summary}</p>
        <p className="mt-2 max-w-[38rem] text-[15px] leading-relaxed text-muted">{r.why}</p>

        <dl className="os-facts">
          {r.facts.map((f) => (
            <div key={f.label}>
              <dt className="meta">{f.label}</dt>
              <dd className="tnum mt-0.5 text-[15px]">{f.value}</dd>
            </div>
          ))}
        </dl>

        {r.snippet && (
          <figure className="os-code">
            <div className="os-code-bar">
              <figcaption className="text-[13px] text-muted">{r.snippet.caption}</figcaption>
              <CopyButton text={r.snippet.code} />
            </div>
            <pre>
              <code>{r.snippet.code}</code>
            </pre>
          </figure>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li className="meta inline-flex items-center gap-1.5 text-ink">
              <span aria-hidden className="inline-block size-[9px] rounded-full" style={{ background: langColor[r.language] }} />
              {r.language}
            </li>
            {r.license && <li className="meta">{r.license} license</li>}
            {r.topics.map((t) => (
              <li key={t} className="meta">
                {t}
              </li>
            ))}
          </ul>
          <a href={r.url} rel="noopener" className="more-link">
            View on GitHub <span aria-hidden className="more-arrow">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function OpenSource() {
  const featured = repos.filter((r) => r.featured);
  const rest = repos.filter((r) => !r.featured);
  return (
    <>
      <PageHead
        title="Open source"
        standfirst="Small, useful tools from my hardware and research work, published with tests and a license so other people can build on them."
      />

      <p className="mt-6 text-[15px]">
        Everything lives at <TextLink href={github}>github.com/aysel-elsh</TextLink>. ThermoVolt&apos;s core design stays
        private while the patent is pending; what&apos;s here is the general-purpose tooling around it.
      </p>

      <Block title="Libraries and experiments" aside={`R1–R${featured.length}`}>
        <div className="space-y-8">
          {featured.map((r, i) => (
            <Featured key={r.name} r={r} n={i + 1} />
          ))}
        </div>
      </Block>

      <Block title="Other repositories">
        <ul className="border-t border-ink">
          {rest.map((r) => (
            <li key={r.name}>
              <a
                href={r.url}
                rel="noopener"
                className="group -mx-3 grid grid-cols-1 gap-x-6 gap-y-1.5 border-b border-hairline px-3 py-4 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,1fr)_8rem]"
              >
                <div>
                  <p className="font-mono text-[14px] transition-colors group-hover:text-accent">
                    <span className="text-muted">aysel-elsh/</span>
                    {r.name}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed">{r.summary}</p>
                  <p className="mt-1 text-[14px] text-muted">{r.why}</p>
                </div>
                <div className="flex flex-row items-start gap-4 sm:flex-col sm:items-end sm:gap-1.5">
                  <Status s={r.status} />
                  <span className="meta inline-flex items-center gap-1.5">
                    <span aria-hidden className="inline-block size-[9px] rounded-full" style={{ background: langColor[r.language] }} />
                    {r.language}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Block>
    </>
  );
}
