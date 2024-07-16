const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:  "../lms/src/main/resources/static", // 빌드 타겟 디렉토리
  devServer: {
    proxy: 'http://localhost'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/basic.scss";
          @import "@/assets/scss/common.scss";
          @import "@/assets/scss/font.scss";
          @import "@/assets/scss/layout.scss";
          @import "@/assets/scss/login.scss";
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/apexcharts.scss";
          @import "@/assets/scss/bootstrap.scss";
        `
      }
    }
  }
})
