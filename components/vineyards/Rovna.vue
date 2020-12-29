<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img
          src="/images/vinogradi/rovna.svg"
          alt="Icon for Rovna vineyard"
        >
        <h2>{{ rovna.name }}</h2>
      </div>
      <h3>
        lapornata tla, <br>
        pomesana z ilovnato<br>
        zemljo
      </h3>
    </div>
    <p>{{ rovna.mainText }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rovna: {
        name: 'Rovna',
        shortText: `lapornata tla,
        pomesana z ilovnato
        zemljo`,
        mainText: `Že samo ime pove, da gre za ravninski svet. Vinograd leži v bližini
                    Domačije, smer vzhod - zahod. Lapornata tla pomešana z ilovnato zemljo
                    dajeta naši malvaziji bogato strukturo. Vino je bogato z aromami in
                    pikantnostjo, ki vino ohranja dolgo časa sveže. Čeprav je bila ta
                    Sorta nekoč zapostavljena, zaradi velikega pridelka in posledično
                    slabše kakovosti, je danes sprejeta in priljubljena sorta med vinskimi
                    ljubitelji. Da je res tako, se prepričajte v naši kleti, kjer vam bomo
                    z veseljem postregli.
                    `
      }
    }
  }
}
</script>
