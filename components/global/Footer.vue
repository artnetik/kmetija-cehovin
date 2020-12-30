<template>
  <div class="footer">
    <div class="container">
      <div class="povezave">
        <n-link to="/">
          <img src="/images/cehovin-logo-grey.svg" alt="Kmetija Čehovin">
        </n-link>
        <a href="https://ana-bella.si" target="_blank" rel="noopener">
          <img src="/images/ana-bella-logo-grey.svg" alt="Ana Bella">
        </a>
      </div>
      <div class="partners">
        <div class="logo">
          <img src="/images/PRP-LEADER-EU-SLO.jpg" alt="PRP Leader EU SLO">
        </div>
        <div class="logo">
          <img src="/images/regionalni-razvoj.jpg" alt="Regionialni razvoj">
        </div>
        <div class="logo ml-1">
          <div class="social">
            <div class="mb-1">
              Sledite nam na:
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div class="copyright">
        Kmetija Čehovin &copy; 2020 Vse pravice pridržane
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.footer {
  color: rgba($secondary, 0.8);
  font-family: 'Courier Prime', monospace;
  padding: 3rem 0;
  text-align: center;
}

.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;

  .logo {
    height: 80px;

    img {
      height: 80px;
      max-width: 100%;
    }
  }
}

.povezave {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  a {
    margin: 10px 2rem;
  }
}

.copyright {
  font-size: 15px;
  margin-bottom: 3rem;
}
</style>
