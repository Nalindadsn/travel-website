import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"],
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};

export default nextConfig;
