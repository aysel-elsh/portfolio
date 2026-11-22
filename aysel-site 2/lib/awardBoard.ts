/** Legend filter for <AwardBoard />. Plain DOM so it also runs outside React. */
export function attachAwardBoard(root: HTMLElement): () => void {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-f]"));
  const chips = Array.from(root.querySelectorAll<HTMLElement>("[data-cat]"));

  const apply = (f: string) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.f === f)));
    chips.forEach((c) => c.classList.toggle("dim", f !== "all" && c.dataset.cat !== f));
  };

  const handlers = buttons.map((b) => {
    const h = () => apply(b.getAttribute("aria-pressed") === "true" && b.dataset.f !== "all" ? "all" : b.dataset.f || "all");
    b.addEventListener("click", h);
    return h;
  });

  return () => buttons.forEach((b, i) => b.removeEventListener("click", handlers[i]));
}
