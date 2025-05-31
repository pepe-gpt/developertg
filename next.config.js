/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // <--- это ключ
  },
}

module.exports = nextConfig
