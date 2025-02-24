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
  // 优化构建输出
  experimental: {
    optimizeCss: true, // 启用 CSS 优化
  },
  // 配置 webpack 以优化构建大小
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // 生产环境非服务器端构建优化
      Object.assign(config.optimization.splitChunks.cacheGroups, {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      });

      // 启用压缩
      config.optimization.minimize = true;
    }
    return config;
  },
};

export default nextConfig;
