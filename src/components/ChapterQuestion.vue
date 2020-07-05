<template>
  <div class="row justify-center text-center">
    <div class="col-10 col-md-12">
      <h3><u>Desafio - {{ chapter.title }}</u></h3>
    </div>

    <div class="col-10 col-md-8">
      <p
        v-for="question in questions"
        :key="question.id"
        style="font-size: 22px;text-align: justify;"
      >

        {{ question.ask }}

        <ul style="list-style-type: none;">
          <li
            v-for="(option, index) in question.options"
            :key="index"
          >
            <q-radio
              v-model="choice"
              :val="`${question.id}${index}`"
              :label="option"
            />
          </li>
        </ul>
      </p>
    </div>

    <div class="col-10 col-md-8 q-gutter-xl">
      <q-btn
        label="Enviar"
        color="green"
        :disabled="choice.length === 0"
        @click="checkAnswer"
      ></q-btn>

      <q-btn
        label="Voltar"
        color="blue"
        @click="$router.go(-1)"
      ></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChapterQuestion',

  props: {
    chapter: {
      type: Object,
      required: true
    },

    questions: {
      props: Array,
      required: true
    }
  },

  data () {
    return {
      choice: []
    }
  },

  methods: {
    async checkAnswer () {
      try {
        const questionId = parseInt(this.choice[0])
        const position = parseInt(this.choice[1])

        const question = this.questions.find(q => q.id === questionId)
        const ok = question.correct_answer_position === position
        if (ok) {
          this.$root.$emit('showInfo', `Parabéns, você acertou a questão e ganhou ${question.points} pontos`)
          this.computePoints(question.points)
          return
        }

        throw Error('Infelizmente você não acertou, tente novamente!')
      } catch (error) {
        this.$root.$emit('showError', error)
      }
    },

    async computePoints (points) {
      try {
        const doc = await this.$pouchdb.get('points')
        const total = doc.value + points

        await this.$pouchdb.put({ _id: 'points', _rev: doc._rev, value: total })

        this.$router.push('/books')
      } catch (error) {
        if (error.status === 404) {
          await this.$pouchdb.put({ _id: 'points', value: points })
          this.$router.push('/books')
          return
        }

        throw error
      }
    }
  }
}
</script>
