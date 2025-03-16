/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/github-pages" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/github-pages/" : "",
  trailingSlash: true,
  output: "export",
  distDir: "out" // Ensures Next.js exports files to "out/"
};

module.exports = nextConfig;
