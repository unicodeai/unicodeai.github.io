/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const nextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: false, // 或者不设置这个选项
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
        port: "",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
