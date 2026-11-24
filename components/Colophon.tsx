import { profile } from "@/content/profile";

export default function Colophon() {
  return (
    <footer className="no-print mt-16 border-t border-ink pt-6 pb-12 text-[14px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="font-serif text-[20px] leading-snug">Write to me about hardware, ocean tech or research.</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <a className="ulink-static" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            {profile.phone && (
              <li>
                <a className="ulink-static" href={`tel:+1${profile.phone.replace(/\D/g, "")}`}>
                  {profile.phone}
                </a>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <a className="ulink-static" href={profile.linkedin} rel="noopener">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
        <p className="text-muted sm:text-right">
          Set in Sofia Sans and B612 Mono, the typeface drawn for Airbus cockpit displays.
          <br />© {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
