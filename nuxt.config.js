export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'sl'
    },
    title: 'Kmetija Čehovin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'url', property: 'og:url', content: 'https://kmetija-cehovin.si' },
      { hid: 'type', property: 'og:type', content: 'website' },
      { hid: 'description', name: 'description', content: 'Na kmetiji Čehovin se poleg vinogradništva in pridelavi vrhunskih vin posvečamo tudi drugemu sadju. V dolini imamo še nasad kakijev in češenj.' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
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

  pageTransition: {
    name: 'fade'
  },

  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  googleFonts: {
    families: {
      'Caveat+Brush': true,
      'Open+Sans': {
        wght: [400, 600]
      }
    },
    display: 'auto'
  },
  publicRuntimeConfig: {
    mapsApiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  modules: [
    '@nuxt/content',
    ['vue-scrollto/nuxt', {
      duration: 1000,
      container: 'body',
      easing: 'ease-in-out'
    }]
  ],

  content: {
    liveEdit: false
  },

  build: {
    loaders: {
      scss: { sourceMap: false }
    }
  },

  generate: {
    routes: ['/']
  }
}
