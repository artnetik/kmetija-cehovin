<template>
  <div class="intro">
    <div
      ref="parallax"
      :class="[photo ? 'foto' : 'title']"
      :style="bgPhoto"
    >
      <slot />
    </div>
    <div v-if="body">
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
  computed: {
    bgPhoto () {
      return this.photo ? `background-color: ${this.bgColor}; background-image: url('/images/${this.photo}')` : ''
    }
  },
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

.title {
  background-color: white !important;
  display: grid;
  align-content: end;
  padding-top: 5rem;

  @include breakpoint(medium) {
    padding-top: 8rem;
  }

  h1 {
    font-weight: normal;
    line-height: 1.2;
    color: $secondary;
    text-shadow: none;

    @include breakpoint(medium) {
      padding-top: 3rem;
      font-size: 60px;
      max-width: 700px;
    }
  }
}

h1 {
  padding: 2rem 1rem;
  font-family: 'Caveat Brush', cursive;
  font-size: 50px;
  color: #fff;
  text-align: center;
  line-height: 1;
  margin: 0 auto;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

  @include breakpoint(medium) {
    padding-top: 3rem;
    font-size: 72px;
    max-width: 700px;
  }
}
</style>
