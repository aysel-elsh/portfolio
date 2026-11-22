import type { Metadata } from "next";
import { coursework, notebook, work } from "@/content/work";
import WorkIndex from "@/components/WorkIndex";
import { Block, PageHead, StatusMark } from "@/components/ui";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHead
        title="Engineering and research"
        standfirst="Energy hardware, robotics, medical devices and neuroscience. Each entry opens to what I built and where it stands."
      />

      <Block title="Entries" aside={`${work.length} with full write-ups`}>
        <WorkIndex entries={work} />
      </Block>

      <Block title="Shorter notes">
        <ul className="border-t border-hairline">
          {notebook.map((n) => (
            <li
              key={n.title}
              className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[minmax(0,1fr)_9rem]"
            >
              <div>
                <h3 className="text-[16px] font-medium">{n.title}</h3>
                <p className="meta mt-0.5">{n.context}</p>
                <p className="mt-2 max-w-[36rem] text-[15px] leading-relaxed text-muted">{n.note}</p>
              </div>
              <div className="sm:pt-1 sm:text-right">
                <StatusMark status={n.status} />
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Coursework" aside="Fall 2026 / Spring 2027">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="meta mb-2">This semester</p>
            <ul className="space-y-1 text-[15px]">
              {coursework.now.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta mb-2">Next semester</p>
            <ul className="space-y-1 text-[15px]">
              {coursework.next.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Block>
    </>
  );
}
