<template>
  <div class="intro">
    <div class="foto" :style="`background-image: url('/images/${photo}')`">
      <slot />
    </div>
    <div class="text-container mt-4">
      <nuxt-content :document="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      default: () => {},
      type: Object
    },
    photo: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/variables';

.intro {
  padding: 0 0 5rem;
}

.foto {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  display: grid;
  align-content: center;

  @include breakpoint(medium) {
    min-height: 80vh;
  }
}

h1 {
  padding-top: 2rem;
  font-family: 'Caveat Brush', cursive;
  font-size: 50px;
  color: #fff;
  text-align: center;

  @include breakpoint(medium) {
    padding-top: 3rem;
    font-size: 80px;
  }
}
</style>
