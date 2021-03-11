<template>
  <div class="text-center">
    <h2 class="section-title">
      <slot />
    </h2>
    <div class="subtitle">
      <slot name="subtitle" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/mixins';

.section-title {
  display: inline-block;
  font-family: 'Caveat Brush', cursive;
  font-size: 38px;
  font-weight: normal;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
  color: $secondary;
  line-height: 0.9;

  @include breakpoint(medium) {
    font-size: 46px;
  }
}
</style>
