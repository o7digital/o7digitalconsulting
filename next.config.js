/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/index-digital-agency',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/index-digital-agency',
        permanent: true,
      },
      {
        source: '/es',
        destination: '/es/index-digital-agency',
        permanent: true,
      },
      {
        source: '/de',
        destination: '/de/index-digital-agency',
        permanent: true,
      },
      {
        source: '/it',
        destination: '/it/index-digital-agency',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
