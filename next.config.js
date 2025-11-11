/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // basePath: "/pekko-nextjs",
  // assetPrefix: "/pekko-nextjs/",
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/auth",
        destination: "https://dashboard.atrch.com",
        permanent: false, // change to true if you want a 308 permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
