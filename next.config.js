/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : ['avatars.githubusercontent.com','lh3.googleusercontent.com', 'picsum.photos' ],
  }
}

module.exports = nextConfig
