"use client";

/** Copies text to the clipboard and confirms in place. */
export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  return (
    <button
      type="button"
      data-copy={text}
      data-label={label}
      className="copy-btn meta"
      onClick={async (e) => {
        const btn = e.currentTarget;
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = "Copied";
        } catch {
          btn.textContent = "Select and copy";
        }
        window.setTimeout(() => (btn.textContent = label), 1600);
      }}
    >
      {label}
    </button>
  );
}
