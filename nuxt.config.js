export default {
  target: 'static',
  head: {
    title: 'Kmetija Čehovin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Courier+Prime:wght@400;700&display=swap'
      }
    ]
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  },

  plugins: [
    { src: '~/plugins/google-maps.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxt/content',
    ['vue-scrollto/nuxt', {
      duration: 1000,
      container: 'body',
      easing: 'ease-in-out'
    }]
  ],

  generate: {
    routes: ['/']
  }
}
