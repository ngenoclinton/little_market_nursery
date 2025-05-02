import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn-icons-png.freepik.com',
      'img.freepik.com',
      'files.oaiusercontent.com',
      'food.sasakonnect.net',
      'i.bb.co',
      'ke.jumia.is',
      's.alicdn.com',
      'via.placeholder.com',
      'placehold.co',
      'www.w3.org',
      'unsplash.com',
      'images.unsplash.com',
      'pelletsdata.co.ke',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
