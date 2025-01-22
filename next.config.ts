import type { NextConfig } from "next";
import { FlatCompat } from "@eslint/eslintrc";

const nextConfig: NextConfig = {
  /* config options here */ rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};

export default nextConfig;
