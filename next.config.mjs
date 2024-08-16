/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          pathname: '/retsly-importd-production/test_data/listings/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  