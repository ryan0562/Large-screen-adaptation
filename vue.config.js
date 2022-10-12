const { defineConfig } = require('@vue/cli-service')
// const path = require('path')

module.exports = defineConfig({
  publicPath: '/',

  configureWebpack: config => {
    return {
      experiments: {
        topLevelAwait: true
      },
      externals: {
        vue: 'Vue',
      },
    }
  },
  // chainWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.output.filename('js/[name].js').end();
  //     config.output.chunkFilename('js/[name].js').end();
  //     // 修改生产配置
  //     config.plugin('extract-css').tap(args => [{
  //       filename: `css/[name].css`,
  //       chunkFilename: `css/[name].css`
  //     }])
  //   }
  // },
  productionSourceMap: false,//生产环境map
  devServer: {
    port: 8010, // 端口号
    host: '0.0.0.0',
    proxy: {
      "/shjspj": {
        target: "http://10.168.4.152:9080",
        changeOrigin: true,
        pathRewrite: {
          "^/lanhei": "",
        },
      },
      "/mock": {
        target: "http://127.0.0.1:4523/m1/1682092-0-default",
        changeOrigin: true,
        pathRewrite: {
          "^/mock": "",
        },
      },
      "/api": {
        target: "http://10.168.4.210:9999/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    }
  },
}
)
