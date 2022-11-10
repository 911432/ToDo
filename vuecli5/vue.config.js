const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all',
  },
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    },
  }
})
