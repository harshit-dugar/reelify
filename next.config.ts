import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  }
};

export default nextConfig;

// next.config.js
module.exports = {
  env: {
    NEXT_IMAGEKIT_PUBLIC_KEY: process.env.NEXT_IMAGEKIT_PUBLIC_KEY,
    NEXT_PUBLIC_URL_ENDPOINT: process.env.NEXT_PUBLIC_URL_ENDPOINT,
  },
};
