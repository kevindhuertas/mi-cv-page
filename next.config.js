/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/mypage" : "";

const nextConfig = {
  output: "export",
  basePath: basePath, // Aplica /mypage solo en producción
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  },
};

module.exports = nextConfig;
