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
          v-for="book in books"
          :key="book.doc._id"
          :to="`/books/${book.doc._id}`"
        >
          <q-item-section avatar>
            <q-img
              :src="book.doc.icon"
              height="100px"
              width="140px"
              class="rounded-borders"
            ></q-img>
          </q-item-section>
          <q-item-section no-wrap><b style="font-size: 24px;color: green;">{{ book.doc.name }}</b></q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Books',

  computed: {
    books () {
      return this.$store.getters['books/list']
    }
  }
}
</script>
