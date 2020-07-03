 <template>
  <q-page class="flex content-center q-pa-md">
    <div class="row fit q-gutter-xl wrap">
      <div class="col-12 col-md-5">
        <q-img src="~assets/landing_page.svg"></q-img>
      </div>

      <div class="col-12 col-md-auto">
        <q-separator
          vertical
          spaced
          class="full-height"
        />
      </div>

      <div class="col-12 col-md-5 desktop-only">
        <h1 style="color: #3ECC64;"><b>Eternal Tree</b></h1>
        <h5><em>Bem vindo ao sistema de leitura online gamificado, onde aprender e se divertir são os únicos objetivos</em> &#x1F92A;</h5>

        <q-btn
          outline
          style="color: goldenrod;"
          size="20px"
          label="Começar"
          @click="signIn"
        ></q-btn>
      </div>

      <div class="col-12 col-md-5 mobile-only">
        <div class="text-h4">Eternal Tree</div>
        <div class="text-body1 q-mb-md"><em>Bem vindo ao sistema de leitura online gamificado, onde aprender e se divertir são os únicos objetivos</em> &#x1F92A;</div>

        <q-btn
          outline
          style="color: goldenrod;"
          size="20px"
          class="full-width"
          label="Começar"
          @click="signIn"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LandingPage',

  methods: {
    async signIn () {
      this.$router.replace('/home')
    }
  }
}
</script>
