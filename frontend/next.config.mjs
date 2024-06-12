/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
        domains: ['images.pexels.com']
      },
};

export default nextConfig;
