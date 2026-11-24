import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { PageHead, TextLink } from "@/components/ui";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  { pin: "J1", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { pin: "J2", label: "Phone", value: profile.phone ?? "", href: profile.phone ? `tel:+1${profile.phone.replace(/\D/g, "")}` : undefined, copy: true },
  { pin: "J3", label: "LinkedIn", value: "in/aysel-elshenawy", href: profile.linkedin },
  { pin: "J4", label: "GitHub", value: "aysel-elsh", href: profile.github },
  { pin: "J5", label: "CV", value: "PDF, 3 pages", href: profile.cvPdf },
].filter((c) => c.href);

const reasons = [
  { what: "Internships", detail: "Hardware engineering roles for 2027: PCB design, power electronics, embedded systems." },
  { what: "Research", detail: "Thermoelectrics, marine energy, wearable medical devices, low-power computing." },
  { what: "ThermoVolt Marine", detail: "Pilots, marinas, vessel operators, accelerators and investors." },
  { what: "Press and speaking", detail: "Interviews, panels and student STEM events." },
  { what: "Mentoring", detail: "Students starting a research project or entering science fairs and pitch competitions." },
];

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact"
        standfirst="Always looking to connect, collaborate and grow. Reach out about hardware, research or anything I'm working on."
      />

      <section aria-label="Ways to reach me" className="mt-10">
        <div className="contact-board">
          <div aria-hidden className="mb-4 flex justify-between">
            <span className="meta text-[11px]">AE-01 / I/O</span>
            <span className="meta text-[11px]">Rev A</span>
          </div>
          <ul className="space-y-3">
            {channels.map((c) => (
              <li key={c.label} className="contact-row">
                <span aria-hidden className="contact-pin">
                  <span className="font-mono text-[11px]">{c.pin}</span>
                </span>
                <span aria-hidden className="contact-trace" />
                <div className="contact-port">
                  <span className="meta">{c.label}</span>
                  <a href={c.href} rel={c.href?.startsWith("http") ? "noopener" : undefined} className="contact-value">
                    {c.value}
                  </a>
                  {c.copy && <CopyButton text={c.value} label="Copy" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="why-h" className="mt-14">
        <h2 id="why-h" className="font-serif text-[36px] font-[680] leading-[1.02] tracking-[-0.01em]">
          Good reasons to write
        </h2>
        <dl className="mt-5 border-t border-ink">
          {reasons.map((r) => (
            <div
              key={r.what}
              className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <dt className="text-[15px] font-medium">{r.what}</dt>
              <dd className="text-[15px] leading-relaxed text-muted">{r.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 max-w-[36rem] text-[15px] leading-relaxed text-muted">
        Based in South Florida, at Florida Atlantic University. For a quick overview first, the{" "}
        <TextLink href="/cv/">CV page</TextLink> has everything on one page.
      </p>
    </>
  );
}
