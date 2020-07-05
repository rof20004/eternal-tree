<template>
  <q-page
    class="flex"
    v-if="questions && questions.length > 0"
  >
    <div class="column fit items-center">
      <ChapterQuestion
        :chapter="chapter"
        :questions="questions"
      />
    </div>
  </q-page>
</template>

<script>
import ChapterQuestion from 'components/ChapterQuestion'

export default {
  name: 'ChapterChallenges',

  components: {
    ChapterQuestion
  },

  data () {
    return {
      chapter: null,
      questions: []
    }
  },

  methods: {
    async loadChapterChallenges (bookId, chapterId) {
      try {
        chapterId = parseInt(chapterId)

        const book = await this.$pouchdb.get(bookId)

        this.chapter = book.chapters.find(c => c.id === chapterId)

        const challenge = book.challenges.find(c => c.chapter_id === chapterId)

        this.questions = challenge.questions
      } catch (error) {
        this.$root.$emit('showError', error)
      }
    }
  },

  mounted () {
    this.loadChapterChallenges(this.$route.params.bookId, this.$route.params.chapterId)
  }
}
</script>
