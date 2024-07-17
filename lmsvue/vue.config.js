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
          @import "@/assets/css/admin.scss";
        `
      }
    }
  }
})
