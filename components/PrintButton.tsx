"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          window.print();
        } catch {
          /* printing blocked in some embedded viewers */
        }
      }}
      className="ulink-static cursor-pointer text-left"
    >
      Print or save as PDF
    </button>
  );
}
