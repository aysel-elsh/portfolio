import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { coursework, work } from "@/content/work";
import { awards } from "@/content/recognition";
import { roles, serviceHours } from "@/content/community";
import { PageHead, TextLink } from "@/components/ui";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = { title: "CV" };

function Row({ when, title, sub, children }: { when: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
      <p className="meta pt-[3px]">{when}</p>
      <div>
        <p className="text-[15px] font-medium leading-snug">{title}</p>
        {sub && <p className="text-[14px] text-muted">{sub}</p>}
        {children && <div className="mt-1.5 text-[14px] leading-relaxed text-muted">{children}</div>}
      </div>
    </div>
  );
}

function Part({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 break-inside-avoid-page">
      <h2 className="border-b border-ink pb-2 font-serif text-[22px] font-[450]">{title}</h2>
      {children}
    </section>
  );
}

const skills = [
  ["Hardware", "Schematic capture and PCB layout (KiCad), soldering, board bring-up and test, power electronics, wireless charging"],
  ["Embedded and robotics", "Portenta H7, Raspberry Pi, ROS, Unity, Meta Quest 3, BlueROV2"],
  ["Research", "Experimental design, statistical analysis, technical writing in IEEE format, provisional patent drafting"],
  ["Languages", "English, Arabic"],
];

export default function CV() {
  return (
    <>
      <PageHead title="Curriculum vitae" standfirst={`${profile.name}. Electrical engineering, hardware, research.`} />

      <div className="no-print mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
        <PrintButton />
        {profile.cvPdf && <TextLink href={profile.cvPdf}>Download PDF</TextLink>}
        <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
      </div>

      <Part title="Education">
        <Row when="In progress" title="Florida Atlantic University" sub="B.S. Electrical Engineering, dual enrollment">
          118 credits completed, 26 in progress. Current: {coursework.now.join(", ")}.
        </Row>
        <Row when="Class of 2027" title="FAU High School" sub="Full-time dual enrollment">
          National Merit Commended Scholar.
        </Row>
      </Part>

      <Part title="Engineering and research">
        {work.map((w) => (
          <Row key={w.slug} when={w.period} title={`${w.title}, ${w.role}`} sub={w.org}>
            {w.hook}
          </Row>
        ))}
      </Part>

      <Part title="Patents and publications">
        <Row when="Nov 2026" title="Provisional patent application, ThermoVolt Marine" sub="USPTO, filed pro se. Sole inventor, 20 claims." />
        <Row
          when="Nov 2026"
          title="Dual-Objective Control of Thermoelectric Waste-Heat Recovery in Marine Raw-Water Cooling Circuits"
          sub="IOCMSE 2026, abstract accepted"
        />
        <Row when="2026" title="ThermoVolt Marine preprint" sub="Zenodo" />
        <Row when="2026" title="Abstract, Sigma Xi IFoRE Student Awards" sub="Accepted" />
        <Row when="In progress" title="Technical article" sub="Florida Water Resources Journal, by invitation" />
      </Part>

      <Part title="Awards">
        {awards.flatMap((g) => g.items.filter((a) => !a.name.startsWith("FAU High") && a.name !== "Florida Atlantic University")).map((a) => (
          <Row key={a.name} when={a.year ?? ""} title={`${a.result}, ${a.name}`} sub={a.detail} />
        ))}
      </Part>

      <Part title={`Leadership and service (${serviceHours} hours)`}>
        {roles.map((r) => (
          <Row key={r.org} when={r.period} title={`${r.role}, ${r.org}`}>
            {r.summary}
          </Row>
        ))}
      </Part>

      <Part title="Skills">
        <dl>
          {skills.map(([k, v]) => (
            <div key={k} className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
              <dt className="meta pt-[3px]">{k}</dt>
              <dd className="text-[14px] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </Part>
    </>
  );
}
