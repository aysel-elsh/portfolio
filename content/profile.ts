import type { Profile } from "@/lib/types";

/**
 * Contact and media. To add your photos:
 *  1. Put the files in /public/images (e.g. /public/images/portrait.jpg)
 *  2. Fill in `portrait` / `candid` below with the real pixel width and height.
 */
export const profile: Profile = {
  name: "Aysel Elshenawy",
  email: "aelshenawy2023@fau.edu",
  phone: "561-825-6666",
  // Replace with your profile URL, e.g. https://www.linkedin.com/in/your-handle
  linkedin: "https://www.linkedin.com/in/aysel-elshenawy/",
  github: "https://github.com/aysel-elsh",
  cvPdf: "/aysel-elshenawy-cv.pdf",
  portrait: undefined,
  candid: undefined,
};

export const tagline = "I build hardware for problems nobody's looking at.";

/** Longer positioning, kept for meta descriptions or an About intro. */
export const positioning = {
  lead:
    "I study electrical engineering at Florida Atlantic University and founded ThermoVolt Marine, a hardware company that turns the heat boat engines dump into the ocean into electricity.",
  follow:
    "My research runs from underwater robots piloted in mixed reality to how the brain clears amyloid-beta, and outside the lab most of my time goes to foster youth and teen mental health work in Palm Beach County.",
};

export const facts = [
  { label: "Studying", value: "Electrical Engineering, FAU" },
  { label: "School", value: "FAU High School, Class of 2027" },
  { label: "Credits", value: "118 completed, 26 in progress" },
  { label: "Languages", value: "Arabic, English" },
];
