/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'jsonkeeper.com', 'a0.muscache.com'],
  },
};

module.exports = nextConfig;
