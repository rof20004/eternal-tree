<template>
  <div class="row justify-center text-center">
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
</template>

<script>
export default {
  name: 'ChapterText',

  props: {
    chapter: {
      type: Object,
      required: true
    }
  }
}
</script>
