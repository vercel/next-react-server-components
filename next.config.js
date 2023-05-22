/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
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
