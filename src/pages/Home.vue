<template>
  <q-page class="flex content-center q-pa-md">
    <div class="column fit items-center">
      <div class="row">
        <div class="col-12">
          <h4>Total de Pontos</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h2>{{ points }} pts</h2>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      points: 0
    }
  },

  methods: {
    async loadPoints () {
      try {
        const doc = await this.$pouchdb.get('points')
        if (doc) {
          this.points = doc.value
        }
      } catch (error) {
        if (!error.status === 404) {
          this.$root.$emit('showError', error)
        }
      }
    }
  },

  mounted () {
    this.loadPoints()
  }
}
</script>
