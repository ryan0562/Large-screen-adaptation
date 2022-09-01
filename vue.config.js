const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: '/',
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
    }
  },
}
)
