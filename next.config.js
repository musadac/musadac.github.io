/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/github-pages" : "", // Set basePath only in production
  assetPrefix: process.env.NODE_ENV === "production" ? "/github-pages/" : "", // Ensure assets load correctly
  trailingSlash: true, // Needed for GitHub Pages
  output: "export",
};

module.exports = nextConfig;
