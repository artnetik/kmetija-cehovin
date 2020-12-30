<template>
  <div>
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
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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

.text-container {
  color: $secondary;
  margin-left: auto;
  margin-right: auto;
  max-width: 705px;
  padding: 1rem 1.5rem;
  padding-bottom: 3rem;
  text-align: center;

  @include breakpoint(medium) {
    padding: 1rem;
  }

  p {
    font-size: 16px;
    font-family:
      'Courier Prime',
      monospace;
    line-height: 1.5em;
    margin-bottom: 1rem;

    @include breakpoint(medium) {
      font-size: 18px;
    }
  }
}
</style>
