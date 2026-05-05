/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/trinity-courses-app',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/trinity-courses-app',
  },
};
module.exports = nextConfig;
