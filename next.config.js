/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["web.poecdn.com", "www.poewiki.net"],
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
