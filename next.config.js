/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use .next in dev so dev server finds server manifests; use dist for production static export
  distDir: process.env.NODE_ENV === 'production' ? 'dist' : '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
