/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
