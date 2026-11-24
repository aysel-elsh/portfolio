/** A short copper trace ending in a pad: the site's "go here" mark. */
export default function TraceArrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 26 12" className={`more-arrow inline-block h-[0.75em] w-auto ${className}`} fill="none">
      <path d="M1 6 H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="6" r="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
