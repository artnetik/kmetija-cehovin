<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img
          src="/images/vinogradi/leskovca.svg"
          alt="Icon for Lescovca vineyard"
        >
        <h2>{{ leskovca.name }}</h2>
      </div>
      <h3>
        nizka lega, <br>
        ki daje vinu <br>umirjenost
      </h3>
    </div>

    <p>{{ leskovca.mainText }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      leskovca: {
        name: 'Leskovca',
        shortText: 'nizka lega, ki daje vinu umirjenost',
        mainText: `Vinograd, ki je del Vipavske Doline. Lega sever, jug. Na
                        severu Gora, na jugu brejski griči, vmes pa reka Vipava.
                        Nižina daje cabernet sauvignonu umirjenost, rodovitna zemlja
                        pa bujnost in obilen pridelek, ki ga s prisilno vzgojo
                        omejujemo. Vino je sveže z vonjem gozdnih sadežev, z noto
                        Sladkih začimb (vanilija, cimet), ki s staranjem pridobi okus
                        oreščkov in prave kave.`
      }
    }
  }
}
</script>
