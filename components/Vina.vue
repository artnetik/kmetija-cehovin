<template>
  <div id="vina" class="vina">
    <Title>
      Vina
      <template v-slot:subtitle>Naše vinske lepotice</template>
    </Title>

    <div class="container">
      <div class="buteljke">
        <div
          v-for="vino in vina"
          :key="vino.id"
          class="buteljka"
        >
          <div class="slika">
            <img :src="vino.slika" :alt="vino.sorta">
          </div>
          <div class="sorta" v-text="vino.sorta" />
        </div>
      </div>
    </div>

    <div class="text-container">
      <div class="text-center">
        <a v-scroll-to="'#kontakt'" href="#kontakt" class="btn outlined centered mb-2">naročilo</a>
      </div>
      <p>Pridelujemo vrhunska stekleničena vina: <strong>barbera</strong>, <strong>chardonnay</strong>, <strong>sauvignon</strong>, bele in rdeče zvrsti. Grozdje je <strong>obrano ročno</strong>, stiskanje grozdja poteka hitro s <strong>pnevmatsko prešo</strong>. Mošt je hlajen, da se ohranijo vsi aduti, ki jih posamezna sorta premore.</p>
      <p>Rdeče sorte maceriramo od 5 do 8 dni, odvisno od sorte in letnika. Na kmetiji težimo k čim boljši kakovosti; v vinograde in nasade vlagamo veliko časa in truda. Želimo, da bodo naši izdelki butični, zato ohranjamo vinograde z najboljšo lego.</p>
      <p>Pri pridelavi vina dajemo prednost avtohtonim vinskih sortam, ki tu že od nekdaj najbolje uspevajo.</p>
    </div>

    <div class="foto mt-2">
      <img src="/images/vinske-dekline.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vina: [
        { id: 1, sorta: 'cabernet sauvignon', slika: '/images/cabernet-sauvignon.jpg' },
        { id: 2, sorta: 'malvazija', slika: '/images/malvazija.jpg' },
        { id: 3, sorta: 'rebula', slika: '/images/rebula.jpg' },
        { id: 4, sorta: 'beli pinot', slika: '/images/beli-pinot.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';

.vina {
  padding: 2rem 0;

  @include breakpoint(medium) {
    padding: 4rem 0;
  }
}

.foto {
  position: relative;

  img {
    width: 100%;
  }
}

.buteljke {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.buteljka {
  flex: 0 1 50%;
  padding: 0 1rem;
  text-align: center;

  @include breakpoint(medium) {
    flex: 0 1 25%;
  }

  .sorta {
    font-family:
      'Courier Prime',
      monospace;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
  }

  .slika {
    img {
      max-width: 200px;
    }
  }
}
</style>
