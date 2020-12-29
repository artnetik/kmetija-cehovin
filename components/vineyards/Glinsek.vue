<template>
  <div class="vinograd">
    <div class="main">
      <div class="icon">
        <img
          src="/images/vinogradi/glinsek.svg"
          alt="Icon for Glinsek vineyard"
        >
        <h2>{{ glinsek.name }}</h2>
      </div>
      <h3>
        najvišji vinograd,<br>
        s pogledi v Braniško<br>
        in Vipavsko dolino.
      </h3>
    </div>
    <p>
      {{ glinsek.mainText }}
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      glinsek: {
        name: 'Glinšek',
        shortText: 'najvišji vinograd, s pogledi v Braniško in Vipavsko dolino',
        mainText: `Najvišje ležeči vinograd na našem posestvu, s 300 m nadmorske
                    Višine ima pogled na južno, braniško in vipavsko dolino.
                    Vinograd je trenutno v obnovi. Vanj bomo posadili avtohtono
                    Sorto pinelo in malvazijo. Tu je zemlja glinena z ostanki
                    Rdeče zemlje in laporja. Z Glinka je le streljaj do najvišje
                    Ležeče vasi Sveti Martin, ki spada v krajevno skupnost Brje.
`
      }
    }
  }
}
</script>
