<template>
  <div :class="['text-container', 'responsive-margin', { levo }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    levo: {
      default: false,
      type: Boolean
    },
    novica: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/mixins';
@import '~assets/styles/variables';
@import '~assets/styles/buttons';
@import '~assets/styles/components';

.text-container {
  color: $secondary;
  margin-left: auto;
  margin-right: auto;
  max-width: 620px;
  padding: 1rem 1.5rem;
  text-align: center;

  .post & {
    max-width: 720px;
  }

  @include breakpoint(medium) {
    padding: 1rem;
  }

  &.levo {
    text-align: left;
  }

  p,
  li {
    font-size: 16px;
    line-height: 1.5em;
    margin-bottom: 1rem;

    @include breakpoint(medium) {
      font-size: 18px;
    }
  }

  a {
    color: $ascent;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.responsive-margin {
  margin-top: 2rem;
  margin-bottom: 2rem;

  @include breakpoint(medium) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
}

</style>
