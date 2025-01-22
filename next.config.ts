import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
