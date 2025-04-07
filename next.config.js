/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // necesario si usas <Image> de next
  },
  basePath: "/mypage", // nombre del repo
};

module.exports = nextConfig;
