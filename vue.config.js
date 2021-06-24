module.exports = {
  configureWebpack: config => {},
  chainWebpack: config => {},
  productionSourceMap: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        // 'remUnit' 设计图尺寸
        plugins: [require('postcss-px2rem')({ remUnit: 192 })],
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '^/mock/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
    },
  },
}
