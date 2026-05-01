import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.68.104'],
  images: {
    qualities: [80, 100],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.68.104',
        port: '3000',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
};

export default nextConfig;
