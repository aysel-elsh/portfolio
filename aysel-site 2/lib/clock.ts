/** Live Eastern-time readout. Plain DOM so it also runs outside React. */
export function attachClock(el: HTMLElement): () => void {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  const tick = () => {
    el.textContent = fmt.format(new Date());
  };
  tick();
  const id = window.setInterval(tick, 1000);
  return () => window.clearInterval(id);
}
