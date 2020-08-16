
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/el-form-generator/'
    : '/',

  productionSourceMap: false,

  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
  }

}
