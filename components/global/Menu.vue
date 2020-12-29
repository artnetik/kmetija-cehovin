<template>
  <div class="nav-wrapper">
    <div class="navigation">
      <n-link to="/" class="logo">
        <img src="/images/cehovin-logo.svg" alt="Kmetija Čehovin">
      </n-link>

      <div class="links">
        <n-link
          v-for="link in links"
          :key="link.label"
          :to="link.url"
          class="link"
          @click.prevent="activate(link.name)"
        >
          <div class="icon">
            <img :src="link.icon" :alt="link.label">
          </div>
          <div class="label">
            {{ link.label }}
          </div>
        </n-link>
      </div>
      <!-- <div class="languages">
        <a v-for="item in languages" :key="item.language" class="lang" :href="item.url" :class="{ active: lang === item.language }">
          {{ item.language }}
        </a>
      </div> -->
    </div>
    <Dropdown
      :links="links"
      :languages="languages"
      :active-link="activeLink"
      :lang="lang"
    />
  </div>
</template>

<script>
import Dropdown from './Dropdown'
export default {
  components: {
    Dropdown
  },
  data () {
    return {
      activeLink: '',
      lang: 'SLO',
      links: [
        {
          label: 'Kmetija',
          url: '/',
          icon: '/icons/kmetija.svg'
        },
        {
          label: 'Vino',
          url: '/vino',
          icon: '/icons/vino.svg'
        },
        {
          label: 'Sadje',
          url: '/sadje',
          icon: '/icons/sadje.svg'
        },
        {
          label: 'Turizem',
          url: '/turizem',
          icon: '/icons/turizem.svg'
        },
        {
          label: 'Ponudba',
          url: '/ponudba',
          icon: '/icons/ponudba.svg'
        },
        {
          label: 'Novice',
          url: '/novice',
          icon: '/icons/novice.svg'
        },
        {
          label: 'Kontakt',
          url: '/kontakt',
          icon: '/icons/kontakt.svg'
        }
      ],
      languages: [
        { language: 'SLO', url: '#' },
        { language: 'ANG', url: '#' },
        { language: 'DE', url: '#' }
      ]
    }
  },
  methods: {
    activate (name) {
      this.activeLink = name
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
  background-color: rgba($white, 0.9);
  width: 100%;
  z-index: 20;

  &.is-fixed {
    position: fixed;
  }
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;

  @include breakpoint('medium down') {
    display: none;
  }

  .logo {
    display: block;

    img {
      display: block;
      width: 200px;
      padding: 1rem 0;
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
    font-family: 'Courier Prime', monospace;
    font-size: 18px;
    font-weight: bold;
    padding: 0 10px;
    position: relative;
    text-align: center;
    text-decoration: none;

    .icon {
      display: flex;
      height: 60px;
      justify-content: center;
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

.languages {
  font-family: 'Courier Prime', monospace;

  .lang {
    text-decoration: none;
    color: $grey;
    display: block;
    font-size: 18px;
    margin: 5px 0;

    &:hover {
      color: $ascent;
    }

    &.active {
      color: $ascent;
    }
  }
}
</style>
