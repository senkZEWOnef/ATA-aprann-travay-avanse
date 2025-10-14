// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true }, // ✅ don’t fail build on ESLint
  typescript: { ignoreBuildErrors: true }, // ✅ don’t fail build on TS checks
};

export default nextConfig;
