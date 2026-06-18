import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    unoptimized: false,
  },
  async redirects() {
    return [
      // Old "Positions" page was renamed to "Careers".
      { source: "/positions", destination: "/careers", permanent: true },
    ];
  },
  // Output as static site for production (optional; set to "export" if you want static files)
  // output: "export",
};

export default nextConfig;