import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: false,
  },
  // Output as static site for production (optional; set to "export" if you want static files)
  // output: "export",
};

export default nextConfig;
