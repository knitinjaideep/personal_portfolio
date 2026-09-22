const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lab',
        destination: '/personal',
        permanent: true,
      },
      {
        source: '/notes',
        destination: '/personal',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
