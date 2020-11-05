
const rewrites = [
  process.env.NODE_ENV === 'development'
    ? {
        source: '/studio/:path*',
        destination: 'http://localhost:3333/studio/:path*',
      }
    : { source: '/studio/(.*)', destination: '/studio/index.html' },
]
module.exports = {
  rewrites: () => rewrites,
}
