import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Next.js 15+에서 외부 호스트 접근을 허용하기 위한 설정 (live preview)
    serverActions: {
      allowedOrigins: ["*"]
    }
  }
};

export default nextConfig;
