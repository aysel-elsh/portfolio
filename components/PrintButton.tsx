"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          window.print();
        } catch {
          // Some embedded viewers block printing; the PDF link beside this button always works.
          window.location.href = "/aysel-elshenawy-cv.pdf";
        }
      }}
      className="ulink-static cursor-pointer text-left"
    >
      Print or save as PDF
    </button>
  );
}
