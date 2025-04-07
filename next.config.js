/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/mypage" : "",
  assetPrefix: isProd ? "/mypage/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
