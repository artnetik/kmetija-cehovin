import Vue from 'vue'

import * as VueGoogleMaps from 'vue2-google-maps'

export default ({ app, $config }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: $config.mapsApiKey,
      libraries: 'places'
    }
  })

  console.log($config.mapsApiKey)
}
