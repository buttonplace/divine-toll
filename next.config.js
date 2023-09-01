/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["web.poecdn.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
