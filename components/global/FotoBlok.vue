<template>
  <div class="image-block" :class="{reverse}" :style="`background-color: #${ozadje};`">
    <div class="photo" :style="`background-image: url('/images/blocks/${foto}'); background-position: center ${position}`" />
    <div class="content">
      <div class="icon mb-2">
        <img :src="`/icons/${ikona}.svg`" :alt="`Ikona ${ikona}`">
      </div>
      <div class="text-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    ikona: {
      default: 'list',
      type: String
    },
    foto: {
      default: '',
      type: String
    },
    position: {
      default: 'center',
      type: String
    },
    ozadje: {
      default: 'f1f2f2',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/variables';

.image-block {
  @include breakpoint(medium) {
    display: flex;
    min-height: 900px;

    .photo,
    .content {
      flex-basis: 50%;
    }
  }
}

.photo {
  background-color: #fff;
  background-size: cover;
  background-position: center bottom;
  min-height: 400px;
}

.content {
  align-self: center;
  justify-self: center;
  padding: 2rem 1rem;

  @include breakpoint(medium) {
    padding: 4rem;

    .text-container {
      max-width: 550px;
    }
  }

  .povezava {
    margin-top: 1rem;
  }
}

.icon img {
  display: block;
  margin: 0 auto;
}

.image-block.reverse {
  flex-direction: row-reverse;
}
</style>
