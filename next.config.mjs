/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.suitdev.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "suitmedia.static-assets.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://suitmedia-backend.suitdev.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
