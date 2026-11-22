export type Publication = {
  kind: "Conference" | "Patent" | "Preprint" | "Journal" | "Symposium" | "Presentation" | "Paper";
  authors: string;
  title: string;
  venue: string;
  date: string;
  iso?: string;
  status: "Accepted" | "Filed" | "Published" | "Presented" | "Presenting" | "In preparation";
  href?: string;
};

/** Papers, patents and talks, newest first. Add a link with `href` (DOI, Zenodo, etc.). */
export const publications: Publication[] = [
  {
    kind: "Conference",
    authors: "A. Elshenawy",
    title: "Dual-Objective Control of Thermoelectric Waste-Heat Recovery in Marine Raw-Water Cooling Circuits",
    venue: "2nd International Online Conference on Marine Science and Engineering (IOCMSE 2026), MDPI Sciforum, Session S1: Ocean Engineering",
    date: "Nov 2026",
    iso: "2026-11",
    status: "Presenting",
  },
  {
    kind: "Patent",
    authors: "A. Elshenawy",
    title: "ThermoVolt Marine thermoelectric waste-heat recovery system",
    venue: "U.S. provisional patent application, filed pro se. Sole inventor, 20 claims",
    date: "Nov 2026",
    iso: "2026-11-16",
    status: "Filed",
  },
  {
    kind: "Presentation",
    authors: "A. Elshenawy",
    title: "ThermoVolt Marine",
    venue: "Climate Summit Innovation Showcase, collegiate finalist",
    date: "Nov 2026",
    iso: "2026-11",
    status: "Presenting",
  },
  {
    kind: "Presentation",
    authors: "A. Elshenawy",
    title: "TVM TideNet",
    venue: "Guy Harvey Foundation Conservation Scholar Competition, Ocean Exchange 2026, finalist",
    date: "Oct 2026",
    iso: "2026-10",
    status: "Presented",
  },
  {
    kind: "Conference",
    authors: "A. Elshenawy",
    title: "ThermoVolt Marine",
    venue: "Sigma Xi International Forum on Research Excellence (IFoRE) 2026, Student Awards",
    date: "2026",
    iso: "2026",
    status: "Accepted",
  },
  {
    kind: "Preprint",
    authors: "A. Elshenawy",
    title: "ThermoVolt Marine",
    venue: "Zenodo",
    date: "2026",
    iso: "2026",
    status: "Published",
    // href: "https://doi.org/10.5281/zenodo.XXXXXXX",
  },
  {
    kind: "Symposium",
    authors: "A. Elshenawy, panel co-presenter",
    title: "Amyloid-beta clearance research",
    venue: "Graduate research symposium, Florida Atlantic University",
    date: "",
    status: "Presented",
  },
  {
    kind: "Journal",
    authors: "A. Elshenawy",
    title: "Technical article from Stockholm Junior Water Prize research",
    venue: "Florida Water Resources Journal, by invitation",
    date: "",
    status: "In preparation",
  },
  {
    kind: "Paper",
    authors: "A. Elshenawy",
    title: "ThermoVolt Marine, IEEE-format paper",
    venue: "Prepared for the MIT Undergraduate Research Technology Conference (URTC)",
    date: "",
    status: "In preparation",
  },
];
