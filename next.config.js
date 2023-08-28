/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["web.poecdn.com"],
  },
  async redirects() {
    return [
      {
        source: '/stash',
        destination: '/stash/currency',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
