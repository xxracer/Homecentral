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
      // "Referrals" page was removed; referral actions now go to the portal.
      {
        source: "/referrals",
        destination: "https://Central.referralflow.health",
        permanent: true,
      },
    ];
  },
  // Output as static site for production (optional; set to "export" if you want static files)
  // output: "export",
};

export default nextConfig;