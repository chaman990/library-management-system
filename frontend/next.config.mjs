/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:"",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", // <----- THIS IS THE ISSUE
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
