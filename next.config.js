// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [
      'localhost',
      'jefersonfernandes-assets.s3.sa-east-1.amazonaws.com',
      'source.unsplash.com'
    ]
  }
})
