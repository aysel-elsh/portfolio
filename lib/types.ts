export type Status =
  | "Active"
  | "Ongoing"
  | "Filed"
  | "Accepted"
  | "In design"
  | "Exploring"
  | "Completed";

/** A photo. Drop the file in /public/images and point `src` at it. */
export type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Measure = { label: string; value: string; note?: string };

export type Milestone = { date: string; iso?: string; text: string; href?: string };

export type Section = { heading: string; body: string[] };

export type Diagram = "thermovolt" | "teleop";

export type WorkEntry = {
  slug: string;
  title: string;
  role: string;
  org: string;
  period: string;
  field: string;
  status: Status;
  /** One line that says why the work matters, in plain words. */
  hook: string;
  tools: string[];
  sections: Section[];
  measures?: { caption: string; note: string; rows: Measure[] };
  milestones?: Milestone[];
  diagram?: Diagram;
  photos?: Photo[];
  links?: { label: string; href: string }[];
};

export type NotebookEntry = {
  title: string;
  context: string;
  note: string;
  status: Status;
};

export type Press = {
  outlet: string;
  title: string;
  date: string;
  iso: string;
  note: string;
  href?: string;
};

export type AwardGroup = {
  field: string;
  items: { name: string; result: string; detail?: string; year?: string; feature?: boolean }[];
};

export type Role = {
  org: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
};

export type Profile = {
  name: string;
  email: string;
  linkedin?: string;
  github?: string;
  cvPdf?: string;
  portrait?: Photo;
  candid?: Photo;
};
