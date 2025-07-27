const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // Add this for GitHub Pages deployment
  publicPath: process.env.NODE_ENV === 'production'
    ? '/syahirahmarsan/'  // Must match your repository name
    : '/',
  
  // Keep your existing Bootstrap-Vue configuration
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join('\n')
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
      }
    }
  }
})