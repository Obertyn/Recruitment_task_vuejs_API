const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    experiments: { topLevelAwait: true },
  },
  transpileDependencies: true,
  devServer: {
	 proxy: 'https://pro-api.coinmarketcap.com/'
 },
})


