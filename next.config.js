/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/news/1'
      }
    ]
  }
}

module.exports = nextConfig
