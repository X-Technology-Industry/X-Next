/** @type {import('next').NextConfig} */
const envConfig = require('./env.json')
const environment = process.env.NODE_ENV
const nextConfig = {
  env: envConfig[environment],
  reactStrictMode: true,
}

module.exports = nextConfig
