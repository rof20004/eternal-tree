<template>
  <q-page
    class="flex"
    v-if="chapter"
  >
    <div class="column fit items-center">
      <div class="col-8">
        <h3><u>{{ chapter.title }}</u></h3>
      </div>

      <div class="row justify-center">
        <div class="col-10 col-md-8">
          <p
            v-for="paragraph in chapter.paragraphs"
            :key="paragraph.id"
            style="text-indent: 30px;font-size: 22px;text-align: justify;"
          >

            {{ paragraph.content }}

            <ul v-if="paragraph.talks && paragraph.talks.length > 0">
              <li
                v-for="(talk, index) in paragraph.talks"
                :key="index"
                style="text-align: left;"
              >{{ talk }}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Books',

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
    }
  },

  mounted () {
    this.loadChapterContent(this.$route.params.bookId, this.$route.params.chapterId)
  }
}
</script>
