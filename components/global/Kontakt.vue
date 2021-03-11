<template>
  <div id="kontakt" class="kontakt">
    <div class="cell map">
      <gmap-map :center="center" :map-type-id="'roadmap'" :zoom="10">
        <gmap-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
      </gmap-map>
    </div>

    <div class="row">
      <div class="cell photo" />
      <div class="cell address">
        <div class="logo mb-2">
          <img width="220" src="/images/cehovin-logo-white.svg" alt="Kmetija Čehovin">
        </div>
        <address class="naslov">
          <slot />
        </address>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lat: 45.867199, lng: 13.827839 },

      markers: [
        { position: { lat: 45.867199, lng: 13.827839 } }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/mixins';

.kontakt {
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .cell {
    flex: 1 0 50%;
    min-width: 340px;
  }

  .address {
    background: $secondary;
    color: $white;
    display: grid;
    line-height: 1.5em;
    min-height: 400px;
    place-content: center;
    padding: 2rem 0;
    text-align: center;
  }

  address {
    font-style: normal;
    white-space: pre-wrap;

    a {
      color: $white;
    }

    p {
      margin: 0;
    }
  }

  .photo {
    background: url('/images/blocks/kontakt.jpg') no-repeat;
    background-size: cover;
    background-position: center bottom;
    min-width: 400px;

    @include breakpoint(medium) {
      min-height: 900px;
    }
  }
}

.vue-map-container {
  max-width: 100%;
  min-height: 400px;
  width: 100%;

  @include breakpoint(medium) {
    min-height: 500px;
  }
}

</style>
