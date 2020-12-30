<template lang="html">
  <div :class="['social-links', color ]">
    <a
      v-for="link in social"
      :key="link.id"
      rel="noreferrer"
      :href="link.url"
      :title="`Kmetija Čehovin na ${link.network}`"
      target="_blank"
    >
      <img :src="`/images/social/${link.network}.svg`" :alt="link.network" :class="`icon-color ${link.network}`">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  },
  data () {
    return {
      social: [
        { network: 'instagram', url: 'https://www.instagram.com/anabellawines/' },
        { network: 'facebook', url: 'https://www.facebook.com/19AnaBella80/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/variables';

.social-links {
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  margin-bottom: 2rem;

  a {
    align-items: center;
    background: $secondary;
    border-radius: 60px;
    display: flex;
    height: 42px;
    justify-content: center;
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding: 5px 2px;
    width: 42px;

    svg {
      fill: $white;
    }

    .icon-color {
      max-height: 18px;
    }

    &:hover {
      background: $ascent;
    }
  }
}
</style>
