<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img
          src="/images/vinogradi/rebisce.svg"
          alt="Icon for Rebisce vineyard"
        >
        <h2>{{ rebisce.name }}</h2>
      </div>

      <h3>
        {{ rebisce.shortText }}
      </h3>
    </div>
    <p>{{ rebisce.mainText }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rebisce: {
        name: 'Rebišče',
        shortText: 'strme terase, ki imajo 40% naklona',
        mainText: `Rebišče je vinograd, ki ima severno lego. Strme terase, ki imajo 40%
                    naklona, se spuščajo proti reki Vipavi. Vinograd je obsijan od
                    Jutranjega sonca, ki vzide izopod nanoške planote, do poznega večera,
                    ko se sonce spusti za Sabotinom. Močna burja, pozimi mrzel zrak iz
                    doline in poletna vročina, ki se upre v pobočje, daje trti beli pinot
                    In sauvignon izjemno karakteristiko. Vino je bogato s cvetličnimi in
                    sadnimi aromami. Sveže in iskrivo, ki v kozarcu podaljšuje užitek, da
                    Ga vedno znova zavrtimo, vonjamo in okušamo.
                    `
      }
    }
  }
}
</script>
