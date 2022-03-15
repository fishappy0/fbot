/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/console',
        destination: '/login',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
