<template>
  <q-page
    class="flex"
    v-if="chapter"
  >
    <div class="column fit items-center">
      <ChapterText :chapter="chapter" />
    </div>

    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-fab
        color="amber"
        text-color="black"
        icon="keyboard_arrow_left"
        direction="left"
      >
        <q-fab-action
          color="amber"
          text-color="black"
          @click="toChallenges"
          icon="games"
          label="Desafios"
        />
        <q-fab-action
          color="amber"
          text-color="black"
          @click="$router.go(-1)"
          icon="keyboard_return"
          label="Voltar"
        />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import ChapterText from 'components/ChapterText'

export default {
  name: 'ChapterContent',

  components: {
    ChapterText
  },

  data () {
    return {
      chapter: null
    }
  },

  methods: {
    async loadChapterContent (bookId, chapterId) {
      try {
        const book = await this.$pouchdb.get(bookId)
        this.chapter = book.chapters.find(c => c.id === parseInt(chapterId))
      } catch (error) {
        this.$root.$emit('showError', error)
      }
    },

    toChallenges () {
      this.$router.push(`/books/${this.$route.params.bookId}/chapters/${this.$route.params.chapterId}/challenges`)
    }
  },

  mounted () {
    this.loadChapterContent(this.$route.params.bookId, this.$route.params.chapterId)
  }
}
</script>
