import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import SiteRail from "@/components/SiteRail";
import Colophon from "@/components/Colophon";

export const metadata: Metadata = {
  title: { default: "Aysel Elshenawy", template: "%s | Aysel Elshenawy" },
  description:
    "Electrical engineering student at Florida Atlantic University, founder of ThermoVolt Marine, and undergraduate researcher.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <div className="mx-auto max-w-[1040px] lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <SiteRail />
          <div className="px-5 sm:px-8 lg:col-span-8 lg:px-0">
            <main id="main" className="pt-10 lg:pt-14">
              {children}
            </main>
            <Colophon />
          </div>
        </div>
      </body>
    </html>
  );
}
