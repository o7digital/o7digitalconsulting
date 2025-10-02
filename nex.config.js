/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index-international-consulting',
        permanent: false, // passe à true (308) si tu veux un redirect permanent pour SEO
      },
    ];
  },
};

module.exports = nextConfig;