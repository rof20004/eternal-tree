 <template>
  <q-page class="flex flex-center content-start q-pa-md">
    <div class="column fit">
      <div class="col">

        <div class="row text-center">
          <div class="col">
            <h6 class="text-h6 text-grey">ACESSO AO SISTEMA</h6>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4 offset-md-4">
            <q-form
              @submit="onSubmit"
              class="q-gutter-md"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
            >
              <q-input
                filled
                v-model="username"
                label="Usuário"
                :rules="[
                  val => val.length > 0 || 'Informe seu login'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                filled
                type="password"
                v-model="password"
                label="Senha"
                :rules="[
                  val => val.length > 0 || 'Informe sua senha'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

              <div>
                <q-btn
                  label="Acessar"
                  type="submit"
                  color="yellow"
                  class="full-width text-black no-shadow"
                />
              </div>
            </q-form>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      username: '',
      password: '',
      usuarios: [],
      usuariosFiltered: []
    }
  },

  methods: {
    async onSubmit () {
      try {
        this.$q.loading.show({ delay: 100 })
        // await this.$axios.post(`${process.env.API}/login`, { email: this.username, password: this.password })
        this.usuario = { username: this.username, password: this.password }
        this.$store.commit('auth/setUser', this.usuario)
        this.$router.replace('/')
      } catch (error) {
        this.$root.$emit('showError', error)
      } finally {
        this.$q.loading.hide()
      }
    }
  }
}
</script>
