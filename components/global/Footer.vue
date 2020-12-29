<template>
  <div class="footer">
    <div class="container">
      <div class="social">
        <p>Sledite nam na:</p>
        <SocialLinks />
      </div>

      <div class="partners">
        <div class="logo">
          <img src="/images/PRP-LEADER-EU-SLO.jpg">
        </div>
        <div class="logo">
          <img src="/images/regionalni-razvoj.jpg">
        </div>
      </div>
      <div class="copyright">
        Kmetija Čehovin &copy; 2020 Vse pravice pridržane
      </div>
      <a v-scroll-to="'#zgodba'" href="#zgodba">
        <img width="50" src="/images/tit.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.footer {
  color: rgba($base, 0.8);
  font-family:
    'Courier Prime',
    monospace;
  padding: 3rem 0;
  text-align: center;
}

.partners {
  display: flex;
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

.copyright {
  font-size: 15px;
  margin-bottom: 3rem;
}
</style>
