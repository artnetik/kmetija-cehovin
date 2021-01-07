<template>
  <div class="intro">
    <div ref="parallax" class="foto" :style="`background-color: ${bgColor}; background-image: url('/images/${photo}')`">
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
    speedFactor: {
      default: 0.5,
      type: Number
    },
    bgColor: {
      default: '#8B8F5D',
      type: String
    }
  },
  data: () => ({
    el: null
  }),
  mounted () {
    this.el = this.$refs.parallax
    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (f) {
          setTimeout(f, 1000 / 60)
        }
    document.addEventListener('scroll', this.scrollHandler)
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollHandler)
  },

  methods: {
    animateElement () {
      const animationValue = Math.floor(document.scrollingElement.scrollTop * this.speedFactor)
      this.el.style.backgroundPositionY = `${animationValue}px`
    },

    scrollHandler () {
      window.requestAnimationFrame(() => {
        if (this.isInView(this.el)) {
          this.animateElement()
        }
      })
    },

    isInView (el) {
      const rect = el.getBoundingClientRect()

      return (
        rect.bottom >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
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
  background-repeat: no-repeat;
  background-position-y: 0;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  display: grid;
  align-content: center;
  will-change: background-position-y;
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
