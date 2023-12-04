/** @type {import("next").NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const path = require("path");

const nextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  // trailingSlash: false, // 或者不设置这个选项
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   reactRoot: true, // 启用 "use client" 指令
  // },
  // i18n: {
  //   locales: ['en-US', 'fr', 'nl-NL'],
  //   defaultLocale: 'en-US',
  // },
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: ""
      }
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 修改输出路径
    // if (!dev) {
    //   config.output.publicPath = "/_next/";
    //   config.output.path = path.join(__dirname, "dist", "");
    // }

    return config;
  }
};

module.exports = withContentlayer(nextConfig);
