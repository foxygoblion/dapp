import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
    appIsrStatus: false,
  },
  onDemandEntries: {
    // 禁用页面保持活动状态
    maxInactiveAge: 0,
  },

  // 添加 Cloudflare Pages 的输出配置
  output: 'standalone',
};

export default nextConfig;
