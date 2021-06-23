const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 设计图尺寸/10
            remUnit: 192,
          }),
        ],
      },
    },
  },
}
