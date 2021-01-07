<template>
  <div class="nav-wrapper" :class="{scrolled}">
    <div class="navigation">
      <n-link to="/" class="logo">
        <img width="200" height="133" src="/images/cehovin-logo.svg" alt="Kmetija Čehovin">
      </n-link>

      <nav class="links">
        <n-link
          v-for="link in $store.state.links"
          :key="link.id"
          :to="link.menu ? link.menu.url : link.dir"
          class="link"
        >
          <div class="icon">
            <img
              :width="link.icon.width"
              :height="link.icon.height"
              :src="link.icon.src"
              :alt="link.title"
            >
          </div>
          <div
            class="label"
            v-text="link.menu ? link.menu.label : link.title "
          />
        </n-link>
      </nav>
      <!-- <div class="languages">
        <a v-for="item in languages" :key="item.language" class="lang" :href="item.url" :class="{ active: lang === item.language }">
          {{ item.language }}
        </a>
      </div> -->
    </div>
    <Dropdown
      :languages="languages"
      :lang="lang"
    />
  </div>
</template>

<script>
import { debounce } from 'vue-debounce'

export default {
  data () {
    return {
      scrollPosition: 0,
      lang: 'SLO',
      languages: [
        { language: 'SLO', url: '#' },
        { language: 'ANG', url: '#' },
        { language: 'DE', url: '#' }
      ]
    }
  },
  computed: {
    scrolled () {
      return this.scrollPosition > 80
    }
  },
  mounted () {
    this.handleDebouncedScroll = debounce(this.updateScroll, 10)
    document.addEventListener('scroll', this.handleDebouncedScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = document.scrollingElement.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/mixins';

.nav-wrapper {
  top: 0;
  position: fixed;
  background-color: rgba($white, 0.8);
  width: 100%;
  z-index: 20;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @include breakpoint('medium down') {
    display: none;
  }

  .logo {
    display: block;

    img {
      transition: height ease-in-out 250ms, padding ease-in-out 250ms;
      display: block;
      padding: 1rem 0;
    }

    .scrolled & {
      img {
        height: 90px;
        padding: 10px 0;
      }
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .link {
    color: $base;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Caveat Brush', cursive;
    font-size: 20px;
    font-weight: normal;
    padding: 0 10px;
    position: relative;
    text-align: center;
    text-decoration: none;

    .icon {
      transition: height ease-in-out 250ms;
      display: flex;
      height: 50px;
      justify-content: center;
      align-items: center;

      .scrolled & {
        height: 35px;
      }
    }

    .label {
      transition: font-size ease-in-out 250ms;
      margin-top: 10px;

      .scrolled & {
        font-size: 14px;
      }
    }

    &.exact-active::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      background-color: $ascent;
      bottom: 0;
      left: 0;
    }

    &:hover {
      color: $ascent;
    }
  }
}

// .languages {
//   font-family: 'Courier Prime', monospace;

//   .lang {
//     text-decoration: none;
//     color: $grey;
//     display: block;
//     font-size: 18px;
//     margin: 5px 0;

//     &:hover {
//       color: $ascent;
//     }

//     &.active {
//       color: $ascent;
//     }
//   }
// }
</style>
