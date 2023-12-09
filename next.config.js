/** @type {import('next').NextConfig} */
const envConfig = require('./env.json')
const environment = process.env.NODE_ENV
const nextConfig = {
  env: envConfig[environment],
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './utils/ImageProcess.ts',
    // unoptimized: true,
    minimumCacheTTL: 60,
    deviceSizes: [640, 1080, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ];
  }
}

module.exports = nextConfig
