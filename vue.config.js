module.exports = {
  configureWebpack: () => ({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        scss_vars: '@/assets/styles/scss/vars.scss',
        scss_common: '@/assets/styles/scss/common.scss',
      },
    },
  }),
  productionSourceMap: false,
  // devServer: {
  //   open: true, // 是否自动弹出浏览器页面
  //   host: '0.0.0.0',
  //   port: '8888',
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     '/api': { // search为转发路径
  //       target: 'http://localhostL:6789', // 目标地址
  //       ws: true, // 是否代理websockets
  //       changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL`,·
  //       pathRewrite: {
  //         '^/api': '/',
  //       },
  //     },
  //   },
  // },
};
