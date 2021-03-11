<template>
  <div>
    <Menu />
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '~assets/styles/mixins';
@import '~assets/styles/variables';
@import '~assets/styles/buttons';
@import '~assets/styles/components';

html {
  box-sizing: border-box;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  text-size-adjust: 100%;
  word-spacing: 1px;
}

body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 76rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
