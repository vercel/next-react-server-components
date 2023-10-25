/** @type {import('next').NextConfig} */
const nextConfig = {
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
