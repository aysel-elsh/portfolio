/**
 * Behaviour for <PhotoIndex />: hovering, focusing or tapping a row shows its photo.
 * Plain DOM so it also runs outside React.
 */
export function attachPhotoIndex(root: HTMLElement): () => void {
  const rows = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-row]"));
  const frames = Array.from(root.querySelectorAll<HTMLElement>("[data-frame]"));
  const caps = Array.from(root.querySelectorAll<HTMLElement>("[data-cap]"));
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Only the clip in the visible frame plays; none play if the viewer prefers less motion.
  const playActive = (i: number) => {
    frames.forEach((f, k) => {
      const v = f.querySelector("video");
      if (!v) return;
      if (k === i && !still) v.play().catch(() => {});
      else v.pause();
    });
  };

  const set = (i: number) => {
    rows.forEach((r, k) => r.setAttribute("aria-pressed", String(k === i)));
    frames.forEach((f, k) => f.classList.toggle("on", k === i));
    caps.forEach((c, k) => (c.hidden = k !== i));
    playActive(i);
  };

  const off: Array<() => void> = [];
  rows.forEach((r, i) => {
    const pick = () => set(i);
    r.addEventListener("click", pick);
    r.addEventListener("focus", pick);
    off.push(() => {
      r.removeEventListener("click", pick);
      r.removeEventListener("focus", pick);
    });
    if (fine) {
      r.addEventListener("mouseenter", pick);
      off.push(() => r.removeEventListener("mouseenter", pick));
    }
  });

  playActive(0);
  return () => off.forEach((f) => f());
}
