<template>
  <div class="intro">
    <div class="foto" :style="`background-color: ${bgColor}; background-image: url('/images/${photo}')`">
      <slot />
    </div>
    <div v-if="body.body.children.length" class="text-container mt-4">
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
    },
    bgColor: {
      default: '#8B8F5D',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/variables';

.intro {
  padding: 0 0 2rem;

  @include breakpoint(medium) {
    padding: 0 0 5rem;
  }
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
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

  @include breakpoint(medium) {
    padding-top: 3rem;
    font-size: 80px;
  }
}
</style>
