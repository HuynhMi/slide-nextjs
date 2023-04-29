/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t.commonsupport.com",
        pathname: "/modrox/images/main-slider/**",
      },
    ],
  },
};

module.exports = nextConfig;
