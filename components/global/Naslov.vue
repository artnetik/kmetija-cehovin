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

<style lang="css" scoped>
.section-title {
  display: inline-block;
  font-family: 'Caveat Brush', cursive;
  font-size: 46px;
  font-weight: normal;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
}
</style>
