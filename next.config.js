/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : ['avatars.githubusercontent.com','lh3.googleusercontent.com','dummyimage.com','mdbcdn.b-cdn.net','google.com' ],
  },  
}

module.exports = nextConfig

