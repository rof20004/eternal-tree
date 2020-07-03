<template>
  <q-page class="flex">
    <div class="column fit">
      <q-list
        bordered
        separator
      >
        <q-item
          clickable
          v-ripple
          v-for="chapter in chapters"
          :key="chapter.id"
          :to="`/books/${$route.params.bookId}/chapters/${chapter.id}`"
        >
          <q-item-section no-wrap><b style="font-size: 24px;color: green;">Capítulo {{ chapter.id }}</b></q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Books',

  data () {
    return {
      chapters: []
    }
  },

  computed: {
    books () {
      return this.$store.getters['books/list']
    }
  },

  methods: {
    async loadChapters (bookId) {
      try {
        const book = await this.$pouchdb.get('1593806386726')
        this.chapters = book.chapters
      } catch (error) {
        this.$root.$emit('showError', error)
      }
    }
  },

  mounted () {
    this.loadChapters(this.$route.params.bookId)
  }
}
</script>
