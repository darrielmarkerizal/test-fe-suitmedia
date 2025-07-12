/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "assets.suitdev.com",
      },
      {
        protocol: "https",
        hostname: "suitmedia.static-assets.id",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
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
