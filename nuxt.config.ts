// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css'
  ],
  plugins: [
    '~/plugins/primevue.js'
  ],
  build: {
    transpile: ['primevue']
  }
});