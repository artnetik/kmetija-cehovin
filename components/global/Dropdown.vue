<template>
  <div class="dropdown">
    <n-link to="/">
      <img class="logo" src="/images/cehovin-logo.svg" alt="Kmetija Čehovin">
    </n-link>
    <div :class="['hamburger', { open }]" @click="toggle()">
      <span v-for="n in 3" :key="n" class="line" />
    </div>
    <div v-show="open" class="menu">
      <n-link
        v-for="(link, i) in $store.state.links"
        :key="i"
        :to="link.path"
        class="link"
      >
        <span @click="open = false" v-text="link.menu" />
      </n-link>

      <!-- <a
        v-for="item in languages"
        :key="item.language"
        class="secondary"
        :href="item.url"
      >
        {{ item.language }}
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    languages: {
      type: Array,
      default: () => []
    },
    activeLink: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/mixins';

.dropdown {
  font-family: 'Caveat Brush', cursive;
  text-align: center;
  font-size: 16px;
  padding: 8px 0;
  position: relative;
  width: 100%;

  @include breakpoint(medium) {
    display: none;
  }

  .logo {
    max-width: 110px;
  }
}

.secondary {
  .active {
    color: $active;
  }
}

.menu {
  justify-content: space-between;
  padding: 10px;
  transition: max-height 0.2s ease-out;
  width: 100%;
  z-index: 3;

  .link {
    color: $base;
    display: block;
    padding: 8px 18px;
    text-decoration: none;

    &.exact-active {
      color: $active;
    }
  }

  a:hover {
    color: $ascent;
  }
}

.hamburger {
  color: $base;
  font-size: 2rem;
  position: absolute;
  right: 20px;
  top: 25px;
  width: auto;

  @include breakpoint(medium) {
    display: none;
  }

  .line {
    background-color: $base;
    display: block;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    width: 26px;
    border-radius: 25%;
  }

  &.open {
    .line:nth-child(2) {
      opacity: 0;
    }

    .line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .line:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
