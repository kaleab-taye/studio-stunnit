/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    url: 'http://localhost:3001/api',
  }
}

module.exports = nextConfig
