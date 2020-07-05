<template>
  <q-page class="flex">
    <div
      class="column fit"
      v-if="books && books.length > 0"
    >
      <q-list
        bordered
        separator
      >
        <q-item
          clickable
          v-ripple
          v-for="book in books"
          :key="book._id"
          :to="`/books/${book._id}`"
        >
          <q-item-section avatar>
            <q-img
              :src="book.icon"
              height="100px"
              width="140px"
              class="rounded-borders"
            ></q-img>
          </q-item-section>
          <q-item-section no-wrap><b style="font-size: 24px;color: green;">{{ book.name }}</b></q-item-section>
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
      books: []
    }
  },

  methods: {
    async loadBooks () {
      try {
        const book = await this.$pouchdb.get('1593806386726')
        this.books.push(book)
      } catch (error) {
        this.$root.$emit('showError', error)
      }
    }
  },

  mounted () {
    this.loadBooks()
  }
}
</script>
