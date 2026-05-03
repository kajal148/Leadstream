/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aquabrother.co.nz',
      },
    ],
  },
}

module.exports = nextConfig
