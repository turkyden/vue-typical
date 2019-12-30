module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-typical/'
  : '/'
}