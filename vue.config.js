const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,//生产环境map
  devServer: {
    port: 8010, // 端口号
    host: '0.0.0.0',
    proxy: {
      // "/lanhei/": {
      //   target: "http://10.168.4.152/",
      //   changeOrigin: true,
      //   ws: false,
      //   pathRewrite: {
      //     "^/lanhei/": "lanhei/",
      //   },
      // },
    }
  }
}
)
