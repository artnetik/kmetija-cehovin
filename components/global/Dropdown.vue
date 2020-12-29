<template>
  <div class="dropdown">
    <img src="/images/cehovin-logo.svg" alt="Kmetija Čehovin">
    <div :class="['hamburger', { open }]" @click="toggle()">
      <span v-for="n in 3" :key="n" class="line" />
    </div>
    <div v-show="open" class="menu">
      <ul class="menu-item">
        <a v-for="(link, i) in links" :key="i" :href="link.url" class="link">
          <li :class="{ active: activeLink === link.name }">
            {{ link.name }}
          </li></a>
      </ul>
      <ul class="menu-item">
        <a
          v-for="item in languages"
          :key="item.language"
          class="secondary"
          :href="item.url"
        >
          <li :class="{ active: lang === item.language }">
            {{ item.language }}
          </li></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    },
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
  padding: 15px 0;
  position: relative;
  width: 100%;

  @include breakpoint(medium) {
    display: none;
  }

  img {
    margin-left: 20px;
    width: 150px;
  }
}

.secondary {
  font-family: 'Courier Prime', monospace;
  font-size: 14px;

  .active {
    color: $active;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  transition: max-height 0.2s ease-out;
  width: 100%;
  z-index: 3;

  ul {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  a {
    color: $base;
    display: block;
    font-family: LLRG, monospace;
    padding: 10px 20px;
    text-decoration: none;

    .active {
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
  right: 10px;
  top: 25px;
  width: auto;

  @include breakpoint(medium) {
    display: none;
  }

  .line {
    background-color: $base;
    display: block;
    height: 3px;
    margin: 6px auto;
    transition: all 0.3s ease-in-out;
    width: 28px;
  }

  &.open {
    .line:nth-child(2) {
      opacity: 0;
    }

    .line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .line:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
