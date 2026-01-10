import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: true },
  turbopack: {},
};

export default nextConfig;
