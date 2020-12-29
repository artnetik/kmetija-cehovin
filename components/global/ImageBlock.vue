<template>
  <div class="image-block" :class="{reverse}" :style="`background-color: #${bg};`">
    <div class="photo" :style="`background-image: url('/images/blocks/${photo}')`" />
    <div class="content">
      <div class="icon mb-2">
        <img :src="`/icons/${icon}`" :alt="title">
      </div>
      <Naslov>{{ title }}</Naslov>
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
    title: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    photo: {
      default: '',
      type: String
    },
    bg: {
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
}

.content {
  align-self: center;
  justify-self: center;
  color: $base;
  padding: 1rem;

  @include breakpoint(medium) {
    padding: 4rem;

    .text-container {
      max-width: 500px;
    }
  }
}

.icon img {
  display: block;
  margin: 0 auto;
}

.text-container {
  color: $text;
}

.image-block.reverse {
  flex-direction: row-reverse;
}
</style>
