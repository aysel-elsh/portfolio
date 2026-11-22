"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

export const nav = [
  { href: "/", label: "Index" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/recognition/", label: "Recognition" },
  { href: "/community/", label: "Community" },
  { href: "/open-source/", label: "Open source" },
  { href: "/cv/", label: "CV" },
  { href: "/contact/", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? p === "/" : p.startsWith(href);
}

function NavList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <ul className="flex flex-col">
      {nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`group flex items-center gap-3 py-2 text-[15px] transition-colors ${
                active ? "text-ink" : "text-muted hover:text-accent"
              }`}
            >
              <span
                aria-hidden
                className={`h-px transition-[width,background-color] duration-200 ${
                  active ? "w-6 bg-accent" : "w-3 bg-hairline group-hover:w-6 group-hover:bg-accent"
                }`}
              />
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function Contact() {
  return (
    <ul className="space-y-1 text-[14px]">
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
      {profile.github && (
        <li>
          <a className="ulink-static" href={profile.github} rel="noopener">
            GitHub
          </a>
        </li>
      )}
    </ul>
  );
}

export default function SiteRail() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Mobile and tablet: top header */}
      <header className="no-print sticky top-0 z-20 border-b border-hairline bg-paper lg:hidden">
        <div className="flex items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="font-serif text-[20px] leading-none tracking-[-0.01em]">
            {profile.name}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="meta -mr-2 min-h-11 px-2 text-ink"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          id="mobile-nav"
          aria-label="Primary"
          hidden={!open}
          className="border-t border-hairline px-5 pb-5 pt-2 sm:px-8"
        >
          <NavList pathname={pathname} onNavigate={() => setOpen(false)} />
          <div className="mt-4 border-t border-hairline pt-4">
            <Contact />
          </div>
        </nav>
      </header>

      {/* Desktop: sticky left rail */}
      <aside className="no-print hidden lg:col-span-4 lg:block">
        <div className="sticky top-0 flex h-dvh flex-col justify-between py-14 pr-10">
          <div>
            <Link href="/" className="block font-serif text-[26px] leading-[1.1] tracking-[-0.01em]">
              {profile.name}
            </Link>
            <p className="mt-2 max-w-[15rem] text-[14px] leading-snug text-muted">
              Electrical engineering, hardware, research.
            </p>
            <nav aria-label="Primary" className="mt-10 border-t border-hairline pt-4">
              <NavList pathname={pathname} />
            </nav>
          </div>
          <div className="border-t border-hairline pt-4">
            <p className="meta mb-2">Contact</p>
            <Contact />
          </div>
        </div>
      </aside>
    </>
  );
}
