import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};

export default nextConfig;
