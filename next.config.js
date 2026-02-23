/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static export when using Lean Validation Backend (API routes require a server).
  // Set ENABLE_LEAN_BACKEND=true and deploy to Vercel for waitlist/investors/ROI APIs.
  output: process.env.ENABLE_LEAN_BACKEND === 'true' ? undefined : 'export',
  // Use .next in dev so dev server finds server manifests; use dist for production static export
  distDir: process.env.NODE_ENV === 'production' ? 'dist' : '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;
