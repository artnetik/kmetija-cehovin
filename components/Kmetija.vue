<template>
  <div id="kmetija" class="kmetija">
    <Title>Kmetija <template v-slot:subtitle>Pri nas ste vedno dobrodošli</template></Title>
    <div class="foto" />
    <div class="text-container mt-4">
      <p>Pri svoji dejavnosti se trudimo ohranjati integrirano in ekološko pridelavo. Spoštujemo pristno in čisto naravno okolje, v katerem živimo in pridelujemo naše pridelke. </p>
      <p>V tridesetih letih skupne poti smo ustvarili domačijo, kamor se vsak rad vrača. Kjer se družimo, potožimo, nasmejemo in delamo. Ustvarjamo nove zgodbe in doživetja. S prijatelji si delimo izkušnje, kulinarične in poslovne. Druženje nas bogati in osrečuje.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kmetija {
  padding: 4rem 0 0;
}

.foto {
  background: url('/images/kmetija.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: 2rem;
  min-height: 60vh;
}
</style>
