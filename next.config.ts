import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000, // Kiểm tra file mỗi giây
      };
    }
    return config;
  },

};

export default nextConfig;
