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
          <strong>Kmetija Čehovin</strong><br>
          Dagmar in Aleš Čehovin<br>
          Brje 76 b<br>
          5263 Dobravlje - Slovenija<br>
          <br>
          Aleš: +386 41 507 675<br>
          Dagmar: +386 41 953 448<br>
          <br>
          E-mail <a href="mailto:cehovinster@gmail.com">cehovinster@gmail.com</a>
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
    font-family:
      'Courier Prime',
      monospace;
    line-height: 1.5em;
    min-height: 400px;
    place-content: center;
  }

  address {
    font-style: normal;

    a {
      color: $white;
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
