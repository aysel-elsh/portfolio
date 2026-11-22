import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { coursework } from "@/content/work";
import { Block, PageHead, PhotoPlate, TextLink } from "@/components/ui";
import PublicationList from "@/components/PublicationList";
import { publications } from "@/content/publications";

export const metadata: Metadata = { title: "About" };

const interests = [
  {
    area: "Thermoelectric energy recovery",
    detail: "Recovering low-grade waste heat in marine cooling systems while reducing thermal discharge, and controlling for both at once.",
  },
  {
    area: "Power and embedded hardware",
    detail: "Small power stages, buck-boost conversion and compute nodes for logging and control in harsh environments.",
  },
  {
    area: "Wearable medical devices",
    detail: "Extending continuous cardiac monitoring to multiple days without adding size or weight.",
  },
  {
    area: "Human-robot interfaces",
    detail: "Mixed-reality teleoperation of underwater vehicles.",
  },
];

const education = [
  {
    when: "In progress",
    school: "Florida Atlantic University",
    degree: "B.S. Electrical Engineering, dual enrollment",
    notes: ["118 credits completed, 26 in progress", "GPA 3.85"],
  },
  {
    when: "Class of 2027",
    school: "FAU High School",
    degree: "Full-time dual enrollment",
    notes: ["GPA 3.95 unweighted, 5.45 weighted", "National Merit Commended Scholar"],
  },
];

const skills = [
  ["Hardware design", "Schematic capture and PCB layout in KiCad, soldering, board bring-up and test, wireless charging design"],
  ["Power", "Thermoelectric generators, buck-boost conversion (LTC3119), power measurement (INA219)"],
  ["Embedded", "Arduino Portenta H7, Raspberry Pi"],
  ["Robotics and XR", "ROS, Unity, Meta Quest 3, BlueROV2"],
  ["Prototyping", "3D CAD, 3D printing"],
  ["Research methods", "Bench experiment design, statistical testing, IEEE-format technical writing, provisional patent drafting"],
];


function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
      <dt className="meta pt-[3px]">{k}</dt>
      <dd className="text-[15px] leading-relaxed">{children}</dd>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHead
        title="About"
        standfirst="Electrical engineering student working on energy hardware, embedded systems and medical devices."
      />

      {profile.portrait && <PhotoPlate n={1} photo={profile.portrait} />}

      <div className="max-w-[38rem] space-y-5 py-10 text-[17px] leading-[1.7]">
        <p>
          I'm an electrical engineering student at Florida Atlantic University, 118 credits in through dual enrollment
          while I finish FAU High School. My work sits where power electronics, embedded systems and the environment
          meet.
        </p>
        <p>
          I tend to pick problems that are easy to overlook: the heat a boat engine sends into the water, or the heart
          rhythms a short monitoring window misses. That led to{" "}
          <TextLink href="/work/thermovolt-marine/">ThermoVolt Marine</TextLink>, a thermoelectric system I designed,
          tested and filed a patent on, and to hardware work on a wearable cardiac monitor at Aventusoft. I've also
          done research in underwater robotics and neuroscience at FAU.
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <TextLink href="/cv/">Full CV</TextLink>
          <TextLink href="/work/">Projects</TextLink>
          <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
        </p>
      </div>

      <Block title="Research interests">
        <dl className="border-t border-hairline">
          {interests.map((i) => (
            <div
              key={i.area}
              className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            >
              <dt className="text-[15px] font-medium">{i.area}</dt>
              <dd className="text-[15px] leading-relaxed text-muted">{i.detail}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Education">
        <div className="border-t border-hairline">
          {education.map((e) => (
            <div
              key={e.school}
              className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
            >
              <p className="meta pt-[3px]">{e.when}</p>
              <div>
                <p className="text-[16px] font-medium">{e.school}</p>
                <p className="text-[15px] text-muted">{e.degree}</p>
                <ul className="mt-1.5 text-[14px] leading-relaxed text-muted">
                  {e.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <dl className="mt-6">
          <Row k="Fall 2026">{coursework.now.join(", ")}</Row>
          <Row k="Spring 2027">{coursework.next.join(", ")}</Row>
        </dl>
      </Block>

      <Block title="Technical skills">
        <dl className="border-t border-hairline">
          {skills.map(([k, v]) => (
            <Row key={k} k={k}>
              {v}
            </Row>
          ))}
        </dl>
      </Block>

      <Block title="Publications, presentations and patents">
        <PublicationList items={publications} />
      </Block>

      <Block title="Also">
        <dl className="border-t border-hairline">
          <Row k="Languages">English, Arabic</Row>
          <Row k="Athletics">Varsity swimmer, FHSAA Class 2A state qualifier</Row>
        </dl>
      </Block>
    </>
  );
}
