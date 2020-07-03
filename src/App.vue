<template>
  <div id="q-app">
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="in-out"
    >
      <router-view key="app" />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    showError (error) {
      let message = 'Ocorreu um erro ao realizar a operação'
      if (error && error.response && error.response.data && error.response.data.message) {
        message = error.response.data.message
      } else if (error && error.error && error.error.message) {
        message = error.error.message
      } else if (error && error.message) {
        message = error.message
      }

      this.notifyError(message)
    },

    showInfo (message) {
      this.notifyInfo(message)
    },

    notifyError (message) {
      this.$q.notify({
        timeout: 10000,
        message: message,
        actions: [
          { label: 'Fechar', color: 'yellow' }
        ]
      })
    },

    notifyInfo (message) {
      this.$q.notify({
        position: 'bottom',
        timeout: 10000,
        textColor: 'white',
        color: 'blue',
        message: message,
        actions: [{ icon: 'close', color: 'white' }]
      })
    }
  },

  created () {
    this.$root.$on('showError', error => this.showError(error))
    this.$root.$on('showInfo', message => this.showInfo(message))
  }
}
</script>
