 <template>
  <q-page class="flex q-pa-md">
    <div class="col-md-6">
      <img src="~assets/landing_page.svg">
    </div>

    <q-separator
      vertical
      spaced
    />

    <div class="col-md-6">
      <h1>Hello</h1>
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
