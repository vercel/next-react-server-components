module.exports = {
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
