<template>
  <div id="vinogradi">
    <div class="img-container">
      <div v-for="vinograd in vinogradi" :key="vinograd.name" class="icon-container">
        <div
          class="svg-icon"
          :class="{ 'svg-icon-active': showVineyard === vinograd.show }"
          @click="changeVineyard(vinograd.show)"
        >
          <img :src="vinograd.icon" :alt="`${vinograd.name}`">
        </div>
        <p class="img-label">
          {{ vinograd.name }}
        </p>
        <div class="tr" :class="{ 'tr-active': showVineyard === vinograd.show }" />
      </div>
    </div>

    <Rebisce v-show="showVineyard === 'rebisce'" />
    <Leskovca v-show="showVineyard === 'leskovca'" />
    <Rovna v-show="showVineyard === 'rovna'" />
    <Hrbec v-show="showVineyard === 'hrbec'" />
    <Hrib v-show="showVineyard === 'hrib'" />
    <Glinsek v-show="showVineyard === 'glinsek'" />
  </div>
  </div>
</template>

<script>
import Rebisce from './vineyards/Rebisce'
import Leskovca from './vineyards/Leskovca'
import Rovna from './vineyards/Rovna'
import Hrbec from './vineyards/Hrbec'
import Hrib from './vineyards/Hrib'
import Glinsek from './vineyards/Glinsek'

export default {
  components: {
    Rebisce,
    Leskovca,
    Rovna,
    Hrbec,
    Hrib,
    Glinsek
  },
  data () {
    return {
      showVineyard: 'rebisce',
      vinogradi: {
        rebisce: { name: 'Rebišče', show: 'rebisce', icon: '/images/vinogradi/rebisce.svg' },
        leskovca: { name: 'Leskovca', show: 'leskovca', icon: '/images/vinogradi/leskovca.svg' },
        rovna: { name: 'Rovna', show: 'rovna', icon: '/images/vinogradi/rovna.svg' },
        hrbec: { name: 'Hrbec', show: 'hrbec', icon: '/images/vinogradi/hrbec.svg' },
        hrib: { name: 'Hrib', show: 'hrib', icon: '/images/vinogradi/hrib.svg' },
        glinsek: { name: 'Glinšek', show: 'glinsek', icon: '/images/vinogradi/glinsek.svg' }
      }
    }
  },
  methods: {
    changeVineyard (value) {
      this.showVineyard = value
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/mixins';
@import '~assets/styles/variables';

.vinograd {
  align-items: center;
  display: flex;
  font-family: 'Curier Prime', monospace;
  height: 300px;
  justify-content: space-evenly;
  margin: 50px;
  margin-bottom: 100px;

  @include breakpoint(medium down) {
    flex-direction: column;
    height: 100%;
    margin: 30px 0 auto;
  }

  .main {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 20%;

    @include breakpoint(medium down) {
      justify-content: space-between;
      width: 80%;
    }

    .icon {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    h2 {
      font-size: 42px;
      margin: 20px 0;
    }

    h3 {
      color: $ascent;
      font-size: 22px;
      line-height: 1.2em;
      margin: 0;

      @include breakpoint(medium down) {
        font-size: 20px;
      }
    }
  }

  p {
    font-size: 18px;
    line-height: 1.5em;
    margin-left: 50px;
    margin-top: 150px;
    width: 55%;

    @include breakpoint(800px) {
      font-size: 18px;
      margin: 20px auto 40px;
      text-align: justify;
      width: 80%;
    }

    @include breakpoint(600px) {
      font-size: 14px;
      margin: 20px auto 40px;
      text-align: justify;
      width: 80%;
    }
  }
}

.img-container {
  align-items: flex-end;
  background-image: url('/images/vinograd.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  font-family: 'Curier Prime', monospace;
  height: 60vh;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 100px;

  p {
    margin-bottom: 0;
    margin-top: auto;
  }

  .img-label {
    color: $white;
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 1rem;
  }
}

.icon-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-right: 30px;

  .svg-icon {
    align-items: center;
    color: $white;
    display: flex;
    filter: grayscale(100%) brightness(200%);
    flex-direction: column;
    height: 100px;
    justify-content: center;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      filter: none;
      transform: scale(1.05);
    }

    img {
      display: block;
      height: 72px;
    }
  }

  .svg-icon-active {
    filter: none;
  }

  .tr {
    opacity: 0;
    overflow: hidden;
    padding-bottom: 30%;
    position: relative;
    width: 60%;
  }

  .tr::before {
    background: $white;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(30deg) skewX(-30deg);
    transform-origin: 0 100%;
    width: 100%;
  }

  .tr-active {
    opacity: 1;
  }
}

@include breakpoint(1000px) {
  .img-container {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    margin-top: 20px;
    padding: 0;
    padding-top: 20px;
    width: 100%;

    p {
      margin-top: 20px;
    }
  }

  .icon-container {
    justify-content: space-around;

    .svg-icon {
      img {
        height: 50px;
      }
    }

    .tr {
      display: none;
    }
  }
}

@include breakpoint(medium down) {
  .img-container {
    align-items: center;
    background-color: $ascent;
    background-image: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    margin-top: 20px;
    padding: 0;
    padding-top: 20px;
    width: 100%;
  }

  .icon-container {
    justify-content: space-around;

    .svg-icon img {
      height: 50px;
    }

    .svg-icon-active img {
      filter: brightness(30%);
    }

    .svg-icon {
      font-size: 25px;

      &:hover {
        cursor: pointer;

        img {
          filter: brightness(30%);
        }
      }
    }
  }
}
</style>
