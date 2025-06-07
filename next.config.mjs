/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
