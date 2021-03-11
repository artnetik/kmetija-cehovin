<template>
  <img v-if="src" :src="imgSrc()" :alt="alt">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc () {
      try {
        return require(`~/content/novice/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style lang="css" scoped>
  img {
    max-width: 100%;
  }
</style>
