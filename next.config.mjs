/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimisations de compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimisations CSS et JS
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // Performance
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
