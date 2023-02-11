/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fetchCache: true
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
