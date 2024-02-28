/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.meesho.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
