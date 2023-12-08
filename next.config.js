/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["web.poecdn.com", "www.poewiki.net"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/newleague/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
