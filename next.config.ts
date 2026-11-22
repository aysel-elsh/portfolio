import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deploys anywhere (Vercel, Netlify, GitHub Pages).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
