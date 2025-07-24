import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'], // ✅ tambahkan ini
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
