"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { attachPhotoIndex } from "@/lib/photoIndex";
import type { HomeIndex } from "@/content/home";
import { Collage, MonitorSheet, NeuroSheet, PbitSheet, TeleopSheet, ThermoVoltSheet, TideNetSheet } from "./Diagrams";

const srcFor = (key: string, photo?: boolean | string) =>
  typeof photo === "string" ? photo : photo ? `/images/home/${key}.jpg` : null;

/** An index whose rows swap the photo in a frame beside them. */
export default function PhotoIndex({ index }: { index: HomeIndex }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => (ref.current ? attachPhotoIndex(ref.current) : undefined), []);
  const n = index.items.length;

  return (
    <section ref={ref} id={index.id} aria-labelledby={`${index.id}-h`} className="pi border-t border-hairline py-10 sm:py-12">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div>
          <h2 id={`${index.id}-h`} className="font-serif text-[30px] font-[430] leading-tight tracking-[-0.012em]">
            {index.title}
          </h2>
          <p className="mt-1 text-[15px] text-muted">{index.blurb}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="meta">
            {index.ref}1–{index.ref}
            {n}
          </span>
          <Link href={index.more.href} className="more-link">
            View more <span aria-hidden className="more-arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="pi-grid">
        <div className="pi-stage">
          <div className="pi-frame">
            {index.items.map((it, i) => {
              const src = srcFor(it.key, it.photo);
              return (
                <figure key={it.key} data-frame="" className={i === 0 ? "on" : undefined} aria-hidden={i !== 0}>
                  {it.collage ? (
                    <Collage photos={it.collage} label={`${index.ref}${i + 1}`} />
                  ) : it.art === "thermovolt" ? (
                    <ThermoVoltSheet photo={it.inset} />
                  ) : it.art === "monitor" ? (
                    <MonitorSheet photo={it.inset} cutout={it.cutout} />
                  ) : it.art === "teleop" ? (
                    <TeleopSheet />
                  ) : it.art === "neuro" ? (
                    <NeuroSheet />
                  ) : it.art === "tidenet" ? (
                    <TideNetSheet photo={it.inset} />
                  ) : it.art === "pbits" ? (
                    <PbitSheet />
                  ) : it.video ? (
                    <video
                      data-video=""
                      src={it.video}
                      poster={src ?? undefined}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={it.alt ?? it.caption}
                    />
                  ) : src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={src}
                      alt={it.alt ?? it.caption}
                      loading="lazy"
                      decoding="async"
                      className={it.fit === "contain" ? "contain" : undefined}
                    />
                  ) : (
                    <div className="pi-ph">
                      <span className="meta text-ink">Photo to come</span>
                      <span className="text-[14px] leading-snug text-muted">{it.hint}</span>
                    </div>
                  )}
                </figure>
              );
            })}
            <span aria-hidden className="pi-corner meta">
              {index.ref}
            </span>
          </div>
          <div className="pi-caps">
            {index.items.map((it, i) => (
              <p key={it.key} data-cap="" hidden={i !== 0} className="text-[14px] leading-snug text-muted">
                <span className="mr-2 font-mono text-[12px] text-accent">
                  {index.ref}
                  {i + 1}
                </span>
                {it.caption}
                {it.href && (
                  <>
                    {" "}
                    <Link href={it.href} className="ulink-static text-ink">
                      More
                    </Link>
                  </>
                )}
              </p>
            ))}
          </div>
        </div>

        <ul className="pi-list">
          {index.items.map((it, i) => (
            <li key={it.key}>
              <button type="button" data-row="" aria-pressed={i === 0} className="pi-row">
                <span className="pi-ref font-mono text-[12px]">
                  {index.ref}
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block font-serif text-[20px] leading-[1.2] tracking-[-0.005em]">{it.label}</span>
                  <span className="mt-0.5 block text-[14px] leading-snug text-muted">{it.sub}</span>
                </span>
                {it.meta && <span className="pi-meta meta">{it.meta}</span>}
              </button>
            </li>
          ))}
          <li>
            <Link href={index.more.href} className="more-row">
              <span>
                View all in detail
                <span className="block text-[13px] text-muted">{index.more.label}</span>
              </span>
              <span aria-hidden className="more-arrow text-[20px]">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
